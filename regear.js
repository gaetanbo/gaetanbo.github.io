
$(document).ready(function(){ 

    $("#regear_pul_prices").click(function(){ 
        let gear_set = $("#regear_select_gearset").children("option:selected").val();
        switch (gear_set) {
            case 'tank':
                var gears = ['T6_BAG','T8_HEAD_PLATE_SET2','T4_CAPEITEM_FW_MARTLOCK','T8_2H_RAM_KEEPER','T8_ARMOR_PLATE_SET3','T5_MOUNT_ARMORED_HORSE','T8_SHOES_LEATHER_SET2','T8_MEAL_SANDWICH','T7_POTION_STONESKIN'];
                break;
            case 'fire':
                var gears = ['T6_BAG','T8_HEAD_PLATE_SET2','T4_CAPEITEM_FW_FORTSTERLING','T8_2H_FIRESTAFF_HELL','T8_ARMOR_CLOTH_SET2','T5_MOUNT_ARMORED_HORSE','T8_SHOES_CLOTH_SET1','T8_MEAL_STEW','T7_POTION_STONESKIN'];
                break;
            case 'heal':
                    var gears = ['T6_BAG','T8_HEAD_LEATHER_SET1','T4_CAPEITEM_FW_FORTSTERLING','T8_2H_HOLYSTAFF_HELL','T8_ARMOR_CLOTH_SET2','T5_MOUNT_ARMORED_HORSE','T8_SHOES_CLOTH_SET1','T7_MEAL_OMELETTE','T7_POTION_STONESKIN'];
                break;
            default:
                var gears = ['T6_BAG','T8_HEAD_LEATHER_SET1','T4_CAPEITEM_FW_FORTSTERLING','T8_2H_HOLYSTAFF_HELL','T8_ARMOR_CLOTH_SET2','T5_MOUNT_ARMORED_HORSE','T8_SHOES_CLOTH_SET1','T7_MEAL_OMELETTE','T4_POTION_COOLDOWN'];
                break;
        }
        $("#regear_result").empty();
        let city = $("#regear_select_city").children("option:selected").val();
        gears.forEach(function(element){
            $.get("https://www.albion-online-data.com/api/v2/stats/prices/"+element+"?locations="+city,function(d3){
                let dirty_name = d3[0].item_id;
                let name = dirty_name.replace(/_/g, " ");
                let dirty_price_min = d3[0].sell_price_min;
                let price_min = numberWithCommas(d3[0].sell_price_min);
                let price_date = d3[0].sell_price_min_date;
                let price_date_in_second = Date.parse(price_date);
                let date_now = Date.now();
                if ( (date_now - price_date_in_second) > 42000000) { // si la date reçu est supérieure à 12h from now
                    $("#regear_result").append("<div class=\"regear-sub-container\"><img class=\"img_logo\" src=\"https://gameinfo.albiononline.com/api/gameinfo/items/"+element+".png\"><p><u class=\"undertext\">"+name+"</u></p><p><font color=\"red\">  "+price_min+"</font> silver at "+city+"</p></div>");
                } else{
                    $("#regear_result").append("<div class=\"regear-sub-container\"><img class=\"img_logo\" src=\"https://gameinfo.albiononline.com/api/gameinfo/items/"+element+".png\"><p><u class=\"undertext\">"+name+"</u></p><p> "+price_min+" silver at "+city+"</p></div>");
                }               
            });
        });
    });
});


