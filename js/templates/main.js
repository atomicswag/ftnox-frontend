(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about.html'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"about\">\n\n    <h2>About Us</h2>\n    <hr/>\n    <p class=\"lead\">\n        FtNox is a next generation cryptocurrency exchange done right.\n    </p>\n    <ul>\n        <li>Proof of Solvency</li>\n        <li>Cold Wallet Storage</li>\n        <li>Fastest Engine in the West</li>\n    </ul>\n\n    <br />\n\n    <h4>Contact Us</h4>\n    <address>\n        <strong>FtNox.com</strong><br/>\n        2501 Bryant St.</br>\n        San Francisco, CA 94110</br>\n        <abbr title=\"Phone\">P:</abbr> (415) 409-8733<br/>\n        <abbr title=\"Email\">E:</abbr> <a href=\"email:hello@ftnox.com\">hello@ftnox.com</a>\n    </address>\n\n</div>\n";
  },"useData":true});
templates['account.html'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return "<div class=\"account\">\n    <h2>Account</h2>\n    <hr />\n\n    <h4>Account Balance</h4>\n    "
    + escapeExpression((helper = helpers.render || (depth0 && depth0.render) || helperMissing,helper.call(depth0, "account_balance", (depth0 && depth0.balance), {"name":"render","hash":{},"data":data})))
    + "\n    <br />\n\n    \n\n    <h4>API Credentials</h4>\n    <p>\n        Your API Key: <span class=\"code js-api-key\">"
    + escapeExpression(((helper = helpers.apiKey || (depth0 && depth0.apiKey)),(typeof helper === functionType ? helper.call(depth0, {"name":"apiKey","hash":{},"data":data}) : helper)))
    + "</span>\n    </p>\n    <p>\n        Example request:\n    </p>\n    <pre>\nPOST https://ftnox.com/account/balance\nContent-Type: application/x-www-form-urlencoded\n\napi_key=<span class=\"js-api-key\">"
    + escapeExpression(((helper = helpers.apiKey || (depth0 && depth0.apiKey)),(typeof helper === functionType ? helper.call(depth0, {"name":"apiKey","hash":{},"data":data}) : helper)))
    + "</span>\n</pre>\n    <br style=\"clear: both;\"/>\n    <p>\n        Please visit the <a href=\"/#api\">API docs</a> for more information.\n    </p>\n    \n</div>\n";
},"useData":true});
templates['account_balance.html'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return "\n<tr data-coin=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <td class=\"coin\">"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n    <td class=\"amount\">"
    + escapeExpression((helper = helpers.divide8 || (depth0 && depth0.divide8) || helperMissing,helper.call(depth0, depth0, {"name":"divide8","hash":{},"data":data})))
    + "</td>\n    <td class=\"\">\n        <div name=\"coin-settings\" class=\"dropdown dropdown-menu-right\" style=\"float: right; position: relative;\">\n            <a href=\"#\" class=\"dropdown-toggle btn btn-default btn-xs\" data-toggle=\"dropdown\" data-order-id=\""
    + escapeExpression(((helper = helpers.id || (depth0 && depth0.id)),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n            </a>\n            <ul class=\"dropdown-menu dropdown-menu-right\">\n                <li><a href=\"#\" class=\"js-deposit\">Deposit "
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n                <li><a href=\"#\" class=\"js-withdraw\">Withdraw "
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n            </ul>\n        </div>\n    </td>\n</tr>\n";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<table class=\"js-account-balance table table-striped table-condensed bordered\">\n<thead><tr>\n    <th>Coin</th>\n    <th>Balance</th>\n    <th></th>\n</tr></thead>\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.balance), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n</table>\n";
},"useData":true});
templates['account_deposit.html'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return "<div class=\"modal fade\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                <h4 class=\"modal-title\">Deposit "
    + escapeExpression(((helper = helpers.coin || (depth0 && depth0.coin)),(typeof helper === functionType ? helper.call(depth0, {"name":"coin","hash":{},"data":data}) : helper)))
    + "</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"modal-alerts\"></div>\n                <p>Deposit address for "
    + escapeExpression(((helper = helpers.coin || (depth0 && depth0.coin)),(typeof helper === functionType ? helper.call(depth0, {"name":"coin","hash":{},"data":data}) : helper)))
    + ": <span class=\"js-deposit-address address\">"
    + escapeExpression(((helper = helpers.depositAddress || (depth0 && depth0.depositAddress)),(typeof helper === functionType ? helper.call(depth0, {"name":"depositAddress","hash":{},"data":data}) : helper)))
    + "</span></p>\n                <div class=\"alert alert-warning\">\n                    <strong>Warning!</strong>\n                    Do NOT deposit coins directly from your miner.\n                </div>\n                <hr />\n                <h4>All your deposits:</h4>\n                <div class=\"js-deposits\">\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
templates['account_deposits_list.html'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.deposits), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n<tr>\n    <td class=\"date\">"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing,helper.call(depth0, (depth0 && depth0.time), {"name":"formatDate","hash":{
    'format': ("YYYY-MM-DD hh:mma")
  },"data":data})))
    + "</td>\n    <td class=\"amount\">"
    + escapeExpression((helper = helpers.divide8 || (depth0 && depth0.divide8) || helperMissing,helper.call(depth0, (depth0 && depth0.amount), {"name":"divide8","hash":{},"data":data})))
    + "</td>\n    ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing,helper.call(depth0, (depth0 && depth0.confirms), "==", 0, {"name":"ifCond","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data}));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n</tr>\n";
},"3":function(depth0,helpers,partials,data) {
  return "\n    <td class=\"unconfirmed\">unconfirmed</td>\n    ";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing;
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing,helper.call(depth0, (depth0 && depth0.credited), "==", 1, {"name":"ifCond","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data}));
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  },"6":function(depth0,helpers,partials,data) {
  return "\n    <td class=\"confirmed\">confirmed</td>\n    ";
  },"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return "\n    <td class=\"confirming\">"
    + escapeExpression(((helper = helpers.confirms || (depth0 && depth0.confirms)),(typeof helper === functionType ? helper.call(depth0, {"name":"confirms","hash":{},"data":data}) : helper)))
    + "</td>\n    ";
},"10":function(depth0,helpers,partials,data) {
  return "\n<tr>\n    <td colspan=\"3\" style=\"text-align: center;\">You have no deposits</td>\n</tr>\n";
  },"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<table class=\"deposits-list table table-striped table-condensed bordered\">\n<thead><tr>\n    <th>Date</th>\n    <th>Amount</th>\n    <th>Confirmations</th>\n</tr></thead>\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.deposits), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(10, data),"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n</table>\n";
},"useData":true});
templates['account_withdraw.html'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return "<div class=\"modal fade\">\n    <div class=\"modal-dialog\" style=\"width: 700px;\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                <h4 class=\"modal-title\">Withdraw "
    + escapeExpression(((helper = helpers.coin || (depth0 && depth0.coin)),(typeof helper === functionType ? helper.call(depth0, {"name":"coin","hash":{},"data":data}) : helper)))
    + "</h4>\n            </div>\n            <form class=\"form-withdraw form-horizontal\">\n                <input name=\"coin\" type=\"hidden\" value=\""
    + escapeExpression(((helper = helpers.coin || (depth0 && depth0.coin)),(typeof helper === functionType ? helper.call(depth0, {"name":"coin","hash":{},"data":data}) : helper)))
    + "\"/>\n                <div class=\"modal-body\">\n                    <div class=\"modal-alerts\"></div>\n                    <div class=\"form-group\">\n                        <label for=\"\" class=\"col-xs-3 control-label\">Balance:</label>\n                        <div class=\"col-xs-8\">\n                            <span class=\"js-amount amount\">"
    + escapeExpression((helper = helpers.divide8 || (depth0 && depth0.divide8) || helperMissing,helper.call(depth0, (depth0 && depth0.amount), {"name":"divide8","hash":{},"data":data})))
    + "</span> &nbsp;"
    + escapeExpression(((helper = helpers.coin || (depth0 && depth0.coin)),(typeof helper === functionType ? helper.call(depth0, {"name":"coin","hash":{},"data":data}) : helper)))
    + "\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"toAddress\" class=\"col-xs-3 control-label\">To:</label>\n                        <div class=\"col-xs-8\">\n                            <input name=\"toAddress\" type=\"text\" class=\"form-control\" placeholder=\"Destination address\" required autofocus>\n                        </div>\n                    </div>\n                    <div class=\"form-group\" style=\"margin-bottom:30px;\">\n                        <label for=\"amount\" class=\"col-xs-3 control-label\">Amount:</label>\n                        <div class=\"col-xs-4\">\n                            <div class=\"input-group\">\n                                <input name=\"amount\" type=\"text\" class=\"form-control\" placeholder=\"0.00\" required>\n                                <span class=\"input-group-addon\"><small>"
    + escapeExpression(((helper = helpers.coin || (depth0 && depth0.coin)),(typeof helper === functionType ? helper.call(depth0, {"name":"coin","hash":{},"data":data}) : helper)))
    + "</small></span>\n                            </div>\n                        </div>\n                    </div>\n                    <hr />\n                    <div class=\"js-my-withdrawals\">\n                        <h4>"
    + escapeExpression(((helper = helpers.coin || (depth0 && depth0.coin)),(typeof helper === functionType ? helper.call(depth0, {"name":"coin","hash":{},"data":data}) : helper)))
    + " withdrawals:</h4>\n                        <div class=\"js-withdrawals\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    <button class=\"btn btn-primary\" type=\"submit\">Withdraw</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
templates['account_withdrawals_list.html'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.withdrawals), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return "\n<tr>\n    <td class=\"small date\">\n        "
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing,helper.call(depth0, (depth0 && depth0.time), {"name":"formatDate","hash":{
    'format': ("YYYY-MM-DD hh:mma")
  },"data":data})))
    + "<br />\n    </td>\n    <td class=\"address\">"
    + escapeExpression(((helper = helpers.toAddress || (depth0 && depth0.toAddress)),(typeof helper === functionType ? helper.call(depth0, {"name":"toAddress","hash":{},"data":data}) : helper)))
    + "</td>\n    <td class=\"amount\">"
    + escapeExpression((helper = helpers.divide8 || (depth0 && depth0.divide8) || helperMissing,helper.call(depth0, (depth0 && depth0.amount), {"name":"divide8","hash":{},"data":data})))
    + "</td>\n    <td class=\"small\">"
    + escapeExpression(((helper = helpers.statusText || (depth0 && depth0.statusText)),(typeof helper === functionType ? helper.call(depth0, {"name":"statusText","hash":{},"data":data}) : helper)))
    + "</td>\n</tr>\n";
},"4":function(depth0,helpers,partials,data) {
  return "\n<tr>\n    <td colspan=\"4\" style=\"text-align: center;\">\n        You have no withdrawals.\n    </td>\n</tr>\n";
  },"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<table class=\"withdrawals-list table table-striped table-condensed bordered\">\n<thead><tr>\n    <th>Date</th>\n    <th>To</th>\n    <th>Amount</th>\n    <th>Status</th>\n</tr></thead>\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.withdrawals), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n</table>\n";
},"useData":true});
templates['alert.html'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return "<div class=\"alert alert-warning alert-dismissable\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n    <strong>"
    + escapeExpression(((helper = helpers.type || (depth0 && depth0.type)),(typeof helper === functionType ? helper.call(depth0, {"name":"type","hash":{},"data":data}) : helper)))
    + ":</strong> "
    + escapeExpression(((helper = helpers.message || (depth0 && depth0.message)),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper)))
    + "\n</div>\n";
},"useData":true});
templates['api.html'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"api\">\n<h2>API Docs</h2>\n<hr />\n<div>\n\n\n<h3>General information</h3>\n<h4>HTTP method & parameters</h4>\n<p>\n    The server accepts all parameters in the form of <code>x-www-form-urlencoded</code> POST parameters.\n</p>\n<br />\n\n<h4>Authentication</h4>\n<p>\n    All API requests must include the <code>api_key</code> parameter. You can find them <a href=\"/#account\">here</a>.<br/>\n    In the near future, HMAC-SHA512 signatures and incrementing nonces will be used.\n</p>\n<pre>\nSample request to /account/balance:\n\nPOST https://ftnox.com/account/balance\nContent-Type: application/x-www-form-urlencoded\n\napi_key=MY_API_KEY\n</pre>\n<br />\n\n<h4>Units</h4>\n<p>\n    All units are in Satoshis (1/100000000).<br />\n    All timestamps are seconds from epoch UTC.\n</p>\n<br />\n\n\n<h3>Account API Calls</h3>\n<h4>Balance</h4>\n<pre>\nGET /account/balance\nParams: None\n\nResponse JSON:\n{\n    status: \"OK\",\n    data: {\n        \"BTC\":  10000,\n        \"DOGE\": 10000,\n        \"LTC\":  10000,\n        ...\n    }\n}\n</pre>\n<br />\n\n<h4>Deposit Address</h4>\n<pre>\nGET /account/deposit_address\nParams:\n    coin:   The type of coin, e.g. \"BTC\"\n\nResponse JSON:\n{\n    status: \"OK\",\n    data:   \"1E9jy9377qyUCjHYTeo3XPRDDLeJBku8cU\"\n}\n</pre>\n<br />\n\n<h4>List Deposits</h4>\n<pre>\nGET /account/deposits\nParams:\n    address:    Deposit address, as returned by a call to '/account/deposit_address'.\n\nResponse JSON:\n{\n    \"status\": \"OK\",\n    \"data\": [\n        {\n            \"coin\": \"BTC\",\n            \"txid\": \"e3985f8279169d572ae1b3e89d9b449e35bf2e2c8bc1262c5f648c28df059055\",\n            \"vout\": 0,\n            \"blockhash\": \"0000000000000000ac2c5fe4942a7d6baa8cb2ff6bc9932e9eb23a5f15b8e939\",\n            \"blockheight\": 289635,\n            \"address\": \"1E9jy9377qyUCjHYTeo3XPRDDLeJBku8cU\",\n            \"userId\": 1,\n            \"amount\": 500000,\n            \"scriptPk\": \"76a9149040d4a7c8deced4a8d3805f2bbbdc81b82a039288ac\",\n            \"orphaned\": 0,\n            \"credited\": 1,\n            \"confirms\": 2158,\n            \"time\": 1394332995\n        },\n        ...\n    ]\n}\n</pre>\n<br />\n\n<h4>Withdraw</h4>\n<pre>\nPOST /account/withdraw\nParams:\n    to_address: The address to send the coins to\n    coin:       The type of coin, e.g. \"BTC\"\n    amount:     The amount to withdraw in Satoshis\n\nResponse JSON:  The resulting balance. See /account/balance.\n</pre>\n<br />\n\n<h4>List Withdraws</h4>\n<pre>\nGET /account/withdrawals\nParams:\n    coin:       The type of coin, e.g. \"BTC\"\n\nResponse JSON:\n{\n    \"status\": \"OK\",\n    \"data\": [\n        {\n            \"id\": 2,\n            \"userId\": 1,\n            \"wallet\": \"main\",\n            \"coin\": \"BTC\",\n            \"toAddress\": \"1E9jy9377qyUCjHYTeo3XPRDDLeJBku8cU\",\n            \"amount\": 500000,\n            \"status\": 1,\n            \"time\": 1395037039\n        },\n        ...\n    ]\n}\n</pre>\n<br />\n\n\n<h3>Exchange API Calls</h3>\n<h4>List Markets</h4>\n<pre>\nGET /exchange/markets\n\nResponse JSON:\n{\n    \"status\": \"OK\",\n    \"data\": [\n        {\n            \"coin\": \"DOGE\",\n            \"basisCoin\": \"BTC\",\n            \"last\": \"0.0000e+00\"\n        },\n        {\n            \"coin\": \"LTC\",\n            \"basisCoin\": \"BTC\",\n            \"last\": \"0.0000e+00\"\n        },\n        ...\n    ]\n}\n</pre>\n<br />\n\n<h4>Orderbook</h4>\n<pre>\nGET /exchange/orderbook\n\nTODO: document\n</pre>\n<br />\n\n<h4>Historical Prices</h4>\n<pre>\nGET /exchange/pricelog\n\nTODO: document\n</pre>\n<br />\n\n<h4>Place Order</h4>\n<pre>\nPOST /exchange/add_order\nParams:\n    market:     The market to enter order into, e.g. \"DOGE/BTC\"\n    amount:     The amount of coins (e.g. DOGE) to buy or sell, in satoshis.\n    price:      The price of a coin (e.g. DOGE) in basis coins (e.g. BTC).\n                This is a floating point number, like 0.00000124.\n                The number is rounded to 5 significant digits.\n    order_type: \"B\" = bid, \"A\" = ask\n\nResponse JSON:\n{\n    \"status\": \"OK\",\n    \"data\": {\n        \"id\": 1,\n        ... // order data\n    }\n}\n</pre>\n<br />\n\n<h4>Cancel Order</h4>\n<pre>\nPOST /exchange/cancel_order\nParams:\n    id:         The order id, a long positive integer.\n\nResponse JSON:\n{\n    \"status\": \"OK\",\n    \"data\": \"CANCELED\"\n}\n</pre>\n<br />\n\n<h4>List Pending Orders</h4>\n<pre>\nGET /exchange/pending_orders\n\nResponse JSON:\n{\n    \"status\": \"OK\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"coin\": \"DOGE\",\n            \"basisCoin\": \"BTC\",\n            \"status\": 0,            // 0 = pending, 1 = reserved, 2 = complete, 3 = canceled\n            \"type\": \"B\",            // \"B\" = bid, \"A\" = ask\n            \"amount\": 1000000000,   // max amount of coins (e.g. DOGE) to purchase for bids, to sell for asks\n            \"basisAmount\": 100000,  // max amount of basis coins (e.g. BTC) to spend for bids, to receive for asks\n            \"filled\": 0,            // amount of coins purchased for bids, sold for asks\n            \"basisFilled\": 0        // amount of basis coins spent for bids, received for asks\n            \"basisFeeRatio\": 0,     // fee schedule, 0.001 = 0.1%\n            \"basisFee\": 0,          // max fee to pay\n            \"basisFeeFilled\": 0,    // amount of fee paid\n            \"price\": 0.0001,        // price in basis coins per coin\n            \"time\": 1395638636,\n        },\n        ...\n    ]\n}\n</pre>\n<br />\n\n</div>\n</div>\n";
},"useData":true});
templates['beta.html'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"beta\" class=\"col-xs-4 col-xs-offset-4\" style=\"margin-top: 60px;\">\n    <div class=\"panel panel-default row\">\n        <div class=\"panel-heading\">\n            <h4 class=\"panel-title\" style=\"text-align: center\">FtNox Beta Signup</h4>\n        </div>\n        <div class=\"panel-body\">\n            <p>\n                FtNox is currently in private beta.<br/>\n                Sign up below to get on the waitlist.\n            </p>\n            <hr />\n            <form class=\"form-signup form-horizontal\" action=\"/asd\" method=\"post\">\n                <input name=\"email\" type=\"text\" class=\"form-control\" placeholder=\"Email Address\" required autofocus>\n                <br />\n                <input name=\"country\" type=\"text\" class=\"form-control\" placeholder=\"Country\" required>\n                <br />\n                <input name=\"state\" type=\"text\" class=\"form-control\" placeholder=\"State / Province\" required>\n                <br />\n                <textarea name=\"other\" class=\"form-control\" placeholder=\"Altcoins of interest\"></textarea>\n                <br />\n                <button class=\"btn btn-primary col-xs-offset-7 col-xs-5\" type=\"submit\">Beta Signup</button>\n            </form>\n        </div>\n    </div>\n</div>\n";
  },"useData":true});
