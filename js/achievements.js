function check_achievements(item_id, skill_id, amount){
	if(amount == undefined)
	{
		amount = 1;
	}
	if(gamedata['achievements'] == undefined)
	{
		gamedata['achievements'] = {};
	}
	$.each(available_achievements, function(achievement_id, achievement_info){
		if(skill_id != undefined && achievement_info['skill_procs'][skill_id] != undefined || item_id != undefined && achievement_info['item_procs'][item_id] != undefined)
		{
			if(gamedata['achievements'][achievement_id] == undefined)
			{
				gamedata['achievements'][achievement_id] = {
					progress: 	0,
					level: 		0,
				}
			}

			gamedata['achievements'][achievement_id]['progress'] += amount;
			var old_level = gamedata['achievements'][achievement_id]['level'] + 0;
			var new_level = 0;
			for (var i = gamedata['achievements'][achievement_id]['progress']; i >= achievement_info['amount']; i/= achievement_info['amount_facor']) {
				new_level++;
			};
			gamedata['achievements'][achievement_id]['level'] = new_level;

			if(old_level < new_level)
			{
				parse_achievement_message(achievement_id);
			}

			var next_level_progress = achievement_info['amount'] + 0;
			for (var i = new_level; i > 0; i--) {
				next_level_progress *= achievement_info['amount_facor'];
			};
			if($('#content_achievements').hasClass('active') || ($('#content_single_achievement').hasClass('active') && current_achievement == achievement_id))
			{
				var current_progress_percent = (gamedata['achievements'][achievement_id]['progress'] / next_level_progress) * 100;
				console.log(current_progress_percent);
				$('.achievement_id_' + achievement_id + ' .achievement_progress').html(nFormatter(gamedata['achievements'][achievement_id]['progress'],3) + ' / ' + nFormatter(next_level_progress,3));
				$('.achievement_id_' + achievement_id + ' .achievement_progress').css('color', get_percent_color(gamedata['achievements'][achievement_id]['progress'], next_level_progress));
				$('.achievement_id_' + achievement_id + ' .achievement_progress_bar').css('background-color', get_percent_color(gamedata['achievements'][achievement_id]['progress'], next_level_progress));
				$('.achievement_id_' + achievement_id + ' .achievement_progress_bar').css('height', current_progress_percent + '%');
				
				if(gamedata['achievements'][achievement_id]['level'] > 0)
				{
					$('.achievement_id_' + achievement_id + ' .achievement_level').removeClass('achievement_level_0');
					$('.achievement_id_' + achievement_id + ' .achievement_level .current_level_amount').html(gamedata['achievements'][achievement_id]['level']);
				}
			}
		}
	});
}

var current_achievement = '';
var current_ap_bonus = '';
var current_achievement_page = 1;

