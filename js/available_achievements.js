var available_achievements = {
	/*firewood: {
		name: 	'firewood',
		background_item: 	'firewood',
		amount: 		10,
		amount_facor: 	2,
		item_procs: 	{
			firewood: 	true,
		},
		skill_procs:{

		},
		item_bonus:{
			firewood: 	1,
		},
		skill_bonus:{

		}
	},
	training: {
		name: 	'training',
		background_item: 	'peasant',
		amount: 		10,
		amount_facor: 	2,
		item_procs: 	{
		},
		skill_procs:{
			training: 	true,
		},
		item_bonus:{
		},
		skill_bonus:{
			training: 	5,
		}
	},*/
}

$.each(available_items, function(item_id, item_info){
	if(available_achievements[item_id] == undefined){
		available_achievements[item_id] = {
			name: 	'' + item_info['name'],
			text: 	'收集 ' + item_info['name'],
			background_item: 	item_id + '',
			amount: 		1000,
			amount_facor: 	10,
			item_procs: 	{},
			skill_procs:{},
			item_bonus:{},
			skill_bonus:{}
			
		};
		available_achievements[item_id]['item_procs'][item_id] = true;
		available_achievements[item_id]['item_bonus'][item_id] = 10;
	}
});

$.each(available_skills, function(skill_id, skill_info){
	if(available_achievements[skill_id] == undefined){
		available_achievements[skill_id] = {
			name: 	'' + skill_id,
			text: 	'使用 ' + skill_id + ' 技能',
			background_item: 	'',
			amount: 		10000,
			amount_facor: 	10,
			item_procs: 	{},
			skill_procs:{},
			item_bonus:{},
			skill_bonus:{}
		};
		available_achievements[skill_id]['skill_procs'][skill_id] = true;
		available_achievements[skill_id]['skill_bonus'][skill_id] = 10;
	}
});

available_achievements = sortObj(available_achievements);

var available_ap_bonusses = {

	勇者斗恶龙: {
		name: 	'勇者斗恶龙',
		text: 	'勇者斗恶龙获取属性提升30%。【点此技能需求100恶龙魂.重置不退还恶龙魂】',
		background_item: 	'恶龙',
		cost: 			1,
		cost2: 			1,		
		required_items:{
		},
		item_bonus:{	
			体力: 	30,
			力量: 	30,	
			战利品: 	30,
			exp: 	30,					
		},
		skill_bonus:{
				
		}
	},	
	
	
	原木: {
		name: 	'砍树专精',
		text: 	'每级增加百分10原木木棍产出。',
		background_item: 	'伐木工',
		cost: 			1,
		item_bonus:{
			木棍: 	10,
			原木: 	10,							
		},
		skill_bonus:{
							
		}
	},
	挖矿: {
		name: 	'挖矿专精',
		text: 	'每级增加百分10石头沙子产出。',
		background_item: 	'老矿工',
		cost: 			1,
		item_bonus:{
			石头: 	10,
			沙子: 	10,							
		},
		skill_bonus:{		
		}
	},	
	工具: {
		name: 	'工具专精',
		text: 	'每级增加百分10斧头稿子产出。',
		background_item: 	'工作台',
		cost: 			2,
		item_bonus:{
			稿子: 	10,
			斧头: 	10,							
		},
		skill_bonus:{		
		}
	},		
	大胃王: {
		name: 	'大胃王专精',
		text: 	'每级增加百分10饱食度产出。',
		background_item: 	'饱食度',
		cost: 			2,
		item_bonus:{
			饱食度: 	10,					
		},
		skill_bonus:{		
		}
	},		
	凝聚力: {
		name: 	'凝聚力专精',
		text: 	'每级增加百分10凝聚力产出。',
		background_item: 	'凝聚力',
		cost: 			3,
		item_bonus:{
			凝聚力: 	10,					
		},
		skill_bonus:{		
		}
	},	
	寻宝: {
		name: 	'寻宝专精',
		text: 	'每级增加百分10宝藏产出。',
		background_item: 	'宝藏',
		cost: 			1,
		item_bonus:{
			宝藏: 	10,					
		},
		skill_bonus:{		
		}
	},		
	寻宝2: {
		name: 	'寻宝2专精',
		text: 	'每级增加百分10美人鱼，绿龙，变异牛产出',
		background_item: 	'美人鱼',
		cost: 			1,
		item_bonus:{
			美人鱼: 	10,	
			绿龙: 	10,	
			变异牛: 	10,				
		},
		skill_bonus:{		
		}
	},		
	寻宝3: {
		name: 	'寻宝3专精',
		text: 	'每级增加百分10龙锭，黑龙产出',
		background_item: 	'黑龙',
		cost: 			1,
		item_bonus:{
			龙锭: 	10,	
			黑龙: 	10,				
		},
		skill_bonus:{		
		}
	},			
	
	房屋: {
		name: 	'建房专精',
		text: 	'每级增加百分10木屋，山洞，房屋产出',
		background_item: 	'房屋',
		cost: 			3,
		item_bonus:{
			房屋: 	10,	
			山洞: 	10,	
			木屋: 	10,				
		},
		skill_bonus:{		
		}
	},		
	城墙: {
		name: 	'城墙专精',
		text: 	'每级增加百分100城墙产出',
		background_item: 	'城墙',
		cost: 			10,
		item_bonus:{
			城墙: 	100,				
		},
		skill_bonus:{		
		}
	},		
	影响力: {
		name: 	'影响力专精',
		text: 	'每级增加百分10影响力产出',
		background_item: 	'影响力',
		cost: 			5,
		item_bonus:{
			影响力: 	10,				
		},
		skill_bonus:{		
		}
	},			
	红砖: {
		name: 	'烤制专家-红砖',
		text: 	'每级增加百分10红砖产出',
		background_item: 	'红砖',
		cost: 			2,
		item_bonus:{
			红砖: 	10,				
		},
		skill_bonus:{		
		}
	},		
	经验球: {
		name: 	'经验吸收',
		text: 	'每级增加百分10经验球产出',
		background_item: 	'经验球',
		cost: 			1,
		item_bonus:{
			经验球: 	10,				
		},
		skill_bonus:{		
		}
	},	
	腐肉: {
		name: 	'腐肉爱好者',
		text: 	'每级增加百分20腐肉产出',
		background_item: 	'腐肉',
		cost: 			1,
		item_bonus:{
			腐肉: 	20,				
		},
		skill_bonus:{		
		}
	},	
	光能: {
		name: 	'光能专精',
		text: 	'每级增加百分10光能产出',
		background_item: 	'光能',
		cost: 			5,
		item_bonus:{
			光能: 	10,				
		},
		skill_bonus:{		
		}
	},	
	生物细胞: {
		name: 	'生物学家',
		text: 	'每级增加百分10生物细胞产出',
		background_item: 	'生物细胞',
		cost: 			3,
		item_bonus:{
			生物细胞: 	10,				
		},
		skill_bonus:{		
		}
	},	
	小行星矿: {
		name: 	'加强太空探索',
		text: 	'每级增加百分10小行星矿产出',
		background_item: 	'小行星矿',
		cost: 			2,
		item_bonus:{
			小行星矿: 	10,				
		},
		skill_bonus:{		
		}
	},
	
	
	
	

}

available_ap_bonusses = sortObj(available_ap_bonusses);
