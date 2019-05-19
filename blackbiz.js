//						#black_biz_result
let pricessss;
let price_min_asked;
$(document).ready(function(){

    $("#select_kind_type").change(function(){ 
    	gotgettem();
    });
	$("#go").click(function() {
   		let itemAsked = $("#select_equipment").children("option:selected").val();
   		console.log(itemAsked);
   		var city = "Caerleon";
		getprice(itemAsked,null,city);
		console.log(price_min_asked);

	});
    $("#select_equipment").change(function(){
   		console.log('questcequonattnedspourlesprix');
    });

	function gotgettem(){
        $("#select_equipment").empty();
        let kindAsked = $("#select_kind").children("option:selected").val();
	    let kindTypeAsked = $("#select_kind_type").children("option:selected").val();
	    let jsonDoc2 = "ressources/"+kindAsked+".json";
        $.getJSON(jsonDoc2,function(data) {
            $.each(data, function(key,val) {
              	if(val.UniqueName.indexOf("T1_") >= 0 ) {
	                if ( val.UniqueName.indexOf("T2_") >= 0) {
                		if (val.UniqueName.indexOf("T3_") >= 0 ) {
                		}
                	}
                } else {
                        if(val.UniqueName.indexOf("@") >= 0){
                        	//console.log(val.UniqueName + ' --> @');
                        	return null;
                        } else {
                        	if (val.UniqueName.indexOf("T4_") >= 0) {
                           		if (val.UniqueName.indexOf(kindTypeAsked) >= 0 ) {
                                  	//var nom_fr = (val.LocalizedNames[2].Value).substring(0,25);
                                  	var nom_fr = val.LocalizedNames[2].Value;
                                    var optionselectbbiz = new Option(nom_fr,val.UniqueName);  
                                    $(optionselectbbiz).html(nom_fr);
                                    $("#select_equipment").append(optionselectbbiz);
                           		} else {
                           			return null;
                           		}  
                        	} else {
                        		// console.log(val.UniqueName + ' --> dommage');
                        		return null;
                        	} 
                        }
                }
            });
            console.log('fini');
        });
    };



    function getprice(item, enchantLevel = 0,location = 0,quality = 0) {
    // location, enchantLevel et quality peuvent etre nul
    var request = "https://www.albion-online-data.com/api/v2/stats/prices/"+item;
      if (enchantLevel) {
        request += enchantLevel;
      } else {
       // console.log('no enchantLevelAsked');
      }
      if (location) {
        request +="?locations="+location;
      } else {
        // console.log('no locationAsked');
      }
    		console.log(request);
      $.get(request, function(pricessss){
        price_min_asked = pricessss[0].sell_price_min;
        //        This only return the first city in the array, rarely the same city
        console.log("price min for "+item+"= "+price_min_asked);
		return price_min_asked;
      });
  
    };
});


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
