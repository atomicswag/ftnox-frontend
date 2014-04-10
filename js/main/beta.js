var tmpl = require("./templates");
var util = require("./util");
var app = require("./app").app;
var validate = require("./validate");

///////////// HANDLERS
///////////// HANDLERS

function signupHandler(path) {
    var el = app.renderContent("beta");

    // Bind events
    el.findAndSelf("form").submit(function(e) {
        console.log("Beta signup...");
        e.preventDefault();

        var email =     el.find("[name='email']").val();
        var name =      el.find("[name='name']").val();
        var country =   el.find("[name='country']").val();
        var linkedin =  el.find("[name='linkedin']").val();
        var other =     el.find("[name='other']").val();

        if (!email.match(validate.RE_EMAIL)) { return alert("Email address is invalid"); }
        app.api("/beta", {'email':email, 'name':name, 'country':country, 'linkedin':linkedin, 'other':other},
            function(err, res) {
                if (err) { app.alert(err.message); return; }
                app.renderContent("beta_success", {email:email});
            });
        return false;
    });

    // TODO: make a general solution.
    el.findAndSelf("#request-invite").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#signup").offset().top
        }, 800);
        return false;
    });
}

module.exports = {
    signupHandler:  signupHandler
};
