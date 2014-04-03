/*
    Renders static templates for pages that should be static, for search engine indexing purposes etc.
*/

var fs = require("fs");
var tmpl = require("../main/templates");
require("../templates/main");

function renderPage(template, data) {
    var html = tmpl.render("api");
    html = tmpl.render("layout", {content: html});
    html = tmpl.render("static_base", {main:html});
    return html;
}

fs.writeFileSync("static/main/api.html", renderPage("api"));