function show_achievements(){

	var achievement_window_width = $('.achievement_list').width();
	var achievement_window_height = $('.achievement_list').height();

	var achievements_h = 3;
	if(achievement_window_width <= 800)
	{
		achievements_h = 1;
	}

	var achievements_v = Math.floor(achievement_window_height / 57);

	var visible_achievements = achievements_h * achievements_v;
	var achievements_shown = 0;

	var parsed_complete_achievements = '';
	var parsed_incomplete_achievements = '';
	var parsed_unstarted_achievements = '';
	$.each(available_achievements, function(achievement_id, achievement_info){
		
		
		
		var current_progress = 0;
		var current_level = 0;
		var next_level_progress = achievement_info['amount'] + 0;
		var achievement_image = '';
		if(available_items[achievement_info['background_item']] != undefined)
		{
			achievement_image = available_items[achievement_info['background_item']]['image'];
		}
		if(gamedata['achievements'][achievement_id] != undefined)
		{
			current_progress = gamedata['achievements'][achievement_id]['progress'];
			current_level = gamedata['achievements'][achievement_id]['level'];
			for (var i = current_level; i > 0; i--) {
				next_level_progress *= achievement_info['amount_facor'];
			};
		}
		
		var parsed_achievement = '';
		parsed_achievement += '<div class="single_achievement achievement_id_' + achievement_id + '" onclick="current_achievement=\'' + achievement_id + '\';show_content(\'single_achievement\')">';
		parsed_achievement += 	'<div class="achievement_background" style="background-image:url(img/' + achievement_image + ')"></div>';
		parsed_achievement += 	'<div class="achievement_name">' + capitalizeFLetter(achievement_info['name']) + '</div>';
		parsed_achievement += 	'<div class="achievement_progress" style="color:' + get_percent_color(current_progress, next_level_progress) + '">' + nFormatter(current_progress,3) + ' / ' + nFormatter(next_level_progress,3) + '</div>';
		parsed_achievement += 	'<div class="achievement_level achievement_level_' + current_level + '"><div class="achievement_progress_bar" style="background-color:' + get_percent_color(current_progress, next_level_progress) + ';height:' + (current_progress / next_level_progress * 100) + '%"></div><span class="current_level_amount">' + current_level + '</span></div>';
		parsed_achievement += '</div>';

		if(current_progress > 0)
		{
			achievements_shown++;
		}

		if(current_progress > 0 && achievements_shown > visible_achievements * (current_achievement_page -1) && achievements_shown <= visible_achievements * (current_achievement_page))
		{
			if(current_progress == 0)
			{
				parsed_unstarted_achievements += parsed_achievement;
			}
			/*if(current_progress > 0 && current_level == 0)
			{
				parsed_incomplete_achievements += parsed_achievement;
			}
			if(current_progress > 0 && current_level > 0)
			{
				parsed_complete_achievements += parsed_achievement;
			}*/
			parsed_incomplete_achievements += parsed_achievement;
		}
	});

	var max_achievement_page = Math.ceil(achievements_shown / visible_achievements);

	if(achievements_shown > visible_achievements * current_achievement_page)
	{
		$('.page_further').html('>');
	}
	else
	{
		$('.page_further').html('');
	}

	if(current_achievement_page == 1)
	{
		$('.page_back').html('');
	}
	else
	{
		$('.page_back').html('<');
	}

	$('.page_number').html(current_achievement_page + ' / ' + max_achievement_page);

	$('.achievement_list').html(parsed_complete_achievements + parsed_incomplete_achievements);
	update_ap_owned();
	if(achievements_shown == 0 && current_achievement_page > 1)
	{
		current_achievement_page = 1;
		show_achievements();
	}
}

function adjust_achievement_page(amount){
	current_achievement_page += amount;
	if(current_achievement_page < 1)
	{
		current_achievement_page = 1;
	}
	show_achievements();
}

function show_spend_ap(){
	if(gamedata['ap_bonusses'] == undefined)
	{
		gamedata['ap_bonusses'] = {};
	}
	var parsed_complete_achievements = '';
	var parsed_incomplete_achievements = '';
	var parsed_unstarted_achievements = '';
	$.each(available_ap_bonusses, function(achievement_id, achievement_info){
		var current_level = 0;
		var achievement_image = '';
		if(available_items[achievement_info['background_item']] != undefined)
		{
			achievement_image = available_items[achievement_info['background_item']]['image'];
		}
		if(gamedata['ap_bonusses'][achievement_id] != undefined)
		{
			current_level = gamedata['ap_bonusses'][achievement_id]['level'];
		}
		var parsed_achievement = '';
		parsed_achievement += '<div class="single_achievement achievement_bonus_id_' + achievement_id + '" onclick="current_ap_bonus=\'' + achievement_id + '\';show_content(\'single_ap_bonus\')">';
		parsed_achievement += 	'<div class="achievement_background" style="background-image:url(img/' + achievement_image + ')"></div>';
		parsed_achievement += 	'<div class="achievement_name">' + capitalizeFLetter(achievement_info['name']) + '</div>';
		parsed_achievement += 	'<div class="achievement_progress" style="color:' + get_percent_color(gamedata['ap_left'], achievement_info['cost']) + '">' + achievement_info['cost'] + ' AP</div>';
		parsed_achievement += 	'<div class="achievement_level achievement_level_' + current_level + '"><span class="current_level_amount">' + current_level + '</span></div>';
		parsed_achievement += '</div>';
		
		if(current_level == 0)
		{
			parsed_incomplete_achievements += parsed_achievement;
		}
		if(current_level > 0)
		{
			parsed_complete_achievements += parsed_achievement;
		}
	});

	$('.spend_ap_list').html(parsed_complete_achievements + parsed_incomplete_achievements);
	update_ap_owned();
}




