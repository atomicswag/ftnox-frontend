var demodule = require("demodule");

function main() {
    console.log("main()");
    global = window;
    window.require = require;
    window.Handlebars = require("handlebars").Handlebars; // Bug in handlebars compilation
    require("main/main");
}

var code = demodule(
    [
        {name:"main",           path:"js/main"},
        {name:"templates/main", path:"js/templates/main.js"},
        //{name:"templates/treasury", path:"js/templates/treasury.js"}, omited for security.
        {name:"sugar",          path:"js/node_modules/sugar/release/sugar-full.development.js"},
        {name:"handlebars",     path:"js/node_modules/handlebars/dist/handlebars.js"},
    ],
    '('+main+')();',
    {minify:false}
);

console.log(code);
