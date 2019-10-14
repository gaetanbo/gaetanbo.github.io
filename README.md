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

- [x] function cleanCrossCity doesnt properly sort out all cities coming !!!!
- [ ] Display prices using $12,450 instead of 12450 !!!
- [ ] Pour la partie "Le Tradeur marathonien"  rajouter une unité du style ( profit / tile) avec le bénéf a faire divisé par le nombre de tuile a passer pour aller entre les villes

	// BlackBiz TODOS
- [ ] Loader should dissapear once prices starts to comes in

	// Regear TODOS
- [ ] Find a way to cumulate price each time we pull one and then display total price at top
- [ ] Do a foreach on each piece of gear instead of this ugly one by one way im doing now
- [ ] Actually use a variable for city instead of hard coding as it is now
- [ ] Red-color prices if they are more than a 12h(one day ??) old.
- [ ] Add possibility to choose quantity for food and potions
- [ ] Find a way for user to input the gear he want to get prices for
- [ ] FIX the css for mobile user        
- [ ] Clean fm_bag and others to prevent triple append

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