function show_single_achievement(){
	if(available_achievements[current_achievement] == undefined)
	{
		show_content('achievements');
	}
	else
	{
		var achievement_id = current_achievement;
		var parsed_achievement = parse_single_achievement(achievement_id);
		$('.achievement_details').html(parsed_achievement);
		update_ap_owned();
	}
}

function show_single_ap_bonus(){
	if(available_ap_bonusses[current_ap_bonus] == undefined)
	{
		show_content('achievements');
	}
	else
	{
		update_ap_owned();
		var achievement_id = current_ap_bonus;
		var parsed_achievement = parse_single_ap(achievement_id);
		if(gamedata['ap_left'] >= available_ap_bonusses[achievement_id]['cost'])
		{
			parsed_achievement += '<br/><br/><button onclick="buy_ap_bonus(\'' + achievement_id + '\')">购买</button>';
		}
		$('.single_ap_bonus_container').html(parsed_achievement);
		
	}
	
}

function parse_single_achievement(achievement_id){
	var achievement_info = available_achievements[achievement_id];
	var current_progress = 0;
	var current_level = 0;
	var next_level_progress = achievement_info['amount'] + 0;
	var achievement_image = '';
	if(available_items[achievement_info['background_item']] != undefined)
	{
		achievement_image = available_items[achievement_info['background_item']]['image'];
	}
	if(gamedata['achievements'][achievement_id] != undefined)
	{
		current_progress = gamedata['achievements'][achievement_id]['progress'];
		current_level = gamedata['achievements'][achievement_id]['level'];
		for (var i = current_level; i > 0; i--) {
			next_level_progress *= achievement_info['amount_facor'];
		};
	}

	var parsed_text = '';
	if(achievement_info['text'] != undefined)
	{
		parsed_text += achievement_info['text'] + '<br/>';
	}
	/*parsed_text += 'Current level bonus:<br/>';
	$.each(achievement_info['item_bonus'], function(item_id, item_bonus){
		var effective_bonus = item_bonus * current_level;
		parsed_text += capitalizeFLetter(available_items[item_id]['name']) + ': ' + effective_bonus + '%<br/>';
	});
	$.each(achievement_info['skill_bonus'], function(skill_id, skill_bonus){
		var effective_bonus = skill_bonus * current_level;
		parsed_text += capitalizeFLetter(skill_id) + ': ' + effective_bonus + '%<br/>';
	});*/

	var parsed_achievement = '';
	parsed_achievement += '<div class="single_achievement achievement_id_' + achievement_id + '">';
	parsed_achievement += 	'<div class="achievement_background" style="background-image:url(img/' + achievement_image + ')"></div>';
	parsed_achievement += 	'<div class="achievement_name">' + capitalizeFLetter(achievement_info['name']) + '</div>';
	parsed_achievement += 	'<div class="achievement_progress" style="color:' + get_percent_color(current_progress, next_level_progress) + '">' + nFormatter(current_progress,3) + ' / ' + nFormatter(next_level_progress,3) + '</div>';
	parsed_achievement += 	'<div class="achievement_level achievement_level_' + current_level + '">' + current_level + '</div>';
	parsed_achievement += 	'<div class="achievement_text">' + parsed_text + '</div>';
	parsed_achievement += '</div>';
	return parsed_achievement;
}

var achievement_message_counter = 0;

function parse_achievement_message(achievement_id){
	var parsed_achievement = parse_single_achievement(achievement_id);
	achievement_message_counter++;
	var temp_achievement_message_counter = achievement_message_counter + 0;
	$('.main_window').append('<div class="achievement_message achievement_message_' + temp_achievement_message_counter + '" onclick="remove_achievement_message(' + temp_achievement_message_counter + ')">' + parsed_achievement + '</div>');
	setTimeout(function(){
		remove_achievement_message(temp_achievement_message_counter);
	},5000);
}

function remove_achievement_message(temp_achievement_message_counter){
	$('.achievement_message_' + temp_achievement_message_counter).addClass('fading');
	setTimeout(function(){
		$('.achievement_message_' + temp_achievement_message_counter).remove();
	},500);
}

