var util = require("./util");

// Given a path-like thing, return a parsed path object.
function resolve(pathStr) {
    if (pathStr instanceof Object && pathStr.fullPath) {
        return pathStr; // already parsed
    } else if (pathStr == "" || pathStr.startsWith("#")) {
        pathStr = window.location.pathname + pathStr;
    } else if (!pathStr.startsWith("/")) {
        pathStr = window.location.pathname + "/" + pathStr;
    }
    return util.parsePath(pathStr);
}

function Router(route) {
    var router = util.newObject(Router);
    router.init();
    router.route = route;
    return router;
}

Router.init = function() {
    var router = this;
    $(function() {
        window.onhashchange = function() {
            // pushState already happened.
            router.route(util.currentPath());
        }
    });
}

Router.pushPath = function(pathStr) {
    console.log("|--> "+pathStr);
    var router = this;
    var path = resolve(pathStr);
    history.pushState(null, {}, path.fullPath);
    router.route(path);
}

Router.replacePath = function(pathStr) {
    console.log("&--> "+pathStr);
    var router = this;
    var path = resolve(pathStr);
    history.replaceState(null, {}, path.fullPath);
    router.route(path);
}

exports.Router = Router;
