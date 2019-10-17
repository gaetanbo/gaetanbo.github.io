
$(document).ready(function(){ 
    $("#fm_test").click(function(){
        console.log('test');
    });

    $("#regear_pul_prices").click(function(){
        // var cities = {"1" : "Bridgewatch","2" : "Caerleon","3" : "Fort Sterling","5" : "Lymhurst","6" : "Martlock","10" : "Thetford"};
        $("#fm_cape").empty();
        $("#fm_head").empty();
        $("#fm_bag").empty();
        $("#fm_main").empty();
        $("#fm_torso").empty();
        $("#fm_boot").empty();
        $("#fm_food").empty();
        $("#fm_potion").empty();
        $("#fm_mount").empty();

        let city = $("#regear_select_city").children("option:selected").val();
        var gears= ['T4_BAG','T6_HEAD_LEATHER_SET3','T4_CAPEITEM_FW_LYMHURST','T6_2H_INFERNOSTAFF','T6_ARMOR_CLOTH_SET1','T5_MOUNT_ARMORED_HORSE','T6_SHOES_CLOTH_SET1','T6_SHOES_CLOTH_SET1','T7_MEAL_OMELETTE','T4_POTION_COOLDOWN'];
        
        gears.forEach(function(element){
            console.log(element);
            $.get("https://www.albion-online-data.com/api/v2/stats/prices/"+element+"?locations="+city,function(d3){
                let price_min = d3[0].sell_price_min;
                let date = d3[0].sell_price_min_date;
                console.log(element + ' at : ' + price_min + ' in ' + city);
            });
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