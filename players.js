$(document).ready(function(){ 



	$(document).on('keypress',function(e) {
	if(e.which == 13) {
        var player = $('#input_player').val();
		//$("#tbody_player_results").empty();
		//$("#player_results").empty();

        var settings = {
          'cache': false,
          'dataType': "jsonp",
          "async": true,
          "crossDomain": true,
          "url": "https://gameinfo.albiononline.com/api/gameinfo/search?q="+player,
          "method": "GET",
          "headers": {
              "Access-Control-Allow-Origin":"*"
          	}
      	}

      	$.ajax(settings).done(function (response) {
          	console.log(response);
   //        	if (response.players === undefined || response.players.length == 0) {
			// 	alert('No player Found');
			// } else if(response.players.length == 1) {
			//  	var playerId = response.players[0].Id;
			//  	$("#player_results").append("<p><strong>"+response.players[0].Name+"</strong></p>");
			// 	$.get("https://gameinfo.albiononline.com/api/gameinfo/players/"+playerId,function(playerdata)  {
			// 		var craftot = addCommas(playerdata.LifetimeStatistics.Crafting.Total);
			// 		var gathertot = addCommas(playerdata.LifetimeStatistics.Gathering.All.Total);
			// 		var pvetot = addCommas(playerdata.LifetimeStatistics.PvE.Total);
			// 		var deathtot = addCommas(playerdata.DeathFame);
			// 		$("#tbody_player_results").append("<tr>");
			// 		$("#tbody_player_results").append("<td>"+craftot+"</td>");
			// 		$("#tbody_player_results").append("<td>"+gathertot+"</td>");
			// 		$("#tbody_player_results").append("<td>"+pvetot+"</td>");
			// 		$("#tbody_player_results").append("<td>"+deathtot+"</td>");
			// 		$("#tbody_player_results").append("<td>"+playerdata.FameRatio+"</td>");
			// 		$("#tbody_player_results").append("</tr>");
			// 	});
			// } else{
			// 	response.players.forEach(x=> {
			// 		if(x.GuildName === null || x.GuildName === "") {
			// 			$("#player_results").append("<p><strong>"+x.Name+"</strong> riding guildLess </p>");
			// 		}else {
			// 			$("#player_results").append("<p><strong>"+x.Name+"</strong> from "+x.GuildName+"</p>");						
			// 		}
			// 	});
			// }
      	});




		// $.get("https://gameinfo.albiononline.com/api/gameinfo/search?q="+player,function(data)  {

		// });
	}


	});






	function addCommas(nStr)
	{
	    nStr += '';
	    x = nStr.split('.');
	    x1 = x[0];
	    x2 = x.length > 1 ? '.' + x[1] : '';
	    var rgx = /(\d+)(\d{3})/;
	    while (rgx.test(x1)) {
	        x1 = x1.replace(rgx, '$1' + ',' + '$2');
	    }
	    return x1 + x2;
	}
});