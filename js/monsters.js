function parse_monster(monster_id, monster_amount, monster_health_percent, current_id, show_entry){
	var parsed_item = '';
	if(available_monsters[monster_id] != undefined)
	{
		var rarity = 1;
		if(available_monsters[monster_id]['rarity'] != undefined){rarity = available_monsters[monster_id]['rarity'];}
		parsed_item +=				'<div class="item show_entry_' + show_entry + ' item_container_' + monster_id + ' item_container_' + monster_id + '_' + current_id + ' rarity_' + rarity + '" style="background-image:url(img/' + available_monsters[monster_id]['image'] + ');">';
		parsed_item += 					'<div class="monster_health_bar_container"><div class="monster_health_bar" style="width:' + monster_health_percent + '%"></div></div>';
		parsed_item +=					'<span class="item_name">' + available_monsters[monster_id]['name'] + '</span>';
		parsed_item +=					'<span class="owned_amount item_' + monster_id + '">' + nFormatter(monster_amount, 3) + '</span>';
		parsed_item +=				'</div>';
	}

	return parsed_item;
}

function parse_unit(monster_id, monster_amount, monster_health_percent){
	var parsed_item = '';
	if(available_items[monster_id] != undefined)
	{
		var rarity = 1;
		if(available_items[monster_id]['rarity'] != undefined){rarity = available_items[monster_id]['rarity'];}
		parsed_item +=				'<div class="item item_container_c_' + monster_id + ' rarity_' + rarity + '" style="background-image:url(img/' + available_items[monster_id]['image'] + ');">';
		parsed_item += 					'<div class="monster_health_bar_container"><div class="monster_health_bar" style="width:' + monster_health_percent + '%"></div></div>';
		parsed_item +=					'<span class="item_name">' + available_items[monster_id]['name'] + '</span>';
		parsed_item +=					'<span class="owned_amount item_c_' + monster_id + '">' + nFormatter(monster_amount, 3) + '</span>';
		parsed_item +=				'</div>';
	}

	return parsed_item;
}

function show_assign_units(){
	$('.item_list').html('');
	var shown_amount = 0;
	if(gamedata['inventory'] != undefined)
	{
		//gamedata['inventory'] = sortObj(gamedata['inventory']);
		$.each(available_items, function(item_id, item_info){
			if(gamedata['inventory'][item_id] >= 0 && item_info['stats'] != undefined)
			{
				shown_amount++;
				var parsed_item = parse_item(item_id);
				$('.item_list').append('<span onclick="set_item_sold(\'' + item_id + '\');show_content(\'assign_single_unit\')">' + parsed_item + '</span>')
			}
		});
	}
	if(shown_amount == 0)
	{
		$('.item_list').html('Get combat items first');
	}
}




function show_assign_single_unit(){
	adjust_sell_amount(0);
	show_item_stats(selling_item);
}

function show_item_stats(item_id){
	var parsed_stats = '<br/>';
	if(available_items[item_id] != undefined && available_items[item_id]['stats'] != undefined)
	{
		var current_stats = available_items[item_id]['stats'];
		
		parsed_stats += 'Hit: <span>' + current_stats['hit'] + '</span><br/>';
		parsed_stats += 'Power: <span>' + current_stats['power'] + '</span><br/>';
		parsed_stats += 'Evade: <span>' + current_stats['evade'] + '</span><br/>';
		parsed_stats += 'Armor: <span>' + current_stats['armor'] + '</span><br/>';
		parsed_stats += 'Health: <span>' + current_stats['health'] + '</span><br/>';
		var parsed_abilities = '';
		$.each(current_stats['abilities'], function(ability_id, ability_level){
			if(parsed_abilities != ''){parsed_abilities += ', ';}
			parsed_abilities += available_abilities[ability_id]['name'];
		});
		if(parsed_abilities != '')
		{
			parsed_stats += '<br/>Abilities: ' + parsed_abilities;
		}

	}
	$('.item_stats').html(parsed_stats);
}