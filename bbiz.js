		
$(document).ready(function(){
	$("#select_kind").change(function(){ 
		$("#resultblackbiz").empty();
		let kindAsked = $("#select_kind").children("option:selected").val();
		let jsonDoc2 = "ressources/"+kindAsked+".json";
	    $.getJSON(jsonDoc2,function(data) { 
	    	//console.log(data);
	    	$.each(data, function(key,val) {
	    		var item = val.UniqueName;
	    		var itemLocalName = val.LocalizedNames[2].Value;
	    		console.log(itemLocalName);
	    		var request = "https://www.albion-online-data.com/api/v2/stats/prices/"+item+"?locations=Caerleon,BlackMarket";
	    		var q_level = [1,2,3,4,5];let Ca_prices = [];let BM_prices = [];let diffs = [];
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
	    				// APPEND TO TABLE
	    				q_level.forEach(q=> {
	    					if(BM_prices[q] && Ca_prices[q] && diffs[q] && diffs[q] > 0) {
		    					$("#resultblackbiz").append("<tr><td>"+itemLocalName+"</td><td></td><td>"+BM_prices[q]+"</td><td>"+Ca_prices[q]+"</td></tr>");
		    				}
		    			});
	    			}
	    		});

//	    		$("#resultblackbiz").append("<tr><td><img width=\"64\" height=\"64\" src=" + "  https://gameinfo.albiononline.com/api/gameinfo/items/"+ item + "></img></td><td></td><td></td><td></td><td></td></tr>");
//	    		<img width=\"64\" height=\"64\" src=" + "  https://gameinfo.albiononline.com/api/gameinfo/items/"+ item + "></img>	
	    		// 	if (val.UniqueName.indexOf(kindAsked) >= 0) {
	    		// 		console.log('cest oui');
	    		// 	} else {
	    		// 		console.log('cest non');
	    		// 	}
	    	});
	    });
	});
});