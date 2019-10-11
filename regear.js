//$.get("https://www.albion-online-data.com/api/v2/stats/prices/"+ressource_typeAsked+"_LEVEL2@2",function(d){});

$(document).ready(function(){ 
    $("#fm_test").click(function(){
        console.log('test');
    });
    $("#regear").click(function(){
        // gears : T4_BAG, T6_HEAD_LEATHER_SET3, T4_CAPEITEM_FW_LYMHURST,T6_2H_INFERNOSTAFF,T6_ARMOR_CLOTH_SET1,T6_SHOES_CLOTH_SET1 ,T7_MEAL_OMELETTE,T4_POTION_COOLDOWN,T5_MOUNT_ARMORED_HORSE
        $.get("https://www.albion-online-data.com/api/v2/stats/prices/T4_BAG?locations=Martlock",function(d3){
            //console.log(d3);
            let price_min = d3[0].sell_price_min;
            let city = d3[0].city;
            let date = d3[0].sell_price_min_date;
            $("#fm_bag").append(numberWithCommas(price_min) + ' at ' + city);
        });
        $.get("https://www.albion-online-data.com/api/v2/stats/prices/T6_HEAD_LEATHER_SET3?locations=Martlock",function(d3){
            let price_min = d3[0].sell_price_min;
            let city = d3[0].city;
            $("#fm_head").append(numberWithCommas(price_min) + ' at ' + city);
        });
        $.get("https://www.albion-online-data.com/api/v2/stats/prices/T4_CAPEITEM_FW_LYMHURST?locations=Martlock",function(d3){
            let price_min = d3[0].sell_price_min;
            let city = d3[0].city;
            $("#fm_cape").append(numberWithCommas(price_min) + ' at ' + city);
        });
        $.get("https://www.albion-online-data.com/api/v2/stats/prices/T6_2H_INFERNOSTAFF?locations=Martlock",function(d3){
            let price_min = d3[0].sell_price_min;
            let city = d3[0].city;
            $("#fm_main").append(numberWithCommas(price_min) + ' at ' + city);
        });
        $.get("https://www.albion-online-data.com/api/v2/stats/prices/T6_ARMOR_CLOTH_SET1?locations=Martlock",function(d3){
            let price_min = d3[0].sell_price_min;
            let city = d3[0].city;
            $("#fm_torso").append(numberWithCommas(price_min) + ' at ' + city);
        });
        $.get("https://www.albion-online-data.com/api/v2/stats/prices/T7_MEAL_OMELETTE?locations=Martlock",function(d3){
            let price_min = d3[0].sell_price_min;
            let city = d3[0].city;
            $("#fm_food").append(numberWithCommas(price_min) + ' at ' + city);
        });
        $.get("https://www.albion-online-data.com/api/v2/stats/prices/T6_SHOES_CLOTH_SET1?locations=Martlock",function(d3){
            let price_min = d3[0].sell_price_min;
            let city = d3[0].city;
            $("#fm_boot").append(numberWithCommas(price_min) + ' at ' + city);
        });
        $.get("https://www.albion-online-data.com/api/v2/stats/prices/T4_POTION_COOLDOWN?locations=Martlock",function(d3){
            let price_min = d3[0].sell_price_min;
            let city = d3[0].city;
            $("#fm_potion").append(numberWithCommas(price_min) + ' at ' + city);
        });
        $.get("https://www.albion-online-data.com/api/v2/stats/prices/T5_MOUNT_ARMORED_HORSE?locations=Martlock",function(d3){
            let price_min = d3[0].sell_price_min;
            let city = d3[0].city;
            $("#fm_mount").append(numberWithCommas(price_min) + ' at ' + city);
            $("#total_price").append('305,711 Silver');
        });  
    });
    //$("#regear_select").change(function(){
    //    let city_asked = $("#regear_select").children("option:selected").val()
    //    console.log(city_asked);
    //});    
});



function numberWithCommas(number) {
    var parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }
