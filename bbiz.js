		
$(document).ready(function(){
	$("#select_kind").change(function(){ 
		$("#resultblackbiz").empty();
		let kindAsked = $("#select_kind").children("option:selected").val();
		let jsonDoc2 = "ressources/"+kindAsked+".json";
	    $.getJSON(jsonDoc2,function(data) { 
	    	//console.log(data);
	    	$.each(data, function(key,val) {
	    		var item = val.UniqueName;
	    		console.log(item);
	    		$("#resultblackbiz").append("<tr><td><img width=\"64\" height=\"64\" src=" + "  https://gameinfo.albiononline.com/api/gameinfo/items/"+ item + "></img></td><td></td><td></td><td></td><td></td></tr>");
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