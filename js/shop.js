var selling_amount = 0;
var selling_item = 'none';
var effective_trade_speed = 1;
var current_counter = 0;

function show_home(){
	$('.item_list').html('');
	var counter_count = check_counter_count();
	var new_counter_cost = calculate_new_counter_cost();
	get_effective_trade_speed();

	if(gamedata['coins'] == undefined)
	{
		gamedata['coins'] = 0;
		//saveToLocalStorage();
	}

	//$('.all_counters').html('Coins: <span class="item_coins commas">' + numberWithCommas(gamedata['coins']) + '</span><br/><br/>');
	$('.all_counters').html('');

	$.each(gamedata['counters'], function(counter_id, counter){
		var parsed_counter = '';		
		if(counter['item_id'] != 'none' && counter['item_amount'] > 0)
		{
			parsed_counter += 	'<div class="single_counter counter_' + counter_id + ' rarity_' + available_items[counter['item_id']]['rarity'] + '" style="background-image:url(img/' + available_items[counter['item_id']]['image'] + ')" onclick="check_single_counter(' + counter_id + ')">';
			parsed_counter += 		'<div class="counter_item_count">x' + nFormatter(counter['item_amount'], 3) + '</div>';
			parsed_counter += 		'<div class="counter_item_timer"></div>';
			parsed_counter += 	'</div>';
		}
		else
		{
			parsed_counter += 	'<div class="single_counter counter_' + counter_id + '" onclick="check_single_counter(' + counter_id + ')">';
			parsed_counter += 		'选择物品';
			parsed_counter += 	'</div>';
		}
		parsed_counter += 	'</div>';
		$('.all_counters').append(parsed_counter);
	});
	var parsed_counter = '';
	parsed_counter += 	'<div class="single_counter achievement_button" onclick="show_content(\'achievements\')">成就</div><div class="single_counter buy_new_counter" onclick="buy_new_counter()">扩大商店<br/>' + nFormatter(new_counter_cost, 3) + ' 硬币</div>';
	$('.new_counters').html(parsed_counter);
	//$('.all_counters').append(parsed_counter);
	update_counter_timers();
	gain_item('coins',0);
	if(count_object(gamedata['inventory']) == 0 && count_object(gamedata['known_locations']) == 0)
	{
		/*unlock_location('farm', true);
		current_location = 'farm';
		show_current_location();
		current_action_id = 'clear_the_field';*/
		show_content('unlock_location');
	}
};

function show_home2(){

};
















function check_single_counter(counter_id){
	if(gamedata['counters'][counter_id] != undefined)
	{
		if(gamedata['counters'][counter_id]['item_id'] == 'none')
		{
			current_counter = counter_id;
			show_content('set_counter');
		}
		else
		{
			gamedata['counters'][counter_id]['done_time'] -= 1;
			update_counter_timers();
			//claim_counter(counter_id);
		}
	}
}

function check_counter_count(){
	if(gamedata['counters'] == undefined)
	{
		gamedata['counters'] = {
			0:{
				item_id: 		'none',
				item_amount: 	0,
				done_time: 		0
			}
		}
		//saveToLocalStorage();
	}

	return count_object(gamedata['counters']);
};

	
function calculate_new_counter_cost(){
	var counter_count = count_object(gamedata['counters']);	

	var new_counter_cost = 100;
	for(i = 1; i < counter_count; i++)
	{
	var 怪物=0	
	if(gamedata['inventory']['怪物'] > 0){var 怪物=10*gamedata['inventory']['怪物']};	
	var 敌人=0	
	if(gamedata['inventory']['敌人'] > 0){var 怪物=100*gamedata['inventory']['敌人']};		
	var 绿宝石=0
	if(gamedata['inventory']['绿宝石'] >= 100){var 绿宝石=0.1}		 		
	else if(gamedata['inventory']['绿宝石'] < 100){var 绿宝石=0.001*gamedata['inventory']['绿宝石']};	 
	
		new_counter_cost *= 2-绿宝石;
		new_counter_cost += 怪物+敌人;
		
	}
	return Math.floor(new_counter_cost);
}

function buy_new_counter(){
	var counter_count = check_counter_count();
	var new_counter_cost = calculate_new_counter_cost();
	if(gamedata['coins'] >= new_counter_cost)
	{
		gamedata['coins'] -= new_counter_cost;
		gamedata['counters'][counter_count] = {
			item_id: 		'none',
			item_amount: 	0,
			done_time: 		0
		}
		//saveToLocalStorage();
		show_home();
	}
	
}

