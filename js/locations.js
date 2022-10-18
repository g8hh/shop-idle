var current_location = 'none';

function show_locations(){
	//if(gamedata['passive_exploration'] == undefined){gamedata['passive_exploration'] = 0;}
	//$('.passive_exploration').html(gamedata['passive_exploration']);
	gain_item('coins',0);

	//var passive_upgrade_cost = calculate_passive_explore_upgrade_cost(gamedata['passive_exploration']);
	//$('.passive_upgrade_cost').html(nFormatter(passive_upgrade_cost, 2));

	//update_explore_progress_bar();
	show_known_locations_list();
	//effective_skill_level('exploration');
};

function upgrade_passive_exploration(){
	var passive_upgrade_cost = calculate_passive_explore_upgrade_cost(gamedata['passive_exploration']);
	if(gamedata['coins'] >= passive_upgrade_cost)
	{
		gain_item('coins', passive_upgrade_cost * -1);
		gamedata['passive_exploration']++;
		show_locations();
	}
}





function calculate_passive_explore_upgrade_cost(level){
	var amount = 10;
	var new_location_cost = amount + 0;
	for(i = 1; i < level; i++)
	{
		new_location_cost *= 1.5;
	}
	return Math.floor(new_location_cost);
}

function update_explore_progress_bar(){





	var next_level_progress_required = calculate_explore_location_cost(gamedata['exploration']['successful_explores'], 1000);
	//console.log(next_level_progress_required);
	var explore_progress_percent = 0;
	if(gamedata['exploration']['current_progress'] > 0)
	{
		explore_progress_percent = (gamedata['exploration']['current_progress'] / next_level_progress_required) * 100;
	}
	if(explore_progress_percent > 100)
	{
		explore_progress_percent = 100;
	}
	$('.explore_progress_bar').css('width', explore_progress_percent + '%');
	$('.explore_progress_text').html((Math.floor(explore_progress_percent * 100) / 100) + '%');
	
	/*if(gamedata['exploration']['current_progress'] >= next_level_progress_required && false)
	{
		
		var new_location = find_new_location();
		if(new_location != false)
		{
			gamedata['known_locations'][new_location] = {
				level: 	1,
			};
			gamedata['exploration']['current_progress'] = 0;
			gamedata['exploration']['successful_explores'] ++;
			//saveToLocalStorage();
			update_explore_progress_bar();
			show_known_locations_list();
		}
		
	}*/
}

function check_new_location(){
	/*var next_level_progress_required = calculate_explore_location_cost(gamedata['exploration']['successful_explores'], 1000);
	if(gamedata['exploration']['current_progress'] >= next_level_progress_required)
	{
		show_content('unlock_location');
	}*/
}

