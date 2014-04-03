var tmpl = require("./templates");
var util = require("./util");
var app = require("./app").app;
var validate = require("./validate");

///////////// HANDLERS
///////////// HANDLERS

function loginHandler(path) {
    var returnURL = (path.params||{}).returnURL || "/";
    var requireTOTP = true;
    if (path.params.totp == '0') { requireTOTP = false; }
    var el = app.renderContent("login", {requireTOTP:requireTOTP});

    // Bind events
    el.findAndSelf("form").submit(function(e) {
        console.log("Logging in");
        e.preventDefault();
        var form = $(this);
        var email = el.find("[name='email']").val();
        var password = el.find("[name='password']").val();
        var remember = el.find("[name='remember']").prop("checked");
        var totpCode = el.find("[name='totp_code']").val();
        if (!email.match(validate.RE_EMAIL)) { return alert("Email address is invalid"); }
        form.disableInput();
        app.api("/auth/login", {'email':email, 'password':password, 'totp_code':totpCode},
            function(err, res) {
                form.enableInput();
                if (err) { app.alert(err.message); return; }
                app.login(res.data.user);
                app.router.pushPath(returnURL);
            });
        return false;
    });
}

function logoutHandler(path) {
    // Call the server to delete the httponly cookie.
    app.api("/auth/logout", {}, function(err) {
        if (err) { app.alert("Logout failed: "+err.message); return; }
        app.logout();
        app.renderContent("loggedout");
    });
}

function registerHandler(path) {
    var el = app.renderContent("register");

    // Bind events
    el.findAndSelf("form").submit(function(e) {
        console.log("Registering");
        e.preventDefault();
        var form = $(this);
        var email = el.find("[name='email']").val();
        var password  = el.find("[name='password']").val();
        var password2 = el.find("[name='password2']").val();
        if (!email.match(validate.RE_EMAIL)) { return alert("Email address is invalid"); }
        if (password != password2) { return alert("Passwords must match!"); }
        form.disableInput();
        app.api("/auth/register", {'email':email, 'password':password},
            function(err, res) {
                form.enableInput();
                if (err) { app.alert(err.message); return; }
                console.log("Registered as "+email);
                app.renderContent("register_confirmed", {email:email});
            });
        return false;
    });
}

function TOTPConfirmHandler(path) {
    var el = app.renderContent("totp_confirm");

    // Bind events
    el.findAndSelf("form").submit(function(e) {
        console.log("Submitting TOTP confirmation");
        e.preventDefault();
        var form = $(this);
        var code = el.find("[name='code']").val();
        form.disableInput();
        app.api("/auth/totp_confirm", {'code':code},
            function(err, res) {
                form.enableInput();
                if (err) { app.alert(err.message); return; }
                app.login(res.data.user);
                app.router.replacePath("/");
            });
        return false;
    });
}

module.exports = {
    loginHandler:       loginHandler,
    logoutHandler:      logoutHandler,
    registerHandler:    registerHandler,
    TOTPConfirmHandler: TOTPConfirmHandler,
};
