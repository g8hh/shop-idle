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
		name: 			'魔法力量-制作合金【精金精金】',
		unlock_name: 	'魔法力量-制作合金【精金精金】',	
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