function show_set_counter(){
	set_item_sold('none');
	show_inventory_for_sales();
	adjust_sell_amount(0);
		
}

var current_inventory_page = 1;

function show_inventory_for_sales(){
	var inventory_window_width = $('.item_list').width();
	var inventory_window_height = $('.item_list').height();

	var item_width = inventory_window_width * 0.25;
	if(inventory_window_width * 0.23 < 85)
	{
		item_width = 85 + (inventory_window_width * 0.02);
	}
	if(inventory_window_width * 0.23 > 100)
	{
		item_width = 100 + (inventory_window_width * 0.02);
	}

	var inventory_h = 4;
	if(inventory_window_width > 555)
	{
		inventory_h = Math.floor(inventory_window_width / item_width);
	}
	if(inventory_window_width > 780)
	{
		inventory_h = Math.floor(inventory_window_width / 105);
	}



	var inventory_v = Math.floor(inventory_window_height / 105);

	var visible_inventory = inventory_h * inventory_v;
	var inventory_shown = 0;
	$('.item_list').html('');
	if(gamedata['inventory'] != undefined)
	{
		//gamedata['inventory'] = sortObj(gamedata['inventory']);
		$.each(available_items, function(item_id, item_info){
			if(gamedata['inventory'][item_id] >= 0)
			{
				inventory_shown++;
				if(inventory_shown > visible_inventory * (current_inventory_page -1) && inventory_shown <= visible_inventory * (current_inventory_page))
				{
					var parsed_item = parse_item(item_id);
					$('.item_list').append('<span onclick="set_item_sold(\'' + item_id + '\');show_content(\'set_counter_item\')">' + parsed_item + '</span>');
				}
			}
		});
	}
	else
	{
		$('.item_list').html('Get items first');
	}

	var max_inventory_page = Math.ceil(inventory_shown / visible_inventory);

	if(inventory_shown > visible_inventory * current_inventory_page)
	{
		$('.page_further').html('>');
	}
	else
	{
		$('.page_further').html('');
	}

	if(current_inventory_page == 1)
	{
		$('.page_back').html('');
	}
	else
	{
		$('.page_back').html('<');
	}

	$('.page_number').html(current_inventory_page + ' / ' + max_inventory_page);
}

function adjust_inventory_page(amount){
	current_inventory_page += amount;
	if(current_inventory_page < 1)
	{
		current_inventory_page = 1;
	}
	show_inventory_for_sales();
}

function adjust_sell_amount(amount_to_adjust){

	selling_amount += amount_to_adjust;
	if(selling_amount < 0)
	{
		selling_amount = 0;
	}
	if(selling_amount > 17)
	{
		selling_amount = 17;
	}
	$('.amount_sold').html(nFormatter(to_the_tenth(1,selling_amount),3));
	show_time_sold();
	show_value_sold();
}

function set_item_sold(item_id){
	$('.item_list').html('');
	selling_item = item_id;
	var item_amount = 0;
	if(gamedata['inventory'] == undefined)
	{
		gamedata['inventory'] = {};
	}
	if(gamedata['inventory'][item_id] != undefined){item_amount = gamedata['inventory'][item_id];}
	if(available_items[item_id] != undefined)
	{
		for (var i = 10 - 1; i >= 0; i--) {
			$('.selected_item').removeClass('rarity_' + i);
		};
		$('.selected_item').addClass('rarity_' + available_items[item_id]['rarity']);
		$('.item_sold').html(available_items[item_id]['name']);
		$('.selected_item').css('background-image', 'url(img/' + available_items[item_id]['image'] + ')');
		$('.selected_item').html('<span class="item_name">' + available_items[item_id]['name'] + '</span><span class="owned_amount item_' + item_id + '">' + nFormatter(item_amount, 3) + '</span>');
	}
	else
	{
		$('.item_sold').html(item_id);
		$('.selected_item').css('background-image','none');
		$('.selected_item').html('');
	}
	show_time_sold();
	show_value_sold();
}

function show_item_details_page(){
	selling_amount = 0;
	$('.item_list').html('');
	if(gamedata['inventory'] == undefined)
	{
		gamedata['inventory'] = {};
	}
	if(gamedata['inventory'][selling_item] != undefined){item_amount = gamedata['inventory'][selling_item];}
	if(available_items[selling_item] != undefined)
	{
		for (var i = 10 - 1; i >= 0; i--) {
			$('.selected_item').removeClass('rarity_' + i);
		};
		$('.selected_item').addClass('rarity_' + available_items[selling_item]['rarity']);
		$('.item_sold').html(available_items[selling_item]['name']);
		$('.selected_item').css('background-image', 'url(img/' + available_items[selling_item]['image'] + ')');
		$('.selected_item').html('<span class="item_name">' + available_items[selling_item]['name'] + '</span><span class="owned_amount item_' + selling_item + '">' + nFormatter(item_amount, 3) + '</span>');
	}
	else
	{
		$('.item_sold').html('');
		$('.selected_item').css('background-image','none');
		$('.selected_item').html('');
	}
	show_time_sold();
	show_value_sold();
}

