/* module.exports defined at bottom */
var validate = require("./validate");

// Class-like code organization.
function newObject(proto) {
    function object() {
        return this;
    }
    object.prototype = proto;
    var obj = new object();
    Object.defineProperty(obj, "name", {writable: true});
    return obj;
}

function randId(len) {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    var chars = [];
    for (var i=0; i<len; i++) {
        chars.push(possible.charAt(Math.floor(Math.random() * possible.length)))
    }
    return chars.join("");
}

function objId(obj) {
    if (obj instanceof Object) {
        if (obj.__id) {
            obj = obj.__id;
        } else {
            obj = obj.__id = randId(12);
        } 
    }
    return obj;
}

function appendAtKey(obj, key, item) {
    var items = obj[key];
    if (!items || items.length == 0) {
        obj[key] = [item];
    } else {
        items.push(item);
    }
}

function removeAtKey(obj, key, item) {
    var items = obj[key];
    if (!items || items.indexOf(item) == -1) {
        //throw "removeAtKey() failed, item doesn't exist at key in obj.";
        return;
    } else {
        var index = items.indexOf(item);
        if (index != -1) { items.pop(index); }
        if (items.length == 0) {
            delete obj[key];
        } else {
            obj[key] = items;
        }
    }
}

function half1(str, divider) {
    if (str.indexOf(divider) != -1) {
        return str.substring(0, str.indexOf(divider));
    } else {
        return str;
    }
}

function half2(str, divider) {
    if (str.indexOf(divider) != -1) {
        return str.substring(str.indexOf(divider)+divider.length);
    } else {
        return "";
    }
}

/*
    parsePath("/path1/path2#exchange/bar?foo=bar&baz") ->

    {
        fullPath:   "/path1/path2#exchange/bar?foo=bar&baz",
        pathname:   "/path1/path2",
        params:     {foo:"bar", baz:true},
        pathParts:  ["path1", "path2"],
        hash:       "#exchange/bar",
        hashParts:  ["exchange", "bar"],
    }
*/
function parsePath(pathStr) {
    if (!pathStr.startsWith("/")) { throw "Cannot parse invalid path: "+pathStr; }
    var path       = half1(pathStr, "?");
    var params     = half2(pathStr, "?");
    var paramsDict = {};
    var pathParts  = [];
    var pathname   = path;
    var hash       = "";
    var hashParts  = [];
    if (path) {
        if (path.indexOf("#") != -1) {
            pathname = half1(path, "#");
            hash     = "#"+half2(path, "#");
            hashParts = hash.substring(1).split("/");
        }
        if (pathname.substring(1).indexOf("/") != -1) {
            pathParts = pathname.substring(1).split("/");
        }
    }
    if (params) {
        var paramParts = params.split("&");
        for (var i=0; i<paramParts.length; i++) {
            var param = paramParts[i];
            if (param.indexOf("=") == -1 ) {
                paramsDict[decodeURIComponent(param)] = true;
            } else {
                var name =  half1(param, "=");
                var value = half2(param, "=");
                paramsDict[decodeURIComponent(name)] = decodeURIComponent(value);
            }
        }
    }
    return {
        fullPath:   pathStr,
        pathname:   pathname,
        pathParts:  pathParts,
        hash:       hash,
        hashParts:  hashParts,
        params:     paramsDict
    };
}

function makePath(path, params) {
    if (path instanceof Array) {
        path = path.join("/");
    }
    var paramParts = [];
    for (var name in params) {
        var value = params[name];
        if (value) {
            paramParts.push(encodeURIComponent(name)+"="+encodeURIComponent(value));
        } else {
            paramParts.push(encodeURIComponent(name));
        }
    }
    if (paramParts.length > 0) {
        path = path + "?" + paramParts.join("&");
    }
    return path;
}

function currentPath() {
    var pathStr = (location.pathname||'/')+location.hash;
    var path = parsePath(pathStr);
    return path;
}

function padZeros(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join("0") + n;
}

// "1212345678", 8 -> "12.12345678"
// "1212345600", 8 -> "12.123456"
// "123", 8 -> "0.00000123"
// "1200000000", 8 -> "123.0"
function exactDivide(n, decs) {
    var ns = Number(n).toFixed(0);
    if (!ns.match(validate.RE_INTEGER)) { return ns }
    if (ns.length > decs) {
        return ns.substring(0, ns.length-decs)+"."+ns.substring(ns.length-decs).replace(/0{1,7}$/, '');;
    } else {
        return "0."+padZeros(ns, decs).replace(/0{1,7}$/, '');;
    }
}

// The opposite of exactDivide
function exactMultiply(n, decs) {
    var ns = Number(n).toFixed(decs);
    if (!ns.match(validate.RE_FLOAT)) { return ns }
    if (ns.indexOf(".") == -1) {
        ns = ns + padZeros("", decs);
    } else {
        var l = ns.split(".")[0];
        var r = ns.split(".")[1];
        ns = l + (r+padZeros("", decs)).substring(0, decs);
    }
    return ns;
}

// Trim floating point into at most 8 decimal places
// The result is an estimate, a string
// 0.12345678901 -> "0.12345678"
// 0.12 -> "0.12"
function trimToDecs(n, decs) {
    var ns = Math.round(n * Math.pow(10, decs));
    return exactDivide(ns, decs);
}

// Like .toPrecision(), but the output is never scientific.
function toPrecision(n, sig) {
    var ns = Number(n).toPrecision(sig);
    var match = ns.match(/([1-9])\.([0-9]+)e([+-][0-9]+)/);
    if (match == null) { return ns; }
    var digits = match[1]+match[2];
    var exp = Number(match[3]);
    if (exp >= sig-1) {
        for (var i=0; i<(exp-sig+1); i++) { digits = digits + "0"; }
        return digits;
    }
    if (exp >= 0) {
        return digits.substring(0, exp+1) + "." + digits.substring(exp+1);
    }
    for (var i=0; i<(-exp-1); i++) { digits = "0" + digits; }
    return "0."+digits;
}

module.exports = {
    newObject:      newObject,
    randId:         randId,
    objId:          objId,
    appendAtKey:    appendAtKey,
    removeAtKey:    removeAtKey,
    parsePath:      parsePath,
    makePath:       makePath,
    currentPath:    currentPath,
    padZeros:       padZeros,
    exactDivide:    exactDivide,
    exactMultiply:  exactMultiply,
    trimToDecs:     trimToDecs,
    toPrecision:    toPrecision,
};
