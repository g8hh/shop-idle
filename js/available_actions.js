var available_actions = {	
	t1n2_1:{
		name: 			'锻炼身体',
		bonus_loot:{	
	    	体力: 		100,	
			力量: 		100,		
		},	

		chance: 		100,
		skill: 			'勇者斗恶龙',
		action_name: 		'锻炼',	
		upgrade_item: 		'exp',	
		fail_text: 		'Shit',
		难度倍数:        0.01,
	},		
	t1n2_2:{
		name: 			'狩猎史莱姆',
		bonus_loot:{	
	    	exp: 		100,	
			战利品: 	200,		
		},	

		chance: 		100,
		skill: 			'勇者斗恶龙',
		action_name: 		'攻击',	
		upgrade_item: 		'力量',	
		fail_text: 		'Shit',
		难度倍数:        0.1,
		cost:{
			体力:		1,
		},
		unlock_cost:{
			力量:		1
		}		
	},		
	t1n2_3:{
		name: 			'盲人按摩',
		bonus_loot:{	
	    	体力: 		110,		
		},	

		chance: 		100,
		skill: 			'勇者斗恶龙',
		action_name: 		'按摩',	
		upgrade_item: 		'战利品',	
		fail_text: 		'Shit',
		难度倍数:        1,
		cost:{
			战利品:		1,
		},
		unlock_cost:{
			战利品:		1
		}		
	},		
	t1n2_4:{
		name: 			'狩猎骷髅',
		unlock_name: 	'狩猎骷髅【战利品更多】',		
		bonus_loot:{	
	    	exp: 		500,	
			战利品: 	1200,		
		},	

		chance: 		100,
		skill: 			'勇者斗恶龙',
		action_name: 		'攻击',	
		upgrade_item: 		'力量',	
		fail_text: 		'Shit',
		难度倍数:        0.1,
		cost:{
			体力:		4,
		},
		unlock_cost:{
			力量:		100
		}		
	},		
	t1n2_5:{
		name: 			'美女按摩',
		unlock_name: 	'美女按摩【恢复更快】',
		bonus_loot:{	
	    	体力: 		770,		
		},	

		chance: 		100,
		skill: 			'勇者斗恶龙',
		action_name: 		'按摩',	
		upgrade_item: 		'战利品',	
		fail_text: 		'Shit',
		难度倍数:        1,
		cost:{
			战利品:		7,
		},
		unlock_cost:{
			战利品:		1000
		}		
	},		
	t1n2_6:{
		name: 			'提升力量',
		unlock_name: 	'提升力量',
		bonus_loot:{	
	    	力量: 		5000,		
		},	

		chance: 		100,
		skill: 			'勇者斗恶龙',
		action_name: 		'升级',	
		upgrade_item: 		'exp',	
		fail_text: 		'Shit',
		难度倍数:        0.1,
		cost:{
			exp:		1000,
		},
		unlock_cost:{
			exp:		1000
		}		
	},		
	t1n2_7:{
		name: 			'狩猎兽人 ',
		unlock_name: 	'狩猎兽人 【战利品更更多】',		
		bonus_loot:{	
	    	exp: 	    2500,	
			战利品: 	7200,		
		},	

		chance: 		100,
		skill: 			'勇者斗恶龙',
		action_name: 		'攻击',	
		upgrade_item: 		'力量',	
		fail_text: 		'Shit',
		难度倍数:        0.1,
		cost:{
			体力:		16,
		},
		unlock_cost:{
			力量:		200
		}		
	},		
	t1n2_8:{
		name: 			'公主按摩',
		unlock_name: 	'公主按摩【恢复更更快】',
		bonus_loot:{	
	    	体力: 		5390,		
		},	

		chance: 		100,
		skill: 			'勇者斗恶龙',
		action_name: 		'按摩',	
		upgrade_item: 		'战利品',	
		fail_text: 		'Shit',
		难度倍数:        1,
		cost:{
			战利品:		49,
		},
		unlock_cost:{
			战利品:		2000
		}		
	},		
	t1n2_9:{
		name: 			'狩猎鬼魂 ',
		unlock_name: 	'狩猎鬼魂 【战利品更更更多】',		
		bonus_loot:{	
	    	exp: 	    7500,	
			战利品: 	43200,		
		},	

		chance: 		100,
		skill: 			'勇者斗恶龙',
		action_name: 		'攻击',	
		upgrade_item: 		'力量',	
		fail_text: 		'Shit',
		难度倍数:        0.1,
		cost:{
			体力:		184,
		},
		unlock_cost:{
			力量:		500
		}		
	},		
	t1n2_10:{
		name: 			'天使按摩',
		unlock_name: 	'天使按摩【恢复更更更快】',
		bonus_loot:{	
	    	体力: 		37730,		
		},	

		chance: 		100,
		skill: 			'勇者斗恶龙',
		action_name: 		'按摩',	
		upgrade_item: 		'战利品',	
		fail_text: 		'Shit',
		难度倍数:        1,
		cost:{
			战利品:		343,
		},
		unlock_cost:{
			战利品:		10000
		}		
	},		
	t1n2_11:{
		name: 			'购买装备',
		unlock_name: 	'购买装备【战利品换取力量】',
		bonus_loot:{	
	    	力量: 		10000,		
		},	

		chance: 		100,
		skill: 			'勇者斗恶龙',
		action_name: 		'购买',	
		upgrade_item: 		'战利品',	
		fail_text: 		'Shit',
		难度倍数:        10,
		cost:{
			战利品:		10000,
		},
		unlock_cost:{
			战利品:		10000
		}		
	},		
	t1n2_12:{
		name: 			'狩猎多基法师 ',
		unlock_name: 	'狩猎多基法师 【战利品更更更更多】',		
		bonus_loot:{	
	    	exp: 	    37500,	
			战利品: 	259200,		
		},	

		chance: 		100,
		skill: 			'勇者斗恶龙',
		action_name: 		'攻击',	
		upgrade_item: 		'力量',	
		fail_text: 		'Shit',
		难度倍数:        0.1,
		cost:{
			体力:		736,
		},
		unlock_cost:{
			力量:		1000
		}		
	},		
	t1n2_13:{
		name: 			'魔鬼按摩',
		unlock_name: 	'魔鬼按摩【恢复更更更更快】',
		bonus_loot:{	
	    	体力: 		264110,		
		},	

		chance: 		100,
		skill: 			'勇者斗恶龙',
		action_name: 		'按摩',	
		upgrade_item: 		'战利品',	
		fail_text: 		'Shit',
		难度倍数:        1,
		cost:{
			战利品:		2401,
		},
		unlock_cost:{
			战利品:		50000
		}		
	},	
	t1n2_14:{
		name: 			'狩猎死灵骑士 ',
		unlock_name: 	'狩猎死灵骑士 【战利品更更更更更多】',		
		bonus_loot:{	
	    	exp: 	    187500,	
			战利品: 	1555200,		
		},	

		chance: 		100,
		skill: 			'勇者斗恶龙',
		action_name: 		'攻击',	
		upgrade_item: 		'力量',	
		fail_text: 		'Shit',
		难度倍数:        0.1,
		cost:{
			体力:		2944,
		},
		unlock_cost:{
			力量:		10000
		}		
	},		
	t1n2_15:{
		name: 			'阳光按摩',
		unlock_name: 	'阳光按摩【恢复更更更更更快】',
		bonus_loot:{	
	    	体力: 		1848770,		
		},	

		chance: 		100,
		skill: 			'勇者斗恶龙',
		action_name: 		'按摩',	
		upgrade_item: 		'战利品',	
		fail_text: 		'Shit',
		难度倍数:        1,
		cost:{
			战利品:		16807,
		},
		unlock_cost:{
			战利品:		250000
		}		
	},		
	t1n2_16:{
		name: 			'购买传说の剑',
		unlock_name: 	'购买传说の剑【战利品换取传说の剑准备屠龙】',
		bonus_loot:{	
	    	力量: 		1500000,		
		},	

		chance: 		100,
		skill: 			'勇者斗恶龙',
		action_name: 		'购买',	
		upgrade_item: 		'战利品',	
		fail_text: 		'Shit',
		难度倍数:        10,
		cost:{
			战利品:		1000000,
		},
		unlock_cost:{
			战利品:		1000000
		}		
	},	
	t1n2_17:{
		name: 			'屠龙【加成上限92只，最高减少92%同类效果互相乘算】',
		unlock_name: 	'屠龙【建议升级到100级以上】',
		bonus_loot:{	
	    	恶龙: 		100,	
          经验球:		10000,			
		},	

		chance: 		100,
		skill: 			'勇者斗恶龙',
		action_name: 		'屠龙',	
		upgrade_item: 		'exp',	
		fail_text: 		'Shit',
		难度倍数:        30,
		cost:{
			体力:		1000000,
		},
		unlock_cost:{
			力量:		50000
		}		
	},		
	
	
	
	
	
	
	
	
	
	
	
	
	t1n1_1:{
		name: 			'要想富先撸树',
		item_id: 		'木棍',	
		bonus_loot:{	
	    	原木: 		10,	
			苹果: 		5,		
	        经验球: 		0.01,	
		},	

		chance: 		50,
		skill: 			'世界',
		action_name: 		'撸树',	
	    passive_factor: 	0.5,
		fail_text: 		'Shit',
		难度倍数:        0.1,
		fail_text: 		'Shit',
	},	
	t1n1_2:{
		name: 			'制作工作台',
		unlock_name: 	'研究工作台【价值500刀】',
		item_id: 		'工作台',	
		chance: 		100,
		skill: 			'世界',
		action_name: 		'制作',
		fail_text: 		'Shit',
		难度倍数:        2,
		cost:{
			原木:		4,
		},
		unlock_cost:{
			原木:		4
		}
	},	
	t1n1_3:{
		name: 			'吃苹果',
		unlock_name: 	'吃苹果【可以获得饱食度】',
		item_id: 		'饱食度',	
		bonus_loot:{		
		},		
        reward_factor: 		10,		
		chance: 		100,
		skill: 			'世界',
		action_name: 		'吃苹果',
		fail_text: 		'Shit',
		难度倍数:        1,
		cost:{
			苹果:		1,
		},
		unlock_cost:{
			苹果:		1
		}
	},	
	t1n1_4:{
		name: 			'探索附近',
		unlock_name: 	'探索附近【找些有用的东西】',
		bonus_loot:{
			石头: 	60,
			原木: 	10,
			木棍: 	80,
			猪: 	5,
			怪物: 	1,			
		},		
        reward_factor: 		1,		
		chance: 		50,
		skill: 			'世界',
		action_name: 		'探索',
		fail_text: 		'啥都没找到',
		难度倍数:        1.5,
		cost:{
			饱食度:		1,
		},
		unlock_cost:{
			饱食度:		5
		}
	},		
	t1n1_5:{
		name: 			'制作斧头',
		unlock_name: 	'制作斧头【可以砍树】',
		item_id: 		'斧头',	
		bonus_loot:{
		},			
		chance: 		25,
		skill: 			'世界',
		action_name: 		'制作',
		fail_text: 		'Shit',
		upgrade_item: 		'工作台',			
        难度倍数:        2.7,			
		cost:{
			石头:		3,
			原木:		2
		},
		unlock_cost:{
			石头:		3,
			原木:		2
		}
	},		
	t1n1_6:{
		name: 			'砍树',
		unlock_name: 	'砍伐树木',
		item_id: 		'原木',	
		bonus_loot:{
			木棍: 		80,
			苹果: 		8,
			怪物: 	2,					
		},	
        reward_factor: 		15,			
		chance: 		50,
		skill: 			'世界',
		action_name: 		'砍树',
		fail_text: 		'Shit',
		难度倍数:        3,				
		cost:{
			斧头:		1,
			饱食度:		1,
		},
		unlock_cost:{
			斧头:		1,
		}
	},	
	t1n1_7:{
		name: 			'制作稿子',
		unlock_name: 	'制作稿子【可以挖矿】',
		item_id: 		'稿子',	
		bonus_loot:{
		},			
		chance: 		25,
		skill: 			'世界',
		action_name: 		'制作',
		fail_text: 		'Shit',
		upgrade_item: 		'工作台',		
		难度倍数:        2.7,		
		cost:{
			石头:		3,
			原木:		2
		},
		unlock_cost:{
			石头:		3,
			原木:		2
		}
	},		
	t1n1_8:{
		name: 			'挖矿',
		unlock_name: 	'开始挖矿',
		item_id: 		'石头',	
		bonus_loot:{
			铜矿石: 		15,
			宝藏: 		0.2,
			怪物: 	3,				
		},	
        reward_factor: 		10,			
		chance: 		50,
		skill: 			'世界',
		action_name: 		'挖矿',
		fail_text: 		'Shit',
		难度倍数:        3,			
		cost:{
			稿子:		1,
			饱食度:		2,
		},
		unlock_cost:{
			稿子:		1,
		}
	},		
	t1n1_9:{
		name: 			'制作熔炉',
		unlock_name: 	'研究熔炉【价值1000刀】',
		item_id: 		'熔炉',	
		chance: 		100,
		skill: 			'世界',
		action_name: 		'制作',
		fail_text: 		'Shit',
		难度倍数:        4,			
		cost:{
			石头:		8,
		},
		unlock_cost:{
			石头:		50
		}
	},		
	t1n1_10:{
		name: 			'烤猪',
		unlock_name: 	'起火烤猪【吃得饱】',
		item_id: 		'饱食度',	
		reward_factor: 		50,	
		chance: 		100,
		skill: 			'世界',
		action_name: 		'烤制',
		fail_text: 		'Shit',
		难度倍数:        3,			
		cost:{
			木棍:		30,
			猪:		1
		},
		unlock_cost:{
			猪:		1
		}
	},		
	t1n1_11:{
		name: 			'烧制木炭',
		unlock_name: 	'制作木炭用于熔炼矿物',
		item_id: 		'木炭',	
		reward_factor: 		1,	
		chance: 		100,
		skill: 			'世界',
		action_name: 		'制作',
		fail_text: 		'Shit',
		upgrade_item: 		'熔炉',
		难度倍数:        2,		
		cost:{		
			原木:		1
		},
		unlock_cost:{
			熔炉:		1
		}
	},	
	t1n1_12:{
		name: 			'烧制铜矿',
		unlock_name: 	'制作铜锭用于制作工具',
		item_id: 		'铜锭',	
		reward_factor: 		1,	
		chance: 		100,
		skill: 			'世界',
		action_name: 		'制作',
		fail_text: 		'Shit',
		upgrade_item: 		'熔炉',
		难度倍数:        3.2,		
		cost:{
			铜矿石:		1,
			木炭:		2,
		},
		unlock_cost:{
			熔炉:		1,
			铜矿石:		10,
		}
	},	
	t1n1_13:{
		name: 			'制作铜装备',
		unlock_name: 	'制作铜装备【可以探索远处了】',
		item_id: 		'铜装备',	
		bonus_loot:{
		},			
		chance: 		25,
		skill: 			'世界',
		action_name: 		'制作',
		fail_text: 		'Shit',
		upgrade_item: 		'工作台',	
		难度倍数:        7,			
		cost:{
			铜锭:		8,

		},
		unlock_cost:{
			铜锭:		10
		}
	},		
	t1n1_14:{
		name: 			'探索远处【解锁下位置地点】',
		unlock_name: 	'探索远处【找到村民可以开启新位置】',
		bonus_loot:{
			水: 	100,			
			石头: 	50,
			木棍: 	80,
			原木: 	50,			
			猪: 	5,
			村民: 	10,
			宝藏: 	3,
            怪物: 	10,			
		},	
		chance: 		50,
		skill: 			'世界',
		action_name: 		'探索',
		fail_text: 		'啥都没找到',
	    passive_factor: 	10,
		难度倍数:        3,
		cost:{
			饱食度:		8,
		},
		unlock_cost:{
			铜装备:		1
		}
	},	
	t1n1_15:{
		name: 			'击杀怪物【每个怪物增加商店扩展基础金额10】',
		unlock_name: 	'击杀怪物【每个怪物增加商店扩展基础金额10】',
		bonus_loot:{
			经验球: 	60,				
			腐肉: 	60,	
			宝藏: 	0.1,			
		},		
        reward_factor: 		1,		
		chance: 		50,
		skill: 			'世界',
		action_name: 		'击杀',
		fail_text: 		'没有掉落',
		难度倍数:        1.5,
		cost:{
			怪物: 	1,				
			饱食度:		3,
		},
		unlock_cost:{
			饱食度:		10
		}
	},	
	t1n1_16:{
		name: 			'制作木棍',
		unlock_name: 	'制作木棍',
		bonus_loot:{
			木棍: 	75000,		
		},			
		chance: 		25,
		skill: 			'世界',
		action_name: 		'劈砍',
		fail_text: 		'Shit',
		upgrade_item: 		'斧头',			
        难度倍数:        5,			
		cost:{
			斧头:		1,
			原木:		50
		},
		unlock_cost:{
			斧头:		1,
			原木:		1
		}
	},		



//=================================村庄=================================	
	t2n1_1:{
		name: 			'建设房屋',
		unlock_name: 	'建设房屋',
		item_id: 		'房屋',				
		bonus_loot:{		
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'村庄',
		action_name: 		'建设',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        6,
		cost:{
			原木: 	30,		
			石头: 	20,					
			木棍:		100,				
			饱食度:		50,
		},
		unlock_cost:{
			饱食度:		50
		}
	},		
    t2n1_2:{
		name: 			'训练伐木工',
		unlock_name: 	'训练伐木工',
		item_id: 		'伐木工',		
		bonus_loot:{			
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'村庄',
		action_name: 		'训练',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        3,
		cost:{
			房屋: 	1,				
			村民:		1,			
			斧头:		1,
		},
		unlock_cost:{
			房屋:		1
		}
	},		
    t2n1_3:{
		name: 			'训练采矿工',
		unlock_name: 	'训练采矿工',
		item_id: 		'采矿工',		
		bonus_loot:{			
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'村庄',
		action_name: 		'训练',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        3,
		cost:{
			房屋: 	1,				
			村民:		1,			
			稿子:		1,
		},
		unlock_cost:{
			房屋:		1
		}
	},		
    t2n1_4:{
		name: 			'砍树',
		unlock_name: 	'派遣工人去砍树',	
		bonus_loot:{	
			原木: 	15000,			
			木棍: 	10000,
			苹果: 	1000,
			怪物: 	200,						
		},		
        reward_factor: 		1,		
		chance: 		50,
		skill: 			'村庄',
		action_name: 		'砍树',
		fail_text: 		'没有掉落',	
		upgrade_item: 		'伐木工',		
		难度倍数:        4.1,
		cost:{	
			斧头:		10,		
			饱食度:		20,
		},
		unlock_cost:{
			伐木工:		1
		}
	},			
	t2n1_5:{
		name: 			'挖矿',
		unlock_name: 	'派遣工人去挖矿',
		bonus_loot:{
			石头: 	7500,	
			沙子: 	5000,				
			铜矿石: 	300,		
			宝藏: 		20,
			怪物: 	200,				
		},	
        reward_factor: 		1,		
		chance: 		50,
		skill: 			'村庄',
		action_name: 		'挖矿',
		fail_text: 		'没有掉落',	
		upgrade_item: 		'采矿工',	
		难度倍数:        4.4,
		cost:{	
			稿子:		10,		
			饱食度:		20,
		},
		unlock_cost:{
			采矿工:		1
		}
	},		
    t2n1_6:{
		name: 			'训练探险家',
		unlock_name: 	'训练探险家',
		item_id: 		'探险家',		
		bonus_loot:{			
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'村庄',
		action_name: 		'训练',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        4,
		cost:{
			房屋: 	1,				
			村民:		1,			
			铜装备:		1,
		},
		unlock_cost:{
			房屋:		1
		}
	},		
    t2n1_7:{
		name: 			'远征探险',
		unlock_name: 	'远征探险',	
		bonus_loot:{	
			水: 	400,			
			石头: 	500,
			原木: 	500,	
    		麻绳: 	250,		
			猪: 	25,
			村民: 	50,
			宝藏: 	15,
            怪物: 	50,	
            村庄: 	5,		
		},		
        reward_factor: 		1,		
		chance: 		50,
		skill: 			'村庄',
		action_name: 		'探索',
		fail_text: 		'什么都没找到',
		upgrade_item: 		'探险家',		
		难度倍数:        4.5,
		cost:{		
			饱食度:		50,
		},
		unlock_cost:{
			探险家:		1
		}
	},	
   t2n1_8:{
		name: 			'掠夺其他村庄',
		unlock_name: 	'掠夺其他村庄',	
		bonus_loot:{	
			凝聚力: 	8000,
			房屋: 	33,	
			山洞: 	22,	
			木屋: 	22,	
			面包: 	333,			
			猪: 	88,	
			铜装备: 	11,			
			铁装备: 	5,				
			怪物: 	20,					
		},		
        reward_factor: 		1,		
		chance: 		50,
		skill: 			'村庄',
		action_name: 		'战争',
		fail_text: 		'什么都没找到',	
		难度倍数:        10,
	    passive_factor: 	100,			
		cost:{		
			士兵:		1,		
			村庄:		1,				
		},
		unlock_cost:{		
			士兵:		1,			
			村庄:		1,			
		}
	},	
   t2n1_9:{
		name: 			'和其他村庄贸易【解锁下位置地点】',
		unlock_name: 	'和其他村庄贸易【解锁下位置地点】',	
		bonus_loot:{	
			凝聚力: 	10000,	
			房屋: 	33,	
			山洞: 	22,	
			木屋: 	22,	
			面包: 	333,			
			猪: 	88,	
			铜装备: 	11,			
			铁装备: 	5,				
			怪物: 	20,				
			
		},		
        reward_factor: 		1,		
		chance: 		50,
		skill: 			'村庄',
		action_name: 		'贸易',
		fail_text: 		'什么都没找到',	
		难度倍数:        10,
	    passive_factor: 	100,				
		cost:{		
			绿宝石:		1,
		},
		unlock_cost:{		
			村庄:		1,			
			绿宝石:		1,			
		}
	},	
	t2n1_10:{
		name: 			'建设水井',
		unlock_name: 	'建设水井',
		item_id: 		'水井',				
		bonus_loot:{		
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'村庄',
		action_name: 		'建设',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        6,
		cost:{
			原木: 	10,		
			石头: 	40,					
			木棍:		100,				
			饱食度:		50,
		},
		unlock_cost:{
			饱食度:		50
		}
	},	
	t2n1_11:{
		name: 			'打水',
		unlock_name: 	'从水井里面打水',
		item_id: 		'水',				
		bonus_loot:{		
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'村庄',
		action_name: 		'打水',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        6,
		upgrade_item: 		'水井',			
		cost:{				
			饱食度:		5,
		},
		unlock_cost:{
			水井:		1
		}
	},	
	t2n1_12:{
		name: 			'种植小麦',
		unlock_name: 	'种植小麦',
		item_id: 		'小麦',				
		bonus_loot:{	
		
		},		
        reward_factor: 		10,		
		chance: 		100,
		skill: 			'村庄',
		action_name: 		'种植',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        10,		
		cost:{		
			水:		1,		
			饱食度:		4,
		},
		unlock_cost:{
			水:		50
		}
	},
	t2n1_13:{
		name: 			'制作面包',
		unlock_name: 	'建设面包坊',
		item_id: 		'面包',				
		bonus_loot:{	
		
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'村庄',
		action_name: 		'制作',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        4,		
		cost:{		
			小麦:		3,		
			木棍:		30,
		},
		unlock_cost:{
			原木: 	30,		
			石头: 	20,			
			木棍:		100,				
			饱食度:		50,
		}
	},
	t2n1_14:{
		name: 			'吃面包',
		unlock_name: 	'吃面包',
		item_id: 		'饱食度',				
		bonus_loot:{	
		
		},		
        reward_factor: 		20,		
		chance: 		100,
		skill: 			'村庄',
		action_name: 		'吃面包',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        2,		
		cost:{		
			面包:		1,		
		},
		unlock_cost:{
			面包:		1
		}
	},
	t2n1_15:{
		name: 			'吸引村民',
		unlock_name: 	'用面包诱惑村民加入',
		item_id: 		'村民',				
		bonus_loot:{	
		
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'村庄',
		action_name: 		'吃面包',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        10,		
		cost:{		
			面包:		3,		
		},
		unlock_cost:{
			面包:		5
		}
	},



//=================================矿洞=================================	
	t2n2_1:{
		name: 			'建设山洞',
		unlock_name: 	'建设山洞',
		item_id: 		'山洞',				
		bonus_loot:{		
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'矿洞',
		action_name: 		'建设',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:       6,
		cost:{
			稿子: 	5,	
			原木: 	5,				
			木棍:		100,			
			饱食度:		50,
		},
		unlock_cost:{
			饱食度:		50
		}
	},		
    t2n2_2:{
		name: 			'训练伐木工',
		unlock_name: 	'训练伐木工',
		item_id: 		'伐木工',		
		bonus_loot:{			
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'矿洞',
		action_name: 		'训练',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        3,
		cost:{
			山洞: 	1,				
			村民:		1,			
			斧头:		1,
		},
		unlock_cost:{
			山洞:		1
		}
	},		
    t2n2_3:{
		name: 			'训练采矿工',
		unlock_name: 	'训练采矿工',
		item_id: 		'采矿工',		
		bonus_loot:{			
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'矿洞',
		action_name: 		'训练',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        3,
		cost:{
			山洞: 	1,				
			村民:		1,			
			稿子:		1,
		},
		unlock_cost:{
			山洞:		1
		}
	},		
    t2n2_4:{
		name: 			'砍树',
		unlock_name: 	'派遣工人去砍树',	
		bonus_loot:{	
			原木: 	10000,			
			木棍: 	10000,
			怪物: 	200,						
		},		
        reward_factor: 		1,		
		chance: 		50,
		skill: 			'矿洞',
		action_name: 		'砍树',
		fail_text: 		'没有掉落',	
		upgrade_item: 		'伐木工',		
		难度倍数:        4.1,
		cost:{	
			斧头:		10,		
			饱食度:		20,
		},
		unlock_cost:{
			伐木工:		1
		}
	},			
	t2n2_5:{
		name: 			'挖矿',
		unlock_name: 	'派遣工人去挖矿',
		bonus_loot:{
			石头: 	15000,	
			沙子: 	10000,				
			铜矿石: 	600,		
			宝藏: 		20,
			怪物: 	200,				
		},	
        reward_factor: 		1,		
		chance: 		50,
		skill: 			'矿洞',
		action_name: 		'挖矿',
		fail_text: 		'没有掉落',	
		upgrade_item: 		'采矿工',	
		难度倍数:        4.4,
		cost:{	
			稿子:		10,		
			饱食度:		20,
		},
		unlock_cost:{
			采矿工:		1
		}
	},
   t2n2_6:{
		name: 			'训练地下探险家',
		unlock_name: 	'训练地下探险家',
		item_id: 		'地下探险家',		
		bonus_loot:{			
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'矿洞',
		action_name: 		'训练',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        4,
		cost:{
			山洞: 	1,				
			村民:		1,			
			铁装备:		1,
		},
		unlock_cost:{
			铁装备:		1
		}
	},		
    t2n2_7:{
		name: 			'探索废弃矿井【绿宝石减少开店倍数费用】<br/><i>上限100颗.也就是可以吧倍率降低为1.9</i>',
		unlock_name: 	'探索废弃矿井【绿宝石减少开店倍数费用】<br/><i>上限100颗.也就是可以吧倍率降低为1.9</i>',	
		bonus_loot:{	
			木炭: 	    250,				
			稿子:		75,	
			工作台:		50,	
			熔炉:		50,				
			村民:		50,				
			宝藏:		10,	
			怪物:		50,	
			绿宝石:		5,				
		},		
        reward_factor: 		1,		
		chance: 		50,
		skill: 			'矿洞',
		action_name: 		'探索',
		fail_text: 		'什么都没找到',
		upgrade_item: 		'地下探险家',		
		难度倍数:        4.5,
		cost:{		
			饱食度:		50,
		},
		unlock_cost:{
			地下探险家:		1
		}
	},	
    t2n2_8:{
		name: 			'训练老矿工',
		unlock_name: 	'训练老矿工',
		item_id: 		'老矿工',		
		bonus_loot:{			
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'矿洞',
		action_name: 		'训练',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        4,
		cost:{			
			采矿工:		1,			
			铜装备:		1,
		},
		unlock_cost:{
			山洞:		1
		}
	},	 
 	t2n2_9:{
		name: 			'深度开采',
		unlock_name: 	'派遣老矿工去挖矿',
		bonus_loot:{
			石头: 	10000,	
			沙子: 	5000,				
			铁矿石: 	600,					
			宝藏: 		40,
			怪物: 	300,				
		},	
        reward_factor: 		1,		
		chance: 		50,
		skill: 			'矿洞',
		action_name: 		'挖矿',
		fail_text: 		'没有掉落',	
		upgrade_item: 		'老矿工',	
		难度倍数:        4.4,
		cost:{	
			稿子:		10,		
			饱食度:		50,
		},
		unlock_cost:{
			老矿工:		1
		}
	},
	t2n2_10:{
		name: 			'烧制铁矿',
		unlock_name: 	'制作铁锭用于制作工具',
		item_id: 		'铁锭',	
		reward_factor: 		1,	
		chance: 		100,
		skill: 			'矿洞',
		action_name: 		'制作',
		fail_text: 		'Shit',
		upgrade_item: 		'熔炉',
		难度倍数:        10,		
		cost:{
			铁矿石:		1,
			木炭:		3,
		},
		unlock_cost:{
			熔炉:		10,
			铁矿石:		10,
		}
	},	
	t2n2_11:{
		name: 			'制作铁装备',
		unlock_name: 	'制作铁装备',
		item_id: 		'铁装备',	
		bonus_loot:{
		},			
		chance: 		25,
		skill: 			'矿洞',
		action_name: 		'制作',
		fail_text: 		'Shit',
		upgrade_item: 		'工作台',	
		难度倍数:        20,			
		cost:{
			铁锭:		8,

		},
		unlock_cost:{
			铁锭:		10,
			工作台:		10,			
		}
	},	
	t2n2_12:{
		name: 			'制作铁稿子',
		unlock_name: 	'制作铁稿子【相当15普通稿子】',
		item_id: 		'稿子',	
		bonus_loot:{
		},	
	    reward_factor: 		15,			
		chance: 		25,
		skill: 			'矿洞',
		action_name: 		'制作',
		fail_text: 		'Shit',
		upgrade_item: 		'工作台',		
		难度倍数:        27,		
		cost:{
			铁锭:		3,
			原木:		2
		},
		unlock_cost:{
			铁锭:		3,
			原木:		2
		}
	},	
	t2n2_13:{
		name: 			'制作铁斧头',
		unlock_name: 	'制作铁斧头【相当15普通斧头】',
		item_id: 		'斧头',	
		bonus_loot:{
		},	
	    reward_factor: 		15,			
		chance: 		25,
		skill: 			'矿洞',
		action_name: 		'制作',
		fail_text: 		'Shit',
		upgrade_item: 		'工作台',		
		难度倍数:        27,		
		cost:{
			铁锭:		3,
			原木:		2
		},
		unlock_cost:{
			铁锭:		3,
			原木:		2
		}
	},	






//=================================海边=================================	
	t2n3_1:{
		name: 			'建设木屋',
		unlock_name: 	'建设木屋',
		item_id: 		'木屋',				
		bonus_loot:{		
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'海边',
		action_name: 		'建设',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:       6,
		cost:{
			原木: 	50,				
			木棍:		100,			
			饱食度:		50,
		},
		unlock_cost:{
			饱食度:		50
		}
	},		
    t2n3_2:{
		name: 			'训练伐木工',
		unlock_name: 	'训练伐木工',
		item_id: 		'伐木工',		
		bonus_loot:{			
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'海边',
		action_name: 		'训练',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        3,
		cost:{
			木屋: 	1,				
			村民:		1,			
			斧头:		1,
		},
		unlock_cost:{
			木屋:		1
		}
	},		
    t2n3_3:{
		name: 			'训练采矿工',
		unlock_name: 	'训练采矿工',
		item_id: 		'采矿工',		
		bonus_loot:{			
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'海边',
		action_name: 		'训练',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        3,
		cost:{
			木屋: 	1,				
			村民:		1,			
			稿子:		1,
		},
		unlock_cost:{
			木屋:		1
		}
	},		
    t2n3_4:{
		name: 			'砍树',
		unlock_name: 	'派遣工人去砍树',	
		bonus_loot:{	
			原木: 	30000,			
			木棍: 	20000,
			椰子: 	1500,
			怪物: 	200,						
		},		
        reward_factor: 		1,		
		chance: 		50,
		skill: 			'海边',
		action_name: 		'砍树',
		fail_text: 		'没有掉落',	
		upgrade_item: 		'伐木工',		
		难度倍数:        4.1,
		cost:{	
			斧头:		10,		
			饱食度:		20,
		},
		unlock_cost:{
			伐木工:		1
		}
	},			
	t2n3_5:{
		name: 			'挖矿',
		unlock_name: 	'派遣工人去挖矿',
		bonus_loot:{
			石头: 	5000,	
			沙子: 	5000,				
			铜矿石: 	200,		
			宝藏: 		20,
			怪物: 	200,				
		},	
        reward_factor: 		1,		
		chance: 		50,
		skill: 			'海边',
		action_name: 		'挖矿',
		fail_text: 		'没有掉落',	
		upgrade_item: 		'采矿工',	
		难度倍数:        4.4,
		cost:{	
			稿子:		10,		
			饱食度:		20,
		},
		unlock_cost:{
			采矿工:		1
		}
	},		
    t2n3_6:{
		name: 			'训练潜水员',
		unlock_name: 	'训练潜水员',
		item_id: 		'潜水员',		
		bonus_loot:{			
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'海边',
		action_name: 		'训练',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        4,
		cost:{
			木屋: 	1,				
			村民:		1,			
			铜装备:		1,
		},
		unlock_cost:{
			木屋:		1
		}
	},		
    t2n3_7:{
		name: 			'探索沉船',
		unlock_name: 	'水下寻宝探索沉船',	
		bonus_loot:{	
			木炭: 	    150,			
			斧头: 	    125,				
			稿子:		125,			
			废铁:		400,	
			村民:		50,	
			宝藏:		10,	
			怪物:		50,			
		},		
        reward_factor: 		1,		
		chance: 		50,
		skill: 			'海边',
		action_name: 		'探索',
		fail_text: 		'什么都没找到',
		upgrade_item: 		'潜水员',		
		难度倍数:        4.5,
		cost:{		
			饱食度:		50,
		},
		unlock_cost:{
			潜水员:		1
		}
	},	
    t2n3_8:{
		name: 			'制作铁装备',
		unlock_name: 	'制作铁装备',
		item_id: 		'铁装备',		
		bonus_loot:{			
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'海边',
		action_name: 		'制作',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        20,
		cost:{
			废铁: 	15,				
			木炭:	30,			
		},
		unlock_cost:{
			木炭:		100
		}
	},		
    t2n3_9:{
		name: 			'训练水手',
		unlock_name: 	'训练水手',
		item_id: 		'水手',		
		bonus_loot:{			
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'海边',
		action_name: 		'训练',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        2,
		cost:{
			木屋: 	1,				
			村民:		1,			
			铁装备:		1,
		},
		unlock_cost:{
			铁装备:		1
		}
	},	
   t2n3_10:{
		name: 			'掠夺船只【绿宝石减少开店倍数费用】<br/><i>上限100颗.也就是可以吧倍率降低为1.9</i>',
		unlock_name: 	'掠夺船只【绿宝石减少开店倍数费用】<br/><i>上限100颗.也就是可以吧倍率降低为1.9</i>',	
		bonus_loot:{		
			村民: 	50,						
			废铁:		200,	
			绿宝石:		90,				
			宝藏:		20,					
		},		
        reward_factor: 		1,		
		chance: 		50,
		skill: 			'海边',
		action_name: 		'掠夺',
		fail_text: 		'掠夺失败',
	    passive_factor: 	10,		
		upgrade_item: 		'渔船',			
		难度倍数:        15,
		cost:{
			水手: 	1,				
		},
		unlock_cost:{
			渔船:		1,
			水手:		1,			
		}
	},		
	
	
     t2n3_11:{
		name: 			'建造渔船',
		unlock_name: 	'建造渔船',
		item_id: 		'渔船',		
		bonus_loot:{			
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'海边',
		action_name: 		'建设',
		fail_text: 		'没有掉落',
	    passive_factor: 	10,		
		难度倍数:        8,
		cost:{
			潜水员: 	1,				
			原木:		30,			
			木棍:		10,
			废铁:		3,			
		},
		unlock_cost:{
			潜水员:		1
		}
	},		
     t2n3_12:{
		name: 			'出海捕鱼',
		unlock_name: 	'出海捕鱼',	
		bonus_loot:{	
			木炭: 	100,				
			废铁:		200,			
			热带鱼: 	500,				
			鲑鱼:		150,			
			鱿鱼:		50,
			宝藏:		5,
			怪物:		50,			
		},		
        reward_factor: 		1,		
		chance: 		50,
		skill: 			'海边',
		action_name: 		'捕鱼',
		fail_text: 		'什么都捕获到',
		upgrade_item: 		'渔船',			
		难度倍数:        8,
		cost:{
			饱食度: 	75,						
		},
		unlock_cost:{
			渔船:		1
		}
	},	
	  t2n3_13:{
		name: 			'烤热带鱼',
		unlock_name: 	'烤热带鱼',	
		bonus_loot:{	
			饱食度: 	1500,						
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'海边',
		action_name: 		'烤鱼',
		fail_text: 		'什么都捕获到',
	    passive_factor: 	10,				
		难度倍数:       3,
		cost:{
			热带鱼: 	1,				
			木棍: 	10,						
		},
		unlock_cost:{
			coins:		10000
		}
	},	
	  t2n3_14:{
		name: 			'烤鲑鱼',
		unlock_name: 	'烤鲑鱼',	
		bonus_loot:{	
			饱食度: 	3000,						
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'海边',
		action_name: 		'烤鱼',
		fail_text: 		'什么都捕获到',
	    passive_factor: 	10,				
		难度倍数:        4,
		cost:{
			鲑鱼: 	1,				
			木棍: 	10,						
		},
		unlock_cost:{
			coins:		10000
		}
	},		
	  t2n3_15:{
		name: 			'烤鱿鱼',
		unlock_name: 	'烤鱿鱼',	
		bonus_loot:{	
			饱食度: 	3000,
			墨囊: 	50,			
		},		
        reward_factor: 		1,		
		chance: 		100,
		skill: 			'海边',
		action_name: 		'烤鱼',
		fail_text: 		'什么都捕获到',
	    passive_factor: 	10,				
		难度倍数:        5,
		cost:{
			鱿鱼: 	1,				
			木棍: 	10,						
		},
		unlock_cost:{
			coins:		10000
		}
	},		
	
///==========================游牧==============================	
	
	 t3n1_1:{
		name: 			'打猎',
		unlock_name: 	'打猎',	
		bonus_loot:{	
			生肉: 	155,
			皮革: 	55,	
			羊毛: 	33,	
			怪物: 	22,	
			宝藏: 	3,				
		},			
		chance: 		50,
		skill: 			'村庄',
		action_name: 		'打猎',
		fail_text: 		'什么都捕获到',
	    passive_factor: 	100,				
		难度倍数:        3,
		cost:{	
			饱食度: 	5,			
			凝聚力: 	1,						
		},
		unlock_cost:{
		}
	},	
	 t3n1_2:{
		name: 			'制作线',
		unlock_name: 	'制作线',			
		bonus_loot:{		
			线: 	333,	
		},		
		chance: 		100,
		skill: 			'村庄',
		action_name: 		'制作',
		fail_text: 		'什么都捕获到',
	    passive_factor: 	100,				
		难度倍数:        2,
		cost:{		
			羊毛: 	1,				
					
		},
		unlock_cost:{			
			凝聚力: 	100,				
		}
	},	
	 t3n1_3:{
		name: 			'制作衣服',
		unlock_name: 	'制作衣服',	
		bonus_loot:{		
			衣服: 	100,		
		},			
		chance: 		100,
		skill: 			'村庄',
		action_name: 		'制作',
		fail_text: 		'什么都捕获到',
	    passive_factor: 	100,				
		难度倍数:        5,
		cost:{		
			皮革: 	5,				
			线: 	10,								
		},
		unlock_cost:{		
			凝聚力: 	200,					
		}
	},		
	 t3n1_4:{
		name: 			'进阶市民',
		unlock_name: 	'进阶市民',	
		bonus_loot:{		
			市民: 	100,					
		},			
		chance: 		100,
		skill: 			'村庄',
		action_name: 		'进阶',
		fail_text: 		'什么都捕获到',
	    passive_factor: 	100,				
		难度倍数:        5,
		cost:{		
			房子: 	1,				
			衣服: 	1,	
			村民: 	1,				
			凝聚力: 	5,				
		},
		unlock_cost:{			
			凝聚力: 	300,					
		}
	},			
	 t3n1_5:{
		name: 			'举办烤肉节',
		unlock_name: 	'举办烤肉节',	
		bonus_loot:{		
			饱食度: 	5000,
			凝聚力: 	250,	
			怪物: 	50,				
		},			
		chance: 		50,
		skill: 			'村庄',
		action_name: 		'举办',
		fail_text: 		'什么都捕获到',
		upgrade_item: 		'市民',			
	    passive_factor: 	100,				
		难度倍数:        1.5,
		cost:{		
			生肉: 	5,				
			木棍: 	100,				
		},
		unlock_cost:{				
			凝聚力: 	200,					
		}
	},		
	 t3n1_6:{
		name: 			'训练士兵',
		unlock_name: 	'训练士兵',	
		bonus_loot:{		
			士兵: 	100,			
		},			
		chance: 		100,
		skill: 			'村庄',
		action_name: 		'训练',
		fail_text: 		'什么都捕获到',		
	    passive_factor: 	100,				
		难度倍数:        7,
		cost:{		
			铁装备: 	1,				
			市民: 	1,
			凝聚力: 	2,			
		},
		unlock_cost:{					
			凝聚力: 	300,					
		}
	},		
	 t3n1_7:{
		name: 			'制作帐篷',
		unlock_name: 	'制作帐篷',	
		bonus_loot:{		
			帐篷: 	100,			
		},			
		chance: 		100,
		skill: 			'游牧',
		action_name: 		'制作',
		fail_text: 		'什么都捕获到',		
	    passive_factor: 	100,				
		难度倍数:        7,
		cost:{		
			皮革: 	25,				
			线: 	5,
			木棍: 	30,	
			饱食度: 	30,			
		},
		unlock_cost:{						
			凝聚力: 	200,					
		}
	},	
	 t3n1_8:{
		name: 			'制作弓箭',
		unlock_name: 	'制作弓箭',	
		bonus_loot:{		
			弓: 	100,			
		},			
		chance: 		100,
		skill: 			'游牧',
		action_name: 		'制作',
		fail_text: 		'什么都捕获到',		
	    passive_factor: 	100,				
		难度倍数:        5,
		cost:{		
			麻绳: 	6,	
			原木: 	3,			
		},
		unlock_cost:{						
			凝聚力: 	100,					
		}
	},		
	 t3n1_9:{
		name: 			'制作铜箭',
		unlock_name: 	'制作铜箭',	
		bonus_loot:{		
			箭: 	2000,			
		},			
		chance: 		100,
		skill: 			'游牧',
		action_name: 		'制作',
		fail_text: 		'什么都捕获到',		
	    passive_factor: 	100,				
		难度倍数:        5,
		cost:{		
			铜锭: 	1,	
			木棍: 	20,				
		},
		unlock_cost:{	
		
			凝聚力: 	100,					
		}
	},	
	 t3n1_10:{
		name: 			'制作铁箭',
		unlock_name: 	'制作铁箭',	
		bonus_loot:{		
			箭: 	4000,			
		},			
		chance: 		100,
		skill: 			'游牧',
		action_name: 		'制作',
		fail_text: 		'什么都捕获到',		
	    passive_factor: 	100,				
		难度倍数:        5,
		cost:{		
			铁锭: 	1,	
			木棍: 	40,				
		},
		unlock_cost:{	
		
			凝聚力: 	100,					
		}
	},		
	 t3n1_11:{
		name: 			'训练猎手',
		unlock_name: 	'训练猎手',	
		bonus_loot:{		
			猎手: 	100,			
		},			
		chance: 		100,
		skill: 			'游牧',
		action_name: 		'训练',
		fail_text: 		'什么都捕获到',		
	    passive_factor: 	100,				
		难度倍数:        7,
		cost:{		
			弓: 	1,				
			市民: 	1,
			帐篷: 	1,			
			凝聚力: 	2,			
		},
		unlock_cost:{	
		
			凝聚力: 	300,					
		}
	},		
	 t3n1_12:{
		name: 			'狩猎羊群',
		unlock_name: 	'狩猎羊群',	
		bonus_loot:{		
			生肉: 	120,
			羊毛: 	250,
			敌人: 	10,			
		},			
		chance: 		50,
		skill: 			'游牧',
		action_name: 		'打猎',
		fail_text: 		'什么都捕获到',		
		upgrade_item: 		'猎手',				
		难度倍数:        2,
		cost:{		
			箭: 	15,				
			饱食度: 	20,			
		},
		unlock_cost:{	
			猎手: 	1,			
			凝聚力: 	300,					
		}
	},			
	 t3n1_13:{
		name: 			'狩猎牛群',
		unlock_name: 	'狩猎牛群',	
		bonus_loot:{		
			生肉: 	222,
			皮革: 	333,
			敌人: 	10,			
		},			
		chance: 		50,
		skill: 			'游牧',
		action_name: 		'打猎',
		fail_text: 		'什么都捕获到',		
		upgrade_item: 		'猎手',				
		难度倍数:        2,
		cost:{		
			箭: 	20,				
			饱食度: 	20,			
		},
		unlock_cost:{	
			猎手: 	1,			
			凝聚力: 	300,					
		}
	},		
	 t3n1_14:{
		name: 			'从林狩猎',
		unlock_name: 	'从林狩猎',	
		bonus_loot:{		
			生肉: 	80,
			皮革: 	40,			
			羊毛: 	20,			
			宝藏: 	5,	
			怪物: 	10,	
			绿龙: 	1,				
		},			
		chance: 		50,
		skill: 			'游牧',
		action_name: 		'打猎',
		fail_text: 		'什么都捕获到',		
		upgrade_item: 		'猎手',				
		难度倍数:        7,
		cost:{		
			箭: 	25,				
			饱食度: 	20,			
		},
		unlock_cost:{		
			猎手: 	1,			
			凝聚力: 	300,					
		}
	},			
	
///==========================农场==============================		
	 t3n2_1:{
		name: 			'制作床',
		unlock_name: 	'制作床',	
		bonus_loot:{		
			床: 	100,		
		},			
		chance: 		100,
		skill: 			'农场',
		action_name: 		'制作',
		fail_text: 		'什么都捕获到',	
	    passive_factor: 	100,			
		难度倍数:        7,
		cost:{		
			羊毛: 	10,
			原木: 	30,				
			木棍: 	30,	
			饱食度: 	30,			
		},
		unlock_cost:{					
			凝聚力: 	200,					
		}
	},		
	 t3n2_2:{
		name: 			'训练农场主',
		unlock_name: 	'训练农场主',	
		bonus_loot:{		
			农场主: 	100,			
		},			
		chance: 		100,
		skill: 			'农场',
		action_name: 		'训练',
		fail_text: 		'什么都捕获到',		
	    passive_factor: 	100,				
		难度倍数:        7,
		cost:{				
			市民: 	1,
			床: 	1,			
			凝聚力: 	2,			
		},
		unlock_cost:{					
			凝聚力: 	300,					
		}
	},		
	 t3n2_3:{
		name: 			'建设大型麦田',
		unlock_name: 	'建设大型麦田',	
		bonus_loot:{		
			小麦: 	6000,	
			敌人: 	10,				
		},			
		chance: 		100,
		skill: 			'农场',
		action_name: 		'种植',
		fail_text: 		'什么都捕获到',	
		upgrade_item: 		'农场主',			
	    passive_factor: 	100,				
		难度倍数:        7,
		cost:{				
			水: 	5,			
			饱食度: 	20,			
		},
		unlock_cost:{		
			农场主: 	1,	
			水: 	10,				
			凝聚力: 	200,					
		}
	},			
	 t3n2_4:{
		name: 			'养殖羊群',
		unlock_name: 	'养殖羊群',	
		bonus_loot:{		
			山羊: 	100,
			敌人: 	10,			
		},			
		chance: 		100,
		skill: 			'农场',
		action_name: 		'养殖',
		fail_text: 		'什么都捕获到',		
		upgrade_item: 		'农场主',				
		难度倍数:        2,
		cost:{		
			小麦: 	15,						
		},
		unlock_cost:{	
			农场主: 	1,			
			凝聚力: 	200,					
		}
	},			
	 t3n2_5:{
		name: 			'养殖牛群',
		unlock_name: 	'养殖牛群',	
		bonus_loot:{		
			牛: 	100,
			变异牛: 	0.5,			
			敌人: 	10,			
		},			
		chance: 		50,
		skill: 			'农场',
		action_name: 		'养殖',
		fail_text: 		'什么都捕获到',		
		upgrade_item: 		'农场主',				
		难度倍数:        2,
		cost:{		
			小麦: 	20,						
		},
		unlock_cost:{		
			农场主: 	1,			
			凝聚力: 	200,					
		}
	},	
	 t3n2_6:{
		name: 			'屠宰山羊',
		unlock_name: 	'屠宰山羊',	
		bonus_loot:{		
			生肉: 	200,
			羊毛: 	300,			
		},			
		chance: 		100,
		skill: 			'农场',
		action_name: 		'屠宰',
		fail_text: 		'什么都捕获到',		
	    passive_factor: 	100,				
		难度倍数:        4,
		cost:{		
			山羊: 	1,			
			饱食度: 	10,						
		},
		unlock_cost:{			
			凝聚力: 	100,					
		}
	},		
	 t3n2_7:{
		name: 			'屠宰牛',
		unlock_name: 	'屠宰牛',	
		bonus_loot:{		
			生肉: 	400,
			皮革: 	500,			
		},			
		chance: 		100,
		skill: 			'农场',
		action_name: 		'屠宰',
		fail_text: 		'什么都捕获到',		
	    passive_factor: 	100,				
		难度倍数:        4,
		cost:{		
			牛: 	1,			
			饱食度: 	10,						
		},
		unlock_cost:{			
			凝聚力: 	100,					
		}
	},		
//=========================航海====================	
	
	 t3n3_1:{
		name: 			'制作帆布',
		unlock_name: 	'制作帆布',	
		bonus_loot:{		
			帆布: 	100,		
		},			
		chance: 		100,
		skill: 			'航海',
		action_name: 		'制作',
		fail_text: 		'什么都捕获到',	
	    passive_factor: 	100,			
		难度倍数:        1,
		cost:{		
			线: 	5,
			饱食度: 	5,			
		},
		unlock_cost:{					
			凝聚力: 	200,					
		}
	},		
	 t3n3_2:{
		name: 			'建造帆船',
		unlock_name: 	'建造帆船',	
		bonus_loot:{		
			帆船: 	100,		
		},			
		chance: 		100,
		skill: 			'航海',
		action_name: 		'建造',
		fail_text: 		'什么都捕获到',	
	    passive_factor: 	100,			
		难度倍数:        5,
		cost:{		
			帆布: 	4,
			原木:		60,			
			木棍:		20,			
			饱食度: 	30,			
		},
		unlock_cost:{					
			凝聚力: 	300,					
		}
	},		
	 t3n3_3:{
		name: 			'训练船长',
		unlock_name: 	'训练船长',	
		bonus_loot:{		
			船长: 	100,			
		},			
		chance: 		100,
		skill: 			'航海',
		action_name: 		'训练',
		fail_text: 		'什么都捕获到',		
	    passive_factor: 	100,				
		难度倍数:        7,
		cost:{				
			市民: 	1,
			帆船: 	1,			
			凝聚力: 	2,			
		},
		unlock_cost:{					
			凝聚力: 	300,					
		}
	},	
	 t3n3_4:{
		name: 			'制作网',
		unlock_name: 	'制作网',	
		bonus_loot:{		
			网: 	100,		
		},			
		chance: 		100,
		skill: 			'航海',
		action_name: 		'制作',
		fail_text: 		'什么都捕获到',	
	    passive_factor: 	100,			
		难度倍数:        1,
		cost:{		
			麻绳: 	3,
			饱食度: 	5,			
		},
		unlock_cost:{					
			凝聚力: 	100,					
		}
	},		
	 t3n3_5:{
		name: 			'航海捕鱼',
		unlock_name: 	'航海捕鱼',	
		bonus_loot:{		
			鱼肉: 	666,	
			宝藏: 	5,		
			敌人: 	10,				
		},			
		chance: 		100,
		skill: 			'航海',
		action_name: 		'航海',
		fail_text: 		'什么都捕获到',
		upgrade_item: 		'船长',					
		难度倍数:        3,
		cost:{		
			网: 	1,
			饱食度: 	15,			
		},
		unlock_cost:{				
			网: 	1,	
		    船长:    	1,				
			凝聚力: 	200,					
		}
	},		
	 t3n3_6:{
		name: 			'举办烤鱼节',
		unlock_name: 	'举办烤鱼节',	
		bonus_loot:{		
			饱食度: 	5000,
			凝聚力: 	250,	
			怪物: 	50,				
		},			
		chance: 		50,
		skill: 			'航海',
		action_name: 		'举办',
		fail_text: 		'什么都捕获到',
		upgrade_item: 		'市民',			
	    passive_factor: 	100,				
		难度倍数:        1.5,
		cost:{		
			鱼肉: 	5,				
			木棍: 	100,				
		},
		unlock_cost:{					
			凝聚力: 	200,					
		}
	},		
	 t3n3_7:{
		name: 			'出海探险',
		unlock_name: 	'出海探险',	
		bonus_loot:{	
			岛屿: 	50,		
			宝藏: 	20,	
			美人鱼:  1,				
			敌人: 	10,				
		},			
		chance: 		50,
		skill: 			'航海',
		action_name: 		'航海',
		fail_text: 		'什么都没找到',
		upgrade_item: 		'船长',					
		难度倍数:        8,
		cost:{		
			饱食度: 	50,			
		},
		unlock_cost:{				
		    船长:    	1,				
			凝聚力: 	300,					
		}
	},		
	 t3n3_8:{
		name: 			'探索岛屿',
		unlock_name: 	'探索岛屿',	
		bonus_loot:{	
			生肉: 	455,
			皮革: 	355,	
			羊毛: 	333,	
			宝藏: 	5,				
			怪物: 	22,				
			敌人: 	10,				
		},			
		chance: 		50,
		skill: 			'航海',
		action_name: 		'探索',
		fail_text: 		'什么都没找到',
		upgrade_item: 		'船长',					
		难度倍数:        6,
		cost:{		
		    岛屿:    	1,			
			饱食度: 	50,			
		},
		unlock_cost:{
		    船长:    	1,				
		    岛屿:    	1,				
			凝聚力: 	300,					
		}
	},		
	
//============================t4王国==============================	
	 t4n1_1:{
		name: 			'击杀敌人【每个敌人增加商店扩展基础金额100】',
		unlock_name: 	'击杀敌人【每个敌人增加商店扩展基础金额100】',	
		bonus_loot:{	
			经验球: 	500,		
			村民: 	30,
			铜装备: 	3,	
			铁装备: 	1,			
			宝藏: 	3,		
			绿宝石: 	0.1,					
		},			
		chance: 		50,
		skill: 			'王国',
		action_name: 		'击杀',
		fail_text: 		'什么都没有',
		upgrade_item: 		'士兵',					
		难度倍数:        4,
		cost:{		
		    敌人:    	1,			
			饱食度: 	20,			
		},
		unlock_cost:{				
			凝聚力: 	40,					
		}
	},	
	 t4n1_2:{
		name: 			'扩张领土',
		unlock_name: 	'扩张领土',	
		bonus_loot:{	
			领土: 	5555,
			宝藏: 	10,
			村庄: 	2,
			敌人: 	20,
			怪物: 	30,				
		},			
		chance: 		50,
		skill: 			'王国',
		action_name: 		'扩张',
		fail_text: 		'什么都没有',
		upgrade_item: 		'士兵',					
		难度倍数:        10,
		cost:{		
			凝聚力: 	5,			
			饱食度: 	100,			
		},
		unlock_cost:{				
			凝聚力: 	500,					
		}
	},		
	 t4n1_3:{
		name: 			'烧制玻璃',
		unlock_name: 	'建设玻璃制坊',	
		bonus_loot:{	
			玻璃: 	100,			
		},			
		chance: 		100,
		skill: 			'王国',
		action_name: 		'烧制',
		fail_text: 		'什么都没有',
	    passive_factor: 	100,			
		难度倍数:        2,
		cost:{		
			沙子: 	8,			
			木棍: 	40,			
		},
		unlock_cost:{	
			沙子: 	100,
			领土: 	200,				
			凝聚力: 	200,					
		}
	},	
	 t4n1_4:{
		name: 			'烧制红砖',
		unlock_name: 	'建设红砖制坊',	
		bonus_loot:{	
			红砖: 	200,			
		},			
		chance: 		100,
		skill: 			'王国',
		action_name: 		'烧制',
		fail_text: 		'什么都没有',
	    passive_factor: 	100,			
		难度倍数:        2,
		cost:{	
			黏土: 	1,		
			木棍: 	20,				
		},
		unlock_cost:{	
			领土: 	300,				
			凝聚力: 	300,						
		}
	},		
	
	 t4n1_5:{
		name: 			'建造红砖屋',
		unlock_name: 	'建造红砖屋',	
		bonus_loot:{			
			红砖屋: 	100,			
		},			
		chance: 		100,
		skill: 			'王国',
		action_name: 		'建设',
		fail_text: 		'什么都没有',
	    passive_factor: 	200,			
		难度倍数:        14,
		cost:{	
			玻璃: 	15,
			红砖: 	50,
			领土: 	8,			
			饱食度: 	100,			
		},
		unlock_cost:{
			玻璃: 	5,				
			红砖: 	10,	
			领土: 	500,				
			凝聚力: 	500,					
		}
	},		
	 t4n1_6:{
		name: 			'建立城邦-吸引市民',
		unlock_name: 	'建立城邦-吸引市民',	
		bonus_loot:{	
			市民: 	700,
			敌人: 	150,	
			怪物: 	250,				
		},			
		chance: 		50,
		skill: 			'王国',
		action_name: 		'吸引',
		fail_text: 		'没有吸引到市民',
	    passive_factor: 	500,			
		难度倍数:        20,
		cost:{		
			红砖屋: 	1,			
		},
		unlock_cost:{	
			领土: 	1000,				
			凝聚力: 	500,					
		}
	},		
	 t4n1_7:{
		name: 			'招募黄金矿工',
		unlock_name: 	'招募黄金矿工-为你开采黄金',	
		bonus_loot:{	
			黄金矿工: 	100,			
		},			
		chance: 		100,
		skill: 			'王国',
		action_name: 		'招募',
		fail_text: 		'什么都没有',
	    passive_factor: 	200,			
		难度倍数:        10,
		cost:{				
			市民: 	1,		
			宝藏: 	5,	
			铁装备: 	1,				
			稿子: 	10,			
		},
		unlock_cost:{		
			市民: 	1,		
			宝藏: 	50,	
			铁装备: 	1,				
			稿子: 	10,					
			凝聚力: 	500,					
		}
	},	
	 t4n1_8:{
		name: 			'开采黏土',
		unlock_name: 	'开采黏土',	
		bonus_loot:{	
			黏土: 	321,
			石头: 	80,
	    	沙子: 	213,
			宝藏: 	5,
			怪物: 	10,
			敌人: 	5,			
		},			
		chance: 		50,
		skill: 			'王国',
		action_name: 		'开采',
		fail_text: 		'什么都没有',
	    passive_factor: 	100,			
		难度倍数:        5,
		cost:{		
			稿子: 	1,	
			领土: 	1,				
			饱食度: 	10,			
		},
		unlock_cost:{				
			凝聚力: 	300,					
		}
	},		
	 t4n1_9:{
		name: 			'开采金矿',
		unlock_name: 	'开采金矿',	
		bonus_loot:{	
			金矿: 	1000,	
			石头: 	1000,	
			沙子: 	1000,	
			宝藏: 	100,				
			怪物: 	200,	
			敌人: 	100,			
		},			
		chance: 		50,
		skill: 			'王国',
		action_name: 		'开采',
		fail_text: 		'什么都没有',
		upgrade_item: 		'黄金矿工',			
		难度倍数:        5,
		cost:{	
			稿子: 	20,		
			领土: 	20,						
			饱食度: 	200,			
		},
		unlock_cost:{			
			黄金矿工: 	1,	
			领土: 500,				
			凝聚力: 	500,					
		}
	},	
	 t4n1_10:{
		name: 			'制作金币',
		unlock_name: 	'建设金币制坊',	
		bonus_loot:{	
			金币: 	7000,			
		},			
		chance: 		100,
		skill: 			'王国',
		action_name: 		'熔炼',
		fail_text: 		'什么都没有',
	    passive_factor: 	200,			
		难度倍数:        5,
		cost:{				
			金矿: 	10,				
		},
		unlock_cost:{	
			红砖: 	60,
			领土: 	600,				
			凝聚力: 	300,					
		}
	},			
	 t4n1_12:{
		name: 			'市场交易',
		unlock_name: 	'建设市场',	
		bonus_loot:{	
		    凝聚力: 	100,
	    	木炭: 	40,	
	     	麻绳: 	30,	
	     	小麦: 	50,				
	     	水: 	20,				
	     	面包: 	10,					
	    	铜装备: 	2,	
	    	铁装备: 	1,	
	    	敌人: 	10,		
	    	绿龙: 	0.01,
	    	变异牛: 	0.01,
	    	美人鱼: 	0.01,			
	    	金苹果: 	0.001,	
		},			
		chance: 		10,
		skill: 			'王国',
		action_name: 		'交易',
		fail_text: 		'什么都没有',
		upgrade_item: 		'市民',				
		难度倍数:        1,
		cost:{		
			金币: 	1,				
		},
		unlock_cost:{	
		    金币: 	100,	
			红砖: 	100,
			领土: 	100,				
			凝聚力: 	500,						
		}
	},			
	 t4n1_13:{
		name: 			'教堂信仰',
		unlock_name: 	'建设教堂',	
		bonus_loot:{	
			凝聚力: 	150,
			敌人: 	10,
			怪物: 	5,			
		},			
		chance: 		50,
		skill: 			'王国',
		action_name: 		'信仰',
		fail_text: 		'什么都没有',
		upgrade_item: 		'市民',			
		难度倍数:        4,
		cost:{		
			饱食度: 	10,			
		},
		unlock_cost:{					
			红砖: 	150,
			领土: 	450,				
			凝聚力: 	300,					
		}
	},		
	 t4n1_14:{
		name: 			'王城统治【开启下个地点主要位置】',
		unlock_name: 	'建设王城【开启下个地点主要位置】',	
		bonus_loot:{	
			影响力: 	8888,			
		},			
		chance: 		50,
		skill: 			'王国',
		action_name: 		'统治',
		fail_text: 		'什么都没有',
	    passive_factor: 	5000,			
		难度倍数:        10,
		cost:{			
			凝聚力: 	10,			
		},
		unlock_cost:{	
			市民: 	300,		
			红砖: 	3000,
			领土: 	3000,				
			凝聚力: 	3000,				
		}
	},		
	 t4n1_15:{
		name: 			'税收【征收金币】',
		unlock_name: 	'颁布法典-税收【征收金币】',	
		bonus_loot:{	
			金币: 	2000,	
			敌人: 	50,				
		},			
		chance: 		50,
		skill: 			'王国',
		action_name: 		'税收',
		fail_text: 		'什么都没有',
	    passive_factor: 	500,			
		难度倍数:        10,
		cost:{				
			影响力: 	10,			
		},
		unlock_cost:{				
			影响力: 	2000,					
		}
	},		
	 t4n1_16:{
		name: 			'征兵【征召士兵】',
		unlock_name: 	'颁布法典-征兵【征召士兵】',	
		bonus_loot:{	
			士兵: 	100,
			敌人: 	50,			
		},			
		chance: 		50,
		skill: 			'王国',
		action_name: 		'征兵',
		fail_text: 		'什么都没有',
	    passive_factor: 	500,			
		难度倍数:        20,
		cost:{				
			影响力: 	50,			
		},
		unlock_cost:{				
			影响力: 	3000,					
		}
	},		
	 t4n1_17:{
		name: 			'劳工【建造城墙可以减少下个地点费用】<br/><i>上限900个.最高减少90%同类加成乘算</i>',
		unlock_name: 	'颁布法典-劳工【建造城墙可以减少下个地点费用】<br/><i>上限900个.最高减少90%同类加成乘算</i>',	
		bonus_loot:{	
			城墙: 	40,	
			宝藏: 	10,	
			红龙: 	0.1,				
			敌人: 	10,	
			
		},			
		chance: 		50,
		skill: 			'王国',
		action_name: 		'建设',
		fail_text: 		'劳工在偷懒',
	    passive_factor: 	500,			
		难度倍数:        10,
		cost:{			
			领土: 	1,				
			影响力: 	10,			
		},
		unlock_cost:{				
			影响力: 	4000,					
		}
	},		
	 t4n1_18:{
		name: 			'科研中心',
		unlock_name: 	'建设科研中心',	
		bonus_loot:{	
			科技: 	6666,			
		},			
		chance: 		50,
		skill: 			'王国',
		action_name: 		'研究',
		fail_text: 		'什么都没有',
	    passive_factor: 	50000,			
		难度倍数:        10,
		cost:{			
			合金: 	1,			
		},
		unlock_cost:{	
			市民: 	400,		
			合金: 	50,
			领土: 	100000,				
			影响力: 	50000,			
		}
	},		
	 t4n1_19:{
		name: 			'光能收集器',
		unlock_name: 	'建设光能收集器',	
		bonus_loot:{	
			光能: 	122,			
		},			
		chance: 		50,
		skill: 			'王国',
		action_name: 		'收集',
		fail_text: 		'没有收集到光能',
	    passive_factor: 	50000,	
		upgrade_item: 		'合金',				
		难度倍数:        10,
		cost:{				
			科技: 	1,			
		},
		unlock_cost:{	
			市民: 	200,		
			合金: 	30,
			领土: 	80000,				
			科技: 	5000,			
		}
	},	
	 t4n1_20:{
		name: 			'航天基地',
		unlock_name: 	'建设航天基地',	
		bonus_loot:{	
			宇航员: 	100,			
		},			
		chance: 		50,
		skill: 			'王国',
		action_name: 		'训练',
		fail_text: 		'？？？',
	    passive_factor: 	50000,				
		难度倍数:        10,
		cost:{				
			市民: 	1,	
			合金: 	1,	
			光能: 	10,				
			科技: 	20,					
		},
		unlock_cost:{	
			市民: 	600,		
			合金: 	80,
			光能: 	100,			
			领土: 	300000,				
			科技: 	10000,			
		}
	},		
	 t4n1_21:{
		name: 			'建造航天飞船【开启T5初级阶段主要位置】',
		unlock_name: 	'研究航天飞船【开启T5初级阶段主要位置】',	
		bonus_loot:{	
			飞船: 	100,			
		},			
		chance: 		50,
		skill: 			'王国',
		action_name: 		'建造',
		fail_text: 		'？？？？',
	    passive_factor: 	50000,				
		难度倍数:        20,
		cost:{				
			宇航员: 	1,	
			合金: 	5,	
			光能: 	25,				
			科技: 	100,					
		},
		unlock_cost:{								
			科技: 	12000,			
		}
	},		
	 t4n1_22:{
		name: 			'建造运载飞船',
		unlock_name: 	'研究运载飞船',	
		bonus_loot:{	
			运载飞船: 	100,			
		},			
		chance: 		50,
		skill: 			'王国',
		action_name: 		'建造',
		fail_text: 		'？？？？',
	    passive_factor: 	50000,				
		难度倍数:        20,
		cost:{				
			市民: 	30,	
			合金: 	5,	
			光能: 	25,				
			科技: 	100,					
		},
		unlock_cost:{								
			科技: 	30000,			
		}
	},		
	
	
	
	
	
	
	
	
//============================t5==========================

	 t5n1_1:{
		name: 			'掠夺土地',
		unlock_name: 	'掠夺土地',	
		bonus_loot:{	
			领土: 	100000,	
			奴隶: 	4000,
			金币: 	15000,				
			宝藏: 	2000,	
			金苹果:  1,				
			敌人: 	555,			
		},			
		chance: 		50,
		skill: 			'战争',
		action_name: 		'掠夺',
		fail_text: 		'？？？',
	    passive_factor: 	1000,			
		难度倍数:        30,
		cost:{			
			士兵: 	10,		
			影响力: 	100,	
			饱食度: 	1000,					
		},
		unlock_cost:{				
			影响力: 	5000,					
		}
	},			
	 t5n1_2:{
		name: 			'派遣奴隶干活',
		unlock_name: 	'建设奴隶营',	
		bonus_loot:{	
			石头: 	5000,	
			沙子: 	5000,				
			黏土: 	3000,	
			原木:   5000,				
			木棍: 	5000,	
			敌人: 	10,				
		},			
		chance: 		50,
		skill: 			'战争',
		action_name: 		'派遣',
		fail_text: 		'？？？',
	    passive_factor: 	1000,			
		难度倍数:        5,
		cost:{			
			稿子: 	1,	
			斧头: 	1,				
			奴隶: 	2,		
			饱食度:  2,					
		},
		unlock_cost:{		
			士兵: 	20,				
			影响力: 	6000,					
		}
	},	
	 t5n1_3:{
		name: 			'建设分城',
		unlock_name: 	'建设分城',	
		bonus_loot:{	
			领地分城: 	100,			
		},			
		chance: 		100,
		skill: 			'战争',
		action_name: 		'建设',
		fail_text: 		'？？？',
	    passive_factor: 	1000,			
		难度倍数:        100,
		cost:{	
			奴隶: 	1000,			
			士兵: 	100,	
			市民: 	300,			
			红砖: 	3000,
			领土: 	3000,				
			凝聚力: 	3000,					
		},
		unlock_cost:{				
			影响力: 	10000,							
		}
	},		
	 t5n1_4:{
		name: 			'册封骑士',
		unlock_name: 	'册封骑士',	
		bonus_loot:{	
			骑士: 	100,			
		},			
		chance: 		100,
		skill: 			'战争',
		action_name: 		'册封',
		fail_text: 		'？？？',
	    passive_factor: 	1000,		
		upgrade_item: 		'领地分城',			
		难度倍数:        10,
		cost:{			
			士兵: 	1,	
			领土: 	20,				
			影响力: 	100,				
		},
		unlock_cost:{			
			领地分城: 	1,			
			影响力: 	8000,							
		}
	},		
	 t5n1_5:{
		name: 			'骑士统治',
		unlock_name: 	'骑士统治',	
		bonus_loot:{	
			影响力: 	4400,			
		},			
		chance: 		100,
		skill: 			'战争',
		action_name: 		'统治',
		fail_text: 		'？？？',
	    passive_factor: 	1000,		
		upgrade_item: 		'骑士',			
		难度倍数:        50,
		cost:{						
			金币: 	10,				
		},
		unlock_cost:{			
			骑士: 	1,	
			金币: 	1000,					
			影响力: 	7000,							
		}
	},		
	 t5n1_6:{
		name: 			'集团出征',
		unlock_name: 	'集团出征',	
		bonus_loot:{	
			领土: 	200000,	
			奴隶: 	40000,		
			南国领地: 	55,	
			北国领地: 	55,	
			敌人: 	5555,				
		},			
		chance: 		50,
		skill: 			'战争',
		action_name: 		'出征',
		fail_text: 		'？？？',
	    passive_factor: 	5000,				
		难度倍数:        50,
		cost:{		
			骑士: 	10,		
			士兵: 	100,						
			影响力: 	1000,		
			金币: 	10000,				
		},
		unlock_cost:{	
			骑士: 	10,	
			金币: 	1000,					
			影响力: 	15000,							
		}
	},	
	 t5n1_7:{
		name: 			'收入北国进贡',
		unlock_name: 	'附庸北国',	
		bonus_loot:{	
			秘银: 	200,	
			金币: 	2000,		
			宝藏: 	1000,	
			敌人: 	100,				
		},			
		chance: 		50,
		skill: 			'战争',
		action_name: 		'收入',
		fail_text: 		'？？？',
		upgrade_item: 		'北国领地',				
		难度倍数:        50,
		cost:{							
			影响力: 	10,				
		},
		unlock_cost:{	
			骑士: 	10,		
			士兵: 	100,			
			北国领地: 	1,					
			影响力: 	20000,							
		}
	},		
	 t5n1_8:{
		name: 			'收入南国进贡',
		unlock_name: 	'附庸南国',	
		bonus_loot:{	
			玄铁: 	100,	
			金币: 	4000,		
			宝藏: 	2000,	
			敌人: 	100,				
		},			
		chance: 		50,
		skill: 			'战争',
		action_name: 		'收入',
		fail_text: 		'？？？',
		upgrade_item: 		'南国领地',				
		难度倍数:        50,
		cost:{							
			影响力: 	10,				
		},
		unlock_cost:{	
			骑士: 	10,		
			士兵: 	100,			
			南国领地: 	1,					
			影响力: 	20000,							
		}
	},		
	 t5n1_9:{
		name: 			'魔法力量-制作合金【秘银玄铁】',
		unlock_name: 	'魔法力量-制作合金【秘银玄铁】',	
		bonus_loot:{	
			合金: 	100,				
		},			
		chance: 		100,
		skill: 			'战争',
		action_name: 		'制作',
		fail_text: 		'？？？',
	    passive_factor: 	1000,				
		难度倍数:        30,
		cost:{							
			秘银: 	2,		
			玄铁: 	2,			
		},
		unlock_cost:{	
			秘银: 	2,		
			玄铁: 	2,					
			影响力: 	25000,							
		}
	},			
	 t5n1_10:{
		name: 			'魔法力量-制作合金【秘银精金】',
		unlock_name: 	'魔法力量-制作合金【秘银精金】',	
		bonus_loot:{	
			合金: 	100,				
		},			
		chance: 		100,
		skill: 			'战争',
		action_name: 		'制作',
		fail_text: 		'？？？',
	    passive_factor: 	1000,				
		难度倍数:        30,
		cost:{							
			秘银: 	2,		
			精金: 	1,				
		},
		unlock_cost:{	
			秘银: 	2,		
			精金: 	1,					
			影响力: 	25000,							
		}
	},		
	 t5n1_11:{
		name: 			'骑士击杀敌人【每个敌人增加商店扩展基础金额100】',
		unlock_name: 	'骑士击杀敌人【每个敌人增加商店扩展基础金额100】',	
		bonus_loot:{	
			经验球: 	5000,	
			村民: 	300,
			铜装备: 	30,	
			铁装备: 	10,	
			宝藏: 	30,		
			绿宝石: 	1,					
		},			
		chance: 		50,
		skill: 			'战争',
		action_name: 		'击杀',
		fail_text: 		'什么都没有',
		upgrade_item: 		'骑士',					
		难度倍数:        6,
		cost:{		
		    敌人:    10,			
			金币: 	20,			
		},
		unlock_cost:{				
			骑士: 	10,		
			金币: 	1000,							
			影响力: 	5000,								
		}
	},	
	 t5n1_12:{
		name: 			'人体研究学院',
		unlock_name: 	'建设人体研究学院【研究人体】',	
		bonus_loot:{	
			科技: 	6666,				
		},			
		chance: 		100,
		skill: 			'地狱',
		action_name: 		'制作',
		fail_text: 		'？？？',
	    passive_factor: 	10000,				
		难度倍数:        20,
		cost:{							
			奴隶: 	300,
			金币: 	6000,			
		},
		unlock_cost:{	
			奴隶: 	75000,		
			合金: 	20,
			领土: 	50000,				
			科技: 	4000,								
		}
	},		
//===============地狱=======================================	
	
	 t5n2_1:{
		name: 			'地狱探索',
		unlock_name: 	'地狱探索',	
		bonus_loot:{	
			领土: 	100000,	
			精血: 	6000,
			腐肉: 	20000,				
			宝藏: 	2000,	
			红龙:  1,				
			怪物: 	5555,			
		},			
		chance: 		50,
		skill: 			'地狱',
		action_name: 		'地狱探索',
		fail_text: 		'？？？',
	    passive_factor: 	1000,			
		难度倍数:        30,
		cost:{			
			士兵: 	10,		
			影响力: 	100,	
			饱食度: 	1000,					
		},
		unlock_cost:{				
			影响力: 	5000,					
		}
	},			
	 t5n2_2:{
		name: 			'制作地狱砖',
		unlock_name: 	'建设地狱熔炉',	
		bonus_loot:{	
			地狱砖: 	1000,				
		},			
		chance: 		50,
		skill: 			'地狱',
		action_name: 		'熔炉',
		fail_text: 		'？？？',
	    passive_factor: 	1000,			
		难度倍数:        5,
		cost:{			
			精血: 	10,	
			红砖: 	20,								
		},
		unlock_cost:{		
			红砖: 	500,				
			影响力: 	6000,					
		}
	},	
	 t5n2_3:{
		name: 			'建设地狱要塞',
		unlock_name: 	'建设地狱要塞',	
		bonus_loot:{	
			地狱要塞: 	100,			
		},			
		chance: 		100,
		skill: 			'地狱',
		action_name: 		'建设',
		fail_text: 		'？？？',
	    passive_factor: 	1000,			
		难度倍数:        100,
		cost:{			
			士兵: 	100,	
			市民: 	300,			
			红砖: 	3000,
			地狱砖: 	1000,				
			凝聚力: 	3000,					
		},
		unlock_cost:{				
			影响力: 	10000,							
		}
	},		
	 t5n2_4:{
		name: 			'招募勇者',
		unlock_name: 	'招募勇者',	
		bonus_loot:{	
			勇者: 	100,			
		},			
		chance: 		100,
		skill: 			'地狱',
		action_name: 		'招募',
		fail_text: 		'？？？',
	    passive_factor: 	1000,		
		upgrade_item: 		'地狱要塞',			
		难度倍数:        10,
		cost:{			
			市民: 	1,	
			金币: 	70,				
			影响力: 	100,				
		},
		unlock_cost:{			
			地狱要塞: 	1,			
			影响力: 	8000,							
		}
	},		
	 t5n2_5:{
		name: 			'派遣勇者保卫地狱要塞',
		unlock_name: 	'派遣勇者保卫地狱要塞',	
		bonus_loot:{	
			影响力: 	4400,			
		},			
		chance: 		100,
		skill: 			'地狱',
		action_name: 		'统治',
		fail_text: 		'？？？',
	    passive_factor: 	1000,		
		upgrade_item: 		'勇者',			
		难度倍数:        50,
		cost:{						
			金币: 	10,				
		},
		unlock_cost:{			
			勇者: 	1,	
			金币: 	1000,					
			影响力: 	7000,							
		}
	},		
	 t5n2_6:{
		name: 			'组建大型探索队伍',
		unlock_name: 	'组建大型探索队伍',	
		bonus_loot:{	
			金币: 	200000,	
			精血: 	60000,		
			灵魂岩层: 	55,	
			绯红森林: 	55,	
			怪物: 	55555,				
		},			
		chance: 		50,
		skill: 			'地狱',
		action_name: 		'地狱探索',
		fail_text: 		'？？？',
	    passive_factor: 	5000,				
		难度倍数:        50,
		cost:{		
			勇者: 	10,		
			士兵: 	100,						
			影响力: 	1000,		
			金币: 	10000,				
		},
		unlock_cost:{	
			勇者: 	10,	
			金币: 	1000,					
			影响力: 	15000,							
		}
	},	
	 t5n2_7:{
		name: 			'收集绯红森林资源',
		unlock_name: 	'开发绯红森林资源',	
		bonus_loot:{	
			精金: 	100,	
			领土: 	4000,		
			宝藏: 	2000,	
			怪物: 	1000,				
		},			
		chance: 		50,
		skill: 			'地狱',
		action_name: 		'收入',
		fail_text: 		'？？？',
		upgrade_item: 		'绯红森林',				
		难度倍数:        50,
		cost:{							
			影响力: 	10,				
		},
		unlock_cost:{	
			勇者: 	10,		
			士兵: 	100,			
			绯红森林: 	1,					
			影响力: 	20000,							
		}
	},		
	 t5n2_8:{
		name: 			'收集灵魂岩层资源',
		unlock_name: 	'开发灵魂岩层资源',	
		bonus_loot:{	
			魂钢: 	200,	
			领土: 	2000,		
			宝藏: 	1000,	
			怪物: 	1000,				
		},			
		chance: 		50,
		skill: 			'地狱',
		action_name: 		'收入',
		fail_text: 		'？？？',
		upgrade_item: 		'灵魂岩层',				
		难度倍数:        50,
		cost:{							
			影响力: 	10,				
		},
		unlock_cost:{	
			勇者: 	10,		
			士兵: 	100,			
			灵魂岩层: 	1,					
			影响力: 	20000,							
		}
	},		
	 t5n2_9:{
		name: 			'魔法力量-制作合金【精金魂钢】',
		unlock_name: 	'魔法力量-制作合金【精金魂钢】',	
		bonus_loot:{	
			合金: 	100,				
		},			
		chance: 		100,
		skill: 			'地狱',
		action_name: 		'制作',
		fail_text: 		'？？？',
	    passive_factor: 	1000,				
		难度倍数:        30,
		cost:{							
			精金: 	2,		
			魂钢: 	2,			
		},
		unlock_cost:{	
			精金: 	2,		
			魂钢: 	2,					
			影响力: 	25000,							
		}
	},			
	 t5n2_10:{
		name: 			'魔法力量-制作合金【魂钢玄铁】',
		unlock_name: 	'魔法力量-制作合金【魂钢玄铁】',	
		bonus_loot:{	
			合金: 	100,				
		},			
		chance: 		100,
		skill: 			'地狱',
		action_name: 		'制作',
		fail_text: 		'？？？',
	    passive_factor: 	1000,				
		难度倍数:        30,
		cost:{							
			魂钢: 	2,		
			玄铁: 	1,				
		},
		unlock_cost:{	
			魂钢: 	2,		
			玄铁: 	1,					
			影响力: 	25000,							
		}
	},		
	 t5n2_11:{
		name: 			'勇者击杀怪物【每个怪物增加商店扩展基础金额10】',
		unlock_name: 	'勇者击杀怪物【每个怪物增加商店扩展基础金额10】',	
		bonus_loot:{
			经验球: 	6000,					
			腐肉: 	6000,
			宝藏: 	10,						
		},			
		chance: 		50,
		skill: 			'地狱',
		action_name: 		'击杀',
		fail_text: 		'什么都没有',
		upgrade_item: 		'勇者',					
		难度倍数:        6,
		cost:{		
		    怪物:    100,			
			金币: 	20,			
		},
		unlock_cost:{				
			勇者: 	10,		
			金币: 	1000,							
			影响力: 	5000,								
		}
	},		
	 t5n2_12:{
		name: 			'地狱研究学院',
		unlock_name: 	'建设地狱研究学院【研究精血】',	
		bonus_loot:{	
			科技: 	6666,				
		},			
		chance: 		100,
		skill: 			'地狱',
		action_name: 		'制作',
		fail_text: 		'？？？',
	    passive_factor: 	10000,				
		难度倍数:        20,
		cost:{							
			精血: 	500,
			金币: 	1000,			
		},
		unlock_cost:{	
			精血: 	10000,		
			合金: 	20,
			领土: 	50000,				
			科技: 	4000,								
		}
	},		

	//===============T6=======================================	
	
	    t6n1_1:{
		name: 			'探索附近太空',
		unlock_name: 	'探索附近太空',	
		bonus_loot:{	
			小行星矿: 	80,
			太空生物: 	70,	
			黑龙: 	0.1,			
		},			
		chance: 		100,
		skill: 			'太空',
		action_name: 		'探索',
		fail_text: 		'什么都没找到',
	    passive_factor: 	100000,	
		upgrade_item: 		'飞船',			
		难度倍数:        5,
		cost:{							
			光能: 5,		
		},
		unlock_cost:{								
		}
	},		
	    t6n1_2:{
		name: 			'空间站',
		unlock_name: 	'建设空间站',	
		bonus_loot:{	
			光能: 	1555,
			小行星矿: 8,			
			太空生物: 7,				
			黑龙: 	0.01,			
		},			
		chance: 		100,
		skill: 			'太空',
		action_name: 		'收集',
		fail_text: 		'什么都没找到',
	    passive_factor: 	100000,				
		难度倍数:        10,
		cost:{							
			科技: 10,				
		},
		unlock_cost:{
			飞船: 	5,		
			合金: 	300,
			光能: 	300,				
			科技: 	15000,				
		}
	},	
	    t6n1_3:{
		name: 			'开采小行星',
		unlock_name: 	'开采小行星',	
		bonus_loot:{	
			秘银: 	122,		
			玄铁: 	244,				
			精金: 	244,		
			魂钢: 	122,
			龙锭: 	0.05,			
		},			
		chance: 		100,
		skill: 			'太空',
		action_name: 		'开采',
		fail_text: 		'什么都没找到',
	    passive_factor: 	100000,				
		难度倍数:        2,
		cost:{							
			小行星矿: 1,	
			光能: 10,				
		},
		unlock_cost:{	
		    飞船: 1,
			科技: 	8000,				
		}
	},		
	    t6n1_4:{
		name: 			'猎杀太空生物',
		unlock_name: 	'猎杀太空生物',	
		bonus_loot:{	
			生物细胞: 	100,	
			经验球: 	1111,			
		},			
		chance: 		100,
		skill: 			'太空',
		action_name: 		'开采',
		fail_text: 		'什么都没找到',
	    passive_factor: 	100000,	
		upgrade_item: 		'飞船',			
		难度倍数:        2,
		cost:{		
			太空生物: 1,
			光能: 5,			
		},
		unlock_cost:{	
		    飞船: 1,
			光能: 	500,				
		}
	},	
	    t6n1_5:{
		name: 			'研究站',
		unlock_name: 	'建设研究站',	
		bonus_loot:{	
			科技: 	2333,		
		},			
		chance: 		100,
		skill: 			'太空',
		action_name: 		'研究',
		fail_text: 		'什么都没找到',
	    passive_factor: 	100000,				
		难度倍数:        3,
		cost:{							
			生物细胞: 1,
			光能: 5,				
		},
		unlock_cost:{
			生物细胞: 	10,			
			飞船: 	5,		
			合金: 	300,
			光能: 	1000,				
			科技: 	15000,				
		}
	},		
	    t6n1_6:{
		name: 			'太空熔炉',
		unlock_name: 	'建设太空熔炉',	
		bonus_loot:{	
			合金: 	300,		
		},			
		chance: 		100,
		skill: 			'太空',
		action_name: 		'熔炼',
		fail_text: 		'什么都没找到',
	    passive_factor: 	100000,				
		难度倍数:        3,
		cost:{	
			秘银: 	1,		
			玄铁: 	1,				
			精金: 	1,		
			魂钢: 	1,		
			生物细胞: 1,
			光能: 10,				
		},
		unlock_cost:{
			生物细胞: 	10,			
			飞船: 	5,		
			合金: 	500,
			光能: 	1000,				
			科技: 	20000,				
		}
	},		
	    t6n1_7:{
		name: 			'太空武器库',
		unlock_name: 	'建设太空武器库',	
		bonus_loot:{	
			生物武器: 	100,		
		},			
		chance: 		100,
		skill: 			'太空',
		action_name: 		'熔炼',
		fail_text: 		'什么都没找到',
	    passive_factor: 	100000,				
		难度倍数:        3,
		cost:{		
			合金: 	1,		
			生物细胞: 2,
			光能: 10,				
		},
		unlock_cost:{
			生物细胞: 	10,			
			飞船: 	5,		
			合金: 	400,
			光能: 	1200,				
			科技: 	25000,				
		}
	},		
	    t6n1_8:{
		name: 			'建造战斗飞船',
		unlock_name: 	'建造战斗飞船',	
		bonus_loot:{	
			战斗飞船: 	100,		
		},			
		chance: 		100,
		skill: 			'太空',
		action_name: 		'熔炼',
		fail_text: 		'什么都没找到',
	    passive_factor: 	100000,				
		难度倍数:        20,
		cost:{		
			宇航员: 	1,
			生物武器: 	1,			
			合金: 	5,	
			光能: 	25,				
			科技: 	100,					
		},
		unlock_cost:{
			生物细胞: 	10,			
			飞船: 	5,		
			合金: 	400,
			光能: 	1200,				
			科技: 	25000,				
		}
	},	
	    t6n1_9:{
		name: 			'扩大探索太空',
		unlock_name: 	'扩大探索太空',	
		bonus_loot:{	
			太空生物: 	3333,	
			黑龙: 	1,		
			龙锭: 	0.5,					
		},			
		chance: 		100,
		skill: 			'太空',
		action_name: 		'探索',
		fail_text: 		'什么都没找到',
	    passive_factor: 	100000,	
		upgrade_item: 		'战斗飞船',			
		难度倍数:        50,
		cost:{							
			光能: 100,		
		},
		unlock_cost:{	
			战斗飞船: 	1,				
		}
	},		
	    t6n1_10:{
		name: 			'剿灭太空生物',
		unlock_name: 	'剿灭太空生物',	
		bonus_loot:{	
			生物细胞: 	1000,	
			经验球: 	11111,			
		},			
		chance: 		100,
		skill: 			'太空',
		action_name: 		'开采',
		fail_text: 		'什么都没找到',
	    passive_factor: 	100000,	
		upgrade_item: 		'战斗飞船',			
		难度倍数:        2,
		cost:{		
			太空生物: 10,
			光能: 25,			
		},
		unlock_cost:{	
		    战斗飞船: 1,
			光能: 	2500,				
		}
	},		
	    t6n1_11:{
		name: 			'组建殖民舰队【开启下个地点主要位置】',
		unlock_name: 	'组建殖民舰队【开启下个地点主要位置】',	
		bonus_loot:{	
			殖民舰队: 	100,		
		},			
		chance: 		100,
		skill: 			'太空',
		action_name: 		'组建',
		fail_text: 		'什么都没找到',
	    passive_factor: 	1000000,				
		难度倍数:        500,
		cost:{		
		    飞船: 	10,			
		    运载飞船: 	30,		
			战斗飞船: 	20,
			光能: 	10000,					
		},
		unlock_cost:{
		    飞船: 	1,			
		    运载飞船: 	1,		
			战斗飞船: 	1,
			光能: 	100,				
		}
	},	
	
	//===============T7二周目=======================================		
	    t7n1_1:{
		name: 			'第二个位置需求100M店铺价值【记得经常备份存档】',
		unlock_name: 	'第二个位置需求100M店铺价值【记得经常备份存档】',	
		bonus_loot:{	
			物资:   0.001,		
			戴森云:   0,
			能量接收器:   0,
			月球消息1:   0,	
			月球消息2:   0,				
		},			 
		chance: 		100,
		skill: 			'这个任务没产出',
		action_name: 		'这个任务没产出',
		fail_text: 		'什么都没找到',
	    passive_factor: 	100000000,			
		难度倍数:        100000000,
		cost:{			
			无:   1,			
		},
		unlock_cost:{		
		}
	},		
		 t7n1_2:{
		name: 			'收集殖民地物资',
		unlock_name: 	'收集殖民地物资',	
		bonus_loot:{	
			市民: 	3333,		
			光能: 	1555,		
			科技: 	1555,
			生物细胞: 100,				
			秘银: 	100,		
			玄铁: 	100,				
			精金: 	100,		
			魂钢: 	100,
			物资:   0.1,		
		},			 
		chance: 		100,
		skill: 			'殖民地物资',
		action_name: 		'收集',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,			
		难度倍数:        0.1,
		cost:{							
			物资: 1,		
		},
		unlock_cost:{		
		}
	},	
	    t7n1_3:{
		name: 			'空间站',
		unlock_name: 	'空间站',	
		bonus_loot:{	
			光能: 	3000,			
		},			
		chance: 		100,
		skill: 			'二周目太空',
		action_name: 		'收集',
		fail_text: 		'什么都没找到',
	    passive_factor: 	100000,				
		难度倍数:        2.6,
		cost:{							
			科技: 20,				
		},
		unlock_cost:{			
			科技: 	10,				
		}
	},		
	    t7n1_4:{
		name: 			'研究站',
		unlock_name: 	'建设研究站',	
		bonus_loot:{	
			科技: 	2500,		
		},			
		chance: 		100,
		skill: 			'二周目太空',
		action_name: 		'研究',
		fail_text: 		'什么都没找到',
	    passive_factor: 	100000,				
		难度倍数:        2.6,
		cost:{							
			生物细胞: 1,
			光能: 10,				
		},
		unlock_cost:{
			光能: 	10,							
		}
	},			
	    t7n1_5:{
		name: 			'太空熔炉',
		unlock_name: 	'太空熔炉',	
		bonus_loot:{	
			合金板: 	1100,		
		},			
		chance: 		100,
		skill: 			'二周目太空',
		action_name: 		'熔炼',
		fail_text: 		'？？？',
	    passive_factor: 	100000,				
		难度倍数:        2.6,
		cost:{	
			秘银: 	2,		
			玄铁: 	2,				
			精金: 	2,		
			魂钢: 	2,		
			光能: 10,				
		},
		unlock_cost:{
			秘银: 	1,		
			玄铁: 	1,				
			精金: 	1,		
			魂钢: 	1,	
			光能: 10,			
		}
	},
	   t7n1_6:{
		name: 			'航天基地',
		unlock_name: 	'航天基地【记得先攒100M店铺价值开实验室位置】',	
		bonus_loot:{	
			驾驶员: 	1000,			
		},			
		chance: 		50,
		skill: 			'二周目太空',
		action_name: 		'训练',
		fail_text: 		'？？？',
	    passive_factor: 	100000,				
		难度倍数:        6.2,
		cost:{				
			市民: 	10,	
			合金板: 3,	
			光能: 	5,				
			科技: 	7,					
		},
		unlock_cost:{	
			合金板: 1,				
		}
	},		
	
	    t7n1_8:{
		name: 			'战斗飞船【65评分2S槽护卫级】',
		unlock_name: 	'战斗飞船【65评分2S槽护卫级】',	
		bonus_loot:{	
			战斗飞船: 	100,		
		},			
		chance: 		100,
		skill: 			'二周目太空',
		action_name: 		'建造',
		fail_text: 		'什么都没找到',
	    passive_factor: 	100000,				
		难度倍数:        6.2,
		cost:{		
			驾驶员: 15,		
			合金板: 40,	
			光能: 	50,				
			科技: 	70,					
		},
		unlock_cost:{
			驾驶员: 1,		
			合金板: 1,	
			光能: 	10,				
			科技: 	10,			
		}
	},		
	 t7n1_9:{
		name: 			'运载飞船',
		unlock_name: 	'运载飞船【记得先攒100M店铺价值开实验室位置】',	
		bonus_loot:{	
			运载飞船: 	100,			
		},			
		chance: 		50,
		skill: 			'二周目太空',
		action_name: 		'建造',
		fail_text: 		'？？？？',
	    passive_factor: 	100000,				
		难度倍数:        6.2,
		cost:{				
			驾驶员: 6,
			市民: 55,			
			合金板: 25,	
			光能: 	40,				
			科技: 	60,						
		},
		unlock_cost:{								
			驾驶员: 1,		
			合金板: 1,	
			光能: 	10,				
			科技: 	10,				
		}
	},		
	    t7n1_10:{
		name: 			'组建殖民舰队',
		unlock_name: 	'组建殖民舰队【需求资源较多，先探索获取点资源后建造】',	
		bonus_loot:{	
			殖民舰队: 	100,		
		},			
		chance: 		100,
		skill: 			'二周目太空',
		action_name: 		'组建',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,				
		难度倍数:        10,
		cost:{				
		    运载飞船: 	40,		
			战斗飞船: 	25,
			物资: 	50,			
			光能: 	5000,					
		},
		unlock_cost:{		
		    运载飞船: 	1,		
			战斗飞船: 	1,				
		}
	},		
	    t7n1_11:{
		name: 			'火星前哨站【开启新位置地点】',
		unlock_name: 	'在火星建立前哨站【开启新位置地点】',	
		bonus_loot:{	
			火星领土: 	0.001,	
			火星员工: 	0,	
			火星居住地: 	0,	
			火星货运: 	0,	
			火星物资: 	0,				
			
		},			
		chance: 		100,
		skill: 			'这里无产出',
		action_name: 		'这里无产出',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000000,				
		难度倍数:        200000,
		cost:{	
			殖民舰队: 	1,			
		},
		unlock_cost:{		
			殖民舰队: 	1,				
		}
	},		
	    t7n1_12:{
		name: 			'水星前哨站【开启新位置地点】',
		unlock_name: 	'在水星建立前哨站【开启新位置地点】',	
		bonus_loot:{	
			水星领土: 	0.001,	
			水星员工: 	0,	
			水星居住地: 	0,	
			水星货运: 	0,	
			水星物资: 	0,				
		},			
		chance: 		100,
		skill: 			'这里无产出',
		action_name: 		'这里无产出',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000000,				
		难度倍数:        200000,
		cost:{	
			殖民舰队: 	1,			
		},
		unlock_cost:{		
			殖民舰队: 	1,				
		}
	},	
	    t7n1_13:{
		name: 			'金星前哨站【开启新位置地点】',
		unlock_name: 	'在金星建立前哨站【开启新位置地点】',	
		bonus_loot:{	
			金星领土: 	0.001,	
			金星员工: 	0,	
			金星居住地: 	0,	
			金星货运: 	0,	
			金星物资: 	0,				
		},			
		chance: 		100,
		skill: 			'这里无产出',
		action_name: 		'这里无产出',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000000,				
		难度倍数:        200000,
		cost:{	
			殖民舰队: 	1,			
		},
		unlock_cost:{		
			殖民舰队: 	1,				
		}
	},		
	    t7n1_14:{
		name: 			'太阳帆轨道弹射基地',
		unlock_name: 	'建立太阳帆轨道弹射基地【发射太阳帆】',	
		bonus_loot:{	
			戴森云: 95,					
		},			
		chance: 		100,
		skill: 			'二周目太空',
		action_name: 		'发射',
		fail_text: 		'发射失败了',
	    passive_factor: 	1000000,				
		难度倍数:        1.3,
		cost:{				
			太阳帆: 1,		
			光能: 10,			
		},
		unlock_cost:{	
			太阳帆: 1,			
			市民: 	300,	
			合金板: 80,	
			光能:   100,				
			科技: 	300,
		}
	},	
	    t7n1_15:{
		name: 			'太空港口-集装箱',
		unlock_name: 	'太空港口-集装箱工厂',	
		bonus_loot:{	
			集装箱: 800,		
		},			
		chance: 		100,
		skill: 			'二周目太空',
		action_name: 		'制造',
		fail_text: 		'',
	    passive_factor: 	1000000,				
		难度倍数:        1.3,
		cost:{				
			合金板: 6,	
			光能:   4,				
			科技: 	10,		
		},
		unlock_cost:{			
			合金板: 30,	
			光能:   100,				
			科技: 	200,
		}
	},		
	    t7n1_16:{
		name: 			'太空港口-太空服',
		unlock_name: 	'太空港口-太空服工厂',	
		bonus_loot:{	
			太空服: 10000,		
		},			
		chance: 		100,
		skill: 			'二周目太空',
		action_name: 		'制造',
		fail_text: 		'',
	    passive_factor: 	1000000,				
		难度倍数:        1.3,
		cost:{				
			合金板: 10,	
			光能:   12,				
			科技: 	18,		
		},
		unlock_cost:{			
			合金板: 50,	
			光能:   100,				
			科技: 	200,
		}
	},			
	    t7n1_17:{
		name: 			'太空港口-武器',
		unlock_name: 	'太空港口-武器工厂',	
		bonus_loot:{	
			武器: 15000,		
		},			
		chance: 		100,
		skill: 			'二周目太空',
		action_name: 		'制造',
		fail_text: 		'',
	    passive_factor: 	1000000,				
		难度倍数:        1.3,
		cost:{				
			魂钢: 4,	
			玄铁: 4,	
			光能:   15,				
			科技: 	25,		
		},
		unlock_cost:{			
			魂钢: 20,	
			玄铁: 20,		
			光能:   100,				
			科技: 	200,
		}
	},		
	    t7n1_18:{
		name: 			'阳光号【1000评分4S槽2M槽驱逐级】',
		unlock_name: 	'阳光号【1000评分4S槽2M槽驱逐级】',	
		bonus_loot:{	
			阳光号: 	100,		
		},			
		chance: 		100,
		skill: 			'二周目太空',
		action_name: 		'建造',
		fail_text: 		'什么都没找到',
	    passive_factor: 	1000000,				
		难度倍数:        8.6,
		cost:{	
			少将: 2,			
			驾驶员: 120,		
			超合金: 120,	
			光能: 	600,				
			科技: 	1200,					
		},
		unlock_cost:{
			殖民地科技包: 100,			
		}
	},			
	    t7n1_19:{
		name: 			'建设丰碑【提高繁荣度上限】',
		unlock_name: 	'建设丰碑【提高繁荣度上限】',	
		bonus_loot:{	
			丰碑: 	100,		
		},			
		chance: 		100,
		skill: 			'二周目太空',
		action_name: 		'建造',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,				
		难度倍数:        1.4,
		cost:{		
			超合金: 1,	
			光能: 15,	
			科技: 25,				
		},
		unlock_cost:{
			殖民地科技包: 150,			
		}
	},		
	 t7n1_20:{
		name: 			'远征货运【开启新位置地点】',
		unlock_name: 	'建立巨型太空港口【开启新位置地点】',	
		bonus_loot:{	
			远征货运: 	100,			
		},			
		chance: 		50,
		skill: 			'二周目太空',
		action_name: 		'建造',
		fail_text: 		'？？？？',
	    passive_factor: 	10000000,				
		难度倍数:        6.2,
		cost:{		
			少将: 2,	
			集装箱: 100,				
			驾驶员: 200,			
			超合金: 80,	
			光能: 	400,				
			科技: 	600,						
		},
		unlock_cost:{			
			中将: 1,		
			超合金: 1000,	
			殖民地科技包: 2000,					
		}
	},		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//===============T7合成=======================================
	
	    t7n2_1:{
		name: 			'合成金属物资包',
		unlock_name: 	'合成金属物资包',	
		bonus_loot:{	
			金属物资包: 	100,		
		},			
		chance: 		100,
		skill: 			'合成',
		action_name: 		'合成',
		fail_text: 		'什么都没找到',
	    passive_factor: 	1000000,				
		难度倍数:        6.2,
		cost:{	
			秘银: 	1,		
			玄铁: 	1,				
			精金: 	1,		
			魂钢: 	1,				
			物资: 	100,					
		},
		unlock_cost:{
			
		}
	},	
	
	    t7n2_2:{
		name: 			'制作太阳帆',
		unlock_name: 	'研究制作太阳帆',	
		bonus_loot:{	
			太阳帆: 	100,		
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'什么都没找到',
	    passive_factor: 	1000000,				
		难度倍数:        0.2,
		cost:{		
			秘银: 	4,
			光能: 	2,		
			科技: 	3,				
		},
		unlock_cost:{
			科技: 	500,						
		}
	},	
	    t7n2_3:{
		name: 			'制作能量接收器',
		unlock_name: 	'研究制作能量接收器',	
		bonus_loot:{	
			能量接收器: 	100,		
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'什么都没找到',
	    passive_factor: 	1000000,				
		难度倍数:        2.6,
		cost:{		
			精金: 	4,
			光能: 	2,		
			科技: 	3,			
		},
		unlock_cost:{
			科技: 	800,						
		}
	},			
	 t7n2_4:{
		name: 			'红色激光【S槽武器20分】',
		unlock_name: 	'能量武器研究【S槽】【红色激光】【只要仓库有足够的武器，舰队会自动装载.】',	
		bonus_loot:{	
			红色激光: 	100,				
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'？？？',
	    passive_factor: 	1000000,				
		难度倍数:        6.2,
		cost:{							
			魂钢: 	15,		
			光能: 	7,					
			科技: 	13,			
		},
		unlock_cost:{	
			魂钢: 	10,		
			光能: 	200,					
			科技: 	800,						
		}
	},	
	 t7n2_5:{
		name: 			'小型导弹【S槽武器20分】',
		unlock_name: 	'导弹武器研究【S槽】【小型导弹】【只要仓库有足够的武器，舰队会自动装载.】',	
		bonus_loot:{	
			小型导弹: 	100,				
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'？？？',
	    passive_factor: 	1000000,				
		难度倍数:        6.2,
		cost:{								
			玄铁: 	15,				
			光能: 	7,					
			科技: 	13,				
		},
		unlock_cost:{	
			玄铁: 	10,		
			光能: 	200,					
			科技: 	800,							
		}
	},		
		 t7n2_6:{
		name: 			'开启金属物资包',
		unlock_name: 	'开启金属物资包',	
		bonus_loot:{					
			秘银: 	22222,		
			玄铁: 	22222,				
			精金: 	22222,		
			魂钢: 	22222,
			物资:   100,		
		},			 
		chance: 		100,
		skill: 			'殖民地物资',
		action_name: 		'收集',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,			
		难度倍数:        0.4,
		cost:{							
			金属物资包: 1,		
		},
		unlock_cost:{	
			秘银: 	1,		
			玄铁: 	1,				
			精金: 	1,		
			魂钢: 	1,		
            物资: 1,		
		}
	},	
	 t7n2_7:{
		name: 			'蓝色激光【M槽武器100分】',
		unlock_name: 	'能量武器研究【M槽】【蓝色激光】【只要仓库有足够的武器，舰队会自动装载.】',	
		bonus_loot:{	
			蓝色激光: 	100,				
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'？？？',
	    passive_factor: 	1000000,				
		难度倍数:        6.3,
		cost:{							
			超合金: 	10,
			山铜: 	3,			
			光能: 	30,					
			科技: 	70,			
		},
		unlock_cost:{	
			超合金: 10,
			山铜: 	5,			
			光能: 	1000,					
			科技: 	8000,						
		}
	},	
	 t7n2_8:{
		name: 			'中型导弹【M槽武器100分】',
		unlock_name: 	'导弹武器研究【M槽】【中型导弹】【只要仓库有足够的武器，舰队会自动装载.】',	
		bonus_loot:{	
			中型导弹: 	100,				
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'？？？',
	    passive_factor: 	1000000,				
		难度倍数:        6.3,
		cost:{								
			超合金: 	10,
			陨铁: 	3,			
			光能: 	30,					
			科技: 	70,					
		},
		unlock_cost:{	
			超合金: 	10,
			陨铁: 	5,			
			光能: 	1000,					
			科技: 	8000,						
		}
	},		
	 t7n2_9:{
		name: 			'致密的生物细胞',
		unlock_name: 	'？？？？？？？？？？？？',	
		bonus_loot:{	
			致密的生物细胞: 	100,				
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'？？？',
	    passive_factor: 	1000000,				
		难度倍数:        6.3,
		cost:{								
			生物细胞: 	100,				
		},
		unlock_cost:{	
			月球消息1: 	100,					
		}
	},	
	 t7n2_10:{
		name: 			'黑龙战舰【1500评分8S槽3M槽驱逐级】',
		unlock_name: 	'？？？？？？？？？？？？',	
		bonus_loot:{	
			黑龙战舰: 	100,				
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'？？？',
	    passive_factor: 	1000000,				
		难度倍数:        10,
		cost:{								
			黑龙: 	1,	
			驾驶员: 100,		
			合金板: 300,	
			光能: 	400,				
			科技: 	800,				
		},
		unlock_cost:{	
			月球消息2: 	200,					
		}
	},		
	 t7n2_11:{
		name: 			'分享月球消息1',
		unlock_name: 	'分享月球消息1',
		bonus_loot:{	
            月球消息2: 	100,			
		},			
		chance: 		100,
		skill: 			'分享',
		action_name: 		'分享',
		fail_text: 		'？？？',
	    passive_factor: 	1000000,				
		难度倍数:        1,
		cost:{								
			月球消息1: 	20,				
		},
		unlock_cost:{	
			月球消息1: 	100,					
		}
	},		
	 t7n2_12:{
		name: 			'制造超合金',
		unlock_name: 	'超合金研究开发',
		bonus_loot:{	
            超合金: 	1111,			
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        0.2,
		cost:{								
			钛铁: 	2,	
			合金板: 	20,	
			光能: 	40,				
			科技: 	60,				
		},
		unlock_cost:{	
			山铜: 	10,	
			钛铁: 	10,	
			陨铁: 	10,		
			光能: 	1000,				
			科技: 	10000,						
		}
	},		
	    t7n2_13:{
		name: 			'太空市场-打包物资【售卖产品】',
		unlock_name: 	'建立太空市场-打包物资【售卖产品】',	
		bonus_loot:{	
			货物: 	100,		
		},			
		chance: 		100,
		skill: 			'殖民地物资',
		action_name: 		'打包',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,				
		难度倍数:        6.2,
		cost:{			
			物资: 	100,
			集装箱:  10,				
		},
		unlock_cost:{
			运载飞船: 	1,			
			集装箱: 	100,	
			市民: 	200,					
			合金板: 	20,		
			光能: 	50,					
			科技: 	1000,							
		}
	},		
	    t7n2_14:{
		name: 			'殖民地科技院',
		unlock_name: 	'建立殖民地科技院',	
		bonus_loot:{	
			殖民地科技包: 	100,		
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'科研',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,				
		难度倍数:        0.2,
		cost:{			
			火星物资: 1,	
			金星物资: 1,	
			水星物资: 1,
			光能: 	10,				
			科技: 	80,			
		},
		unlock_cost:{
			物资: 30,
			火星物资: 300,	
			金星物资: 300,	
			水星物资: 300,				
			超合金: 100,		
			光能: 	5000,					
			科技: 	10000,							
		}
	},	
	    t7n2_24:{
		name: 			'建立实验室【实验室决定研究速度】',
		unlock_name: 	'开发建立实验室【开启科技界面】',	
		bonus_loot:{	
			实验室: 	100,		
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'建立',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,				
		难度倍数:        6.2,
		cost:{				
			超合金: 10,
			光能: 	150,				
			科技: 	300,			
		},
		unlock_cost:{
			殖民地科技包: 	1000,							
		}
	},		
	    t7n2_25:{
		name: 			'开启机械科技包',
		unlock_name: 	'？？？？？？？？',	
		bonus_loot:{	
			智能核心: 	400,
			科技: 	600000,		
		},			
		chance: 		100,
		skill: 			'殖民地物资',
		action_name: 		'开启',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,				
		难度倍数:        2.6,
		cost:{							
			机械科技包: 	500,			
		},
		unlock_cost:{
			机械科技包: 	100,							
		}
	},		
	    t7n2_26:{
		name: 			'机械-大型计算机',
		unlock_name: 	'建立大型计算机',	
		bonus_loot:{	
			自我进化: 100,	
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'进化',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,				
		难度倍数:        6.2,
		cost:{	
			智能核心: 	8,
			光能: 	500,				
			科技: 	1000,			
		},
		unlock_cost:{			
			智能核心: 	100,	
			超合金: 1000,
			光能: 	15000,				
			科技: 	30000,			
		}
	},		
	    t7n2_27:{
		name: 			'机械-智能研究所',
		unlock_name: 	'建立机械智能研究所',	
		bonus_loot:{	
			机械研究瓶: 11111,	
			自我进化: 	1,				
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'研究',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,				
		难度倍数:        6.2,
		cost:{			
			自我进化: 	1,	
			殖民地科技包: 	10,				
			光能: 	500,				
			科技: 	1000,			
		},
		unlock_cost:{			
			自我进化: 	10,	
			超合金: 2000,
			光能: 	30000,				
			科技: 	45000,			
		}
	},		
	    t7n2_28:{
		name: 			'机械-智能辅助',
		unlock_name: 	'开启智能辅助【注意开启这个位置就不能手动过载了！】',	
		bonus_loot:{	
			智能辅助: 1500,				
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'研究',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,				
		难度倍数:        6.2,
		cost:{			
			自我进化: 	1,	
			超合金: 20,			
			光能: 	1000,				
			科技: 	1000,			
		},
		unlock_cost:{			
			自我进化: 	30,	
			超合金: 3000,
			光能: 	50000,				
			科技: 	75000,			
		}
	},		
	    t7n2_29:{
		name: 			'机械-智能过载',
		unlock_name: 	'开启智能过载【智能过载可以缓慢的转化能量为光能,相当于不需要消耗能量转换且转换率更高.】',	
		bonus_loot:{	
			光能: 11000*1000,				
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'过载',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,				
		难度倍数:       13.4,
		cost:{			
			能量接收器: 1*1000,	
			智能辅助: 10,					
		},
		unlock_cost:{			
			自我进化: 	100,	
			超合金: 4000,
			光能: 	60000,				
			科技: 	85000,			
		}
	},			
	    t7n2_30:{
		name: 			'机械-智能殖民地科技研究',
		unlock_name: 	'开启智能殖民地科技研究',	
		bonus_loot:{			
            殖民地科技包: 	11111*2.1,				
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'研究',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:         13.4,
		cost:{		
			火星物资: 100*2,	
			金星物资: 100*2,	
			水星物资: 100*2,				
			智能辅助: 	10*2,						
		},
		unlock_cost:{			
			自我进化: 	100,	
			超合金: 4000,
			光能: 	60000,				
			科技: 	85000,			
		}
	},		
	 t7n2_31:{
		name: 			'机械工厂-中型导弹',
		unlock_name: 	'建立机械工厂-中型导弹',	
		bonus_loot:{	
			中型导弹: 	100*50,				
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:         13.4,
		cost:{								
			超合金: 	10*50,
			陨铁: 	3*50,			
			光能: 	30*50,					
			科技: 	70*50,					
		},
		unlock_cost:{	
			自我进化: 	50,	
			超合金: 2000,
			光能: 	30000,				
			科技: 	45000,							
		}
	},		
	 t7n2_31:{
		name: 			'机械工厂-中型导弹',
		unlock_name: 	'建立机械工厂-中型导弹【科技消耗减少】',	
		bonus_loot:{	
			中型导弹: 	100*50,				
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:         13.4,
		cost:{								
			超合金: 	10*50,
			陨铁: 	3*50,			
			光能: 	30*50,					
			科技: 	60*50,					
		},
		unlock_cost:{	
			自我进化: 	50,	
			超合金: 2000,
			光能: 	30000,				
			科技: 	45000,							
		}
	},		
	 t7n2_32:{
		name: 			'机械工厂-蓝色激光',
		unlock_name: 	'建立机械工厂-蓝色激光【科技消耗减少】',
		bonus_loot:{	
			蓝色激光: 	100*50,				
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:         13.4,
		cost:{							
			超合金: 	10*50,
			山铜: 	3*50,			
			光能: 	30*50,					
			科技: 	60*50,			
		},
		unlock_cost:{	
			自我进化: 	50,	
			超合金: 2000,
			光能: 	30000,				
			科技: 	45000,						
		}
	},		
	    t7n2_33:{
		name: 			'机械工厂-能量接收器',
		unlock_name: 	'建立机械工厂-能量接收器',	
		bonus_loot:{	
			能量接收器: 	100*500,		
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,				
		难度倍数:       13.4,
		cost:{		
			精金: 	4*500,
			光能: 	1*500,		
			科技: 	3*500,			
		},
		unlock_cost:{
			自我进化: 	50,	
			超合金: 2000,
			光能: 	30000,				
			科技: 	45000,					
		}
	},	
	    t7n2_34:{
		name: 			'机械工厂-太阳帆',
		unlock_name: 	'建立机械工厂-太阳帆',	
		bonus_loot:{	
			太阳帆: 	100*500,		
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,				
		难度倍数:       13.4,
		cost:{		
			秘银: 	4*500,
			光能: 	1*500,		
			科技: 	3*500,			
		},
		unlock_cost:{
			自我进化: 	50,	
			超合金: 2000,
			光能: 	30000,				
			科技: 	45000,					
		}
	},		
	    t7n2_35:{
		name: 			'机械工厂-红色激光',
		unlock_name: 	'建立机械工厂-红色激光【科技消耗减少】',	
		bonus_loot:{	
			红色激光: 	100*250,		
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,				
		难度倍数:       13.4,
		cost:{		
			魂钢: 	15*250,
			光能: 	4*250,		
			科技: 	10*250,			
		},
		unlock_cost:{
			自我进化: 	50,	
			超合金: 2000,
			光能: 	30000,				
			科技: 	45000,					
		}
	},	
	    t7n2_36:{
		name: 			'机械工厂-小型导弹',
		unlock_name: 	'建立机械工厂-小型导弹【科技消耗减少】',	
		bonus_loot:{	
			小型导弹: 	100*250,		
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,				
		难度倍数:       13.4,
		cost:{		
			玄铁: 	15*250,
			光能: 	4*250,		
			科技: 	10*250,			
		},
		unlock_cost:{
			自我进化: 	50,	
			超合金: 2000,
			光能: 	30000,				
			科技: 	45000,					
		}
	},		
	    t7n2_37:{
		name: 			'机械-智能发射中心',
		unlock_name: 	'建立智能发射中心【不消耗光能】',	
		bonus_loot:{	
			戴森云: 100000,					
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'发射',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,				
		难度倍数:       13.4,
		cost:{				
			太阳帆: 1000,		
			智能辅助: 	5,	    		
		},
		unlock_cost:{	
			自我进化: 	100,	
			超合金: 4000,
			光能: 	60000,				
			科技: 	85000,	
		}
	},		
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	    t7n2_15:{
		name: 			'合成三星金属物资包',
		unlock_name: 	'合成三星金属物资包',	
		bonus_loot:{	
			三星金属包: 	100,		
		},			
		chance: 		100,
		skill: 			'合成',
		action_name: 		'合成',
		fail_text: 		'什么都没找到',
	    passive_factor: 	1000000,				
		难度倍数:        6.2,
		cost:{	
			殖民地科技包: 	1,				
			火星物资: 	500,
			金星物资: 	500,
			水星物资: 	500,			
		},
		unlock_cost:{
			殖民地科技包: 	80,				
		}
	},	
	    t7n2_16:{
		name: 			'开启三星金属物资包',
		unlock_name: 	'开启三星金属物资包',	
		bonus_loot:{	
			精金: 	444*17,	
			玄铁: 	444*17,	
			魂钢: 	444*17,
			秘银: 	666*17,			
			钛铁:   222*17,		
			山铜:   222*17,			
			陨铁:   222*17,			
		},			
		chance: 		100,
		skill: 			'合成',
		action_name: 		'合成',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,				
		难度倍数:        0.4,
		cost:{				
			三星金属包: 	1,					
		},
		unlock_cost:{
			殖民地科技包: 	20,				
		}
	},		
	    t7n2_17:{
		name: 			'大型工厂-能量接收器',
		unlock_name: 	'大型工厂-能量接收器【批量生产*50减少一半光能消耗】',	
		bonus_loot:{	
			能量接收器: 	100*50,		
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,				
		难度倍数:       13.4,
		cost:{		
			精金: 	4*50,
			光能: 	1*50,		
			科技: 	3*50,			
		},
		unlock_cost:{
			殖民地科技包: 	200,		
			超合金: 	200,
			光能: 	2000,		
			科技: 	8000,					
		}
	},	
	    t7n2_18:{
		name: 			'大型工厂-太阳帆',
		unlock_name: 	'大型工厂-太阳帆【批量生产*50减少一半光能消耗】',	
		bonus_loot:{	
			太阳帆: 	100*50,		
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,				
		难度倍数:       13.4,
		cost:{		
			秘银: 	4*50,
			光能: 	1*50,		
			科技: 	3*50,			
		},
		unlock_cost:{
			殖民地科技包: 	300,		
			超合金: 	300,
			光能: 	3000,		
			科技: 	12000,					
		}
	},		
	    t7n2_19:{
		name: 			'大型工厂-红色激光',
		unlock_name: 	'大型工厂-红色激光【批量生产*25减少一半光能消耗】',	
		bonus_loot:{	
			红色激光: 	100*25,		
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,				
		难度倍数:       27.8,
		cost:{		
			魂钢: 	15*25,
			光能: 	4*25,		
			科技: 	13*25,			
		},
		unlock_cost:{
			殖民地科技包: 	400,		
			超合金: 	400,
			光能: 	4000,		
			科技: 	16000,					
		}
	},	
	    t7n2_20:{
		name: 			'大型工厂-小型导弹',
		unlock_name: 	'大型工厂-小型导弹【批量生产*25减少一半光能消耗】',	
		bonus_loot:{	
			小型导弹: 	100*25,		
		},			
		chance: 		100,
		skill: 			'研究站',
		action_name: 		'制作',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,				
		难度倍数:       27.8,
		cost:{		
			玄铁: 	15*25,
			光能: 	4*25,		
			科技: 	13*25,			
		},
		unlock_cost:{
			殖民地科技包: 	400,		
			超合金: 	400,
			光能: 	4000,		
			科技: 	16000,					
		}
	},	
	 t7n2_21:{
		name: 			'古老的传说',
		unlock_name: 	'？？？？？？？？',
		bonus_loot:{	
            古老的传说: 	100,			
		},			
		chance: 		100,
		skill: 			'传说',
		action_name: 		'传说',
		fail_text: 		'？？？',
	    passive_factor: 	10000000000,				
		难度倍数:        1,
		cost:{	
			月球消息2: 	200,			
            火星消息2: 	200,
            水星消息2: 	200,
            金星消息2: 	200,			
		},
		unlock_cost:{	
			月球消息3: 	10,					
		}
	},		
	 t7n2_22:{
		name: 			'太阳号【3W评分100S槽20M槽5L槽战列级】',
		unlock_name: 	'？？？？？？？？',
		bonus_loot:{	
            太阳号: 	100,			
		},			
		chance: 		100,
		skill: 			'传说',
		action_name: 		'建造',
		fail_text: 		'？？？',
	    passive_factor: 	10000000000,				
		难度倍数:        20,
		cost:{	
			火星领主核心: 	1,			
            金星领主核心: 	1,
            水星领主核心: 	1,
            中将: 	5,	
            少将: 	50,	
            驾驶员: 	2000,				
            超合金: 	500,
            光能: 	10000,				
            科技: 	20000,			
		},
		unlock_cost:{	
			月球消息3: 	10,		
			古老的传说: 	1,					
		}
	},		
	 t7n2_23:{
		name: 			'死亡激光【L槽武器800分】',
		unlock_name: 	'？？？？？？？？',
		bonus_loot:{	
            死亡激光: 	100,			
		},			
		chance: 		100,
		skill: 			'传说',
		action_name: 		'寻找',
		fail_text: 		'？？？',
	    passive_factor: 	10000000000,				
		难度倍数:        20,
		cost:{			
            火星消息2: 	100,
            水星消息2: 	100,
            金星消息2: 	100,			
		},
		unlock_cost:{
			月球消息3: 	10,					
			古老的传说: 	1,					
		}
	},		
	
	
	
	
	
	
	
	
	//===============T7火星=======================================		
	    t7n3_01:{
		name: 			'火星太空市场-打包物资【售卖产品】',
		unlock_name: 	'建立火星太空市场-打包物资【售卖产品】',	
		bonus_loot:{	
			货物: 	100,		
		},			
		chance: 		100,
		skill: 			'殖民地物资',
		action_name: 		'打包',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,				
		难度倍数:        6.2,
		cost:{			
			火星物资: 	1500,
			集装箱:  10,				
		},
		unlock_cost:{						
			火星货运: 	1,			
			集装箱: 	100,
			市民: 	200,					
			合金板: 	20,		
			光能: 	50,					
			火星领土: 	250,
			科技: 	1000,				
		}
	},		

	    t7n4_01:{
		name: 			'金星太空市场-打包物资【售卖产品】',
		unlock_name: 	'建立金星太空市场-打包物资【售卖产品】',	
		bonus_loot:{	
			货物: 	100,		
		},			
		chance: 		100,
		skill: 			'殖民地物资',
		action_name: 		'打包',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,				
		难度倍数:        6.2,
		cost:{			
			金星物资: 	1500,
			集装箱:  10,				
		},
		unlock_cost:{						
			金星货运: 	1,			
			集装箱: 	100,
			市民: 	200,					
			合金板: 	20,		
			光能: 	50,					
			金星领土: 	250,
			科技: 	1000,			
		}
	},	
	    t7n5_01:{
		name: 			'水星太空市场-打包物资【售卖产品】',
		unlock_name: 	'建立水星太空市场-打包物资【售卖产品】',	
		bonus_loot:{	
			货物: 	100,		
		},			
		chance: 		100,
		skill: 			'殖民地物资',
		action_name: 		'打包',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,				
		难度倍数:        6.2,
		cost:{			
			水星物资: 	1500,
			集装箱:  10,				
		},
		unlock_cost:{	
			水星货运: 	1,			
			集装箱: 	100,
			市民: 	200,					
			合金板: 	20,		
			光能: 	50,					
			水星领土: 	250,
			科技: 	1000,			
		}
	},		
	
	
		 t7n3_02:{
		name: 			'合成星星物资包【火星】',
		unlock_name: 	'合成星星物资包【火星】',	
		bonus_loot:{	
			星星物资包: 	100,			
		},			 
		chance: 		100,
		skill: 			'殖民地物资',
		action_name: 		'收集',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,			
		难度倍数:        1.4,
		cost:{	
			火星物资: 10000,				
			星星之力: 1000,		
		},
		unlock_cost:{	
			星星之力: 1000,				
		}
	},		
		 t7n4_02:{
		name: 			'合成星星物资包【金星】',
		unlock_name: 	'合成星星物资包【金星】',	
		bonus_loot:{	
			星星物资包: 	100,			
		},			 
		chance: 		100,
		skill: 			'殖民地物资',
		action_name: 		'收集',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,			
		难度倍数:        1.4,
		cost:{	
			金星物资: 10000,				
			星星之力: 1000,		
		},
		unlock_cost:{	
			星星之力: 1000,				
		}
	},			
		 t7n5_02:{
		name: 			'合成星星物资包【水星】',
		unlock_name: 	'合成星星物资包【水星】',	
		bonus_loot:{	
			星星物资包: 	100,			
		},			 
		chance: 		100,
		skill: 			'殖民地物资',
		action_name: 		'收集',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,			
		难度倍数:        1.4,
		cost:{	
			水星物资: 10000,				
			星星之力: 1000,		
		},
		unlock_cost:{	
			星星之力: 1000,				
		}
	},			
	
	
	
	
	
	
	
	
	
	
	
	
		 t7n3_0:{
		name: 			'收集火星殖民地物资',
		unlock_name: 	'收集火星殖民地物资',	
		bonus_loot:{	
			市民: 	3333,		
			光能: 	1555,		
			科技: 	1555,
			生物细胞: 100,										
			精金: 	444,
			秘银: 	222,			
			山铜:   111,		
		},			 
		chance: 		100,
		skill: 			'殖民地物资',
		action_name: 		'收集',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,			
		难度倍数:        0.1,
		cost:{							
			火星物资: 30,		
		},
		unlock_cost:{		
		}
	},		
		 t7n4_0:{
		name: 			'收集金星殖民地物资',
		unlock_name: 	'收集金星殖民地物资',	
		bonus_loot:{	
			市民: 	3333,		
			光能: 	1555,		
			科技: 	1555,
			生物细胞: 100,										
			魂钢: 	444,
			秘银: 	222,			
			钛铁:   111,		
		},			 
		chance: 		100,
		skill: 			'殖民地物资',
		action_name: 		'收集',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,			
		难度倍数:        0.1,
		cost:{							
			金星物资: 30,		
		},
		unlock_cost:{		
		}
	},	
		 t7n5_0:{
		name: 			'收集水星殖民地物资',
		unlock_name: 	'收集水星殖民地物资',	
		bonus_loot:{	
			市民: 	3333,		
			光能: 	1555,		
			科技: 	1555,
			生物细胞: 100,										
			玄铁: 	444,
			秘银: 	222,			
			陨铁:   111,		
		},			 
		chance: 		100,
		skill: 			'殖民地物资',
		action_name: 		'收集',
		fail_text: 		'什么都没找到',
	    passive_factor: 	10000000,			
		难度倍数:        0.1,
		cost:{							
			水星物资: 30,		
		},
		unlock_cost:{		
		}
	},		
	 t7n3_1:{
		name: 			'前哨站居住地',
		unlock_name: 	'前哨站居住地',
		bonus_loot:{	
            火星员工: 	8800,		
		},			
		chance: 		100,
		skill: 			'火星',
		action_name: 		'训练',
		fail_text: 		'？？？',
	    passive_factor: 	1000000,				
		难度倍数:        1.4,
		cost:{		
			市民: 	88,			
			太空服: 	88,	
		},
		unlock_cost:{	
			物资: 	5,		
		}
	},		
	 t7n3_2:{
		name: 			'开拓火星',
		unlock_name: 	'开拓火星',
		bonus_loot:{			
            火星领土: 	6666,			
            精金: 	444,
            秘银: 	222,	
            山铜: 	111,	
            生物细胞: 	555,				
            火星员工: 	1111,
            武器: 	2222,			
		},			
		chance: 		100,
		skill: 			'火星',
		action_name: 		'开拓',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        1.4,
		cost:{		
			火星员工: 	100,			
			武器: 	100,	
			
		},
		unlock_cost:{	
			武器: 	10,		
			火星员工: 	10,					
			物资: 	10,		
		}
	},		
	 t7n3_3:{
		name: 			'建设火星居住地',
		unlock_name: 	'建设火星居住地',
		bonus_loot:{			
            火星居住地: 	100,					
		},			
		chance: 		100,
		skill: 			'火星',
		action_name: 		'建设',
		fail_text: 		'？？？',
	    passive_factor: 	1000000,				
		难度倍数:        2.8,
		cost:{		
			市民: 	200,					
			合金板: 	20,		
			光能: 	50,					
			火星领土: 	250,	
		},
		unlock_cost:{
			市民: 	200,					
			合金板: 	20,		
			光能: 	50,					
			火星领土: 	250,
			科技: 	1000,			
		}
	},		
	 t7n3_4:{
		name: 			'火星太空港口',
		unlock_name: 	'建设火星太空港口',
		bonus_loot:{			
            火星货运: 	100,					
		},			
		chance: 		100,
		skill: 			'火星',
		action_name: 		'建设',
		fail_text: 		'？？？',
	    passive_factor: 	1000000,				
		难度倍数:        2.8,
		cost:{		
			运载飞船: 	1,					
			集装箱: 	5,		
			光能: 	25,					
			火星领土: 	100,	
		},
		unlock_cost:{
			火星员工: 	100,				
			集装箱: 	5,		
			光能: 	25,					
			火星领土: 	100,
			科技: 	1500,				
		}
	},	
	 t7n3_5:{
		name: 			'大型航天基地',
		unlock_name: 	'建设大型航天基地',
		bonus_loot:{			
            驾驶员: 	19111,
            少将: 	100,			
		},			
		chance: 		100,
		skill: 			'火星',
		action_name: 		'训练',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        6.3,
		cost:{		
			市民: 	200,					
			合金板: 	50,		
			光能: 	150,					
			科技: 	200,
			山铜: 	2,			
		},
		unlock_cost:{
			山铜: 	2,				
			火星员工: 	200,					
			合金板: 	100,			
			火星领土: 	1000,				
			光能: 	500,					
			科技: 	3000,				
		}
	},		
	 t7n3_6:{
		name: 			'火星号【155评分3S槽护卫级】',
		unlock_name: 	'建设火星机场-火星号【155评分3S槽护卫级】',
		bonus_loot:{			
            火星号: 	100,			
		},			
		chance: 		100,
		skill: 			'火星',
		action_name: 		'建造',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        6.3,
		cost:{		
			山铜: 	10,			
			驾驶员: 	20,						
			光能: 	100,					
			科技: 	200,		
		},
		unlock_cost:{				
			火星员工: 	100,					
			合金板: 	50,			
			火星领土: 	500,				
			光能: 	250,					
			科技: 	4500,				
		}
	},		
	 t7n3_7:{
		name: 			'通讯雷达网络',
		unlock_name: 	'建设火星通讯雷达网络【开启探索火星】',
		bonus_loot:{	
            火星探测器:  100,	
            火星消息1: 	10,
            火星消息2: 	1,
		},			
		chance: 		100,
		skill: 			'火星',
		action_name: 		'制造',
		fail_text: 		'？？？',
	    passive_factor: 	1000000000,				
		难度倍数:        0.1,
		cost:{		
			山铜: 	1,	
			光能: 	10,	
			科技: 	10,				
		},
		unlock_cost:{				
			火星员工: 	200,					
			合金板: 	250,			
			火星领土: 	1000,				
			光能: 	2500,					
			科技: 	10000,				
		}
	},		
	 t7n3_8:{
		name: 			'搜集火星领主情报',
		unlock_name: 	'？？？？？？？？？？？',
		bonus_loot:{			
            火星领主情报: 	100,
		},			
		chance: 		100,
		skill: 			'火星',
		action_name: 		'制造',
		fail_text: 		'？？？',
	    passive_factor: 	1000000000,				
		难度倍数:        6.3,
		cost:{		
			火星探测器: 10,					
		},
		unlock_cost:{				
            火星消息1: 	500,			
		}
	},	
	 t7n3_9:{
		name: 			'分享火星消息1',
		unlock_name: 	'？？？？？？？？？？？',
		bonus_loot:{	
            火星消息2: 	100,			
		},			
		chance: 		100,
		skill: 			'火星',
		action_name: 		'分享',
		fail_text: 		'？？？',
	    passive_factor: 	1000000,				
		难度倍数:        1,
		cost:{								
			火星消息1: 	20,				
		},
		unlock_cost:{	
			火星消息1: 	100,					
		}
	},		
	 t7n3_10:{
		name: 			'研究火星领主核心',
		unlock_name: 	'？？？？？？？？？？？',
		bonus_loot:{			
           科技: 	1000000,
           龙锭: 	500,
		
		},			
		chance: 		100,
		skill: 			'火星',
		action_name: 		'研究',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        6.3,
		cost:{		
			火星领主核心: 	1,								
		},
		unlock_cost:{				
            火星消息2: 	300,			
		}
	},	
	 t7n3_11:{
		name: 			'火星军事学院【驾驶员】',
		unlock_name: 	'建设火星军事学院【驾驶员】【不需要科技即可运作】',
		bonus_loot:{			
            驾驶员: 180000,
            少将: 	1000,				
		},			
		chance: 		100,
		skill: 			'火星',
		action_name: 		'训练',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        6.3,
		cost:{		
			市民: 200*10,					
			合金板: 50*10,		
			光能: 	150*10,			
			山铜: 	40,				
		},
		unlock_cost:{	
			火星领主核心: 	1,	
            龙锭: 	2,				
			火星员工: 	1800,					
			超合金: 	350,			
			火星领土: 	8000,				
			光能: 	17000,					
			殖民地科技包: 	800,		
		}
	},		
	 t7n3_12:{
		name: 			'火星实战训练学院【军官】',
		unlock_name: 	'建设火星实战训练学院【军官】',
		bonus_loot:{		
            少将: 	1000,
            中将: 	100,			
		},			
		chance: 		100,
		skill: 			'火星',
		action_name: 		'训练',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        13.4,
		cost:{		
			驾驶员: 200,	
			超合金: 60,	
			光能: 	2000,					
		},
		unlock_cost:{	
			火星领主核心: 	2,	
            龙锭: 	5,				
			火星员工: 	2500,					
			超合金: 	650,			
			火星领土: 	18000,				
			光能: 	35000,					
			殖民地科技包: 	1800,		
		}
	},		
	
	
	
	
	
	
	
	//===============T7金星=======================================	
	
	 t7n4_1:{
		name: 			'前哨站居住地',
		unlock_name: 	'前哨站居住地',
		bonus_loot:{	
            金星员工: 	8800,		
		},			
		chance: 		100,
		skill: 			'金星',
		action_name: 		'训练',
		fail_text: 		'？？？',
	    passive_factor: 	1000000,				
		难度倍数:        1.4,
		cost:{		
			市民: 	88,			
			太空服: 	88,	
		},
		unlock_cost:{	
			物资: 	5,		
		}
	},		
	 t7n4_2:{
		name: 			'开拓金星',
		unlock_name: 	'开拓金星',
		bonus_loot:{			
            金星领土: 	6666,			
            魂钢: 	444,
            秘银: 	222,	
            钛铁: 	111,	
            生物细胞: 	555,				
            金星员工: 	1111,
            武器: 	2222,			
		},			
		chance: 		100,
		skill: 			'金星',
		action_name: 		'开拓',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        1.4,
		cost:{		
			金星员工: 	100,			
			武器: 	100,	
			
		},
		unlock_cost:{	
			武器: 	10,		
			金星员工: 	10,					
			物资: 	10,		
		}
	},		
	 t7n4_3:{
		name: 			'建设金星居住地',
		unlock_name: 	'建设金星居住地',
		bonus_loot:{			
            金星居住地: 	100,					
		},			
		chance: 		100,
		skill: 			'金星',
		action_name: 		'建设',
		fail_text: 		'？？？',
	    passive_factor: 	1000000,				
		难度倍数:        2.8,
		cost:{		
			市民: 	200,					
			合金板: 	20,		
			光能: 	50,					
			金星领土: 	250,	
		},
		unlock_cost:{
			市民: 	200,					
			合金板: 	20,		
			光能: 	50,					
			金星领土: 	250,
			科技: 	1000,			
		}
	},		
	 t7n4_4:{
		name: 			'金星太空港口',
		unlock_name: 	'建设金星太空港口',
		bonus_loot:{			
            金星货运: 	100,					
		},			
		chance: 		100,
		skill: 			'金星',
		action_name: 		'建设',
		fail_text: 		'？？？',
	    passive_factor: 	1000000,				
		难度倍数:        2.8,
		cost:{		
			运载飞船: 	1,					
			集装箱: 	5,		
			光能: 	25,					
			金星领土: 	100,	
		},
		unlock_cost:{
			金星员工: 	100,				
			集装箱: 	5,		
			光能: 	25,					
			金星领土: 	100,
			科技: 	1500,				
		}
	},		
	 t7n4_5:{
		name: 			'金星巨型熔炉',
		unlock_name: 	'建设金星巨型熔炉',
		bonus_loot:{			
            合金板: 	20000,		
		},			
		chance: 		100,
		skill: 			'金星',
		action_name: 		'熔炼',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        6.3,
		cost:{		
			秘银: 	30,		
			玄铁: 	30,				
			精金: 	30,		
			魂钢: 	30,	
			光能: 	300,					
			钛铁: 	2,			
		},
		unlock_cost:{
			金星员工: 	200,					
			合金板: 	100,
			金星领土: 	1000,				
			光能: 	500,					
			科技: 	3000,				
		}
	},		
	 t7n4_6:{
		name: 			'金星号【100评分1M槽护卫级】',
		unlock_name: 	'建设金星机场-金星号【100评分1M槽护卫级】',
		bonus_loot:{			
            金星号: 	100,				
		},			
		chance: 		100,
		skill: 			'金星',
		action_name: 		'建造',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        6.3,
		cost:{		
			钛铁: 	5,			
			驾驶员: 	20,						
			光能: 	90,					
			科技: 	220,		
		},
		unlock_cost:{				
			金星员工: 	100,					
			合金板: 	50,			
			金星领土: 	500,				
			光能: 	250,					
			科技: 	4500,				
		}
	},		
	 t7n4_7:{
		name: 			'通讯雷达网络',
		unlock_name: 	'建设金星通讯雷达网络【开启探索金星】',
		bonus_loot:{	
            金星探测器:  100,	
            金星消息1: 	10,
            金星消息2: 	1,
		},			
		chance: 		100,
		skill: 			'金星',
		action_name: 		'制造',
		fail_text: 		'？？？',
	    passive_factor: 	1000000000,				
		难度倍数:        0.1,
		cost:{		
			钛铁: 	1,	
			光能: 	10,	
			科技: 	10,				
		},
		unlock_cost:{				
			金星员工: 	200,					
			合金板: 	250,			
			金星领土: 	1000,				
			光能: 	2500,					
			科技: 	10000,				
		}
	},		
	 t7n4_8:{
		name: 			'搜集金星领主情报',
		unlock_name: 	'？？？？？？？？？？？',
		bonus_loot:{			
            金星领主情报: 	100,
		},			
		chance: 		100,
		skill: 			'金星',
		action_name: 		'制造',
		fail_text: 		'？？？',
	    passive_factor: 	1000000000,				
		难度倍数:        6.3,
		cost:{		
			金星探测器: 10,					
		},
		unlock_cost:{				
            金星消息1: 	500,			
		}
	},	
	 t7n4_9:{
		name: 			'分享金星消息1',
		unlock_name: 	'？？？？？？？？？？？',
		bonus_loot:{	
            金星消息2: 	100,			
		},			
		chance: 		100,
		skill: 			'金星',
		action_name: 		'分享',
		fail_text: 		'？？？',
	    passive_factor: 	1000000,				
		难度倍数:        1,
		cost:{								
			金星消息1: 	20,				
		},
		unlock_cost:{	
			金星消息1: 	100,					
		}
	},		
	 t7n4_10:{
		name: 			'研究金星领主核心',
		unlock_name: 	'？？？？？？？？？？？',
		bonus_loot:{			
            科技: 	5000000,
            龙锭: 	100,			
		
		},			
		chance: 		100,
		skill: 			'金星',
		action_name: 		'研究',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        6.3,
		cost:{		
			金星领主核心: 	1,								
		},
		unlock_cost:{				
            金星消息2: 	300,			
		}
	},		
	 t7n4_11:{
		name: 			'金星超合金熔炉【制作超合金】',
		unlock_name: 	'建设金星超合金熔炉【制作超合金】【不要光能即可运作】',
		bonus_loot:{			
            超合金: 	1111*27,
            龙锭: 	0.1,				
		},			
		chance: 		100,
		skill: 			'金星',
		action_name: 		'熔炼',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:         13.4,
		cost:{		
			钛铁: 	2*25,	
			合金板: 20*25,				
			科技: 	60*25,				
		},
		unlock_cost:{	
			金星领主核心: 	1,	
            龙锭: 	3,				
			金星员工: 	2000,					
			超合金: 	500,			
			金星领土: 	10000,				
			光能: 	20000,					
			殖民地科技包: 	1000,		
		}
	},			
	 t7n4_12:{
		name: 			'金星核心熔炉【制作合金板】',
		unlock_name: 	'建设金星核心熔炉【制作合金板】【不要钛铁即可运作】',
		bonus_loot:{			
            合金板: 	1111*111,
            龙锭: 	0.1,				
		},			
		chance: 		100,
		skill: 			'金星',
		action_name: 		'熔炼',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        6.3,
		cost:{		
			秘银: 	200,		
			玄铁: 	200,				
			精金: 	200,		
			魂钢: 	200,		
			光能: 1000,		
		},
		unlock_cost:{	
			金星领主核心: 	1,	
            龙锭: 	2,				
			金星员工: 	1000,					
			超合金: 	250,			
			金星领土: 	5000,				
			光能: 	10000,					
			殖民地科技包: 	500,		
		}
	},	
	
	
	
	
	
	
	
	
	//===============T7水星=======================================	
	
	 t7n5_1:{
		name: 			'前哨站居住地',
		unlock_name: 	'前哨站居住地',
		bonus_loot:{	
            水星员工: 	8800,		
		},			
		chance: 		100,
		skill: 			'水星',
		action_name: 		'训练',
		fail_text: 		'？？？',
	    passive_factor: 	1000000,				
		难度倍数:        1.4,
		cost:{		
			市民: 	88,			
			太空服: 	88,	
		},
		unlock_cost:{	
			物资: 	5,		
		}
	},		
	 t7n5_2:{
		name: 			'开拓水星',
		unlock_name: 	'开拓水星',
		bonus_loot:{			
            水星领土: 	6666,			
            玄铁: 	444,
            秘银: 	222,	
            陨铁: 	111,	
            生物细胞: 	555,				
            水星员工: 	1111,
            武器: 	2222,			
		},			
		chance: 		100,
		skill: 			'水星',
		action_name: 		'开拓',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        1.4,
		cost:{		
			水星员工: 	100,			
			武器: 	100,	
			
		},
		unlock_cost:{	
			武器: 	10,		
			水星员工: 	10,					
			物资: 	10,		
		}
	},		
	 t7n5_3:{
		name: 			'建设水星居住地',
		unlock_name: 	'建设水星居住地',
		bonus_loot:{			
            水星居住地: 	100,					
		},			
		chance: 		100,
		skill: 			'水星',
		action_name: 		'建设',
		fail_text: 		'？？？',
	    passive_factor: 	1000000,				
		难度倍数:        2.8,
		cost:{		
			市民: 	200,					
			合金板: 	20,		
			光能: 	50,					
			水星领土: 	250,	
		},
		unlock_cost:{
			市民: 	200,					
			合金板: 	20,		
			光能: 	50,					
			水星领土: 	250,
			科技: 	1000,			
		}
	},		
	 t7n5_4:{
		name: 			'水星太空港口',
		unlock_name: 	'建设水星太空港口',
		bonus_loot:{			
            水星货运: 	100,					
		},			
		chance: 		100,
		skill: 			'水星',
		action_name: 		'建设',
		fail_text: 		'？？？',
	    passive_factor: 	1000000,				
		难度倍数:        2.8,
		cost:{		
			运载飞船: 	1,					
			集装箱: 	5,		
			光能: 	25,					
			水星领土: 	100,	
		},
		unlock_cost:{
			水星员工: 	100,				
			集装箱: 	5,		
			光能: 	25,					
			水星领土: 	100,
			科技: 	1500,				
		}
	},		
	 t7n5_5:{
		name: 			'水星生物学院',
		unlock_name: 	'建设水星生物学院',
		bonus_loot:{			
            科技: 	133333,		
		},			
		chance: 		100,
		skill: 			'水星',
		action_name: 		'研究',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        6.3,
		cost:{		
			生物细胞: 50,
			光能: 250,		
		},
		unlock_cost:{
			水星员工: 	200,					
			合金板: 	100,
			水星领土: 	1000,				
			光能: 	500,					
			科技: 	3000,				
		}
	},		
	 t7n5_6:{
		name: 			'水星号【220评分0槽护卫级】',
		unlock_name: 	'建设水星机场-水星号【220评分0槽护卫级】',
		bonus_loot:{			
            水星号: 	100,				
		},			
		chance: 		100,
		skill: 			'水星',
		action_name: 		'建造',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        6.3,
		cost:{		
			陨铁: 	15,			
			驾驶员: 	60,						
			光能: 	80,					
			科技: 	120,		
		},
		unlock_cost:{				
			水星员工: 	100,					
			合金板: 	50,			
			水星领土: 	500,				
			光能: 	250,					
			科技: 	4500,				
		}
	},		
	 t7n5_7:{
		name: 			'通讯雷达网络',
		unlock_name: 	'建设水星通讯雷达网络【开启探索水星】',
		bonus_loot:{	
            水星探测器:  100,	
            水星消息1: 	10,
            水星消息2: 	1,
		},			
		chance: 		100,
		skill: 			'水星',
		action_name: 		'制造',
		fail_text: 		'？？？',
	    passive_factor: 	1000000000,				
		难度倍数:        0.1,
		cost:{		
			陨铁: 	1,	
			光能: 	10,	
			科技: 	10,				
		},
		unlock_cost:{				
			水星员工: 	200,					
			合金板: 	250,			
			水星领土: 	1000,				
			光能: 	2500,					
			科技: 	10000,				
		}
	},		
	 t7n5_8:{
		name: 			'搜集水星领主情报',
		unlock_name: 	'？？？？？？？？？？？',
		bonus_loot:{			
            水星领主情报: 	100,
		},			
		chance: 		100,
		skill: 			'水星',
		action_name: 		'制造',
		fail_text: 		'？？？',
	    passive_factor: 	1000000000,				
		难度倍数:        6.3,
		cost:{		
			水星探测器: 10,					
		},
		unlock_cost:{				
            水星消息1: 	500,			
		}
	},	
	 t7n5_9:{
		name: 			'分享水星消息1',
		unlock_name: 	'？？？？？？？？？？？',
		bonus_loot:{	
            水星消息2: 	100,			
		},			
		chance: 		100,
		skill: 			'水星',
		action_name: 		'分享',
		fail_text: 		'？？？',
	    passive_factor: 	1000000,				
		难度倍数:        1,
		cost:{								
			水星消息1: 	20,				
		},
		unlock_cost:{	
			水星消息1: 	100,					
		}
	},		
	 t7n5_10:{
		name: 			'研究水星领主核心',
		unlock_name: 	'？？？？？？？？？？？',
		bonus_loot:{			
           科技: 	1000000,
           龙锭: 	500,
		
		},			
		chance: 		100,
		skill: 			'水星',
		action_name: 		'研究',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        6.3,
		cost:{		
			水星领主核心: 	1,								
		},
		unlock_cost:{				
            水星消息2: 	300,			
		}
	},		
		 t7n5_11:{
		name: 			'水星大型轨道弹射中心',
		unlock_name: 	'建设水星大型轨道弹射中心【发射太阳帆】【发射不在失败光能消耗减半】',
		bonus_loot:{			
            戴森云: 	10000,				
		},			
		chance: 		100,
		skill: 			'水星',
		action_name: 		'发射',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        6.3,
		cost:{		
			太阳帆: 100,		
			光能: 500,		
		},
		unlock_cost:{	
			水星领主核心: 	1,	
            龙锭: 	3,				
			水星员工: 	2000,					
			超合金: 	500,			
			水星领土: 	10000,				
			光能: 	20000,					
			殖民地科技包: 	1000,		
		}
	},		
		 t7n5_12:{
		name: 			'水星殖民地科研中心',
		unlock_name: 	'建设水星殖民地科研中心【殖民地科技包】',
		bonus_loot:{			
            殖民地科技包: 	11111,				
		},			
		chance: 		100,
		skill: 			'水星',
		action_name: 		'研究',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:         13.4,
		cost:{		
			火星物资: 100,	
			金星物资: 100,	
			水星物资: 100,				
			科技: 	10000,			
		},
		unlock_cost:{	
			水星领主核心: 	1,	
            龙锭: 	1,				
			水星员工: 	500,					
			超合金: 	100,			
			水星领土: 	5000,				
			光能: 	8000,					
			殖民地科技包: 	500,		
		}
	},		
	
	
	
	//==========================t8=====================
	
	
		t8n1_1:{
		name: 			'开图用位置',
		unlock_name: 	'开图用位置',
		bonus_loot:{			
            布沙克消息1: 	1,	
            以太风消息1: 	1,	
            泽尔甘消息1: 	1,	
            达拉泽消息1: 	1,	
            银河系传说1: 	1,					
		},			
		chance: 		100,
		skill: 			'这个位置没产出',
		action_name: 		'这个位置没产出',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:         13123123,
		cost:{					
			殖民舰队: 	1,			
		},
		unlock_cost:{		
		}
	},			
		t8n1_2:{
		name: 			'外星科技研究学院',
		unlock_name: 	'建立外星科技研究学院',
		bonus_loot:{			
            科技: 	33333,				
			秘银: 	16,		
			玄铁: 	25,				
			精金: 	40,		
			魂钢: 	25,	
            星座之力: 	10,				
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'研究',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:         1.4,
		cost:{					
			飞船残骸1: 	1,	
			光能: 	50,				
		},
		unlock_cost:{			
			少将: 	10,					
			超合金: 1250,						
			光能: 	20000,				
			科技: 	40000,			
		}
	},		
	
		t8n1_3:{
		name: 			'外星科技研究学院【布沙克】',
		unlock_name: 	'建立外星科技研究学院【布沙克】',
		bonus_loot:{			
            科技: 	20000,	
			能源之核: 	50,								
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'研究',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:         1.4,
		cost:{					
			飞船残骸2: 	1,	
			光能: 	50,				
		},
		unlock_cost:{	
			布沙克消息1: 50,			
			少将: 	10,					
			超合金: 1250,						
			光能: 	2000,				
			科技: 	40000,			
		}
	},		
	
		t8n1_4:{
		name: 			'外星科技研究学院【以太风】',
		unlock_name: 	'建立外星科技研究学院【以太风】',
		bonus_loot:{			
            科技: 	20000,	
			以太矿锭: 	50,								
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'研究',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:         1.4,
		cost:{					
			飞船残骸3: 	1,	
			光能: 	50,				
		},
		unlock_cost:{	
			以太风消息1: 50,			
			少将: 	10,					
			超合金: 1250,						
			光能: 	2000,				
			科技: 	40000,			
		}
	},		
	
	
	t8n1_5:{
		name: 			'外星科技研究学院【泽尔甘】',
		unlock_name: 	'建立外星科技研究学院【泽尔甘】',
		bonus_loot:{			
            科技: 	20000,	
			生物组织: 	50,								
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'研究',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:         1.4,
		cost:{					
			飞船残骸4: 	1,	
			光能: 	50,				
		},
		unlock_cost:{	
			泽尔甘消息1: 50,			
			少将: 	10,					
			超合金: 1250,						
			光能: 	2000,				
			科技: 	40000,			
		}
	},		
	
	
	t8n1_6:{
		name: 			'外星科技研究学院【达拉泽】',
		unlock_name: 	'建立外星科技研究学院【达拉泽】',
		bonus_loot:{			
            科技: 	20000,	
			超能结晶: 	50,								
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'研究',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:         1.4,
		cost:{					
			飞船残骸5: 	1,	
			光能: 	50,				
		},
		unlock_cost:{	
			达拉泽消息1: 50,			
			少将: 	10,					
			超合金: 1250,						
			光能: 	2000,				
			科技: 	40000,			
		}
	},			
		t8n1_7:{
		name: 			'布沙克-大型导弹【800分L槽】',
		unlock_name: 	'？？？？？？？？？？？？',
		bonus_loot:{			
            大型导弹: 	100,								
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'制造',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:         6.2,
		cost:{					
			能源之核: 4,	
			超合金: 60,				
			光能: 	200,	
			科技: 	300,  			
		},
		unlock_cost:{	
			布沙克消息1: 100,					
		}
	},		
		t8n1_8:{
		name: 			'达拉泽-紫色激光【800分L槽】',
		unlock_name: 	'？？？？？？？？？？？？',
		bonus_loot:{			
            紫色激光: 	100,								
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'制造',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:         6.2,
		cost:{					
			超能结晶: 4,	
			超合金: 60,				
			光能: 	200,	
			科技: 	300,  			
		},
		unlock_cost:{	
			达拉泽消息1: 100,					
		}
	},	
	 t8n1_9:{
		name: 			'火星保卫者【3700评分10S槽5M槽1L槽驱逐级】',
		unlock_name: 	'？？？？？？？？？？？？',
		bonus_loot:{			
            火星保卫者: 	100,			
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'建造',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        6.3,
		cost:{	
			中将: 	1,			
			少将: 	15,			
			驾驶员: 	300,				
			以太矿锭: 	5,				
			山铜: 	150,								
			光能: 	800,					
			科技: 	1200,	
		},
		unlock_cost:{				
			以太风消息1: 100,					
		}
	},		
	 t8n1_10:{
		name: 			'水星变异号【4000评分20S槽1L槽驱逐级】',
		unlock_name: 	'？？？？？？？？？？？？',
		bonus_loot:{			
            水星变异号: 	100,				
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'建造',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        6.3,
		cost:{	
			中将: 	1,			
			少将: 	10,			
			驾驶员: 	200,				
			生物组织: 	10,				
			陨铁: 	150,								
			光能: 	800,					
			科技: 	1200,		
		},
		unlock_cost:{				
			泽尔甘消息1: 100,					
		}
	},	
	 t8n1_11:{
		name: 			'以太风-巨构-星门',
		unlock_name: 	'？？？？？？？？？？？？',
		bonus_loot:{			
            星门模块: 	1000,			
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'建造',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        6.3,
		cost:{				
			以太矿锭: 	1,				
			山铜: 	40,								
			光能: 	10,					
			科技: 	20,	
		},
		unlock_cost:{				
			以太风消息1: 200,					
		}
	},		
	 t8n1_12:{
		name: 			'泽尔甘-吞噬矿物',
		unlock_name: 	'？？？？？？？？？？？？',
		bonus_loot:{			
            活体矿物: 	300,			
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'吞噬',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        6.3,
		cost:{	
			生物组织: 	1,									
			魂钢: 	1000,								
			玄铁: 	1000,					
			秘银: 	1000,	
		},
		unlock_cost:{				
			泽尔甘消息1: 200,					
		}
	},		
	 t8n1_13:{
		name: 			'泽尔甘-活体矿物培育',
		unlock_name: 	'建立活体矿物培育中心',
		bonus_loot:{			
            生物组织: 	1000,
            科技: 	1000000,			
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'培育',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        6.3,
		cost:{	
			活体矿物: 	1,
			陨铁: 	80,			
			市民: 	1000,
			光能: 	1000,			
		},
		unlock_cost:{			
			少将: 	20,					
			超合金: 2000,						
			光能: 	5000,				
			科技: 	10000,			
			泽尔甘消息1: 200,					
		}
	},		
	 t8n1_14:{
		name: 			'泽尔甘-活体矿物研究所',
		unlock_name: 	'建立活体矿物研究所',
		bonus_loot:{			
            生物科技瓶: 11111,			
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'研究',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        2.6,
		cost:{	
			活体矿物: 	1,
			殖民地科技包: 10,			
			光能: 	500,	
			科技: 	1000,			
		},
		unlock_cost:{			
			少将: 	30,					
			超合金: 2500,						
			光能: 	7500,				
			科技: 	15000,			
			泽尔甘消息1: 300,					
		}
	},				
	 t8n1_15:{
		name: 			'布沙克-贸易航线【能源之核】',
		unlock_name: 	'贸易航线【布沙克；你们帮我们消灭泽尔甘舰队我们就会拿出货物和你们交换！】',
		bonus_loot:{			
            能源之核: 13000,			
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'贸易',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        21,
		cost:{	
			生物组织: 	10,
			泽尔甘消息1: 10,			
			货物: 	10,			
		},
		unlock_cost:{					
			布沙克消息1: 200,					
		}
	},		
	 t8n1_16:{
		name: 			'达拉泽-贸易航线【超能结晶】',
		unlock_name: 	'贸易航线【达拉泽；你们帮我们消灭布沙克舰队我们就会拿出货物和你们交换！】',
		bonus_loot:{			
            超能结晶: 13000,			
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'贸易',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        21,
		cost:{	
			能源之核: 	10,
			布沙克消息1: 10,			
			货物: 	10,			
		},
		unlock_cost:{					
			达拉泽消息1: 200,					
		}
	},		
	 t8n1_17:{
		name: 			'以太风-银河系的传说',
		unlock_name: 	'以太风；帮我收集更多星座之力我会给你讲述银河系的传说【堕落帝国】并且可以和你交换货物',
		bonus_loot:{			
            以太矿锭: 1300,
            银河系传说1: 100,			
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'贸易',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        1,
		cost:{	
			星座之力: 	1,			
			货物: 	1,			
		},
		unlock_cost:{					
			以太风消息1: 200,					
		}
	},		
	 t8n1_18:{
		name: 			'达拉泽-死射【10000分XL槽】',
		unlock_name: 	'？？？？？？？？？？？？？？？？？',
		bonus_loot:{			
            死射: 100,			
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'建造',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        13.6,
		cost:{	
			星座之力: 	5,			
			超能结晶: 	80,	
			光能: 	2500,				
			科技: 	5000,				
		},
		unlock_cost:{	
			银河系传说1: 100,			
			达拉泽消息1: 500,					
		}
	},		
	 t8n1_19:{
		name: 			'布沙克-巨齿鲨舰【34000分12L槽战舰级】',
		unlock_name: 	'？？？？？？？？？？？？？？？？？',
		bonus_loot:{			
            巨齿鲨舰: 100,			
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'建造',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        13.6,
		cost:{	
			星座之力: 15,			  
			能源之核: 150,	
            中将: 	6,	
            少将: 	120,	
            驾驶员: 2000,				
            超合金: 800,
            光能: 	10000,				
            科技: 	20000,				
		},
		unlock_cost:{	
			银河系传说1: 100,			
			布沙克消息1: 500,					
		}
	},			
	 t8n1_20:{
		name: 			'以太风-巨构-戴森球',
		unlock_name: 	'？？？？？？？？？？？？',
		bonus_loot:{			
            戴森壳模块: 	1000,			
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'建造',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        6.3,
		cost:{				
			以太矿锭: 	1,				
			钛铁: 	40,								
			光能: 	10,					
			科技: 	20,	
		},
		unlock_cost:{				
			以太风消息1: 300,					
		}
	},	
	 t8n1_33:{
		name: 			'以太风-巨构-星环城',
		unlock_name: 	'？？？？？？？？？？？？',
		bonus_loot:{			
            星环城模块: 	1000,			
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'建造',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        6.3,
		cost:{							
			星之合金: 	1,								
			光能: 	10,					
			科技: 	20,	
		},
		unlock_cost:{	
			堕落之力: 1,			
			以太风消息1: 400,					
		}
	},		
	 t8n1_21:{
		name: 			'堕落帝国-回收星座舰残骸',
		unlock_name: 	'？？？？？？？？？？？？',
		bonus_loot:{			
            星座之力: 	2000,			
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'回收',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        6.3,
		cost:{				
			飞船残骸1: 	100,				
		},
		unlock_cost:{				
			银河系传说1: 50,					
		}
	},		
	 t8n1_22:{
		name: 			'堕落帝国-失控的堕落帝国战舰【危险！】',
		unlock_name: 	'？？？？？？？？？？？？',
		bonus_loot:{			
            失控战舰情报: 	100,				
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'领取',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        1.6,
		cost:{				
			货物: 	1,				
		},
		unlock_cost:{				
			银河系传说1: 50,					
		}
	},		
	 t8n1_23:{
		name: 			'堕落帝国-星之合金【星座之力】',
		unlock_name: 	'？？？？？？？？？？？？',
		bonus_loot:{			
            星之合金: 	100,					
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'合成',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        1.6,
		cost:{				
			星座之力: 	2,	
			以太矿锭: 	2,	
			超能结晶: 	2,				
			超合金: 	20,	
			光能: 	1000,	
			科技: 	1000,				
		},
		unlock_cost:{				
			银河系传说1: 50,					
		}
	},		
	 t8n1_24:{
		name: 			'堕落帝国-星之合金【堕落之力】',
		unlock_name: 	'？？？？？？？？？？？？',
		bonus_loot:{			
            星之合金: 	10000,					
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'合成',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        13.4,
		cost:{				
			堕落之力: 	1,	   
			以太矿锭: 	200,	
			超能结晶: 	200,				
			超合金: 	2000,	
			光能: 	100000,	
			科技: 	100000,				
		},
		unlock_cost:{				
			银河系传说1: 50,					
		}
	},		
	 t8n1_25:{
		name: 			'堕落帝国-帝国学院',
		unlock_name: 	'修建废弃的堕落帝国学院',
		bonus_loot:{			
            大将: 	100,					
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'训练',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        13.4,
		cost:{		
			中将: 	5,		
			星之合金: 	5,	
			光能: 	10000,	
			科技: 	10000,				
		},
		unlock_cost:{				
			堕落之力: 	1,
			能源之核: 	100,	
			超能结晶: 	100,				
			星之合金: 	100,	
			光能: 	200000,	
			科技: 	200000,						
		}
	},			
	 t8n1_26:{
		name: 			'外星实战学院【军官】',
		unlock_name: 	'建立外星实战学院',
		bonus_loot:{			
            中将: 	1000,			
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'训练',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        13.4,
		cost:{	
			少将: 100,	
			超合金: 200,	
			光能: 	5000,	
		},
		unlock_cost:{	
			龙锭: 5,		
			超合金: 2000,						
			光能: 	8000,	
			科技: 	10000,			
		}
	},		
	 t8n1_27:{
		name: 			'星座宫殿-地球征服者【奖杯每秒产生1点星星之力 ,每种奖杯只有一个生效！】',
		unlock_name: 	'修复星座宫殿-地球征服者【每秒产生1点星星之力只有一个奖杯有效】',
		bonus_loot:{			
            地球征服者: 	100,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'奖杯',
		fail_text: 		'？？？',
	    passive_factor: 	1000000000,				
		难度倍数:        26.4,
		cost:{	
			星之合金: 88,				
			战斗飞船: 	888,				
			运载飞船: 	888,	
	    	太阳帆: 	8888,				
			市民: 	88888,	
			光能: 	888888,	
			科技: 	888888,	
		},
		unlock_cost:{	
			堕落之力: 1,			
			银河系传说1: 100,		
			星之合金: 100,						
			光能: 	100000,	
			科技: 	100000,			
		}
	},	
	 t8n1_28:{
		name: 			'星座宫殿-月球征服者',
		unlock_name: 	'修复星座宫殿-月球征服者【每秒产生1点星星之力只有一个奖杯有效】',
		bonus_loot:{			
            月球征服者: 	100,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'奖杯',
		fail_text: 		'？？？',
	    passive_factor: 	1000000000,				
		难度倍数:        26.4,
		cost:{	
			黑龙战舰: 	88,			
			星之合金: 88,	
			能量接收器: 8888,				
			市民: 	88888,
			光能: 	888888,	
			科技: 	888888,	
		},
		unlock_cost:{			
			银河系传说1: 200,		
			星之合金: 200,						
			光能: 	200000,	
			科技: 	200000,			
		}
	},		
	 t8n1_29:{
		name: 			'星座宫殿-火星征服者',
		unlock_name: 	'修复星座宫殿-火星征服者【每秒产生1点星星之力只有一个奖杯有效】',
		bonus_loot:{			
            火星征服者: 	100,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'奖杯',
		fail_text: 		'？？？',
	    passive_factor: 	1000000000,				
		难度倍数:        26.4,
		cost:{	
			火星领主核心: 8,			
			星之合金: 88,				
			火星号: 	888,				
			山铜: 	8888,		
			市民: 	88888,
			驾驶员: 88888,	
			光能: 	888888,	
			科技: 	888888,	
		},
		unlock_cost:{	
			银河系传说1: 300,		
			星之合金: 300,						
			光能: 	300000,	
			科技: 	300000,			
		}
	},		
	 t8n1_30:{
		name: 			'星座宫殿-金星征服者',
		unlock_name: 	'修复星座宫殿-金星征服者【每秒产生1点星星之力只有一个奖杯有效】',
		bonus_loot:{			
            金星征服者: 	100,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'奖杯',
		fail_text: 		'？？？',
	    passive_factor: 	1000000000,				
		难度倍数:        26.4,
		cost:{	
			金星领主核心: 8,			
			星之合金: 88,				
			金星号: 	888,				
			钛铁: 	8888,		
			市民: 	88888,
			合金板: 88888,	
			光能: 	888888,	
			科技: 	888888,	
		},
		unlock_cost:{	
			银河系传说1: 300,		
			星之合金: 300,						
			光能: 	300000,	
			科技: 	300000,			
		}
	},		
	 t8n1_31:{
		name: 			'星座宫殿-水星征服者',
		unlock_name: 	'修复星座宫殿-水星征服者【每秒产生1点星星之力只有一个奖杯有效】',
		bonus_loot:{			
            水星征服者: 	100,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'奖杯',
		fail_text: 		'？？？',
	    passive_factor: 	1000000000,				
		难度倍数:        26.4,
		cost:{	
			水星领主核心: 8,
			星之合金: 88,				
			水星号: 	888,	
			小型导弹: 888,	
			红色激光: 888,				
			陨铁: 	8888,		
			市民: 	88888,			
			光能: 	888888,	
			科技: 	888888,	
		},
		unlock_cost:{	
			银河系传说1: 300,		
			星之合金: 300,						
			光能: 	300000,	
			科技: 	300000,			
		}
	},				
		 t8n1_48:{
		name: 			'星座宫殿-太阳系征服者',
		unlock_name: 	'修复星座宫殿-太阳系征服者【每秒产生1点星星之力只有一个奖杯有效】',
		bonus_loot:{			
            太阳系征服者: 	100,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'奖杯',
		fail_text: 		'？？？',
	    passive_factor: 	1000000000,				
		难度倍数:        26.4,
		cost:{	
			太阳号: 8,
			星之合金: 88,
			阳光号: 88,			
			物资: 	8888,	
			水星物资:   88888,	
			火星物资:   88888,				
			金星物资: 	88888,				
			光能: 	888888,	
			科技: 	888888,	
		},
		unlock_cost:{	
			银河系传说1: 400,		
			星之合金: 400,						
			光能: 	400000,	
			科技: 	400000,			
		}
	},	
		 t8n1_49:{
		name: 			'星座宫殿-以太风征服者',
		unlock_name: 	'修复星座宫殿-以太风征服者【每秒产生1点星星之力只有一个奖杯有效】',
		bonus_loot:{			
            以太风征服者: 	100,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'奖杯',
		fail_text: 		'？？？',
	    passive_factor: 	1000000000,				
		难度倍数:        26.4,
		cost:{	
			火星保卫者: 88,		
			星之合金: 88,			
			星门模块: 888,
			戴森壳模块: 888,			
			星环城模块: 888,			
			以太风消息1: 888,	
			以太矿锭:   8888,								
			光能: 	888888,	
			科技: 	888888,	
		},
		unlock_cost:{	
			以太风消息1: 5000,		
			星之合金: 500,						
			光能: 	500000,	
			科技: 	500000,			
		}
	},		
		 t8n1_50:{
		name: 			'星座宫殿-泽尔甘征服者',
		unlock_name: 	'修复星座宫殿-泽尔甘征服者【每秒产生1点星星之力只有一个奖杯有效】',
		bonus_loot:{			
            泽尔甘征服者: 	100,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'奖杯',
		fail_text: 		'？？？',
	    passive_factor: 	1000000000,				
		难度倍数:        26.4,
		cost:{	
			星之合金: 88,			
			水星变异号: 88,
			活体矿物: 888,					
			泽尔甘消息1: 888,
			生物科技瓶: 8888,				
			生物组织:   8888,								
			光能: 	888888,	
			科技: 	888888,	
		},
		unlock_cost:{	
			泽尔甘消息1: 5000,		
			星之合金: 500,						
			光能: 	500000,	
			科技: 	500000,			
		}
	},		
		 t8n1_51:{
		name: 			'星座宫殿-布沙克征服者',
		unlock_name: 	'修复星座宫殿-布沙克征服者【每秒产生1点星星之力只有一个奖杯有效】',
		bonus_loot:{			
            布沙克征服者: 	100,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'奖杯',
		fail_text: 		'？？？',
	    passive_factor: 	1000000000,				
		难度倍数:        26.4,
		cost:{	
			巨齿鲨舰: 8,			
			星之合金: 88,	
			大型导弹: 888,				
			布沙克消息1: 888,			
			能源之核:  8888,								
			光能: 	888888,	
			科技: 	888888,	
		},
		unlock_cost:{	
			布沙克消息1: 5000,		
			星之合金: 500,						
			光能: 	500000,	
			科技: 	500000,			
		}
	},		
		 t8n1_52:{
		name: 			'星座宫殿-达拉泽征服者',
		unlock_name: 	'修复星座宫殿-达拉泽征服者【每秒产生1点星星之力只有一个奖杯有效】',
		bonus_loot:{			
            达拉泽征服者: 	100,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'奖杯',
		fail_text: 		'？？？',
	    passive_factor: 	1000000000,				
		难度倍数:        26.4,
		cost:{			
			星之合金: 88,	
			死射: 88,				
			紫色激光: 888,				
			达拉泽消息1: 888,			
			超能结晶:  8888,								
			光能: 	888888,	
			科技: 	888888,	
		},
		unlock_cost:{	
			达拉泽消息1: 5000,		
			星之合金: 500,						
			光能: 	500000,	
			科技: 	500000,			
		}
	},		
		 t8n1_53:{
		name: 			'星宫观测站-绘制星图【解锁下个地点位置】',
		unlock_name: 	'修复星宫观测站-绘制星图【解锁下个地点位置】',
		bonus_loot:{			
            星图: 	100,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'绘制',
		fail_text: 		'？？？',
	    passive_factor: 	500000000,				
		难度倍数:        13.4,
		cost:{			
			星座之力: 300,										
			光能: 	100000,	
			科技: 	100000,	
		},
		unlock_cost:{	
			银河系传说1: 500,		
			星之合金: 500,						
			光能: 	500000,	
			科技: 	500000,			
		}
	},		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	 t8n1_32:{
		name: 			'星座宫殿-凝聚星座之力',
		unlock_name: 	'修复星座宫殿大厅【可以凝聚星座之力】',
		bonus_loot:{			
            星座之力: 	200,
            光能: 	200000,			
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'凝聚',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        1.4,
		cost:{		
			星星之力: 1000,	
			科技: 1000,				
		},
		unlock_cost:{	
			银河系传说1: 50,		
			星之合金: 50,						
			光能: 	50000,	
			科技: 	50000,			
		}
	},		
	 t8n1_40:{
		name: 			'星座宫殿-凝聚堕落之力',
		unlock_name: 	'修复星座宫殿大厅【可以凝聚堕落之力】',
		bonus_loot:{			
            堕落之力: 	100,
            光能: 	1000000,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'凝聚',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        1.4,
		cost:{		
            星座之力: 	50,		
			星星之力: 50000,						
		},
		unlock_cost:{	
			银河系传说1: 50,		
			星之合金: 50,						
			光能: 	50000,	
			科技: 	50000,			
		}
	},	
	
	 t8n1_34:{
		name: 			'堕落帝国-星球熔炉',
		unlock_name: 	'修建废弃的堕落帝国星球熔炉',
		bonus_loot:{			
            超合金: 333333,			
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'熔炼',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        30,
		cost:{			
			钛铁: 	1000,    
			秘银: 	1000,		
			玄铁: 	1000,				
			精金: 	1000,		
			魂钢: 	1000,		
			光能: 10000,
			科技: 10000,			
		},
		unlock_cost:{	
			堕落之力: 	1,
			能源之核: 	100,	
			超能结晶: 	100,				
			星之合金: 	100,	
			光能: 	200000,	
			科技: 	200000,			
		}
	},	

	 t8n1_35:{
		name: 			'宫殿抢夺-以太风星座宫殿',
		unlock_name: 	'宫殿抢夺-以太风星座宫殿',
		bonus_loot:{			
            以太风情报: 1000,			
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'收集',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        1,
		cost:{			
			星座之力: 	1,    				
		},
		unlock_cost:{	
			星星之力: 	1000,		
		}
	},	
	 t8n1_36:{
		name: 			'宫殿抢夺-泽尔甘星座宫殿',
		unlock_name: 	'宫殿抢夺-泽尔甘星座宫殿',
		bonus_loot:{			
            泽尔甘情报: 1000,			
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'收集',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        1,
		cost:{			
			星座之力: 	1,    				
		},
		unlock_cost:{	
			星星之力: 	1000,		
		}
	},	
	 t8n1_37:{
		name: 			'宫殿抢夺-布沙克星座宫殿',
		unlock_name: 	'宫殿抢夺-布沙克星座宫殿',
		bonus_loot:{			
            布沙克情报: 1000,			
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'收集',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        1,
		cost:{			
			星座之力: 	1,    				
		},
		unlock_cost:{	
			星星之力: 	1000,		
		}
	},		
	 t8n1_38:{
		name: 			'宫殿抢夺-达拉泽星座宫殿',
		unlock_name: 	'宫殿抢夺-达拉泽星座宫殿',
		bonus_loot:{			
            达拉泽情报: 1000,			
		},			
		chance: 		100,
		skill: 			'银河系',
		action_name: 		'收集',
		fail_text: 		'？？？',
	    passive_factor: 	10000000,				
		难度倍数:        1,
		cost:{			
			星座之力: 	1,    				
		},
		unlock_cost:{	
			星星之力: 	1000,		
		}
	},		
	 t8n1_39:{
		name: 			'星宫守卫者【88W评分888M槽88L槽8XL槽无畏舰】需要奖杯才能运作-每种奖杯支撑一艘船运行,',
		unlock_name: 	'？？？？？？',
		bonus_loot:{			
            星宫守卫者: 	100,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'奖杯',
		fail_text: 		'？？？',
	    passive_factor: 	1000000000,				
		难度倍数:        26.4,
		cost:{	
			大将: 8,
			星之合金: 88,				
			中将: 	88,	
			少将: 888,	
			超合金: 8888,				
			驾驶员: 88888,			
			光能: 	888888,	
			科技: 	888888,	
		},
		unlock_cost:{	
			银河系传说1: 88,			
			星星之力: 	8888,			
		}
	},		
	 t8n1_41:{
		name: 			'星星大厅-市民',
		unlock_name: 	'修复星星大厅-市民',
		bonus_loot:{			
            市民: 	25000000,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'开启',
		fail_text: 		'？？？',
	    passive_factor: 	100000000,				
		难度倍数:        6.4,
		cost:{	
			星星物资包: 1,
		},
		unlock_cost:{			
			星星之力: 	1000,			
		}
	},		
	 t8n1_42:{
		name: 			'星星大厅-山铜',
		unlock_name: 	'修复星星大厅-山铜',
		bonus_loot:{			
            山铜: 	100000,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'开启',
		fail_text: 		'？？？',
	    passive_factor: 	100000000,				
		难度倍数:        6.4,
		cost:{	
			星星物资包: 1,
		},
		unlock_cost:{			
			星星之力: 	1000,			
		}
	},		
	 t8n1_43:{
		name: 			'星星大厅-钛铁',
		unlock_name: 	'修复星星大厅-钛铁',
		bonus_loot:{			
            钛铁: 	100000,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'开启',
		fail_text: 		'？？？',
	    passive_factor: 	100000000,				
		难度倍数:        6.4,
		cost:{	
			星星物资包: 1,
		},
		unlock_cost:{			
			星星之力: 	1000,			
		}
	},		
	 t8n1_44:{
		name: 			'星星大厅-陨铁',
		unlock_name: 	'修复星星大厅-陨铁',
		bonus_loot:{			
            陨铁: 	100000,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'开启',
		fail_text: 		'？？？',
	    passive_factor: 	100000000,				
		难度倍数:        6.4,
		cost:{	
			星星物资包: 1,
		},
		unlock_cost:{			
			星星之力: 	1000,			
		}
	},		
	 t8n1_45:{
		name: 			'星宫大厅-驾驶员',
		unlock_name: 	'修复星宫大厅-驾驶员',
		bonus_loot:{			
            驾驶员: 	500000,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'训练',
		fail_text: 		'？？？',
	    passive_factor: 	100000000,				
		难度倍数:        6.4,
		cost:{	
			星之合金: 	2,			
			星宫之力: 	1000,			
			市民: 10000,						
		},
		unlock_cost:{			
			星宫之力: 	1000,			
		}
	},		
	 t8n1_46:{
		name: 			'星宫大厅-少将',
		unlock_name: 	'修复星宫大厅-少将',
		bonus_loot:{			
            少将: 	20100,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'训练',
		fail_text: 		'？？？',
	    passive_factor: 	100000000,				
		难度倍数:        6.4,
		cost:{			
			星之合金: 	4,		
			星宫之力: 10000,			
			驾驶员: 2000,						
		},
		unlock_cost:{			
			星宫之力: 	4000,			
		}
	},		
	 t8n1_47:{
		name: 			'星宫大厅-中将',
		unlock_name: 	'修复星宫大厅-中将',
		bonus_loot:{			
            中将: 	4010,					
		},			
		chance: 		100,
		skill: 			'奖杯',
		action_name: 		'训练',
		fail_text: 		'？？？',
	    passive_factor: 	100000000,				
		难度倍数:        6.4,
		cost:{			
			星之合金: 	8,				
			星宫之力: 60000,			
			少将: 200,						
		},
		unlock_cost:{			
			星宫之力: 	10000,			
		}
	},		
	
// =======================星系首都============================	
		t8n2_0:{
		name: 			'开图用位置',
		unlock_name: 	'开图用位置',
		bonus_loot:{			
            帝国硬币: 	0.01,
            银河系之力: 	0.01,
            白羊座之力: 	0.01,
            金牛座之力: 	0.01,			
            双子座之力: 	0.01,
            巨蟹座之力: 	0.01,
            狮子座之力: 	0.01,
            处女座之力: 	0.01,
            天秤座之力: 	0.01,
            天蝎座之力: 	0.01,
            射手座之力: 	0.01,
            魔蝎座之力: 	0.01,
            水瓶座之力: 	0.01,
            双鱼座之力: 	0.01,
            白羊座战舰: 	0.01,
            金牛座战舰: 	0.01,			
            双子座战舰: 	0.01,
            巨蟹座战舰: 	0.01,
            狮子座战舰: 	0.01,
            处女座战舰: 	0.01,
            天秤座战舰: 	0.01,
            天蝎座战舰: 	0.01,
            射手座战舰: 	0.01,
            魔蝎座战舰: 	0.01,
            水瓶座战舰: 	0.01,
            双鱼座战舰: 	0.01,


			
		},			
		chance: 		100,
		skill: 			'这个位置没产出',
		action_name: 		'这个位置没产出',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:         13123123,
		cost:{					
			殖民舰队: 	100000,			
		},
		unlock_cost:{		
		}
	},	
	
	
	
	
	
	 t8n2_1:{
		name: 			'首都资源仓舰队-山铜',
		unlock_name: 	'建设首都资源仓舰队-山铜',
		bonus_loot:{			
            山铜货运: 	100,			
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'组建',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        6.2,
		cost:{	
			中将: 1,			
			少将: 10,	      
			星之合金: 5,				
			集装箱: 200,	 			
			驾驶员: 800,			
			光能: 	4000,				
			科技: 	6000,						
		},
		unlock_cost:{			
			星宫之力: 	10000,			
		}
	},		
	 t8n2_2:{
		name: 			'首都资源仓舰队-陨铁',
		unlock_name: 	'建设首都资源仓舰队-陨铁',
		bonus_loot:{			
            陨铁货运: 	100,			
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'组建',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        6.2,
		cost:{	
			中将: 1,			
			少将: 10,	      
			星之合金: 5,				
			集装箱: 200,	 			
			驾驶员: 800,			
			光能: 	4000,				
			科技: 	6000,						
		},
		unlock_cost:{			
			星宫之力: 	10000,			
		}
	},		
	 t8n2_3:{
		name: 			'首都资源仓舰队-钛铁',
		unlock_name: 	'建设首都资源仓舰队-钛铁',
		bonus_loot:{			
            钛铁货运: 	100,			
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'组建',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        6.2,
		cost:{	
			中将: 1,			
			少将: 10,	      
			星之合金: 5,				
			集装箱: 200,	 			
			驾驶员: 800,			
			光能: 	4000,				
			科技: 	6000,						
		},
		unlock_cost:{			
			星宫之力: 	10000,			
		}
	},		
	 t8n2_4:{
		name: 			'首都资源仓舰队-超合金',
		unlock_name: 	'建设首都资源仓舰队-超合金',
		bonus_loot:{			
            超合金货运: 	100,			
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'组建',
		fail_text: 		'？？？',
	    passive_factor: 	50000000,				
		难度倍数:        6.2,
		cost:{	
			中将: 1,			
			少将: 10,	      
			星之合金: 5,				
			集装箱: 200,	 			
			驾驶员: 800,			
			光能: 	4000,				
			科技: 	6000,						
		},
		unlock_cost:{			
			星宫之力: 	10000,			
		}
	},		
	
	 t8n2_5:{
		name: 			'组建远征殖民舰队',
		unlock_name: 	'组建大型殖民舰队',
		bonus_loot:{			
            大型殖民舰队: 	100,			
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'组建',
		fail_text: 		'？？？',
	    passive_factor: 	500000000,				
		难度倍数:        13.4,
		cost:{	
			大将: 3,            
			中将: 40,					
			少将: 500,	       			
			驾驶员: 10000,
			星之合金: 80,			
			货物: 10,			
			市民: 1000000,			
			光能: 200000,				
			科技: 300000,						
		},
		unlock_cost:{			
			星宫之力: 	100000,			
		}
	},		
	  t8n2_6:{
		name: 			'首都港口-集装箱',
		unlock_name: 	'建立首都港口',	
		bonus_loot:{	
			集装箱: 800*100,	
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'制造',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,				
		难度倍数:        6.2,
		cost:{	
			合金板: 6*100,	
			光能:   4*100,				
			科技: 	10*100,					
		},
		unlock_cost:{			
			星之合金: 100,
			光能: 	200000,				
			科技: 	300000,			
		}
	},		
	  t8n2_7:{
		name: 			'首都执行员【每个执行员产生1点执行力】',
		unlock_name: 	'派遣执行员【每个执行员产生1点执行力】',	
		bonus_loot:{	
			执行员: 100,	
			执行力: 10000,				
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'派遣',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,				
		难度倍数:        6.2,
		cost:{	
			大将: 1,	
			星宫之力:  10000,							
		},
		unlock_cost:{				
			星宫之力: 	100000,				
		}
	},		
	  t8n2_8:{
		name: 			'首都机械客【每个机械客产生1点执行力】',
		unlock_name: 	'制造机械客【每个机械客产生1点执行力】',	
		bonus_loot:{	
			机械客: 100,	
			执行力: 10000,			
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'制造',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,				
		难度倍数:        6.2,
		cost:{	
			自我进化: 5,
			星之合金: 5,			
			星宫之力:  10000,
			
		},
		unlock_cost:{			
			星宫之力: 	100000,				
		}
	},		
	  t8n2_9:{
		name: 			'执政宫殿【执政宫殿产生4点执行力8W执行力上限】',
		unlock_name: 	'建设执政宫殿【每座执政宫殿产生4点执行力8W执行力上限】',	
		bonus_loot:{	
			执政宫殿: 100,			
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'建设',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,				
		难度倍数:        16.2,
		cost:{	
			执行员: 5,
			星之合金: 5,			
			光能: 	30000,				
			科技: 	30000,				
		},
		unlock_cost:{	
			执行员: 1,			
			星之合金: 100,			
			执行力: 1000,
			光能: 	200000,				
			科技: 	300000,				
		}
	},		
	  t8n2_10:{
		name: 			'机械议员团【机械议员产生5点执行力2W执行力上限】',
		unlock_name: 	'组建机械议员团【机械议员产生5点执行力2W执行力上限】',	
		bonus_loot:{	
			机械议员: 100,			
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'组建',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,				
		难度倍数:        16.2,
		cost:{	
			机械客: 5,
			星之合金: 5,			
			光能: 	30000,				
			科技: 	30000,				
		},
		unlock_cost:{	
			机械客: 1,			
			星之合金: 100,			
			执行力: 1000,
			光能: 	200000,				
			科技: 	300000,				
		}
	},		
	  t8n2_11:{
		name: 			'执政宫殿-作战指令【每个星区会支援20%舰队】',
		unlock_name: 	'作战指令【解锁巨构作战指令】',	
		bonus_loot:{	
			作战指令: 100,			
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'执行',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,				
		难度倍数:        0.2,
		cost:{	
			货物: 1,			
			执行力: 1000,				
		},
		unlock_cost:{			
			执行力: 500000,			
		}
	},		
	  t8n2_12:{
		name: 			'执政宫殿-打包货物',
		unlock_name: 	'打包货物【打包货物消耗减半】',	
		bonus_loot:{	
			货物: 300,			
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'打包',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,				
		难度倍数:        6.2,
		cost:{	
			火星物资: 1000,
			金星物资: 1000,	
			水星物资: 1000,				
			执行力: 30000,				
		},
		unlock_cost:{			
			执行力: 1000000,			
		}
	},			
	  t8n2_13:{
		name: 			'首都巨构通用模块',
		unlock_name: 	'首都巨构通用模块【开启对应工厂后可以进行巨构建造】',	
		bonus_loot:{	
			工厂模块: 1000,			
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'制造',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,				
		难度倍数:        6.2,
		cost:{	
         	货物: 1,				
			光能: 100,	
			科技: 200,				
		},
		unlock_cost:{			
			执行力: 1100000,			
		}
	},		
	  t8n2_14:{
		name: 			'工厂-太空鱼雷【800分L槽】',
		unlock_name: 	'开启巨构武器工厂【要先点进去一次然后巨构哪里开启】',	
		bonus_loot:{	
			太空鱼雷: 100,	
			武器零件包: 0,				
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'组装',
		fail_text: 		'什么都没找到',
	    passive_factor: 	500000000,				
		难度倍数:        30,
		cost:{	
         	武器零件包: 8000,							
		},
		unlock_cost:{			
			执行力: 1200000,			
		}
	},		
	  t8n2_15:{
		name: 			'建设工厂仓库【每个仓库可以装1K武器零件包】',
		unlock_name: 	'建设工厂仓库【每个仓库可以装1K武器零件包】',	
		bonus_loot:{	
			零件包仓库: 100,			
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'建设',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,				
		难度倍数:        6.2,
		cost:{	
         	超合金: 100,				
			光能: 1000,	
			科技: 2000,							
		},
		unlock_cost:{			
			执行力: 500000,			
		}
	},		
	  t8n2_16:{
		name: 			'工厂-装甲鱼雷【10000分XL槽】',
		unlock_name: 	'开启巨构大型武器工厂【要先点进去一次然后巨构哪里开启】',	
		bonus_loot:{	
			装甲鱼雷: 100,	
			武器零件包: 0,				
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'组装',
		fail_text: 		'什么都没找到',
	    passive_factor: 	500000000,				
		难度倍数:        30,
		cost:{	
         	武器零件包: 100000,							
		},
		unlock_cost:{			
			执行力: 2000000,			
		}
	},	
	
	  t8n2_17:{
		name: 			'工厂-机械骨骼',
		unlock_name: 	'开启巨构机械工厂【要先点进去一次然后巨构哪里开启】',	
		bonus_loot:{	
			机械骨骼: 10000,	
			工厂能量: 0,				
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'组装',
		fail_text: 		'什么都没找到',
	    passive_factor: 	500000000,				
		难度倍数:        30,
		cost:{	
         	智能核心: 1,		
         	超合金: 20,				
         	工厂能量: 8000,							
		},
		unlock_cost:{			
			执行力: 1200000,			
		}
	},		
	  t8n2_18:{
		name: 			'建设机械装置【每个机械装置可以储存1K工厂能量】',
		unlock_name: 	'建设机械装置【每个机械装置可以储存1K工厂能量】',	
		bonus_loot:{	
			机械装置: 100,			
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'建设',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,				
		难度倍数:        6.2,
		cost:{	
         	以太矿锭: 1,		
         	智能核心: 5,				
			光能: 1000,	
			科技: 2000,							
		},
		unlock_cost:{			
			执行力: 500000,			
		}
	},		
	  t8n2_19:{
		name: 			'机械-机械劳工',
		unlock_name: 	'机械-机械劳工',	
		bonus_loot:{	
			机械劳工: 100,	
			工厂能量: 0,				
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'组装',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,				
		难度倍数:        0.1,
		cost:{	
         	智能核心: 1,		
         	机械骨骼: 5,				
         	工厂能量: 500,							
		},
		unlock_cost:{			
			执行力: 1500000,			
		}
	},		
	  t8n2_20:{
		name: 			'机械-智能人',
		unlock_name: 	'机械-智能人',	
		bonus_loot:{	
			智能人: 100,	
			工厂能量: 0,				
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'组装',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,				
		难度倍数:        1,
		cost:{	
         	智能核心: 10,			
         	机械劳工: 1,		
         	机械骨骼: 5,				
         	工厂能量: 1500,							
		},
		unlock_cost:{			
			执行力: 2000000,			
		}
	},		
	  t8n2_21:{
		name: 			'机械-机械领袖',
		unlock_name: 	'机械-机械领袖开启巨构大机械工厂【要先点进去一次然后巨构哪里开启】',	
		bonus_loot:{	
			机械领袖: 100,	
			工厂能量: 0,				
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'组装',
		fail_text: 		'什么都没找到',
	    passive_factor: 	500000000,				
		难度倍数:        30,
		cost:{	
         	自我进化: 1,	
         	智能核心: 100,				
         	智能人: 1,	
         	机械骨骼: 50,				
         	工厂能量: 10000,	 						
		},
		unlock_cost:{			
			执行力: 2500000,			
		}
	},	
	
	  t8n2_22:{
		name: 			'鱼雷舰群【300分1L槽护卫舰】一个群体为100艘',
		unlock_name: 	'鱼雷舰群【300分1L槽护卫舰】一个群体为100艘',	
		bonus_loot:{	
			鱼雷舰: 10000,					
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'组建',
		fail_text: 		'什么都没找到',
	    passive_factor: 	500000000,				
		难度倍数:        30,
		cost:{	
         	机械领袖: 1,	
         	智能辅助: 100,
         	超合金: 300,	
         	工厂能量: 30000,				
		},
		unlock_cost:{			
			执行力: 3000000,			
		}
	},		
	
	  t8n2_23:{
		name: 			'机械工厂-通用模块',
		unlock_name: 	'机械-通用模块【批量建造之消耗工厂能量】',	
		bonus_loot:{	
			工厂模块: 1000*50,			
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'制造',
		fail_text: 		'什么都没找到',
	    passive_factor: 	50000000,				
		难度倍数:        6.2,
		cost:{	
         	货物: 1*50,				
			工厂能量: 300*50,					
		},
		unlock_cost:{			
			执行力: 2000000,			
		}
	},	
	
	
	  t8n2_24:{
		name: 			'星战指挥部【开启星战提供2M执行力上限】',
		unlock_name: 	'星战指挥部【开启星战界面提供2M执行力上限】',	
		bonus_loot:{
			星战指挥部: 100,			
			熔岩核心: 0	,
			剧毒核心: 0,	
			寒冰核心: 0,				
			星核之力: 0,	
			星尘之力: 0,	
			盖亚之力: 0,

			黄矮星之力: 0,	
			红巨星之力: 0,	
			白矮星之力: 0,				
			紫巨星之力: 0,	
			蓝巨星之力: 0,	
			脉冲星之力: 0,	
			中子星之力: 0,	
			黑洞之力: 0,				
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'建设',
		fail_text: 		'什么都没找到',
	    passive_factor: 	5000000000,				
		难度倍数:        36.2,
		cost:{	
         	帝国硬币: 1,								
		},
		unlock_cost:{	
		
			执行力: 4000000,			
		}
	},		
	
	  t8n2_25:{
		name: 			'群星观测站【开启群星观测,需要消耗能源.】',
		unlock_name: 	'群星观测站【开启群星观测,需要消耗能源.】',	
		bonus_loot:{
			星星能源: 300,				
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'制作',
		fail_text: 		'什么都没找到',
	    passive_factor: 	500000000,				
		难度倍数:        6.2,
		cost:{	
			星星之力: 1000,
			超合金: 10,			
         	工厂能量: 10000,								
		},
		unlock_cost:{			
			执行力: 5000000,			
		}
	},		
	
	  t8n2_26:{
		name: 			'跳跃引擎装置【发动战争,需要跳跃引擎】',
		unlock_name: 	'跳跃引擎装置【发动战争,需要跳跃引擎】',	
		bonus_loot:{
			跳跃引擎装置: 300,				
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'制作',
		fail_text: 		'什么都没找到',
	    passive_factor: 	500000000,				
		难度倍数:        6.2,
		cost:{	
			星宫之力: 1000,
			超合金: 10,			
         	工厂能量: 10000,								
		},
		unlock_cost:{			
			执行力: 6000000,			
		}
	},	
	
	  t8n2_27:{
		name: 			'群星观测站-材料分析仪【分析材料获取均值】',
		unlock_name: 	'群星观测站-材料分析仪【分析材料获取均值】【一个就行】',	
		bonus_loot:{
			材料分析仪: 100,		
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'制作',
		fail_text: 		'什么都没找到',
	    passive_factor: 	5000000000,				
		难度倍数:        36.2,
		cost:{	
			精金: 	100000,	
			玄铁: 	100000,	
			魂钢: 	100000,
			秘银: 	100000,			
			钛铁:   10000,		
			山铜:   10000,			
			陨铁:   10000,									
		},
		unlock_cost:{			
			科技:   1000000,	
			光能:   1000000,			
		}
	},		
	
	  t8n2_28:{
		name: 			'群星观测站-战斗模拟器【模拟战斗胜率】',
		unlock_name: 	'群星观测站-战斗模拟器【模拟战斗胜率】【一个就行】',	
		bonus_loot:{
			战斗模拟器: 	100,	
			
		},			
		chance: 		100,
		skill: 			'星系首都',
		action_name: 		'制作',
		fail_text: 		'什么都没找到',
	    passive_factor: 	500000000,				
		难度倍数:        36.2,
		cost:{	
			精金: 	100000,	
			玄铁: 	100000,	
			魂钢: 	100000,
			秘银: 	100000,			
			钛铁:   10000,		
			山铜:   10000,			
			陨铁:   10000,	
								
		},
		unlock_cost:{			
			科技:   1000000,	
			光能:   1000000,			
		}
	},		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	pick_parsley:{
		name: 			'采摘西芹',
		unlock_name: 	'种植西芹',
		item_id: 		'parsley',
		chance: 		25,
		skill: 			'草药学',
		action_name: 		'采摘',
		fail_text: 		'pick',
		unlock_cost:{
			water:  	50,
		}
	},
	pick_mint:{
		name: 			'采摘薄荷',
		unlock_name: 	'种植薄荷',
		item_id: 		'mint',
		chance: 		25,
		skill: 			'草药学',
		action_name: 		'采摘',
		fail_text: 		'pick',
		unlock_cost:{
			water:  	50,
		}
	},
	pick_sage:{
		name: 			'采摘鼠尾草',
		unlock_name: 	'种植鼠尾草',
		item_id: 		'sage',
		chance: 		25,
		skill: 			'草药学',
		action_name: 		'采摘',
		fail_text: 		'pick',
		unlock_cost:{
			water:  	50,
		}
	},
	pick_rosemary:{
		name: 			'采摘迷迭香',
		unlock_name: 	'种植迷迭香',
		item_id: 		'rosemary',
		chance: 		25,
		skill: 			'草药学',
		action_name: 		'采摘',
		fail_text: 		'pick',
		unlock_cost:{
			water:  	50,
		}
	},
	look_for_herbs:{
		name: 			'采药',
		unlock_name: 	'寻找草药',
		item_id: 		'parsley',
		bonus_loot:{
			mint: 		50,
			sage: 		25,
			rosemary: 	12,
		},
		chance: 		25,
		skill: 			'草药学',
		action_name: 		'采摘',
		fail_text: 		'pick',
		unlock_cost:{
			grass:  	50,
		}
	},
	comb_the_beach:{
		name: 			'梳理海滩',
		bonus_loot:{
			sand: 		100,
			firewood: 	75,
			twine: 		10,
			plank: 		5
		},
		chance: 		25,
		skill: 			'采集',
		action_name: 		'梳理',
		fail_text: 		'comb',
	},
	scrounge_wrecks:{
		name: 			'搜寻沉船',
		unlock_name: 	'建造沙洲',
		bonus_loot:{
			firewood: 	100,
			nails: 		35,
			peasant: 	20,
			plank: 		10,
			cloth: 		10,
			barrel: 	2,
			crate: 		2,
		},
		chance: 		25,
		skill: 			'采集',
		action_name: 	'搜寻',
		fail_text: 		'scrounge',
		upgrade_item: 	'sand',
		unlock_cost:{
			sand:		100,
		}
	},
	build_ship:{
		name: 			'造船',
		unlock_name: 	'建造船坞',
		bonus_loot:{
			ship: 	100,
		},
		chance: 		25,
		skill: 			'制作',
		action_name: 	'建造',
		fail_text: 		'build',
		cost:{
			plank:		10,
			nails: 		20,
			twine: 		10,
			cloth: 		5,
			peasant: 	5,
		},
		unlock_cost:{
			plank:		10,
			nails: 		20,
			twine: 		10,
		}
	},
	build_fishing_ship:{
		name: 			'造渔船',
		unlock_name: 	'建渔场',
		bonus_loot:{
			fishing_ship: 	100,
		},
		chance: 		25,
		skill: 			'制作',
		action_name: 	'建造',
		fail_text: 		'build',
		cost:{
			ship:		1,
			fisherman: 	5,
		},
		unlock_cost:{
			plank:		10,
			nails: 		20,
			twine: 		10,
			fisherman: 	5,
		}
	},
	catch_seafish:{
		name: 			'派出渔船',
		unlock_name: 	'开始派遣渔船',
		bonus_loot:{
			salmon: 		100,
			eel: 			50,
		},
		progress_needed: 1,
		reward_factor: 	10,
		chance: 		25,
		skill: 			'捕鱼',
		action_name: 	'鱼',
		fail_text: 		'fail',
		upgrade_item: 	'fishing_ship',
		unlock_cost:{
			fishing_ship: 	1,
			barrel:  		5,
		}
	},
	ship_goods:{
		name: 			'装运货物',
		unlock_name: 	'建立货物运输系统',
		bonus_loot:{
			treasure: 	100,
		},
		chance: 		25,
		skill: 			'贸易',
		action_name: 	'船',
		fail_text: 		'ship',
		upgrade_item: 	'ship',
		cost:{
			supplies:	5,
		},
		unlock_cost:{
			ship:		1,
			supplies: 	5,
		}
	},
	import_tools:{
		name: 			'导入工具',
		unlock_name: 	'设置工具导入',
		bonus_loot:{
			axe: 		50,
			knife:		50,
			net: 		50,
			pickaxe: 	50,
			pitchfork: 	50,
			plow: 		50,
		},
		chance: 		25,
		skill: 			'贸易',
		action_name: 	'进口',
		fail_text: 		'import',
		upgrade_item: 	'ship',
		cost:{
		},
		unlock_cost:{
			ship:		1,
		}
	},
	import_goods:{
		name: 			'进口货物',
		unlock_name: 	'建立商品进口',
		bonus_loot:{
			lumber: 	50,
			stone: 		50,
			nails:		50,
			flour: 		25,
			iron: 		20,
			meat: 		15,
			cloth: 		10,
			supplies: 	5,
		},
		chance: 		25,
		skill: 			'贸易',
		action_name: 	'进口',
		fail_text: 		'import',
		upgrade_item: 	'ship',
		cost:{
		},
		unlock_cost:{
			ship:		1,
		}
	},
	boil_water:{
		name: 			'煮沸海水',
		unlock_name: 	'开始煮海水',
		bonus_loot:{
			water: 		100,
			salt: 		10,
		},
		
		chance: 		25,
		reward_factor: 	10,
		passive_factor: 1,
		skill: 			'烹饪',
		action_name: 	'煮',
		fail_text: 		'boil',
		upgrade_item: 	'firewood',
		cost:{
			firewood: 	10,
		},
		unlock_cost:{
			firewood:		100,
		}
	},
	comb_the_shore:{
		name: 			'梳理海岸',
		item_id: 		'water',
		bonus_loot:{
			firewood: 	75,
			twine: 		10,
			barrel: 	0.25
		},
		chance: 		25,
		skill: 			'采集',
		action_name: 		'梳理',
		fail_text: 		'comb',
	},
	save_swimmer:{
		name: 			'拯救游泳者',
		unlock_name: 	'造一只小木筏',
		item_id: 		'peasant',
		chance: 		20,
		skill: 			'游泳',
		action_name: 	'挽救',
		fail_text: 		'save',
		cost:{
			firewood: 		6
		},
		unlock_cost:{
			firewood:		25,
		}
	},
	craft_net:{
		name: 			'制作网',
		unlock_name: 	'学着打一些结',
		item_id: 		'net',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'制作',
		fail_text: 		'craft',
		cost:{
			twine: 		2
		},
		unlock_cost:{
			twine:		1,
		}
	},
	gather_water:{
		name: 			'收集水',
		item_id: 		'water',
		chance: 		25,
		skill: 			'采集',
		action_name: 		'收集',
		fail_text: 		'gather',
	},
	gather_sand:{
		name: 			'收集沙石',
		item_id: 		'sand',
		chance: 		25,
		skill: 			'采集',
		action_name: 		'收集',
		fail_text: 		'gather',
		unlock_cost:{
			water:  	50,
		}
	},
	gather_clay:{
		name: 			'挖粘土',
		unlock_name: 	'寻找粘土',
		item_id: 		'clay',
		bonus_loot: {
			sand: 		25,
			stone: 		10
		},
		chance: 		25,
		skill: 			'采矿',
		action_name: 		'挖掘',
		fail_text: 		'dig',
		unlock_cost:{
			water:  	50,
		}
	},
	catch_fish:{
		name: 			'捕鱼',
		unlock_name: 	'练习钓鱼',
		bonus_loot:{
			perch: 			40,
			trout: 			20,
			salmon: 		10,
			eel: 			5,
		},
		progress_needed: 1,
		chance: 		25,
		skill: 			'捕鱼',
		action_name: 	'鱼',
		fail_text: 		'fail',
		upgrade_item: 	'fisherman',
		unlock_cost:{
			net:  		1,
		}
	},
	roast_perch:{
		name: 			'烟熏鲈鱼',
		unlock_name: 	'练习熏制鲈鱼',
		item_id: 		'smoked_fish',
		chance: 		25,
		skill: 			'烹饪',
		action_name: 		'烹饪',
		fail_text: 		'cook',
		upgrade_item: 	'firewood',
		cost:{
			perch: 		5,
			firewood: 	5
		},
		unlock_cost:{
			perch:  		10,
			firewood: 		10
		}
	},
	grill_trout:{
		name: 			'烟熏鳟鱼',
		unlock_name: 	'练习熏制鳟鱼',
		item_id: 		'smoked_fish',
		chance: 		25,
		skill: 			'烹饪',
		action_name: 		'烹饪',
		fail_text: 		'cook',
		upgrade_item: 	'firewood',
		cost:{
			trout: 		3,
			firewood: 	5
		},
		unlock_cost:{
			trout:  		10,
			firewood: 		10
		}
	},
	
	cook_salmon:{
		name: 			'烟熏鲑鱼',
		unlock_name: 	'练习熏制鲑鱼',
		item_id: 		'smoked_fish',
		chance: 		25,
		skill: 			'烹饪',
		action_name: 		'烹饪',
		fail_text: 		'cook',
		upgrade_item: 	'firewood',
		cost:{
			salmon: 	2,
			firewood: 	2,
		},
		unlock_cost:{
			salmon:  		10,
			firewood: 		10,
		}
	},
	cook_eel:{
		name: 			'烟熏鳗鱼',
		unlock_name: 	'练习熏制鳗鱼',
		item_id: 		'smoked_fish',
		chance: 		25,
		reward_factor: 	1,
		skill: 			'烹饪',
		action_name: 		'烹饪',
		fail_text: 		'cook',
		upgrade_item: 	'firewood',
		cost:{
			eel: 		1,
			firewood: 	2,
		},
		unlock_cost:{
			eel:  			10,
			firewood: 		10,
		}
	},
	catch_perch:{
		name: 			'钓鲈鱼',
		item_id: 		'perch',
		chance: 		25,
		skill: 			'捕鱼',
		action_name: 		'鱼',
		fail_text: 		'fish',
		unlock_cost:{
			water:  	50,
		}
	},
	package_fish:{
		name: 			'包装鱼',
		unlock_name: 	'分类包装鱼',
		item_id: 		'supplies',
		chance: 		25,
		skill: 			'打包',
		action_name: 		'打包',
		fail_text: 		'pack',
		cost:{
			smoked_fish: 	5,
			barrel: 		1,
		},
		unlock_cost:{
			smoked_fish:  	10,
			barrel: 		3,
		}
	},
	pick_apples:{
		name: 			'摘苹果',
		unlock_name: 	'种些苹果树',
		item_id: 		'apple',
		chance: 		10,
		skill: 			'采集',
		action_name: 	'采集',
		fail_text: 		'pick',
		upgrade_item: 	'water',
		unlock_cost:{
			apple: 		10,
			water: 		100,
		}
	},
	chop_wood:{
		name: 			'收集小树',
		unlock_name: 	'找一些小树',
		item_id: 		'lumber',
		bonus_loot:{
			firewood: 	100,
			leaves: 	10,
			hardwood: 	0.01,
		},
		progress_needed: 	1,
		reward_factor: 		5,
		chance: 		5,
		skill: 			'伐木',
		action_name: 	'砍伐',
		fail_text: 		'chop',
	},
	chop_down_tree:{
		name: 			'砍树',
		unlock_name: 	'让伐木工人去工作',
		item_id: 		'lumber',
		bonus_loot:{
			firewood: 	100,
			leaves: 	10,
			hardwood: 	0.001,
		},
		progress_needed: 	1,
		reward_factor: 		100,
		passive_factor: 	10,
		chance: 		5,
		skill: 			'伐木',
		action_name: 		'砍伐',
		fail_text: 		'chop',
		upgrade_item: 		'lumberjack',
		unlock_cost:{
			lumberjack:		1
		}
	},
	chop_hardwood:{
		name: 			'砍硬木',
		unlock_name: 	'搜寻硬木',
		item_id: 		'hardwood',
		chance: 		5,
		skill: 			'伐木',
		action_name: 		'砍伐',
		fail_text: 		'chop',
		upgrade_item: 	'lumberjack',
		cost:{
			axe: 		1
		},
		unlock_cost:{
			lumberjack:		10
		}
	},
	search_for_firewood:{
		name: 			'寻找柴火',
		item_id: 		'firewood',
		chance: 		25,
		skill: 			'采集',
		action_name: 	'搜索',
		fail_text: 		'search',
	},
	scrounge_the_forest:{
		name: 			'探索森林',
		item_id: 		'firewood',
		bonus_loot:{
			water: 		15,
			apple: 		10,
			feather: 	8,
			twine: 		5,
			peasant: 	3,
			axe: 		1,
		},
		chance: 		25,
		skill: 			'采集',
		action_name: 	'探索',
		fail_text: 		'scrounge',
	},
	chop_firewood:{
		name: 			'劈柴',
		unlock_name: 	'劈柴',
		item_id: 		'firewood',
		chance: 		25,
		reward_factor: 	8,
		skill: 			'伐木',
		action_name: 	'砍伐',
		fail_text: 		'chop',
		upgrade_item: 	'lumberjack',
		cost:{
			lumber: 	1
		},
		unlock_cost:{
			axe: 		1,
			lumber: 	10,
		}
	},
	mow_grass:{
		name: 			'割草',
		item_id: 		'grass',
		chance: 		25,
		reward_factor: 	5,
		skill: 			'采集',
		action_name: 	'修剪',
		fail_text: 		'mow',
	},
	dry_grass:{
		name: 			'干草',
		unlock_name: 	'开始晒草',
		item_id: 		'hay',
		chance: 		25,
		reward_factor: 	1,
		skill: 			'采集',
		action_name: 	'晾晒',
		fail_text: 		'dry',
		cost:{
			grass: 		3
		},
		unlock_cost:{
			grass: 		50
		}
	},
	bind_hay:{
		name: 			'捆干草',
		unlock_name: 	'开始捆干草',
		item_id: 		'hay_bale',
		chance: 		25,
		passive_factor: 1,
		skill: 			'采集',
		action_name: 	'捆绑',
		fail_text: 		'bind',
		cost:{
			hay: 		3
		},
		unlock_cost:{
			hay: 		50
		}
	},
	craft_pole:{
		name: 			'制作木棍',
		unlock_name: 	'学习制作木棍',
		item_id: 		'pole',
		chance: 		20,
		reward_factor: 	2,
		skill: 			'制作',
		action_name: 	'制作',
		fail_text: 		'craft',
		cost:{
			lumber: 	3
		},
		unlock_cost:{
			lumber:		20,
		}
	},
	saw_planks:{
		name: 			'锯木板',
		unlock_name: 	'学会锯木板',
		item_id: 		'plank',
		chance: 		20,
		skill: 			'制作',
		action_name: 		'锯',
		fail_text: 		'saw',
		cost:{
			lumber: 	3
		},
		unlock_cost:{
			lumber:		50,
		}
	},
	saw_planks_sawmill:{
		name: 			'锯木板',
		unlock_name: 	'建锯木材厂',
		item_id: 		'plank',
		chance: 		20,
		reward_factor: 	10,
		skill: 			'制作',
		action_name: 	'锯',
		fail_text: 		'saw',
		cost:{
			lumber: 	10,
			iron: 		2
		},
		unlock_cost:{
			plank:		50,
			stone: 		50,
			iron: 		10
		}
	},
	craft_crate:{
		name: 			'制作板条箱',
		unlock_name: 	'学习制作板条箱',
		item_id: 		'crate',
		chance: 		20,
		skill: 			'制作',
		action_name: 		'制作',
		fail_text: 		'craft',
		cost:{
			plank: 		2
		},
		unlock_cost:{
			plank:		30,
		}
	},
	craft_barrel:{
		name: 			'制作木桶',
		unlock_name: 	'学习制作木桶',
		item_id: 		'barrel',
		chance: 		20,
		skill: 			'制作',
		action_name: 		'制作',
		fail_text: 		'craft',
		cost:{
			plank: 		2
		},
		unlock_cost:{
			plank:		30,
		}
	},
	
	craft_bed:{
		name: 			'制作床',
		unlock_name: 	'学会制作床铺',
		item_id: 		'bed',
		chance: 		20,
		skill: 			'制作',
		action_name: 		'制作',
		fail_text: 		'craft',
		cost:{
			cloth: 		1,
			pillow: 	1,
			plank: 		4,
		},
		unlock_cost:{
			cloth: 		10,
			pillow: 	10,
			plank: 		40,
			
		}
	},
	craft_cart:{
		name: 			'制作手推车',
		unlock_name: 	'学习制作手推车',
		item_id: 		'cart',
		chance: 		20,
		skill: 			'制作',
		action_name: 		'制作',
		fail_text: 		'craft',
		cost:{
			pole: 		6,
			plank: 		6,
			nails: 		15
		},
		unlock_cost:{
			pole: 		25,
			plank: 		25,
			nails: 		50
		}
	},
	send_supplies:{
		name: 			'送补给品',
		unlock_name: 	'建立补给站',
		item_id: 		'treasure',
		chance: 		20,
		passive_factor: 	5,
		skill: 			'贸易',
		action_name: 		'邮寄',
		fail_text: 		'send',
		upgrade_item: 		'cart',
		cost:{
			supplies: 	5,
		},
		unlock_cost:{
			plank: 		20,
			pole: 		20,
			nails: 		50,
			supplies: 	10,
			peasant: 	10,
		}
	},
	
	dig_hole:{
		name: 			'挖矿',
		item_id: 		'sand',
		bonus_loot:{
			firewood: 	25,
			stone: 		20,
			copper_ore: 	2.5,
			lumber: 	1,
		},
		chance: 		10,
		skill: 			'采矿',
		action_name: 		'挖掘',
		fail_text: 		'dig',
		unlock_cost:{
			coins:		1,
		}
	},
	break_rocks:{
		name: 			'开采碎石',
		unlock_name: 	'开始碎石',
		item_id: 		'stone',
		bonus_loot:{
			copper_ore: 	20,
			iron_ore: 	10,
		},
		chance: 		10,
		skill: 			'采矿',
		action_name: 	'采矿',
		fail_text: 		'mine',
		upgrade_item: 	'miner',
		unlock_cost:{
			pickaxe:		1,
		}
	},
	mine_stone:{
		name: 			'开采矿石',
		unlock_name: 	'建造采石场',
		item_id: 		'stone',
		chance: 		10,
		skill: 			'采矿',
		action_name: 		'采矿',
		fail_text: 		'mine',
		upgrade_item: 	'miner',
		unlock_cost:{
			miner: 		10,
			stone:		250,
		}
	},
	mine_copper:{
		name: 			'开采铜矿',
		unlock_name: 	'建铜矿',
		item_id: 		'copper_ore',
		chance: 		2.5,
		skill: 			'采矿',
		action_name: 	'采矿',
		fail_text: 		'mine',
		upgrade_item: 	'miner',
		unlock_cost:{
			miner: 		10,
			stone:		250,
		}
	},
	mine_coal:{
		name: 			'开采煤矿',
		unlock_name: 	'建煤矿',
		item_id: 		'coal',
		chance: 		5,
		skill: 			'采矿',
		action_name: 		'采矿',
		fail_text: 		'mine',
		upgrade_item: 	'miner',
		unlock_cost:{
			miner: 		10,
			stone:		250,
		}
	},
	mine_salt:{
		name: 			'开采盐矿',
		unlock_name: 	'建盐矿',
		item_id: 		'salt',
		chance: 		5,
		skill: 			'采矿',
		action_name: 	'采矿',
		fail_text: 		'mine',
		upgrade_item: 	'miner',
		unlock_cost:{
			miner: 		10,
			stone:		250,
		}
	},
	mine_iron:{
		name: 			'开采铁矿',
		unlock_name: 	'建铁矿',
		item_id: 		'iron_ore',
		chance: 		5,
		skill: 			'采矿',
		action_name: 	'采矿',
		fail_text: 		'mine',
		upgrade_item: 	'miner',
		unlock_cost:{
			miner: 		10,
			stone:		250,
		}
	},
	mine_silver:{
		name: 			'开采银矿',
		unlock_name: 	'建银矿',
		item_id: 		'silver_ore',
		chance: 		5,
		skill: 			'采矿',
		action_name: 	'采矿',
		fail_text: 		'mine',
		upgrade_item: 	'miner',
		unlock_cost:{
			miner: 		20,
			stone:		500,
		}
	},
	mine_gold:{
		name: 			'开采金矿',
		unlock_name: 	'建金矿',
		item_id: 		'gold_ore',
		chance: 		5,
		skill: 			'采矿',
		action_name: 	'采矿',
		fail_text: 		'mine',
		upgrade_item: 	'miner',
		unlock_cost:{
			miner: 		40,
			stone:		1000,
		}
	},
	tend_vegetable_garden:{
		name: 			'照料蔬菜',
		item_id: 		'lettuce',
		bonus_loot:{
			cucumber: 	50,
			tomato: 	50,
			onion: 		25,
			potato: 	25,
			carrot: 	10
		},
		chance: 		5,
		reward_factor: 	1,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		unlock_cost:{
			farmer:		1,
		}
	},
	grow_lettuce:{
		name: 			'种莴苣',
		unlock_name: 	'种植莴苣',
		item_id: 		'lettuce',
		chance: 		5,
		reward_factor: 	5,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		unlock_cost:{
			water:		100,
		}
	},
	grow_cucumber:{
		name: 			'种黄瓜',
		unlock_name: 	'种植黄瓜',
		item_id: 		'cucumber',
		chance: 		5,
		reward_factor: 	5,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		unlock_cost:{
			water:		100,
		}
	},
	grow_tomatoes:{
		name: 			'种西红柿',
		unlock_name: 	'种西红柿',
		item_id: 		'tomato',
		chance: 		5,
		reward_factor: 	5,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		unlock_cost:{
			water:		100,
		}
	},

	grow_carrots:{
		name: 			'种胡萝卜',
		unlock_name: 	'种植胡萝卜',
		item_id: 		'carrot',
		chance: 		5,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		unlock_cost:{
			water:		100,
		}
	},
	grow_onions:{
		name: 			'种洋葱',
		unlock_name: 	'种洋葱',
		item_id: 		'onion',
		chance: 		2.5,
		reward_factor: 	5,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		unlock_cost:{
			water:		100,
		}
	},
	grow_potatoes:{
		name: 			'种土豆',
		unlock_name: 	'种土豆',
		item_id: 		'potato',
		chance: 		2.5,
		reward_factor: 	5,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		unlock_cost:{
			water:		100,
		}
	},
	grow_sugarcane:{
		name: 			'种甘蔗',
		item_id: 		'sugarcane',
		chance: 		2.5,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		unlock_cost:{
			water:		50,
		}
	},
	grow_wheat:{
		name: 			'照料小麦',
		unlock_name: 	'犁麦田',
		item_id: 		'wheat',
		chance: 		5,
		reward_factor: 		50,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		upgrade_item: 		'farmer',
		cost:{
			plow: 		1
		},
		unlock_cost:{
			plow: 		1
		}
	},
	grow_flax:{
		name: 			'照料亚麻',
		unlock_name: 	'犁亚麻田',
		item_id: 		'flax',
		chance: 		5,
		reward_factor: 		50,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		upgrade_item: 		'farmer',
		cost:{
			plow: 		1
		},
		unlock_cost:{
			plow: 		1
		}
	},
	grow_sugarcane:{
		name: 			'照料甘蔗',
		unlock_name: 	'犁甘蔗地',
		item_id: 		'sugarcane',
		chance: 		5,
		reward_factor: 		25,
		skill: 			'农事',
		action_name: 		'种田',
		fail_text: 		'farm',
		upgrade_item: 		'farmer',
		cost:{
			plow: 		1
		},
		unlock_cost:{
			plow: 		1
		}
	},
	clear_the_field:{
		name: 			'清理场地',
		item_id: 		'stone',
		bonus_loot:{
			firewood: 	10,
			grass: 		5,
			wheat: 		1,
		},
		progress_needed: 	1,
		reward_factor: 		5,
		chance: 		5,
		skill: 			'采集',
		action_name: 	'清理',
		fail_text: 		'clear',
	},
	use_the_well:{
		name: 			'使用井',
		unlock_name: 	'打井',
		item_id: 		'water',
		bonus_loot:{
			sand: 		5,
			stone: 		1,
			boots: 		0.1,
		},
		chance: 		5,
		reward_factor: 		10,
		skill: 			'采集',
		action_name: 	'收集',
		fail_text: 		'collect',
		upgrade_item: 	'stone',
		unlock_cost:{
			stone: 		25
		}
	},
	assist_the_farmers:{
		name: 			'帮助农民',
		unlock_name: 	'交朋友',
		item_id: 		'wheat',
		bonus_loot:{
			peasant: 	30,
			pitchfork: 	16,
			sack: 		8,
			plow: 		4,
			knife: 		1,
		},
		chance: 		5,
		skill: 			'魅力',
		action_name: 	'帮助',
		fail_text: 		'assist',
		cost:{
			water: 		10
		},
		unlock_cost:{
			water: 		50
		}
	},
	train_guard:{
		name: 			'列车员',
		unlock_name: 	'设置警卫训练',
		item_id: 		'guard',
		chance: 		5,
		skill: 			'训练',
		action_name: 	'训练',
		fail_text: 		'train',
		cost:{
			peasant: 		1,
			spear: 			2,
			plate_armor: 	1,
			shield: 		1
		},
		unlock_cost:{
			house: 			1,
			peasant: 		10,
			spear: 			10,
			plate_armor: 	10,
			shield: 		10
		}
	},
	train_farmer:{
		name: 			'培训农民',
		unlock_name: 	'开展农民培训',
		item_id: 		'farmer',
		chance: 		5,
		skill: 			'训练',
		action_name: 	'训练',
		fail_text: 		'train',
		cost:{
			peasant: 		1,
			pitchfork: 		1
		},
		unlock_cost:{
			coins: 		1000
		}
	},
	train_fisherman:{
		name: 			'训练渔夫',
		unlock_name: 	'学习训练渔民',
		item_id: 		'fisherman',
		chance: 		5,
		skill: 			'训练',
		action_name: 	'训练',
		fail_text: 		'train',
		cost:{
			peasant: 		1,
			net: 			1
		},
		unlock_cost:{
			coins: 		1000
		}
	},
	train_hunter:{
		name: 			'训练猎人',
		unlock_name: 	'建立猎人训练',
		item_id: 		'hunter',
		chance: 		5,
		skill: 			'训练',
		action_name: 	'训练',
		fail_text: 		'train',
		cost:{
			peasant: 		1,
			bow: 			1
		},
		unlock_cost:{
			coins: 		1000
		}
	},
	train_veteran_hunter:{
		name: 			'训练老猎人',
		unlock_name: 	'建立退伍军人培训',
		item_id: 		'veteran_hunter',
		chance: 		5,
		skill: 			'训练',
		action_name: 	'训练',
		fail_text: 		'train',
		cost:{
			hunter: 		1,
			spear: 			10
		},
		unlock_cost:{
			hunter: 	10,
			spear: 		100
		}
	},
	
	train_miner:{
		name: 			'训练矿工',
		unlock_name: 	'建立矿工培训',
		item_id: 		'miner',
		chance: 		5,
		skill: 			'训练',
		action_name: 	'训练',
		fail_text: 		'train',
		cost:{
			peasant: 		1,
			pickaxe: 		1
		},
		unlock_cost:{
			coins: 		1000
		}
	},
	train_lumberjack:{
		name: 			'训练伐木工',
		unlock_name: 	'组织伐木工人培训',
		item_id: 		'lumberjack',
		chance: 		5,
		skill: 			'训练',
		action_name: 	'训练',
		fail_text: 		'train',
		cost:{
			peasant: 		1,
			axe: 			1
		},
		unlock_cost:{
			coins: 		1000
		}
	},

	tend_the_field:{
		name: 			'空地',
		unlock_name: 	'种植作物',
		item_id: 		'wheat',
		bonus_loot:{
			flax: 			50,
			sugarcane: 		5,
		},
		chance: 		5,
		reward_factor: 		10,
		skill: 			'农事',
		action_name: 	'种田',
		fail_text: 		'farm',
		upgrade_item: 	'farmer',
		unlock_cost:{
			water: 		100
		}
	},
	tend_large_field:{
		name: 			'照料大片土地',
		unlock_name: 	'犁地',
		item_id: 		'wheat',
		bonus_loot:{
			flax: 			50,
			sugarcane: 		5,
		},
		chance: 		5,
		reward_factor: 		35,
		skill: 			'农事',
		action_name: 	'种田',
		fail_text: 		'farm',
		upgrade_item: 	'farmer',
		cost:{
			plow: 		1
		},
		unlock_cost:{
			plow: 		1
		}
	},
	package_flour:{
		name: 			'包装面粉',
		unlock_name: 	'分类包装面粉',
		item_id: 		'supplies',
		chance: 		25,
		skill: 			'打包',
		action_name: 		'打包',
		fail_text: 		'pack',
		cost:{
			flour: 			15,
			sack: 			1,
		},
		unlock_cost:{
			flour:  		50,
			sack: 			2,
		}
	},
	mill_flour:{
		name: 			'磨面粉',
		unlock_name: 	'建小麦厂',
		item_id: 		'flour',
		chance: 		20,
		skill: 			'研磨',
		action_name: 		'加工',
		fail_text: 		'mill',
		cost:{
			wheat: 	4
		},
		unlock_cost:{
			stone:		100,
		}
	},
	refine_sugar:{
		name: 			'炼糖',
		unlock_name: 	'建糖厂',
		item_id: 		'sugar',
		chance: 		20,
		reward_factor: 	2,
		skill: 			'研磨',
		action_name: 		'加工',
		fail_text: 		'mill',
		cost:{
			sugarcane: 	3
		},
		unlock_cost:{
			stone:		100,
		}
	},
	feed_chickens:{
		name: 			'喂鸡',
		unlock_name: 	'引诱来一些鸡',
		item_id: 		'egg',
		bonus_loot:{
			feather: 	10,
		},
		chance: 		20,
		reward_factor: 	6,
		skill: 			'畜牧业',
		action_name: 		'喂养',
		fail_text: 		'feed',
		cost:{
			wheat: 	4
		},
		unlock_cost:{
			wheat: 		100,
		}
	},
	breed_chickens:{
		name: 			'孵蛋',
		unlock_name: 	'学会养鸡',
		item_id: 		'chicken',
		bonus_loot:{
			feather: 	50,
		},
		chance: 		20,
		skill: 			'畜牧业',
		action_name: 	'繁殖',
		fail_text: 		'breed',
		cost:{
			egg: 	8
		},
		unlock_cost:{
			egg: 		100,
		}
	},
	transmute_stone:{
		name: 			'转化石头',
		unlock_name: 	'学会转化',
		item_id: 		'iron',
		chance: 		20,
		skill: 			'炼金',
		action_name: 		'转化',
		fail_text: 		'transmute',
		cost:{
			mint: 		3,
			stone: 		1,
		},
		unlock_cost:{
			mint: 		100,
			stone: 		100,
		}
	},
	transmute_iron:{
		name: 			'转化铁',
		unlock_name: 	'研究转化',
		item_id: 		'gold',
		chance: 		20,
		skill: 			'炼金',
		action_name: 		'转化',
		fail_text: 		'transmute',
		cost:{
			mint: 		20,
			iron: 		2,
		},
		unlock_cost:{
			mint: 		100,
			iron: 		100,
		}
	},
	brew_health_potion:{
		name: 			'配制生命药水',
		unlock_name: 	'学习配制生命药水',
		item_id: 		'health_potion',
		chance: 		20,
		skill: 			'炼金',
		action_name: 		'配制',
		fail_text: 		'brew',
		cost:{
			parsley: 	5,
			water: 		5,
			glass: 		1,
		},
		unlock_cost:{
			parsley: 	100,
			water: 		100,
			glass: 		10,
		}
	},
	craft_remedy:{
		name: 			'制作补救措施',
		unlock_name: 	'学会制定补救措施',
		item_id: 		'remedy',
		chance: 		20,
		skill: 			'炼金',
		action_name: 		'制作',
		fail_text: 		'craft',
		cost:{
			parsley: 	10,
			mint: 		25,
		},
		unlock_cost:{
			parsley: 	100,
			mint: 		100,
		}
	},
	craft_first_aid_kit:{
		name: 			'制作急救箱',
		unlock_name: 	'学会制作急救箱',
		item_id: 		'first_aid_kit',
		chance: 		20,
		skill: 			'炼金',
		action_name: 	'制作',
		fail_text: 		'craft',
		cost:{
			bandage: 		4,
			remedy: 		4,
			health_potion: 	6,
			crate: 			1
		},
		unlock_cost:{
			parsley: 	100,
			mint: 		100,
		}
	},
	brew_mana_potion:{
		name: 			'配制法力药水',
		unlock_name: 	'学习配制法力药水',
		item_id: 		'mana_potion',
		chance: 		20,
		skill: 			'炼金',
		action_name: 		'配制',
		fail_text: 		'brew',
		cost:{
			sage: 		6,
			water: 		5,
			glass: 		1,
		},
		unlock_cost:{
			sage: 	100,
			water: 		100,
			glass: 		10,
		}
	},
	brew_poison:{
		name: 			'配制毒药',
		unlock_name: 	'学会配制毒药',
		item_id: 		'poison',
		chance: 		20,
		skill: 			'炼金',
		action_name: 		'配制',
		fail_text: 		'brew',
		cost:{
			parsley: 	5,
			mint: 		5,
			bone: 		5,
			water: 		5,
			glass: 		1,
		},
		unlock_cost:{
			bone: 		150,
			water: 		100,
			glass: 		10,
		}
	},
	brew_love_potion:{
		name: 			'配制爱情药水',
		unlock_name: 	'学会配制爱情药水',
		item_id: 		'love_potion',
		chance: 		20,
		skill: 			'炼金',
		action_name: 		'配制',
		fail_text: 		'brew',
		cost:{
			rosemary: 	8,
			water: 		5,
			glass: 		1,
		},
		unlock_cost:{
			rosemary: 	100,
			water: 		100,
			glass: 		10,
		}
	},
	brew_restore_potion:{
		name: 			'配制恢复药剂',
		unlock_name: 	'学习配制恢复药剂',
		item_id: 		'restore_potion',
		chance: 		20,
		skill: 			'炼金',
		action_name: 		'配制',
		fail_text: 		'brew',
		cost:{
			health_potion: 	2,
			mana_potion: 	2,
			glass: 		1,
		},
		unlock_cost:{
			health_potion: 	20,
			mana_potion: 	20,
			glass: 		10,
		}
	},
	
	make_salad:{
		name: 			'做沙拉',
		unlock_name: 	'学习做沙拉',
		item_id: 		'salad',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'制作',
		fail_text: 		'make',
		cost:{
			lettuce: 	4,
			cucumber: 	1,
			tomato: 	1,
		},
		unlock_cost:{
			lettuce: 	20,
			cucumber: 	10,
			tomato: 	10,
		}
	},
	bake_bread:{
		name: 			'烤面包',
		unlock_name: 	'做一个面包烤炉',
		item_id: 		'bread',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'烘烤',
		fail_text: 		'bake',
		cost:{
			flour: 		2,
			water: 		2,
			firewood: 	2,
		},
		unlock_cost:{
			stone: 		250,
		}
	},
	make_cucumber_sandwich:{
		name: 			'做黄瓜三明治',
		unlock_name: 	'练习做黄瓜三明治',
		item_id: 		'cucumber_sandwich',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'制作',
		fail_text: 		'make',
		cost:{
			bread: 		1,
			butter: 	1,
			cucumber: 	2,
		},
		unlock_cost:{
			bread: 		5,
			butter: 	5,
			cucumber: 	10,
		}
	},
	cook_perch_and_potatoes:{
		name: 			'鲈鱼和土豆',
		unlock_name: 	'学习烹饪鲈鱼和土豆',
		item_id: 		'perch_and_potatoes',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'烘烤',
		fail_text: 		'bake',
		cost:{
			perch: 		10,
			potato: 	1,
			firewood: 	5,
		},
		unlock_cost:{
			perch: 		50,
			potato: 	10,
			salt: 		10,
			parsley: 	10,
			firewood: 	50,
		}
	},
	brew_mint_tea:{
		name: 			'泡薄荷茶',
		unlock_name: 	'学习泡薄荷茶',
		item_id: 		'mint_tea',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'制作',
		fail_text: 		'make',
		cost:{
			mint: 		3,
			water: 		5,
			glass: 		1,
			firewood: 	2,
		},
		unlock_cost:{
			mint: 		50,
			water: 		100,
			glass: 		10,
			firewood: 	50,
		}
	},
	bake_fries:{
		name: 			'烤薯条',
		unlock_name: 	'学习烤薯条',
		item_id: 		'fries',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'烘烤',
		fail_text: 		'bake',
		cost:{
			potato:		2,
			salt: 		1,
			firewood: 	5
		},
		unlock_cost:{
			potato:		10,
			salt: 		10,
			firewood: 	50
		}
	},
	bake_apple_pie:{
		name: 			'烤苹果派',
		unlock_name: 	'学会烤苹果派',
		item_id: 		'apple_pie',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'烘烤',
		fail_text: 		'bake',
		cost:{
			egg:		3,
			flour: 		10,
			apple: 		10,
			sugar: 		2,
			firewood: 	5
		},
		unlock_cost:{
			egg:		10,
			flour: 		20,
			apple: 		50,
			sugar: 		10,
			firewood: 	50
		}
	},
	build_wall:{
		name: 			'筑墙',
		unlock_name: 	'学习砌筑',
		item_id: 		'wall',
		chance: 		20,
		skill: 			'建筑',
		action_name: 	'建造',
		fail_text: 		'build',
		cost:{
			brick: 		8,
		},
		unlock_cost:{
			brick: 		25,
		}
	},
	build_house:{
		name: 			'盖房子',
		unlock_name: 	'开工学习建设',
		item_id: 		'house',
		chance: 		20,
		skill: 			'建筑',
		action_name: 	'建造',
		fail_text: 		'build',
		cost:{
			glass: 		3,
			plank: 		5,
			shingle: 	5,
			wall: 		4,
		},
		unlock_cost:{
			glass: 		10,
			plank: 		20,
			shingle: 	20,
			wall: 		10,
		}
	},
	attract_peasant:{
		name: 			'吸引新村民',
		unlock_name: 	'扩大村庄',
		bonus_loot:{
			fisherman: 	60,
			hunter: 	50,
			farmer: 	50,
			lumberjack: 50,
			miner: 		50,
			thief: 		20,
			guard: 		20,
			cowboy: 	20,
		},
		chance: 		20,
		skill: 			'魅力',
		action_name: 	'吸引',
		fail_text: 		'attract',
		upgrade_item: 	'house',
		unlock_cost:{
			house: 			5,
		}
	},
	train_thief:{
		name: 			'训练窃贼',
		unlock_name: 	'建立一个盗贼公会',
		item_id: 		'thief',
		chance: 		20,
		skill: 			'招募',
		action_name: 	'训练',
		fail_text: 		'train',
		cost:{
			cloak: 				1,
			peasant: 			1,
			sinister_dagger: 	1,
		},
		unlock_cost:{
			house: 				1,
			cloak: 				10,
			peasant: 			10,
			sinister_dagger: 	10,
		}
	},
	patrol_village:{
		name: 			'巡逻村庄',
		unlock_name: 	'开始巡逻',
		bonus_loot:{
			thief: 			20,
		},
		chance: 		25,
		skill: 			'偷窃',
		action_name: 	'偷',
		fail_text: 		'failed',
		upgrade_item: 	'guard',
		unlock_cost:{
			guard:  		1,
		}
	},
	employ_thieves:{
		name: 			'雇佣小偷',
		unlock_name: 	'派小偷出去',
		bonus_loot:{
			silver_ring: 		20,
			gold_ring: 			10,
			supplies: 			5,
			treasure: 			1,
		},
		chance: 		25,
		skill: 			'偷窃',
		action_name: 	'偷',
		fail_text: 		'failed',
		upgrade_item: 	'thief',
		unlock_cost:{
			thief:  		1,
		}
	},
	train_cowboy:{
		name: 			'训练牛仔',
		unlock_name: 	'学会训练牛仔',
		item_id: 		'cowboy',
		chance: 		20,
		skill: 			'招募',
		action_name: 	'训练',
		fail_text: 		'train',
		cost:{
			boots: 				1,
			horse: 				1,
			peasant: 			1,
			saddle: 			1,
		},
		unlock_cost:{
			boots: 				10,
			horse: 				10,
			peasant: 			10,
			saddle: 			10,
		}
	},
	sell_herd:{
		name: 			'卖牛群',
		unlock_name: 	'采用牛仔',
		item_id: 		'treasure',
		chance: 		20,
		skill: 			'贸易',
		action_name: 	'贸易',
		fail_text: 		'trade',
		upgrade_item: 		'cowboy',
		cost:{
			cow: 				30,
		},
		unlock_cost:{
			cowboy: 			2,
		}
	},
	chisel_brick:{
		name: 			'凿砖',
		unlock_name: 	'练习切碎砖块',
		item_id: 		'brick',
		chance: 		20,
		skill: 			'建筑',
		action_name: 	'凿',
		fail_text: 		'chisel',
		cost:{
			stone: 		7,
		},
		unlock_cost:{
			stone: 		100,
		},
	},
	build_tollbridge:{
		name: 			'收取通行费',
		unlock_name: 	'修建收费站',
		bonus_loot:{
			apple: 			30,
			bread: 			20,
			twine: 			20,
			barrel: 		15,
			net: 			10,
			cloth: 			10,
			nails: 			10,
			supplies: 		1,
		},
		chance: 		20,
		skill: 			'魅力',
		action_name: 	'收集',
		fail_text: 		'collect',
		cost:{
			peasant: 	1,
		},
		unlock_cost:{
			brick: 		100,
		},
	},
	bake_brick:{
		name: 			'烧砖',
		unlock_name: 	'造砖炉',
		item_id: 		'brick',
		chance: 		20,
		skill: 			'制陶',
		action_name: 	'烘烤',
		fail_text: 		'bake',
		cost:{
			clay: 		3,
			firewood:	3,
		},
		unlock_cost:{
			stone: 		50,
		},
	},
	bake_shingle:{
		name: 			'烧瓦',
		unlock_name: 	'造瓦炉',
		item_id: 		'shingle',
		chance: 		20,
		skill: 			'制陶',
		action_name: 	'烘烤',
		fail_text: 		'bake',
		cost:{
			clay: 		3,
			firewood:	3,
		},
		unlock_cost:{
			stone: 		50,
		},
	},
	craft_charcoal:{
		name: 			'点燃篝火',
		unlock_name: 		'生火',
		item_id: 		'coal',
		bonus_loot:{
			peasant: 		10,
		},
		chance: 		20,
		reward_factor: 		2,
		skill: 			'点火',
		action_name: 		'点燃',
		fail_text: 		'burn',
		cost:{
			firewood:	10,
		},
		unlock_cost:{
			firewood: 	10,
		},
	},
	smelt_copper:{
		name: 			'炼铜',
		unlock_name: 		'造一个小炉子',
		item_id: 		'copper',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'熔炼',
		action_name: 		'冶炼',
		fail_text: 		'smelt',
		cost:{
			copper_ore:	1,
			firewood: 	2
		},
		unlock_cost:{
			stone:		10,
		},
	},
	smelt_silver:{
		name: 			'炼银',
		unlock_name: 		'造银炉',
		item_id: 		'silver',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'熔炼',
		action_name: 		'冶炼',
		fail_text: 		'smelt',
		cost:{
			silver_ore:	1,
			coal: 		5
		},
		unlock_cost:{
			stone:		250,
		},
	},
	smelt_gold:{
		name: 			'炼金',
		unlock_name: 		'筑金炉',
		item_id: 		'gold',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'熔炼',
		action_name: 		'冶炼',
		fail_text: 		'smelt',
		cost:{
			gold_ore:	1,
			coal: 		10
		},
		unlock_cost:{
			stone:		1000,
		},
	},
	smelt_glass:{
		name: 			'吹制玻璃',
		unlock_name: 		'学会吹玻璃',
		item_id: 		'glass',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'熔炼',
		action_name: 		'冶炼',
		fail_text: 		'smelt',
		cost:{
			sand:		8,
			firewood: 	2
		},
		unlock_cost:{
			sand:		80,
			firewood: 	20,
		},
	},
	smelt_iron:{
		name: 			'炼铁',
		unlock_name: 		'建一座大熔炉',
		item_id: 		'iron',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'熔炼',
		action_name: 		'冶炼',
		fail_text: 		'smelt',
		cost:{
			iron_ore:	1,
			coal: 		1
		},
		unlock_cost:{
			stone:		100,
		},
	},
	craft_copper_pot:{
		name: 			'精巧的铜壶',
		unlock_name: 	'学习制作铜壶',
		item_id: 		'copper_pot',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			copper:		2,
		},
		unlock_cost:{
			copper:		20,
			coal: 		20
		}
	},
	craft_knife:{
		name: 			'精巧的刀',
		unlock_name: 	'学习制作刀具',
		item_id: 		'knife',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			iron:		1,
			lumber: 	1,
			stone: 		2
		},
		unlock_cost:{
			iron:		10,
			lumber: 	10
		}
	},
	craft_sinister_dagger:{
		name: 			'制造邪恶匕首',
		unlock_name: 	'学会制造邪恶匕首',
		item_id: 		'sinister_dagger',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			knife:		1,
			poison: 	2
		},
		unlock_cost:{
			knife:		10,
			poison: 	10
		}
	},
	
	craft_arrow:{
		name: 			'精巧的箭',
		unlock_name: 	'开始射箭',
		item_id: 		'arrow',
		chance: 		20,
		skill: 			'射箭',
		action_name: 		'制作',
		fail_text: 		'craft',
		cost:{
			feather:		1,
			firewood: 		1
		},
		unlock_cost:{
			feather:		1,
			firewood: 		5
		}
	},
	craft_bone_arrow:{
		name: 			'精巧的骨箭',
		unlock_name: 	'开始射出骨箭',
		item_id: 		'arrow',
		chance: 		20,
		reward_factor: 	6,
		skill: 			'射箭',
		action_name: 		'制作',
		fail_text: 		'craft',
		cost:{
			feather:		1,
			firewood: 		1,
			bone: 			1
		},
		unlock_cost:{
			bone: 			10
		}
	},
	craft_bow:{
		name: 			'精巧的弓',
		unlock_name: 	'学习制作弓箭',
		item_id: 		'bow',
		chance: 		20,
		skill: 			'射箭',
		action_name: 	'制作',
		fail_text: 		'craft',
		cost:{
			arrow:			5,
			lumber: 		1,
			twine: 			1
		},
		unlock_cost:{
			lumber: 		3,
			twine: 			3
		}
	},
	
	craft_silver_ring:{
		name: 			'精巧的银戒指',
		unlock_name: 	'练习锻造银戒指',
		item_id: 		'silver_ring',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			silver:		2,
			coal: 		2
		},
		unlock_cost:{
			silver:		5,
			coal: 		200
		}
	},
	craft_gold_ring:{
		name: 			'精巧的金戒指',
		unlock_name: 	'练习锻造金戒指',
		item_id: 		'gold_ring',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			gold:		2,
			coal: 		5
		},
		unlock_cost:{
			gold:		5,
			coal: 		400
		}
	},
	
	craft_nails:{
		name: 			'精巧的钉子',
		unlock_name: 	'练习锻造钉子',
		item_id: 		'nails',
		chance: 		20,
		reward_factor: 	15,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			iron:		1,
		},
		unlock_cost:{
			iron:		3,
		}
	},
	
	craft_shield:{
		name: 			'精巧的盾',
		unlock_name: 	'学习制作盾牌',
		item_id: 		'shield',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'制作',
		action_name: 		'制作',
		fail_text: 		'craft',
		cost:{
			iron:		1,
			plank: 		2
		},
		unlock_cost:{
			iron:		2,
			plank: 		4
		}
	},
	craft_plate_armor:{
		name: 			'精巧的板甲',
		unlock_name: 	'学习制作板甲',
		item_id: 		'plate_armor',
		chance: 		20,
		reward_factor: 	1,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			iron:		2,
			leather: 	2
		},
		unlock_cost:{
			iron:		3,
			leather: 	1
		}
	},
	
	craft_plow:{
		name: 			'精巧的犁',
		unlock_name: 	'学习制作犁',
		item_id: 		'plow',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			iron:		1,
			plank: 		1,
			nails: 		5
		},
		unlock_cost:{
			iron:		5,
			plank: 		5,
			nails: 		25
		}
	},
	craft_axe:{
		name: 			'精巧的斧子',
		unlock_name: 	'学习制作斧头',
		item_id: 		'axe',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			iron:		2,
			pole: 		1
		},
		unlock_cost:{
			iron:		2,
			pole: 		2
		}
	},
	craft_pitchfork:{
		name: 			'精巧的干草叉',
		unlock_name: 	'学习制作干草叉',
		item_id: 		'pitchfork',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			iron:		2,
			pole: 		1
		},
		unlock_cost:{
			iron:		2,
			pole: 		2
		}
	},
	craft_pickaxe:{
		name: 			'精巧的镐',
		unlock_name: 	'学习制作镐',
		item_id: 		'pickaxe',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			copper:		3,
			lumber: 	1
		},
		unlock_cost:{
			copper:		2,
			lumber: 	1
		}
	},
	craft_iron_pickaxe:{
		name: 			'精巧的镐',
		unlock_name: 	'学习制作铁镐',
		item_id: 		'pickaxe',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			iron:		2,
			pole: 		1
		},
		unlock_cost:{
			iron:		2,
			pole: 		1
		}
	},
	craft_spear:{
		name: 			'精巧的矛',
		unlock_name: 	'学习制造长矛',
		item_id: 		'spear',
		chance: 		20,
		skill: 			'锻造',
		action_name: 		'锻造',
		fail_text: 		'smith',
		cost:{
			iron:		2,
			pole: 		1
		},
		unlock_cost:{
			iron:		2,
			pole: 		2
		}
	},
	craft_bone_spear:{
		name: 			'精巧的骨矛',
		unlock_name: 	'学习制作骨矛',
		item_id: 		'spear',
		chance: 		20,
		skill: 			'狩猎',
		action_name: 		'制作',
		fail_text: 		'craft',
		cost:{
			bone:		3,
			lumber: 	2
		},
		unlock_cost:{
			bone:		30,
			lumber: 	20
		}
	},
	
	milk_cows:{
		name: 			'奶牛',
		unlock_name: 	'开始挤奶',
		item_id: 		'milk',
		chance: 		20,
		skill: 			'畜牧业',
		action_name: 		'挤奶',
		fail_text: 		'milk',
		upgrade_item: 		'cow',
		unlock_cost:{
			cow:		5,
		}
	},
	churn_butter:{
		name: 			'搅拌黄油',
		unlock_name: 		'开始搅拌黄油',
		item_id: 		'butter',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'搅拌',
		fail_text: 		'churn',
		cost:{
			milk: 		3,
		},
		unlock_cost:{
			lumber:		5,
			milk: 		25,
		}
	},
	make_cheese:{
		name: 			'做奶酪',
		unlock_name: 		'造奶酪',
		item_id: 		'cheese',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'制作',
		fail_text: 		'make',
		cost:{
			milk: 		10,
			rennet: 	1,
			salt: 		1,
		},
		unlock_cost:{
			lumber:		5,
			cloth: 		1,
			milk: 		25,
		}
	},
	breed_sheep:{
		name: 			'养羊',
		unlock_name: 	'学会饲养绵羊',
		item_id: 		'sheep',
		chance: 		20,
		reward_factor: 	2,
		skill: 			'畜牧业',
		action_name: 		'繁殖',
		fail_text: 		'breed',
		cost:{
			hay_bale:		3,
		},
		unlock_cost:{
			sheep:			2,
			hay_bale: 		20,
		}
	},
	shear_sheep:{
		name: 			'剪羊毛',
		unlock_name: 	'开始放羊',
		item_id: 		'wool',
		chance: 		20,
		skill: 			'畜牧业',
		action_name: 	'剪',
		fail_text: 		'shear',
		upgrade_item: 	'sheep',
		unlock_cost:{
			sheep:		5,
		}
	},
	breed_cows:{
		name: 			'养牛',
		unlock_name: 	'学会饲养奶牛',
		item_id: 		'cow',
		chance: 		20,
		skill: 			'畜牧业',
		action_name: 		'繁殖',
		fail_text: 		'breed',
		cost:{
			hay_bale:		2,
		},
		unlock_cost:{
			cow:			2,
			hay_bale: 		30,
		}
	},
	breed_horses:{
		name: 			'种马',
		unlock_name: 	'学会养马',
		item_id: 		'horse',
		chance: 		20,
		skill: 			'畜牧业',
		action_name: 		'繁殖',
		fail_text: 		'breed',
		cost:{
			carrot:		5,
			hay_bale:	3,
		},
		unlock_cost:{
			carrot:		100,
			horse:		2,
			hay_bale: 	40
		}
	},
	
	knit_cloth:{
		name: 			'针织布',
		unlock_name: 	'学习织布',
		item_id: 		'cloth',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'编织',
		fail_text: 		'knit',
		cost:{
			wool:		3,
		},
		unlock_cost:{
			wool: 		15,
		}
	},
	weave_cloth:{
		name: 			'织麻布',
		unlock_name: 	'学会把麻编织成布',
		item_id: 		'cloth',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'编织',
		fail_text: 		'weave',
		cost:{
			twine:		3,
		},
		unlock_cost:{
			twine: 		15,
		}
	},
	wind_twine:{
		name: 			'纺线',
		unlock_name: 	'开始纺线',
		item_id: 		'twine',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'纺线',
		fail_text: 		'wind',
		reward_factor: 	3,
		cost:{
			flax:		10,
		},
		unlock_cost:{
			flax: 		100,
			stone: 		100
		}
	},
	weave_bandage:{
		name: 			'制作绷带',
		unlock_name: 	'学习制作绷带',
		item_id: 		'bandage',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'编织',
		fail_text: 		'weave',
		cost:{
			cloth:		3,
			parsley: 	10
		},
		unlock_cost:{
			cloth: 		15,
			parsley: 	30
		}
	},
	sew_sack:{
		name: 			'缝麻袋',
		unlock_name: 	'学习缝麻袋',
		item_id: 		'sack',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'缝纫',
		fail_text: 		'sew',
		cost:{
			cloth:		1,
		},
		unlock_cost:{
			cloth: 		5,
		}
	},
	sew_pillow:{
		name: 			'缝枕头',
		unlock_name: 	'学习缝枕头',
		item_id: 		'pillow',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'缝纫',
		fail_text: 		'sew',
		cost:{
			sack:		1,
			feather: 	10,
		},
		unlock_cost:{
			sack: 		10,
			feather: 	100
		}
	},
	sew_cloak:{
		name: 			'缝斗篷',
		unlock_name: 	'学习缝斗篷',
		item_id: 		'cloak',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'缝纫',
		fail_text: 		'sew',
		cost:{
			cloth:		6,
		},
		unlock_cost:{
			cloth: 		25,
		}
	},
	
	tan_leather:{
		name: 			'棕褐色皮革',
		unlock_name: 	'学习晒皮革',
		item_id: 		'leather',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'晒制',
		fail_text: 		'tan',
		cost:{
			hide:		3,
		},
		unlock_cost:{
			hide: 		15,
		}
	},
	craft_boots:{
		name: 			'精巧的靴',
		unlock_name: 	'学习制作靴子',
		item_id: 		'boots',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'制作',
		fail_text: 		'craft',
		cost:{
			leather:		3,
			cloth: 			1
		},
		unlock_cost:{
			leather:		10,
			cloth: 			5
		}
	},
	craft_saddle:{
		name: 			'精巧的马鞍',
		unlock_name: 	'学习制作马鞍',
		item_id: 		'saddle',
		chance: 		20,
		skill: 			'裁缝',
		action_name: 	'制作',
		fail_text: 		'craft',
		cost:{
			leather:		3,
			iron: 			3
		},
		unlock_cost:{
			leather:		15,
			iron: 			15
		}
	},
	hunt_wild_sheep:{
		name: 			'捕捉野生牲畜',
		unlock_name: 	'寻找一些野生牲畜',
		bonus_loot:{
			sheep: 		25,
			cow: 		10,
			horse: 		1,
		},
		chance: 		20,
		reward_factor: 	1,
		skill: 			'狩猎',
		action_name: 		'打猎',
		fail_text: 		'hunt',
		cost:{
			hay:		3,
		},
		unlock_cost:{
			hay:		100,
		}
	},
	hunt_wolf:{
		name: 			'猎狼',
		unlock_name: 	'开始引诱狼',
		item_id: 		'hide',
		bonus_loot:{
			bone: 		25,
			meat: 		10,
		},
		chance: 		20,
		reward_factor: 	3,
		skill: 			'狩猎',
		action_name: 	'打猎',
		fail_text: 		'hunt',
		upgrade_item: 	'hunter',
		cost:{
			arrow: 		1,
			meat:		1,
		},
		unlock_cost:{
			hunter: 	1,
			meat: 		10,
		}
	},
	hunt_wild_animals:{
		name: 			'猎杀野生动物',
		type: 			'combat',
		action_name: 	'猎杀',
		possible_monsters:{
			0:{
				chance: 	1000,
				monsters:{
				}
			},
			1:{
				chance: 	20,
				monsters:{
					m_hunter:{
						min: 	1,
						max: 	1,
					}
				}
			},
			2:{
				chance: 	25,
				monsters:{
					m_robin: 	{
						min: 	1,
						max: 	1,
					},
				}
			},
			3:{
				chance: 	2,
				monsters:{
					m_brown_bear: 	{
						min: 	1,
						max: 	1,
					},
				}
			},
			4:{
				chance: 	25,
				monsters:{
					m_roe: 	{
						min: 	1,
						max: 	1,
					},
				}
			},
			5:{
				chance: 	100,
				monsters:{
					m_squirrel: 	{
						min: 	3,
						max: 	8,
					},
				}
			},
			
		},
		unlock_cost:{
			hunter:		1,
		}
	},
	hunt_birds:{
		name: 			'猎鸟',
		unlock_name: 	'指派一个猎人去寻找鸟',
		item_id: 		'feather',
		bonus_loot:{
			egg: 		5,
			hay: 		5,
			meat: 		1,
		},
		chance: 		20,
		reward_factor: 		4,
		skill: 			'狩猎',
		action_name: 		'打猎',
		fail_text: 		'hunt',
		upgrade_item: 		'hunter',
		cost:{
			arrow:		1,
		},
		unlock_cost:{
			hunter:		1,
		}
	},
	hunt_rabbits:{
		name: 			'猎兔',
		unlock_name: 	'指派一个猎人去寻找兔子',
		bonus_loot:{
			hide: 		100,
			meat: 		1,
			bone: 		1,
		},
		chance: 		20,
		skill: 			'狩猎',
		action_name: 		'打猎',
		fail_text: 		'miss',
		upgrade_item: 	'hunter',
		cost:{
			arrow:		1,
		},
		unlock_cost:{
			hunter:		1,
		}
	},
	hunt_boars:{
		name: 			'猎猪',
		unlock_name: 	'指派一名猎人寻找野猪',
		item_id: 		'meat',
		bonus_loot:{
			hide: 		50,
			bone: 		10,
		},
		chance: 		20,
		reward_factor: 	4,
		skill: 			'狩猎',
		action_name: 		'打猎',
		fail_text: 		'hunt',
		upgrade_item: 	'hunter',
		cost:{
			spear:		1,
		},
		unlock_cost:{
			hunter: 	1,
			spear: 		10,
		}
	},
	hunt_deer:{
		name: 			'猎鹿',
		unlock_name: 	'指派一个猎人去寻找鹿',
		bonus_loot:{
			meat: 		100,
			hide: 		50,
			bone: 		20,
		},
		chance: 		20,
		skill: 			'狩猎',
		action_name: 		'打猎',
		fail_text: 		'miss',
		upgrade_item: 	'hunter',
		cost:{
			arrow:		1,
		},
		unlock_cost:{
			hunter:		1,
		}
	},
	butcher_chickens:{
		name: 			'杀鸡',
		unlock_name: 	'开始杀鸡',
		item_id: 		'meat',
		bonus_loot:{
			feather: 	100,
			bone: 		50
		},
		chance: 		20,
		reward_factor: 	1,
		skill: 			'屠宰',
		action_name: 	'屠宰',
		fail_text: 		'butcher',
		upgrade_item: 	'knife',
		cost:{
			chicken: 	1,
		},
		unlock_cost:{
			chicken: 	50,
			knife: 		1
		}
	},
	butcher_sheep:{
		name: 			'杀羊',
		unlock_name: 	'开始屠宰绵羊',
		item_id: 		'meat',
		bonus_loot:{
			bone: 		10
		},
		chance: 		20,
		reward_factor: 	3,
		skill: 			'屠宰',
		action_name: 		'屠宰',
		fail_text: 		'butcher',
		cost:{
			sheep: 		1,
		},
		unlock_cost:{
			sheep: 		10,
		}
	},
	butcher_cow:{
		name: 			'杀牛',
		unlock_name: 	'开始屠宰奶牛',
		item_id: 		'meat',
		chance: 		20,
		bonus_loot:{
			hide: 		100,
			rennet: 	20,
			bone: 		10
		},
		reward_factor: 	3,
		skill: 			'屠宰',
		action_name: 		'屠宰',
		fail_text: 		'butcher',
		cost:{
			cow: 		1,
		},
		unlock_cost:{
			cow: 		10,
		}
	},
	package_meat:{
		name: 			'包装肉',
		unlock_name: 	'分类包装肉类',
		item_id: 		'supplies',
		chance: 		25,
		skill: 			'打包',
		action_name: 		'打包',
		fail_text: 		'pack',
		cost:{
			meat: 			12,
			crate: 			1,
		},
		unlock_cost:{
			meat:  			40,
			crate: 			3,
		}
	},
	cook_onion_rings:{
		name: 			'煮洋葱圈',
		unlock_name: 	'学习烹饪洋葱圈',
		item_id: 		'onion_rings',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'烹饪',
		fail_text: 		'cook',
		cost:{
			flour:  	1,
			onion: 		2,
			firewood: 	1
		},
		unlock_cost:{
			flour:  	10,
			onion: 		10,
			firewood: 	10
		}
	},
	cook_tomato_soup:{
		name: 			'煮番茄汤',
		unlock_name: 	'学做西红柿汤',
		item_id: 		'tomato_soup',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'烹饪',
		fail_text: 		'cook',
		cost:{
			tomato:  	10,
			meat: 		1,
			firewood: 	3
		},
		unlock_cost:{
			tomato:  	20,
			meat: 		2,
			firewood: 	5
		}
	},
	cook_hamburger:{
		name: 			'制作汉堡包',
		unlock_name: 	'学习制作汉堡包',
		item_id: 		'hamburger',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'烹饪',
		fail_text: 		'cook',
		cost:{
			bread:  	1,
			salad: 		1,
			meat: 		1,
			onion: 		1,
			firewood: 	5
		},
		unlock_cost:{
			bread:  	10,
			salad: 		10,
			meat: 		10,
			onion: 		10,
			firewood: 	50
		}
	},
	cook_steak:{
		name: 			'制作牛排',
		unlock_name: 	'学习制作牛排',
		item_id: 		'steak',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'烹饪',
		fail_text: 		'cook',
		cost:{
			meat: 		1,
			firewood: 	10
		},
		unlock_cost:{
			meat: 		10,
			firewood: 	100
		}
	},
	cook_steak_dinner:{
		name: 			'做牛排晚餐',
		unlock_name: 	'学习制作牛排晚餐',
		item_id: 		'steak_dinner',
		chance: 		20,
		skill: 			'烹饪',
		action_name: 		'烹饪',
		fail_text: 		'cook',
		cost:{
			steak: 		3,
			fries: 		4,
			salad: 		5,
		},
		unlock_cost:{
			steak: 		30,
			fries: 		40,
			salad: 		50,
		}
	},
	serve_three_course_dinner:{
		name: 			'三道菜晚餐',
		unlock_name: 		'开始供应三道菜的晚餐',
		item_id: 		'treasure',
		chance: 		20,
		skill: 			'接待',
		action_name: 		'接待',
		fail_text: 		'serve',
		cost:{
			tomato_soup: 		2,
			steak_dinner: 		2,
			apple_pie: 		2,
		},
		unlock_cost:{
			tomato_soup: 		5,
			steak_dinner: 		5,
			apple_pie: 		5,
		}
	},
	serve_high_tea:{
		name: 			'茶点',
		unlock_name: 		'开始供应茶点',
		item_id: 		'treasure',
		chance: 		20,
		skill: 			'接待',
		action_name: 		'接待',
		fail_text: 		'serve',
		cost:{
			cucumber_sandwich: 		20,
			mint_tea: 				20,
		},
		unlock_cost:{
			cucumber_sandwich: 		50,
			mint_tea: 				50,
		}
	},
}

var available_skills = {};

$.each(available_actions, function(action_id, action_info){
	if(available_skills[action_info['skill']] == undefined && action_info['item_id'] != undefined)
		 
	{
		available_skills[action_info['skill']] = {
			item_id: action_info['item_id']
		};
	}
});