templates['beta_success.html'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return "<div id=\"beta\" class=\"col-xs-4 col-xs-offset-4\" style=\"margin-top: 60px;\">\n    <div class=\"panel panel-default row\">\n        <div class=\"panel-heading\">\n            <h4 class=\"panel-title\" style=\"text-align: center\">FtNox Beta Signup</h4>\n        </div>\n        <div class=\"panel-body\">\n            <p>\n                You've been added to the waitlist.<br/>\n                We'll email you at "
    + escapeExpression(((helper = helpers.email || (depth0 && depth0.email)),(typeof helper === functionType ? helper.call(depth0, {"name":"email","hash":{},"data":data}) : helper)))
    + " soon.\n            </p>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
templates['bootstrap_test.html'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"bootstrap_test\">\n<style type=\"text/css\">\n.bs-example {\n    padding: 10px;\n    margin-left: 0;\n    margin-right: 0;\n    border-style: solid;\n    border-width: 1px;\n    border-color: #444;\n    border-radius: 4px 4px 0 0;\n    box-shadow: none;\n}\n.bs-example>.dropdown>.dropdown-menu {\n    position: static;\n    display: block;\n    margin-bottom: 5px;\n}\n</style>\n\n<div id=\"about\">\n\n    <h2>Bootstrap test</h2>\n    <hr/>\n    <p class=\"lead\">\n        This is a theme test for bootstrap components\n    </p>\n    <ul>\n        <li>Here is a list item</li>\n        <li>Here is a list item</li>\n        <li>Here is a list item</li>\n    </ul>\n\n    <h3>Alert test</h3>\n    <div class=\"bs-example\">\n        <div class=\"dropdown clearfix\">\n            <button class=\"btn dropdown-toggle sr-only\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\">\n                Dropdown\n                <span class=\"caret\"></span>\n            </button>\n                <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu2\">\n                <li role=\"presentation\" class=\"dropdown-header\">Dropdown header</li>\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Action</a></li>\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Another action</a></li>\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Something else here</a></li>\n                <li role=\"presentation\" class=\"divider\"></li>\n                <li role=\"presentation\" class=\"dropdown-header\">Dropdown header</li>\n                <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Separated link</a></li>\n            </ul>\n        </div>\n    </div>\n\n    <h3>Alert test</h3>\n    <div class=\"bs-example\">\n        <div class=\"alert alert-success\">\n            <strong>Well done!</strong> You successfully read this important alert message.\n        </div>\n        <div class=\"alert alert-info\">\n            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n        </div>\n        <div class=\"alert alert-warning\">\n            <strong>Warning!</strong> Better check yourself, you're not looking too good.\n        </div>\n        <div class=\"alert alert-danger\">\n            <strong>Oh snap!</strong> Change a few things up and try submitting again.\n        </div>\n    </div>\n\n    <div class=\"bs-example\">\n        <div class=\"alert alert-success\">\n            <strong>Well done!</strong> You successfully read <a href=\"#\" class=\"alert-link\">this important alert message</a>.\n        </div>\n        <div class=\"alert alert-info\">\n            <strong>Heads up!</strong> This <a href=\"#\" class=\"alert-link\">alert needs your attention</a>, but it's not super important.\n        </div>\n        <div class=\"alert alert-warning\">\n            <strong>Warning!</strong> Better check yourself, you're <a href=\"#\" class=\"alert-link\">not looking too good</a>.\n        </div>\n        <div class=\"alert alert-danger\">\n            <strong>Oh snap!</strong> <a href=\"#\" class=\"alert-link\">Change a few things up</a> and try submitting again.\n        </div>\n    </div>\n\n    <h3>Code</h3>\n    <div class=\"bs-example\">\n<pre>\nPOST https://ftnox.com/account/balance\nContent-Type: application/x-www-form-urlencoded\n\napi_key=eIsWZZYqy18wx0zPXAKAIvkj\n</pre>\n\n        This is in a code element: <code>blah blah blah</code>\n\n    </div>\n\n</div>\n</div>\n";
  },"useData":true});
