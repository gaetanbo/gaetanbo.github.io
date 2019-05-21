$(document).ready(function(){ 

	$(document).on('keypress',function(e) {
	if(e.which == 13) {
		$("#player_results").empty();
	        var player = $('#input_player').val();
			$.get("https://gameinfo.albiononline.com/api/gameinfo/search?q="+player,function(data)  {
				if (data.players === undefined || data.players.length == 0) {
					alert('No player Found');
				} else if(data.players.length == 1) {
				 	var playerId = data.players[0].Id;
					console.log(data.players);
				 	$("#player_results").append("<p><strong>"+data.players[0].Name+"</strong></p>");
					$.get("https://gameinfo.albiononline.com/api/gameinfo/players/"+playerId,function(playerdata)  {
						console.log(playerdata);
						var craftot = addCommas(playerdata.LifetimeStatistics.Crafting.Total);
						var gathertot = addCommas(playerdata.LifetimeStatistics.Gathering.All.Total);
						var pvetot = addCommas(playerdata.LifetimeStatistics.PvE.Total);
						var deathtot = addCommas(playerdata.DeathFame);
						$("#tbody_player_results").append("<tr>");
						$("#tbody_player_results").append("<td>"+craftot+"</td>");
						$("#tbody_player_results").append("<td>"+gathertot+"</td>");
						$("#tbody_player_results").append("<td>"+pvetot+"</td>");
						$("#tbody_player_results").append("<td>"+deathtot+"</td>");
						$("#tbody_player_results").append("<td>"+playerdata.FameRatio+"</td>");
						$("#tbody_player_results").append("</tr>");
					});
				} else{
					data.players.forEach(x=> {
						if(x.GuildName === null || x.GuildName === "") {
							$("#player_results").append("<p><strong>"+x.Name+"</strong> riding guildLess </p>");
						}else {
							$("#player_results").append("<p><strong>"+x.Name+"</strong> from "+x.GuildName+"</p>");						}
					});
				}
			});
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