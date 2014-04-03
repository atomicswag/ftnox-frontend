$.fn.findAndSelf = function(selector) {
    return this.find(selector).add(this.filter(selector))
}

$.fn.extend({ 
    disableSelection: function() { 
        this.each(function() { 
            if (typeof this.onselectstart != 'undefined') {
                this.onselectstart = function() { return false; };
            } else if (typeof this.style.MozUserSelect != 'undefined') {
                this.style.MozUserSelect = 'none';
            } else {
                this.onmousedown = function() { return false; };
            }
        }); 
    },

    disableInput: function() {
        var form = $(this);
        form.findAndSelf("input, textarea, button, a.btn").attr("js-disabled", "true").attr("disabled", "true");
        var button = form.findAndSelf("button[type='submit'], a[type='submit']");
        button.append("<i class='fa fa-refresh fa-spin' style='margin-left: 10px;'></i>");
    },

    enableInput: function() {
        var form = $(this);
        form.findAndSelf("input, textarea, button, a.btn").findAndSelf("[js-disabled='true']").removeAttr("disabled");
        var button = form.findAndSelf("button[type='submit'], a[type='submit']");
        button.find(".fa-spin").remove();
    },

    wrapDiv: function() {
        var els = $(this);
        var div = $("<div/>");
        div.append(els);
        return div;
    },
});
