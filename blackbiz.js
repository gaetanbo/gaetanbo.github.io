$(document).ready(function(){
	console.log('bbiz !');
	blackbiz();
	//		#black_biz_result
  	//	    https://cors.io/?
  	// 		https://gameinfo.albiononline.com/api/gameinfo/items/T2_BAG
 	function blackbiz1 () {
		$.get("https://cors.io/?https://gameinfo.albiononline.com/api/gameinfo/items/T2_BAG/data",function(d3){
      		console.log(d3);
      		//console.log(d3.localizedDescriptions["FR-FR"]); 
    	});
  	}
});


	// IF PRICE ARE MAX BENEF , ADD CLASSES  to rd :
	// 	'table-danger'		RED
	// 	'table-warning'		YELLOW
	// 	'table-sucess'		green
	// 	'table-info'		blue


	//	#itemCategory
	//			https://gameinfo.albiononline.com/api/gameinfo/events/33204877
	// Item Data:		https://gameinfo.albiononline.com/api/gameinfo/items/T2_BAG/data/
	// item category : 	https://gameinfo.albiononline.com/api/gameinfo/items/_itemCategoryTree
	// item icon : 		https://gameinfo.albiononline.com/api/gameinfo/items/T2_BAG/
 