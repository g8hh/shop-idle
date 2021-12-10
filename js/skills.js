var skill_level_factor = 1;

function effective_skill_level(skill_id){
	check_skill(skill_id);

	var current_skill = gamedata['skills'][skill_id];
	var effective_skill_level = 0;

	effective_skill_level += current_skill['level'];

	$('.skill_level_' + skill_id).html(effective_skill_level + ' <span class="skill_percent">(' + nFormatter(get_skill_percent(skill_id),2) + '%)</span>');

	return effective_skill_level * skill_level_factor;
}

function gain_skill_xp(skill_id, amount){

	check_skill(skill_id);
	gamedata['skills'][skill_id]['skill_xp'] += amount;
	check_skill(skill_id);
}

function get_skill_percent(skill_id){
	check_skill(skill_id);
	var current_skill = gamedata['skills'][skill_id];
	var next_xp_needed = get_xp_needed(current_skill['level']);

	return ((current_skill['skill_xp'] / next_xp_needed) * 1000) / 10;
}

function check_skill(skill_id){
	if(gamedata['skills'] == undefined)
	{
		gamedata['skills'] = {};
		saveToLocalStorage();
	}
	if(gamedata['skills'][skill_id] == undefined)
	{
		gamedata['skills'][skill_id] = {
			level: 		1,
			skill_xp: 	0,
		}
		saveToLocalStorage();
	}

	var current_skill = gamedata['skills'][skill_id];

	if(current_skill['skill_xp'] > 0 && current_skill['skill_xp'] >= get_xp_needed(current_skill['level']))
	{
		current_skill['skill_xp'] -= get_xp_needed(current_skill['level']);
		current_skill['level'] ++;
		saveToLocalStorage();
		check_skill(skill_id);
	}
}

function get_xp_needed(level){
	//level *= skill_level_factor;
	var new_level_cost = 1;
	for(i = 1; i < level; i++)
	{
		new_level_cost *= 1.1;
	}
	//var xp_needed = 1000 * (level * (0.90 + (level / 10)));
	//console.log(new_level_cost);
	return new_level_cost;
}