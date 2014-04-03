require("sugar");

var router = require("./router");
var app = require("./app").app;
var account = require("./account");
var exchange = require("./exchange");
var auth = require("./auth");
var beta = require("./beta");
var util = require("./util");
require("./jquery_addons");
require("templates/main");

app.router = router.Router(function(path) {
    switch(path.hashParts[0] || "") {
    case "bootstrap_test":
        app.setTitle("Bootstrap Test");
        app.renderContent("bootstrap_test");
        return;
    case "about":
        app.setTitle("About Us");
        app.renderContent("about");
        return;
    case "api":
        app.setTitle("API Docs");
        app.renderContent("api");
        return;
    case "register":
        app.setTitle("Register");
        auth.registerHandler(path);
        return;
    case "totp_confirm":
        app.setTitle("Register");
        auth.TOTPConfirmHandler(path);
        return;
    case "login":
        app.setTitle("Login");
        auth.loginHandler(path);
        return;
    case "logout":
        app.setTitle("Logout");
        auth.logoutHandler(path);
        return;
    case "market":
        //app.setTitle("Market");
        exchange.marketHandler(path);
        return;
    case "account":
        app.setTitle("Account Details");
        if (!app.user) {
            app.router.pushPath(util.makePath("/#login", {returnURL: "/#account"}));
            return;
        }
        account.accountHandler(path);
        return;
    case "":
        if (app.user) {
            app.setTitle(null);
            app.router.replacePath("/#market");
            return;
        } else {
            app.setTitle("Beta Signup");
            beta.signupHandler(path);
        }
        return;
    default:
        // TODO: error view?
        app.setTitle(null);
        app.setContent();
        app.alert("Unknown route "+path.fullPath);
        return;
    }
});

$(function() {
    app.init();
    app.router.route(util.currentPath());
});