function get_achievement_points(){
	if(gamedata['achievements'] == undefined)
	{
		gamedata['achievements'] = {};
	}
	if(gamedata['achievement_points'] == undefined)
	{
		gamedata['achievement_points'] = 0;
	}
	if(gamedata['bonus_achievement_points'] == undefined)
	{
		gamedata['bonus_achievement_points'] = 0;
	}
	var achievement_points = 0;
	$.each(gamedata['achievements'], function(achievement_id, achievement_info){
		achievement_points += achievement_info['level'];
	});
	 achievement_points += gamedata['bonus_achievement_points']
	
	if(achievement_points>=200){achievement_points=200}
	
	
	return achievement_points;
}

function parse_single_ap(achievement_id){
	var achievement_info = available_ap_bonusses[achievement_id];
	var current_level = 0;
	var achievement_image = '';
	if(available_items[achievement_info['background_item']] != undefined)
	{
		achievement_image = available_items[achievement_info['background_item']]['image'];
	}
	if(gamedata['ap_bonusses'][achievement_id] != undefined)
	{
		current_level = gamedata['ap_bonusses'][achievement_id]['level'];
	}

	var parsed_text = '';
	if(achievement_info['text'] != undefined)
	{
		parsed_text += achievement_info['text'] + '<br/>';
	}
	/*parsed_text += 'Current level bonus:<br/>';
	$.each(achievement_info['item_bonus'], function(item_id, item_bonus){
		var effective_bonus = item_bonus * current_level;
		parsed_text += capitalizeFLetter(available_items[item_id]['name']) + ': ' + effective_bonus + '%<br/>';
	});
	$.each(achievement_info['skill_bonus'], function(skill_id, skill_bonus){
		var effective_bonus = skill_bonus * current_level;
		parsed_text += capitalizeFLetter(skill_id) + ': ' + effective_bonus + '%<br/>';
	});*/

	var parsed_achievement = '';
	parsed_achievement += '<div class="single_achievement achievement_id_' + achievement_id + '">';
	parsed_achievement += 	'<div class="achievement_background" style="background-image:url(img/' + achievement_image + ')"></div>';
	parsed_achievement += 	'<div class="achievement_name">' + capitalizeFLetter(achievement_info['name']) + '</div>';
	parsed_achievement += 	'<div class="achievement_progress">' + achievement_info['cost'] + ' AP</div>';
	parsed_achievement += 	'<div class="achievement_level achievement_level_' + current_level + '">' + current_level + '</div>';
	parsed_achievement += 	'<div class="achievement_text">' + parsed_text + '</div>';
	parsed_achievement += '</div>';
	return parsed_achievement;
}

function update_ap_owned(){
	get_achievement_points();
	//gamedata['achievement_points'] = get_achievement_points();
	var owned_points = gamedata['achievement_points'];
	var spent_points = get_spent_points();
	var points_left = owned_points - spent_points;
	gamedata['ap_left'] = points_left;
	$('.ap_amount_container').html(points_left + ' AP');
}

function get_spent_points(){
	var spent_points = 0;
	$.each(gamedata['ap_bonusses'], function(ap_id, ap_info){
		if(available_ap_bonusses[ap_id] != undefined && ap_info['level'] > 0)
		{
			spent_points += available_ap_bonusses[ap_id]['cost'] * ap_info['level'];
		}
	});

	return spent_points;
}

function buy_ap_bonus(ap_id){
	if(gamedata['ap_bonusses'] == undefined)
	{
		gamedata['ap_bonusses'] = {};
	}
	if(available_ap_bonusses[ap_id] != undefined && available_ap_bonusses[ap_id]['cost'] <= gamedata['ap_left']&&available_ap_bonusses[ap_id]['cost2'] == undefined)
	{
		if(gamedata['ap_bonusses'][ap_id] == undefined)
		{
			gamedata['ap_bonusses'][ap_id] = {
				level: 		0,
			}
		}

		gamedata['ap_bonusses'][ap_id]['level']++;
		//saveToLocalStorage();
		show_single_ap_bonus();
	}
	if(available_ap_bonusses[ap_id] != undefined && 100 <= gamedata['恶龙之魂']&&available_ap_bonusses[ap_id]['cost2'] == 1)
	{
		
		if(gamedata['ap_bonusses'][ap_id] == undefined)
		{
			gamedata['ap_bonusses'][ap_id] = {
				level: 		0,
			}
		}
		
        gamedata['恶龙之魂']-=100   
		gamedata['ap_bonusses'][ap_id]['level']++;
		
		//saveToLocalStorage();
		show_single_ap_bonus();
	}	
	
	
	
	
}

