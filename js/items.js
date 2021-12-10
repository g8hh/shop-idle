function check_item(item_id){
	if(item_id != 'coins' && available_items[item_id] != undefined)
	{
		if(gamedata['inventory'] == undefined){
			gamedata['inventory'] = {};
			saveToLocalStorage();
		}
		if(gamedata['inventory'][item_id] == undefined){
			gamedata['inventory'][item_id] = 0;
			saveToLocalStorage();
		}
	}
}

function gain_item(item_id, amount, hide_visible_effects, check_a){
	if(item_id == 'coins')
	{
		gamedata['coins'] += amount;
		if(gamedata['coins_gained'] == undefined){gamedata['coins_gained'] = 0;}
		if(amount > 0)
		{
			gamedata['coins_gained'] += amount;
		}
		if(hide_visible_effects == undefined || hide_visible_effects == false)
		{
			$('.item_' + item_id).html(nFormatter(Math.floor(gamedata['coins']), 3));
			$('.item_' + item_id + '.commas').html(numberWithCommas(Math.floor(gamedata['coins'])), 3);
			$('.coins_gained').html(nFormatter(Math.floor(gamedata['coins_gained']), 3));
			check_have_enough(item_id);
		}
	}
	if(available_items[item_id] != undefined)
	{
		check_item(item_id);
		gamedata['inventory'][item_id] += amount;
		if(hide_visible_effects == undefined || hide_visible_effects == false)
		{
			if(gamedata['inventory'][item_id] < 0){gamedata['inventory'][item_id] = 0;}
			$('.item_' + item_id).html(nFormatter(gamedata['inventory'][item_id], 3));
			check_have_enough(item_id);
		}
	}
	if(amount > 0 && (check_a == undefined || check_a == true))
	{
		check_achievements(item_id, undefined, amount);
	}
	if($('#content_unlock_location').hasClass('active'))
	{
		show_unlock_location();
	}
	saveToLocalStorage();
}

function check_have_enough(item_id){
	$('.item_' + item_id).each(function(i, obj) {
		if($(obj).attr('attr-min-required') != undefined)
		{
			var needed = $(obj).attr('attr-min-required');
			var owned = 0;
			if(item_id == 'coins')
			{
				owned = gamedata['coins'] + 0;
			}
			if(available_items[item_id] != undefined && gamedata['inventory'][item_id] != undefined)
			{
				owned = gamedata['inventory'][item_id];
			}
			$(obj).css('color',get_percent_color(owned, needed));
			/*if(needed > owned)
			{
				$(obj).css('color',get_percent_color(owned, needed));
				$(obj).removeClass('enough');
				$(obj).addClass('not_enough');
			}
			else
			{
				$(obj).css('color','auto');
				$(obj).removeClass('not_enough');
				$(obj).addClass('enough');
			}*/
		}
	});
}

function get_percent_color(var_1, var_2){
	var percent = Math.floor(var_1 / var_2 * 100);
	var red = Math.floor(400 - (percent * 2.5));
	var green = Math.floor(150 + (percent * 1));
	if(green < 150){green = 150;}
	var color = 'rgba(' + red + ',' + green + ',150,0.7)';
	if(var_1 == 0)
	{
		color = 'rgba(250,50,50,1)';
	}
	if(var_1 >= var_2)
	{
		color = 'rgba(100,220,100,1)';
	}
	return color;
}

function get_item_owned_amount(item_id){
	if(item_id != 'coins' && available_items[item_id] != undefined)
	{
		check_item(item_id);

		return gamedata['inventory'][item_id];
	}
	if(item_id == 'coins')
	{
		return gamedata['coins'];
	}
}

function parse_item(item_id, forced_amount){
	var owned_amount = get_item_owned_amount(item_id);
	var parsed_item = '';
	if(available_items[item_id] != undefined)
	{
		var rarity = 1;
		if(available_items[item_id]['rarity'] != undefined){rarity = available_items[item_id]['rarity'];}
		parsed_item +=				'<div class="item item_container_' + item_id + ' rarity_' + rarity + '" style="background-image:url(img/' + available_items[item_id]['image'] + ');">';
		parsed_item +=					'<div class="bg" ></div>';
		parsed_item +=					'<span class="item_name">' + available_items[item_id]['name'] + '</span>';
		if(forced_amount == undefined)
		{
			parsed_item +=					'<span class="owned_amount item_' + item_id + '">' + nFormatter(owned_amount, 3) + '</span>';
		}
		else
		{
			parsed_item +=					'<span class="owned_amount">' + nFormatter(forced_amount, 3) + '</span>';
		}
		parsed_item +=				'</div>';
	}

	return parsed_item;
}