		
$(document).ready(function(){

	$("#select_kind").change(function(){ 
		fillTable();
	});
	$("#profit_wanted").change(function(){ 
		fillTable();
	});

	function fillTable() {
		$("#resultblackbiz").empty();
		$("#resultblackbiz").append("<div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>");
		let kindAsked = $("#select_kind").children("option:selected").val();
		let jsonDoc2 = "ressources/"+kindAsked+".json";
	    $.getJSON(jsonDoc2,function(data) { 	
			$.each(data, function(key,val) {
				var item = val.UniqueName;
	    		var itemLocalName = val.LocalizedNames[0].Value;
	    		if ( item.includes("@1") ) {
	    			var enchant = "1";
	    		} else if ( item.includes("@2") ) {
	    			var enchant = "2";
	    		} else if ( item.includes("@3") ) {
	    			var enchant = "3";
	    		} else {
	    			var enchant = "flat";
	    		}
	    		var profitWanted = $("#profit_wanted").children("option:selected").val();
	    			var q_level = [1,2,3,4,5];
	    			var q_text = ["None", "Normal","Good","Outstanding","Excellent","Masterpiece"];
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
								$(".lds-ring").remove();
		    					$("#resultblackbiz").append("<tr><td><img width=\"64\" height=\"64\" title=" + item + " src=" + "  https://gameinfo.albiononline.com/api/gameinfo/items/"+ item + "?quality="+q+"></img>"+itemLocalName+"</td><td><span class=\"enchant"+enchant+"\"> Enchant : "+enchant +"</span><br> Quality : "+ q_text[q]+"</td><td>"+BM_prices[q]+"</td><td>"+Ca_prices[q]+"</td><td style=" + (diffs[q]>0?'color:green':'color:red') + ">"+diffs[q]+"</td></tr>");
		    					//$("#resultblackbiz").append("<tr><td><img width=\"64\" height=\"64\" title=" + item + " src=" + "  https://gameinfo.albiononline.com/api/gameinfo/items/"+ item + "?quality="+q+"></img>"+itemLocalName+"</td><td> Enchant : "+enchant +"<br> Quality : "+ q_text[q]+"</td><td>"+BM_prices[q]+"</td><td>"+Ca_prices[q]+"</td><td style=" + (diffs[q]>0?'color:green':'color:red') + ">"+diffs[q]+"</td></tr>");
							}
							else{
								//$(".lds-ring").remove();
								//$("#resultblackbiz").append("<tr><td>No items found with your criteria :( Maybe try to lower the profit wanted ? </td></tr>");
								//$("#resultblackbizz").append("");
							}
		    			});
	    			}
	    		});
	    	});
	    });
	}
});