function show_time_sold(){
	get_effective_trade_speed();
	var total_time = 0;
	if(selling_item != 'none' && available_items[selling_item] != undefined)
	{
		total_time = (to_the_tenth(1,selling_amount) * calculate_item_sell_time(available_items[selling_item]['value'], available_items[selling_item]['rarity']));
		if(total_time < 10)
		{
			$('.time_sold').html(seconds_to_time(Math.ceil(total_time * 10) / 10));
		}
		else
		{
			$('.time_sold').html(seconds_to_time(Math.ceil(total_time * 1) / 1));
		}
		
	}
	else
	{
		$('.time_sold').html('0s');
	}
	check_can_trade();
}

function show_value_sold(){
	var total_value = 0;
	if(selling_item != 'none' && available_items[selling_item] != undefined)
	{
		total_value = to_the_tenth(1,selling_amount) * available_items[selling_item]['value'];
		$('.coins_sold').html(nFormatter(total_value,3));
	}
	else
	{
		$('.coins_sold').html('0');
	}
}

function check_can_trade(){
	if(gamedata['inventory'] != undefined && gamedata['inventory'][selling_item] != undefined && to_the_tenth(1,selling_amount) <= gamedata['inventory'][selling_item])
	{
		$('.start_selling_button').removeClass('disabled');
		return true;
	}
	else
	{
		$('.start_selling_button').addClass('disabled');
		return false;
	}
}

function start_selling(){
	if(check_can_trade())
	{
		$('.home_button').removeClass('danger');
		gamedata['inventory'][selling_item] -= to_the_tenth(1,selling_amount);
		gamedata['counters'][current_counter] = {
			item_id: 		selling_item,
			item_amount: 	to_the_tenth(1,selling_amount),
			done_time: 		current_time(),
		}
		//saveToLocalStorage();
		show_content('home');
	}
}

function calculate_item_sell_time(value, rarity){
	if(rarity == undefined){rarity = 1;}
	var rarity_factor = 1;
	for (var i = rarity; i > 1; i--) {
		rarity_factor *= 1.5;
	};
	for (var i = rarity; i == 0; i--) {
		rarity_factor *= 0.000001;
	};	
	var sell_time = ((value /rarity_factor) / (1 + (Math.sqrt(value) / 100)) / effective_trade_speed) / 2;
	return sell_time;
	
	
}

