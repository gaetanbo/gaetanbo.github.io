# gaetanbo.github.io
## Short Project using albion-online-data api

TODO :
- [x] create fetchdata function
- [x] order json files to have raw first and refined second on all of them
- [x] use color-coded gradient to display cheaper / more expensive
- [x] create a checking loop to reject any outter city
- [x] calculate benefice
- [ ] use map to work between object
- [ ] create two separate function to sort
- [ ] and then append all values at one
- [ ] Work on Items Price comparaison between Black Market and Caerleon
- [ ] Figure a way to automatically color Code if  tier is written somewhere
- [ ] Fix french still around

- [x] function cleanCrossCity doesnt properly sort out all cities coming !!!!
- [ ] Display prices using $12,450 instead of 12450 !!!
- [ ] Pour la partie "Le Tradeur marathonien"  rajouter une unité du style ( profit / tile) avec le bénéf a faire divisé par le nombre de tuile a passer pour aller entre les villes

	// BlackBiz TODOS
- [ ] Loader should disapear once prices starts to comes in

	// Regear TODOS
- [ ] Use .then to display total_gear_cost only after the $.get	gets finished
- [ ] Once the page has loaded once, allow user to click on img_logo to change tier, enchantment level and quality via a tooltip
- [ ] Same with food and potions but for quantity and enchant level
- [ ] Fix Bug when no prices get found for the item&city asked
- [x] Red-color prices if they are more than a 12h(one day ??) old.
- [ ] FIX the css for mobile user        



		// https://forum.albiononline.com/index.php/Thread/51253-Albion-Static-Data/?postID=518548#post518548

- 	https://gameinfo.albiononline.com/api/gameinfo/events/33204877
- 	Item Data:		https://gameinfo.albiononline.com/api/gameinfo/items/T2_BAG/data
- 	item category : 	https://gameinfo.albiononline.com/api/gameinfo/items/_itemCategoryTree
-	item icon : 		https://gameinfo.albiononline.com/api/gameinfo/items/T2_BAG
-	AlbionOnline\game\Albion-Online_Data\StreamingAssets\GameData\items.xml
-	https://gameinfo.albiononline.com/api/gameinfo/search?q=Guybourg
-	https://gameinfo.albiononline.com/api/gameinfo/players/ + ID 
-	https://gameinfo.albiononline.com/api/gameinfo/guilds/ + ID 
-	https://gameinfo.albiononline.com/api/gameinfo/guilds/ + ID + /members