function show_unlock_location(){
	if(gamedata['inventory'] == undefined)
	{
		gamedata['inventory'] = {};
	}
	var all_parsed_location_options = '';
	var possible_location_count = 0;
	all_parsed_location_options += '<span class="counters_title">新位置</span><br/>';
	$.each(available_locations, function(location_key, location){
		var can_find = true;
		var any_matched = false;
		var all_matched = true;
		if(gamedata['known_locations'][location_key] != undefined)
		{
			can_find = false;
		}
		else
		{
			$.each(location['requires'],function(required_id, required_level){
				if(gamedata['known_locations'][required_id] == undefined || gamedata['known_locations'][required_id]['level'] < required_level)
				{
					can_find = false;
				}
				if(gamedata['known_locations'][required_id] != undefined)
				{
					any_matched = true;
				}
				else
				{
					all_matched = false;
				}
			});
			$.each(location['cost'],function(required_id, required_level){
				if(gamedata['inventory'][required_id] == undefined || gamedata['inventory'][required_id] < required_level)
				{
					can_find = false;
				}
				if(gamedata['inventory'][required_id] != undefined)
				{
					any_matched = true;
				}
				else
				{
					all_matched = false;
				}
			});
			var any_required_found = false;
			$.each(location['required_items'],function(required_id, required_level){
				if(gamedata['inventory'][required_id] == undefined)
				{
					//can_find = false;
				}
				if(gamedata['inventory'][required_id] != undefined)
				{
					any_required_found = true;
				}
				else
				{
					//any_required_found = true;
				}
			});
			if(location['required_items'] != undefined && count_object(location['required_items']) > 0 && any_required_found == false)
			{
				can_find = false;
				all_matched = false;
			}
		}
		if(gamedata['known_locations'][location_key] == undefined && all_matched == true)
		{
			possible_location_count++;
			all_parsed_location_options += '<div class="single_location">';
			if(can_find == true)
			{
				all_parsed_location_options += 		'<button class="slim gold" onclick="unlock_location(\'' + location_key + '\')">解锁</button>';
			}
			
			all_parsed_location_options += 		'<span class="location_name">' + capitalizeFirstLetter(location['name']) + '</span><br/>';
			all_parsed_location_options += 		'<div class="location_description">';
			if(location['description'] != undefined)
			{
				all_parsed_location_options +=	location['description'] + '<br/>';
			}
			all_parsed_location_options += 		'<br/>推荐物品:<br/>';
			if(count_object(location['requires']) == 0 && count_object(location['required_items']) == 0 && count_object(location['cost']) == 0)
			{
				all_parsed_location_options += 		'- 无';
			}
			$.each(location['requires'], function(required_location_id, required_location_level){
				var requirement_text = ''
				if(required_location_level == 1){requirement_text = '- ' + available_locations[required_location_id]['name'];}else{requirement_text = '- ' + available_locations[required_location_id]['name'] + ' level ' + required_location_level;}
				if(gamedata['known_locations'][required_location_id] != undefined && gamedata['known_locations'][required_location_id]['level'] >= required_location_level)
				{
					all_parsed_location_options += 		'<span class="location_required_good">' + requirement_text + '</span><br/>';
				}
				else
				{
					all_parsed_location_options += 		'<span class="location_required_bad">' + requirement_text + '</span><br/>';
				}
			});
			$.each(location['cost'], function(required_location_id, required_location_level){
				var requirement_text = '';
				var owned_item = 0;
				if(gamedata['inventory'][required_location_id] != undefined){owned_item = gamedata['inventory'][required_location_id];}
				requirement_text = '<span class="">' + nFormatter(owned_item,3) + '</span> / ' + nFormatter(required_location_level) + ' ' + available_items[required_location_id]['name'];
				//all_parsed_location_options += 		'<span class="">' + requirement_text + '</span><br/>';
				if(gamedata['inventory'][required_location_id] != undefined && gamedata['inventory'][required_location_id] >= required_location_level)
				{
					all_parsed_location_options += 		'<span class="location_required_good">' + requirement_text + '</span><br/>';
				}
				else
				{
					all_parsed_location_options += 		'<span class="location_required_bad">' + requirement_text + '</span><br/>';
				}
			});
			$.each(location['required_items'], function(required_location_id, required_location_level){
				var requirement_text = ''
				requirement_text = '- ' + available_items[required_location_id]['name'];
				if(gamedata['inventory'][required_location_id] != undefined)
				{
					all_parsed_location_options += 		'<span class="location_required_good">' + requirement_text + '</span><br/>';
				}
				else
				{
					all_parsed_location_options += 		'<span class="location_required_bad">' + requirement_text + '</span><br/>';
				}
			});
			all_parsed_location_options += 		'</div>';
			all_parsed_location_options += '</div>';
		}
	});
	if(possible_location_count == 0)
	{
		all_parsed_location_options += '<span class="counters_title"><br/>目前没有发现可以解锁位置，请继续探索..</span><br/>';
	}
	$('.unlockable_list').html(all_parsed_location_options);
	var 城墙=1
	var 恶龙=1
	if(gamedata['inventory']['城墙'] >= 900){var 城墙=0.1}		 		
	else if (gamedata['inventory']['城墙'] < 900){var 城墙=1-gamedata['inventory']['城墙']*0.001};	
	
	if(gamedata['inventory']['恶龙'] >= 92){var 恶龙=0.08}		 		
	else if (gamedata['inventory']['恶龙'] < 92){var 恶龙=1-gamedata['inventory']['恶龙']*0.01};		
	var 倍数=1	
	if(gamedata['inventory']['物资'] >= 0){var 倍数=10000};		 		
	
	var 减少=1*城墙*恶龙*倍数
	if(to_the_tenth(1000*减少, count_object(gamedata['known_locations'])) > gamedata['coins_gained'] && count_object(gamedata['known_locations']) != 0)
	{
		show_content('locations');
	}
}

