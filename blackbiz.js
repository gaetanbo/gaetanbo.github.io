//						#black_biz_result
$(document).ready(function(){

	$("#select_kind").change(function(){
        $("#select_equipment").empty();
        $("#select_kind_type").change(function(){ 
		              let kindAsked = $("#select_kind").children("option:selected").val();
		              let kindTypeAsked = $("#select_kind_type").children("option:selected").val();
                        console.log(kindTypeAsked);
		              let jsonDoc2 = "ressources/"+kindAsked+".json";
                    $.getJSON(jsonDoc2,function(data) {
                    console.log('getted !');
                    $.each(data, function(key,val) {
                        if( val.UniqueName.includes("T1") || val.UniqueName.includes("T2")) {
                        } else {
                                var optionselectbbiz = new Option(val.UniqueName,val.UniqueName);
                                $(optionselectbbiz).html(val.UniqueName);
                                $("#select_equipment").append(optionselectbbiz);
                            // add to select 
        /*                    if ( val.UniqueName.includes("@")) {
                                //    
                                data.splice(key,1);
                            } else {
                            }*/
                        }
                    });
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
