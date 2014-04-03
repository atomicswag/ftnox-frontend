var util = require("./util");

/*
    Usage:

    breadmap = Breadmap({
        "home":         {display:"Home",         parent:null,   path:""},
        "account":      {display:"My Account",   parent:"home", path:"#account"},
        "exchange":     {display:"Exchange",     parent:"home", path:"#exchange"},
    });

    var breadcrumbs = breadmap.get("home");
*/
function Breadmap(items) {
    var breadmap = util.newObject(Breadmap);
    breadmap.items = items;
    return breadmap;
}
Breadmap.get = function(name, last) {
    var breadmap = this;
    var breadcrumbs = [];
    do { breadcrumbs.unshift(breadmap[name]);
    } while (name = breadmap.items[name].parent);
    if (last) { breadcrumbs.push(last); }
    return breadcrumbs;
}

module.exports = Breadmap;