function unlock_location(location_id, free_location){
	var 城墙=1
	var 恶龙=1
	if(gamedata['inventory']['城墙'] >= 900){var 城墙=0.1}		 		
	else if (gamedata['inventory']['城墙'] < 900){var 城墙=1-gamedata['inventory']['城墙']*0.001};	
	
	if(gamedata['inventory']['恶龙'] >= 92){var 恶龙=0.08}		 		
	else if (gamedata['inventory']['恶龙'] < 92){var 恶龙=1-gamedata['inventory']['恶龙']*0.01};		
	var 倍数=1	
	if(gamedata['inventory']['物资'] >= 0){var 倍数=10000};		 		
	
	var 减少=1*城墙*恶龙*倍数
	if(free_location == undefined){free_location = false;}
	var can_find = true;
	if(gamedata['inventory'] == undefined){gamedata['inventory'] = {};}
	if(gamedata['known_locations'][location_id] != undefined || (to_the_tenth(1000*减少, count_object(gamedata['known_locations'])) > gamedata['coins_gained'] && count_object(gamedata['known_locations']) != 0))
	{
		can_find = false;
	}
	else
	{
		$.each(available_locations[location_id]['requires'],function(required_id, required_level){
			if(gamedata['known_locations'][required_id] == undefined || gamedata['known_locations'][required_id]['level'] < required_level)
			{
				can_find = false;
			}
		});
		$.each(available_locations[location_id]['cost'],function(required_id, required_level){
			if(gamedata['inventory'][required_id] == undefined || gamedata['inventory'][required_id] < required_level)
			{
				can_find = false;
			}
		});
	}
	if(can_find == true || free_location == true)
	{
		if(free_location == false)
		{
			$.each(available_locations[location_id]['cost'],function(required_id, required_level){
				gain_item(required_id, required_level * -1);
			});
		}
		gamedata['known_locations'][location_id] = {
			level: 	1,
			actions: {},
		};
		var first_action_id = find_first_action_at_location(location_id);
		gamedata['known_locations'][location_id]['actions'][first_action_id] = {level: 0};
		gamedata['exploration']['current_progress'] = 0;
		gamedata['exploration']['successful_explores'] ++;
		//saveToLocalStorage();
		update_explore_progress_bar();
		show_content('locations');
	}
}

function find_first_action_at_location(location_id){
	var found_id = false;
	$.each(available_locations[location_id]['actions'], function(action_id, action_info){
		if(found_id == false)
		{
			found_id = action_id;
		}
	});
	return found_id;
}


function find_new_location(){
	var found_location = false;
	var possible_location_count = count_object(available_locations) - count_object(gamedata['known_locations']);
	possible_location_count = 0;
	$.each(available_locations, function(location_key, location){
		var can_find = true;
		if(gamedata['known_locations'][location_key] != undefined)
		{
			can_find = false;
		}
		else
		{
			$.each(location['requires'],function(required_id, required_level){
				if(gamedata['known_locations'][required_id] == undefined || gamedata['known_locations'][required_id]['level'] < required_level)
				{
					can_find = false;
				}
			});
		}
		if(can_find == true)
		{
			possible_location_count++;
		}
	});
	var picked_location = Math.random() * possible_location_count;
	$.each(available_locations, function(location_key, location){
		var can_find = true;
		if(gamedata['known_locations'][location_key] != undefined)
		{
			can_find = false;
		}
		else
		{
			$.each(location['requires'],function(required_id, required_level){
				if(gamedata['known_locations'][required_id] == undefined || gamedata['known_locations'][required_id]['level'] < required_level)
				{
					can_find = false;
				}
			});
		}
		if(can_find == true)
		{
			picked_location --;
			if(picked_location < 0 && picked_location > -1)
			{
				found_location = location_key;
			}
		}
	});

	/*if(count_object(gamedata['known_locations']) == 0)
	{
		found_location = 'apple_orchard';
	}*/

	return found_location;
}

