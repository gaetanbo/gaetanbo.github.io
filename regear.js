
$(document).ready(function(){ 



    $("#regear_pul_prices").click(function(){
            
        let gear_set = $("#regear_select_gearset").children("option:selected").val();
        switch (gear_set) {
            case 'tank':
                var gears = ['T6_BAG','T8_HEAD_PLATE_SET2','T4_CAPEITEM_FW_MARTLOCK','T8_2H_RAM_KEEPER','T8_ARMOR_PLATE_SET3','T5_MOUNT_ARMORED_HORSE','T8_SHOES_LEATHER_SET2','T8_MEAL_SANDWICH','T7_POTION_STONESKIN'];
                break;
            case 'fire':
                var gears = ['T6_BAG','T8_HEAD_PLATE_SET2','T4_CAPEITEM_FW_FORTSTERLING','T8_2H_INFERNOSTAFF','T8_ARMOR_CLOTH_SET2','T5_MOUNT_ARMORED_HORSE','T8_SHOES_CLOTH_SET1','T8_MEAL_STEW','T4_POTION_COOLDOWN'];
                break;
            case 'heal':
                    var gears = ['T6_BAG','T8_HEAD_LEATHER_SET1','T4_CAPEITEM_FW_FORTSTERLING','T8_2H_HOLYSTAFF_HELL','T8_ARMOR_CLOTH_SET2','T5_MOUNT_ARMORED_HORSE','T8_SHOES_CLOTH_SET1','T7_MEAL_OMELETTE','T7_POTION_STONESKIN'];
                break;
            default:
                var gears = ['T6_BAG','T8_HEAD_LEATHER_SET1','T4_CAPEITEM_FW_FORTSTERLING','T8_2H_HOLYSTAFF_HELL','T8_ARMOR_CLOTH_SET2','T5_MOUNT_ARMORED_HORSE','T8_SHOES_CLOTH_SET1','T7_MEAL_OMELETTE','T4_POTION_COOLDOWN'];
                break;
        }
        // var cities = {"1" : "Bridgewatch","2" : "Caerleon","3" : "Fort Sterling","5" : "Lymhurst","6" : "Martlock","10" : "Thetford"};
        $("#regear_result").empty();
        let city = $("#regear_select_city").children("option:selected").val();
        let gear_total_cost = 0;
        gears.forEach(function(element){
            $.get("https://www.albion-online-data.com/api/v2/stats/prices/"+element+"?locations="+city,function(d3){
                let dirty_name = d3[0].item_id;
                let name = dirty_name.replace(/_/g, " ");
                let dirty_price_min = d3[0].sell_price_min;
                let price_min = numberWithCommas(dirty_price_min);
                let price_date = d3[0].sell_price_min_date;
                let price_date_in_second = Date.parse(price_date);
                let date_now = Date.now();
                if ( (date_now - price_date_in_second) > 42000000) { // si la date reçu est supérieure à 12h from now
                    $("#regear_result").append("<div class=\"regear-sub-container\"><img class=\"img_logo\" src=\"https://gameinfo.albiononline.com/api/gameinfo/items/"+element+".png\"><p><u class=\"undertext\">"+name+"</u></p><p><font color=\"red\"> "+price_min+"</font> silver at "+city+"</p></div>");
                } else{
                    $("#regear_result").append("<div class=\"regear-sub-container\"><img class=\"img_logo\" src=\"https://gameinfo.albiononline.com/api/gameinfo/items/"+element+".png\"><p><u class=\"undertext\">"+name+"</u></p><p><font color=\"green\"> "+price_min+"</font> silver at "+city+"</p></div>");
                }
                gear_total_cost = gear_total_cost + dirty_price_min;
                console.log("TOTAL GEAR COST : "+numberWithCommas(gear_total_cost));
            });
            //$("#regear_result").append("<p>Total : "+gear_total_cost);        
        });
    });
});



function numberWithCommas(number) {
    var parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

//$.get("https://www.albion-online-data.com/api/v2/stats/prices/"+ressource_typeAsked+"_LEVEL2@2",function(d){});
//        $("#select_ressource_type").empty();
//        $.getJSON(jsonDoc,function(data) {
//             $.each(data, function(key,val) {
//                 var tierRessourceAsked = val.UniqueName;
//                 var o = new Option(val.UniqueName,val.UniqueName);
//                 $(o).html(val.UniqueName);
//                 $("#select_ressource_type").append(o);
//             });
//         });