var available_monsters = {
	m_squirrel:{
		name: 		'squirrel',
		image: 		'monsters/squirrel-1850210_640.jpg',
		rarity: 	1,
		hit: 		2,
		power: 		1,
		evade: 		2,
		armor: 		0,
		health: 	25,
		abilities:{
			strike: 	1
		},
		loot:{
			hide: 	280
		}
	},
	m_hunter:{
		name: 		'hunter',
		image: 		'items/archer-3895735_640.jpg',
		rarity: 	1,
		hit: 		3,
		power: 		2,
		evade: 		2,
		armor: 		0,
		health: 	125,
		abilities:{
			strike: 	1
		},
		loot:{
			hide: 		100,
			cloth:  	10,
			arrow: 		80,
			bow: 		10
		}
	},
	m_robin:{
		name: 		'robin',
		image: 		'monsters/bird-2295436_640.jpg',
		rarity: 	1,
		hit: 		1,
		power: 		1,
		evade: 		5,
		armor: 		0,
		health: 	25,
		abilities:{
			strike: 	1
		},
		loot:{
			feather: 		100,
		}
	},
	m_brown_bear:{
		name: 		'brown bear',
		image: 		'monsters/bear-422682_640.jpg',
		rarity: 	2,
		hit: 		5,
		power: 		20,
		evade: 		5,
		armor: 		5,
		health: 	500,
		abilities:{
			strike: 	1
		},
		loot:{
			hide: 		100,
			meat: 		100,
			bone: 		100
		}
	},
	m_roe:{
		name: 		'roe',
		image: 		'monsters/roe-deer-1367182_640.jpg',
		rarity: 	1,
		hit: 		0,
		power: 		0,
		evade: 		5,
		armor: 		0,
		health: 	50,
		abilities:{
		},
		loot:{
			hide: 		100,
			meat: 		20,
			bone: 		10
		}
	},
	
}

var available_abilities = {
	strike:{
		name: 		'Strike',
		type: 		'damage',
		side: 		'enemy',
		target_amount: 1,
		subtypes: 	['physical','melee'],
	},
	shoot:{
		name: 		'Shoot',
		type: 		'damage',
		side: 		'enemy',
		target_amount: 1,
		subtypes: 	['physical','ranged'],
	}
}

$.each(available_monsters, function(monster_id, monster_info){
	monster_info['power'] *= 0.2;
	monster_info['health'] *= 2;
	var mob_value = 0;
	mob_value += monster_info['hit'];
	mob_value += monster_info['power'];
	mob_value += monster_info['evade'];
	mob_value += monster_info['armor'];
	mob_value += monster_info['health'] / 50;
	mob_value = mob_value * mob_value * 5;
	var loot_value = 0;
	$.each(monster_info['loot'], function(loot_id, loot_chance){
		if(available_items[loot_id] != undefined){
			loot_value += ((available_items[loot_id]['value'] * loot_chance) / 100);
		}
	});
	var loot_factor = mob_value / loot_value;
	$.each(monster_info['loot'], function(loot_id, loot_chance){
		available_monsters[monster_id]['loot'][loot_id] *= loot_factor;
	});
});