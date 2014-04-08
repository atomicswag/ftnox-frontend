var util = require("./util");
var tmpl = require("./templates");
var app  = require("./app").app;
var validate = require("./validate");

// Namespace for account variables.
app.account = {
    balance: {}, // {<coin>: <amount>}
};

app.addListener("DID_LOGIN", function(user) {
    updateBalance();
})

app.addListener("DID_LOGOUT", function() {
    app.account.balance = {};
});

function updateBalance() {
    app.api("/account/balance",
        {},
        function(err, res) {
            if (err) {
                app.alert("Error updating balance: "+err.message);
                return;
            }
            var balance = res.data;
            app.account.balance = balance;
            app.emit("DID_UPDATE_BALANCE", balance);
        }
    );
}

///////////// BALANCE VIEW
///////////// BALANCE VIEW

function BalanceView() {
    var view = util.newObject(BalanceView);
    view.render();
    view.bindEvents();
    return view;
}

BalanceView.render = function() {
    var view = this;
    var el = $(tmpl.render("account_balance", {balance:app.account.balance}));
    if (view.el) {
        view.el.empty().append(el);
    } else {
        view.el = el.wrapDiv();
    }
}

BalanceView.bindEvents = function() {
    var view = this;
    view.el.on("click", "[data-coin] .js-deposit", function(e) {
        // show modal for depositing
        e.preventDefault();
        var coin = $(this).closest("[data-coin]").data("coin");
        var modal = DepositView(coin);
        modal.showModal();
    });

    view.el.on("click", "[data-coin] .js-withdraw", function(e) {
        // show modal for withdrawing
        e.preventDefault();
        var coin = $(this).closest("[data-coin]").data("coin");
        var modal = WithdrawView(coin);
        modal.showModal();
    });

    app.addListener("DID_UPDATE_BALANCE", function() {
        view.render();
    }, view);
}

BalanceView.destroy = function() {
    var view = this;
    app.removeListenersByGroup(view);
}

///////////// DEPOSIT VIEW
///////////// DEPOSIT VIEW

function DepositView(coin) {
    var view = util.newObject(DepositView);
    view.coin = coin;
    view.updateTask = undefined;
    view.render();
    view.bindEvents();
    view.updateDepositAddress();
    view.updateDeposits();
    return view;
}

DepositView.showModal = function() {
    var view = this;
    view.el.modal();
}

DepositView.alert = function(message) {
    var view = this;
    var alertEl = $(tmpl.render("alert", {type:"Warning", message:message}));
    view.el.find(".modal-alerts").empty().append(alertEl);
}

DepositView.render = function() {
    var view = this;
    view.el = $(tmpl.render("account_deposit", {coin:view.coin}));
    view.renderDepositAddress(undefined);
    view.renderDeposits(undefined);
}

DepositView.renderDepositAddress = function(address) {
    var view = this;
    view.el.find(".js-deposit-address").text(address);
}

DepositView.renderDeposits = function(deposits) {
    var view = this;
    var el = $(tmpl.render("account_deposits_list", {deposits:deposits}));
    view.el.find(".js-deposits").empty().append(el);
}

DepositView.bindEvents = function() {
    var view = this;
    // Once the modal is visible, start updating periodically.
    view.el.on("shown.bs.modal", function(e) {
        // TODO replace with sockets
        view.updateTask = setInterval(function(){
            if (app.paused) { return; }
            view.updateDeposits()
        }, 10000);
    });
    view.el.on("hidden.bs.modal", function(e) {
        view.destroy();
    });
}

DepositView.updateDepositAddress = function() {
    var view = this;
    app.api("/account/deposit_address",
        {"coin":view.coin},
        function(err, res) {
            if (err) { view.alert(err.message); return; }
            var address = res.data;
            view.renderDepositAddress(address);
        }
    );
}

DepositView.updateDeposits = function() {
    var view = this;
    app.api("/account/deposits",
        {"coin": view.coin},
        function(err, res) {
            if (err) { view.alert(err.message); return; }
            var deposits = res.data;
            view.renderDeposits(deposits);
        }
    );
}

DepositView.destroy = function() {
    var view = this;
    if (view.updateTask) { clearInterval(view.updateTask); }
    app.removeListenersByGroup(view);
}