templates['breadcrumbs.html'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n<ol class=\"breadcrumb\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.breadcrumbs), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n</ol>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n    ";
  stack1 = helpers['if'].call(depth0, (data == null || data === false ? data : data.last), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n    ";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return "\n    <li class=\"active\">\n        "
    + escapeExpression(((helper = helpers.display || (depth0 && depth0.display)),(typeof helper === functionType ? helper.call(depth0, {"name":"display","hash":{},"data":data}) : helper)))
    + "\n    </li>\n    ";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return "\n    <li>\n        <a data-name=\""
    + escapeExpression(((helper = helpers.name || (depth0 && depth0.name)),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" href=\""
    + escapeExpression(((helper = helpers.path || (depth0 && depth0.path)),(typeof helper === functionType ? helper.call(depth0, {"name":"path","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = helpers.display || (depth0 && depth0.display)),(typeof helper === functionType ? helper.call(depth0, {"name":"display","hash":{},"data":data}) : helper)))
    + "</a>\n    </li>\n    ";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing,helper.call(depth0, ((stack1 = (depth0 && depth0.breadcrumbs)),stack1 == null || stack1 === false ? stack1 : stack1.length), ">", 1, {"name":"ifCond","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n";
},"useData":true});
templates['exchange.html'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n        <div class=\"\">\n            <h4>Account</h4>\n            "
    + escapeExpression((helper = helpers.render || (depth0 && depth0.render) || helperMissing,helper.call(depth0, "account_balance", (depth0 && depth0.balance), {"name":"render","hash":{},"data":data})))
    + "\n        </div>\n        <hr />\n        ";
},"3":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", escapeExpression=this.escapeExpression;
  return "\n        <div class=\"row enter-order\">\n            <div class=\"col-xs-6\">\n                <div class=\"order-form-panel panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4 class=\"panel-title\" style=\"text-align: center\">Buy "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.market)),stack1 == null || stack1 === false ? stack1 : stack1.coin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n                    </div>\n                    <div class=\"panel-body\">\n                        <form class=\"form-buy form-horizontal\">\n                            <div class=\"form-group\">\n                                <label for=\"amount\" class=\"col-xs-3 control-label\">Buy</label>\n                                <div class=\"col-xs-9\"><div class=\"input-group\">\n                                    <input name=\"amount\" type=\"text\" class=\"form-control\" placeholder=\"\" required>\n                                    <span class=\"input-group-addon\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.market)),stack1 == null || stack1 === false ? stack1 : stack1.coin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                                </div></div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"price\" class=\"col-xs-3 control-label\">Price</label>\n                                <div class=\"col-xs-8\"><div class=\"input-group\">\n                                    <input buy-price name=\"price\" type=\"text\" class=\"form-control\" placeholder=\"\" required value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.market)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                                    <span class=\"market-name input-group-addon\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.market)),stack1 == null || stack1 === false ? stack1 : stack1.basisCoin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                                </div></div>\n                                <span class=\"glyphicon glyphicon-question-sign\" style=\"padding-top: 7px;\" data-toggle=\"tooltip\"\n                                      title=\"Price in "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.market)),stack1 == null || stack1 === false ? stack1 : stack1.basisCoin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " per 1.0 "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.market)),stack1 == null || stack1 === false ? stack1 : stack1.coin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></span>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"\" class=\"col-xs-3 control-label\">Spend</label>\n                                <div class=\"col-xs-9\" style=\"margin-top: 8px;\">\n                                    <span class=\"send_amount\">0</span>\n                                    <span class=\"coin\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.market)),stack1 == null || stack1 === false ? stack1 : stack1.basisCoin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> (or less)\n                                </div>\n                            </div>\n                            <button class=\"btn btn-primary col-xs-offset-0 col-xs-12\" type=\"submit\">Buy "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.market)),stack1 == null || stack1 === false ? stack1 : stack1.coin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xs-6\">\n                <div class=\"order-form-panel panel panel-default\">\n                    <div class=\"panel-heading\">\n                        <h4 class=\"panel-title\" style=\"text-align: center\">Sell "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.market)),stack1 == null || stack1 === false ? stack1 : stack1.coin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n                    </div>\n                    <div class=\"panel-body\">\n                        <form class=\"form-sell form-horizontal\">\n                            <div class=\"form-group\">\n                                <label for=\"amount\" class=\"col-xs-3 control-label\">Sell</label>\n                                <div class=\"col-xs-9\"><div class=\"input-group\">\n                                    <input name=\"amount\" type=\"text\" class=\"form-control\" placeholder=\"\" required>\n                                    <span class=\"input-group-addon\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.market)),stack1 == null || stack1 === false ? stack1 : stack1.coin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                                </div></div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"price\" class=\"col-xs-3 control-label\">Price</label>\n                                <div class=\"col-xs-8\"><div class=\"input-group\">\n                                    <input sell-price name=\"price\" type=\"text\" class=\"form-control\" placeholder=\"\" required value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.market)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                                    <span class=\"market-name input-group-addon\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.market)),stack1 == null || stack1 === false ? stack1 : stack1.basisCoin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n                                </div></div>\n                                <span class=\"glyphicon glyphicon-question-sign\" style=\"padding-top: 7px;\" data-toggle=\"tooltip\"\n                                      title=\"Price in "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.market)),stack1 == null || stack1 === false ? stack1 : stack1.basisCoin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " per 1.0 "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.market)),stack1 == null || stack1 === false ? stack1 : stack1.coin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></span>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"\" class=\"col-xs-3 control-label\">Get</label>\n                                <div class=\"col-xs-9\" style=\"margin-top: 8px;\">\n                                    <span class=\"receive_amount\">0</span>\n                                    <span class=\"coin\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.market)),stack1 == null || stack1 === false ? stack1 : stack1.basisCoin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span> (or more)\n                                </div>\n                            </div>\n                            <button class=\"btn btn-primary col-xs-offset-0 col-xs-12\" type=\"submit\">Sell "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.market)),stack1 == null || stack1 === false ? stack1 : stack1.coin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        ";
},"5":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <h4>Open Orders</h4>\n                <div class=\"js-pending-orders\">\n                    "
    + escapeExpression((helper = helpers.render || (depth0 && depth0.render) || helperMissing,helper.call(depth0, "exchange_pending_orders", (depth0 && depth0.orders), {"name":"render","hash":{},"data":data})))
    + "\n                </div>\n            </div>\n        </div>\n        ";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "<div id=\"market\">\n    <!-- Sidebar with market names -->\n    <div class=\"sidebar col-md-3\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.user), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <div class=\"\">\n            <h4>Markets</h4>\n            <div class=\"js-exchange-markets\">\n                \n            </div>\n        </div>\n    </div>\n\n    <!-- The market -->\n    <div class=\"main col-md-9\">\n        <h2 class=\"row js-marketName coin\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.market)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\n        <div class=\"row js-chart orderbook-chart\" style=\"margin-bottom: 20px;\">\n        </div>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.user), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.user), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n        <div class=\"row\">\n            <div class=\"col-xs-6\">\n                <h4>Bids</h4>\n                <div class=\"js-bids\">\n                    "
    + escapeExpression((helper = helpers.render || (depth0 && depth0.render) || helperMissing,helper.call(depth0, "exchange_orders", (depth0 && depth0.bids), {"name":"render","hash":{},"data":data})))
    + "\n                </div>\n            </div>\n            <div class=\"col-xs-6\">\n                <h4>Asks</h4>\n                <div class=\"js-asks\">\n                    "
    + escapeExpression((helper = helpers.render || (depth0 && depth0.render) || helperMissing,helper.call(depth0, "exchange_orders", (depth0 && depth0.asks), {"name":"render","hash":{},"data":data})))
    + "\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
