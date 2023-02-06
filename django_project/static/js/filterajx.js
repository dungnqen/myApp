/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var FilterAjx = new function() {
	this.settings = {
		related_url:null
	};
    
    this.init_filter = function()
    {
        var theLocation = window.location;
        var queryString = theLocation.search;
        var urlParams = new URLSearchParams(queryString);
        var $filter = $("#ivy-ordering-gfilter");
        if(urlParams.toString().length <= 0) { return; }
        var theUrl = IvyGlobalSetting.settings.url_prefix + 'ordering/filter' + '?' + urlParams.toString();
        
        $.ajax({
            method:"GET",
            url:theUrl
        }).done(function(response) {
            if(response.success === true) {
                $filter.html(response.content);
                $filter.closest('.filter-box-container').show();
            }
            else
            {
                $filter.closest('.filter-box-container').hide();
                $filter.html('');
            }
        });
    };
    
    this.load_filter = function()
    {
        FilterAjx.apply(); return;
        var theLocation = window.location;
        var queryString = theLocation.search;
        var urlParams = new URLSearchParams(queryString);
        var $filter = $("#ivy-ordering-gfilter");
        if(urlParams.toString().length <= 0) { return; }
        
        var filterParams = new URLSearchParams($filter.closest('form').serialize());
        for(var pair of urlParams.entries()) {
            if(!pair[0].includes("FilterCols")) {
                filterParams.append(pair[0], [pair[1]]);
            }
        }
        var theUrl = IvyGlobalSetting.settings.url_prefix + 'ordering/filter' + '?' + filterParams.toString();
        
        $.ajax({
            method:"GET",
            url:theUrl
        }).done(function(response) {
            if(response.success === true) {
                $filter.html(response.content);
                $filter.closest('.filter-box-container').show();
            }
            else
            {
                $filter.closest('.filter-box-container').hide();
                $filter.html('');
            }
        });
    };
    
    this.apply = function()
    {
        var theLocation = window.location;
        var queryString = theLocation.search;
        var urlParams = new URLSearchParams(queryString);
        
        var $filter = $("#ivy-ordering-gfilter");
        var filterParams = new URLSearchParams($filter.closest('form').serialize());
        
        for(var pair of urlParams.entries()) {
            if(!pair[0].includes("FilterCols") && !pair[0].includes("gterm")) {
                filterParams.append(pair[0], [pair[1]]);
            }
        }
        
        var reloadUrl = theLocation.origin + theLocation.pathname + '?' + filterParams.toString();
        window.location.href = reloadUrl;
    };

    this.applyNewFilter = function()
    {
        var theLocation = window.location;
        var queryString = theLocation.search;
        var urlParams = new URLSearchParams(queryString);
        
        var $filter = $("#ivy-ordering-gfilter");
        var attribute_value_ids = $filter.closest('form').find('input[name="atts"]:checked').map(function () {  
            return this.value;
            }).get().join(",");

        var filterParams = new URLSearchParams();
        // var gterm = urlParams.get('gterm');
        // if(gterm !== null && gterm.length !== 0)
        // {
        //     filterParams.append("gterm", gterm);
        // }

        for(var pair of urlParams.entries()) {
            if(!pair[0].includes("atts")) {
                filterParams.append(pair[0], [pair[1]]);
            }
        }

        if(attribute_value_ids !== null && attribute_value_ids.length !== 0)
        {
            filterParams.append("atts", attribute_value_ids);
        }
        
        var reloadUrl = theLocation.origin + theLocation.pathname;
        if(Array.from(filterParams).length > 0)
        {
            reloadUrl = reloadUrl + '?' + filterParams.toString();
        }
        window.location.href = reloadUrl;
    };

    this.selectCategory = function(sender)
    {
        var $sender = $(sender);
        var cat_link = $sender.data("cat_link");
        
        var theLocation = window.location;
        var urlParams = new URLSearchParams(theLocation.search);
        
        var reloadUrl = theLocation.origin + cat_link;
        if(Array.from(urlParams).length > 0)
        {
            reloadUrl = reloadUrl + '?' + urlParams.toString();
        }
        window.location.href = reloadUrl;
    };
    
    this.clear = function()
    {
        var theLocation = window.location;
        var queryString = theLocation.search;
        var urlParams = new URLSearchParams(queryString);
        var emptyParams = new URLSearchParams();
        for(var pair of urlParams.entries()) {
            if(!pair[0].includes("FilterCols")) {
                emptyParams.append(pair[0], [pair[1]]);
            }
        }
        var reloadUrl = theLocation.origin + theLocation.pathname + '?' + emptyParams.toString();
        window.location.href = reloadUrl;
    };
    
    this.search = function(sender)
    {
        var $form = $(sender);
        
        var theLocation = window.location;
        var queryString = theLocation.search;
        var urlParams = new URLSearchParams(queryString);
        
        var searchParams = new URLSearchParams($form.serialize());
        
        for(var pair of urlParams.entries()) {
            if(!pair[0].includes("gterm")) {
                searchParams.append(pair[0], [pair[1]]);
            }
        }
        
        var reloadUrl = theLocation.origin + theLocation.pathname + '?' + searchParams.toString();
        window.location.href = reloadUrl;
        return false;
    };
    
    this.search_leadtime = function(sender)
    {
        var $form = $(sender);
        
        var theLocation = window.location;
        var queryString = theLocation.search;
        var urlParams = new URLSearchParams(queryString);
        
        //alert($form.serialize());
        var searchParams = new URLSearchParams($form.serialize());
        
        for(var pair of urlParams.entries()) {
            if(!pair[0].includes("leadtime")) {
                searchParams.append(pair[0], [pair[1]]);
            }
        }
        
        var reloadUrl = theLocation.origin + theLocation.pathname + '?' + searchParams.toString();
        window.location.href = reloadUrl;
        return false;
    };

    this.search_global = function(sender)
    {
        var $form = $(sender);
        
        var theLocation = window.location;
        var queryString = theLocation.search;
        var urlParams = new URLSearchParams(queryString);
        
        var searchParams = new URLSearchParams($form.serialize());
        
        // for(var pair of urlParams.entries()) {
        //     if(!pair[0].includes("gterm")) {
        //         searchParams.append(pair[0], [pair[1]]);
        //     }
        // }
        
        var reloadUrl = theLocation.origin + '?' + searchParams.toString();
        window.location.href = reloadUrl;
        return false;
    };

    this.filter_in_account_page = function(sender)
    {
        var $form = $(sender);
        
        var theLocation = window.location;
        var queryString = theLocation.search;
        
        var searchParams = new URLSearchParams($form.serialize());
        
        var reloadUrl = theLocation.origin + theLocation.pathname + '?' + searchParams.toString();
        window.location.href = reloadUrl;
        return false;
    };

    this.clear_filter_in_account_page = function()
    {
        var theLocation = window.location;
        var reloadUrl = theLocation.origin + theLocation.pathname;
        window.location.href = reloadUrl;
        return false;
    };
};