///////////// WITHDRAW VIEW
///////////// WITHDRAW VIEW

var WITHDRAWAL_STATUS = {
    "0":    "null",
    "1":    "pending",
    "2":    "checked out",
    "3":    "complete",
    "4":    "stalled",
};

function WithdrawView(coin) {
    var view = util.newObject(WithdrawView);
    view.coin = coin;
    view.render();
    view.bindEvents();
    view.updateWithdrawals();
    return view;
}

WithdrawView.showModal = function() {
    var view = this;
    view.el.modal();
}

WithdrawView.alert = function(message) {
    var view = this;
    var alertEl = $(tmpl.render("alert", {type:"Warning", message:message}));
    view.el.find(".modal-alerts").empty().append(alertEl);
}

WithdrawView.render = function() {
    var view = this;
    view.el = $(tmpl.render("account_withdraw", {coin:view.coin, amount:":loading:"}));
    view.renderBalance(app.account.balance);
    view.renderWithdrawals(undefined);
}

WithdrawView.renderBalance = function(balance) {
    var view = this;
    if (balance) {
        var amount = balance[view.coin];
        view.el.find(".js-amount").text(util.exactDivide(amount, 8));
    }
}

WithdrawView.renderWithdrawals = function(withdrawals) {
    var view = this;
    var el = $(tmpl.render("account_withdrawals_list", {withdrawals:withdrawals}));
    view.el.find(".js-withdrawals").empty().append(el);
}

WithdrawView.bindEvents = function() {
    var view = this;

    // On submit withdrawal request
    view.el.findAndSelf("form.form-withdraw").submit(function(e) {
        console.log("Withdrawing "+view.coin);
        e.preventDefault();
        var form = $(this);
        form.disableInput();
        var coin        = view.el.find("[name='coin']").val();
        var toAddress   = view.el.find("[name='toAddress']").val();
        var amount      = view.el.find("[name='amount']").val();
        amount = util.exactMultiply(amount, 8);
        if (!toAddress.match(validate.RE_ADDRESS)) {
            form.enableInput();
            return alert("The destination is not a valid address");
        }
        app.api("/account/withdraw",
            {"coin":view.coin, "to_address":toAddress, "amount":amount},
            function(err, res) {
                form.enableInput();
                if (err) {
                    view.alert(res.data);
                    return;
                }
                view.updateWithdrawals();
            });
        return false;
    });

    app.addListener("DID_UPDATE_BALANCE", function() {
        view.renderBalance(app.account.balance);
    }, view);

    view.el.on("shown.bs.modal", function(e) {
    });

    view.el.on("hidden.bs.modal", function(e) {
        view.destroy();
    });
}

WithdrawView.updateWithdrawals = function() {
    var view = this;
    app.api("/account/withdrawals",
        {"coin":view.coin},
        function(err, res) {
            if (err) { view.alert(err.message); return; }
            var withdrawals = res.data;
            withdrawals.forEach(function(withdrawal) {
                withdrawal.statusText = WITHDRAWAL_STATUS[withdrawal.status];
            });
            view.renderWithdrawals(withdrawals);
        }
    );
}

WithdrawView.destroy = function() {
    var view = this;
    app.removeListenersByGroup(view);
}

///////////// HANDLERS
///////////// HANDLERS

function accountHandler(path) {
    var el = app.renderContent("account", {balance: app.account.balance});
    var balanceView = BalanceView();
    el.find(".js-account-balance").replaceWith(balanceView.el);
    app.api("/auth/api_keys", {}, function(err, res) {
        if (err) { app.alert(err.message); return; }
        var key = res.data[0].key;
        var roles = res.data[0].roles;
        el.find(".js-api-key").text(key);
    });
    
    app.addListenerOnce("DID_CHANGE_CONTENT", function() {
        app.removeListenersByGroup(balanceView);
        app.removeListenersByGroup(accountHandler);
    });
    updateBalance();
}

module.exports = {
    BalanceView:    BalanceView,
    DepositView:    DepositView,
    WithdrawView:   WithdrawView,
    accountHandler: accountHandler,
    updateBalance:  updateBalance,
};