templates['exchange_market_button.html'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return "\n    <span class=\"small\">"
    + escapeExpression(((helper = helpers.last || (depth0 && depth0.last)),(typeof helper === functionType ? helper.call(depth0, {"name":"last","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((helper = helpers.basisCoin || (depth0 && depth0.basisCoin)),(typeof helper === functionType ? helper.call(depth0, {"name":"basisCoin","hash":{},"data":data}) : helper)))
    + "</span>\n    ";
},"3":function(depth0,helpers,partials,data) {
  return "\n    <span class=\"small\">-</span>\n    ";
  },"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "<a href=\"/#market/"
    + escapeExpression(((helper = helpers.coin || (depth0 && depth0.coin)),(typeof helper === functionType ? helper.call(depth0, {"name":"coin","hash":{},"data":data}) : helper)))
    + "/"
    + escapeExpression(((helper = helpers.basisCoin || (depth0 && depth0.basisCoin)),(typeof helper === functionType ? helper.call(depth0, {"name":"basisCoin","hash":{},"data":data}) : helper)))
    + "\" type=\"button\" role=\"button\" class=\"btn btn-default btn-lg market-button js-marketButton\" data-market-name=\""
    + escapeExpression(((helper = helpers.name || (depth0 && depth0.name)),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    <img src=\"/img/"
    + escapeExpression(((helper = helpers.coin || (depth0 && depth0.coin)),(typeof helper === functionType ? helper.call(depth0, {"name":"coin","hash":{},"data":data}) : helper)))
    + ".png\"/> <span class=\"coin\">"
    + escapeExpression(((helper = helpers.coin || (depth0 && depth0.coin)),(typeof helper === functionType ? helper.call(depth0, {"name":"coin","hash":{},"data":data}) : helper)))
    + "</span>/"
    + escapeExpression(((helper = helpers.basisCoin || (depth0 && depth0.basisCoin)),(typeof helper === functionType ? helper.call(depth0, {"name":"basisCoin","hash":{},"data":data}) : helper)))
    + "<br/>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.last), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n</a>\n";
},"useData":true});
templates['exchange_markets.html'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n    "
    + escapeExpression((helper = helpers.render || (depth0 && depth0.render) || helperMissing,helper.call(depth0, "exchange_market_button", depth0, {"name":"render","hash":{},"data":data})))
    + "\n";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"btn-group-vertical\" style=\"width: 100%\">\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.markets), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n</div>\n";
},"useData":true});
templates['exchange_orders.html'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.orders), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n        ";
},"2":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n        <tr>\n            <td class=\"amount\">"
    + escapeExpression((helper = helpers.toPrecision || (depth0 && depth0.toPrecision) || helperMissing,helper.call(depth0, (depth0 && depth0.fp), 5, {"name":"toPrecision","hash":{},"data":data})))
    + "</td>\n            <td class=\"amount\">"
    + escapeExpression((helper = helpers.divide8 || (depth0 && depth0.divide8) || helperMissing,helper.call(depth0, (depth0 && depth0.a), {"name":"divide8","hash":{},"data":data})))
    + "</td>\n            \n        </tr>\n        ";
},"4":function(depth0,helpers,partials,data) {
  return "\n        <tr>\n            <td colspan=\"999\" style=\"text-align: center;\">No orders</td>\n        </tr>\n        ";
  },"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", escapeExpression=this.escapeExpression, buffer = "<div class=\"exchange-orders\">\n    <table class=\"table table-condensed head bordered\">\n    <thead><tr>\n        <th>Price</th>\n        <th style=\"vertical-align: middle;\">Amount <span class=\"coin\" style=\"font-weight: normal\">("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.market)),stack1 == null || stack1 === false ? stack1 : stack1.coin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</span></th>\n    </tr></thead>\n    </table>\n    <div class=\"js-exchange-orders-body exchange-orders-body\">\n        <table class=\"table table-striped table-condensed body bordered\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.orders), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n        </table>\n    </div>\n</div>\n";
},"useData":true});
templates['exchange_pending_orders.html'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.orders), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n        ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "\n        <tr data-order-id=\""
    + escapeExpression(((helper = helpers.id || (depth0 && depth0.id)),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n            ";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond) || helperMissing,helper.call(depth0, (depth0 && depth0.type), "==", "B", {"name":"ifCond","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data}));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n            <td class=\"date\">"
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing,helper.call(depth0, (depth0 && depth0.time), {"name":"formatDate","hash":{
    'format': ("YYYY-MM-DD hh:mma")
  },"data":data})))
    + "</td>\n            <td class=\"amount\">"
    + escapeExpression((helper = helpers.toPrecision || (depth0 && depth0.toPrecision) || helperMissing,helper.call(depth0, (depth0 && depth0.price), 5, {"name":"toPrecision","hash":{},"data":data})))
    + "</td>\n            <td class=\"amount\">"
    + escapeExpression((helper = helpers.divide8 || (depth0 && depth0.divide8) || helperMissing,helper.call(depth0, (depth0 && depth0.amount), {"name":"divide8","hash":{},"data":data})))
    + "</td>\n            <td class=\"amount\">"
    + escapeExpression((helper = helpers.divide8 || (depth0 && depth0.divide8) || helperMissing,helper.call(depth0, (depth0 && depth0.filled), {"name":"divide8","hash":{},"data":data})))
    + "</td>\n            <td><a href=\"#\" class=\"js-cancel-order btn btn-default btn-xs\" data-order-id=\""
    + escapeExpression(((helper = helpers.id || (depth0 && depth0.id)),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" type=\"submit\">Cancel</a></td>\n        </tr>\n        ";
},"3":function(depth0,helpers,partials,data) {
  return "\n            <td>Bid</td>\n            ";
  },"5":function(depth0,helpers,partials,data) {
  return "\n            <td>Ask</td>\n            ";
  },"7":function(depth0,helpers,partials,data) {
  return "\n        <tr>\n            <td colspan=\"6\" style=\"text-align: center;\">You have no open orders</td>\n        </tr>\n        ";
  },"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", escapeExpression=this.escapeExpression, buffer = "<div class=\"exchange-pending-orders\">\n    <table class=\"table table-striped table-condensed head bordered\">\n    <thead>\n        <tr>\n            <th>Type</th>\n            <th>Date</th>\n            <th>Price</th>\n            <th style=\"vertical-align: middle;\">Amount <span class=\"coin\" style=\"font-weight: normal\">("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.market)),stack1 == null || stack1 === false ? stack1 : stack1.coin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</span></th>\n            <th>Filled</th>\n            <th></th>\n        </tr>\n    </thead>\n    <tbody>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.orders), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(7, data),"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n    </tbody>\n    </table>\n</div>\n";
},"useData":true});
templates['layout.html'] = template({"1":function(depth0,helpers,partials,data) {
  return "\n                    <li name=\"treasury\"><a href=\"/treasury/\">Treasury</a></li>\n                    ";
  },"3":function(depth0,helpers,partials,data) {
  return "\n                    <li name=\"market\"><a href=\"/#market\">Trade</a></li>\n                    <li name=\"account\"><a href=\"/#account\">Account</a></li>\n                    ";
  },"5":function(depth0,helpers,partials,data) {
  return "\n                    <li name=\"logout\"><a href=\"/#logout\">Logout</a></li>\n                    ";
  },"7":function(depth0,helpers,partials,data) {
  return "\n                    <li name=\"login\"><a href=\"/#login\">Login</a></li>\n                    ";
  },"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", buffer = "<div id=\"navbar_and_content\">\n\n    <!-- Fixed navbar -->\n    <div id=\"navbar\" class=\"navbar navbar-default\" role=\"navigation\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <a href=\"/\">\n                    <img class=\"navbar-logo\" src=\"/img/logo.png\" alt=\"FtNox\"/>\n                </a>\n            </div>\n            <div class=\"collapse navbar-collapse\">\n                <ul class=\"nav navbar-nav\" style=\"float: right;\">\n                    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.roles)),stack1 == null || stack1 === false ? stack1 : stack1.treasury), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.user), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    <li name=\"contact\"><a href=\"/#api\">API</a></li>\n                    <li name=\"about\"><a href=\"/#about\">About</a></li>\n                    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.user), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <!-- Alerts -->\n    <div id=\"app-alerts\" class=\"container\">\n    </div>\n\n    <!-- Begin page content -->\n    <div id=\"content\" class=\"container\">\n        ";
  stack1 = ((helper = helpers.content || (depth0 && depth0.content)),(typeof helper === functionType ? helper.call(depth0, {"name":"content","hash":{},"data":data}) : helper));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n    </div>\n\n</div>\n\n<div id=\"footer\">\n    <div class=\"container\">\n        <p class=\"text-muted credit\">AllInBits, Inc. 2014</p>\n    </div>\n</div>\n";
},"useData":true});
templates['loggedout.html'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"alert alert-success\">You have logged out successfully</div>\n";
  },"useData":true});
