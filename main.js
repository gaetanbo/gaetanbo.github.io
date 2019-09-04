
$(document).ready(function(){
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
             });
         });
     });
     let ressource_typeAsked = "";
     $("#select_ressource_type").change(function(event) {
           $("#sortedPrices0").empty();
           $("#sortedPrices").empty();
           $("#sortedPrices2").empty();
           $("#sortedPrices3").empty();
           $("#sortedPricesmax0").empty();
           $("#sortedPricesmax").empty();
           $("#sortedPricesmax2").empty();
           $("#sortedPricesmax3").empty();

         ressource_typeAsked = $("#select_ressource_type").children("option:selected").val();
         $.get("https://www.albion-online-data.com/api/v2/stats/prices/"+ressource_typeAsked,function(d){
             $("select_city").empty();
             var array2 = [];

              cleanCrossCity(d);
              cleanEmptyPrices(d);
              sortMinAndAppend(d,"#sortedPrices0",ressource_typeAsked);
              sortMaxAndAppend(d,"#sortedPricesmax0",ressource_typeAsked);


             $.each(d, function(index, val) {
                 var oo = new Option(val["city"],val["city"]);
                 $(oo).html(val["city"]);
                 $("#select_city").append(oo);
                 switch(val["city"]){
                     case "Bridgewatch":
                         array2.push([val["city"],d[index].sell_price_min]);
                         bg_citytrader = d[index].sell_price_min;
                         break;
                     case "Caerleon":
                         // A la place de ça faire une vraie comparaison entre toutes les valeurs
                         ca_citytrader = d[index].sell_price_min;
                         break;
                     case "Fort Sterling":
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
                         }
                         th_citytrader = d[index].sell_price_min;
                         break;
                     default:
                 }
                  /* DEFAULT CITY SHOULD BE CAERLEON  */
                  /* Black Market and Cross things should be ignored for materials at least */
             });

          if (!ressource_typeAsked.includes("T2") && !ressource_typeAsked.includes("T3") && !ressource_typeAsked.includes("ROCK") && !ressource_typeAsked.includes("STONE")) {
              // On a pas T2 et on a pas T3
              // on peut dmander lenchant
              $.get("https://www.albion-online-data.com/api/v2/stats/prices/"+ressource_typeAsked+"_LEVEL1@1",function(priceArray){
                  //console.log(priceArray);

                  var tiers = ressource_typeAsked+"LEVEL1@1";
                  cleanCrossCity(priceArray);
                  cleanEmptyPrices(priceArray);
                  sortMinAndAppend(priceArray,"#sortedPrices",tiers);
                  sortMaxAndAppend(priceArray,"#sortedPricesmax",tiers);

                  $("select_city").empty();
                   $.each(priceArray,function(index1,val1) {
                      //console.log(d1[index1].city);
                       switch (val1["city"]) {
                         case "Bridgewatch":
                           bg1_citytrader = priceArray[index1].sell_price_min;
                           break;
                         case "Caerleon":
                           ca1_citytrader = priceArray[index1].sell_price_min;
                           break;
                         case "Fort Sterling":
                           fs1_citytrader = priceArray[index1].sell_price_min;
                           break;
                         case "Lymhurst":
                           ly1_citytrader = priceArray[index1].sell_price_min;
                           break;
                         case "Martlock":
                           ma1_citytrader = priceArray[index1].sell_price_min;
                           break;
                         case "Thetford":
                           th1_citytrader = priceArray[index1].sell_price_min;
                           break;
                         default:
                       }
                   });
              });

              $.get("https://www.albion-online-data.com/api/v2/stats/prices/"+ressource_typeAsked+"_LEVEL2@2",function(d2){
                 $("select_city").empty();
                  var tiers = ressource_typeAsked+"LEVEL2@2";
                  cleanCrossCity(d2);
                  cleanEmptyPrices(d2);
                  sortMinAndAppend(d2,"#sortedPrices2",tiers);
                  sortMaxAndAppend(d2,"#sortedPricesmax2",tiers);

                 var array3 = [];
                 $.each(d2,function(index2,val2) {
                   switch (val2["city"]) {
                     case "Bridgewatch":
                       bg2_citytrader = d2[index2].sell_price_min;
                       break;
                     case "Caerleon":
                       ca2_citytrader = d2[index2].sell_price_min;
                       break;
                     case "Fort Sterling":
                       fs2_citytrader = d2[index2].sell_price_min;
                       break;
                     case "Lymhurst":
                       ly2_citytrader = d2[index2].sell_price_min;
                       break;
                     case "Martlock":
                       ma2_citytrader = d2[index2].sell_price_min;
                       break;
                     case "Thetford":
                       th2_citytrader = d2[index2].sell_price_min;
                       break;
                     default:
                   }
                 });
              });

              $.get("https://www.albion-online-data.com/api/v2/stats/prices/"+ressource_typeAsked+"_LEVEL3@3",function(d3){
                 $("select_city").empty();

                var tiers = ressource_typeAsked+"LEVEL3@3";
                cleanCrossCity(d3);
                cleanEmptyPrices(d3);
                sortMinAndAppend(d3,"#sortedPrices3",tiers);
                sortMaxAndAppend(d3,"#sortedPricesmax3",tiers);

                 var array3 = [];
                 $.each(d3,function(index2,val2) {
                   switch (val2["city"]) {
                     case "Bridgewatch":
                       bg3_citytrader = d3[index2].sell_price_min;
                       break;
                     case "Caerleon":
                       ca3_citytrader = d3[index2].sell_price_min;
                       break;
                     case "Fort Sterling":
                       fs3_citytrader = d3[index2].sell_price_min;
                       break;
                     case "Lymhurst":
                       ly3_citytrader = d3[index2].sell_price_min;
                       break;
                     case "Martlock":
                       ma3_citytrader = d3[index2].sell_price_min;
                       break;
                     case "Thetford":
                       th3_citytrader = d3[index2].sell_price_min;
                       break;
                     default:
                   }
                 });
               });
          } else {
           // console.log('else');
          }
         });
     });

     let citySelected = "";
     $("#select_city").change(function(event) {
         /* DEFAULT CITY SHOULD BE CAERLEON  */
         var cities = {"1" : "Bridgewatch","2" : "Caerleon","3" : "Fort Sterling","5" : "Lymhurst","6" : "Martlock","10" : "Thetford"};
         citySelected = $("#select_city").children("option:selected").val();
         $.get("https://www.albion-online-data.com/api/v2/stats/prices/"+ressource_typeAsked+"?locations="+citySelected,function(dataThatMatters){
         });
     });
 });

  // https://www.albion-online-data.com/api/v2/stats/prices/T4_ORE_LEVEL2@2?location=Bridgewatch,Caerleon
  // https://albiononline2d.ams3.cdn.digitaloceanspaces.com/thumbnails/128/T5_METALBAR_LEVEL3

  let price_min;
  let dataprice;
  function fetchData (item, enchantLevel = 0,location = 0,quality = 0){
    // location, enchantLevel et quality peuvent etre nul
    var request = "https://www.albion-online-data.com/api/v2/stats/prices/"+item;
      if (enchantLevel) {
        request += enchantLevel;
      } else {
       // console.log('no enchantLevelAsked');
      }
      if (location) {
        request +="?locations=" +location;
      } else {
        // console.log('no locationAsked');
      }
      $.get(request, function(dataprice){
        // price_min = dataprice[0].sell_price_min;
        //        This only return the first city in the array, rarely the same city
        // console.log("price min for "+item+"= "+price_min);
        // console.log(dataprice);
        return dataprice;
      });
  };
  // fetchData("T2_ORE","","");
  // fetchData("T4_ORE","_LEVEL3@3","Bridgewatch,Caerleon");



  let benef;
  let benef2;
  function sortMinAndAppend(donnee,destinataire,tiers) {
    const sortdonnee = donnee.sort((a,b) => (a.sell_price_min > b.sell_price_min ? 1 : -1));
    $(destinataire).append(sortdonnee[0].sell_price_min+" in "+sortdonnee[0].city);
    benef = sortdonnee[0].sell_price_min;
  };
  function sortMaxAndAppend(donnee,destinataire,tiers) {
    const sortdonnee = donnee.sort((a,b) => (a.sell_price_min < b.sell_price_min ? 1 : -1));
    // console.log(sortdonnee[0].sell_price_min);
    benef2 = sortdonnee[0].sell_price_min - benef;
    destinataire2 = destinataire+"benef";
    $(destinataire).empty();
    $(destinataire2).empty();
    $(destinataire).append(sortdonnee[0].sell_price_min+" in "+sortdonnee[0].city);
    $(destinataire2).append(benef2);
    //return benef;
  };

  function cleanEmptyPrices(array) {
    for(var i = 0; i < array.length; i++) {
      if(array[i].sell_price_min === 0 ) {
        //console.log('empty price');
        array.splice(i,1);
        i--;
      }
    }
    return array;
  };

  function cleanCrossCity(array) {
    for(var i = 0; i < array.length; i++) {
      if( (typeof array[i].city == 'number') || array[i].city.includes("Cross") ||array[i].city.includes("Black") || array[i].city.includes("2000") || array[i].city.includes("200") || array[i].city.includes("3234") || array[i].city.includes("229")) {
           // console.log(array[i].city);
        array.splice(i,1);
        i--;
      }
    }
    return array;
  };