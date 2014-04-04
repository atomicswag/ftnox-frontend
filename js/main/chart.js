var util = require("./util");

///////////// CHART VIEW
///////////// CHART VIEW

function ChartView(market) {
    var view = util.newObject(ChartView);
    view.market = market;
    view.el = $("<div/>");
    view.init();
    return view;
}

ChartView.init = function() {
    var view = this;
    var el = view.el;
    var margin = view.margin = {top: 20, right: 80, bottom: 40, left: 60};
    var width  = view.width  = 910 - margin.left - margin.right;
    var height = view.height = 360 - margin.top - margin.bottom;
    var x      = view.x      = d3.scale.linear().range([0, width]);
    var y      = view.y      = d3.scale.linear().range([height, 0]);
    var t      = view.t      = d3.time.scale().range([0, height]);
    var xAxis  = view.xAxis  = d3.svg.axis().scale(x).orient("bottom");
    var yAxis  = view.yAxis  = d3.svg.axis().scale(y).orient("left");
    var xAxisG = view.xAxisG = d3.svg.axis().scale(x).orient("bottom");
    var yAxisG = view.yAxisG = d3.svg.axis().scale(y).orient("left");
    var tAxis  = view.tAxis  = d3.svg.axis().scale(t).orient("right");

    var line   = view.line   = d3.svg.line()
        .interpolate("step-after")
        .x(function(d) { return x(d.p); })
        .y(function(d) { return y(d.fca); });

    // Axis and everything.
    var svg = view.svg = d3.select(el[0]).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Grid
    var svg2 = view.svg2 = svg.append("svg")
        .attr("width", width)
        .attr("height", height);

    // Pricelog
    var svg3 = view.svg3 = svg.append("svg")
        .attr("width", width)
        .attr("height", height);

    // Orderbook
    var svg4 = view.svg4 = svg.append("svg")
        .attr("width", width)
        .attr("height", height);

};

ChartView.drawOrderbook = function(bids, asks) {
    var view = this;
    view.svg.selectAll(".orderbook").remove();
    var orders = [{name:"bids", values:bids},
                  {name:"asks", values:asks}];

    var minBid, maxBid, minAsk, maxAsk;
    if (bids.length > 0) {
        minBid = bids[bids.length-1].fp;
        maxBid = bids[0].fp;
        bids.unshift({p:bids[0].fp, a:0, fa:0, fca:0}); // Helps show the first wall
    }
    if (asks.length > 0) {
        minAsk = asks[0].fp;
        maxAsk = asks[asks.length-1].fp;
        asks.unshift({p:asks[0].fp, a:0, fa:0, fca:0}); // Helps show the first wall
    }
    
    // The domain is determined relative to the price gap.
    var gapAvg = 0;
    if (maxBid == undefined && minAsk != undefined) {
        gapAvg = minAsk / 1.1;
    } else if (maxBid != undefined && minAsk == undefined) {
        gapAvg = maxBid / 0.9;
    } else if (maxBid != undefined && minAsk != undefined) {
        gapAvg = (maxBid + minAsk) / 2.0;
    }

    var minPrice = gapAvg * 0.5;
    var maxPrice = gapAvg * 1.5;
    //var minPrice = Math.min(minBid||Infinity,  minAsk||Infinity);
    //var maxPirce = Math.max(maxBid||-Infinity, maxAsk||-Infinity);

    var sumAmount = 0;
    for (var i=0; i<bids.length; i++) {
        var bid = bids[i];
        if (bid.fp < minPrice) { break; }
        sumAmount = Math.max(sumAmount, bid.fca);
    }
    for (var i=0; i<asks.length; i++) {
        var ask = asks[i];
        if (maxPrice < ask.fp) { break; }
        sumAmount = Math.max(sumAmount, ask.fca);
    }

    view.x.domain([minPrice, maxPrice]);
    view.y.domain([0, sumAmount*1.2]);

    // Grid
    view.svg2.append("g")
        .attr("class", "orderbook grid")
        .attr("transform", "translate(0," + view.height + ")")
        .call(view.xAxisG.tickSize(-view.height, 0, 0).tickFormat(""));
    view.svg2.append("g")
        .attr("class", "orderbook grid")
        .call(view.yAxisG.tickSize(-view.width, 0, 0).tickFormat(""));

    // X Axis
    var xAxis = view.svg.append("g")
        .attr("class", "orderbook x axis")
        .attr("transform", "translate(0," + view.height + ")");
    xAxis.call(view.xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.4em")
            .attr("dy", ".15em")
            .attr("transform", function(d) {
                return "rotate(-25)";
            });
    xAxis.append("text")
        .attr("x", 5)
        .attr("y", -6)
        .style("text-anchor", "start")
        .text("Price ("+view.market.basisCoin+") ➞");

    // Y Axis
    view.svg.append("g")
        .attr("class", "orderbook y axis")
        .call(view.yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Orderbook Sum ("+view.market.coin+") ➞");

    // Orderbook
    var orderBook = view.svg4.append("g")
        .attr("class", "orderbook")
      .selectAll(".orders")
        .data(orders)
      .enter().append("g")
        .attr("class", "orders");
    orderBook.append("path")
        .attr("class", function(d) { return "line "+d.name; })
        .attr("d", function(d) { return view.line(d.values); });

    /* Label bids & asks
    try {
        orderBook.append("text")
            .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
            .attr("transform", function(d) { return "translate(" + view.x(d.value.p) + "," + view.y(d.value.fca) + ")"; })
            .attr("x", 3)
            .attr("dy", ".35em")
            .text(function(d) { return d.name; });
    } catch(err) {
        // some error is thrown when there are no values.
    }
    */
    
};

ChartView.drawPricelog = function(plogs, start, now) {
    var view = this;
    if (start < 0) { start = now + start; }

    view.svg.selectAll("g.pricelog").remove();
    view.t.domain([start * 1000, now * 1000]);
    // view.x.domain is already set from drawOrderbook

    view.svg.append("g")
        .attr("class", "pricelog t axis")
        .attr("transform", "translate("+view.width+", 0)")
        .call(view.tAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -6)
        .style("text-anchor", "end")
        .text("Time ➞");

    var lowLine = d3.svg.line()
        .interpolate("step-before")
        .x(function(d) { return view.x(d.l); })
        .y(function(d) { return view.t(d.t * 1000); });
    var highLine = d3.svg.line()
        .interpolate("step-before")
        .x(function(d) { return view.x(d.h); })
        .y(function(d) { return view.t(d.t * 1000); });

    var priceLog = view.svg3.append("g")
        .attr("class", "pricelog");

    priceLog.append("path")
        .attr("class", "line lows")
        .attr("d", lowLine(plogs));

    priceLog.append("path")
        .attr("class", "line highs")
        .attr("d", highLine(plogs));

    return;
};

ChartView.destroy = function() {
    var view = this;
}

module.exports = {
    ChartView:   ChartView,
};