templates['login.html'] = template({"1":function(depth0,helpers,partials,data) {
  return "\n                <div class=\"form-group\">\n                    <input name=\"totp_code\" type=\"text\" class=\"form-control\" placeholder=\"6 digit auth token\" required>\n                </div>\n                ";
  },"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div id=\"login\" class=\"col-xs-4 col-xs-offset-4\" style=\"margin-top: 60px;\">\n    <div class=\"panel panel-default row\">\n        <div class=\"panel-heading\">\n            <h4 class=\"panel-title\" style=\"text-align: center\">Login</h4>\n        </div>\n        <div class=\"panel-body\">\n            <form class=\"form-login\">\n                <div class=\"form-group\">\n                    <input name=\"email\" type=\"text\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n                </div>\n                <div class=\"form-group\">\n                    <input name=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n                </div>\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.requireTOTP), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n                <div class=\"form-group\">\n                    <button class=\"btn btn-primary\" type=\"submit\">Login</button>\n                    <span style=\"margin-left: 10px;\">\n                        or, <a href=\"/#register\">Register</a>\n                    </span>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
templates['register.html'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"register\" class=\"col-xs-4 col-xs-offset-4\" style=\"margin-top: 60px;\">\n    <div class=\"panel panel-default row\">\n        <div class=\"panel-heading\">\n            <h4 class=\"panel-title\" style=\"text-align: center\">Register</h4>\n        </div>\n        <div class=\"panel-body\">\n            <form class=\"form-register\">\n                <div class=\"form-group\">\n                    <input name=\"email\" type=\"text\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n                </div>\n                <div class=\"form-group\">\n                    <input name=\"password\"  type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n                </div>\n                <div class=\"form-group\">\n                    <input name=\"password2\" type=\"password\" class=\"form-control\" placeholder=\"Password Repeat\" required>\n                </div>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-primary\" type=\"submit\" style=\"\">Register</button>\n                    <span style=\"margin-left: 10px;\">\n                        or, <a href=\"/#login\">Log in</a>\n                    </span>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n";
  },"useData":true});
