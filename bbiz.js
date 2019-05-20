		
$(document).ready(function(){

	$("#select_kind").change(function(){ 
		fillTable();
	});
	$("#profit_wanted").change(function(){ 
		fillTable();
	});

	function fillTable() {
		$("#resultblackbiz").empty();
		let kindAsked = $("#select_kind").children("option:selected").val();
		let jsonDoc2 = "ressources/"+kindAsked+".json";
	    $.getJSON(jsonDoc2,function(data) { 
	    	$.each(data, function(key,val) {
	    		var item = val.UniqueName;
	    		var itemLocalName = val.LocalizedNames[2].Value;
	    		if ( item.includes("@1") ) {
	    			//item is .1
	    			// console.log(".1");
	    			var enchant = ".1";
	    		} else if ( item.includes("@2") ) {
	    			//item is .2
	    			// console.log(".2");
	    			var enchant = ".2";
	    		} else if ( item.includes("@3") ) {
	    			//item is .3
	    			// console.log(".3");
	    			var enchant = ".3";
	    		} else {
	    			// item is .0
	    			// console.log("flat");
	    			var enchant = "flat";
	    		}
	    		var profitWanted = $("#profit_wanted").children("option:selected").val();
	    			var q_level = [1,2,3,4,5];
	    			var q_text = ["None", "Normale","Acceptable","Admirable","Formidable","Exceptionnelle"];
	    			let Ca_prices = [];let BM_prices = [];let diffs = []; 
	    		var request = "https://www.albion-online-data.com/api/v2/stats/prices/"+item+"?locations=Caerleon,BlackMarket";
	    		$.get(request,function(apiPrice) {
	    			apiPrice.forEach( x=> {
	    				switch(x.city){
	    					case "Black Market":
	    					    q_level.forEach(q => { if(q == x.quality){BM_prices[q] = x.buy_price_min} });
	    						break;
	    					case "Caerleon":
	    					 	q_level.forEach(q => { if(q == x.quality){Ca_prices[q] = x.sell_price_min} });	
	    						break;
	    				}
	    			});
	    			q_level.forEach(q => diffs[q] = Math.round(BM_prices[q]*.98) - Ca_prices[q]);
	    			if(diffs.some(diff => diff > 0)){
	    				q_level.forEach(q=> {
	    					if(BM_prices[q] && Ca_prices[q] && diffs[q] && diffs[q] > profitWanted) {
		    					//$("#resultblackbiz").append("<tr><td><img width=\"64\" height=\"64\" title=" + item + " src=" + "  https://gameinfo.albiononline.com/api/gameinfo/items/"+ item + "></img>"+itemLocalName+"</td><td> Enchant : "+enchant +"<br> Qualite : "+ q_text[q]+"</td><td>"+BM_prices[q]+"</td><td>"+Ca_prices[q]+"</td><td style=" + (diffs[q]>0?'color:green':'color:red') + ">"+diffs[q]+"</td></tr>");
		    					$("#resultblackbiz").append("<tr><td><img width=\"64\" height=\"64\" title=" + item + " src=" + "  https://albiononline2d.ams3.cdn.digitaloceanspaces.com/thumbnails/128/"+ item + "></img>"+itemLocalName+"</td><td> Enchant : "+enchant +"<br> Qualite : "+ q_text[q]+"</td><td>"+BM_prices[q]+"</td><td>"+Ca_prices[q]+"</td><td style=" + (diffs[q]>0?'color:green':'color:red') + ">"+diffs[q]+"</td></tr>");
		    				}
		    			});
	    			}
	    		});
	    	});
	    });
	}
});
jQuery.ajaxPrefilter(function(options) { if (options.crossDomain && jQuery.support.cors) { options.url = 'https://cors-anywhere.herokuapp.com/' + options.url; } });