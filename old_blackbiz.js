//						#black_biz_result
let pricessss;
let price_min_asked;
$(document).ready(function(){

	$("#select_kind").change(function(){ 
    	shakelastselect();
    	gotgettem2();
    });
    $("#select_kind_type").change(function(){ 
    	gotgettem2();
    });
	$("#go").click(function() {
//   		let itemAsked = $("#select_equipment").children("option:selected").val();
//        console.log('item asked : '+itemAsked);
        /*REMPLACER LE Select_equipment par un boucle sur toutes les lignes du tableau*/
   		var city = "Caerleon";
        $('#resultblackbiz > tr').each(function(){
            console.log()
        })
		getprice(itemAsked,null,city);

	});
    $("#select_equipment").change(function(){
   		//	console.log('questcequonattnedspourlesprix');
    });

	function gotgettem2(){
	    $("#resultblackbiz").empty();
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
//                                    console.log(val);
                                    var tiers = val.UniqueName.substring(0,2);
	                              	var nom_fr = val.LocalizedNames[2].Value.substring(0, val.LocalizedNames[2].Value.length-12);
                                    console.log(nom_fr);
	                                $("#resultblackbiz").append("<tr><th scope=\"row\">"+nom_fr+"</th><td id="+tiers+"></td><td id=\"T5\"></td><td id=\"T6\"></td><td id=\"T7\"></td><td id=\"T8\"></td>");
	                       		} else {
	                       			return null;
	                       		}  
	                    	} else {
	                    		return null;
	                    	} 
	                    }
	            }
	        });
	        console.log('gotgettem2 fini');
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
    
	function shakelastselect() {
		$("#select_kind_type").effect("shake", {direction:"up"});
	};
    
     /*function gotgettem(){
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
    };*/
    
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
