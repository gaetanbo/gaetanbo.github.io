//						#black_biz_result
$(document).ready(function(){

	$("#select_kind").change(function(){
		let kindAsked = $("#select_kind").children("option:selected").val();
		console.log(kindAsked);
		let jsonDoc2 = "ressources/"+kindAsked+".json";
		console.log(jsonDoc2);
		//$("#select_kind_type").empty();
		$.getJSON(jsonDoc2,function(data) {
			console.log('get');
			console.log(data);
				$.each(data, function(key,val) {
						var o = new Option(val.UniqueName,val.UniqueName);
						console.log(o);
						$(o).html(val.UniqueName);
						$("#select_kind_type").append(o);
				});
		});
	});
});
	//
	//
	// let price_min;
	// let dataprice;
	// function fetchData (item, enchantLevel = 0,location = 0,quality = 0){
	// 	// location, enchantLevel et quality peuvent etre nul
	// 	var request = "https://www.albion-online-data.com/api/v2/stats/prices/"+item;
	// 		if (enchantLevel) {
	// 			request += enchantLevel;
	// 		} else {
	// 		 // console.log('no enchantLevelAsked');
	// 		}
	// 		if (location) {
	// 			request +="?locations=" +location;
	// 		} else {
	// 			// console.log('no locationAsked');
	// 		}
	// 		$.get(request, function(dataprice){
	// 			// price_min = dataprice[0].sell_price_min;
	// 			//        This only return the first city in the array, rarely the same city
	// 			// console.log("price min for "+item+"= "+price_min);
	// 			// console.log(dataprice);
	// 			return dataprice;
	// 		});
	// };

	// IF PRICE ARE MAX BENEF , ADD CLASSES  to rd :
	// 	'table-danger'		RED
	// 	'table-warning'		YELLOW
	// 	'table-sucess'		green
	// 	'table-info'		blue

  //	    https://cors.io/?
	//			#itemCategory
	//			https://gameinfo.albiononline.com/api/gameinfo/events/33204877
	// Item Data:		https://gameinfo.albiononline.com/api/gameinfo/items/T2_BAG/data/
	// item category : 	https://gameinfo.albiononline.com/api/gameinfo/items/_itemCategoryTree
	// item icon : 		https://gameinfo.albiononline.com/api/gameinfo/items/T2_BAG/