templates['register_confirmed.html'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return "<div class=\"page-header\">\n    <h1>Registered.</h1>\n</div>\n<p class=\"lead\">Now check your email at <b>"
    + escapeExpression(((helper = helpers.email || (depth0 && depth0.email)),(typeof helper === functionType ? helper.call(depth0, {"name":"email","hash":{},"data":data}) : helper)))
    + "</b> and click on the confirmation link.</p>\n<p>If you don't see the email, check your spambox.</p>\n";
},"useData":true});
templates['static_base.html'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", buffer = "<!DOCTYPE html>\n<html>\n<head>\n    <title>FtNox</title>\n    <link rel=\"stylesheet\" media=\"screen\" href=\"/css/bootstrap.sortable.css\"></link>\n    <link rel=\"stylesheet\" media=\"screen\" href=\"/css/style.css\"></link>\n    <link rel=\"shortcut icon\" href=\"/favicon.ico\" type=\"image/x-icon\">\n    <link rel=\"icon\" href=\"/favicon.ico\" type=\"image/x-icon\">\n</head>\n<body>\n\n<!-- Everything goes in here -->\n<div id=\"main\">\n    ";
  stack1 = ((helper = helpers.main || (depth0 && depth0.main)),(typeof helper === functionType ? helper.call(depth0, {"name":"main","hash":{},"data":data}) : helper));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n</div>\n\n<!-- Placed at the end so page loads faster -->\n<script src=\"/js/jquery.min.js\"></script>\n<script src=\"/js/bootstrap.js\"></script>\n<script src=\"/js/bootstrap.sortable.js\"></script>\n<script src=\"/js/jquery.cookie.js\"></script>\n<script src=\"/js/jquery.qrcode.min.js\"></script>\n<script src=\"/js/sugar.min.js\"></script>\n<script src=\"/js/moment.min.js\"></script>\n<script src=\"/js/d3.v3.min.js\"></script>\n<script src=\"/js/chart.js\"></script>\n\n</body>\n</html>\n";
},"useData":true});
templates['totp_confirm.html'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"col-xs-6 col-xs-offset-3\" style=\"margin-top: 60px;\">\n    <div class=\"panel panel-default row\">\n        <div class=\"panel-heading\">\n            <h4 class=\"panel-title\" style=\"text-align: center\">Set up Two Factor Authentication</h4>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"row\">\n                <div class=\"col-xs-7\">\n                    <p>\n                        Two Factor Authentication is required to protect your account.<br/>\n                        Install <a href=\"https://support.google.com/accounts/answer/1066447?hl=en\">Google Authenticator</a>,\n                        then scan the barcode and enter the 6 digit code.\n                    </p>\n                    <form class=\"form-totp form-inline\">\n                        <input name=\"code\" type=\"text\" class=\"form-control\" style=\"width: 140px;\" placeholder=\"6 digit auth code\" required autofocus>\n                        <button class=\"btn btn-primary\" type=\"submit\" style=\"\">Submit</button>\n                    </form>\n                </div>\n                <div class=\"col-xs-5\">\n                    <img src=\"/auth/totp_qr.png\" style=\"width: 100%;\"/>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
  },"useData":true});
})();