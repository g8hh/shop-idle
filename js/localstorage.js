var gamedata = {};
var gamename = "newgame";

function loadLocalStorage(){
	if (typeof(localStorage.newgame) !== "undefined") {
	    console.log('Save game found');
	    var tempgamedata = localStorage.getItem(gamename);
	    //console.log(tempgamedata);
	    gamedata = JSON.parse(tempgamedata);
	    //console.log(gamedata);
	} else {
	    console.log('Sorry! No save game');  
	    saveToLocalStorage();
	}
	//console.log(gamedata);

	check_local_storage(gamedata);

	return gamedata;

};

function saveToLocalStorage(){
	localStorage.removeItem(gamename);
	localStorage.setItem(gamename, JSON.stringify(gamedata));
};

function clearLocalStorage(){
			if (!window.confirm("你确定? 游戏数据将清空!【游戏数据将清空!】")){
			return;
		}
	
	gamedata = {};
	localStorage.removeItem(gamename);
	
	
};

function check_local_storage(gamedata){

	if(gamedata['exploration'] == undefined)
	{
		var d = new Date();
		var n = d.getTime();

		gamedata['exploration'] = {
			successful_explores: 	0,
			last_checked: 			n,
			current_progress: 		0,
			progress_per_sec: 		0
		}
	}

	if(gamedata['known_locations'] == undefined)
	{
		gamedata['known_locations'] = {};
	}






	if(gamedata['version'] == undefined || gamedata['version'] < 0.1)
	{
		gamedata['version'] = 0.1;
		$.each(gamedata['skills'], function(skill_id, skill_info){
			skill_info['level'] = Math.ceil(skill_info['level'] / 10);
		});
	}
}