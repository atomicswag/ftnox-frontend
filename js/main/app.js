var util = require("./util");
var tmpl = require("./templates");
var user = require("./user");

function App() {
    var app = util.newObject(App);
    app.user = null;
    app.kvMap = {};
    app.router = null;
    app.eventListeners = {};
    app.eventListenersByGroup = {};
    app.paused = false; // for debugging, pauses interval timeouts.
    return app;
}

App.init = function() {
    var app = this;
    var userData = localStorage["user"];
    if (userData) {
        app.login(JSON.parse(userData));
        // NOTE: fetching the balance happens in main/account.js,
        // upon listening to "DID_LOGIN"
    }
    app.renderLayout();
    app.emit("DID_APP_INIT");
}

//////////// USER AUTH
//////////// USER AUTH

App.login = function(userData) {
    var app = this;
    console.log("Logged in as "+userData.email);
    localStorage["user"] = JSON.stringify(userData);
    app.user = user.User(userData);
    app.renderLayout()
    app.emit("DID_LOGIN", app.user);
}

App.logout = function() {
    var app = this;
    console.log("Logged out");
    delete localStorage["user"];
    app.user = null;
    app.renderLayout()
    app.emit("DID_LOGOUT");
}

//////////// EVENT HANDLING
//////////// EVENT HANDLING

App.addListener = function(eventName, listener, group) {
    var app = this;
    if (!!group) {
        var gid = util.objId(group);
        if (!!listener.__groupId || !!listener.__eventName) {
            throw "App.addListener doesn't yet support re-using listeners";
        } else {
            listener.__groupId = gid;
            listener.__eventName = eventName;
        }
        util.appendAtKey(app.eventListenersByGroup, gid, listener);
    }
    util.appendAtKey(app.eventListeners, eventName, listener);
    return listener;
}

App.addListenerOnce = function(eventName, listener, group) {
    var app = this;
    var onceListener = function() {
        var res = listener.call(this, arguments);
        app.removeListener(eventName, onceListener);
        return res;
    }
    app.addListener(eventName, onceListener, group);
    return onceListener;
}

App.removeListener = function(eventName, listener) {
    var app = this;
    util.removeAtKey(app.eventListeners, eventName, listener);
    if (listener.__groupId) {
        util.removeAtKey(app.eventListenersByGroup, listener.__groupId, listener);
    }
    return listener;
}

App.removeListenersByGroup = function(group) {
    var app = this;
    var gid = util.objId(group);
    var listeners = app.eventListenersByGroup[gid];
    if (!listeners || listeners.length == 0) {
        //throw "App.removeListenersByGroup failed, no listeners for group.";
        return;
    }
    listeners.forEach(function(listener) {
        util.removeAtKey(app.eventListeners, listener.__eventName, listener);
        util.removeAtKey(app.eventListenersByGroup, listener.__eventGroup, listener);
    });
    return;
}

App.emit = function() {
    var app = this;
    var eventName = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    var listeners = app.eventListeners[eventName];
    // Call all the listeners
    (listeners||[]).forEach(function(listener) {
        //try {
            listener.apply(undefined, args);
        //} catch(err) {
        //    console.log("Emit error: ", err);
        //}
    });
}

//////////// KV STORE
//////////// KV STORE

App.getKV = function(key, cb) {
    var app = this;
    if (app.kvMap) {
        cb(app.kvMap[key]);
    } else {
        app.api("/kvstore/get", function(res) {
            app.kvMap = res.data;
            cb(app.kvMap[key]);
        });
    }
}

App.setKV = function(key, value, cb) {
    app.api("/kvstore/set", {key:key, value:value}, function(res) {
        cb();
    });
}

//////////// API
//////////// API

App.api = function(path, params, cb) {
    if (params instanceof Function) { cb = params; params = {}; }
    var app = this;
    var onSuccess = function(res, textStatus, request) {
        if (cb) { cb(null, res, textStatus, request); }
    }
    var onFailure = function(xhr) {
        switch (xhr.status) {
        case 401: // API_UNAUTHORIZED
            if (app.user) {
                app.logout();
            }
            // Unless we're already logging in...
            // NOTE: some pages might have dispatched multiple requests that require auth.
            if (!window.location.hash.startsWith("#login")) {
                var loc = window.location.pathname+window.location.hash;
                app.router.pushPath(util.makePath("/#login", {returnURL:''+loc}));
            }
            return;
        case 430: // API_REDIRECT
            window.location.href = xhr.responseJSON.data;
            return;
        }
        var err = {};
        if (xhr.responseJSON) {
            err.xhr     = xhr;
            err.res     = xhr.responseJSON;
            err.type    = xhr.responseJSON.status;
            err.message = xhr.responseJSON.data;
        } else if (xhr.status == 500) {
            err.xhr     = xhr;
            err.res     = null;
            err.type    = "ERROR";
            err.message = "Internal error";
        } else {
            err.xhr     = xhr;
            err.res     = null;
            err.type    = "NETWORK_ERROR";
            err.message = "Network error";
        }
        console.log("API error:", err);
        if (cb) { cb(err); }
    }
    //$.post("https://ftnox.com"+path, params, onSuccess, "json").fail(onFailure);
    $.ajax({
        type:       "POST",
        dataType:   "json",
        url:        "https://ftnox.com"+path,
        data:       params,
        xhrFields:  {withCredentials: true},
        success:    onSuccess,
        error:      onFailure,
    });
}

//////////// VIEW
//////////// VIEW

App.setTitle = function(title) {
    if (title) {
        title = "FtNox::"+title;
    } else {
        title = "FtNox";
    }
    document.title = title;
}

App.setContent = function(el) {
    var app = this;
    $("#app-alerts").empty();
    $("#content").empty().append(el);
    app.emit("DID_CHANGE_CONTENT");
}

App.setContentView = function(view) {
    var app = this;
    app.setContent(view.el);
    app.addListenerOnce("DID_CHANGE_CONTENT", function() {
        view.destroy();
        app.removeListenersByGroup(view);
    });
}

App.renderLayout = function() {
    var app = this;
    var content = $("#content").detach();
    var el = $(tmpl.render("layout", {user:app.user}));
    $("#main").empty().append(el);
    if (content.length > 0) {
        $("#content").replaceWith(content);
    }
}

App.renderContent = function(templateName, data) {
    var app = this;
    var el = $(tmpl.render(templateName, data));
    app.setContent(el);
    return el;
}

App.alert = function(message) {
    var app = this;
    console.log("App.alert:", message);
    if ($("#app-alerts").length > 0 && tmpl.hasTemplate("alert")) {
        var alertEl = $(tmpl.render("alert", {type:"Warning", message:message}));
        $("#app-alerts").empty().append(alertEl);
    } else {
        alert(message);
    }
}


exports.App = App;
exports.app = App();
