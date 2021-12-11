
var available_locations = {
	

		t1n1:{
		name: 				'你的世界',
		image: 				'locations/t1n1.jpg',
		description: 		'你的世界',
		cost:{		
		},
		requires:{
				
		},
		required_items:{
	
		},
		upgrade_cost:{
			coins: 				1000,
			
		},
	
		actions:{
			t1n1_1: 		true,
			t1n1_6: 		['t1n1_5'],
			t1n1_8: 		['t1n1_7'],	
			t1n1_16: 		['t1n1_5'],				
            t1n1_2: 		['t1n1_1'],
			t1n1_9: 		['t1n1_2'],
			t1n1_5: 		['t1n1_2'],	
            t1n1_7: 		['t1n1_2'],	
		    t1n1_13: 		['t1n1_12'],			
            t1n1_4: 		['t1n1_3'],	
            t1n1_14: 		['t1n1_4'],				
			t1n1_3: 		['t1n1_1'],			
			t1n1_10: 		['t1n1_4'],
			t1n1_11: 		['t1n1_9'],
			t1n1_12: 		['t1n1_11'],
			t1n1_15: 		['t1n1_4'],			
		}
	},
	
		t1n2:{
		name: 				'勇者斗恶龙',
		image: 				'locations/t1n2.jpeg',
		description: 		'【外传】为了获取声望和减少下个位置需求地点【里面物品售卖都没价值，大概流程可以获得差不多20声望】。屠龙可以减少百分1下个地点基础费用【最高减少92%同类效果互相乘算】',
		cost:{	
	         经验球: 				10,
		},
		requires:{
				
		},
		required_items:{
	
		},
		upgrade_cost:{
			coins: 				1000,
			
		},
	
		actions:{
			t1n2_1: 		true,
		    t1n2_6: 		['t1n2_1'],	
		    t1n2_11: 		['t1n2_6'],	
		    t1n2_16: 		['t1n2_11'],
		    t1n2_17: 		['t1n2_16'],			
		    t1n2_3: 		['t1n2_1'],			
		    t1n2_5: 		['t1n2_3'],	
		    t1n2_8: 		['t1n2_5'],	
		    t1n2_10: 		['t1n2_8'],	
		    t1n2_13: 		['t1n2_10'],	
		    t1n2_15: 		['t1n2_13'],				
	        t1n2_2: 		['t1n2_1'],
	        t1n2_4: 		['t1n2_2'],	
	        t1n2_7: 		['t1n2_4'],	
	        t1n2_9: 		['t1n2_7'],	
		    t1n2_12: 		['t1n2_9'],	
		    t1n2_14: 		['t1n2_12'],				
			
			
			
		}
	},	


	

	
	
	
	
	
	
//===============================2阶段=========================
	t2n1:{
		name: 				'村庄',
		image: 				'locations/t2n1.png',
		description: 		'村庄-树木矿石资源平均【主要路线可以发展到下阶段】',
		cost:{
		},
		requires:{
		},
		required_items:{
			村民: 	true,	
		},
		upgrade_cost:{
			coins: 				1000,
		},
		actions:{
			t1n1_15: 		['t2n1_1'],				
			t2n1_1: 		true,
		    t2n1_10: 		['t2n1_1'],	
		    t2n1_11: 		['t2n1_10'],	
		    t2n1_12: 		['t2n1_11'],	
		    t2n1_13: 		['t2n1_12'],	
		    t2n1_14: 		['t2n1_12'],	
		    t2n1_15: 		['t2n1_12'],				
            t2n1_2: 		['t2n1_1'],
		    t2n1_3: 		['t2n1_1'],
		    t2n1_6: 		['t2n1_1'],					
            t2n1_4: 		['t2n1_2'],
		    t2n1_5: 		['t2n1_3'],			
		    t2n1_7: 		['t2n1_6'],		
		    t2n1_8: 		['t2n1_7'],	
		    t2n1_9: 		['t2n1_7'],				
	},	
	},	
		t2n2:{
		name: 				'矿洞',
		image: 				'locations/t2n2.png',
		description: 		'开采矿洞-矿石比较多',
		cost:{
		},
		requires:{
		},
		required_items:{
			村民: 	true,	
		},
		upgrade_cost:{
			coins: 				1000,
		},
		actions:{
			t1n1_15: 		['t2n2_1'],				
			t2n2_1: 		true,	
			t2n2_2: 		['t2n2_1'],
			t2n2_3: 		['t2n2_1'],
			t2n2_8: 		['t2n2_1'],	
			t2n2_6: 		['t2n2_1'],				
			t2n2_4: 		['t2n2_2'],
			t2n2_5: 		['t2n2_3'],	
			t2n2_9: 		['t2n2_8'],				
			t2n2_7: 		['t2n2_6'],	
			t2n2_10: 		['t2n2_9'],				
			t2n2_11: 		['t2n2_10'],				
			t2n2_12: 		['t2n2_10'],				
			t2n2_13: 		['t2n2_10'],				
			
		}
	},		
	
	
		t2n3:{
		name: 				'海边',
		image: 				'locations/t2n3.png',
		description: 		'海边发展-椰树比较多',
		cost:{
		},
		requires:{
		},
		required_items:{
			村民: 	true,			
		},
		upgrade_cost:{
			coins: 				1000,
		},
		actions:{
			t1n1_15: 		['t2n3_1'],				
			t2n3_1: 		true,
			t2n3_11: 		['t2n3_6'],			
			t2n3_2: 		['t2n3_1'],
			t2n3_3: 		['t2n3_1'],	
			t2n3_6: 		['t2n3_1'],
			t2n3_9: 		['t2n3_8'],	
			t2n3_10: 		['t2n3_9'],				
			t2n3_4: 		['t2n3_2'],	
			t2n3_5: 		['t2n3_3'],	
			t2n3_7: 		['t2n3_6'],	
			t2n3_8: 		['t2n3_7'],	
			t2n3_12: 		['t2n3_11'],	
			t2n3_13: 		['t2n3_12'],	
			t2n3_14: 		['t2n3_12'],	
			t2n3_15: 		['t2n3_12'],				
		}
	},			
	
//==============================3阶段=========================	
	t3n1:{
		name: 				'游牧',
		image: 				'locations/t3n1.jpg',
		description: 		'主要为打猎生活',
		cost:{
		},
		requires:{
		},
		required_items:{
			凝聚力: 	true,	
		},
		upgrade_cost:{
			coins: 				1000,
		},
		actions:{
			t4n1_1: 		['t3n1_6'],				
			t3n1_1: 		true,
			t3n1_2: 		['t3n1_1'],		
			t3n1_3: 		['t3n1_2'],					
			t3n1_4: 		['t3n1_3'],	
			t3n1_5: 		['t3n1_4'],	
			t3n1_6: 		['t3n1_4'],	
			t3n1_7: 		['t3n1_2'],	
			t3n1_8: 		['t3n1_2'],	
			t3n1_9: 		['t3n1_8'],	
			t3n1_10: 		['t3n1_8'],		
			t3n1_11: 		['t3n1_8'],				
			t3n1_12: 		['t3n1_11'],	
			t3n1_13: 		['t3n1_11'],	
			t3n1_14: 		['t3n1_11'],							
	}},		
	t3n2:{
		name: 				'农场',
		image: 				'locations/t3n2.jpg',
		description: 		'主要为养殖生活',
		cost:{
		},
		requires:{
		},
		required_items:{
			凝聚力: 	true,	
		},
		upgrade_cost:{
			coins: 				1000,
		},
		actions:{	
			t4n1_1: 		['t3n1_6'],			
			t3n1_1: 		true,
			t3n1_2: 		['t3n1_1'],		
			t3n1_3: 		['t3n1_2'],					
			t3n1_4: 		['t3n1_3'],	
			t3n1_5: 		['t3n1_4'],	
			t3n1_6: 		['t3n1_4'],	
			t3n2_1: 		['t3n1_1'],				
			t3n2_2: 		['t3n2_1'],				
			t3n2_3: 		['t3n2_2'],							
			t3n2_4: 		['t3n2_2'],				
			t3n2_5: 		['t3n2_2'],				
			t3n2_6: 		['t3n2_4'],				
			t3n2_7: 		['t3n2_5'],				
		
	}},		
	t3n3:{
		name: 				'航海',
		image: 				'locations/t3n3.jpg',
		description: 		'主要为海上生活',
		cost:{
		},
		requires:{
		},
		required_items:{
			凝聚力: 	true,	
		},
		upgrade_cost:{
			coins: 				1000,
		},
		actions:{	
			t4n1_1: 		['t3n1_6'],	
			t3n1_1: 		true,
			t3n1_2: 		['t3n1_1'],		
			t3n1_3: 		['t3n1_2'],					
			t3n1_4: 		['t3n1_3'],	
			t3n1_5: 		['t3n1_4'],	
			t3n3_6: 		['t3n3_5'],				
			t3n1_6: 		['t3n1_4'],	
			t3n3_1: 		['t3n1_2'],	
			t3n3_4: 		['t3n3_1'],				
			t3n3_2: 		['t3n3_1'],				
			t3n3_3: 		['t3n3_2'],		
			t3n3_5: 		['t3n3_3'],	
			t3n3_7: 		['t3n3_3'],				
			t3n3_8: 		['t3n3_7'],					
	}},			
//==============================4阶段=========================	
	t4n1:{
		name: 				'王国',
		image: 				'locations/t4n1.png',
		description: 		'建设你的王国【发展下个阶段地点】',
		cost:{
		},
		requires:{
		},
		required_items:{
			士兵: 	true,	
		},
		upgrade_cost:{
			coins: 				1000,
		},
		actions:{
			t4n1_1: 		['t3n1_6'],				
	        t4n1_2:     	true,	
	        t4n1_3:     	['t4n1_2'],							
	        t4n1_4:     	['t4n1_8'],			
	        t4n1_5:     	['t4n1_4'],			
	        t4n1_6:     	['t4n1_5'],			
	        t4n1_7:     	['t4n1_6'],			
	        t4n1_8:     	['t4n1_2'],			
	        t4n1_9:     	['t4n1_7'],			
	        t4n1_10:     	['t4n1_9'],				
	        t4n1_12:     	['t4n1_10'],			
	        t4n1_13:     	['t4n1_6'],			
	        t4n1_14:     	['t4n1_6'],			
	        t4n1_15:     	['t4n1_14'],			
	        t4n1_16:     	['t4n1_14'],				
	        t4n1_17:     	['t4n1_14'],	
	        t4n1_18:     	['t4n1_14'],	
	        t4n1_19:     	['t4n1_18'],				
	        t4n1_20:     	['t4n1_18'],
	        t4n1_21:     	['t4n1_20'],
	        t4n1_22:     	['t4n1_21'],

			
	}},		
//==============================5阶段=========================		
	t5n1:{
		name: 				'战争',
		image: 				'locations/t5n1.jpg',
		description: 		'发动战争，附庸其他王国.',
		cost:{
		},
		requires:{
		},
		required_items:{
			影响力: 	true,	
		},
		upgrade_cost:{
			coins: 				1000,
		},
		actions:{		
	        t5n1_1:     	true,	
	        t5n1_2:     	['t5n1_1'],					
	        t5n1_3:     	['t5n1_1'],		
	        t5n1_4:     	['t5n1_3'],		
	        t5n1_5:     	['t5n1_4'],		
	        t5n1_6:     	['t5n1_4'],		
	        t5n1_7:     	['t5n1_6'],		
	        t5n1_8:     	['t5n1_6'],	
	        t5n1_9:     	['t5n1_7'],	
	        t5n1_10:     	['t5n1_7'],	
	        t5n1_11:     	['t5n1_4'],	
	        t5n1_12:     	['t5n1_9'],			
	}},		
	t5n2:{
		name: 				'地狱',
		image: 				'locations/t5n2.jpeg',
		description: 		'探索未知，开采神秘矿石.',
		cost:{
		},
		requires:{
		},
		required_items:{
			影响力: 	true,	
		},
		upgrade_cost:{
			coins: 				1000,
		},
		actions:{		
	        t5n2_1:     	true,	
	        t5n2_2:     	['t5n2_1'],					
	        t5n2_3:     	['t5n2_1'],		
	        t5n2_4:     	['t5n2_3'],		
	        t5n2_5:     	['t5n2_4'],		
	        t5n2_6:     	['t5n2_4'],		
	        t5n2_7:     	['t5n2_6'],		
	        t5n2_8:     	['t5n2_6'],	
	        t5n2_9:     	['t5n2_7'],	
	        t5n2_10:     	['t5n2_7'],	
	        t5n2_11:     	['t5n2_4'],	
	        t5n2_12:     	['t5n2_9'],				
	}},			
	
//==============================6阶段=========================		
	
		t6n1:{
		name: 				'太空',
		image: 				'locations/t6n1.png',
		description: 		'建设你的太空王国【后期可能会卡点可以把前面一些不需要进度的禁用了】【建议后期别卖木棍木头这些低级物品= =本人亲测电脑CPU都能跑满吓死我了】',
		cost:{
		},
		requires:{
		},
		required_items:{
			飞船: 	true,	
		},
		upgrade_cost:{
			coins: 				1000,
		},
		actions:{
			t6n1_1: true,	
	        t6n1_9:     	['t6n1_1'],				
	        t6n1_2:     	['t6n1_1'],	
	        t6n1_5:     	['t6n1_1'],	
	        t6n1_6:     	['t6n1_1'],
	        t6n1_7:     	['t6n1_1'],		
	        t6n1_8:     	['t6n1_7'],	
	        t6n1_11:     	['t6n1_8'],				
	        t6n1_3:     	['t6n1_2'],	
	        t6n1_4:     	['t6n1_2'],	
	        t6n1_10:     	['t6n1_9'],			
	}},	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	alchemist:{
		name: 				'炼金术士',
		image: 				'locations/candle-3272201_640.jpg',
		description: 		'它有自己的药草园。你可以找它学会把石头变成金属。<br/><i>这也是一个放各种药剂的好地方。</i>',
		cost:{
			/*stone: 			1000,
			plank: 			25,
			mint: 			100*/
		},
		requires:{
		},
		required_items:{
			glass: 	true,
			water: true,
			stone: 	true,
		},
		upgrade_cost:{
			coins: 				1000,
		},
		actions:{
			pick_parsley: 		true,
			pick_mint: 			true,
			pick_sage: 			true,
			pick_rosemary: 		true,
			craft_remedy: 		['pick_mint'],
			brew_health_potion: true,
			brew_mana_potion: 	['pick_sage'],
			brew_poison: 		true,
			brew_love_potion: 	['pick_rosemary'],
			brew_restore_potion: ['brew_health_potion','brew_mana_potion'],
			craft_first_aid_kit: ['brew_health_potion'],
			transmute_stone: 	['pick_mint'],
			transmute_iron: 	['pick_mint'],
		}
	},
	beach:{
		name: 				'海滩',
		image: 				'locations/shellfish-3062011_640.jpg',
		description: 		'在海滩上可以搜索沉船，也可以在海上航行。<br/><i>这里是存放玻璃、轮船、钓鱼和使用用品的好地方。</i>',
		cost:{
			/*stone: 			1000,
			plank: 			25,
			mint: 			100*/
		},
		requires:{
		},
		required_items:{
			glass: 	true,
			water: true,
			stone: 	true,
		},
		upgrade_cost:{
			coins: 				1000,
		},
		actions:{
			comb_the_beach: 		true,
			boil_water: 			true,
			smelt_glass: 			true,
			scrounge_wrecks: 		true,
			craft_barrel: 			true,
			build_ship: 			['scrounge_wrecks'],
			build_fishing_ship: 	['build_ship'],
			import_goods: 			['build_ship'],
			import_tools: 			['build_ship'],
			ship_goods: 			['build_ship'],
			catch_seafish: 			['build_fishing_ship'],
		}
	},
	
	/*herb_garden:{
		name: 				'草药园',
		image: 				'locations/garden-5385995_640.jpg',
		description: 		'有许多草本植物的小花园。<br/>你必须在它周围建一堵墙，以确保它不受干扰。',
		cost:{
			stone: 			1000,
			water: 			1000
		},
		requires:{
		},
		required_items:{
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			pick_parsley: 		true,
			pick_mint: 			true,
			pick_sage: 			true,
			pick_rosemary: 		true,
		}
	},*/
	/*orchard:{
		name: 				'果园',
		image: 				'locations/apple-1873078_640.jpg',
		requires:{
		},
		required_items:{
			apple: 		true,
			egg: 		true,
			flour: 		true,
			sugar: 		true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			search_for_firewood: 	true,
			pick_apples: 			true,
		}
	},*/
	forest:{
		name: 				'森林',
		image: 				'locations/trees-975091_640.jpg',
		description: 		'森林有许多用途。<br/><i>这是一个放木柴、苹果、兽皮和肉的好地方。</i>',
		cost:{
			/*water: 			100*/
		},
		requires:{
		},
		required_items:{
			glass: 	true,
			water: true,
			stone: 	true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			scrounge_the_forest: 	true,
			chop_wood: 				true,
			chop_down_tree: 		['train_lumberjack'],
			chop_hardwood: 			['chop_down_tree'],
			chop_firewood: 			['train_lumberjack'],
			pick_apples: 			true,
			craft_arrow: 			true,
			craft_bone_arrow: 		['hunt_birds'],
			craft_bow: 				['craft_arrow'],
			craft_bone_spear: 		['hunt_birds'],
			train_hunter: 			['craft_bow'],
			train_veteran_hunter: 	['craft_bone_spear'],
			train_lumberjack: 		['chop_wood'],
			//hunt_wild_animals: 		true,
			hunt_birds:				['train_hunter'],
			hunt_rabbits: 			['hunt_birds'],
			hunt_deer: 				['hunt_birds'],
			hunt_wolf: 				['hunt_birds'],
			hunt_boars: 			['craft_bone_spear'],
		}
	},
	tailor:{
		name: 				'裁缝店',
		image: 				'locations/tailoring-2575930_640.jpg',
		description: 		'将羊毛和兽皮加工成布料和皮革制品的车间。<br/><i>一个存放布料、皮革和衣服的好地方。</i>',
		cost:{
			/*stone: 			100,*/
		},
		requires:{
		},
		required_items:{
			twine: 			true,
			hide: 			true,
			wool: 			true,
		},
		upgrade_cost:{
			coins: 				1000,
		},
		actions:{
			weave_cloth: 	true,
			knit_cloth: 	true,
			//weave_bandage: 	true,
			sew_sack: 		true,
			sew_pillow: 	['sew_sack'],
			weave_bandage: 	true,
			sew_cloak: 		true,
			tan_leather: 	true,
			craft_boots: 	['tan_leather'],
			craft_saddle: 	['tan_leather'],
		}
	},
	
	lumberyard:{
		name: 				'木材厂',
		image: 				'locations/wood-1729918_640.jpg',
		description: 		'收集木材和制作基本木制品的地方。你甚至可以在这里建立一个贸易站来运送成车的物资。<br/><i>是存放木材、木板、木桶和板条箱的好地方。</i>',
		cost:{
			/*lumber: 			100,*/
		},
		requires:{
		},
		required_items:{
			glass: 	true,
			water: true,
			stone: 	true,
		},		
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			search_for_firewood: 	true,
			chop_wood: 				true,
			chop_down_tree: 		['train_lumberjack'],
			chop_hardwood: 			['chop_down_tree'],
			craft_pole: 			['chop_wood'],
			saw_planks: 			['chop_wood'],
			saw_planks_sawmill: 	['saw_planks'],
			craft_crate:			['saw_planks'],
			craft_barrel: 			['saw_planks'],
			craft_bed: 				['saw_planks'],
			craft_shield: 			['saw_planks'],
			craft_cart: 			['saw_planks','craft_pole'],
			send_supplies: 			['craft_cart'],
			craft_axe: 				true,
			train_lumberjack: 		['craft_axe'],
		}
	},
	mine:{
		name: 				'矿井',
		image: 				'locations/tunnel-1482347_640.jpg',
		description: 		'你可以在这里采集石头和金属矿石。还可以把矿石熔炼成条状。<br/><i>是一个存放石头、玻璃、金属和盐的好地方。</i>',
		cost:{
			/*pole: 				10,
			plank: 				10*/
		},
		requires:{
		},
		required_items:{
			glass: 	true,
			water: true,
			stone: 	true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			dig_hole: 				true,
			craft_charcoal: 		true,
			break_rocks: 			['craft_pickaxe'],
			mine_stone: 			['train_miner'],
			mine_coal: 				['train_miner'],
			mine_copper: 			['train_miner'],
			mine_iron: 				['train_miner'],
			mine_salt: 				['train_miner'],
			mine_silver: 			['train_miner'],
			mine_gold: 				['train_miner'],
			smelt_copper: 			true,
			smelt_iron: 			['break_rocks'],
			smelt_silver: 			['mine_silver'],
			smelt_gold: 			['mine_gold'],
			smelt_glass: 			true,
			craft_pickaxe: 			['smelt_copper'],
			train_miner: 			['craft_pickaxe'],

			/*mine_stone: 		true,
			chisel_brick: 		true,*/
		}
	},
	farm:{
		name: 				'农场',
		image: 				'locations/field-176602_640.jpg',
		description: 		'你可以在这里种小麦和其他作物。鸡也可以在农场中饲养。<br/><i>这里是盛放面粉、肉类、日用品、麻绳和糖的好地方。</i>',
		cost:{
			/*plow: 			10,*/
		},
		requires:{
		},
		required_items:{
			glass: 	true,
			water: true,
			stone: 	true,
		},
		upgrade_cost:{
			coins:  			1000
		},
		actions:{
			clear_the_field: 	true,
			use_the_well: 		true,
			assist_the_farmers: true,
			train_farmer: 		['assist_the_farmers'],
			tend_the_field: 	['train_farmer'],
			grow_wheat: 		['train_farmer'],
			grow_flax: 			['train_farmer'],
			grow_sugarcane: 	['train_farmer'],
			feed_chickens:		['tend_the_field'],
			breed_chickens: 	['feed_chickens'],
			butcher_chickens: 	['breed_chickens'],
			mill_flour:			['tend_the_field'],
			refine_sugar:		['tend_the_field'],
			package_meat: 		['butcher_chickens'],
			package_flour: 		['mill_flour'],
			wind_twine: 		['tend_the_field'],
			/*grow_wheat:			true,
			
			grow_sugarcane:		true,*/
		}
	},
	/*vegetable_patch:{
		name: 				'菜地',
		image: 				'locations/salad-2482457_640.jpg',
		description: 		'你可以在这里种很多蔬菜。<br/>但你需要大量的水。',
		cost:{
			water: 			1000,
		},
		requires:{
		},
		required_items:{
			water: 			true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			grow_lettuce: 		true,
			grow_cucumber:		true,
			grow_tomatoes:		true,
			grow_potatoes: 		true,
			grow_carrots: 		true,
		}
	},*/
	
	/*pottery:{
		name: 				'陶艺坊',
		image: 				'locations/claypots-1323747_640.jpg',
		requires:{
		},
		required_items:{
			clay: 			true,
			firewood: 		true,
		},
		upgrade_cost:{
			coins: 				100,
		},
		actions:{
			bake_brick:		true,
		}
	},*/
	/*furnace:{
		name: 				'熔炉',
		image: 				'locations/metallurgy-2932947_640.jpg',
		description: 		'你可以将熔炼过的矿石制作成金属，还可以烘烤粘土。<br/>',
		cost:{
		},
		requires:{
		},
		required_items:{
			firewood: 		true,
			coal: 			true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			craft_charcoal:			true,
			smelt_copper: 			true,
			smelt_iron: 			true,
			smelt_glass: 			true,
			bake_brick:				true,
			bake_shingle: 			true,
			
		}
	},*/
	kitchen:{
		name: 				'厨房',
		image: 				'locations/castle-3789871_640.jpg',
		description: 		'你可以在这里做很多不同的菜。它还有自己的菜园。<br/><i>一个可以提供各种食物和饮料的好地方。</i>',
		cost:{
			/*plank: 		20,
			stone: 		100,*/
		},
		requires:{
		},
		required_items:{
			firewood: 		true,
			flour: 			true,
			meat: 			true,
			salt: 			true,
			water: 			true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			//tend_vegetable_garden: 	true,
			grow_lettuce: 		true,
			grow_cucumber:		true,
			grow_tomatoes:		true,
			grow_onions: 		true,
			grow_potatoes: 		true,
			grow_carrots: 		true,
			bake_bread:				true,
			churn_butter: 			true,
			make_cheese: 			true,

			make_salad: 			['grow_cucumber','grow_tomatoes'],
			cook_onion_rings: 		['grow_onions'],
			cook_tomato_soup:		['grow_tomatoes'],
			brew_mint_tea: 			true,
			make_cucumber_sandwich: 	['grow_cucumber','bake_bread'],
			bake_fries: 			['grow_potatoes'],

			//cook_perch_and_potatoes:	['grow_potatoes'],
			cook_steak: 			true,
			cook_hamburger: 		['make_salad','bake_bread','grow_onions'],
			cook_steak_dinner: 		['make_salad','bake_fries','cook_steak'],
			bake_apple_pie: 		true,

			serve_high_tea: 			['brew_mint_tea','make_cucumber_sandwich'],
			serve_three_course_dinner: 	['cook_tomato_soup','cook_steak_dinner','bake_apple_pie'],

		}
	},
	/*mill:{
		name: 				'磨坊',
		image: 				'locations/mill-1745186_640.jpg',
		description: 		'用磨粉机把小麦磨成面粉，或从甘蔗中压榨出糖。<br/>',
		cost:{
		},
		requires:{
		},
		required_items:{
			wheat: 		true,
			sugarcane: 	true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			mill_flower:		true,
			refine_sugar:		true,
		}
	},*/
	smithy:{
		name: 				'铁匠铺',
		image: 				'locations/horseshoe-1516273_640.jpg',
		description: 		'你可以在这里把金属和木头变成有用的器材。<br/><i>一个放置钉子、工具和珠宝的好地方。</i>',
		cost:{
		},
		requires:{
		},
		required_items:{
			copper: 	true,
			iron: 		true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			craft_copper_pot:	true,
			craft_nails: 		true,
			craft_plow: 		true,
			craft_pitchfork: 	true,
			craft_knife:		true,
			craft_axe: 			true,
			craft_iron_pickaxe: true,
			craft_spear: 		true,
			craft_plate_armor: 	true,
			craft_silver_ring: 	true,
			craft_gold_ring: 	true,
			craft_sinister_dagger: ['craft_knife'],
		}
	},
	river:{
		name: 				'河',
		image: 				'locations/landscape-336542_640.jpg',
		description: 		'你可以在这里收集水、沙石和粘土。你甚至可以钓到一些鱼！<br/><i>一个很好的出产鱼，用品和砖块的地方。</i>',
		cost:{
			/*plank: 		10,*/
		},
		requires:{
		},
		required_items:{
			glass: 	true,
			water: true,
			stone: 	true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			comb_the_shore: 	true,
			save_swimmer: 		true,
			catch_fish: 		['train_fisherman'],
			roast_perch: 		['catch_fish'],
			grill_trout: 		['catch_fish'],
			cook_salmon: 		['catch_fish'],
			cook_eel: 			['catch_fish'],
			package_fish: 		['catch_fish'],
			craft_net: 			true,
			train_fisherman: 	['craft_net'],
			gather_clay: 		true,
			bake_brick:			['gather_clay'],
			build_tollbridge: 	['bake_brick'],
			/*gather_water:		true,
			gather_sand: 		true,
			*/
			/*catch_perch: 		true,*/
		}
	},
	/*ranch:{
		name: 				'牧场',
		image: 				'locations/utah-139984_640.jpg',
		description: 		'饲养和照料绵羊和奶牛的地方。<br/>也许，如果你把它扩展得足够大，就可以在里面养一些马。<br/>',
		cost:{
		},
		requires:{
		},
		required_items:{
			hay_bale: 		true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			breed_sheep: 	true,
			shear_sheep: 	true,
			breed_cows:		true,
			milk_cows: 		true,
			breed_horses: 	true,
			train_cowboy: 	true,
		}
	},*/
	/*butcher:{
		name: 				'屠宰场',
		image: 				'locations/fleischer-4518180_640.jpg',
		description: 		'你可以在这里屠宰绵羊和奶牛来获取肉。<br/>',
		cost:{
			knife: 			1
		},
		requires:{
			sheep: 		true,
			cow: 		true,
		},
		required_items:{
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			butcher_sheep: 		true,
			butcher_cow:		true,
		}
	},*/
	meadow:{
		name: 				'草原',
		image: 				'locations/yellow-3123271_640.jpg',
		description: 		'一个收集草并把它变成干草的地方。你甚至可能会遇到一些野生绵羊、牛和马。<br/><i>一个出产羊毛、兽皮、牛奶和肉的好去处。</i>',
		cost:{
			/*lumber: 			100,*/
		},
		requires:{
		},
		required_items:{
			glass: 	true,
			water: true,
			stone: 	true,
		},		
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			mow_grass:			true,
			dry_grass: 			true,
			bind_hay: 			['dry_grass'],
			look_for_herbs: 	true,
			hunt_wild_sheep: 	['dry_grass'],
			breed_sheep: 		['bind_hay','hunt_wild_sheep'],
			shear_sheep: 		['breed_sheep'],
			breed_cows:			['bind_hay','hunt_wild_sheep'],
			milk_cows: 			['breed_cows'],
			breed_horses: 		['bind_hay','hunt_wild_sheep'],
			butcher_sheep: 		['breed_sheep'],
			butcher_cow:		['breed_cows'],
			package_meat: 		true,
			train_cowboy: 		['hunt_wild_sheep'],
			sell_herd: 			['train_cowboy'],
		}
	},
	village:{
		name: 				'村庄',
		image: 				'locations/medieval-3413173_640.jpg',
		description: 		'一个叫家的地方。一旦你建造了它，你就可以扩大它并吸引村民。<br/><i>一个适合各种工人居住的好地方。</i>',
		cost:{
			/*brick: 			100,
			plank: 			100*/
		},
		requires:{
		},
		required_items:{
			clay: 			true,
			brick: 			true,
			stone: 			true,
			plank: 			true,
			glass: 			true,
		},
		upgrade_cost:{
			coins: 				500,
		},
		actions:{
			chisel_brick: 		true,
			bake_shingle: 		true,
			build_wall:			true,
			build_house: 		['build_wall'],
			attract_peasant: 	['build_house'],
			train_guard: 		['build_house'],
			patrol_village: 	['train_guard'],
			train_thief: 		['build_house'],
			employ_thieves: 	['build_house'],
		}
	},
	

}

available_locations = sortObj(available_locations);