function show_known_locations_list(){
	var 城墙=1
	var 恶龙=1

	if(gamedata['inventory']['城墙'] >= 900){var 城墙=0.1}		 		
	else if (gamedata['inventory']['城墙'] < 900){var 城墙=1-gamedata['inventory']['城墙']*0.001};	
	
	if(gamedata['inventory']['恶龙'] >= 92){var 恶龙=0.08}		 		
	else if (gamedata['inventory']['恶龙'] < 92){var 恶龙=1-gamedata['inventory']['恶龙']*0.01};	
	
	var 倍数=1	
	if(gamedata['inventory']['物资'] >= 0){var 倍数=10000};		 		
	
	var 减少=1*城墙*恶龙*倍数
	
	
	if(gamedata['coins_gained'] == undefined){gamedata['coins_gained'] = 0;}
	$('.known_locations_list').html('');
	$('.location_buttons').html('');
	if(count_object(gamedata['known_locations']) == 0)
	{
		$('.known_locations_list').html('<div style="width:100%;text-align:center;">探索并寻找一个位置。</div>');
	}
	if(count_object(gamedata['known_locations']) > 1)
	{
		$('.locations_button').show();
	}
	$.each(gamedata['known_locations'], function(location_id, useless_data){
		var parsed_know_location = '';
		parsed_know_location += 		'<div class="known_location" style="background-image:url(img/' + available_locations[location_id]['image'] + ')" onclick="current_location=\'' + location_id + '\';show_content(\'current_location\')">';
		parsed_know_location += 			capitalizeFirstLetter(available_locations[location_id]['name']);
		parsed_know_location += 		'</div>';
		$('.known_locations_list').append(parsed_know_location);
	});
	if((to_the_tenth(1000*减少, count_object(gamedata['known_locations'])) <= gamedata['coins_gained'] && count_object(gamedata['known_locations']) < count_object(available_locations)) || count_object(gamedata['known_locations']) == 0)
	{
		var parsed_know_location = '';
		parsed_know_location += 		'<div class="known_location menu_button" data-target-content="unlock_location">';
		parsed_know_location += 			'新<br/>位置';
		parsed_know_location += 		'</div>';
		$('.location_buttons').append(parsed_know_location);
	}
	else
	{
		if(count_object(gamedata['known_locations']) == 1)
		{
			$.each(gamedata['known_locations'], function(location_id, location_info){
				current_location = location_id;
			});
			$('.locations_button').hide();
			show_content('current_location');
		}
		else
		{
			var next_location_value = nFormatter(to_the_tenth(1000*减少, count_object(gamedata['known_locations'])));
			var parsed_know_location = '';
			parsed_know_location += 		'<div class="known_location">';
			parsed_know_location += 			'下一个:<br/>' + next_location_value + ' 钱';
			parsed_know_location += 		'</div>';
			$('.location_buttons').append(parsed_know_location);
		}
	}
}

function show_current_location(){
	if(current_location != 'none' && available_locations[current_location] != undefined && gamedata['known_locations'][current_location] != undefined)
	{ 
		if(gamedata['known_locations'][current_location]['actions'] == undefined)
		{
			gamedata['known_locations'][current_location]['actions'] = {};
		}
		$('.current_location_title').html(available_locations[current_location]['name']);
		$('.current_location_bg').css('background-image', 'url(img/' + available_locations[current_location]['image'] + ')');
		var parsed_actions = parse_all_actions(current_location);
		if(parsed_actions == '')
		{
			$('.current_location_actions').css('display','none');
		}
		else
		{
			$('.current_location_parsed_actions').html(parsed_actions);
			$('.current_location_actions').css('display','block');
		}
		var availeble_unlockable = parse_all_actions(current_location, true);
		if(availeble_unlockable == '')
		{
			$('.unlock_more_actions_button_container').hide();
		}
		else
		{
			$('.unlock_more_actions_button_container').show();
		}
	}
	else
	{
		show_content('home');
	}
}

function show_unlock_more_actions(){
	if(current_location != 'none' && available_locations[current_location] != undefined && gamedata['known_locations'][current_location] != undefined)
	{ 
		if(gamedata['known_locations'][current_location]['actions'] == undefined)
		{
			gamedata['known_locations'][current_location]['actions'] = {};
		}
		$('.current_location_title').html(available_locations[current_location]['name']);
		$('.current_location_bg').css('background-image', 'url(img/' + available_locations[current_location]['image'] + ')');
		var parsed_actions = parse_all_actions(current_location, true);
		if(parsed_actions == '')
		{
			show_content('current_location');
			$('.current_location_actions').css('display','none');
		}
		else
		{
			$('.current_location_parsed_actions').html(parsed_actions);
			$('.current_location_actions').css('display','block');
		}
	}
	else
	{
		show_content('home');
	}
}

$(document).ready(function() {
	$('body').on('click', '.explore_button', function() {
	    gamedata['exploration']['current_progress'] += effective_skill_level('exploration');
	    gain_skill_xp('exploration',1);
	    update_explore_progress_bar();
	    check_new_location();
	    effective_skill_level('exploration');
	    //$('.explore_section .skill_percent').html('(' + get_skill_percent('exploration') + '%)');
	    //saveToLocalStorage();
	});
});





