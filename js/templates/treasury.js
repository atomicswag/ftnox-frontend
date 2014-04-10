(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['treasury_credit_user.html'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h4 class=\"panel-title\">Credit User</h4>\n    </div>\n    <div class=\"panel-body\">\n        <form class=\"form-credit-user form-horizontal\" action=\"mpk\" method=\"POST\">\n            <input type=\"hidden\" name=\"coin\" value=\"USD\"/> \n            <div class=\"form-group\">\n                <label for=\"email\" class=\"col-xs-2 control-label\">User Email</label>\n                <div class=\"col-xs-8\">\n                    <input type=\"text\" name=\"email\" class=\"form-control\"/>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"amountFloat\" class=\"col-xs-2 control-label\">Amount</label>\n                <div class=\"col-xs-8\">\n                    <input type=\"text\" name=\"amountFloat\" class=\"form-control\"/>\n                </div>\n            </div>\n            <div class=\"form-group\"><div class=\"col-xs-8 col-xs-offset-2\">\n                <button class=\"btn btn-custom col-xs-12\" type=\"submit\">Credit USD</button>\n            </div></div>\n        </form>\n    </div>\n</div>\n";
},"useData":true});
templates['treasury_dashboard.html'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"ftnox-page-header\">\n    <div class=\"container\">\n        <h2>Treasury</h2>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"js-store-privkey\">\n        "
    + escapeExpression((helper = helpers.render || (depth0 && depth0.render) || helperMissing,helper.call(depth0, "treasury_store_privkey", {"name":"render","hash":{},"data":data})))
    + "\n    </div>\n    <div class=\"js-deposits-list\">\n    </div>\n    <div class=\"js-withdrawals-list\">\n    </div>\n    <div class=\"js-credit-user\">\n        "
    + escapeExpression((helper = helpers.render || (depth0 && depth0.render) || helperMissing,helper.call(depth0, "treasury_credit_user", {"name":"render","hash":{},"data":data})))
    + "\n    </div>\n</div>\n";
},"useData":true});
templates['treasury_deposits_list.html'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return "\n        <tr>\n            <td>"
    + escapeExpression((helper = helpers.divide8 || (depth0 && depth0.divide8) || helperMissing,helper.call(depth0, (depth0 && depth0.amount), {"name":"divide8","hash":{},"data":data})))
    + " "
    + escapeExpression(((helper = helpers.coin || (depth0 && depth0.coin)),(typeof helper === functionType ? helper.call(depth0, {"name":"coin","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = helpers.address || (depth0 && depth0.address)),(typeof helper === functionType ? helper.call(depth0, {"name":"address","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = helpers.orphaned || (depth0 && depth0.orphaned)),(typeof helper === functionType ? helper.call(depth0, {"name":"orphaned","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = helpers.credited || (depth0 && depth0.credited)),(typeof helper === functionType ? helper.call(depth0, {"name":"credited","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = helpers.blockheight || (depth0 && depth0.blockheight)),(typeof helper === functionType ? helper.call(depth0, {"name":"blockheight","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing,helper.call(depth0, (depth0 && depth0.time), {"name":"formatDate","hash":{
    'format': ("YYYY-MM-DD hh:mma")
  },"data":data})))
    + "</td>\n        </tr>\n        ";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h4 class=\"panel-title\" style=\"display: inline; margin-right: 20px;\">Deposits</h4>\n        \n    </div>\n    <div class=\"panel-body\">\n        <table class=\"table table-striped\">\n        <thead><tr>\n            <th>Amount</th>\n            <th>Address</th>\n            <th>Orphaned</th>\n            <th>Credited</th>\n            <th>Height</th>\n            <th>Time</th>\n        </tr></thead>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.deposits), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n        </table>\n    </div>\n</div>\n";
},"useData":true});
templates['treasury_store_privkey.html'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h4 class=\"panel-title\">Seed MPK</h4>\n    </div>\n    <div class=\"panel-body\">\n        <form class=\"form-store-privkey form-horizontal\" action=\"mpk\" method=\"POST\">\n            <div class=\"form-group\">\n                <label for=\"pubKey\" class=\"col-xs-2 control-label\">PubKey</label>\n                <div class=\"col-xs-8\">\n                    <input type=\"text\" name=\"pubKey\" class=\"form-control\"/>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"privKey\" class=\"col-xs-2 control-label\">PrivKey</label>\n                <div class=\"col-xs-8\">\n                    <input type=\"text\" name=\"privKey\" class=\"form-control\"/>\n                </div>\n            </div>\n            <div class=\"form-group\"><div class=\"col-xs-8 col-xs-offset-2\">\n                <button class=\"btn btn-custom col-xs-12\" type=\"submit\">Seed</button>\n            </div></div>\n        </form>\n    </div>\n</div>\n";
  },"useData":true});
