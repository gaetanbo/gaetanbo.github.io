//						#black_biz_result
$(document).ready(function(){

	$("#select_kind").change(function(){
        $("#select_kind_type").change(function(){ 
            $("#select_equipment").empty();
            let kindAsked = $("#select_kind").children("option:selected").val();
		    let kindTypeAsked = $("#select_kind_type").children("option:selected").val();
		    let jsonDoc2 = "ressources/"+kindAsked+".json";
            $.getJSON(jsonDoc2,function(data) {
                console.log('getted !');
                $.each(data, function(key,val) {
                    if ( val.UniqueName.indexOf("T2") >= 0 || val.UniqueName.indexOf("T1") >= 0 ) {
                    } else {
                       if (val.UniqueName.indexOf("T3") >= 0){
                       } else {
                            if(val.UniqueName.indexOf("@") >= 0){
                            } else {
                               		// console.log(kindTypeAsked);
                               		// console.log(val.UniqueName);
                               		if (val.UniqueName.indexOf(kindTypeAsked) >= 0 ) {
	                                  	var nom_fr = val.LocalizedNames[2].Value;
                                        var optionselectbbiz = new Option(nom_fr,val.UniqueName);  
                                        $(optionselectbbiz).html(nom_fr);
                                        $("#select_equipment").append(optionselectbbiz);
                               		} else {
                               		}                            
                             }
                       }
                    }
                });
            });
       });
    });



    $.("#select_equipment").change(function(){

    });

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
