require("sugar");

var router = require("main/router");
var app = require("main/app").app;
var account = require("main/account");
var exchange = require("main/exchange");
var auth = require("main/auth");
var tmpl = require("main/templates");
var util = require("main/util");
require("main/jquery_addons");
require("templates/main");
require("templates/treasury");

app.router = router.Router(function(path) {
    switch(path.hashParts[0] || "") {
    case "":
        treasuryHandler(path);
        break;
    default:
        app.alert("Unknown route "+path.fullPath);
        break;
    }
});

$(function() {
    app.init();
    app.router.route(util.currentPath());
});

//////////// TREASURY HANDLER
//////////// TREASURY HANDLER

function treasuryHandler(path) {
    console.log("Showing treasury dashboard");

    var el = app.renderContent("treasury_dashboard");

    // TODO: In the future we may need to call .destroy() on these views
    var dListView = DepositsListView();
    var wListView = WithdrawalsListView();
    el.findAndSelf(".js-deposits-list").append(dListView.el);
    el.findAndSelf(".js-withdrawals-list").append(wListView.el);

    // Bind events
    el.findAndSelf("form.form-store-privkey").submit(function(e) {
        e.preventDefault();
        var pubKey  = el.findAndSelf("[name='pubKey']").val();
        var privKey = el.findAndSelf("[name='privKey']").val();
        app.api("/treasury/mpk",
            {'pub_key':pubKey, 'priv_key':privKey},
            function(err, res) {
                if (err) { app.alert(err.message); return; }
                alert("OK");
            }
        );
        return false;
    });
    el.findAndSelf("form.form-credit-user").submit(function(e) {
        e.preventDefault();
        var email = el.findAndSelf("[name='email']").val();
        var amountFloat = el.findAndSelf("[name='amountFloat']").val();
        if (amountFloat > 1000000) { alert("TODO: handle accidental large credits"); } // HACK
        app.api("/treasury/credit_user",
            {'email':email, 'amountFloat':amountFloat, 'coin':'USD'}, // HACK
            function(err, res) {
                if (err) { app.alert(err.message); return; }
                alert("User successfully credited");
            }
        );
        return false;
    });
}

//////////// WITHDRAWALS LIST VIEW
//////////// WITHDRAWALS LIST VIEW

function WithdrawalsListView() {
    var view = util.newObject(WithdrawalsListView);
    view.el = $(tmpl.render("treasury_withdrawals_list", {})).wrapDiv();
    view.bindEvents();
    view.updateWithdrawals();
    return view;
}

WithdrawalsListView.bindEvents = function() {
    var view = this;
    view.el.on("click", ".js-resume", function() {
        var tr = $(this).closest("tr");
        var withdrawalId = tr.data("withdrawalId");
        app.api("/treasury/resume_withdrawal",
            {withdrawalId: withdrawalId},
            function(err, res) {
                if (err) { app.alert(err.message); return; }
                view.updateWithdrawals();
            }
        );
    });
}

WithdrawalsListView.updateWithdrawals = function() {
    var view = this;
    app.api("/treasury/withdrawals",
        {'limit':10},
        function(err, res) {
            if (err) { app.alert(err.message); return; }
            var el = $(tmpl.render("treasury_withdrawals_list", {withdrawals:res.data}));
            view.el.empty().append(el);
        }
    );
}

WithdrawalsListView.destroy = function() {
}

//////////// DEPOSITS LIST VIEW
//////////// DEPOSITS LIST VIEW

function DepositsListView() {
    var view = util.newObject(DepositsListView);
    view.el = $(tmpl.render("treasury_deposits_list", {}));
    view.updateDeposits();
    return view;
}

DepositsListView.updateDeposits = function() {
    var view = this;
    app.api("/treasury/deposits",
        {'limit':10},
        function(err, res) {
            if (err) { app.alert(err.message); return; }
            var el = $(tmpl.render("treasury_deposits_list", {deposits:res.data}));
            view.el.replaceWith(el);
        }
    );
}

DepositsListView.destroy = function() {
}

//////////// SPENDABLE PAYMENTS LIST VIEW
//////////// SPENDABLE PAYMENTS LIST VIEW

// TODO: complete implementation.
function SpendablePaymentsListView() {
    var view = util.newObject(SpendablePaymentsListView);
    view.mpkId = undefined;
    view.coin = 'BTC';
    view.min = 0;
    view.max = 100000000 * 100000000;
    view.limit = 50;
    view.el = $(tmpl.render("treasury_spendable_payments", {}));
    return view;
}

SpendablePaymentsListView.updatePayments = function() {
    var view = this;
    app.api("/treasury/spendable_payments",
        {'mpkId':view.mpkId, 'coin':view.coin, 'min':view.min, 'max':view.max, 'limit':view.limit},
        function(err, res) {
            if (err) { app.alert(err.message); return; }
            var el = $(tmpl.render("treasury_spendable_payments_list", {deposits:res.data}));
            view.el.replaceWith(el);
        }
    );
}

SpendablePaymentsListView.destroy = function() {
}