function update_counter_timers(){
	get_effective_trade_speed();
	if($('#content_home').hasClass('active') || true)
	{
		var any_counter_empty = 0;
		var counter_count = count_object(gamedata['counters']);
		check_counter_count();
		$.each(gamedata['counters'], function(counter_id, counter){
			if(counter['item_id'] != 'none')
			{
				var time_left = current_time() - counter['done_time'];
				if(time_left > 0)
				{
					if(counter['item_amount'] > 0)
					{
						var item_time = (calculate_item_sell_time(available_items[counter['item_id']]['value'], available_items[counter['item_id']]['rarity']));
						var items_sold = Math.floor((time_left) / item_time);
						if(counter['item_amount'] < items_sold)
						{
							items_sold = counter['item_amount'];
						}
						var ticks_passed = Math.floor(((time_left) + item_time) / item_time);
						//if(ticks_passed < 1 && time_left == 0){ticks_passed = 1;}
						//if(ticks_passed > 10){ticks_passed = Math.ceil(ticks_passed / 10);}
						if(items_sold >= 1)
						{
								//show_content('none');
							
							counter['item_amount'] -= items_sold;
							var spare_time = (time_left) - (items_sold * item_time);
							counter['done_time'] += items_sold * item_time;
							gain_item('coins', available_items[counter['item_id']]['value'] * items_sold);
							if($('#content_home').hasClass('active'))
							{
								var parsed_floating_text = parse_floating_text('+' + nFormatter(available_items[counter['item_id']]['value'] * items_sold, 1) + '', 'rgba(240, 230, 48,1)');
								$('.counter_' + counter_id).append(parsed_floating_text);
								$('.counter_' + counter_id + ' .counter_item_count').html('x' + nFormatter(counter['item_amount'], 3));
								//$('.counter_' + counter_id + ' .counter_item_timer').html(seconds_to_time(Math.ceil(spare_time)) + '.');
								//$('.counter_' + counter_id + ' .counter_item_timer').html(('Sold!'));
							}
						}

						var time_to_sale = Math.ceil(item_time - time_left);
						if(time_to_sale < 0){time_to_sale = 0;}
						
						if($('#content_home').hasClass('active') && item_time >= 1)
						{
							
							$('.counter_' + counter_id + ' .counter_item_timer').html(seconds_to_time(time_to_sale));
						}
						
					}

					if(counter['item_amount'] <= 0)
					{
						any_counter_empty += 1;
						counter['item_id'] = 'none';
						//$('.counter_' + counter_id).html('Select item');
						if($('#content_home').hasClass('active'))
						{
							for (var i = 10 - 1; i >= 0; i--) {
								$('.counter_' + counter_id + '').removeClass('rarity_' + i);
							};
							$('.counter_' + counter_id + ' .counter_item_count').remove();
							$('.counter_' + counter_id + ' .counter_item_timer').remove();
							$('.counter_' + counter_id).append('选择物品');
							$('.counter_' + counter_id).css('background-image','none');
						}
						//show_home();
					}
				}
				/*else
				{					
					$('.counter_' + counter_id + ' .counter_item_timer').html(seconds_to_time(Math.ceil(time_left)));
				}*/
			}
			else
			{
				any_counter_empty += true;
			}
		});

		if(any_counter_empty == counter_count)
		{
			$('.home_button').addClass('danger');
		}
		else
		{
			$('.home_button').removeClass('danger');
		}
		if(any_counter_empty < counter_count && any_counter_empty > 0)
		{
			$('.home_button').addClass('cool');
		}
		else
		{
			$('.home_button').removeClass('cool');
		}
	}
	
}

function get_effective_trade_speed(){
	if(gamedata['trade_speed'] == undefined)
	{
		gamedata['trade_speed'] = 1;
	}
	effective_trade_speed = (0.96 + (gamedata['trade_speed'] / 25));

	if(gamedata['prestige'] == undefined){gamedata['prestige'] = 0;}
	for (var i = 1; i <= gamedata['prestige']; i++) {
		effective_trade_speed *= 2;
	};







	if(100 / effective_trade_speed > 50)
	{
		$('.trade_speed_level').html(gamedata['trade_speed'] + ' (' + nFormatter(100 / effective_trade_speed) + '%)');
	}
	else
	{
		if(100 / effective_trade_speed > 10)
		{
			$('.trade_speed_level').html(gamedata['trade_speed'] + ' (' + nFormatter(100 / effective_trade_speed, 1) + '%)');
		}
		else
		{
			$('.trade_speed_level').html(gamedata['trade_speed'] + ' (' + nFormatter(100 / effective_trade_speed, 2) + '%)');
		}
	}
	
	
	
	get_trade_speed_cost();
};

function get_trade_speed_cost(){
	//var trade_speed_cost = to_the_second(100, gamedata['trade_speed'] -1);
	var trade_speed_cost = (100 * gamedata['trade_speed'] * gamedata['trade_speed']);
	$('.trade_speed_cost').html(nFormatter(trade_speed_cost, 3));
	return trade_speed_cost;
}

function upgrade_trade_speed(){
	var trade_speed_cost = get_trade_speed_cost();
	if(gamedata['coins'] >= trade_speed_cost)
	{
		gain_item('coins', trade_speed_cost * -1);
		gamedata['trade_speed'] += 1;
	}
	show_home();
}

function claim_counter(counter_id){
	check_counter_count();

	if(gamedata['counters'][counter_id]['item_id'] != 'none')
	{
		/*gain_coins(gamedata['counters'][counter_id]['item_amount'] * available_items[gamedata['counters'][counter_id]['item_id']]['value']);
		gamedata['counters'][counter_id] = {
			item_id: 		'none',
			item_amount: 	0,
			done_time: 		0
		}
		//saveToLocalStorage();
		show_home();*/
		gamedata['counters'][counter_id]['done_time'] -= 1;
		update_counter_timers();
	}
	else
	{
		
	}
	
}

function gain_coins(amount){
	if(gamedata['coins'] == undefined)
	{
		gamedata['coins'] = 0;
		//saveToLocalStorage();
	}

	gamedata['coins'] += amount;
	//saveToLocalStorage();
}