templates['treasury_withdrawals_list.html'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "\n        <tr data-withdrawal-id=\""
    + escapeExpression(((helper = helpers.id || (depth0 && depth0.id)),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            <td>"
    + escapeExpression((helper = helpers.divide8 || (depth0 && depth0.divide8) || helperMissing,helper.call(depth0, (depth0 && depth0.amount), {"name":"divide8","hash":{},"data":data})))
    + " "
    + escapeExpression(((helper = helpers.coin || (depth0 && depth0.coin)),(typeof helper === functionType ? helper.call(depth0, {"name":"coin","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = helpers.userId || (depth0 && depth0.userId)),(typeof helper === functionType ? helper.call(depth0, {"name":"userId","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = helpers.wallet || (depth0 && depth0.wallet)),(typeof helper === functionType ? helper.call(depth0, {"name":"wallet","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = helpers.toAddress || (depth0 && depth0.toAddress)),(typeof helper === functionType ? helper.call(depth0, {"name":"toAddress","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = helpers.approved || (depth0 && depth0.approved)),(typeof helper === functionType ? helper.call(depth0, {"name":"approved","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression(((helper = helpers.status || (depth0 && depth0.status)),(typeof helper === functionType ? helper.call(depth0, {"name":"status","hash":{},"data":data}) : helper)))
    + "</td>\n            <td>"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing,helper.call(depth0, (depth0 && depth0.time), {"name":"formatDate","hash":{
    'format': ("YYYY-MM-DD hh:mma")
  },"data":data})))
    + "</td>\n            <td>\n                <div name=\"withdrawal-settings\" class=\"dropdown dropdown-menu-right\" style=\"float: right; position: relative;\">\n                    <a href=\"#\" class=\"dropdown-toggle btn btn-default btn-xs\" data-toggle=\"dropdown\" data-order-id=\""
    + escapeExpression(((helper = helpers.id || (depth0 && depth0.id)),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n                        <span class=\"glyphicon glyphicon-cog\"></span>\n                    </a>\n                    <ul class=\"dropdown-menu dropdown-menu-right\">\n                        ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing,helper.call(depth0, (depth0 && depth0.status), "==", 4, {"name":"ifCond","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n                    </ul>\n                </div>\n            </td>\n        </tr>\n        ";
},"2":function(depth0,helpers,partials,data) {
  return "\n                        <li><a href=\"#\" class=\"js-resume\">Resume</a></li>\n                        ";
  },"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h4 class=\"panel-title\">Withdrawals</h4>\n    </div>\n    <div class=\"panel-body\">\n        <table class=\"table table-striped\">\n        <thead><tr>\n            <th>Amount</th>\n            <th>UserId</th>\n            <th>Wallet</th>\n            <th>Address</th>\n            <th>Approved</th>\n            <th>Status</th>\n            <th>Time</th>\n            <th></th>\n        </tr></thead>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.withdrawals), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n        </table>\n    </div>\n</div>\n";
},"useData":true});
})();