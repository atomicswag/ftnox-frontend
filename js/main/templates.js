var util = require("./util");
if (typeof Handlebars == "undefined") {
    Handlebars = require("handlebars");
}

// Renders a Handlebars template, reading from a <script> tag. Returns HTML.
function render(name, params) {
    return getTemplate(name)(params);
}

function getTemplate(name) {
    var compiled = Handlebars.templates[name+".html"];    
    if (!compiled) {
        throw "Unknown template: "+name;
    }
    return compiled;
}

function hasTemplate(name) {
    return Boolean(getTemplate(name));
}

// Usage: {{formatDate myDate format="MMM YY"}} for "Aug 2013"
Handlebars.registerHelper('formatDate', function(context, block) {
    var str = block.hash.format || "MMMM Do YYYY, h:mm:ss a";
    if (typeof context == 'number') { context = new Date(context*1000.0); }
    return moment(context).format(str);
});

// Usage: {{divide8 bitcoins}}
Handlebars.registerHelper('divide8', function(n) {
    return util.exactDivide(n, 8);
});

// Usage: {{toPrecision amount}}
Handlebars.registerHelper('toPrecision', function(n, sig) {
    return util.toPrecision(n, sig);
});

// Usage: {{ifCond something '==' other}}
Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});

// Render a partial with hash args as context.
Handlebars.registerHelper('render', function() {
    var name = arguments[0];
    var context = undefined;
    if (arguments.length == 2) {
        context = arguments[1].hash;
    } else {
        context = arguments[1];
    }
    var compiled = getTemplate(name);
    var html = compiled(context);
    return new Handlebars.SafeString(html);
});

module.exports = {
    render:         render,
    getTemplate:    getTemplate,
    hasTemplate:    hasTemplate,
};
