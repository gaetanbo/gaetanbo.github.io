$(document).ready(function(){
     //$("#select_ressource").change(function(){
     $("#select_ressource").change(function(){
         let ressourceAsked = $("#select_ressource").children("option:selected").val();
         let jsonDoc = "ressources/"+ressourceAsked+".json";
         $("#select_ressource_type").empty();
         $.getJSON(jsonDoc,function(data) {
             $.each(data, function(key,val) {
                 var tierRessourceAsked = val.UniqueName;
                 var o = new Option(val.UniqueName,val.UniqueName);
                 $(o).html(val.UniqueName);
                 $("#select_ressource_type").append(o);
                //val.LocalizedNames[2].Value +" "+ val.UniqueName.substring(0,2)+"-->"+val.UniqueName
             });
         });
     });
     let ressource_typeAsked = "";
     $("#select_ressource_type").change(function(event) {
         //variable declaration
         let bg_citytrader ="";
           let ca_citytrader ="";
           let fs_citytrader ="";
           let ly_citytrader ="";
           let ma_citytrader ="";
           let th_citytrader ="";
           let bg1_citytrader ="";
           let bg2_citytrader ="";
           let bg3_citytrader ="";
           let ca1_citytrader ="";
           let ca2_citytrader ="";
           let ca3_citytrader ="";
           let fs1_citytrader ="";
           let fs2_citytrader ="";
           let fs3_citytrader ="";
           let ly1_citytrader ="";
           let ly2_citytrader ="";
           let ly3_citytrader ="";
           let ma1_citytrader ="";
           let ma2_citytrader ="";
           let ma3_citytrader ="";
           let th1_citytrader ="";
           let th2_citytrader ="";
           let th3_citytrader ="";
         //console.clear();
         $("#bgcitytrader").empty();
         $("#cacitytrader").empty();
         $("#fscitytrader").empty();
         $("#lycitytrader").empty();
         $("#macitytrader").empty();
         $("#thcitytrader").empty();
         $("#bg1citytrader").empty();
         $("#ca1citytrader").empty();
         $("#fs1citytrader").empty();
         $("#ly1citytrader").empty();
         $("#ma1citytrader").empty();
         $("#th1citytrader").empty();
         $("#bg2citytrader").empty();
         $("#ca2citytrader").empty();
         $("#fs2citytrader").empty();
         $("#ly2citytrader").empty();
         $("#ma2citytrader").empty();
         $("#th2citytrader").empty();
         $("#bg3citytrader").empty();
         $("#ca3citytrader").empty();
         $("#fs3citytrader").empty();
         $("#ly3citytrader").empty();
         $("#ma3citytrader").empty();
         $("#th3citytrader").empty();

         ressource_typeAsked = $("#select_ressource_type").children("option:selected").val();
         //console.log(ressource_typeAsked);
         //
         $.get("https://www.albion-online-data.com/api/v2/stats/prices/"+ressource_typeAsked,function(d){
             //  console.log(d);
             $("select_city").empty();
             var array2 = [];
             $.each(d, function(index, val) {
                 var oo = new Option(val["city"],val["city"]);
                 $(oo).html(val["city"]);
                 $("#select_city").append(oo);
                 // array2.push([val["city"],d[index].sell_price_min]);
                 //  console.log(array2[0][index]);
                 switch(val["city"]){
                     case "Bridgewatch":
                         array2.push([val["city"],d[index].sell_price_min]);
                         bg_citytrader = d[index].sell_price_min;
                         break;
                     case "Caerleon":
                         array2.push([val["city"],d[index].sell_price_min]);
                         // A la place de ça faire une vraie comparaison entre toutes les valeurs
                         if (array2[1][1] > array2[0][1]) {
                             $('#bgcitytrader').removeClass('red');
                             $('#bgcitytrader').addClass('green');
                         } else {
                             $('#bgcitytrader').removeClass('green');
                             $('#bgcitytrader').addClass('red');
                         }
                         ca_citytrader = d[index].sell_price_min;
                         break;
                     case "Fort Sterling":
                         array2.push([val["city"],d[index].sell_price_min]);
                         try{
                             if (array2[2][1] >= array2[1][1]) {
                                 $('#fscitytrader').removeClass('green');
                                 $('#fscitytrader').addClass('red');
                             } else {
                                 $('#fscitytrader').removeClass('red');
                                 $('#fscitytrader').addClass('green');
                             }
                         }
                         catch(e) {
                             //console.log(e);
                         }
                         fs_citytrader = d[index].sell_price_min;
                         break;
                     case "Lymhurst":
                         array2.push([val["city"],d[index].sell_price_min]);
                         try{
                             if (array2[3][1] >= array2[1][1]) {
                                 $('#lycitytrader').removeClass('green');
                                 $('#lycitytrader').addClass('red');
                             } else {
                                 $('#lycitytrader').removeClass('red');
                                 $('#lycitytrader').addClass('green');
                             }
                         }
                         catch(e) {
                             //console.log(e);
                         }
                         ly_citytrader = d[index].sell_price_min;
                         break;
                     case "Martlock":
                         array2.push([val["city"],d[index].sell_price_min]);
                         try{
                             if (array2[4][1] >= array2[1][1]) {
                                 $('#macitytrader').removeClass('green');
                                 $('#macitytrader').addClass('red');
                             } else {
                                 $('#macitytrader').removeClass('red');
                                 $('#macitytrader').addClass('green');
                             }
                         }
                         catch(e) {
                             //console.log(e);
                         }
                         ma_citytrader = d[index].sell_price_min;
                         break;
                     case "Thetford":
                         array2.push([val["city"],d[index].sell_price_min]);
                         try{
                             if (array2[5][1] >= array2[1][1]) {
                                 $('#thcitytrader').removeClass('green');
                                 $('#thcitytrader').addClass('red');
                             } else {
                                 $('#thcitytrader').removeClass('red');
                                 $('#thcitytrader').addClass('green');
                             }
                         }
                         catch(e) {
                             //console.log(e);
                         }
                         th_citytrader = d[index].sell_price_min;
                         break;
                     default:
                         console.log("Unable to proceed");
                 }
                  /* DEFAULT CITY SHOULD BE CAERLEON  */
                  /* Black Market and Cross things should be ignored for materials at least */
             });
             $("#bgcitytrader").append(bg_citytrader);
             $("#cacitytrader").append(ca_citytrader);
             $("#fscitytrader").append(fs_citytrader);
             $("#lycitytrader").append(ly_citytrader);
             $("#macitytrader").append(ma_citytrader);
             $("#thcitytrader").append(th_citytrader);
             //console.log('apiwascalled_1');


               $.get("https://www.albion-online-data.com/api/v2/stats/prices/"+ressource_typeAsked+"_LEVEL1@1",function(d1){
                 //console.log(d1);
                 $("select_city").empty();

                 var array3 = [];
                 $.each(d1,function(index1,val1) {
                   switch (val1["city"]) {
                     case "Bridgewatch":
                       array3.push([val1["city"],d1[index1].sell_price_min]);
                       bg1_citytrader = d1[index1].sell_price_min;
                       break;
                     case "Caerleon":
                       array3.push([val1["city"],d1[index1].sell_price_min]);
                       ca1_citytrader = d1[index1].sell_price_min;
                       break;
                     case "Fort Sterling":
                       array3.push([val1["city"],d1[index1].sell_price_min]);
                       fs1_citytrader = d1[index1].sell_price_min;
                       break;
                     case "Lymhurst":
                       array3.push([val1["city"],d1[index1].sell_price_min]);
                       ly1_citytrader = d1[index1].sell_price_min;
                       break;
                     case "Martlock":
                       array3.push([val1["city"],d1[index1].sell_price_min]);
                       ma1_citytrader = d1[index1].sell_price_min;
                       break;
                     case "Thetford":
                       array3.push([val1["city"],d1[index1].sell_price_min]);
                       th1_citytrader = d1[index1].sell_price_min;
                       break;
                     default:
                       // /console.log('default');

                   }
                 });
                   $("#bg1citytrader").append(bg1_citytrader);
                   $("#ca1citytrader").append(ca1_citytrader);
                   $("#fs1citytrader").append(fs1_citytrader);
                   $("#ly1citytrader").append(ly1_citytrader);
                   $("#ma1citytrader").append(ma1_citytrader);
                   $("#th1citytrader").append(th1_citytrader);
               });

               $.get("https://www.albion-online-data.com/api/v2/stats/prices/"+ressource_typeAsked+"_LEVEL2@2",function(d2){
                 console.log('d2');
                 console.log(d2);
                 $("select_city").empty();

                 var array3 = [];
                 $.each(d2,function(index2,val2) {
                   switch (val2["city"]) {
                     case "Bridgewatch":
                       array3.push([val2["city"],d2[index2].sell_price_min]);
                       bg2_citytrader = d2[index2].sell_price_min;
                       break;
                     case "Caerleon":
                       array3.push([val2["city"],d2[index2].sell_price_min]);
                       ca2_citytrader = d2[index2].sell_price_min;
                       break;
                     case "Fort Sterling":
                       array3.push([val2["city"],d2[index2].sell_price_min]);
                       fs2_citytrader = d2[index2].sell_price_min;
                       break;
                     case "Lymhurst":
                       array3.push([val2["city"],d2[index2].sell_price_min]);
                       ly2_citytrader = d2[index2].sell_price_min;
                       break;
                     case "Martlock":
                       array3.push([val2["city"],d2[index2].sell_price_min]);
                       ma2_citytrader = d2[index2].sell_price_min;
                       break;
                     case "Thetford":
                       array3.push([val2["city"],d2[index2].sell_price_min]);
                       th2_citytrader = d2[index2].sell_price_min;
                       break;
                     default:
                       //console.log('default');

                   }
                 });
                 $("#bg2citytrader").append(bg2_citytrader);
                 $("#ca2citytrader").append(ca2_citytrader);
                 $("#fs2citytrader").append(fs2_citytrader);
                 $("#l2ycitytrader").append(ly2_citytrader);
                 $("#ma2citytrader").append(ma2_citytrader);
                 $("#th2citytrader").append(th2_citytrader);
               });

               $.get("https://www.albion-online-data.com/api/v2/stats/prices/"+ressource_typeAsked+"_LEVEL3@3",function(d3){
                 //console.log(ressource_typeAsked);
                 console.log("d3");
                 console.log(d3);
                 $("select_city").empty();
                 $("#bg3_citytrader").empty();
                 $("#ca3_citytrader").empty();
                 $("#fs3_citytrader").empty();
                 $("#ly3_citytrader").empty();
                 $("#ma3_citytrader").empty();
                 $("#th3_citytrader").empty();
                 var array3 = [];
                 $.each(d3,function(index2,val2) {
                   switch (val2["city"]) {
                     case "Bridgewatch":
                       array3.push([val2["city"],d3[index2].sell_price_min]);
                       bg3_citytrader = d3[index2].sell_price_min;
                       break;
                     case "Caerleon":
                       array3.push([val2["city"],d3[index2].sell_price_min]);
                       ca3_citytrader = d3[index2].sell_price_min;
                       break;
                     case "Fort Sterling":
                       array3.push([val2["city"],d3[index2].sell_price_min]);
                       fs3_citytrader = d3[index2].sell_price_min;
                       break;
                     case "Lymhurst":
                       array3.push([val2["city"],d3[index2].sell_price_min]);
                       ly3_citytrader = d3[index2].sell_price_min;
                       break;
                     case "Martlock":
                       array3.push([val2["city"],d3[index2].sell_price_min]);
                       ma3_citytrader = d3[index2].sell_price_min;
                       break;
                     case "Thetford":
                       array3.push([val2["city"],d3[index2].sell_price_min]);
                       th3_citytrader = d3[index2].sell_price_min;
                       break;
                     default:
                       //console.log('default');

                   }
                 });
                 $("#bg3citytrader").append(bg3_citytrader);
                 $("#ca3citytrader").append(ca3_citytrader);
                 $("#fs3citytrader").append(fs3_citytrader);
                 $("#l23citytrader").append(ly3_citytrader);
                 $("#ma3citytrader").append(ma3_citytrader);
                 $("#th3citytrader").append(th3_citytrader);
               });

             // $("#bg3citytrader").append(bg3citytrader);
             // $("#ca3citytrader").append(ca3citytrader);
             // $("#fs3citytrader").append(fs3citytrader);
             // $("#ly3citytrader").append(ly3citytrader);
             // $("#ma3citytrader").append(ma3citytrader);
             // $("#th3citytrader").append(th3citytrader);
         });
     });

     let citySelected = "";
     $("#select_city").change(function(event) {
         console.clear();
         /* DEFAULT CITY SHOULD BE CAERLEON  */
         var cities = {"1" : "Bridgewatch","2" : "Caerleon","3" : "Fort Sterling","5" : "Lymhurst","6" : "Martlock","10" : "Thetford"};
         citySelected = $("#select_city").children("option:selected").val();
         console.log(citySelected);
         $.get("https://www.albion-online-data.com/api/v2/stats/prices/"+ressource_typeAsked+"?locations="+citySelected,function(dataThatMatters){
             console.log(dataThatMatters);
             console.log("sell min : "+dataThatMatters[0].sell_price_min);
             console.log('apiwascalled_2');
         });
     });
 });

 $(document).ready(function(){
      $("#Lootbtn").click(function(){
         $( ".content-loot" ).toggle();
      });
      $("#Focabtn").click(function(){
         $( ".content-foca" ).toggle();
      });
      $("#Buildsbtn").click(function(){
         $( ".content-builds" ).toggle();
      });
      $("#Craftsbtn").click(function(){
         $( ".content-crafts" ).toggle();
      });
      $("#Marketbtn").click(function(){
         $( ".content-Market" ).toggle();
      });
      $("#City_Traderbtn").click(function(){
         $( ".content-cityTrader" ).toggle();
      });

              // TRY NOT TO USE THIS, TRY BE SMART
     //       var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
     // var data = [];
     // $("#select_locations").change( _ => {
     // 		let selectId = $("#select_locations").children("option:selected").val()
     // 		var buyerData = {
     //        labels : data[selectId].data.timestamps.map(x => new Date(x).toLocaleDateString('fr-FR', options)),
     //       	datasets : [
     //         		{
     //           		fillColor : "rgba(255,0,0,0.4)",
     //           		strokeColor : "#ACC26D",
     //           		pointColor : "red",
   //            	pointStrokeColor : "#9DB86D",
     //           		data : data[selectId].data.prices_max
     //         		}
     //       	]
     //     	}
     //     	$('#buyers').empty();
     //     	var buyers = document.getElementById('buyers').getContext('2d');
     //     	// draw line chart
     //     	new Chart(buyers).Line(buyerData);
 // })
     // $.get("https://www.albion-online-data.com/api/v1/stats/charts/T4_ORE_LEVEL2@2", function(d) {
     //     		d.forEach((x,i) => {$("#select_locations").append("<option value=" + i + ">" + x.location + "</option>")});
     //     		data = d;
     //     		$("#select_locations").change();
     //   	});
    });
