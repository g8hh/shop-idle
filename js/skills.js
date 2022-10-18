var skill_level_factor = 1;
         var 星区名称=new Array();
          星区名称[1]="α";
          星区名称[2]="β";
          星区名称[3]="γ";
          星区名称[4]="δ";
          星区名称[5]="ε";	
          星区名称[6]="ζ";		  
          星区名称[7]="ν";	
          星区名称[8]="ξ";			  			  
          星区名称[9]="ο";	
          星区名称[10]="π";
          星区名称[11]="ρ";
          星区名称[12]="σ";
          星区名称[13]="η";
          星区名称[14]="θ";	
          星区名称[15]="ι";		  
          星区名称[16]="κ";	
          星区名称[17]="λ";			  			  
          星区名称[18]="μ";			  
          星区名称[19]="τ";
          星区名称[20]="υ";
          星区名称[21]="φ";
          星区名称[22]="χ";
          星区名称[23]="ψ";	
          星区名称[24]="ω";	
          星区名称[25]="αβ";
          星区名称[26]="βγ";
          星区名称[27]="γδ";
          星区名称[28]="δε";
          星区名称[29]="εζ";	
          星区名称[30]="ζν";		  
          星区名称[31]="νξ";	
          星区名称[32]="ξο";			  			  
          星区名称[33]="οπ";	
          星区名称[34]="πρ";
          星区名称[35]="ρσ";
          星区名称[36]="ση";
          星区名称[37]="ηθ";
          星区名称[38]="θι";	
          星区名称[39]="ικ";		  
          星区名称[40]="κλ";	
          星区名称[41]="λμ";			  			  
          星区名称[42]="μτ";			  
          星区名称[43]="τυ";
          星区名称[44]="υφ";
          星区名称[45]="φχ";
          星区名称[46]="χψ";
          星区名称[47]="ψω";	
          星区名称[48]="ωα";		
          星区名称[49]="αγ";
          星区名称[50]="βδ";
          星区名称[51]="γ";
          星区名称[52]="δζ";
          星区名称[53]="εν";	
          星区名称[54]="ζξ";		  
          星区名称[55]="νο";	
          星区名称[56]="ξπ";			  			  
          星区名称[57]="ορ";	
          星区名称[58]="πσ";
          星区名称[59]="ρη";
          星区名称[60]="σθ";		  
          星区名称[undefined]="ω";

function effective_skill_level(skill_id){
	check_skill(skill_id);

	var current_skill = gamedata['skills'][skill_id];
	var effective_skill_level = 0;

	effective_skill_level += current_skill['level'];

	$('.skill_level_' + skill_id).html(effective_skill_level + ' <span class="skill_percent">(' + nFormatter(get_skill_percent(skill_id),2) + '%)</span>');

	return effective_skill_level * skill_level_factor;
}

function gain_skill_xp(skill_id, amount){

	check_skill(skill_id);
	gamedata['skills'][skill_id]['skill_xp'] += amount;
	check_skill(skill_id);
}

function get_skill_percent(skill_id){
	check_skill(skill_id);
	var current_skill = gamedata['skills'][skill_id];
	var next_xp_needed = get_xp_needed(current_skill['level']);

	return ((current_skill['skill_xp'] / next_xp_needed) * 1000) / 10;
}

function check_skill(skill_id){
	if(gamedata['skills'] == undefined)
	{
		gamedata['skills'] = {};
		//saveToLocalStorage();
	}
	if(gamedata['skills'][skill_id] == undefined)
	{
		gamedata['skills'][skill_id] = {
			level: 		1,
			skill_xp: 	0,
		}
		//saveToLocalStorage();
	}

	var current_skill = gamedata['skills'][skill_id];

	if(current_skill['skill_xp'] > 0 && current_skill['skill_xp'] >= get_xp_needed(current_skill['level']))
	{
		current_skill['skill_xp'] -= get_xp_needed(current_skill['level']);
		current_skill['level'] ++;
		//saveToLocalStorage();
		check_skill(skill_id);
	}
}

function get_xp_needed(level){
	//level *= skill_level_factor;
	var new_level_cost = 1;
	for(i = 1; i < level; i++)
	{
		new_level_cost *= 1.2;
	}
	//var xp_needed = 1000 * (level * (0.90 + (level / 10)));
	//console.log(new_level_cost);
	return new_level_cost;
}
 function 太空项目div(obj)
        {
     var 项目0 = document.getElementById("MailDiv0");
	 var 项目1 = document.getElementById("MailDiv1");
	 var 项目2 = document.getElementById("MailDiv2");
	 var 项目3 = document.getElementById("MailDiv3");
	 var 项目4 = document.getElementById("MailDiv4"); 
	 var 项目5 = document.getElementById("MailDiv5"); 	 
	 var 项目6 = document.getElementById("MailDiv6"); 		 
        项目0.style.display="none";
        项目1.style.display="none";
        项目2.style.display="none";
        项目3.style.display="none";		
		项目4.style.display="none";	
		项目5.style.display="none";
		项目6.style.display="none";		
       if(0==parseInt(obj)){项目0.style.display="";}	
       if(1==parseInt(obj)){项目1.style.display="";舰队项目()}	
       if(2==parseInt(obj)){项目2.style.display="";科技项目()}	
       if(3==parseInt(obj)){项目3.style.display="";战绩项目()}			
       if(4==parseInt(obj)){项目4.style.display="";巨构项目()}    
       if(5==parseInt(obj)){项目5.style.display="";首都项目()}   
       if(6==parseInt(obj)){项目6.style.display="";星区管理项目(); if(gamedata['星战']['星区管理'] == undefined){gamedata['星战']['星区管理'] = 1;} }   	   
       if(gamedata['殖民地1_1']==false){document.getElementById("殖民地1_1").innerHTML = "【关】"; }
	   else{;document.getElementById("殖民地1_1").innerHTML = "【开】"; }
	   
        }
		
 function 舰队项目(){	

	if(gamedata['舰队'] == undefined){gamedata['舰队'] = {};}
	if(gamedata['inventory']['火星消息1']  != undefined){document.getElementById("探索火星").style.display="";}
	if(gamedata['inventory']['水星消息1']  != undefined){document.getElementById("探索水星").style.display="";}
	if(gamedata['inventory']['金星消息1']  != undefined){document.getElementById("探索金星").style.display="";}
	if(gamedata['inventory']['远征货运']   != undefined){document.getElementById("探索银河系").style.display="";}	
	
	if(gamedata['inventory']['远征货运']  >= 1){document.getElementById("舰队项目1").style.display="";}	
	for(i = 1; i <= 12; i++){舰队列表(i)}	 
	
 }			

  function 舰队列表(obj){
	
	
	if(gamedata['inventory']['战斗飞船']  != undefined){var 战斗飞船=gamedata['inventory']['战斗飞船'] }else{var 战斗飞船=0}
	if(gamedata['inventory']['黑龙战舰']  != undefined){var 黑龙战舰=gamedata['inventory']['黑龙战舰'] }else{var 黑龙战舰=0}	
	if(gamedata['inventory']['火星号']  != undefined){var 火星号=gamedata['inventory']['火星号'] }else{var 火星号=0}
	if(gamedata['inventory']['金星号']  != undefined){var 金星号=gamedata['inventory']['金星号'] }else{var 金星号=0}
	if(gamedata['inventory']['水星号']  != undefined){var 水星号=gamedata['inventory']['水星号'] }else{var 水星号=0}	
	if(gamedata['inventory']['阳光号']  != undefined){var 阳光号=gamedata['inventory']['阳光号'] }else{var 阳光号=0}		
	if(gamedata['inventory']['太阳号']  != undefined){var 太阳号=gamedata['inventory']['太阳号'] }else{var 太阳号=0}		
	if(gamedata['inventory']['火星保卫者']  != undefined){var 火星保卫者=gamedata['inventory']['火星保卫者'] }else{var 火星保卫者=0}
	if(gamedata['inventory']['水星变异号']  != undefined){var 水星变异号=gamedata['inventory']['水星变异号'] }else{var 水星变异号=0}	
	if(gamedata['inventory']['巨齿鲨舰']  != undefined){var 巨齿鲨舰=gamedata['inventory']['巨齿鲨舰'] }else{var 巨齿鲨舰=0}		
	if(gamedata['inventory']['鱼雷舰']  != undefined){var 鱼雷舰=gamedata['inventory']['鱼雷舰'] }else{var 鱼雷舰=0}	
	
	if(gamedata['太空']['星宫守卫者']  != undefined){var 星宫守卫者=gamedata['太空']['星宫守卫者'] }else{var 星宫守卫者=0}	
	
	
	
	if(gamedata['inventory']['红色激光']  != undefined){var 红色激光=gamedata['inventory']['红色激光'] }else{var 红色激光=0}	
	if(gamedata['inventory']['小型导弹']  != undefined){var 小型导弹=gamedata['inventory']['小型导弹'] }else{var 小型导弹=0}
	if(gamedata['inventory']['蓝色激光']  != undefined){var 蓝色激光=gamedata['inventory']['蓝色激光'] }else{var 蓝色激光=0}	
	if(gamedata['inventory']['中型导弹']  != undefined){var 中型导弹=gamedata['inventory']['中型导弹'] }else{var 中型导弹=0}
	if(gamedata['inventory']['死亡激光']  != undefined){var 死亡激光=gamedata['inventory']['死亡激光'] }else{var 死亡激光=0}
	if(gamedata['inventory']['紫色激光']  != undefined){var 紫色激光=gamedata['inventory']['紫色激光'] }else{var 紫色激光=0}
	if(gamedata['inventory']['大型导弹']  != undefined){var 大型导弹=gamedata['inventory']['大型导弹'] }else{var 大型导弹=0}
	if(gamedata['inventory']['死射']  != undefined){var 死射=gamedata['inventory']['死射'] }else{var 死射=0}
	if(gamedata['inventory']['太空鱼雷']  != undefined){var 太空鱼雷=gamedata['inventory']['太空鱼雷'] }else{var 太空鱼雷=0}
	if(gamedata['inventory']['装甲鱼雷']  != undefined){var 装甲鱼雷=gamedata['inventory']['装甲鱼雷'] }else{var 装甲鱼雷=0}	
  	  
	 var 舰队表=parseInt(obj)
	 
	 var S型武器数量=红色激光+小型导弹
	 var M型武器数量=蓝色激光+中型导弹
	 var L型武器数量=死亡激光+大型导弹+紫色激光+太空鱼雷
	 var XL型武器数量=死射+装甲鱼雷
	 var XXL型武器数量=0
	 
	 
	 var 护卫舰队数量=战斗飞船*2+火星号*3+黑龙战舰*8+阳光号*4+太阳号*100+火星保卫者*10+水星变异号*20
	 var 驱逐舰队数量=金星号+黑龙战舰*3+阳光号*2+太阳号*20+火星保卫者*5+星宫守卫者*888
	 var 战列舰队数量=太阳号*5+火星保卫者+水星变异号+巨齿鲨舰*12+星宫守卫者*88+鱼雷舰
	 var 无畏舰队数量=星宫守卫者*8
	 var 泰坦舰队数量=0	 
	 

     if(S型武器数量>=护卫舰队数量){var S型武器评分=护卫舰队数量*20; var S武器=0  } 
	 else{var S型武器评分=S型武器数量*20;var S武器=护卫舰队数量-S型武器数量}

     if(M型武器数量>=驱逐舰队数量){var M型武器评分=驱逐舰队数量*100; var M武器=0  } 
	 else{var M型武器评分=M型武器数量*100;var M武器=驱逐舰队数量-M型武器数量}


     if(L型武器数量>=战列舰队数量){var L型武器评分=战列舰队数量*800; var L武器=0  } 
	 else{var L型武器评分=L型武器数量*800;var L武器=战列舰队数量-L型武器数量}

     if(XL型武器数量>=无畏舰队数量){var XL型武器评分=无畏舰队数量*10000; var XL武器=0  } 
	 else{var XL型武器评分=XL型武器数量*10000;var XL武器=无畏舰队数量-XL型武器数量}
	 
     if(XXL型武器数量>=泰坦舰队数量){var XXL型武器评分=泰坦舰队数量*500000; var XXL武器=0  } 
	 else{var XXL型武器评分=XXL型武器数量*500000;var XXL武器=泰坦舰队数量-XXL型武器数量}
	 	 
	 
	 var 护卫舰队评分=战斗飞船*65+火星号*155+水星号*220+金星号*100+鱼雷舰*300
	 var 驱逐舰队评分=黑龙战舰*1500+阳光号*1000+火星保卫者*3700+水星变异号*4000
	 var 战列舰队评分=太阳号*30000+巨齿鲨舰*34000
	 var 无畏舰队评分=星宫守卫者*880000
	 var 泰坦舰队评分=0
	 var 评分=0	   
	 var 文本="总"
	 var 提示文本=""
	 var 没额外武器=""
	 
	 
	 
	  
	  if(舰队表==1){var 评分=护卫舰队评分    ;var 文本="护卫舰队：总";var 提示文本=""} 
      if(舰队表==2){var 评分=驱逐舰队评分    ;var 文本="驱逐舰队：总";var 提示文本=""}
	  if(舰队表==3){var 评分=战列舰队评分    ;var 文本="战列舰队：总";var 提示文本=""} 
      if(舰队表==4){var 评分=无畏舰队评分    ;var 文本="无畏舰队：总";var 提示文本=""}
	  if(舰队表==5){var 评分=泰坦舰队评分    ;var 文本="泰坦舰队：总";var 提示文本=""} 
	  if(舰队表==6){var 评分=S型武器评分     ;var 文本="舰队的S型武器：总";  var 没额外武器="<br>你的舰队还可以装备【"+S武器+"个S型武器】<br>"} 
      if(舰队表==7){var 评分=M型武器评分     ;var 文本="舰队的M型武器：总";  var 没额外武器="<br>你的舰队还可以装备【"+M武器+"个M型武器】<br>"}
	  if(舰队表==8){var 评分=L型武器评分     ;var 文本="舰队的L型武器：总";  var 没额外武器="<br>你的舰队还可以装备【"+L武器+"个L型武器】<br>"} 
      if(舰队表==9){var 评分=XL型武器评分    ;var 文本="舰队的XL型武器：总"; var 没额外武器="<br>你的舰队还可以装备【"+XL武器+"个XL型武器】<br>"}
	  if(舰队表==10){var 评分=XXL型武器评分  ;var 文本="舰队的XXL型武器：总" ; var 没额外武器="<br>你的舰队还可以装备【"+XXL武器+"个XXL型武器】<br>"} 	  
	  

	  
	  var 舰队武器总评分=护卫舰队评分+驱逐舰队评分+战列舰队评分+无畏舰队评分+泰坦舰队评分+S型武器评分+M型武器评分+L型武器评分+XL型武器评分+XXL型武器评分;
	  
  	  if(gamedata['科技']['科技5等级'] != undefined){var 工程学=gamedata['科技']['科技5等级']*0.01 }else{var 工程学=0}	
  	  if(gamedata['科技']['科技9等级'] != undefined){var 人工智能=gamedata['科技']['科技9等级']*0.01 }else{var 人工智能=0}	
  	  if(gamedata['科技']['科技13等级'] != undefined){var 活体金属=gamedata['科技']['科技13等级']*0.01 }else{var 活体金属=0}	

	  var 科技加成=工程学+人工智能+活体金属
	  
	  
	  
	  var 总评分=舰队武器总评分+舰队武器总评分*科技加成
	  
	  if(舰队表==11){var 评分=舰队武器总评分+舰队武器总评分*科技加成;gamedata['舰队']['总评分']=总评分};
	  
	  if(舰队表==12){var 评分=舰队武器总评分*科技加成; var 文本="科技研究：总" ;};	  	  
		  
		  
	  document.getElementById("舰队总评分").innerHTML = "总评分【"+nFormatter(总评分,3)+"】";
      document.getElementById("舰队"+舰队表+"").innerHTML = ""+文本+"评分【"+nFormatter(评分,3)+"】"+没额外武器+"";	 
	  document.getElementById("舰队"+舰队表+"").style.display="";
	  document.getElementById("舰队"+舰队表+"").title=""+提示文本+"";
	  
	  
	  
	  
	  
	 document.getElementById("巨构战斗提示3").innerHTML = "【"+Math.floor(总评分/1000000)+"货物】你有"+gamedata['inventory']['货物']+"货物"; 	




    if(gamedata['inventory']['作战指令']  != undefined){
	
	 var 主力舰队 =gamedata['舰队']['总评分']+gamedata['星战']['总评分']*0.2	
	 document.getElementById("巨构战斗提示4").innerHTML = "【"+Math.floor(主力舰队/2000000)+"作战指令】你有"+gamedata['inventory']['作战指令']+"作战指令"; 	
	  document.getElementById("作战指令").style.display="";	 
	  document.getElementById("作战指令1").style.display="";	 	 
	 
     }


	 
	 document.getElementById("星门提示1").innerHTML = "【你有"+gamedata['inventory']['星门模块']+"星门模块】"; 	  
	 document.getElementById("戴森壳提示1").innerHTML = "【你有"+gamedata['inventory']['戴森壳模块']+"戴森壳模块】"; 	  
	 document.getElementById("星环城提示1").innerHTML = "【你有"+gamedata['inventory']['星环城模块']+"星环城模块】"; 	
	 document.getElementById("工厂提示1").innerHTML = "【你有"+gamedata['inventory']['工厂模块']+"工厂模块】"; 		 
  }
  
 function 战绩项目(){	


    document.getElementById("战绩界面1").innerHTML = "";
	for(i = 1; i <= 47; i++){if(gamedata['战绩']['敌人'+i+''] >=0){战绩列表(i)}}			
 	document.getElementById("战败").innerHTML =""+gamedata['战绩']['战败']+"";
 }			

  function 战绩列表(obj){
	  	        
	 var 战绩表=parseInt(obj)
	 var 舰队力量=gamedata['舰队']['总评分']
	 var 胜率=0	   
	 var 文本="文本"
	 var 提示文本="无"
	 var 击杀数=gamedata['战绩']["敌人"+战绩表] 
	  
	  if(战绩表==1){var 胜率=(舰队力量/100)*100-50   ;var 文本="太空生物：";var 提示文本="看起来轻飘飘的太空生物"} 
      if(战绩表==2){var 胜率=(舰队力量/(10000+gamedata['战绩']['敌人2']*10000))*100-50   ;var 文本="黑龙：";var 提示文本="无"}
	  if(战绩表==3){var 胜率=(舰队力量/5000)*100-50  ;var 文本="火星生物：";var 提示文本="无"} 
      if(战绩表==4){var 胜率=(舰队力量/(500000+gamedata['战绩']['敌人4']*50000))*100-50   ;var 文本="火星领主：";var 提示文本="无"}
	  if(战绩表==5){var 胜率=(舰队力量/25000)*100-50  ;var 文本="变异蟑螂：";var 提示文本="无"} 
      if(战绩表==6){var 胜率=(舰队力量/(80000+gamedata['战绩']['敌人6']*800))*100-50   ;var 文本="蟑螂王：";var 提示文本="无"}	  
	  if(战绩表==7){var 胜率=(舰队力量/7000)*100-50  ;var 文本="金星生物：";var 提示文本="无"} 
      if(战绩表==8){var 胜率=(舰队力量/(700000+gamedata['战绩']['敌人8']*70000))*100-50   ;var 文本="金星领主：";var 提示文本="无"}
	  if(战绩表==9){var 胜率=(舰队力量/30000)*100-50  ;var 文本="熔岩兽：";var 提示文本="无"} 
      if(战绩表==10){var 胜率=(舰队力量/(100000+gamedata['战绩']['敌人10']*1000))*100-50   ;var 文本="熔岩巨兽：";var 提示文本="无"}		  
	  if(战绩表==11){var 胜率=(舰队力量/6000)*100-50  ;var 文本="水星生物：";var 提示文本="无"} 
      if(战绩表==12){var 胜率=(舰队力量/(600000+gamedata['战绩']['敌人12']*60000))*100-50   ;var 文本="水星领主：";var 提示文本="无"}
	  if(战绩表==13){var 胜率=(舰队力量/28000)*100-50  ;var 文本="火元素：";var 提示文本="无"} 
      if(战绩表==14){var 胜率=(舰队力量/(90000+gamedata['战绩']['敌人14']*900))*100-50   ;var 文本="炎元素：";var 提示文本="无"}	  
	  if(战绩表==15){var 胜率=(舰队力量/1500000)*100-50  ;var 文本="以太风探索舰队：";var 提示文本="无"} 
      if(战绩表==16){var 胜率=(舰队力量/(2500000+gamedata['战绩']['敌人16']*10000))*100-50   ;var 文本="以太风武装货运：";var 提示文本="无"}

	  if(战绩表==17){var 胜率=(舰队力量/1600000)*100-50  ;var 文本="泽尔甘探索舰队：";var 提示文本="无"} 
      if(战绩表==18){var 胜率=(舰队力量/(2600000+gamedata['战绩']['敌人18']*10000))*100-50   ;var 文本="泽尔甘武装货运：";var 提示文本="无"}	  
	  
	  if(战绩表==19){var 胜率=(舰队力量/1700000)*100-50  ;var 文本="布沙克探索舰队：";var 提示文本="无"} 
      if(战绩表==20){var 胜率=(舰队力量/(2700000+gamedata['战绩']['敌人20']*10000))*100-50   ;var 文本="布沙克武装货运：";var 提示文本="无"}

	  if(战绩表==21){var 胜率=(舰队力量/1800000)*100-50  ;var 文本="达拉泽探索舰队：";var 提示文本="无"} 
      if(战绩表==22){var 胜率=(舰队力量/(2800000+gamedata['战绩']['敌人22']*10000))*100-50   ;var 文本="达拉泽武装货运：";var 提示文本="无"}	  

	  if(战绩表==23){var 胜率=(舰队力量/1000000)*100-50  ;var 文本="白羊座舰队：";var 提示文本="无"} 
	  if(战绩表==24){var 胜率=(舰队力量/2000000)*100-50  ;var 文本="金牛座舰队：";var 提示文本="无"} 
	  if(战绩表==25){var 胜率=(舰队力量/3000000)*100-50  ;var 文本="双子座舰队：";var 提示文本="无"} 
	  if(战绩表==26){var 胜率=(舰队力量/4000000)*100-50  ;var 文本="巨蟹座舰队：";var 提示文本="无"} 
	  if(战绩表==27){var 胜率=(舰队力量/5000000)*100-50  ;var 文本="狮子座舰队：";var 提示文本="无"} 
	  if(战绩表==28){var 胜率=(舰队力量/6000000)*100-50  ;var 文本="处女座舰队：";var 提示文本="无"} 
	  if(战绩表==29){var 胜率=(舰队力量/7000000)*100-50  ;var 文本="天秤座舰队：";var 提示文本="无"} 
	  if(战绩表==30){var 胜率=(舰队力量/8000000)*100-50  ;var 文本="天蝎座舰队：";var 提示文本="无"} 
	  if(战绩表==31){var 胜率=(舰队力量/9000000)*100-50  ;var 文本="射手座舰队：";var 提示文本="无"} 
	  if(战绩表==32){var 胜率=(舰队力量/10000000)*100-50  ;var 文本="摩羯座舰队：";var 提示文本="无"} 
	  if(战绩表==33){var 胜率=(舰队力量/11000000)*100-50  ;var 文本="水瓶座舰队：";var 提示文本="无"} 
	  if(战绩表==34){var 胜率=(舰队力量/12000000)*100-50  ;var 文本="双鱼座舰队：";var 提示文本="无"} 
      if(战绩表==35){var 胜率=(舰队力量/(5000000+gamedata['战绩']['敌人35']*1000000))*100-50   ;var 文本="失控的堕落帝国战舰：";var 提示文本="无"}

	  
 	  if(战绩表==36){var 胜率=(舰队力量/(3000000+gamedata['太空']['宫殿以太风']*10000))*100-50  ;var 文本="以太风宫殿舰队：";var 提示文本="无"}	  		 
	  if(战绩表==37){var 胜率=(舰队力量/(6000000+gamedata['太空']['宫殿以太风']*20000))*100-50  ;var 文本="以太风精英舰队：";var 提示文本="无"}	  	
	  if(战绩表==38){var 胜率=(舰队力量/(30000000+gamedata['太空']['宫殿以太风']*30000))*100-50  ;var 文本="以太风旗舰：";var 提示文本="无"}	  			  
		 
	  if(战绩表==39){var 胜率=(舰队力量/(4000000+gamedata['太空']['宫殿泽尔甘']*10000))*100-50  ;var 文本="泽尔甘宫殿舰队：";var 提示文本="无"}	  		 
	  if(战绩表==40){var 胜率=(舰队力量/(7000000+gamedata['太空']['宫殿泽尔甘']*20000))*100-50  ;var 文本="泽尔甘精英舰队：";var 提示文本="无"}	  	
	  if(战绩表==41){var 胜率=(舰队力量/(40000000+gamedata['太空']['宫殿泽尔甘']*30000))*100-50  ;var 文本="泽尔甘旗舰：";var 提示文本="无"}	 

	  if(战绩表==42){var 胜率=(舰队力量/(5000000+gamedata['太空']['宫殿布沙克']*10000))*100-50  ;var 文本="布沙克宫殿舰队：";var 提示文本="无"}	  		 
	  if(战绩表==43){var 胜率=(舰队力量/(8000000+gamedata['太空']['宫殿布沙克']*20000))*100-50  ;var 文本="布沙克精英舰队：";var 提示文本="无"}	  	
	  if(战绩表==44){var 胜率=(舰队力量/(50000000+gamedata['太空']['宫殿布沙克']*30000))*100-50  ;var 文本="布沙克旗舰：";var 提示文本="无"}	 

	  if(战绩表==45){var 胜率=(舰队力量/(6000000+gamedata['太空']['宫殿达拉泽']*10000))*100-50  ;var 文本="达拉泽宫殿舰队：";var 提示文本="无"}	  		 
	  if(战绩表==46){var 胜率=(舰队力量/(9000000+gamedata['太空']['宫殿达拉泽']*20000))*100-50  ;var 文本="达拉泽精英舰队：";var 提示文本="无"}	  	
	  if(战绩表==47){var 胜率=(舰队力量/(60000000+gamedata['太空']['宫殿达拉泽']*30000))*100-50  ;var 文本="达拉泽旗舰：";var 提示文本="无"}	  
	  
	  
	  
	  
	  
	  
	  
	 if(胜率>=100){var  胜率="H"} 
	 else if(胜率>=90){var  胜率="G"} 
	 else if(胜率>=80){var  胜率="F"} 
	 else if(胜率>=70){var  胜率="E"} 
	 else if(胜率>=60){var  胜率="D"} 
	 else if(胜率>=50){var  胜率="C"} 	 
	 else if(胜率>=40){var  胜率="B"} 
	 else if(胜率>=30){var  胜率="A"} 
	 else if(胜率>=20){var  胜率="S"} 
	 else if(胜率>=10){var  胜率="SS"} 
	 else if(胜率>=1){var  胜率="SSS"} 	 
	 else{var  胜率="???"}

	  var 战绩界面 = '';	
          战绩界面 ='<div  title='+提示文本+' class="page_section3">'+文本+'对你来说【'+胜率+'级】难度击杀数：'+nFormatter(击杀数,2)+'</div>';		  
	  $('.战绩界面').append(战绩界面);  

	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
 
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
  }
 
  function 舰队战斗(obj){ 

    var  舰队战斗=parseInt(obj)
	var myDate = new Date();   
	var mytime=myDate.toLocaleTimeString(); 
    if(gamedata['舰队']['战斗时间'] == undefined){gamedata['舰队']['战斗时间'] = 0;}
	
    if(gamedata['科技']['科技1等级'] != undefined){var 舰队引擎改良=gamedata['科技']['科技1等级'] }	else{var 舰队引擎改良=0 }
    if(gamedata['科技']['科技6等级'] != undefined){var 等离子推进器=gamedata['科技']['科技6等级']*2 }	else{var 等离子推进器=0 }	
	
	
    if(舰队战斗==1){gamedata['舰队']['地点']=1;gamedata['舰队']['战斗时间']=0} 
    if(舰队战斗==2){gamedata['舰队']['地点']=2;gamedata['舰队']['战斗时间']=0} 
    if(舰队战斗==3){gamedata['舰队']['地点']=3;gamedata['舰队']['战斗时间']=0}   
    if(舰队战斗==4){gamedata['舰队']['地点']=4;gamedata['舰队']['战斗时间']=0} 
    if(舰队战斗==5){gamedata['舰队']['地点']=5;gamedata['舰队']['战斗时间']=0} 
    if(舰队战斗==6){gamedata['舰队']['地点']=6;gamedata['舰队']['战斗时间']=0} 	
  
     if(舰队战斗==99){ 
	 
	 var 舰队速度=10+舰队引擎改良+等离子推进器
       
     if(gamedata['舰队']['地点']==1){var 距离=0;document.getElementById("舰队战斗提示1").innerHTML = "地球";}	
	 if(gamedata['舰队']['地点']==2){var 距离=10;document.getElementById("舰队战斗提示1").innerHTML = "月球探索中【距离10】";}	  
	 if(gamedata['舰队']['地点']==3){var 距离=240;document.getElementById("舰队战斗提示1").innerHTML = "火星探索中【距离240】";}		
	 if(gamedata['舰队']['地点']==4){var 距离=230;document.getElementById("舰队战斗提示1").innerHTML = "金星探索中【距离230】";}				
	 if(gamedata['舰队']['地点']==5){var 距离=250;document.getElementById("舰队战斗提示1").innerHTML = "水星探索中【距离250】";}				
	 if(gamedata['舰队']['地点']==6){var 距离=600;document.getElementById("舰队战斗提示1").innerHTML = "银河系探索中【距离???】";}	
     var 结算时间=距离/舰队速度
	 var 遭遇触发 = Math.floor(Math.random()*100+1)
     var 战斗触发 = Math.floor(Math.random()*100+1) 
     var 遭遇二触发 = Math.floor(Math.random()*100+1) 	 
     if(结算时间<=10){var 结算时间=10;}
	
	 
	 if(gamedata['舰队']['地点']>1){gamedata['舰队']['战斗时间']+=1};
	 
     if(gamedata['舰队']['战斗时间']>=结算时间){
		 
	if(gamedata['inventory']['光能']>=Math.floor(结算时间+距离/10)){		
	var 舰队总评分=gamedata['舰队']['总评分'] 
	
    if(gamedata['舰队']['地点']>=6&&gamedata['舰队']["目前货物"]<1){
		var 舰队总评分=gamedata['舰队']['总评分']/10}	
	
	
	var 敌对评分=0 	 
	var 敌人名称=""	
	var 战斗消息=""	
	var 掉落物="月球消息1"
	var 掉落物2="月球消息1"	
	var 掉落物文本=""
	var 掉落物2文本=""			
	var 掉落物数量提示=""
	var 掉落物数量2提示=""	
	var 获得了="什么都没掉落"	
	var 掉落物数量=0
    var 掉落物2数量=0
    var 宫殿="宫殿"
    var 宫殿数量=0


	
	if(gamedata['舰队']['地点']==2){ 		 
		 if(遭遇触发>80&&gamedata['inventory']["致密的生物细胞"]>=1){	
		 if(gamedata['战绩']['敌人2'] >=1){var 黑龙=gamedata['战绩']['敌人2']} else{var 黑龙=0}
		 var 敌对评分=10000+黑龙*10000;
		 var 敌人名称="黑龙" 
		 var 敌对图鉴=2;
		 this.gamedata['inventory']["致密的生物细胞"]-=1
		 var 掉落物="黑龙";			  
		 var 掉落物数量=1		 
		 } 	
		 else{
		 var 敌对评分=100;
		 var 敌人名称="太空生物" 
		 var 敌对图鉴=1;
		 var 掉落物="生物细胞";			  
		 var 掉落物数量=Math.floor(Math.random()*3+1)
		 }		 
		 
		 var 随机小道消息 = Math.floor(Math.random()*5+1)
         var 月球消息=new Array();
          月球消息[1]="生物细胞通过压缩可以获得致密的生物细胞";
          月球消息[2]="传闻月球出现过黑龙.";
          月球消息[3]="阳光说这个世界要有光，于是世界就有了光。";
          月球消息[4]="太空生物掉落的细胞具有科学研究价值";
          月球消息[5]="H级别表示百分百战胜！";	
          月球消息[6]="传闻携带致密的生物细胞前往月球，有概率遭遇黑龙.";	
          月球消息[7]="黑龙骨头坚不可摧，如果可以用到舰队上去就好了.";	
          月球消息[8]="重生的黑龙会更加强大";	
          月球消息[9]="你找到了会说话的黑龙：你听它说着太阳系最强的力量来源【需要听10次才能获取全部消息不会扣龙锭但是需要】";			  
		 	 
		 if(随机小道消息==1&&gamedata['inventory']["致密的生物细胞"]!= undefined){	
		 var 随机小道消息=Math.floor(Math.random()*3+6)
		 this.gamedata['inventory']["月球消息2"] +=1	
		 }else{this.gamedata['inventory']["月球消息1"] +=1} 		 
		 if(随机小道消息==5&&gamedata['inventory']["龙锭"]>= 1){
			 
		 var 随机小道消息=9	
		 if(gamedata['inventory']["月球消息3"]  == undefined){gamedata['inventory']["月球消息3"] = 0;}
		 this.gamedata['inventory']["月球消息3"] +=1			 
		 }	 
		 
		 
		 
		 document.getElementById("舰队战斗提示5").innerHTML = "酒馆消息："+月球消息[随机小道消息];
         }
		 
 	     if(gamedata['舰队']['地点']==3){ 		 
		 if(遭遇触发>90&&gamedata['inventory']["火星领主情报"]>=1){	
		 if(gamedata['战绩']['敌人4'] >=1){var 火星领主=gamedata['战绩']['敌人4']} else{var 火星领主=0}
		 var 敌对评分=500000+火星领主*50000;
		 var 敌人名称="火星领主" 
		 var 敌对图鉴=4;
		 this.gamedata['inventory']["火星领主情报"]-=1
		 var 掉落物="火星领主核心";			  
		 var 掉落物数量=1		 
		 } 	
		 else if(遭遇触发>80){    
		 var 敌对评分=25000;
		 var 敌人名称="变异蟑螂" 
		 var 敌对图鉴=5;
		 var 掉落物="生物细胞";			  
		 var 掉落物数量=Math.floor(Math.random()*6+3)		 
		 var 掉落物2="山铜";			  
		 var 掉落物2数量=1		 
		 }
		 else if(遭遇触发>70){    
		 if(gamedata['战绩']['敌人6'] >=1){var 蟑螂王=gamedata['战绩']['敌人6']} else{var 蟑螂王=0}		 
		 var 敌对评分=80000+蟑螂王*800;
		 var 敌人名称="蟑螂王" 
		 var 敌对图鉴=6;
		 var 掉落物="生物细胞";			  
		 var 掉落物数量=Math.floor(Math.random()*8+4)		 
		 var 掉落物2="山铜";			  
		 var 掉落物2数量=Math.floor(Math.random()*3+1)		 
		 }		 
		 else{
		 var 敌对评分=5000;
		 var 敌人名称="火星生物" 
		 var 敌对图鉴=3;
		 var 掉落物="生物细胞";			  
		 var 掉落物数量=Math.floor(Math.random()*5+2)
		 }		 
		 
		 var 随机小道消息 = Math.floor(Math.random()*8+1)
         var 火星消息=new Array();
          火星消息[1]="火星这里住着一个巨大的地底怪物，我们的工作人员都在观察它的动向！";
          火星消息[2]="看到???级难度怪物赶紧跑！";
          火星消息[3]="一个本地的居民说到:这火星一点都不火冷死了";
          火星消息[4]="火星太可怕了这里的蟑螂比地球的蟑螂大百倍！";
          火星消息[5]="传闻月球有个会说话的黑龙；它说道给他带来龙锭，他会告诉你太阳系最强大的力量来源！";	
          火星消息[6]="你知道吗？据传闻说在火星发现的山铜矿其实是火星蟑螂的粪便！！！";	
          火星消息[7]="蟑螂王永不为奴！！每次蟑螂王倒下爬起来它都会更加强大！";	
          火星消息[8]="收集火星消息1合成火星领主情报。";			  
          火星消息[9]="火星领主：你居然敢打扰我，今天就是你的死期！";			  
          火星消息[10]="火星领主身上有能量核心具有超大的科学价值！！";
          火星消息[11]="利用好这个核心在火星打造最强你最强的船员！";		  
			 
		 if(随机小道消息==1&&gamedata['inventory']["火星领主情报"]!= undefined){	
		 var 随机小道消息=Math.floor(Math.random()*3+9)
		 this.gamedata['inventory']["火星消息2"] +=1	
		 }else{this.gamedata['inventory']["火星消息1"] +=1} 
		 
		 document.getElementById("舰队战斗提示5").innerHTML = "酒馆消息："+火星消息[随机小道消息];
         }        
	
       
 	     if(gamedata['舰队']['地点']==4){ 		 
		 if(遭遇触发>90&&gamedata['inventory']["金星领主情报"]>=1){	
		 if(gamedata['战绩']['敌人8'] >=1){var 金星领主=gamedata['战绩']['敌人8']} else{var 金星领主=0}
		 var 敌对评分=700000+金星领主*70000;
		 var 敌人名称="金星领主" 
		 var 敌对图鉴=8;
		 this.gamedata['inventory']["金星领主情报"]-=1
		 var 掉落物="金星领主核心";			  
		 var 掉落物数量=1		 
		 } 	
		 else if(遭遇触发>80){    
		 var 敌对评分=30000;
		 var 敌人名称="熔岩兽" 
		 var 敌对图鉴=9;
		 var 掉落物="生物细胞";			  
		 var 掉落物数量=Math.floor(Math.random()*6+3)		 
		 var 掉落物2="钛铁";			  
		 var 掉落物2数量=1		 
		 }
		 else if(遭遇触发>70){    
		 if(gamedata['战绩']['敌人10'] >=1){var 熔岩巨兽=gamedata['战绩']['敌人10']} else{var 熔岩巨兽=0}		 
		 var 敌对评分=100000+熔岩巨兽*1000;
		 var 敌人名称="熔岩巨兽" 
		 var 敌对图鉴=10;
		 var 掉落物="生物细胞";			  
		 var 掉落物数量=Math.floor(Math.random()*8+4)		 
		 var 掉落物2="钛铁";			  
		 var 掉落物2数量=Math.floor(Math.random()*3+1)		 
		 }		 
		 else{
		 var 敌对评分=5000;
		 var 敌人名称="金星生物" 
		 var 敌对图鉴=7;
		 var 掉落物="生物细胞";			  
		 var 掉落物数量=Math.floor(Math.random()*5+2)
		 }		 
		 
		 var 随机小道消息 = Math.floor(Math.random()*8+1)
         var 金星消息=new Array();
          金星消息[1]="金星熔浆湖住着一个巨大的怪物，我们的工作人员都在观察它的动向！";
          金星消息[2]="看到???级难度怪物赶紧跑！";
          金星消息[3]="一个本地的居民说到:我以前也是个飞行员，直到我膝盖被熔岩兽咬碎了";
          金星消息[4]="金星太可怕了这里到处都熔岩兽";
          金星消息[5]="传闻月球有个会说话的黑龙；它说道给他带来龙锭，他会告诉你太阳系最强大的力量来源！";	
          金星消息[6]="你知道吗？据传闻说在金星发现的钛铁矿其实是熔岩兽吐出来的火焰球！！！";	
          金星消息[7]="熔岩巨兽超级耐打！！每次倒下爬起来它都会更加强大！";	
          金星消息[8]="收集金星消息1合成金星领主情报。";			  
          金星消息[9]="金星领主：让火焰净化一切！";			  
          金星消息[10]="金星领主身上有能量核心具有超大的科学价值！！";
          金星消息[11]="利用好这个能量核心在金星打造超合金方便许多";		  
			 
		 if(随机小道消息==1&&gamedata['inventory']["金星领主情报"]!= undefined){	
		 var 随机小道消息=Math.floor(Math.random()*3+9)
		 this.gamedata['inventory']["金星消息2"] +=1	
		 }else{this.gamedata['inventory']["金星消息1"] +=1} 
		 
		 document.getElementById("舰队战斗提示5").innerHTML = "酒馆消息："+金星消息[随机小道消息];
         }		 
	
	     if(gamedata['舰队']['地点']==5){ 		 
		 if(遭遇触发>90&&gamedata['inventory']["水星领主情报"]>=1){	
		 if(gamedata['战绩']['敌人12'] >=1){var 水星领主=gamedata['战绩']['敌人12']} else{var 水星领主=0}
		 var 敌对评分=700000+水星领主*70000;
		 var 敌人名称="水星领主" 
		 var 敌对图鉴=12;
		 this.gamedata['inventory']["水星领主情报"]-=1
		 var 掉落物="水星领主核心";			  
		 var 掉落物数量=1		 
		 } 	
		 else if(遭遇触发>80){    
		 var 敌对评分=28000;
		 var 敌人名称="火元素" 
		 var 敌对图鉴=13;
		 var 掉落物="生物细胞";			  
		 var 掉落物数量=Math.floor(Math.random()*6+3)		 
		 var 掉落物2="陨铁";			  
		 var 掉落物2数量=1		 
		 }
		 else if(遭遇触发>70){    
		 if(gamedata['战绩']['敌人14'] >=1){var 炎元素=gamedata['战绩']['敌人14']} else{var 炎元素=0}		 
		 var 敌对评分=90000+炎元素*900;
		 var 敌人名称="炎元素" 
		 var 敌对图鉴=14;
		 var 掉落物="生物细胞";			  
		 var 掉落物数量=Math.floor(Math.random()*8+4)		 
		 var 掉落物2="陨铁";			  
		 var 掉落物2数量=Math.floor(Math.random()*3+1)		 
		 }		 
		 else{
		 var 敌对评分=6000;
		 var 敌人名称="水星生物" 
		 var 敌对图鉴=11;
		 var 掉落物="生物细胞";			  
		 var 掉落物数量=Math.floor(Math.random()*5+2)
		 }		 
		 
		 var 随机小道消息 = Math.floor(Math.random()*8+1)
         var 水星消息=new Array();
          水星消息[1]="水星的天空经常有个巨大的怪物飞过，我们的工作人员都在观察它的动向！";
          水星消息[2]="看到???级难度怪物赶紧跑！";
          水星消息[3]="一个本地的居民说到:竜人の剣を喰え";
          水星消息[4]="水星太可怕了这里的巨热到处都有会攻击人的火团！";
          水星消息[5]="传闻月球有个会说话的黑龙；它说道给他带来龙锭，他会告诉你太阳系最强大的力量来源！";	
          水星消息[6]="你知道吗？据传闻说在水星发现的陨铁矿其实是火元素熄灭后出现的矿石";	
          水星消息[7]="炎元素超级耐打！！每次倒下爬起来它火会更加猛烈！";	
          水星消息[8]="收集水星消息1合成水星领主情报。";			  
          水星消息[9]="水星领主：Translate what I said?";			  
          水星消息[10]="水星领主身上有能量核心具有超大的科学价值！！";
          水星消息[11]="利用好这个能量核心在水星建立观测站";		  
			 
		 if(随机小道消息==1&&gamedata['inventory']["水星领主情报"]!= undefined){	
		 var 随机小道消息=Math.floor(Math.random()*3+9)
		 this.gamedata['inventory']["水星消息2"] +=1	
		 }else{this.gamedata['inventory']["水星消息1"] +=1} 
		 
		 document.getElementById("舰队战斗提示5").innerHTML = "酒馆消息："+水星消息[随机小道消息];
         }		
		
		 
		  
		 
		 
	     if(gamedata['舰队']['地点']==6){
			 
	
         if(遭遇二触发>50&&gamedata['inventory']["以太风情报"]>=1){
		 if(gamedata['太空']['宫殿以太风'] ==undefined){gamedata['太空']['宫殿以太风']=0}
		 if(gamedata['太空']['宫殿以太风'] >=1){var 宫殿以太风=gamedata['太空']['宫殿以太风']} else{var 宫殿以太风=0}
		 this.gamedata['inventory']["以太风情报"]-=1	
		 this.gamedata['舰队']["目前货物"] -=100	
		 var 宫殿="以太风" 
         if(遭遇触发>40){	
		 var 敌对评分=3000000+宫殿以太风*10000;
		 var 敌人名称="以太风宫殿舰队" 
		 var 敌对图鉴=36;
		 var 掉落物="飞船残骸3";			  
		 var 掉落物数量=Math.floor(Math.random()*3+1);	
         var 宫殿数量=Math.floor(Math.random()*3+1);			 
		 }	
         else if(遭遇触发>10){	
		 var 敌对评分=6000000+宫殿以太风*20000;
		 var 敌人名称="以太风精英舰队" 
		 var 敌对图鉴=37;
		 var 掉落物="飞船残骸3";			  
		 var 掉落物数量=Math.floor(Math.random()*5+2);
         var 宫殿数量=Math.floor(Math.random()*6+2);			 
		 }	
         else{	
		 var 敌对评分=30000000+宫殿以太风*30000;
		 var 敌人名称="以太风旗舰" 
		 var 敌对图鉴=38;
		 var 掉落物="飞船残骸3";			  
		 var 掉落物数量=Math.floor(Math.random()*7+3);	
         var 宫殿数量=Math.floor(Math.random()*12+4);			 
		 }}				 	 
		 
         else if(遭遇二触发>50&&gamedata['inventory']["泽尔甘情报"]>=1){
		 if(gamedata['太空']['宫殿泽尔甘'] ==undefined){gamedata['太空']['宫殿泽尔甘']=0}
		 if(gamedata['太空']['宫殿泽尔甘'] >=1){var 宫殿泽尔甘=gamedata['太空']['宫殿泽尔甘']} else{var 宫殿泽尔甘=0}
		 this.gamedata['inventory']["泽尔甘情报"]-=1	
		 this.gamedata['舰队']["目前货物"] -=100	
		 var 宫殿="泽尔甘" 
         if(遭遇触发>40){	
		 var 敌对评分=4000000+宫殿泽尔甘*10000;
		 var 敌人名称="泽尔甘宫殿舰队" 
		 var 敌对图鉴=39;
		 var 掉落物="飞船残骸4";			  
		 var 掉落物数量=Math.floor(Math.random()*3+1);	
         var 宫殿数量=Math.floor(Math.random()*3+1);			 
		 }	
         else if(遭遇触发>10){	
		 var 敌对评分=7000000+宫殿泽尔甘*20000;
		 var 敌人名称="泽尔甘精英舰队" 
		 var 敌对图鉴=40;
		 var 掉落物="飞船残骸4";			  
		 var 掉落物数量=Math.floor(Math.random()*5+2);
         var 宫殿数量=Math.floor(Math.random()*6+2);			 
		 }	
         else{	
		 var 敌对评分=40000000+宫殿泽尔甘*30000;
		 var 敌人名称="泽尔甘旗舰" 
		 var 敌对图鉴=41;
		 var 掉落物="飞船残骸4";			  
		 var 掉落物数量=Math.floor(Math.random()*7+3);	
         var 宫殿数量=Math.floor(Math.random()*12+4);			 
		 }}			 
		 
         else if(遭遇二触发>50&&gamedata['inventory']["布沙克情报"]>=1){
		 if(gamedata['太空']['宫殿布沙克'] ==undefined){gamedata['太空']['宫殿布沙克']=0}
		 if(gamedata['太空']['宫殿布沙克'] >=1){var 宫殿布沙克=gamedata['太空']['宫殿布沙克']} else{var 宫殿布沙克=0}
		 this.gamedata['inventory']["布沙克情报"]-=1	
		 this.gamedata['舰队']["目前货物"] -=100	
		 var 宫殿="布沙克" 
         if(遭遇触发>40){	
		 var 敌对评分=5000000+宫殿布沙克*10000;
		 var 敌人名称="布沙克宫殿舰队" 
		 var 敌对图鉴=42;
		 var 掉落物="飞船残骸2";			  
		 var 掉落物数量=Math.floor(Math.random()*3+1);	
         var 宫殿数量=Math.floor(Math.random()*3+1);			 
		 }	
         else if(遭遇触发>10){	
		 var 敌对评分=8000000+宫殿布沙克*20000;
		 var 敌人名称="布沙克精英舰队" 
		 var 敌对图鉴=43;
		 var 掉落物="飞船残骸2";			  
		 var 掉落物数量=Math.floor(Math.random()*5+2);
         var 宫殿数量=Math.floor(Math.random()*6+2);			 
		 }	
         else{	
		 var 敌对评分=50000000+宫殿布沙克*30000;
		 var 敌人名称="布沙克旗舰" 
		 var 敌对图鉴=44;
		 var 掉落物="飞船残骸2";			  
		 var 掉落物数量=Math.floor(Math.random()*7+3);	
         var 宫殿数量=Math.floor(Math.random()*12+4);			 
		 }}			 
		 
         else if(遭遇二触发>50&&gamedata['inventory']["达拉泽情报"]>=1){
		 if(gamedata['太空']['宫殿达拉泽'] ==undefined){gamedata['太空']['宫殿达拉泽']=0}
		 if(gamedata['太空']['宫殿达拉泽'] >=1){var 宫殿达拉泽=gamedata['太空']['宫殿达拉泽']} else{var 宫殿达拉泽=0}
		 this.gamedata['inventory']["达拉泽情报"]-=1	
		 this.gamedata['舰队']["目前货物"] -=100	
		 var 宫殿="达拉泽" 
         if(遭遇触发>40){	
		 var 敌对评分=6000000+宫殿达拉泽*10000;
		 var 敌人名称="达拉泽宫殿舰队" 
		 var 敌对图鉴=45;
		 var 掉落物="飞船残骸5";			  
		 var 掉落物数量=Math.floor(Math.random()*3+1);	
         var 宫殿数量=Math.floor(Math.random()*3+1);			 
		 }	
         else if(遭遇触发>10){	
		 var 敌对评分=9000000+宫殿达拉泽*20000;
		 var 敌人名称="达拉泽精英舰队" 
		 var 敌对图鉴=46;
		 var 掉落物="飞船残骸5";			  
		 var 掉落物数量=Math.floor(Math.random()*5+2);
         var 宫殿数量=Math.floor(Math.random()*6+2);			 
		 }	
         else{	
		 var 敌对评分=60000000+宫殿达拉泽*30000;
		 var 敌人名称="达拉泽旗舰" 
		 var 敌对图鉴=47;
		 var 掉落物="飞船残骸5";			  
		 var 掉落物数量=Math.floor(Math.random()*7+3);	
         var 宫殿数量=Math.floor(Math.random()*12+4);			 
		 }}			 
		 
		 
		 
		 
		 
		 
 	 		 
         else{
         if(遭遇触发>90&&gamedata['inventory']["失控战舰情报"]>=1){	
		 if(gamedata['战绩']['敌人35'] >=1){var 失控的堕落帝国战舰=gamedata['战绩']['敌人35']} else{var 失控的堕落帝国战舰=0}
		 var 敌对评分=5000000+失控的堕落帝国战舰*1000000;
		 var 敌人名称="失控的堕落帝国战舰" 
		 var 敌对图鉴=35;
		 this.gamedata['inventory']["失控战舰情报"]-=1
		 var 掉落物="堕落之力";			  
		 var 掉落物数量=1	
		 this.gamedata['舰队']["目前货物"] -=100	
		 }				 
         else if(遭遇触发>90){			 
		 var 敌对评分=1500000;
		 var 敌人名称="以太风探索舰队" 
		 var 敌对图鉴=15;
		 var 掉落物="飞船残骸3";			  
		 var 掉落物数量=Math.floor(Math.random()*3+1);		 
		 var 掉落物2="以太风消息1";			  
		 var 掉落物2数量=Math.floor(Math.random()*3+1);	
		 this.gamedata['舰队']["目前货物"] -=22	 
		 } 	
		 else if(遭遇触发>85){  
		 if(gamedata['战绩']['敌人16'] >=1){var 以太风武装货运=gamedata['战绩']['敌人16']} else{var 以太风武装货运=0}		 	 
		 var 敌对评分=2500000+以太风武装货运*10000;
		 var 敌人名称="以太风武装货运" 
		 var 敌对图鉴=16;
		 var 掉落物="飞船残骸3";			  
		 var 掉落物数量=Math.floor(Math.random()*3+1)		 
		 var 掉落物2="以太矿锭";			  
		 var 掉落物2数量=1;	
		 this.gamedata['舰队']["目前货物"] -=33	 		 
		 }
		 else if(遭遇触发>75){			 
		 var 敌对评分=1600000;
		 var 敌人名称="泽尔甘探索舰队" 
		 var 敌对图鉴=17;
		 var 掉落物="飞船残骸4";			  
		 var 掉落物数量=Math.floor(Math.random()*3+1);		 
		 var 掉落物2="泽尔甘消息1";			  
		 var 掉落物2数量=Math.floor(Math.random()*3+1);	
		 this.gamedata['舰队']["目前货物"] -=23	 
		 } 	
		 else if(遭遇触发>70){    
		 if(gamedata['战绩']['敌人18'] >=1){var 泽尔甘武装货运=gamedata['战绩']['敌人18']} else{var 泽尔甘武装货运=0}		 	 
		 var 敌对评分=2600000+泽尔甘武装货运*10000;
		 var 敌人名称="泽尔甘武装货运" 
		 var 敌对图鉴=18;
		 var 掉落物="飞船残骸4";			  
		 var 掉落物数量=Math.floor(Math.random()*3+1)		 
		 var 掉落物2="生物组织";			  
		 var 掉落物2数量=1;	
		 this.gamedata['舰队']["目前货物"] -=34	  
		 }		 
		 else if(遭遇触发>60){			 
		 var 敌对评分=1700000;
		 var 敌人名称="布沙克探索舰队" 
		 var 敌对图鉴=19;
		 var 掉落物="飞船残骸2";			  
		 var 掉落物数量=Math.floor(Math.random()*3+1);		 
		 var 掉落物2="布沙克消息1";			  
		 var 掉落物2数量=Math.floor(Math.random()*3+1);	
		 this.gamedata['舰队']["目前货物"] -=24	 
		 } 	
		 else if(遭遇触发>55){    
		 if(gamedata['战绩']['敌人20'] >=1){var 布沙克武装货运=gamedata['战绩']['敌人20']} else{var 布沙克武装货运=0}		 	 
		 var 敌对评分=2700000+布沙克武装货运*10000;
		 var 敌人名称="布沙克武装货运" 
		 var 敌对图鉴=20;
		 var 掉落物="飞船残骸2";			  
		 var 掉落物数量=Math.floor(Math.random()*3+1)		 
		 var 掉落物2="能源之核";			  
		 var 掉落物2数量=1;	
		 this.gamedata['舰队']["目前货物"] -=35	  
		 }			 
		 else if(遭遇触发>45){			 
		 var 敌对评分=1800000;
		 var 敌人名称="达拉泽探索舰队" 
		 var 敌对图鉴=21;
		 var 掉落物="飞船残骸5";			  
		 var 掉落物数量=Math.floor(Math.random()*3+1);		 
		 var 掉落物2="达拉泽消息1";			  
		 var 掉落物2数量=Math.floor(Math.random()*3+1);	
		 this.gamedata['舰队']["目前货物"] -=24	 
		 } 	
		 else if(遭遇触发>40){    
		 if(gamedata['战绩']['敌人22'] >=1){var 达拉泽武装货运=gamedata['战绩']['敌人22']} else{var 达拉泽武装货运=0}		 	 
		 var 敌对评分=2800000+达拉泽武装货运*10000;
		 var 敌人名称="达拉泽武装货运" 
		 var 敌对图鉴=22;
		 var 掉落物="飞船残骸5";			  
		 var 掉落物数量=Math.floor(Math.random()*3+1)		 
		 var 掉落物2="超能结晶";			  
		 var 掉落物2数量=1;	
		 this.gamedata['舰队']["目前货物"] -=36	  
		 }  		 	
		 else if(遭遇触发>36&&gamedata['战绩']["敌人33"]>300){			 
		 var 敌对评分=12000000;
		 var 敌人名称="双鱼座舰队" 
		 var 敌对图鉴=34;
		 var 掉落物="飞船残骸1";			  
		 var 掉落物数量=Math.floor(Math.random()*10+5);		 
		 this.gamedata['舰队']["目前货物"] -=22 
		 } 	
		 else if(遭遇触发>33&&gamedata['战绩']["敌人32"]>350){    
		 var 敌对评分=11000000;
		 var 敌人名称="水瓶座舰队" 
		 var 敌对图鉴=33;
		 var 掉落物="飞船残骸1";			  
		 var 掉落物数量=Math.floor(Math.random()*10+4)		 
		 this.gamedata['舰队']["目前货物"] -=21	 		 
		 }			 
		 else if(遭遇触发>29&&gamedata['战绩']["敌人31"]>400){			 
		 var 敌对评分=10000000;
		 var 敌人名称="摩羯座舰队" 
		 var 敌对图鉴=32;
		 var 掉落物="飞船残骸1";			  
		 var 掉落物数量=Math.floor(Math.random()*9+4);		 
		 this.gamedata['舰队']["目前货物"] -=20	 
		 } 	
		 else if(遭遇触发>26&&gamedata['战绩']["敌人30"]>450){    
		 var 敌对评分=9000000;
		 var 敌人名称="射手座舰队" 
		 var 敌对图鉴=31;
		 var 掉落物="飞船残骸1";			  
		 var 掉落物数量=Math.floor(Math.random()*8+4)		 
		 this.gamedata['舰队']["目前货物"] -=19 		 
		 }	
		 else if(遭遇触发>22&&gamedata['战绩']["敌人29"]>500){			 
		 var 敌对评分=8000000;
		 var 敌人名称="天蝎座舰队" 
		 var 敌对图鉴=30;
		 var 掉落物="飞船残骸1";			  
		 var 掉落物数量=Math.floor(Math.random()*8+3);		 
		 this.gamedata['舰队']["目前货物"] -=18	 
		 } 	
		 else if(遭遇触发>19&&gamedata['战绩']["敌人28"]>550){    
		 var 敌对评分=7000000;
		 var 敌人名称="天秤座舰队" 
		 var 敌对图鉴=29;
		 var 掉落物="飞船残骸1";			  
		 var 掉落物数量=Math.floor(Math.random()*7+3)		 
		 this.gamedata['舰队']["目前货物"] -=17	 		 
		 }	
		 else if(遭遇触发>15&&gamedata['战绩']["敌人27"]>600){			 
		 var 敌对评分=6000000;
		 var 敌人名称="处女座舰队" 
		 var 敌对图鉴=28;
		 var 掉落物="飞船残骸1";			  
		 var 掉落物数量=Math.floor(Math.random()*6+3);		 
		 this.gamedata['舰队']["目前货物"] -=16	 
		 } 	
		 else if(遭遇触发>12&&gamedata['战绩']["敌人26"]>500){    
		 var 敌对评分=5000000;
		 var 敌人名称="狮子座舰队" 
		 var 敌对图鉴=27;
		 var 掉落物="飞船残骸1";			  
		 var 掉落物数量=Math.floor(Math.random()*6+2)		 
		 this.gamedata['舰队']["目前货物"] -=15	 		 
		 }	
		else if(遭遇触发>8&&gamedata['战绩']["敌人25"]>400){			 
		 var 敌对评分=4000000;
		 var 敌人名称="巨蟹座舰队" 
		 var 敌对图鉴=26;
		 var 掉落物="飞船残骸1";			  
		 var 掉落物数量=Math.floor(Math.random()*5+2);		 
		 this.gamedata['舰队']["目前货物"] -=14	 
		 } 	
		 else if(遭遇触发>5&&gamedata['战绩']["敌人24"]>300){    
		 var 敌对评分=3000000;
		 var 敌人名称="双子座舰队" 
		 var 敌对图鉴=25;
		 var 掉落物="飞船残骸1";			  
		 var 掉落物数量=Math.floor(Math.random()*4+2)		 
		 this.gamedata['舰队']["目前货物"] -=13		 
		 }	
		 else if(遭遇触发>1&&gamedata['战绩']["敌人23"]>200){			 
		 var 敌对评分=2000000;
		 var 敌人名称="金牛座舰队" 
		 var 敌对图鉴=24;
		 var 掉落物="飞船残骸1";			  
		 var 掉落物数量=Math.floor(Math.random()*4+1);		 
		 this.gamedata['舰队']["目前货物"] -=12 
		 } 	
		 else {    
		 var 敌对评分=1000000;
		 var 敌人名称="白羊座舰队" 
		 var 敌对图鉴=23;
		 var 掉落物="飞船残骸1";			  
		 var 掉落物数量=Math.floor(Math.random()*3+1)		 
		 this.gamedata['舰队']["目前货物"] -=11 		 
		 }			 	 			 
		 }		 
		 
		 var 随机小道消息 = Math.floor(Math.random()*10+1)
         var 银河系消息=new Array();
          银河系消息[1]="达拉泽文明拥有超强激光科技";
          银河系消息[2]="布沙克文明拥有超强导弹科技";
          银河系消息[3]="以太风文明拥有超级的巨构建筑，他们利用以太矿锭对于模块化建造巨构";
          银河系消息[4]="泽尔甘文明是由生物组织形成的文明，他们生物科技超强.";
          银河系消息[5]="传闻布沙克文明在研发生物武器实验泄露最后自己的旗舰都被这些生物控制了.这些生物也就是现在的泽尔甘文明.";	
          银河系消息[6]="星环，戴森球，超级星门以太风文明都能轻松建造他们.";		  
          银河系消息[7]="达拉泽文明最强的武器,一道自动瞄准激光可以射穿几百艘小船";	
          银河系消息[8]="布沙克文明最强的武器,听闻可以炸穿星球";			  			  
          银河系消息[9]="银河系有着黄道十二宫座舰队";				 
          银河系消息[10]="达拉泽文明和布沙克文明两个文明一直都处于战火状态";
          银河系消息[11]="宫殿战争-对阵【"+敌人名称+"】占领了【"+宫殿数量+"座"+宫殿+"星座宫殿】";
          银河系消息[12]="宫殿战争-对阵【"+敌人名称+"】丢失了【"+宫殿数量+"座"+宫殿+"星座宫殿】";	
		  
        var 胜率=(舰队总评分/敌对评分)*100-50 		 
		if(胜率>战斗触发&&宫殿数量>0){ var 随机小道消息 = 11}		          				
		else if(宫殿数量>0){ var 随机小道消息 = 12}
			
		
		 
		 document.getElementById("舰队战斗提示5").innerHTML = "酒馆消息："+银河系消息[随机小道消息];
		 
		 
		 
         }		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
    var 胜率=(舰队总评分/敌对评分)*100-50 
	if(掉落物数量>0){var 获得了="获得了";var 掉落物数量提示="【"+掉落物数量+"个】";var 掉落物文本=""+掉落物+""  } 
	if(掉落物2数量>0){var 获得了="获得了";var 掉落物数量2提示="【"+掉落物2数量+"个】";var 掉落物2文本=""+掉落物2+""  }
	
	if(胜率>战斗触发){	 	
    	 var 战斗消息="击败了【"+敌人名称+"】"+获得了+""+掉落物文本+""+掉落物数量提示+""+掉落物2文本+""+掉落物数量2提示+""
	if(gamedata['战绩']["敌人"+敌对图鉴]  == undefined){gamedata['战绩']["敌人"+敌对图鉴] = 0;}		 
	if(gamedata['inventory'][""+掉落物]  == undefined){gamedata['inventory'][""+掉落物] = 0;}
	if(gamedata['inventory'][""+掉落物2]  == undefined){gamedata['inventory'][""+掉落物2] = 0;}

	
		 this.gamedata['战绩']["敌人"+敌对图鉴] +=1
		 this.gamedata['inventory'][""+掉落物] +=掉落物数量	
         this.gamedata['inventory'][""+掉落物2] +=掉落物2数量	

		this.gamedata['太空']["宫殿"+宫殿] +=宫殿数量	    
	}
	else{ 
	
	if(this.gamedata['太空']["宫殿"+宫殿]>=宫殿数量){this.gamedata['太空']["宫殿"+宫殿]-=宫殿数量}
	else{this.gamedata['太空']["宫殿"+宫殿]=0}
	
	this.gamedata['战绩']['战败'] +=1
	if(gamedata['战绩']["敌人"+敌对图鉴]  == undefined){gamedata['战绩']["敌人"+敌对图鉴] = 0;}
	var 战斗消息="被【"+敌人名称+"】击败了"	 
	}	 
		this.gamedata['inventory']['光能']-=Math.floor(结算时间+距离/10)
        document.getElementById("舰队战斗提示2").innerHTML = ""+mytime+""+战斗消息+""; 
		
	 }
 
	 else{document.getElementById("舰队战斗提示2").innerHTML = ""+mytime+": 需要"+Math.floor(结算时间+距离/10)+"光能";}
          gamedata['舰队']['战斗时间']=0	 
     }
	 
	 
	 舰队战斗提示3=结算时间-gamedata['舰队']['战斗时间']
	 document.getElementById("舰队战斗提示3").innerHTML = ""+Math.floor(舰队战斗提示3)+"【消耗"+Math.floor(结算时间+距离/10)+"光能】";
	 document.getElementById("舰队战斗提示4").innerHTML = ""+舰队速度+"】";	 	 
  }}
  
  function 二周目物资()	{
 
        if(gamedata['二周目'] != undefined){
		if(gamedata['inventory']['物资'] == undefined){gamedata['inventory']['物资'] = 50;   
        if(gamedata['下个位置倍数'] == undefined){gamedata['下个位置倍数'] = 1000;} 		
		document.getElementById("二周目物资").innerHTML = "领取成功选择新位置开启你的二周目吧！"; }
		else{document.getElementById("二周目物资").innerHTML = "领取失败！领取过了！";	 }
		}else{document.getElementById("二周目物资").innerHTML = "领取失败！没殖民舰队重置后。";	 }
 }

 function 二周目项目()	{	
 
    if(gamedata['科技'] == undefined){gamedata['科技'] = {};}    
	if(gamedata['太空'] == undefined){gamedata['太空'] = {};}
	if(gamedata['战绩'] == undefined){gamedata['战绩'] = {};}	
	if(gamedata['舰队'] == undefined){gamedata['舰队'] = {};}	
	if(gamedata['巨构'] == undefined){gamedata['巨构'] = {};}		
	if(gamedata['首都'] == undefined){gamedata['首都'] = {};}		
	if(gamedata['星战'] == undefined){gamedata['星战'] = {};}	
	
	if(gamedata['太空']['能量接收器'] == undefined){gamedata['太空']['能量接收器'] = 0;}
	if(gamedata['inventory']['丰碑']  != undefined){var 丰碑=gamedata['inventory']['丰碑'] }else{var 丰碑=0}	
	if(gamedata['科技']['科技能源消耗'] == undefined){gamedata['科技']['科技能源消耗'] = 0;}
	if(gamedata['科技']['科技2等级'] != undefined){var 丰碑效果=gamedata['科技']['科技2等级']*0.15 }else{var 丰碑效果=0}	
	if(gamedata['科技']['科技3等级'] != undefined){var 社会学=gamedata['科技']['科技3等级'] }else{var 社会学=0}	
	if(gamedata['科技']['科技11等级'] != undefined){var 机械世界=gamedata['科技']['科技11等级'] }else{var 机械世界=0}
	if(gamedata['科技']['科技14等级'] != undefined){var 掌控进化=gamedata['科技']['科技14等级'] }else{var 掌控进化=0}	
	if(gamedata['巨构']['巨构2等级'] != undefined){var 地球星门=gamedata['巨构']['巨构2等级']*3000 }else{var 地球星门=0}	
	if(gamedata['巨构']['巨构6等级'] != undefined){var 戴森壳=gamedata['巨构']['巨构6等级'] }else{var 戴森壳=0}	
	if(gamedata['巨构']['巨构7等级'] != undefined){var 星环城=gamedata['巨构']['巨构7等级'] }else{var 星环城=0}	
	if(gamedata['巨构']['巨构8等级'] != undefined){var 武器工厂=gamedata['巨构']['巨构8等级'] }else{var 武器工厂=0}	
	if(gamedata['巨构']['巨构9等级'] != undefined){var 大武器工厂=gamedata['巨构']['巨构9等级'] }else{var 大武器工厂=0}		

	if(gamedata['巨构']['巨构10等级'] != undefined){var 机械工厂=gamedata['巨构']['巨构10等级'] }else{var 机械工厂=0}	
	if(gamedata['巨构']['巨构11等级'] != undefined){var 大机械工厂=gamedata['巨构']['巨构11等级'] }else{var 大机械工厂=0}		
			
	 var 戴森云=gamedata['太空']['戴森云能量']	
	 var 殖民地繁荣度=gamedata['太空']['殖民地繁荣度']		   
	 var 能量接收器=gamedata['太空']['能量接收器']	 
	 var 殖民地繁荣度上限=1000+10*能量接收器*能量接收器+丰碑+丰碑效果*丰碑+地球星门 
	 var 科技能源消耗=gamedata['科技']['科技能源消耗']	 	 
	 
	 
		
	if(戴森云>=100*能量接收器*能量接收器 && gamedata['殖民地1_1']==true){
		var 殖民地繁荣增长_2=能量接收器	;var 戴森云能量消耗=能量接收器*能量接收器*5
	}else{ var 殖民地繁荣增长_2=0;var 戴森云能量消耗=0    }			
		
     var 戴森云能量增长=gamedata['inventory']['戴森云']*0.1-戴森云/1000-戴森云能量消耗-科技能源消耗-戴森壳*100-星环城*1000-武器工厂*100-大武器工厂*1000-机械工厂*100-大机械工厂*1000

	  if (gamedata['inventory']['戴森云']>0&&戴森云>=0) {
         this.gamedata['太空']['戴森云能量']+=戴森云能量增长
        }else{gamedata['太空']['戴森云能量'] = 0;}   
	   
	 if(gamedata['ap_bonusses']['殖民地繁荣等级']!=undefined){
		var 殖民地繁荣增长_1=1*gamedata['ap_bonusses']['殖民地繁荣等级']['level']}
		else{ var 殖民地繁荣增长_1=0}
				    
	  if (殖民地繁荣度<=殖民地繁荣度上限) {
        var 殖民地繁荣总增长=殖民地繁荣增长_1*0.1+殖民地繁荣增长_1*0.1*殖民地繁荣增长_2+0.1*社会学+0.1*机械世界+0.1*掌控进化}	
        else{var 殖民地繁荣总增长=0}	 
	
	  if (殖民地繁荣度>=0) {
         this.gamedata['太空']['殖民地繁荣度']+=殖民地繁荣总增长
        }else{gamedata['太空']['殖民地繁荣度'] = 0;}

   
       舰队战斗(99);
	   舰队列表(11);
	   if(gamedata['科技']['地点']>0){  科技列表(99);  }
	   
	   if(gamedata['巨构']['守卫舰队']==true){巨构舰队项目更新()}
	   	   
	   if(gamedata['巨构']['地点']>=2){ 巨构建筑项目(100)}

		   
		   
		   	


	   
	   $('.taikong1').html(nFormatter(Math.floor(戴森云), 2));
	   $('.taikong2').html(戴森云能量增长.toFixed(2)); 
	   $('.taikong3').html(殖民地繁荣度.toFixed(1));
	   $('.taikong4').html(殖民地繁荣总增长.toFixed(1));
	   $('.taikong5').html(""+能量接收器+"级");
	   $('.taikong6').html("【"+Math.floor(殖民地繁荣度上限)+"】接收器等级可以提升上限");	  
	   
	document.getElementById("太空资源显示").innerHTML = "【光能"+gamedata['inventory']['光能']+"】【接收器"+gamedata['inventory']['能量接收器']+"】"; 
	document.getElementById("太空资源显示2").innerHTML = "【升级消耗"+(能量接收器*能量接收器*10+1)+"个接收器】【当前殖民地接收器消耗"+戴森云能量消耗+"能量】"; 	
	document.getElementById("殖民地3_1").innerHTML = "过载接收-消耗【"+Math.floor(戴森云/2)+"能量】转换了【"+Math.floor(戴森云*0.1)+"光能】【需要消耗"+Math.ceil(戴森云/1000)+"能量接收器】"; 
	
	
	if(gamedata['inventory']['火星居住地']  != undefined){外星球殖民项目(1)}
	if(gamedata['inventory']['金星居住地']  != undefined){外星球殖民项目(2)}
	if(gamedata['inventory']['水星居住地']  != undefined){外星球殖民项目(3)}
	if(gamedata['inventory']['远征货运']  != undefined){远征货运(1)}	
	
	 




	if(gamedata['巨构']['巨构6等级'] > 0){  
	
	var 戴森壳等级=gamedata['巨构']['巨构6等级']*3600
	var 戴森壳计数=gamedata['巨构']['巨构6等级']  
	if(gamedata['太空']['戴森壳'] == undefined){gamedata['太空']['戴森壳'] = 0;}	
	gamedata['太空']['戴森壳'] +=戴森壳计数
	var 戴森壳进度=gamedata['太空']['戴森壳']
			
	
	document.getElementById("殖民地2").style.display="none";			
	document.getElementById("戴森壳").style.display="";		
	document.getElementById("戴森壳1_1").style="width: "+(戴森壳进度/戴森壳等级)*100+"%;";
	document.getElementById("戴森壳1_2").innerHTML=""+nFormatter(戴森壳进度, 2)+"光能/"+nFormatter(戴森壳等级, 2)+"光能";

	if(戴森壳进度/戴森壳等级>=1){
		
     殖民地2()
	 gamedata['太空']['戴森壳']=0
	 gamedata['inventory']['光能']+=gamedata['巨构']['巨构6等级']*3600
	 	 
	 }}	


	if(gamedata['巨构']['巨构7等级'] > 0){  
	
	var 星环城等级=gamedata['巨构']['巨构7等级']
	var 星环城计数=gamedata['巨构']['巨构7等级']  
	if(gamedata['太空']['星环城'] == undefined){gamedata['太空']['星环城'] = 0;}	
	gamedata['太空']['星环城'] +=星环城计数/3000
	var 星环城进度=gamedata['太空']['星环城']
	

	document.getElementById("星环城").style.display="";		
	document.getElementById("星环城1_1").style="width: "+(星环城进度/星环城等级)*100+"%;";
	document.getElementById("星环城1_2").innerHTML=""+nFormatter(星环城进度, 3)+"货物/"+nFormatter(星环城等级, 2)+"货物";

	if(星环城进度/星环城等级>=1){
		

	 gamedata['太空']['星环城']=0
	 gamedata['inventory']['货物']+=gamedata['巨构']['巨构7等级']
	 	 
	 }}	



	if(gamedata['太空']['宫殿以太风']  >=1 ){var 宫殿以太风=gamedata['太空']['宫殿以太风'] }else{var 宫殿以太风=0}	
	if(gamedata['太空']['宫殿泽尔甘']  >=1 ){var 宫殿泽尔甘=gamedata['太空']['宫殿泽尔甘'] }else{var 宫殿泽尔甘=0}	
	if(gamedata['太空']['宫殿布沙克']  >=1 ){var 宫殿布沙克=gamedata['太空']['宫殿布沙克'] }else{var 宫殿布沙克=0}	
	if(gamedata['太空']['宫殿达拉泽']  >=1 ){var 宫殿达拉泽=gamedata['太空']['宫殿达拉泽'] }else{var 宫殿达拉泽=0}	
	
	

    var 总宫殿=宫殿以太风+宫殿泽尔甘+宫殿布沙克+宫殿达拉泽
	document.getElementById("星座宫殿1").innerHTML="已占领的宫殿【以太风"+宫殿以太风+"泽尔甘"+宫殿泽尔甘+"布沙克"+宫殿布沙克+"达拉泽"+宫殿达拉泽+"】";
    if(总宫殿<500 ){var 宫殿加成=总宫殿*0.002}
	else {var 宫殿加成=1+(总宫殿-500)*0.001}		


	if(gamedata['inventory']['地球征服者']  >=1 ){var 地球征服者=1 }else{var 地球征服者=0}	
	if(gamedata['inventory']['月球征服者']  >=1 ){var 月球征服者=1 }else{var 月球征服者=0}	
	if(gamedata['inventory']['火星征服者']  >=1 ){var 火星征服者=1 }else{var 火星征服者=0}	
	if(gamedata['inventory']['水星征服者']  >=1 ){var 水星征服者=1 }else{var 水星征服者=0}	
	if(gamedata['inventory']['金星征服者']  >=1 ){var 金星征服者=1 }else{var 金星征服者=0}
	
	if(gamedata['inventory']['太阳系征服者']  >=1 ){var 太阳系征服者=1 }else{var 太阳系征服者=0}	
	if(gamedata['inventory']['以太风征服者']  >=1 ){var 以太风征服者=1 }else{var 以太风征服者=0}	
	if(gamedata['inventory']['泽尔甘征服者']  >=1 ){var 泽尔甘征服者=1 }else{var 泽尔甘征服者=0}	
	if(gamedata['inventory']['布沙克征服者']  >=1 ){var 布沙克征服者=1 }else{var 布沙克征服者=0}	
	if(gamedata['inventory']['达拉泽征服者']  >=1 ){var 达拉泽征服者=1 }else{var 达拉泽征服者=0}		
	
	
	
	
	
	

    var 奖杯=地球征服者+月球征服者+火星征服者+金星征服者+水星征服者+太阳系征服者+以太风征服者+泽尔甘征服者+布沙克征服者+达拉泽征服者

	if(gamedata['inventory']['星宫守卫者']  != undefined){var 星宫守卫者=gamedata['inventory']['星宫守卫者'] }else{var 星宫守卫者=0}	
	if(gamedata['太空']['星宫守卫者'] == undefined){gamedata['太空']['星宫守卫者'] = 0;}
    if(奖杯 >= 星宫守卫者){gamedata['太空']['星宫守卫者']=星宫守卫者 }
    else{gamedata['太空']['星宫守卫者']=奖杯}



	if(奖杯 > 0){  
	
	var 奖杯上限=1000*奖杯;
	if(gamedata['太空']['星星之力'] == undefined){gamedata['太空']['星星之力'] = 0;}
	if(gamedata['inventory']['星星之力'] == undefined){gamedata['inventory']['星星之力'] = 0;}		
	gamedata['太空']['星星之力'] +=奖杯+奖杯*宫殿加成
	var 星星之力进度=gamedata['太空']['星星之力']
	
	
	document.getElementById("奖杯").style.display="";		
	document.getElementById("奖杯1_1").style="width: "+(星星之力进度/奖杯上限)*100+"%;";
	document.getElementById("奖杯1_2").innerHTML=""+nFormatter(星星之力进度, 2)+"星星/"+nFormatter(奖杯上限, 2)+"星星";
	document.getElementById("奖杯1_3").innerHTML="【"+nFormatter(奖杯+奖杯*宫殿加成, 3)+"点星星之力】";
	if(星星之力进度/奖杯上限>=1){
		

	 gamedata['太空']['星星之力']=0
	 gamedata['inventory']['星星之力']+=1000*奖杯
	 	 
	 }}	
	
  
	if(gamedata['太空']['星宫守卫者'] > 0){  
	
	var 星宫之力上限=1000*gamedata['太空']['星宫守卫者'];
	if(gamedata['太空']['星宫之力'] == undefined){gamedata['太空']['星宫之力'] = 0;}
	if(gamedata['inventory']['星宫之力'] == undefined){gamedata['inventory']['星宫之力'] = 0;}		
	gamedata['太空']['星宫之力'] +=gamedata['太空']['星宫守卫者']
	var 星宫之力进度=gamedata['太空']['星宫之力']
	
	
	document.getElementById("奖杯2").style.display="";		
	document.getElementById("奖杯2_1").style="width: "+(星宫之力进度/星宫之力上限)*100+"%;";
	document.getElementById("奖杯2_2").innerHTML=""+nFormatter(星宫之力进度, 2)+"星宫之力/"+nFormatter(星宫之力上限, 2)+"星宫之力";
	document.getElementById("奖杯2_3").innerHTML="【"+nFormatter(gamedata['太空']['星宫守卫者'], 3)+"点星宫之力】";
	if(星宫之力进度/星宫之力上限>=1){
		

	 gamedata['太空']['星宫之力']=0
	 gamedata['inventory']['星宫之力']+=1000*gamedata['太空']['星宫守卫者']
	 	 
	 }}	










	if(gamedata['巨构']['巨构2等级'] > 0){  
	document.getElementById("星门殖民地").style.display="";	
	}

     if(gamedata['太空']['能量接收器']>=40){
	gamedata['太空']['能量接收器']=40	
	document.getElementById("殖民地1").style.display="none";				 
	document.getElementById("殖民地4").style.display="none";		
	document.getElementById("殖民地5").style.display="none";	
     }

     if(gamedata['inventory']['智能辅助']!= undefined){
	document.getElementById("殖民地3_1").style.display="none";				 
	document.getElementById("殖民地3").style.display="none";		
     }




	 if(gamedata['首都']['首都等级'] == undefined){gamedata['首都']['首都等级'] = 0;}
	 if(gamedata['首都']['首都硬币'] == undefined){gamedata['首都']['首都硬币'] = 0;}	 
	 
	 
		  
	document.getElementById("大型殖民舰队1").innerHTML="【"+gamedata['inventory']['大型殖民舰队']+"舰队】【"+gamedata['inventory']['星图']+"星图】";	
	document.getElementById("大型殖民舰队2").innerHTML="【1个舰队】【"+(gamedata['首都']['首都等级']*gamedata['首都']['首都等级']+1)+"张星图】";		
    首都资源项目()	






	if(gamedata['inventory']['执行力'] != undefined){  
	if(gamedata['inventory']['执行员']  != undefined){var 执行员=gamedata['inventory']['执行员'] }else{var 执行员=0}	
	if(gamedata['inventory']['机械客']  != undefined){var 机械客=gamedata['inventory']['机械客'] }else{var 机械客=0}	
	if(gamedata['inventory']['执政宫殿']  != undefined){var 执政宫殿=gamedata['inventory']['执政宫殿']*4 }else{var 执政宫殿=0}	
	if(gamedata['inventory']['机械议员']  != undefined){var 机械议员=gamedata['inventory']['机械议员']*5 }else{var 机械议员=0}	
	
	if(gamedata['inventory']['星战指挥部']  != undefined){var 星战指挥部=gamedata['inventory']['星战指挥部']}else{var 星战指挥部=0}		
	
	
	var 执行力加成=执行员+机械客+执政宫殿+机械议员
	var 执行力上限=执政宫殿*20000+机械议员*4000+10000+星战指挥部*2000000
	
	
	if(gamedata['inventory']['执行力'] < 执行力上限){  	
	 gamedata['inventory']['执行力']+=执行力加成
	}
	
	document.getElementById("执行宫殿1").style.display="";		
	document.getElementById("执行宫殿").innerHTML=""+nFormatter(gamedata['inventory']['执行力'], 3)+"/"+nFormatter(执行力上限, 3)+"执行力【+"+nFormatter(执行力加成, 3)+"点】";	
	document.getElementById("星区征招").innerHTML="【"+nFormatter(gamedata['inventory']['执行力'], 2)+"执行力】";		
	
	
    }

	if(gamedata['巨构']['巨构8等级'] != undefined){  
	if(gamedata['巨构']['巨构8等级']  >= 1){var 武器工厂=gamedata['巨构']['巨构8等级'] }else{var 武器工厂=0}
	if(gamedata['巨构']['巨构9等级']  >= 1){var 大武器工厂=gamedata['巨构']['巨构9等级']*8 }else{var 大武器工厂=0}
	if(gamedata['inventory']['零件包仓库']  != undefined){var 零件包仓库=gamedata['inventory']['零件包仓库']*1000 }else{var 零件包仓库=0}		
	var 武器零件包加成=武器工厂+大武器工厂
	var 武器零件包上限=1000+零件包仓库
	
	
	if(gamedata['inventory']['武器零件包'] < 武器零件包上限){  	
	 gamedata['inventory']['武器零件包']+=武器零件包加成
	}
	
	document.getElementById("武器仓库").style.display="";		
	document.getElementById("武器仓库").innerHTML=""+nFormatter(gamedata['inventory']['武器零件包'], 3)+"/"+nFormatter(武器零件包上限, 3)+"武器零件包【+"+nFormatter(武器零件包加成, 3)+"点】";	
	
	
	
    }

	if(gamedata['巨构']['巨构10等级'] != undefined){  
	if(gamedata['巨构']['巨构10等级']  >= 1){var 机械工厂=gamedata['巨构']['巨构10等级'] }else{var 机械工厂=0}
	if(gamedata['巨构']['巨构11等级']  >= 1){var 大机械工厂=gamedata['巨构']['巨构11等级']*8 }else{var 大机械工厂=0}
	if(gamedata['inventory']['机械装置']  != undefined){var 机械装置=gamedata['inventory']['机械装置']*1000 }else{var 机械装置=0}		
	var 工厂能量加成=机械工厂+大机械工厂
	var 工厂能量上限=1000+机械装置
	
	
	if(gamedata['inventory']['工厂能量'] < 工厂能量上限){  	
	 gamedata['inventory']['工厂能量']+=工厂能量加成
	}
	
	document.getElementById("机械装置").style.display="";		
	document.getElementById("机械装置").innerHTML=""+nFormatter(gamedata['inventory']['工厂能量'], 3)+"/"+nFormatter(工厂能量上限, 3)+"工厂能量【+"+nFormatter(工厂能量加成, 3)+"点】";	
	
	
	
    }

	if(gamedata['inventory']['跳跃引擎装置']  != undefined){var 跳跃引擎装置=gamedata['inventory']['跳跃引擎装置']}else{var 跳跃引擎装置=0}	
    if(gamedata['inventory']['星星能源']  != undefined){var 星星能源=gamedata['inventory']['星星能源']}else{var 星星能源=0}	
	
    document.getElementById("星战资源1").innerHTML = "剩余【"+nFormatter(跳跃引擎装置, 2)+"个跳跃引擎装置】";
    document.getElementById("星战资源2").innerHTML = "剩余【"+nFormatter(星星能源, 2)+"个星星能源】";		  
		
    document.getElementById("星区界面1").innerHTML = "";



  if(gamedata['首都']['首都等级']>=50){ var 首都等级=50}
  else{var 首都等级=gamedata['首都']['首都等级']}
   
   
   
	for(i = 1; i <= 首都等级; i++)
	{			
     
	 
	 
    if(gamedata['首都']['星区'+i+'繁荣度'] == undefined){gamedata['首都']['星区'+i+'繁荣度'] = 0;}
    if(gamedata['首都']['星区'+i+'繁荣度上限'] == undefined){gamedata['首都']['星区'+i+'繁荣度上限'] = 100;}	
    if(gamedata['首都']['星区'+i+'等级'] == undefined){gamedata['首都']['星区'+i+'等级'] = 0;}
    if(gamedata['首都']['星区'+i+'评分'] == undefined){gamedata['首都']['星区'+i+'评分'] = 0;}
    if(gamedata['首都']['星区'+i+'额外评分'] == undefined){gamedata['首都']['星区'+i+'额外评分'] = 0;}
    if(gamedata['首都']['星区'+i+'额外繁荣'] == undefined){gamedata['首都']['星区'+i+'额外繁荣'] = 1;}







    if(gamedata['首都']['星区'+i+'']==true){
	
	 var 物资需求 = Math.floor(Math.random()*100+1)
	
	 if(物资需求 >= 70&&gamedata['首都']['山铜货物']>0){	
		gamedata['首都']['山铜货物']-=1
		var 星区倍率 =Math.floor(Math.random()*3+7)
		}		
	 else if(物资需求 < 70&&物资需求 >= 45&&gamedata['首都']['陨铁货物']>0){	
		gamedata['首都']['陨铁货物']-=1
		var 星区倍率 =Math.floor(Math.random()*3+7)
		}	
	 else if(物资需求 < 45&&物资需求 >= 25&&gamedata['首都']['钛铁货物']>0){	
		gamedata['首都']['钛铁货物']-=1
		var 星区倍率 =Math.floor(Math.random()*3+7)
		}			
	 else if(物资需求 < 25&&gamedata['首都']['超合金货物']>0){	
		gamedata['首都']['超合金货物']-=1
		var 星区倍率 =Math.floor(Math.random()*1+4)
		}				
     else{ var 星区倍率 =1 }
		 var 星区开关 ="开"}
	else{
		 var 星区倍率 =1
		 var 星区开关 ="关"}
	
	
				 
		 



    var  星区繁荣度=0
	var  星区等级=0	
	var  星区评分=0		
    var  星区终端进度=gamedata['首都']['星区'+i+'繁荣度上限']	
    var  星区评分上限=gamedata['舰队']['总评分']
    var  星名=gamedata['首都']['星区'+i+'名称']

    var  星区额外评分=gamedata['首都']['星区'+i+'额外评分']
    var  星区额外繁荣=gamedata['首都']['星区'+i+'额外繁荣']


    var  星区等级=gamedata['首都']['星区'+i+'等级']
    var  星区繁荣度=gamedata['首都']['星区'+i+'繁荣度']
    var  星区评分=gamedata['首都']['星区'+i+'评分']
    var  增长速度=(星区等级+1+星区评分/1000000)*星区倍率*星区额外繁荣
	
    gamedata['首都']['星区'+i+'繁荣度']+=增长速度
	gamedata['首都']['首都硬币']+=增长速度*2888
	
	if(星区评分/星区评分上限<1){
    gamedata['首都']['星区'+i+'评分']+=星区等级+星区额外评分	
	}
	
	if(星区终端进度==100&&星区等级>0){
	for(io = 1; io <= 星区等级+1; io++)
	{		
		gamedata['首都']['星区'+i+'繁荣度上限']*=1.1;
	}	
	}	
	else if(星区繁荣度/星区终端进度>=1){
		
    gamedata['首都']['星区'+i+'繁荣度上限']=100	
	for(io = 1; io <= 星区等级+1; io++)
	{
		
		gamedata['首都']['星区'+i+'繁荣度上限']*=1.1;
	}



	
	 gamedata['首都']['星区'+i+'繁荣度']=0
	 gamedata['首都']['星区'+i+'等级']+=1
	 
	}	
    var  帝国硬币=gamedata['首都']['首都硬币'] 
	if(帝国硬币/1000000000000>=1){
		

	 gamedata['首都']['首都硬币']-=1000000000000
	 gamedata['inventory']['帝国硬币']+=1
	 	 
	 }	
	document.getElementById("星系首都资金3_2").style="width: "+(帝国硬币/1000000000000)*100+"%;";
	document.getElementById("星系首都资金3_3").innerHTML=""+nFormatter(帝国硬币, 2)+"店铺价值/"+nFormatter(1000000000000, 2)+"店铺价值";



	  var 星区界面 = '';	
	    星区界面 +=  '<div id="星区1" class="page_section8">'
		星区界面 +=	 '<div id="星区1_3" >'+星区名称[i]+''+星区名称[星名]+'星区【星区等级'+星区等级+'】<span id="星区1_4"onclick="星区('+i+')">支援物资【'+星区开关+'】</div>'		
		星区界面 +=  '<div class="explore_bar1">'
		星区界面 +=	 '<div id="星区1_1" class="巨构进度" style="width: '+(星区繁荣度/星区终端进度)*100+'%"></div>	'
		星区界面 +=	 '<div id="星区1_2" class="巨构进度建造">'+nFormatter(星区繁荣度, 2)+'/'+nFormatter(星区终端进度, 2)+'</div>【'+nFormatter(增长速度, 2)+'繁荣增长速度】 </div>'
		星区界面 +=	 '<div class="explore_bar1">'
		星区界面 +=	 '<div id="星区1_5"  class="巨构进度"  style="width: '+(星区评分/星区评分上限)*100+'%"></div>'	
		星区界面 +=	 '<div id="星区1_6"  class="巨构进度建造">'+nFormatter(星区评分, 2)+'星区评分</div></div>'			
        星区界面 +=  '<span id="星区1_7"></div>	'		  
	  $('.星区界面').append(星区界面);  			
	}


	}
	
   function 星区管理项目(obj){
	   
	 document.getElementById("星区管理").innerHTML = "";	    
	 var  星区管理项目=parseInt(obj)

	 
	 if(星区管理项目==1){gamedata['星战']['星区管理']=1}
	 if(星区管理项目==2){gamedata['星战']['星区管理']-=1}	 
	 if(星区管理项目==3&&gamedata['星战']['星区管理']<gamedata['首都']['首都等级']){gamedata['星战']['星区管理']+=1}	 
	 if(星区管理项目==4){gamedata['星战']['星区管理']=gamedata['首都']['首都等级']}	 
	 
	 
	 
	 
	if(gamedata['星战']['星区管理'] <=1){gamedata['星战']['星区管理'] = 1;} 
    var  管理界面=gamedata['星战']['星区管理'] 
	     
	var  星区管理星名=gamedata['首都']['星区'+管理界面+'名称']
    var  星区管理评分上限=gamedata['舰队']['总评分']
    var  星区管理等级=gamedata['首都']['星区'+管理界面+'等级']
    var  星区管理评分=gamedata['首都']['星区'+管理界面+'评分']	


    if(gamedata['首都']['星区'+管理界面+'剧毒'] == undefined){gamedata['首都']['星区'+管理界面+'剧毒'] = 0;}
    if(gamedata['首都']['星区'+管理界面+'熔岩'] == undefined){gamedata['首都']['星区'+管理界面+'熔岩'] = 0;}
    if(gamedata['首都']['星区'+管理界面+'寒冰'] == undefined){gamedata['首都']['星区'+管理界面+'寒冰'] = 0;}
	
    if(gamedata['首都']['星区'+管理界面+'星核'] == undefined){gamedata['首都']['星区'+管理界面+'星核'] = 0;}
    if(gamedata['首都']['星区'+管理界面+'星尘'] == undefined){gamedata['首都']['星区'+管理界面+'星尘'] = 0;}
    if(gamedata['首都']['星区'+管理界面+'盖亚'] == undefined){gamedata['首都']['星区'+管理界面+'盖亚'] = 0;}	
	
    if(gamedata['首都']['星区'+管理界面+'黄矮星'] == undefined){gamedata['首都']['星区'+管理界面+'黄矮星'] = 0;}
    if(gamedata['首都']['星区'+管理界面+'红巨星'] == undefined){gamedata['首都']['星区'+管理界面+'红巨星'] = 0;}
    if(gamedata['首都']['星区'+管理界面+'白矮星'] == undefined){gamedata['首都']['星区'+管理界面+'白矮星'] = 0;}
    if(gamedata['首都']['星区'+管理界面+'紫巨星'] == undefined){gamedata['首都']['星区'+管理界面+'紫巨星'] = 0;}
    if(gamedata['首都']['星区'+管理界面+'蓝巨星'] == undefined){gamedata['首都']['星区'+管理界面+'蓝巨星'] = 0;}
    if(gamedata['首都']['星区'+管理界面+'脉冲星'] == undefined){gamedata['首都']['星区'+管理界面+'脉冲星'] = 0;}
    if(gamedata['首都']['星区'+管理界面+'中子星'] == undefined){gamedata['首都']['星区'+管理界面+'中子星'] = 0;}
    if(gamedata['首都']['星区'+管理界面+'黑洞'] == undefined){gamedata['首都']['星区'+管理界面+'黑洞'] = 0;}
	
	
		
	
	
	
	 if(星区管理项目==11&&(gamedata['首都']['星区'+管理界面+'星核']*gamedata['首都']['星区'+管理界面+'星核']+1 )<=gamedata['inventory']['星核之力']){
	     gamedata['inventory']['星核之力']-=gamedata['首都']['星区'+管理界面+'星核']*gamedata['首都']['星区'+管理界面+'星核']+1  
		 gamedata['首都']['星区'+管理界面+'星核']+=1		 
		 }
	 else if(星区管理项目==12&&(gamedata['首都']['星区'+管理界面+'星尘']*gamedata['首都']['星区'+管理界面+'星尘']+1 )<=gamedata['inventory']['星尘之力']){
	     gamedata['inventory']['星尘之力']-=gamedata['首都']['星区'+管理界面+'星尘']*gamedata['首都']['星区'+管理界面+'星尘']+1  
		 gamedata['首都']['星区'+管理界面+'星尘']+=1		 
		 }
	else  if(星区管理项目==13&&(gamedata['首都']['星区'+管理界面+'盖亚']*gamedata['首都']['星区'+管理界面+'盖亚']+1 )<=gamedata['inventory']['盖亚之力']){
	     gamedata['inventory']['盖亚之力']-=gamedata['首都']['星区'+管理界面+'盖亚']*gamedata['首都']['星区'+管理界面+'盖亚']+1  
		 gamedata['首都']['星区'+管理界面+'盖亚']+=1		 
		 }
	else  if(星区管理项目==14&&(gamedata['首都']['星区'+管理界面+'黄矮星']*gamedata['首都']['星区'+管理界面+'黄矮星']+1 )<=gamedata['inventory']['黄矮星之力']){
	     gamedata['inventory']['黄矮星之力']-=gamedata['首都']['星区'+管理界面+'黄矮星']*gamedata['首都']['星区'+管理界面+'黄矮星']+1  
		 gamedata['首都']['星区'+管理界面+'黄矮星']+=1		 
		 }
	else  if(星区管理项目==15&&(gamedata['首都']['星区'+管理界面+'红巨星']*gamedata['首都']['星区'+管理界面+'红巨星']+1 )<=gamedata['inventory']['红巨星之力']){
	     gamedata['inventory']['红巨星之力']-=gamedata['首都']['星区'+管理界面+'红巨星']*gamedata['首都']['星区'+管理界面+'红巨星']+1  
		 gamedata['首都']['星区'+管理界面+'红巨星']+=1		 
		 }
	else  if(星区管理项目==16&&(gamedata['首都']['星区'+管理界面+'白矮星']*gamedata['首都']['星区'+管理界面+'白矮星']+1 )<=gamedata['inventory']['白矮星之力']){
	     gamedata['inventory']['白矮星之力']-=gamedata['首都']['星区'+管理界面+'白矮星']*gamedata['首都']['星区'+管理界面+'白矮星']+1  
		 gamedata['首都']['星区'+管理界面+'白矮星']+=1		 
		 }
	else  if(星区管理项目==17&&(gamedata['首都']['星区'+管理界面+'紫巨星']*gamedata['首都']['星区'+管理界面+'紫巨星']+1 )<=gamedata['inventory']['紫巨星之力']){
	     gamedata['inventory']['紫巨星之力']-=gamedata['首都']['星区'+管理界面+'紫巨星']*gamedata['首都']['星区'+管理界面+'紫巨星']+1  
		 gamedata['首都']['星区'+管理界面+'紫巨星']+=1		 
		 }
	else  if(星区管理项目==18&&(gamedata['首都']['星区'+管理界面+'蓝巨星']*gamedata['首都']['星区'+管理界面+'蓝巨星']+1 )<=gamedata['inventory']['蓝巨星之力']){
	     gamedata['inventory']['蓝巨星之力']-=gamedata['首都']['星区'+管理界面+'蓝巨星']*gamedata['首都']['星区'+管理界面+'蓝巨星']+1  
		 gamedata['首都']['星区'+管理界面+'蓝巨星']+=1		 
		 }
	else  if(星区管理项目==19&&(gamedata['首都']['星区'+管理界面+'脉冲星']*gamedata['首都']['星区'+管理界面+'脉冲星']+1 )<=gamedata['inventory']['脉冲星之力']){
	     gamedata['inventory']['脉冲星之力']-=gamedata['首都']['星区'+管理界面+'脉冲星']*gamedata['首都']['星区'+管理界面+'脉冲星']+1  
		 gamedata['首都']['星区'+管理界面+'脉冲星']+=1		 
		 }
	else  if(星区管理项目==20&&(gamedata['首都']['星区'+管理界面+'中子星']*gamedata['首都']['星区'+管理界面+'中子星']+1 )<=gamedata['inventory']['中子星之力']){
	     gamedata['inventory']['中子星之力']-=gamedata['首都']['星区'+管理界面+'中子星']*gamedata['首都']['星区'+管理界面+'中子星']+1  
		 gamedata['首都']['星区'+管理界面+'中子星']+=1		 
		 }
	else  if(星区管理项目==21&&(gamedata['首都']['星区'+管理界面+'黑洞']*gamedata['首都']['星区'+管理界面+'黑洞']+1 )<=gamedata['inventory']['黑洞之力']){
	     gamedata['inventory']['黑洞之力']-=gamedata['首都']['星区'+管理界面+'黑洞']*gamedata['首都']['星区'+管理界面+'黑洞']+1  
		 gamedata['首都']['星区'+管理界面+'黑洞']+=1		 
		 }
	else  if(星区管理项目==22&&(gamedata['首都']['星区'+管理界面+'剧毒']*gamedata['首都']['星区'+管理界面+'剧毒']+1 )<=gamedata['inventory']['剧毒核心']){
	     gamedata['inventory']['剧毒核心']-=gamedata['首都']['星区'+管理界面+'剧毒']*gamedata['首都']['星区'+管理界面+'剧毒']+1  
		 gamedata['首都']['星区'+管理界面+'剧毒']+=1		 
		 }
	else  if(星区管理项目==23&&(gamedata['首都']['星区'+管理界面+'熔岩']*gamedata['首都']['星区'+管理界面+'熔岩']+1 )<=gamedata['inventory']['熔岩核心']){
	     gamedata['inventory']['熔岩核心']-=gamedata['首都']['星区'+管理界面+'熔岩']*gamedata['首都']['星区'+管理界面+'熔岩']+1  
		 gamedata['首都']['星区'+管理界面+'熔岩']+=1		 
		 }
	else  if(星区管理项目==24&&(gamedata['首都']['星区'+管理界面+'寒冰']*gamedata['首都']['星区'+管理界面+'寒冰']+1)<=gamedata['inventory']['寒冰核心']){
	     gamedata['inventory']['寒冰核心']-=gamedata['首都']['星区'+管理界面+'寒冰']*gamedata['首都']['星区'+管理界面+'寒冰']+1  
		 gamedata['首都']['星区'+管理界面+'寒冰']+=1		 
		 }



	
    var  剧毒等级=gamedata['首都']['星区'+管理界面+'剧毒']		
    var  熔岩等级=gamedata['首都']['星区'+管理界面+'熔岩']			
    var  寒冰等级=gamedata['首都']['星区'+管理界面+'寒冰']	
	

	
    var  星核之力=gamedata['首都']['星区'+管理界面+'星核']		
    var  星尘之力=gamedata['首都']['星区'+管理界面+'星尘']			
    var  盖亚之力=gamedata['首都']['星区'+管理界面+'盖亚']			
	
    var  黄矮星之力=gamedata['首都']['星区'+管理界面+'黄矮星']		
    var  红巨星之力=gamedata['首都']['星区'+管理界面+'红巨星']	
    var  白矮星之力=gamedata['首都']['星区'+管理界面+'白矮星']	
    var  紫巨星之力=gamedata['首都']['星区'+管理界面+'紫巨星']	
    var  蓝巨星之力=gamedata['首都']['星区'+管理界面+'蓝巨星']	
    var  脉冲星之力=gamedata['首都']['星区'+管理界面+'脉冲星']	
    var  中子星之力=gamedata['首都']['星区'+管理界面+'中子星']	
    var  黑洞之力=gamedata['首都']['星区'+管理界面+'黑洞']	
	
	var 星区管理额外基础评分=星核之力+星尘之力*2+盖亚之力*3+黄矮星之力*5+红巨星之力*8+白矮星之力*12+紫巨星之力*17+蓝巨星之力*23+脉冲星之力*30+中子星之力*50+黑洞之力*100	
	var 星区管理额外繁荣=(1+剧毒等级/10)*(1+熔岩等级/10)*(1+寒冰等级/10)
	gamedata['首都']['星区'+管理界面+'额外评分']=星区管理额外基础评分		
	gamedata['首都']['星区'+管理界面+'额外繁荣']=星区管理额外繁荣
	
	var 星区管理基础繁荣=(星区管理等级+1+星区管理评分/1000000)*星区管理额外繁荣
	var 星区管理基础评分=星区管理等级+星区管理额外基础评分

	
	  var 星区管理 = '';	

		星区管理 +=	 '<div id="星区管理1" >'+星区名称[管理界面]+''+星区名称[星区管理星名]+'星区【星区评分增长'+星区管理基础评分+'】【基础繁荣增长'+nFormatter(星区管理基础繁荣, 2)+'】</div>'		
		星区管理 +=	 '<div class="explore_bar1">'
		星区管理 +=	 '<div id="星区1_5"  class="巨构进度"  style="width: '+(星区管理评分/星区管理评分上限)*100+'%"></div>'	
		星区管理 +=	 '<div id="星区1_6"  class="巨构进度建造">'+nFormatter(星区管理评分, 5)+'星区评分</div></div>'					
	  
	  $('.星区管理界面').append(星区管理); 

	document.getElementById("星区之力0").innerHTML="【剧毒等级"+剧毒等级+"】【熔岩等级"+熔岩等级+"】【寒冰等级"+寒冰等级+"】";
	document.getElementById("升级消耗0").innerHTML="【剧毒核心"+nFormatter(剧毒等级*剧毒等级+1 , 2)+"】【熔岩核心"+nFormatter(熔岩等级*熔岩等级+1 , 2)+"】【寒冰核心"+nFormatter(寒冰等级*寒冰等级+1 , 2)+"】";


	document.getElementById("星区之力1").innerHTML="【星核等级"+星核之力+"】【星尘等级"+星尘之力+"】【盖亚等级"+盖亚之力+"】";
	document.getElementById("升级消耗1").innerHTML="【星核之力"+nFormatter(星核之力*星核之力+1 , 2)+"】【星尘之力"+nFormatter(星尘之力*星尘之力+1 , 2)+"】【盖亚之力"+nFormatter(盖亚之力*盖亚之力+1 , 2)+"】";

	document.getElementById("星区之力2").innerHTML="【黄矮星等级"+黄矮星之力+"】【红巨星等级"+红巨星之力+"】【白矮星等级"+白矮星之力+"】【紫巨星之力"+紫巨星之力+"】";
	document.getElementById("升级消耗2").innerHTML="【黄矮星之力"+nFormatter(黄矮星之力*黄矮星之力+1 , 2)+"】【红巨星之力"+nFormatter(红巨星之力*红巨星之力+1 , 2)+"】【白矮星之力"+nFormatter(白矮星之力*白矮星之力+1 , 2)+"】【紫巨星之力"+nFormatter(紫巨星之力*紫巨星之力+1 , 2)+"】";

	document.getElementById("星区之力3").innerHTML="【蓝巨星等级"+蓝巨星之力+"】【脉冲星之力"+脉冲星之力+"】【中子星等级"+中子星之力+"】【黑洞之力"+黑洞之力+"】";
	document.getElementById("升级消耗3").innerHTML="【蓝巨星之力"+nFormatter(蓝巨星之力*蓝巨星之力+1 , 2)+"】【脉冲星之力"+nFormatter(脉冲星之力*脉冲星之力+1 , 2)+"】【中子星之力"+nFormatter(中子星之力*中子星之力+1 , 2)+"】【黑洞之力"+nFormatter(黑洞之力*黑洞之力+1 , 2)+"】";

	document.getElementById("星区管理2倍率").innerHTML="【"+nFormatter(星区管理额外繁荣, 2)+"倍率】";
	document.getElementById("星区管理3倍率").innerHTML="【"+nFormatter(星区管理额外基础评分, 2)+"分】";
	document.getElementById("星区管理界面消息").innerHTML="位置"+管理界面+"星区";
	  
    }		
	
	
	
	
	
	
	
 function 星系首都()	{	
 
     if(gamedata['inventory']['帝国硬币'] == undefined){gamedata['inventory']['帝国硬币'] = 0;} 
 
      var 首都等级=gamedata['首都']['首都等级']	
	  var 大型殖民舰队=gamedata['inventory']['大型殖民舰队']
	  var 星图=gamedata['inventory']['星图']
   if(首都等级<50){ 	  
      if(大型殖民舰队>=1&&星图>=首都等级*首都等级+1){	  
		  this.gamedata['首都']['首都等级']+=1
          gamedata['首都']['星区'+(首都等级+1)+'名称']=Math.floor(Math.random()*49+1)  		  
		  this.gamedata['inventory']['大型殖民舰队']-=1
		  this.gamedata['inventory']['星图']-=首都等级*首都等级+1   
		  }
      else{document.getElementById("星系首都").innerHTML = "星际殖民【资源不够】";	};
	}else{document.getElementById("星系首都").innerHTML = "星际殖民【满级了】";	};  
	  
	  
}	
function 星区(obj){	
		
	 var  星区开关=parseInt(obj)

	if(gamedata['首都']['星区'+星区开关+'']==true){gamedata['首都']['星区'+星区开关+'']=false}else{gamedata['首都']['星区'+星区开关+'']=true }
	
}	
function 首都项目(obj){	

  if(gamedata['inventory']['大型殖民舰队'] != undefined){	document.getElementById("星系首都界面").style.display="";	}			
  if(gamedata['inventory']['山铜货运']>=1){	document.getElementById("首都资源项目1").style.display="";	}		
  if(gamedata['inventory']['钛铁货运']>=1){	document.getElementById("首都资源项目2").style.display="";	}		  
  if(gamedata['inventory']['陨铁货运']>=1){	document.getElementById("首都资源项目3").style.display="";	}		
  if(gamedata['inventory']['超合金货运']>=1){	document.getElementById("首都资源项目4").style.display="";}	
  if(gamedata['首都']['首都等级']>=1){	document.getElementById("星系首都资金1").style.display="";}	
          document.getElementById("星系首都").innerHTML = "星际殖民";		
  
}	
function 首都资源项目(obj){		
	
	
	 var  首都资源项目=parseInt(obj)
	 
	 
	 
		 
	 if(首都资源项目==1){
		 
     if(gamedata['inventory']['山铜货运']  != undefined){  var 山铜上限=gamedata['inventory']['山铜货运']*360}else{var 山铜上限=0}		
	 var 山铜货物=gamedata['首都']['山铜货物']
	 
	 if(山铜上限>山铜货物&&gamedata['inventory']['山铜']>=Math.floor(山铜上限-山铜货物)){  	 
	 gamedata['inventory']['山铜']-= Math.floor(山铜上限-山铜货物)
     gamedata['首都']['山铜货物']+= Math.floor(山铜上限-山铜货物) 
	 }	 
	 else if(山铜上限>山铜货物){
     gamedata['首都']['山铜货物']+= gamedata['inventory']['山铜']	 
	 gamedata['inventory']['山铜']= 0		 
	 }
	 }
	
	 if(首都资源项目==2){
		 
     if(gamedata['inventory']['钛铁货运']  != undefined){  var 钛铁上限=gamedata['inventory']['钛铁货运']*360}else{var 钛铁上限=0}		
	 var 钛铁货物=gamedata['首都']['钛铁货物']
	 
	 if(钛铁上限>钛铁货物&&gamedata['inventory']['钛铁']>=Math.floor(钛铁上限-钛铁货物)){  	 
	 gamedata['inventory']['钛铁']-= Math.floor(钛铁上限-钛铁货物)
     gamedata['首都']['钛铁货物']+= Math.floor(钛铁上限-钛铁货物) 
	 }	 
	 else if(钛铁上限>钛铁货物){
     gamedata['首都']['钛铁货物']+= gamedata['inventory']['钛铁']	 
	 gamedata['inventory']['钛铁']= 0		 
	 }
	 }	
	 if(首都资源项目==3){
		 
     if(gamedata['inventory']['陨铁货运']  != undefined){  var 陨铁上限=gamedata['inventory']['陨铁货运']*360}else{var 陨铁上限=0}		
	 var 陨铁货物=gamedata['首都']['陨铁货物']
	 
	 if(陨铁上限>陨铁货物&&gamedata['inventory']['陨铁']>=Math.floor(陨铁上限-陨铁货物)){  	 
	 gamedata['inventory']['陨铁']-= Math.floor(陨铁上限-陨铁货物)
     gamedata['首都']['陨铁货物']+= Math.floor(陨铁上限-陨铁货物) 
	 }	 
	 else if(陨铁上限>陨铁货物){
     gamedata['首都']['陨铁货物']+= gamedata['inventory']['陨铁']	 
	 gamedata['inventory']['陨铁']= 0		 
	 }
	 }		
	 if(首都资源项目==4){
		 
     if(gamedata['inventory']['超合金货运']  != undefined){  var 超合金上限=gamedata['inventory']['超合金货运']*360}else{var 超合金上限=0}		
	 var 超合金货物=gamedata['首都']['超合金货物']
	 
	 if(超合金上限>超合金货物&&gamedata['inventory']['超合金']>=Math.floor(超合金上限-超合金货物)){  	 
	 gamedata['inventory']['超合金']-= Math.floor(超合金上限-超合金货物)
     gamedata['首都']['超合金货物']+= Math.floor(超合金上限-超合金货物) 
	 }	 
	 else if(超合金上限>超合金货物){
     gamedata['首都']['超合金货物']+= gamedata['inventory']['超合金']	 
	 gamedata['inventory']['超合金']= 0		 
	 }
	 }		
	
	
	
	
	
	

		   






	for(i = 1; i <= 4; i++)
	{
		
    if(i==1){ 
	var 物资名称="山铜"	
	var 物资货物=gamedata['首都']['山铜货物']
    var 物资上限=gamedata['inventory']['山铜货运']*360		
	}
	
    if(i==2){ 
	var 物资名称="钛铁"		
	var 物资货物=gamedata['首都']['钛铁货物']
    var 物资上限=gamedata['inventory']['钛铁货运']*360		
	}	
		
    if(i==3){ 
	var 物资名称="陨铁"		
	var 物资货物=gamedata['首都']['陨铁货物']
    var 物资上限=gamedata['inventory']['陨铁货运']*360		
	}			

    if(i==4){ 
	var 物资名称="超合金"		
	var 物资货物=gamedata['首都']['超合金货物']
    var 物资上限=gamedata['inventory']['超合金货运']*360		
	}			
		
    if(gamedata['首都'][''+物资名称+'货物']  == undefined){gamedata['首都'][''+物资名称+'货物']=0}
 	if((物资货物/物资上限)*100>100){gamedata['首都'][''+物资名称+'货物']=物资上限}       

		
		
	document.getElementById("首都资源项目"+i+"_2").style="width: "+(物资货物/物资上限)*100+"%;";
	document.getElementById("首都资源项目"+i+"_3").innerHTML=""+nFormatter(物资货物, 2)+""+物资名称+"/"+nFormatter(物资上限, 2)+""+物资名称+"";		
						
	}		
}	


















function 远征货运(obj){		
	
	
	 var  远征货运=parseInt(obj)
     if(gamedata['inventory']['远征货运']  != undefined){  var 货运上限=gamedata['inventory']['远征货运']*800}else{var 货运上限=0}		
     if(gamedata['舰队']['目前货物']  == undefined){gamedata['舰队']['目前货物']=0}
	 var 目前货物=gamedata['舰队']['目前货物']
	 
	 if(远征货运==2){
	 if(货运上限-888>目前货物&&gamedata['inventory']['货物']>=Math.floor((货运上限-目前货物)/888)){  	 
	 gamedata['inventory']['货物']-= Math.floor((货运上限-目前货物)/888)
     gamedata['舰队']['目前货物']+= Math.floor((货运上限-目前货物)/888)*888 
	 document.getElementById("舰队项目1_3").innerHTML="【消耗"+Math.floor((货运上限-目前货物)/888)+"货物,补充了"+Math.floor((货运上限-目前货物)/888)*888 +"舰队补给】";			 
	 }
	 else if(货运上限-888>目前货物){
     gamedata['舰队']['目前货物']+= gamedata['inventory']['货物']*888 
	 document.getElementById("舰队项目1_3").innerHTML="【消耗"+gamedata['inventory']['货物']+"货物,补充了"+gamedata['inventory']['货物']*888 +"舰队补给】";		 
	 gamedata['inventory']['货物']= 0		 
	 }
	 else{
	 document.getElementById("舰队项目1_3").innerHTML="【剩余空间不足】";			 
	 } 
	 }
	
	if((目前货物/货运上限)*100>100){
       gamedata['舰队']['目前货物']=货运上限  
	}
  
    if(gamedata['舰队']["目前货物"]<1){var 目前货物=0}
		   

	document.getElementById("舰队项目1_1").style="width: "+(目前货物/货运上限)*100+"%;";
	document.getElementById("舰队项目1_2").innerHTML=""+nFormatter(目前货物, 2)+"/"+nFormatter(货运上限, 2)+"";		
			
}	

 function 地球星门项目(obj){
	var 地球星门项目=parseInt(obj) 
	if(gamedata['巨构']['地球星门']  == undefined){gamedata['巨构']['地球星门']=0};
    if(地球星门项目==1){gamedata['巨构']['地球星门']=1}
    if(地球星门项目==2){gamedata['巨构']['地球星门']=2}
    if(地球星门项目==3){gamedata['巨构']['地球星门']=3}	
		
	

}
 function 外星球殖民项目(obj){	
	

    var  星球项目=parseInt(obj)
    var  需求繁荣度=0
    var  目前进度=0
	var  目前等级=0
	var  增长速度=0
    var  终端进度=1000

	


	

	
	
	
	
	
	
    if(星球项目==1){
	if(gamedata['太空']['火星繁荣度']  == undefined){gamedata['太空']['火星繁荣度']=0};
	if(gamedata['太空']['火星等级']  == undefined){gamedata['太空']['火星等级']=0};	
	var 目前进度=gamedata['太空']['火星繁荣度']
	var 目前等级=gamedata['太空']['火星等级']	
	var 星球="火星"
	if(gamedata['巨构']['巨构3等级'] != undefined){var 本地星门=gamedata['巨构']['巨构3等级']}else{var 本地星门=0 };
	if(gamedata['巨构']['地球星门']==星球项目){var 地球星门=gamedata['巨构']['巨构2等级']*2;
	document.getElementById("星门殖民地1").innerHTML="【"+星球+"】";
	}else{var 地球星门=1 };		
	} 
    if(星球项目==2){
	if(gamedata['太空']['金星繁荣度']  == undefined){gamedata['太空']['金星繁荣度']=0};
	if(gamedata['太空']['金星等级']  == undefined){gamedata['太空']['金星等级']=0};	
	var 目前进度=gamedata['太空']['金星繁荣度']
	var 目前等级=gamedata['太空']['金星等级']
	var 星球="金星"
	if(gamedata['巨构']['巨构4等级'] != undefined){var 本地星门=gamedata['巨构']['巨构4等级']}else{var 本地星门=0 };
	if(gamedata['巨构']['地球星门']==星球项目){var 地球星门=gamedata['巨构']['巨构2等级']*2;
	document.getElementById("星门殖民地1").innerHTML="【"+星球+"】";
	}else{var 地球星门=1 };			
	}
    if(星球项目==3){
	if(gamedata['太空']['水星繁荣度']  == undefined){gamedata['太空']['水星繁荣度']=0};
	if(gamedata['太空']['水星等级']  == undefined){gamedata['太空']['水星等级']=0};	
	var 目前进度=gamedata['太空']['水星繁荣度']
	var 目前等级=gamedata['太空']['水星等级']
	var 星球="水星"	
	if(gamedata['巨构']['巨构5等级'] != undefined){var 本地星门=gamedata['巨构']['巨构5等级']}else{var 本地星门=0 };
	if(gamedata['巨构']['地球星门']==星球项目){var 地球星门=gamedata['巨构']['巨构2等级']*2;
	document.getElementById("星门殖民地1").innerHTML="【"+星球+"】";
	}else{var 地球星门=1 };			
	}


	if(gamedata['inventory'][''+星球+'居住地']>=gamedata['inventory'][''+星球+'货运']){
	var 增长速度=gamedata['inventory'][''+星球+'货运']}else{var 增长速度=gamedata['inventory'][''+星球+'居住地']}		
     gamedata['太空'][''+星球+'繁荣度']+=增长速度+本地星门*增长速度*地球星门	
	
	
	
	
	for(i = 1; i <= 目前等级; i++)
	{
		终端进度 *= 4;
	}	
	if(目前进度/终端进度>=1){
		
	 gamedata['太空'][''+星球+'繁荣度']=0
	 gamedata['太空'][''+星球+'等级']+=1
	 
	 }		

	document.getElementById("外星球殖民"+星球项目+"").style.display="";
	document.getElementById("外星球殖民"+星球项目+"_1").style="width: "+(目前进度/终端进度)*100+"%;";
	document.getElementById("外星球殖民"+星球项目+"_2").innerHTML=""+nFormatter(目前进度, 2)+"/"+nFormatter(终端进度, 2)+"";
    document.getElementById("外星球殖民"+星球项目+"_3").innerHTML=""+目前等级+"【繁荣增长:"+nFormatter(增长速度+本地星门*增长速度*地球星门, 2)+"】";

	 
	 
}	
 function 殖民地1()	{	
 
     if(gamedata['太空']['能量接收器']<40){
 
      var 能量接收器等级=gamedata['太空']['能量接收器']	
	  var 能量接收器数量=gamedata['inventory']['能量接收器']
	  
      if(能量接收器数量>=能量接收器等级*能量接收器等级*10+1){
		  this.gamedata['太空']['能量接收器']+=1
		  this.gamedata['inventory']['能量接收器']-=能量接收器等级*能量接收器等级*10+1
          document.getElementById("殖民地提示").innerHTML = "消耗了【"+(能量接收器等级*能量接收器等级*10+1)+"能量接收器】能量接收器+1级";       		 
		  }
      else{document.getElementById("殖民地提示").innerHTML = "能量接收器不足，需要能量接收器"+(能量接收器等级*能量接收器等级*10+1)+"个";	};
	  } else{document.getElementById("殖民地提示").innerHTML = "目前满级了【后续需要其他东西提高上限】";	};
	  
	  
	  
}
function 殖民地4()	{	
          var 降级=confirm("您确定要降级?")
          if (降级==true){}else {return;}
         
      var 能量接收器等级=gamedata['太空']['能量接收器']-1	
	  var 能量接收器数量=gamedata['inventory']['能量接收器']
        if(能量接收器等级>=1){
		  this.gamedata['太空']['能量接收器']-=1
		  this.gamedata['inventory']['能量接收器']+=Math.ceil((能量接收器等级*能量接收器等级*10)/2)
          document.getElementById("殖民地提示").innerHTML = "能量接收器-1级退还了"+Math.ceil((能量接收器等级*能量接收器等级*10)/2)+"能量接收器";       		 
		  }else{document.getElementById("殖民地提示").innerHTML = "最低1级";   }
	
}	

 function 殖民地1_1()	{	
 
          if(gamedata['殖民地1_1']==false){gamedata['殖民地1_1']=true ;document.getElementById("殖民地1_1").innerHTML = "【开】"; }
	      else{gamedata['殖民地1_1']=false	;document.getElementById("殖民地1_1").innerHTML = "【关】"; }
}
 function 殖民地2()	{	
	
	  var 殖民地繁荣度=gamedata['太空']['殖民地繁荣度']	

	  
	  if(殖民地繁荣度>=10){ 
	  
	  this.gamedata['inventory']['物资']+=Math.floor(殖民地繁荣度/10)
	  this.gamedata['太空']['殖民地繁荣度']=0

	  
	if(gamedata['太空']['火星等级'] != undefined){this.gamedata['inventory']['火星物资']+=Math.floor(殖民地繁荣度/10)*gamedata['太空']['火星等级']};		  
	if(gamedata['太空']['金星等级'] != undefined){this.gamedata['inventory']['金星物资']+=Math.floor(殖民地繁荣度/10)*gamedata['太空']['金星等级']};
	if(gamedata['太空']['水星等级'] != undefined){this.gamedata['inventory']['水星物资']+=Math.floor(殖民地繁荣度/10)*gamedata['太空']['水星等级']};  
	if(gamedata['科技']['科技8等级'] != undefined){
	if(gamedata['inventory']['机械科技包'] == undefined){gamedata['inventory']['机械科技包']=0;}		
	this.gamedata['inventory']['机械科技包']+=Math.floor(殖民地繁荣度/10)*gamedata['科技']['科技8等级']};  	  
	  

            document.getElementById("殖民地提示").innerHTML = "你收入了"+Math.floor(殖民地繁荣度/10)+"物资";   
	 } else{document.getElementById("殖民地提示").innerHTML = "你的殖民地非常贫穷";	};	 
}
 function 殖民地3()	{	
	
	  var 戴森云=gamedata['太空']['戴森云能量']	
	  var 能量接收器数量=gamedata['inventory']['能量接收器']	
	  
	  if(能量接收器数量>=Math.ceil(戴森云/1000)){ 
	  
	  this.gamedata['inventory']['能量接收器']-=Math.ceil(戴森云/1000)
	  this.gamedata['inventory']['光能']+=Math.floor(戴森云*0.1)
	  this.gamedata['太空']['戴森云能量']=Math.floor(戴森云/2)
          document.getElementById("殖民地提示").innerHTML = "过载接收了"+Math.floor(戴森云*0.1)+"光能";   
	 } else{document.getElementById("殖民地提示").innerHTML = "能量接收器不足，需要能量接收器"+Math.ceil(戴森云/1000)+"个";	};	 
}	

	
 function 科技项目(){	

	if(gamedata['inventory']['实验室'] != undefined){  
	document.getElementById("科技研究界面").style.display="";	
	}

	if(gamedata['科技'] == undefined){gamedata['科技'] = {};}
	if(gamedata['科技']['等级'] == undefined){gamedata['科技']['等级']=0;}
     科技等级列表()	

 }		
		
	
function 科技列表(obj){	

    var 科技列表 =parseInt(obj)	
    var 项目内容 = "";	
    var 目前等级 = "材料不足";	
    var 目前进度 = 0;	
    var 终端进度 = 1000000;
    var 列表="";
    var 增长倍率=10;
	var 材料=0;
	var 速度=1;
	if(gamedata['inventory']['实验室'] != undefined){var 实验室=gamedata['inventory']['实验室']}else{var 实验室=0};
	if(gamedata['inventory']['殖民地科技包'] != undefined){var 殖民地科技包=gamedata['inventory']['殖民地科技包']}else{var 殖民地科技包=0};
	if(gamedata['inventory']['机械研究瓶'] != undefined){var 机械研究瓶=gamedata['inventory']['机械研究瓶']
		var 黑瓶="【黑"+机械研究瓶.toFixed(1)+"】"
		}else{var 黑瓶="";	};
	if(gamedata['inventory']['生物科技瓶'] != undefined){var 生物科技瓶=gamedata['inventory']['生物科技瓶']
		var 绿瓶="【绿"+生物科技瓶.toFixed(1)+"】"
		}else{var 绿瓶="";	};	
	
	
	
	
    if(科技列表==0){gamedata['科技']['地点']=0;} 
    if(科技列表==1){gamedata['科技']['地点']=1;} 
    if(科技列表==2){gamedata['科技']['地点']=2;} 
    if(科技列表==3){gamedata['科技']['地点']=3;}  
    if(科技列表==4){gamedata['科技']['地点']=4;} 
    if(科技列表==5){gamedata['科技']['地点']=5;}  
    if(科技列表==6){gamedata['科技']['地点']=6;}  
    if(科技列表==7){gamedata['科技']['地点']=7;} 
    if(科技列表==8){gamedata['科技']['地点']=8;} 
    if(科技列表==9){gamedata['科技']['地点']=9;} 
    if(科技列表==10){gamedata['科技']['地点']=10;} 
    if(科技列表==11){gamedata['科技']['地点']=11;} 	
    if(科技列表==12){gamedata['科技']['地点']=12;} 		
    if(科技列表==13){gamedata['科技']['地点']=13;} 		
    if(科技列表==14){gamedata['科技']['地点']=14;} 		
    if(科技列表==100){gamedata['科技']['地点']=100;} 

   	if(gamedata['科技']['科技'+科技列表+'进度']== undefined){gamedata['科技']['科技'+科技列表+'进度']=0};
	if(gamedata['科技']['科技'+科技列表+'等级']== undefined){gamedata['科技']['科技'+科技列表+'等级']=0};	 

	var 戴森云=gamedata['太空']['戴森云能量']	
    var 启动成本=实验室*50

 	document.getElementById("科技项目提示1").innerHTML = "【"+Math.floor(实验室)+"座实验室】";  
    document.getElementById("科技项目提示3").innerHTML = "【红"+殖民地科技包.toFixed(1)+"】"+黑瓶+""+绿瓶+""; 


	
    if(科技列表==99&&gamedata['科技']['地点']>0&&戴森云>启动成本){ 

    var 增长速度=+Math.floor(gamedata['inventory']['实验室']); 	
	
   if(gamedata['科技']['地点']==100){
   if(gamedata['科技']['科技4等级'] != undefined){var 物理学研究=gamedata['科技']['科技4等级'] }	else{var 物理学研究=0 }	
   if(gamedata['科技']['科技12等级'] != undefined){var 生物学研究=gamedata['科技']['科技12等级']*10 }	else{var 生物学研究=0 }	
   if(gamedata['科技']['科技7等级'] != undefined){
   if(gamedata['科技']['科技7等级'] >= 30){var 超物理学研究=6}else{var 超物理学研究=gamedata['科技']['科技7等级']*0.2 }	   
	 }else{var 超物理学研究=0 }	

   if(gamedata['科技']['科技10等级'] != undefined){
   if(gamedata['科技']['科技10等级'] >= 20){var 智能科研=2}else{var 智能科研=gamedata['科技']['科技10等级']*0.1 }	   
	 }else{var 智能科研=0 }	
	 
	 
	 
	 
     var 速度=1+物理学研究+生物学研究	 	
     var 列表=100
     var 材料=1	 
     var 项目内容 = "科技等级【每个等级会出现新科技】等级";	  
	 var 增长倍率=10-超物理学研究-智能科研;
	 var 终端进度 = 1000;
	 var 目前等级=gamedata['科技']['科技'+列表+'等级']
	 var 目前进度=gamedata['科技']['科技'+列表+'进度']		  
	} 	
		
	
   if(gamedata['科技']['地点']==1&&gamedata['inventory']['殖民地科技包']>=增长速度/100){	
     var 列表=1
     var 材料=1	 
     var 项目内容 = "舰队引擎改良1【每个等级提升1点舰队速度】等级";	 
	 var 增长倍率=1.8;
	 var 终端进度 = 1000;
	 var 目前等级=gamedata['科技']['科技'+列表+'等级']
	 var 目前进度=gamedata['科技']['科技'+列表+'进度']		 
	gamedata['inventory']['殖民地科技包']-=增长速度/100	 
	} 
   if(gamedata['科技']['地点']==2&&gamedata['inventory']['殖民地科技包']>=增长速度/100){	
     var 列表=2
     var 材料=1	 
	 var 终端进度 = 2000;	 
     var 项目内容 = "帝制信徒【每个等级提升百分15丰碑效果】等级";	 
	 var 增长倍率=1.5;
	 var 目前等级=gamedata['科技']['科技'+列表+'等级']
	 var 目前进度=gamedata['科技']['科技'+列表+'进度']	
	gamedata['inventory']['殖民地科技包']-=增长速度/100	 
	}
   if(gamedata['科技']['地点']==3&&gamedata['inventory']['殖民地科技包']>=增长速度/100){	
     var 列表=3
     var 材料=1
	 var 终端进度 = 5000;
     var 项目内容 = "社会学研究【每个等级提升0.1点繁荣增长】等级";	 
	 var 增长倍率=6;
	 var 目前等级=gamedata['科技']['科技'+列表+'等级']
	 var 目前进度=gamedata['科技']['科技'+列表+'进度']	
	gamedata['inventory']['殖民地科技包']-=增长速度/100	 
	}
   if(gamedata['科技']['地点']==4&&gamedata['inventory']['殖民地科技包']>=增长速度/100){	
     var 列表=4
     var 材料=1
	 var 终端进度 = 1000;
     var 项目内容 = "物理学研究【每个等级提升百分100科技研发速度】等级";	 
	 var 增长倍率=1.05;
	 var 目前等级=gamedata['科技']['科技'+列表+'等级']
	 var 目前进度=gamedata['科技']['科技'+列表+'进度']	
	gamedata['inventory']['殖民地科技包']-=增长速度/100	 
	}	
   if(gamedata['科技']['地点']==5&&gamedata['inventory']['殖民地科技包']>=增长速度/100){	
     var 列表=5
     var 材料=1
	 var 终端进度 = 5000;
     var 项目内容 = "工程学研究【每个等级提升百分1舰队总评分】等级";	 
	 var 增长倍率=2.2;
	 var 目前等级=gamedata['科技']['科技'+列表+'等级']
	 var 目前进度=gamedata['科技']['科技'+列表+'进度']	
	gamedata['inventory']['殖民地科技包']-=增长速度/100	 
	}		
   if(gamedata['科技']['地点']==6&&gamedata['inventory']['殖民地科技包']>=增长速度/100){	
     var 列表=6
     var 材料=1	 
     var 项目内容 = "反应堆增压器【每个等级提升2点舰队速度】等级";	 
	 var 增长倍率=3.6;
	 var 终端进度 = 1000;
	 var 目前等级=gamedata['科技']['科技'+列表+'等级']
	 var 目前进度=gamedata['科技']['科技'+列表+'进度']		 
	gamedata['inventory']['殖民地科技包']-=增长速度/100	 
	} 	
   if(gamedata['科技']['地点']==7&&gamedata['inventory']['殖民地科技包']>=增长速度/100){	
     var 列表=7
     var 材料=1
	 var 终端进度 = 10000;
     var 项目内容 = "超物理学研究【每个等级减少0.2倍科技研发增长倍率】等级";	 
	 var 增长倍率=1.3;
	 var 目前等级=gamedata['科技']['科技'+列表+'等级']
	 var 目前进度=gamedata['科技']['科技'+列表+'进度']	
	gamedata['inventory']['殖民地科技包']-=增长速度/100	 
	}		
   if(gamedata['科技']['地点']==8&&gamedata['inventory']['殖民地科技包']>=增长速度/100){	
     var 列表=8
     var 材料=1
	 var 终端进度 = 10000;
     var 项目内容 = "机械技术【血肉苦弱，机械永存！收割殖民地资源可以根据等级获取新物资】等级";	 
	 var 增长倍率=3;
	 var 目前等级=gamedata['科技']['科技'+列表+'等级']
	 var 目前进度=gamedata['科技']['科技'+列表+'进度']	
	gamedata['inventory']['殖民地科技包']-=增长速度/100	 
	}		
   if(gamedata['科技']['地点']==9&&gamedata['inventory']['机械研究瓶']>=增长速度/100){	
     var 列表=9
     var 材料=1
	 var 终端进度 = 25000;
     var 项目内容 = "人工智能【每个等级提升百分1舰队总评分】等级";	 
	 var 增长倍率=1.8;
	 var 目前等级=gamedata['科技']['科技'+列表+'等级']
	 var 目前进度=gamedata['科技']['科技'+列表+'进度']	
	gamedata['inventory']['机械研究瓶']-=增长速度/100	 
	}	
   if(gamedata['科技']['地点']==10&&gamedata['inventory']['机械研究瓶']>=增长速度/100){	
     var 列表=10
     var 材料=1
	 var 终端进度 = 30000;
     var 项目内容 = "智能科研【每个等级减少0.1倍科技研发增长倍率】等级";	 
	 var 增长倍率=1.4;
	 var 目前等级=gamedata['科技']['科技'+列表+'等级']
	 var 目前进度=gamedata['科技']['科技'+列表+'进度']	
	gamedata['inventory']['机械研究瓶']-=增长速度/100	 
	}
   if(gamedata['科技']['地点']==11&&gamedata['inventory']['机械研究瓶']>=增长速度/100){	
     var 列表=11
     var 材料=1
	 var 终端进度 = 10000;
     var 项目内容 = "机械-机械世界【每个等级提升0.1点繁荣增长】等级";	 
	 var 增长倍率=5.5;
	 var 目前等级=gamedata['科技']['科技'+列表+'等级']
	 var 目前进度=gamedata['科技']['科技'+列表+'进度']	
	gamedata['inventory']['机械研究瓶']-=增长速度/100	 
	}
   if(gamedata['科技']['地点']==12&&gamedata['inventory']['生物科技瓶']>=增长速度/100){	
     var 列表=12
     var 材料=1
	 var 终端进度 = 100000;
     var 项目内容 = "生物学研究【每个等级提升百分1K科技研发速度】等级";	 
	 var 增长倍率=1.1;
	 var 目前等级=gamedata['科技']['科技'+列表+'等级']
	 var 目前进度=gamedata['科技']['科技'+列表+'进度']	
	gamedata['inventory']['生物科技瓶']-=增长速度/100	 
	}	
   if(gamedata['科技']['地点']==13&&gamedata['inventory']['生物科技瓶']>=增长速度/100){	
     var 列表=13
     var 材料=1
	 var 终端进度 = 25000;
     var 项目内容 = "生物-活体金属【每个等级提升百分1舰队总评分】等级";	 
	 var 增长倍率=1.8;
	 var 目前等级=gamedata['科技']['科技'+列表+'等级']
	 var 目前进度=gamedata['科技']['科技'+列表+'进度']	
	gamedata['inventory']['生物科技瓶']-=增长速度/100	 
	}	
   if(gamedata['科技']['地点']==14&&gamedata['inventory']['生物科技瓶']>=增长速度/100){	
     var 列表=14
     var 材料=1
	 var 终端进度 = 10000;
     var 项目内容 = "生物-掌控进化【每个等级提升0.1点繁荣增长】等级";	 
	 var 增长倍率=5.5;
	 var 目前等级=gamedata['科技']['科技'+列表+'等级']
	 var 目前进度=gamedata['科技']['科技'+列表+'进度']	
	gamedata['inventory']['生物科技瓶']-=增长速度/100	 
	}








	
	
	gamedata['科技']['科技'+列表+'进度']+=增长速度*材料*速度
	
	for(i = 1; i <= 目前等级; i++){终端进度*= 增长倍率;}	
	
	if(目前进度/终端进度>=1){		
	 gamedata['科技']['科技'+列表+'进度']=0
	 gamedata['科技']['科技'+列表+'等级']+=1	
     科技等级列表()	 
	 }	
	document.getElementById("科技速度提示").innerHTML="【"+nFormatter(增长速度*材料*速度, 2)+"】";
	
	gamedata['科技']['科技能源消耗']=Math.ceil(gamedata['inventory']['实验室']*1.6)*材料
	
	document.getElementById("科技项目1_1").style="width: "+(目前进度/终端进度)*100+"%;";
	document.getElementById("科技项目1_2").innerHTML=""+nFormatter(目前进度, 2)+"/"+nFormatter(终端进度, 2)+"";
    document.getElementById("科技项目1_3").innerHTML=""+项目内容+"【"+目前等级+"】";	 	 	  
	}
	else
	{	
	    var 研究="【暂停或者能量不足】";		
	    document.getElementById("科技项目提示1").innerHTML = "【"+Math.floor(实验室)+"座实验室】"+研究+"";  	
		gamedata['科技']['科技能源消耗']=0
	} 
    document.getElementById("科技项目提示2").innerHTML = ""+nFormatter(启动成本, 1)+"以上才工作【消耗"+Math.round(实验室*1.6)*材料+"戴森云能量】"; 	 
 

 }		
 

 function 科技等级列表(){	

	if(gamedata['科技'] == undefined){gamedata['科技'] = {};}
    document.getElementById("科技等级列表单1").innerHTML = "";
   	if(gamedata['科技']['科技100等级']== undefined){gamedata['科技']['科技100等级']=0};	
		
	for(i = 1; i <= gamedata['科技']['科技100等级']; i++){if(gamedata['科技']['科技100等级'] >=i){科技等级列表单(i)}}			
	
	document.getElementById("科技项目提示100").innerHTML ="【目前你得科技研发"+gamedata['科技']['科技100等级']+"级】"; 
 }			
	
	
 function 科技等级列表单(obj){	


    var 等级列表 =parseInt(obj)	

   	if(gamedata['科技']['科技'+等级列表+'进度']== undefined){gamedata['科技']['科技'+等级列表+'进度']=0};
	if(gamedata['科技']['科技'+等级列表+'等级']== undefined){gamedata['科技']['科技'+等级列表+'等级']=0};	

	 var 等级=gamedata['科技']['科技'+等级列表+'等级']	   
	 var 文本=""



    if(等级列表==1){ var 文本="舰队引擎改良【总提升"+等级+"舰队速度】"}  
    if(等级列表==2){ var 文本="帝制信徒【总提升"+等级*15+"%丰碑效果】"} 
	if(等级列表==3){ var 文本="社会学研究【总提升"+nFormatter(等级*0.1, 2)+"繁荣度】"} 
	if(等级列表==4){ var 文本="物理学研究【总提升"+nFormatter(等级*100, 2)+"%科技研发速率】"} 	
	if(等级列表==5){ var 文本="工程学研究【总提升"+等级+"%舰队总评分】"} 		
	if(等级列表==6){ var 文本="等离子推进器【总提升"+等级*2+"舰队速度】"} 	
	if(等级列表==7){ 
    if(gamedata['科技']['科技7等级'] >= 30){var 文本="超物理学研究满级了【减少6倍科技研发增长倍率】"}
    else{var 文本="超物理学研究【减少"+nFormatter(等级*0.2,2)+"倍科技研发增长倍率】"}		
	}
	if(等级列表==8){ var 文本="机械技术【血肉苦弱，机械永存！收割殖民地资源可以根据等级获取新物资。】"} 		
	if(等级列表==9){ var 文本="机械-人工智能【总提升"+等级+"%舰队总评分】"} 	
	if(等级列表==10){ 
    if(gamedata['科技']['科技10等级'] >= 20){var 文本="智能科研研究满级了【减少2倍科技研发增长倍率】"}
    else{var 文本="机械-智能科研【减少"+nFormatter(等级*0.1,2)+"倍科技研发增长倍率】"}		
	}	
	if(等级列表==11){ var 文本="机械-机械世界【总提升"+nFormatter(等级*0.1, 2)+"繁荣度】"} 	
	if(等级列表==12){ var 文本="生物学研究【总提升"+nFormatter(等级*1000, 2)+"%科技研发速率】"} 		
	if(等级列表==13){ var 文本="生物-活体金属【总提升"+等级+"%舰队总评分】"} 		
	if(等级列表==14){ var 文本="生物-掌控进化 【总提升"+nFormatter(等级*0.1, 2)+"繁荣度】"} 
	
    if(等级列表>15){ var 文本="等后续更新"}  	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


	  var 科技等级列表单界面 = '';		
          科技等级列表单界面 ='<div     class="page_section6"   onclick="科技列表('+等级列表+')">'+文本+''+等级+'级</div>'			  
	  $('.科技等级列表单界面').append(科技等级列表单界面);  
	  
	
	   
  }
  

  
  
  function 巨构项目(){	
  
 	if(gamedata['inventory']['星门模块'] >=0){ 	
	document.getElementById("巨构界面").style.display="";	
	} 
 	if(gamedata['inventory']['戴森壳模块'] >=0){ 
	document.getElementById("戴森壳项目1").style.display="";	
	} 	 

 	if(gamedata['inventory']['星环城模块'] >=0 ){ 
	document.getElementById("星环城项目1").style.display="";	
	} 	 
	if(gamedata['inventory']['工厂模块'] >=0 ){ 
	document.getElementById("工厂项目1").style.display="";	
	} 		
	if(gamedata['inventory']['太空鱼雷'] >=0 ){ 巨构项目更新(8)} 	
	if(gamedata['inventory']['装甲鱼雷'] >=0 ){ 巨构项目更新(9)} 	
	if(gamedata['inventory']['机械骨骼'] >=0 ){ 巨构项目更新(10)} 	
	if(gamedata['inventory']['机械领袖'] >=0 ){ 巨构项目更新(11)} 			
	
	for(i = 2; i <= 7; i++){if(7>=i){巨构项目更新(i)}}		 
  
	  
 }		
 
 
   function 巨构项目更新(obj){	
   
     var 巨构项目更新列表 =parseInt(obj);
     var 目前等级=0;
     var 项目内容="";
    if(巨构项目更新列表==2){	
     var 项目内容 = "地球星门【指向性加速轨道】";	 
	}
   if(巨构项目更新列表==3){	
     var 项目内容 = "火星星门【通用性加速轨道】";	 
	}
   if(巨构项目更新列表==4){	
     var 项目内容 = "金星星门【通用性加速轨道】";	 
	}  
    if(巨构项目更新列表==5){	
     var 项目内容 = "水星星门【通用性加速轨道】";	 
	} 
    if(巨构项目更新列表==6){	
     var 项目内容 = "戴森壳【每秒转换100能量为1光能】";	 
	} 	
	
    if(巨构项目更新列表==7){	
     var 项目内容 = "星环城【每座星环城消耗1000能量】";	 
	} 		
	
    if(巨构项目更新列表==8){	
     var 项目内容 = "武器工厂【每座工厂消耗100能量产出1武器零件包】";	 
	} 		
	
    if(巨构项目更新列表==9){	
     var 项目内容 = "大武器工厂【每座工厂消耗1000能量产出8武器零件包】";	 
	} 		
    if(巨构项目更新列表==10){	
     var 项目内容 = "机械工厂【每座工厂消耗100能量产出1工厂能量】";	 
	} 		
	
    if(巨构项目更新列表==11){	
     var 项目内容 = "大机械工厂【每座工厂消耗1000能量产出8工厂能量】";	 
	} 		
		
	
	
  
  	var 目前等级=gamedata['巨构']['巨构'+巨构项目更新列表+'等级']
   document.getElementById("巨构项目"+巨构项目更新列表+"").style.display="";
   document.getElementById("巨构项目"+巨构项目更新列表+"_3").innerHTML=""+项目内容+"【"+目前等级+"级】";	 
	
 }		
 
 
 
 
 
 
 
  function 巨构舰队项目(obj){	


    var 巨构舰队项目列表 =parseInt(obj);



    if(巨构舰队项目列表==1){
	if(gamedata['巨构']['守卫舰队']!=true&&Math.floor(gamedata['舰队']['总评分']/1000000)<=gamedata['inventory']['货物']){ 
	
	
	
	gamedata['inventory']['货物']-=Math.floor(gamedata['舰队']['总评分']/1000000)
	gamedata['巨构']['守卫舰队评分']=Math.floor(gamedata['舰队']['总评分'])
	gamedata['巨构']['守卫舰队最高评分']=Math.floor(gamedata['舰队']['总评分'])
	gamedata['巨构']['地点']=0
	gamedata['巨构']['建造时间'] = 0
    gamedata['巨构']['守卫舰队']=true
    巨构舰队项目更新()

	
	
	     document.getElementById("巨构提示项目1").innerHTML="已经派遣锁定当前舰队评分,巨构建造重新开始.";}	
	else{document.getElementById("巨构提示项目1").innerHTML="没有货物或已派遣舰队在工作无法在派遣,重新派遣需要撤回在派遣.";}	
	} 
	
    if(巨构舰队项目列表==3){

		
		
	var 主力舰队 =gamedata['舰队']['总评分']+gamedata['星战']['总评分']*0.2	
	
	
	if(gamedata['巨构']['守卫舰队']!=true&&Math.floor((主力舰队)/2000000)<=gamedata['inventory']['作战指令']){ 
	
	
	
	gamedata['inventory']['作战指令']-=Math.floor((主力舰队)/2000000)
	gamedata['巨构']['守卫舰队评分']=Math.floor(主力舰队)
	gamedata['巨构']['守卫舰队最高评分']=Math.floor(主力舰队)
	gamedata['巨构']['地点']=0
	gamedata['巨构']['建造时间'] = 0
    gamedata['巨构']['守卫舰队']=true
    巨构舰队项目更新()

	
	
	     document.getElementById("巨构提示项目1").innerHTML="已经派遣锁定当前舰队评分,巨构建造重新开始.";}	
	else{document.getElementById("巨构提示项目1").innerHTML="没有作战指令或已派遣舰队在工作无法在派遣,重新派遣需要撤回在派遣.";}	
	} 	
	
	
	
	
	
	
	
    if(巨构舰队项目列表==2){
		
	if(gamedata['巨构']['守卫舰队']==true){ 
	
	
	gamedata['巨构']['守卫舰队评分']=0
	gamedata['巨构']['守卫舰队最高评分']=0
	gamedata['巨构']['地点']=0
	gamedata['巨构']['建造时间'] = 0
	gamedata['巨构']['守卫舰队']=false
	巨构舰队项目更新()
	document.getElementById("巨构提示项目1").innerHTML="已经撤回当前守卫舰队,巨构建造重新开始.";}	
    }





	  
	
	   
  }
  
  
  
  
  function 巨构舰队项目更新(){	
  
	var 目前进度=gamedata['巨构']['守卫舰队评分']
	var 终端进度=gamedata['巨构']['守卫舰队最高评分'] 
  
  
	 document.getElementById("巨构项目1_1").style="width: "+(目前进度/终端进度)*100+"%;";
	 document.getElementById("巨构项目1_1").innerHTML=""+目前进度+"/"+终端进度+"";  
 
	 


  
  }
  
  
  
  
  
  function 巨构建筑项目(obj){	

    var 巨构建筑项目 =parseInt(obj)	
    var 项目内容 = "";	
    var 目前等级 = "材料不足";	
    var 目前进度 = 0;	
    var 终端进度 = 10000;
    var 列表="";
    var 增长倍率=10;
	var 材料=0;
    var 文本="";	
    var 模块1=0;
    var 模块2=0;
    var 模块3=0;	
    var 模块4=0;
	
    if(巨构建筑项目==2){
	if (!window.confirm("开始建造地球星门【会重新开始建筑！】")){return;}		
		gamedata['巨构']['地点']=2;gamedata['巨构']['建造时间'] = 0;gamedata['巨构']['巨构'+巨构建筑项目+'进度']=0 } 
    if(巨构建筑项目==3){
	if (!window.confirm("开始建造火星球星门【会重新开始建筑！】")){return;}			
		gamedata['巨构']['地点']=3;gamedata['巨构']['建造时间'] = 0;gamedata['巨构']['巨构'+巨构建筑项目+'进度']=0 }  

    if(巨构建筑项目==4){
	if (!window.confirm("开始建造金星球星门【会重新开始建筑！】")){return;}			
		gamedata['巨构']['地点']=4;gamedata['巨构']['建造时间'] = 0;gamedata['巨构']['巨构'+巨构建筑项目+'进度']=0 }  

    if(巨构建筑项目==5){
	if (!window.confirm("开始建造水星球星门【会重新开始建筑！】")){return;}			
		gamedata['巨构']['地点']=5;gamedata['巨构']['建造时间'] = 0;gamedata['巨构']['巨构'+巨构建筑项目+'进度']=0 }  

    if(巨构建筑项目==6){
	if (!window.confirm("开始建造戴森壳【会重新开始建筑！】")){return;}			
		gamedata['巨构']['地点']=6;gamedata['巨构']['建造时间'] = 0;gamedata['巨构']['巨构'+巨构建筑项目+'进度']=0 }  

    if(巨构建筑项目==7){
	if (!window.confirm("开始建造星环城【会重新开始建筑！】")){return;}			
		gamedata['巨构']['地点']=7;gamedata['巨构']['建造时间'] = 0;gamedata['巨构']['巨构'+巨构建筑项目+'进度']=0 }  		
		
    if(巨构建筑项目==8){
	if (!window.confirm("开始建造武器工厂【会重新开始建筑！】")){return;}			
		gamedata['巨构']['地点']=8;gamedata['巨构']['建造时间'] = 0;gamedata['巨构']['巨构'+巨构建筑项目+'进度']=0 }  			
		
    if(巨构建筑项目==9){
	if (!window.confirm("开始建造大武器工厂【会重新开始建筑！】")){return;}			
		gamedata['巨构']['地点']=9;gamedata['巨构']['建造时间'] = 0;gamedata['巨构']['巨构'+巨构建筑项目+'进度']=0 }  			
		
    if(巨构建筑项目==10){
	if (!window.confirm("开始建造机械工厂【会重新开始建筑！】")){return;}			
		gamedata['巨构']['地点']=10;gamedata['巨构']['建造时间'] = 0;gamedata['巨构']['巨构'+巨构建筑项目+'进度']=0 }  			
		
    if(巨构建筑项目==11){
	if (!window.confirm("开始建造大机械工厂【会重新开始建筑！】")){return;}			
		gamedata['巨构']['地点']=11;gamedata['巨构']['建造时间'] = 0;gamedata['巨构']['巨构'+巨构建筑项目+'进度']=0 }  		
		
		
		
		
    var 巨构建筑地点=gamedata['巨构']['地点']



   	if(gamedata['巨构']['巨构'+巨构建筑项目+'进度']== undefined){gamedata['巨构']['巨构'+巨构建筑项目+'进度']=0};
	if(gamedata['巨构']['巨构'+巨构建筑项目+'等级']== undefined){gamedata['巨构']['巨构'+巨构建筑项目+'等级']=0};	 

    if(gamedata['巨构']['建造时间'] == undefined){gamedata['巨构']['建造时间'] = 0;}



   if(巨构建筑项目==100&&gamedata['巨构']['守卫舰队评分']>0){		

	var 随机遭遇= Math.floor(Math.random()*100+1)	

   if(gamedata['巨构']['地点']==2){	
     var 列表=2 
	 var 终端进度 = 20;	 
     var 项目内容 = "地球星门【指向性加速轨道】";	 
	 var 增长倍率=20;
	 var 模块1=1;
	 var 目前等级=gamedata['巨构']['巨构'+列表+'等级']
	 var 目前进度=gamedata['巨构']['巨构'+列表+'进度']	
	 
	if(随机遭遇>10){
    var 文本="太空生物群";		
    var 评分= Math.floor(Math.random()*10000+10000)		 
     }
	 else{
    var 文本="黑龙";		
    var 评分= Math.floor(Math.random()*100000+100000)			 
		 
	 }
	}
   if(gamedata['巨构']['地点']==3){	
     var 列表=3
     var 评分= Math.floor(Math.random()*10*1000)	
	 var 终端进度 = 10;
     var 项目内容 = "火星星门【通用性加速轨道】";	 
	 var 增长倍率=5;
	 var 模块1=1;	 	 
	 var 目前等级=gamedata['巨构']['巨构'+列表+'等级']
	 var 目前进度=gamedata['巨构']['巨构'+列表+'进度']	
	 
	 
	if(随机遭遇>99){
    var 文本="火星领主";		
    var 评分= Math.floor(Math.random()*500000+500000)					
	}
	else if(随机遭遇>95){
    var 文本="蟑螂王";		
    var 评分= Math.floor(Math.random()*200000+200000)		 
     }		
	else if(随机遭遇>15){
    var 文本="火星生物群";		
    var 评分= Math.floor(Math.random()*20000+20000)		 
     }
	 else{
    var 文本="变异蟑螂群";		
    var 评分= Math.floor(Math.random()*100000+100000)			 		 
	 }	 	  
	}
   if(gamedata['巨构']['地点']==4){	
     var 列表=4
     var 评分= Math.floor(Math.random()*10*1000)	
	 var 终端进度 = 10;
     var 项目内容 = "金星星门【通用性加速轨道】";	 
	 var 增长倍率=5;
	 var 模块1=1;	 
	 var 目前等级=gamedata['巨构']['巨构'+列表+'等级']
	 var 目前进度=gamedata['巨构']['巨构'+列表+'进度']	
	 
	if(随机遭遇>99){
    var 文本="金星领主";		
    var 评分= Math.floor(Math.random()*500000+500000)					
	}
	else if(随机遭遇>95){
    var 文本="熔岩巨兽";		
    var 评分= Math.floor(Math.random()*200000+200000)		 
     }		
	else if(随机遭遇>15){
    var 文本="金星生物群";		
    var 评分= Math.floor(Math.random()*20000+20000)		 
     }
	 else{
    var 文本="熔岩兽群";		
    var 评分= Math.floor(Math.random()*100000+100000)			 		 
	 }	 	  
	}	
   if(gamedata['巨构']['地点']==5){	
     var 列表=5
     var 评分= Math.floor(Math.random()*10*1000)	
	 var 终端进度 = 10;
     var 项目内容 = "水星星门【通用性加速轨道】";	 
	 var 增长倍率=5;
	 var 模块1=1;	 
	 var 目前等级=gamedata['巨构']['巨构'+列表+'等级']
	 var 目前进度=gamedata['巨构']['巨构'+列表+'进度']	
	 
	if(随机遭遇>99){
    var 文本="水星领主";		
    var 评分= Math.floor(Math.random()*500000+500000)					
	}
	else if(随机遭遇>95){
    var 文本="炎元素";		
    var 评分= Math.floor(Math.random()*200000+200000)		 
     }		
	else if(随机遭遇>15){
    var 文本="水星生物群";		
    var 评分= Math.floor(Math.random()*20000+20000)		 
     }
	 else{
    var 文本="火元素群";		
    var 评分= Math.floor(Math.random()*100000+100000)			 		 
	 }	 	  
	}	
	
   if(gamedata['巨构']['地点']==6){	
     var 列表=6
	 var 终端进度 = 100;
     var 项目内容 = "戴森壳【每秒转换100能量为1光能】";	 
	 var 增长倍率=10;
	 var 模块2=1;	 
	 var 目前等级=gamedata['巨构']['巨构'+列表+'等级']
	 var 目前进度=gamedata['巨构']['巨构'+列表+'进度']	
	 
	if(gamedata['inventory']['戴森壳模块']==undefined){gamedata['inventory']['戴森壳模块']=0 } 
	if(gamedata['巨构']['巨构6等级'] != undefined){var 戴森壳=gamedata['巨构']['巨构6等级'] }else{var 戴森壳=0}		 

    if(随机遭遇>0&&戴森壳>=20){
    var 文本="变异太阳系生物群";		
    var 评分= Math.floor(Math.random()*5000+5000)*戴森壳		 
    }	 	 
	else if(随机遭遇>99){	
    var 文本="太阳系生物领主";		
    var 评分= Math.floor(Math.random()*100000+100000)					
	}
	else if(随机遭遇>90){
    var 文本="太阳系生物群";		
    var 评分= Math.floor(Math.random()*50000+50000)		 
    }		
    	
	 else{
    var 文本="太阳系生物";		
    var 评分= Math.floor(Math.random()*10000+10000)			 		 
	 }	 	  
	}		
	
   if(gamedata['巨构']['地点']==7){	
     var 列表=7
	 var 终端进度 = 100;
     var 项目内容 = "星环城【每座星环城消耗1000能量】";	 
	 var 增长倍率=10;
	 var 模块3=1;	 
	 var 目前等级=gamedata['巨构']['巨构'+列表+'等级']
	 var 目前进度=gamedata['巨构']['巨构'+列表+'进度']	
	 
	 
	 
    if(gamedata['inventory']['星环城模块']==undefined){gamedata['inventory']['星环城模块']=0 }
	if(gamedata['巨构']['巨构7等级'] != undefined){var 星环城=gamedata['巨构']['巨构7等级'] }else{var 星环城=0}			 
	 	 
	if(随机遭遇>0&&星环城>=10){
    var 文本="太阳系生物领主";		
    var 评分= Math.floor(Math.random()*10000+10000)*星环城		 
    }else{	
    var 文本="变异太阳系生物";		
    var 评分= Math.floor(Math.random()*30000+30000)		 
    }	 	  
	}			
	
   if(gamedata['巨构']['地点']==8){	
     var 列表=8
	 var 终端进度 = 100;
     var 项目内容 = "武器工厂【每座武器工厂消耗100能量产出1武器零件包】";	 
	 var 增长倍率=10;
	 var 模块4=1;	 
	 var 目前等级=gamedata['巨构']['巨构'+列表+'等级']
	 var 目前进度=gamedata['巨构']['巨构'+列表+'进度']	
	 
	 
	 
	if(gamedata['巨构']['巨构8等级'] != undefined){var 武器工厂=gamedata['巨构']['巨构8等级']*0.5+1 }else{var 武器工厂=0}			 
	 	 

    var 文本="银河系生物";		
    var 评分= Math.floor((Math.random()*5000+10000)*武器工厂)	 
 
    }	 	  
			
   if(gamedata['巨构']['地点']==9){	
     var 列表=9
	 var 终端进度 = 1000;
     var 项目内容 = "大武器工厂【每座武器工厂消耗1000能量产出8武器零件包】";	 
	 var 增长倍率=100;
	 var 模块4=1;	 
	 var 目前等级=gamedata['巨构']['巨构'+列表+'等级']
	 var 目前进度=gamedata['巨构']['巨构'+列表+'进度']	
	 
	 
	 
	if(gamedata['巨构']['巨构9等级'] != undefined){var 大武器工厂=gamedata['巨构']['巨构9等级']*0.55+1 }else{var 大武器工厂=0}			 
	 	 

    var 文本="银河系生物";		
    var 评分= Math.floor((Math.random()*5000+10000)*大武器工厂)	 
 
    }	 	
	
   if(gamedata['巨构']['地点']==10){	
     var 列表=10
	 var 终端进度 = 100;
     var 项目内容 = "机械工厂【每座机械工厂消耗100能量产出1工厂能量】";	 
	 var 增长倍率=10;
	 var 模块4=1;	 
	 var 目前等级=gamedata['巨构']['巨构'+列表+'等级']
	 var 目前进度=gamedata['巨构']['巨构'+列表+'进度']	
	 
	 
	 
	if(gamedata['巨构']['巨构10等级'] != undefined){var 机械工厂=gamedata['巨构']['巨构10等级']*0.5+1 }else{var 机械工厂=0}			 
	 	 

    var 文本="银河系生物";		
    var 评分= Math.floor((Math.random()*5000+10000)*机械工厂)	 
 
    }	 	  
			
   if(gamedata['巨构']['地点']==11){	
     var 列表=11
	 var 终端进度 = 1000;
     var 项目内容 = "大机械工厂【每座机械工厂消耗1000能量产出8工厂能量】";	 
	 var 增长倍率=100;
	 var 模块4=1;	 
	 var 目前等级=gamedata['巨构']['巨构'+列表+'等级']
	 var 目前进度=gamedata['巨构']['巨构'+列表+'进度']	
	 
	 
	 
	if(gamedata['巨构']['巨构11等级'] != undefined){var 大机械工厂=gamedata['巨构']['巨构11等级']*0.55+1 }else{var 大机械工厂=0}			 
	 	 

    var 文本="银河系生物";		
    var 评分= Math.floor((Math.random()*5000+10000)*大机械工厂)	 
 
    }		
	
	
	
	
	
	
	
	
	
	
   if(gamedata['巨构']['地点']>=2){gamedata['巨构']['建造时间']+=1};
   
   if(gamedata['巨构']['建造时间']>5){	   
   if(gamedata['巨构']['地点']>=2&&gamedata['巨构']['守卫舰队']==true){
      gamedata['巨构']['建造时间'] = 0   
   if(gamedata['巨构']['守卫舰队评分']>0){   
	   
	   
	gamedata['巨构']['守卫舰队评分']-=评分 
	if(gamedata['巨构']['守卫舰队评分']<0){gamedata['巨构']['守卫舰队评分']=0    
	}
	
	
	document.getElementById("巨构战斗提示2").innerHTML="遭遇了"+文本+"袭击【-"+评分+"评分】"
	
     if(gamedata['inventory']['星门模块']<1&&gamedata['巨构']['地点']<=5){var 模块1=0 }
    else {gamedata['inventory']['星门模块']-=模块1} 
     if(gamedata['inventory']['戴森壳模块']<1&&gamedata['巨构']['地点']==6){var 模块2=0 }
    else {gamedata['inventory']['戴森壳模块']-=模块2} 
     if(gamedata['inventory']['星环城模块']<1&&gamedata['巨构']['地点']==7){var 模块3=0 }
    else {gamedata['inventory']['星环城模块']-=模块3} 
      if(gamedata['inventory']['工厂模块']<1&&gamedata['巨构']['地点']>=8&&gamedata['巨构']['地点']<12){var 模块4=0 }
    else {gamedata['inventory']['工厂模块']-=模块4}   
   
   
   
   
	gamedata['巨构']['巨构'+列表+'进度']+=模块1+模块2+模块3+模块4
	
	}}}
	
	
	
	
	for(i = 1; i <= 目前等级; i++){终端进度+= 增长倍率;}	
	
	if(目前进度/终端进度>=1){		
	 gamedata['巨构']['巨构'+列表+'进度']=0
	 gamedata['巨构']['巨构'+列表+'等级']+=1	
    
	 }	
	

	 

	document.getElementById("巨构提示项目1").innerHTML=""+项目内容+"建造中";	
	document.getElementById("巨构项目"+巨构建筑地点+"_1").style="width: "+(目前进度/终端进度)*100+"%;";
	document.getElementById("巨构项目"+巨构建筑地点+"_2").innerHTML=""+Math.floor(目前进度)+"/"+Math.floor(终端进度)+"";
    document.getElementById("巨构项目"+巨构建筑地点+"_3").innerHTML=""+项目内容+"【"+目前等级+"座】";	 
	
	if(gamedata['巨构']['建造时间']>=6){var 巨构战斗提示1 ="无舰队" }else{巨构战斗提示1=5-gamedata['巨构']['建造时间']}	 	 
	document.getElementById("巨构战斗提示1").innerHTML = "【"+巨构战斗提示1+"】";	
	
   }else{
	document.getElementById("巨构提示项目1").innerHTML="【无舰队】";		   
	   document.getElementById("巨构战斗提示1").innerHTML = "【无舰队】";
	   }

	
	}
	 
 
  function 星门项目(){
	  
    var div1=document.getElementById("星门项目2");
    if(div1.style.display=="block"){
        div1.style.display="none";
    }else{
        div1.style.display="block";
    }
  
}
  function 戴森壳项目(){
	  
    var div1=document.getElementById("戴森壳项目2");
    if(div1.style.display=="block"){
        div1.style.display="none";
    }else{
        div1.style.display="block";
    }
  
}
  function 星环城项目(){
	  
    var div1=document.getElementById("星环城项目2");
    if(div1.style.display=="block"){
        div1.style.display="none";
    }else{
        div1.style.display="block";
    }
 
}
  function 工厂项目(){
	  
    var div1=document.getElementById("工厂项目2");
    if(div1.style.display=="block"){
        div1.style.display="none";
    }else{
        div1.style.display="block";
    }
 
}
  // function 星区详细情况界面(){
	  
    // var div1=document.getElementById("群星2");
    // if(div1.style.display=="none"){
        // div1.style.display="block";
    // }else{
        // div1.style.display="none";
    // }
  
// }

  function 星系首都仓库(){
	  
    var div1=document.getElementById("星系首都仓库1");
    if(div1.style.display=="none"){
        div1.style.display="block";
    }else{
        div1.style.display="none";
    }
  
}

  function 外星星战(){
	  
	for(io = 1; io <= 4; io++){ document.getElementById("外星球"+io).innerHTML = "";}  
		  
	var 随机=Math.floor(Math.random()*60+1) 	  
	gamedata['星战']['星系']=随机 		  
	var 随机=Math.floor(Math.random()*10000+1) 	  
	gamedata['星战']['星系1']=随机 			  
	var 随机=Math.floor(Math.random()*20+1) 	  
	gamedata['星战']['星系2']=随机 	
	
    var 外星球1概率=Math.floor(Math.random()*10000+1) 
	if(外星球1概率>100){gamedata['星战']['星区1']=1 } 
	else if(外星球1概率>10){gamedata['星战']['星区1']=2 } 
	else if(外星球1概率>1){gamedata['星战']['星区1']=3 }  
	var 星区1= gamedata['星战']['星区1']  
	
	
	for(ioo = 1; ioo <= 3; ioo++){ 	
	gamedata['星战']['大小'+ioo+'星区1']=0
	gamedata['星战']['种类'+ioo+'星区1']=0
	}  
	
	for(i = 1; i <= 星区1; i++)
	{
	
    var 外星球种类1=Math.floor(Math.random()*390625+1) 
	
	var 稀有恒星=1
	
	if(外星球种类1>78125*稀有恒星){gamedata['星战']['外星球种类1']=1  ;    var 材料质量=1250000;var 恒星质量=100  } 
	else if(外星球种类1>15625*稀有恒星){gamedata['星战']['外星球种类1']=2 ;var 材料质量=2400000;var 恒星质量=800  } 
	else if(外星球种类1>3125*稀有恒星){gamedata['星战']['外星球种类1']=3 ; var 材料质量=4200000;var 恒星质量=6400  }  		
	else if(外星球种类1>625*稀有恒星){gamedata['星战']['外星球种类1']=4  ; var 材料质量=6800000;var 恒星质量=51200  } 
	else if(外星球种类1>125*稀有恒星){gamedata['星战']['外星球种类1']=5  ; var 材料质量=10350000;var 恒星质量=409600  }  
	else if(外星球种类1>25*稀有恒星){gamedata['星战']['外星球种类1']=6 ;   var 材料质量=15000000;var 恒星质量=3276800   } 
	else if(外星球种类1>5*稀有恒星){gamedata['星战']['外星球种类1']=7 ;    var 材料质量=27500000;var 恒星质量=26214400   }  	
	else if(外星球种类1>1){gamedata['星战']['外星球种类1']=8  ;            var 材料质量=60000000;var 恒星质量=209715200  }  		
				
	var 星球种类=gamedata['星战']['外星球种类1']
  	gamedata['星战']['种类'+i+'星区1']= 星球种类   
	
	var 质量 = Math.floor(Math.random()*恒星质量*8+恒星质量) 			
 	gamedata['星战']['大小'+i+'星区1']= 质量   
		
	var 评分 = Math.floor(Math.random()*1000000+1000000)	
	gamedata['星战']['评分'+i+'星区1']= 评分*质量
			 
	var 材料 = Math.floor((Math.random()*(50/星球种类)+105-星球种类*5))*材料质量
	gamedata['星战']['材料'+i+'星区1']= Math.floor(评分*质量/材料)				 
			 
			 
    }
	
    var 星系恒星质量=gamedata['星战']['大小1星区1']+gamedata['星战']['大小2星区1']+gamedata['星战']['大小3星区1'] 


    if(gamedata['星战']['种类1星区1']>gamedata['星战']['种类2星区1']>gamedata['星战']['种类3星区1'] ){
	var 星系恒星稀有度=gamedata['星战']['种类1星区1']+gamedata['星战']['种类2星区1']/5+gamedata['星战']['种类3星区1']/5 		
	}	
	else if(gamedata['星战']['种类2星区1']>gamedata['星战']['种类3星区1'] ){
	var 星系恒星稀有度=gamedata['星战']['种类1星区1']/5+gamedata['星战']['种类2星区1']+gamedata['星战']['种类3星区1']/5 	
	}			
	else{var 星系恒星稀有度=gamedata['星战']['种类1星区1']/5+gamedata['星战']['种类2星区1']/5+gamedata['星战']['种类3星区1'] }	
	
    var 外星球2概率=Math.floor(Math.random()*10000+1) 
	if(外星球2概率>1000){gamedata['星战']['星区2']=1 } 
	else if(外星球2概率>100){gamedata['星战']['星区2']=2 } 
	else if(外星球2概率>10){gamedata['星战']['星区2']=3 } 
	else if(外星球2概率>1){gamedata['星战']['星区2']=4 } 	
	var 星区2= gamedata['星战']['星区2']  
	for(i = 1; i <= 星区2; i++)
	{
    var 外星球种类2=Math.floor(Math.random()*10+1) 
	
	if(外星球种类2==10)    {gamedata['星战']['外星球种类2']=11 ; var 行星质量=40 ;var 材料质量=40000;  } 
	else if(外星球种类2==9){gamedata['星战']['外星球种类2']=12 ; var 行星质量=80 ;var 材料质量=40000;  } 
	else if(外星球种类2==8){gamedata['星战']['外星球种类2']=13 ; var 行星质量=120;var 材料质量=40000;  }  		
	else if(外星球种类2==7){gamedata['星战']['外星球种类2']=14 ; var 行星质量=160;var 材料质量=40000;  } 
	else if(外星球种类2==6){gamedata['星战']['外星球种类2']=21 ; var 行星质量=100 ;var 材料质量=100000;  }  
	else if(外星球种类2==5){gamedata['星战']['外星球种类2']=22 ; var 行星质量=150 ;var 材料质量=100000;  } 
	else if(外星球种类2==4){gamedata['星战']['外星球种类2']=23 ; var 行星质量=200 ;var 材料质量=100000;  }  	
	else if(外星球种类2==3){gamedata['星战']['外星球种类2']=31 ; var 行星质量=20 ;var 材料质量=20000;  }  		
    else if(外星球种类2==2){gamedata['星战']['外星球种类2']=32 ; var 行星质量=40 ;var 材料质量=20000;  }  			
	else                   {gamedata['星战']['外星球种类2']=33 ; var 行星质量=80 ;var 材料质量=20000; }  		

	
	
	var 星球种类2=gamedata['星战']['外星球种类2']
	gamedata['星战']['种类'+i+'星区2']= 星球种类2 
	
	var 大小 = Math.floor(Math.random()*(10000*星系恒星稀有度*星系恒星稀有度)+1000*星系恒星稀有度)			
 	gamedata['星战']['大小'+i+'星区2']= 大小   
		
	var 评分 = Math.floor((Math.random()*(星系恒星质量/100)+100))*行星质量*大小
	gamedata['星战']['评分'+i+'星区2']= 评分
	
	var 材料 = Math.floor((Math.random()*(50/星系恒星稀有度)+100-星系恒星稀有度*3))*材料质量
	gamedata['星战']['材料'+i+'星区2']= Math.floor(评分/材料)	
	
    }	
	
	
	
	
   var 外星球3概率=Math.floor(Math.random()*10000+1) 
	if(外星球3概率>1000){gamedata['星战']['星区3']=1 } 
	else if(外星球3概率>100){gamedata['星战']['星区3']=2 } 
	else if(外星球3概率>10){gamedata['星战']['星区3']=3 } 
	else if(外星球3概率>1){gamedata['星战']['星区3']=4 } 	
	var 星区3= gamedata['星战']['星区3']  
	for(i = 1; i <= 星区3; i++)
	{
    var 外星球种类3=Math.floor(Math.random()*10+1) 
	
	if(外星球种类3==10)    {gamedata['星战']['外星球种类3']=51 ; var 行星质量=300;var 材料质量=300000;  } 
	else if(外星球种类3==9){gamedata['星战']['外星球种类3']=52 ; var 行星质量=350;var 材料质量=300000;  } 
	else if(外星球种类3==8){gamedata['星战']['外星球种类3']=53 ; var 行星质量=400;var 材料质量=300000;  }  		
	else if(外星球种类3==7){gamedata['星战']['外星球种类3']=54 ; var 行星质量=500;var 材料质量=300000;  } 
	else if(外星球种类3==6){gamedata['星战']['外星球种类3']=41 ; var 行星质量=600;var 材料质量=600000;  }  
	else if(外星球种类3==5){gamedata['星战']['外星球种类3']=42 ; var 行星质量=700;var 材料质量=600000;  } 
	else if(外星球种类3==4){gamedata['星战']['外星球种类3']=43 ; var 行星质量=800;var 材料质量=600000;  }  	
	else if(外星球种类3==3){gamedata['星战']['外星球种类3']=31 ; var 行星质量=20;var 材料质量=20000;  }  		
    else if(外星球种类3==2){gamedata['星战']['外星球种类3']=32 ; var 行星质量=40;var 材料质量=20000;  }  			
	else                   {gamedata['星战']['外星球种类3']=33 ; var 行星质量=80;var 材料质量=20000; }  		

	
	
	var 星球种类3=gamedata['星战']['外星球种类3']
	gamedata['星战']['种类'+i+'星区3']= 星球种类3 
	
	var 大小 = Math.floor(Math.random()*(10000*星系恒星稀有度*星系恒星稀有度)+1000*星系恒星稀有度)			
 	gamedata['星战']['大小'+i+'星区3']= 大小   
		
	var 评分 = Math.floor((Math.random()*(星系恒星质量/100)+100))*行星质量*大小
	gamedata['星战']['评分'+i+'星区3']= 评分
	
	var 材料 = Math.floor((Math.random()*(50/星系恒星稀有度)+100-星系恒星稀有度*3))*材料质量
	gamedata['星战']['材料'+i+'星区3']= Math.floor(评分/材料)	
	
    }		
	
   var 外星球4概率=Math.floor(Math.random()*10000+1) 
	if(外星球4概率>5000){gamedata['星战']['星区4']=1 } 
	else if(外星球4概率>1000){gamedata['星战']['星区4']=2 } 
	else if(外星球4概率>10){gamedata['星战']['星区4']=3 } 
	else if(外星球4概率>1){gamedata['星战']['星区4']=4 } 	
	var 星区4= gamedata['星战']['星区4']  
	for(i = 1; i <= 星区4; i++)
	{
    var 外星球种类4=Math.floor(Math.random()*10+1) 
	
	if(外星球种类4==10)    {gamedata['星战']['外星球种类4']=51 ; var 行星质量=300  ;var 材料质量=300000;  } 
	else if(外星球种类4==9){gamedata['星战']['外星球种类4']=52 ; var 行星质量=350  ;var 材料质量=300000;  } 
	else if(外星球种类4==8){gamedata['星战']['外星球种类4']=53 ; var 行星质量=400 ;var 材料质量=300000;  }  		
	else if(外星球种类4==7){gamedata['星战']['外星球种类4']=54 ; var 行星质量=500 ;var 材料质量=300000;  } 
	else if(外星球种类4==6){gamedata['星战']['外星球种类4']=21 ; var 行星质量=100  ;var 材料质量=100000;  }  
	else if(外星球种类4==5){gamedata['星战']['外星球种类4']=22 ; var 行星质量=150  ;var 材料质量=100000;  } 
	else if(外星球种类4==4){gamedata['星战']['外星球种类4']=23 ; var 行星质量=200  ;var 材料质量=100000;  }  	
	else if(外星球种类4==3){gamedata['星战']['外星球种类4']=61 ; var 行星质量=80  ;var 材料质量=80000;  }  		
    else if(外星球种类4==2){gamedata['星战']['外星球种类4']=62 ; var 行星质量=120  ;var 材料质量=80000; }  			
	else                   {gamedata['星战']['外星球种类4']=63 ; var 行星质量=160 ;var 材料质量=80000; }  		

	
	
	var 星球种类4=gamedata['星战']['外星球种类4']
	gamedata['星战']['种类'+i+'星区4']= 星球种类4 
	
	var 大小 = Math.floor(Math.random()*(10000*星系恒星稀有度*星系恒星稀有度)+1000*星系恒星稀有度)			
 	gamedata['星战']['大小'+i+'星区4']= 大小   
		
	var 评分 = Math.floor((Math.random()*(星系恒星质量/100)+100))*行星质量*大小
	gamedata['星战']['评分'+i+'星区4']= 评分
	
	var 材料 = Math.floor((Math.random()*(50/星系恒星稀有度)+100-星系恒星稀有度*3))*材料质量
	gamedata['星战']['材料'+i+'星区4']= Math.floor(评分/材料)	
	
    }		
	
	
	
	
	
	
	
	
	
	
	
	外星列表1();	
    外星列表2();	
    外星列表3();
    外星列表4();
    跳跃装置(99)	
 }
 
          var 星系名称=new Array();
          星系名称[1]="银河系";
          星系名称[2]="仙女座星系";
          星系名称[3]="三角座星系";
          星系名称[4]="旋涡星系";
          星系名称[5]="椭圆星系";	
          星系名称[6]="不规则星系";		  
          星系名称[7]="小麦哲伦星云";	
          星系名称[8]="大麦哲伦星云";			  			  
          星系名称[9]="大犬座矮星系";	
          星系名称[10]="小熊座矮星系";
          星系名称[11]="天龙座矮星系";
          星系名称[12]="船底座矮星系";
          星系名称[13]="六分仪座矮星系";
          星系名称[14]="玉夫座矮星系";	
          星系名称[15]="天炉座矮星系";		  
          星系名称[16]="杜鹃座矮星系";	
          星系名称[17]="M78星云";			  			  
          星系名称[18]="M42星云";			  
          星系名称[19]="M96星云";
          星系名称[20]="山北座星系";
  var int=self.setInterval("星战列表更新()",1000);

    function 星战列表更新()
    {
	for(io = 1; io <= 4; io++){ document.getElementById("外星球"+io).innerHTML = "";}  
	外星列表1();	
    外星列表2();	
    外星列表3();
    外星列表4();
    星系舰队战争()	
    星区管理3材料()
    星区管理项目() 
	跳跃装置()
	群星观测站()
    var  星系统="？？？"	
	 if(gamedata['星战']['星区1']==1){var  星系统="单星"} 
	 else if(gamedata['星战']['星区1']==2){var  星系统="双星"} 
	 else if(gamedata['星战']['星区1']==3){var  星系统="三星"} 		
	
document.getElementById("外星球10").innerHTML = "位于【"+星系名称[gamedata['星战']['星系2']]+""+星区名称[gamedata['星战']['星系']]+""+gamedata['星战']['星系1']+"号星系】"+星系统+"系统";

 if(gamedata['inventory']['星战指挥部']>=1){ 
	document.getElementById("星系战争").style.display="";}
 if(gamedata['inventory']['星星能源']>=0){ 
	document.getElementById("星系舰队2").style.display="";}
 if(gamedata['inventory']['材料分析仪']>=1){ 
   $("#计算器1").css("display","");}
	
 if(gamedata['inventory']['战斗模拟器']>=1){ 
	 $("#计算器2").css("display","");}	
	
	

    };
  function 外星列表1(){ 
  
   var 星区1 =gamedata['星战']['星区1']
   var 星战舰队 =gamedata['星战']['星战舰队']
   
	for(i = 1; i <= 星区1; i++)
	{
 	var 评分=gamedata['星战']['评分'+i+'星区1']
 	var 大小=gamedata['星战']['大小'+i+'星区1']     
 	var 种类=gamedata['星战']['种类'+i+'星区1'] 
 	var 材料=gamedata['星战']['材料'+i+'星区1'] 

   var  材料评分=评分/材料
   if(材料评分==Infinity||材料评分!=材料评分){var 材料评分=0 } 

   if(种类==1){var 种类名="黄矮星" } 	 
   else if(种类==2){种类名="红巨星" }
   else if(种类==3){种类名="白矮星"}
   else if(种类==4){种类名="紫巨星"}	
   else if(种类==5){种类名="蓝巨星"}		
   else if(种类==6){种类名="脉冲星"}	  
   else if(种类==7){种类名="中子星"}	    
   else {种类名="黑洞"}	  

     var 胜率=(星战舰队/评分)*100-50 
	 if(胜率>=100){var  胜率="H"} 
	 else if(胜率>=90){var  胜率="G"} 
	 else if(胜率>=80){var  胜率="F"} 
	 else if(胜率>=70){var  胜率="E"} 
	 else if(胜率>=60){var  胜率="D"} 
	 else if(胜率>=50){var  胜率="C"} 	 
	 else if(胜率>=40){var  胜率="B"} 
	 else if(胜率>=30){var  胜率="A"} 
	 else if(胜率>=20){var  胜率="S"} 
	 else if(胜率>=10){var  胜率="SS"} 
	 else if(胜率>=1){var  胜率="SSS"} 	 
	 else{var  胜率="???"}
	 
 	 if(评分<=0){var  状态="【已征服】"}else{var 状态=""} 

   var 外星星球1=""
		外星星球1+='  <div id="群星">'		
		外星星球1+='  <div id="行星"   style="background-image:url(img/xq/'+种类+'.png);"></div>	'	  	
	    外星星球1+='  <span id="星球消息"  >'
		外星星球1+='  <a> '+种类名+'评分：'+nFormatter(评分, 2)+'</a>'+状态+'<br>'
		外星星球1+='  <a> '+种类名+'质量：'+nFormatter(大小, 2)+'*10^28kg</a><br>	'
		外星星球1+='  <a> '+种类名+'之力：'+nFormatter(材料, 2)+'</a><br>'	
		外星星球1+='  <a id="计算器1"  style="display:none" >  平均分/材料：'+nFormatter(材料评分, 2)+'</a><br>'
		外星星球1+='  <a id="计算器2"  style="display:none" >  敌对级别：【'+胜率+'】</a>'		 		  
	    外星星球1+=' </span>	'	  
	    外星星球1+='  <button  id="星球" onclick="外星列表战争(1'+i+')" >战争</button>	'	
        外星星球1+='  </div>'
  $('.外星球界面1').append (外星星球1);  

   }
}

  function 外星列表2(){ 
  
   var 星区2 =gamedata['星战']['星区2']
   var 星战舰队 =gamedata['星战']['星战舰队']
   
	for(i = 1; i <= 星区2; i++)
	{
 	var 评分=gamedata['星战']['评分'+i+'星区2']
 	var 大小=gamedata['星战']['大小'+i+'星区2']     
 	var 种类=gamedata['星战']['种类'+i+'星区2'] 
 	var 材料=gamedata['星战']['材料'+i+'星区2'] 

   var  材料评分=评分/材料
   if(材料评分==Infinity||材料评分!=材料评分){var 材料评分=0 } 	
   if     (种类<20){var 种类名="熔岩星球";种类材料名="熔岩核心"; } 	 
   else if(种类<30){var 种类名="荒芜行星";种类材料名="星核之力"; }
   else            {var 种类名="剧毒星球";种类材料名="剧毒核心"; }

     var 胜率=(星战舰队/评分)*100-50 
	 if(胜率>=100){var  胜率="H"} 
	 else if(胜率>=90){var  胜率="G"} 
	 else if(胜率>=80){var  胜率="F"} 
	 else if(胜率>=70){var  胜率="E"} 
	 else if(胜率>=60){var  胜率="D"} 
	 else if(胜率>=50){var  胜率="C"} 	 
	 else if(胜率>=40){var  胜率="B"} 
	 else if(胜率>=30){var  胜率="A"} 
	 else if(胜率>=20){var  胜率="S"} 
	 else if(胜率>=10){var  胜率="SS"} 
	 else if(胜率>=1){var  胜率="SSS"} 	 
	 else{var  胜率="???"}
 
 	 if(评分<=0){var  状态="【已征服】"}else{var 状态=""} 
 
   var 外星星球2=""
		外星星球2+='  <div id="群星">'		
		外星星球2+='  <div id="行星"   style="background-image:url(img/xq/'+种类+'.png);"></div>	'	  	
	    外星星球2+='  <span id="星球消息"  >'
		外星星球2+='  <a> '+种类名+'评分：'+nFormatter(评分, 2)+'</a>'+状态+'<br>'
		外星星球2+='  <a> '+种类名+'大小：'+nFormatter(大小, 2)+'千米</a><br>	'
		外星星球2+='  <a> '+种类材料名+'：'+nFormatter(材料, 2)+'</a><br>'	
		外星星球2+='  <a id="计算器1"  style="display:none" >  平均分/材料：'+nFormatter(材料评分, 2)+'</a><br>'
		外星星球2+='  <a id="计算器2"  style="display:none" >  敌对级别：【'+胜率+'】</a>'		
	    外星星球2+=' </span>	'	  
	    外星星球2+='  <button  id="星球" onclick="外星列表战争(2'+i+')" >战争</button>	'	
        外星星球2+='  </div>'
  $('.外星球界面2').append (外星星球2);  

   }
}

  function 外星列表3(){ 
  
   var 星区3 =gamedata['星战']['星区3']
   var 星战舰队 =gamedata['星战']['星战舰队']
   
	for(i = 1; i <= 星区3; i++)
	{
 	var 评分=gamedata['星战']['评分'+i+'星区3']
 	var 大小=gamedata['星战']['大小'+i+'星区3']     
 	var 种类=gamedata['星战']['种类'+i+'星区3'] 
 	var 材料=gamedata['星战']['材料'+i+'星区3'] 	
	
   var  材料评分=评分/材料
   if(材料评分==Infinity||材料评分!=材料评分){var 材料评分=0 } 	
   if     (种类<40){var 种类名="剧毒星球";种类材料名="剧毒核心"; } 	 
   else if(种类<50){var 种类名="大陆行星";种类材料名="盖亚之力"; }
   else            {var 种类名="气态行星";种类材料名="星尘之力"; }

     var 胜率=(星战舰队/评分)*100-50 
	 if(胜率>=100){var  胜率="H"} 
	 else if(胜率>=90){var  胜率="G"} 
	 else if(胜率>=80){var  胜率="F"} 
	 else if(胜率>=70){var  胜率="E"} 
	 else if(胜率>=60){var  胜率="D"} 
	 else if(胜率>=50){var  胜率="C"} 	 
	 else if(胜率>=40){var  胜率="B"} 
	 else if(胜率>=30){var  胜率="A"} 
	 else if(胜率>=20){var  胜率="S"} 
	 else if(胜率>=10){var  胜率="SS"} 
	 else if(胜率>=1){var  胜率="SSS"} 	 
	 else{var  胜率="???"}
	 
 	 if(评分<=0){var  状态="【已征服】"}else{var 状态=""} 
	 
   var 外星星球3=""
		外星星球3+='  <div id="群星">'		
		外星星球3+='  <div id="行星"   style="background-image:url(img/xq/'+种类+'.png);"></div>	'	  	
	    外星星球3+='  <span id="星球消息"  >'
		外星星球3+='  <a> '+种类名+'评分：'+nFormatter(评分, 2)+'</a>'+状态+'<br>'
		外星星球3+='  <a> '+种类名+'大小：'+nFormatter(大小, 2)+'千米</a><br>	'
		外星星球3+='  <a> '+种类材料名+'：'+nFormatter(材料, 2)+'</a><br>'	
		外星星球3+='  <a  id="计算器1"  style="display:none" >  平均分/材料：'+nFormatter(材料评分, 2)+'</a><br>'
		外星星球3+='  <a id="计算器2"  style="display:none" >  敌对级别：【'+胜率+'】</a>'			
	    外星星球3+=' </span>	'	  
	    外星星球3+='  <button  id="星球" onclick="外星列表战争(3'+i+')" >战争</button>	'	
        外星星球3+='  </div>'
  $('.外星球界面3').append (外星星球3);  

   }
}


  function 外星列表4(){ 
  
   var 星区4 =gamedata['星战']['星区4']
   var 星战舰队 =gamedata['星战']['星战舰队']



	for(i = 1; i <= 星区4; i++)
	{
 	var 评分=gamedata['星战']['评分'+i+'星区4']
 	var 大小=gamedata['星战']['大小'+i+'星区4']     
 	var 种类=gamedata['星战']['种类'+i+'星区4'] 
 	var 材料=gamedata['星战']['材料'+i+'星区4'] 
	
   var  材料评分=评分/材料
   if(材料评分==Infinity||材料评分!=材料评分){var 材料评分=0 } 	
   if     (种类<30){var 种类名="荒芜行星";种类材料名="星核之力"; } 	 
   else if(种类<60){var 种类名="气态行星";种类材料名="星尘之力"; }
   else            {var 种类名="冰封星球";种类材料名="寒冰核心"; }

     var 胜率=(星战舰队/评分)*100-50 
	 if(胜率>=100){var  胜率="H"} 
	 else if(胜率>=90){var  胜率="G"} 
	 else if(胜率>=80){var  胜率="F"} 
	 else if(胜率>=70){var  胜率="E"} 
	 else if(胜率>=60){var  胜率="D"} 
	 else if(胜率>=50){var  胜率="C"} 	 
	 else if(胜率>=40){var  胜率="B"} 
	 else if(胜率>=30){var  胜率="A"} 
	 else if(胜率>=20){var  胜率="S"} 
	 else if(胜率>=10){var  胜率="SS"} 
	 else if(胜率>=1){var  胜率="SSS"} 	 
	 else{var  胜率="???"}

	 if(评分<=0){var  状态="【已征服】"}else{var 状态=""} 
   
   var 外星星球4=""
		外星星球4+='  <div id="群星">'		
		外星星球4+='  <div id="行星"   style="background-image:url(img/xq/'+种类+'.png);"></div>	'	  	
	    外星星球4+='  <span id="星球消息"  >'
		外星星球4+='  <a> '+种类名+'评分：'+nFormatter(评分, 2)+'</a>'+状态+'<br>'
		外星星球4+='  <a> '+种类名+'大小：'+nFormatter(大小, 2)+'千米</a><br>	'
		外星星球4+='  <a> '+种类材料名+'：'+nFormatter(材料, 2)+'</a><br>'	
		外星星球4+='  <a id="计算器1"  style="display:none" >  平均分/材料：'+nFormatter(材料评分, 2)+'</a><br>'
		外星星球4+='  <a id="计算器2"  style="display:none" >  敌对级别：【'+胜率+'】</a>'		
	    外星星球4+=' </span>	'	  
	    外星星球4+='  <button  id="星球" onclick="外星列表战争(4'+i+')" >战争</button>'	
        外星星球4+='  </div>'
  $('.外星球界面4').append (外星星球4);  

   }
}
  function 群星观测站(obj){ 
  
  
  
     if(gamedata['星战']['观测能量'] == undefined){gamedata['星战']['观测能量'] = 0;}  
	
     if (obj==1&&gamedata['inventory']['星星能源']>=1){		 
	  gamedata['星战']['观测能量']=1  
      gamedata['星战']['观测站充能']=0
      }	
 
 
 
     if(gamedata['星战']['观测站充能'] == undefined){gamedata['星战']['观测站充能'] = 0;}   
	 
    var  观测能量=gamedata['星战']['观测能量']
    var  观测站充能=gamedata['星战']['观测站充能']


     if (gamedata['星战']['观测能量']>=1){	
	  gamedata['星战']['观测站充能']+=1		  
      }	

     if (观测站充能/5>=1){	
	    外星星战()		
      gamedata['inventory']['星星能源']-=1
	  gamedata['星战']['观测站充能']=0
	  gamedata['星战']['观测能量']=0  	  
      }	


  

	document.getElementById("星系舰队2_2").style="width: "+(观测站充能/5)*100+"%;";
	document.getElementById("星系舰队2_2").innerHTML=""+nFormatter(观测站充能/5*100, 2)+"%";  




}
  function 跳跃装置(obj){ 
   
   if (obj==99){
	   gamedata['星战']['跳跃装置']=0
	   gamedata['星战']['星系地点']=0	   
	   }
  
  var  星系地点=gamedata['星战']['星系地点']
  
  if (gamedata['星战']['星系地点']>0){
	 gamedata['星战']['跳跃装置']+=1
 if (gamedata['星战']['跳跃装置']>10){
	外星列表战争(星系地点) 	 	 
     }}
	document.getElementById("跳跃引擎").style="width: "+(gamedata['星战']['跳跃装置']/10)*100+"%;";
	document.getElementById("跳跃引擎").innerHTML=""+nFormatter((gamedata['星战']['跳跃装置']/10)*100, 2)+"%";  
	

}
  function 外星列表战争(obj){ 
  
    var  外星列表战争=0
      
     if (gamedata['inventory']['跳跃引擎装置']>=1){
	  var  外星列表战争=parseInt(obj)	 	 
      }	
	
	   gamedata['星战']['星系地点']=外星列表战争		
     if(gamedata['星战']['材料星区'] == undefined){gamedata['星战']['材料星区'] = 0;} 
	
   var  星战评分="评分星区'"
   var  星战材料="材料星区'"
   var  种类="月球消息1"
 // ======================================================	  
   if (外星列表战争==11){  	   
   if (gamedata['星战']['跳跃装置']>10){	
   var  星战评分="评分1星区1"
   var  星战材料="材料1星区1"		   
   var 种类=gamedata['星战']['种类1星区1'] 		   
    }}	     	 	
   if (外星列表战争==12){
   if (gamedata['星战']['跳跃装置']>10){	
   var  星战评分="评分2星区1"
   var  星战材料="材料2星区1"		   
   var 种类=gamedata['星战']['种类2星区1'] 		   
    }}	 	
   if (外星列表战争==13){  
   if (gamedata['星战']['跳跃装置']>10){	
   var  星战评分="评分3星区1"
   var  星战材料="材料3星区1"		   
   var 种类=gamedata['星战']['种类3星区1'] 		   
    }}
// ======================================================	
   if (外星列表战争==21){
   if (gamedata['星战']['跳跃装置']>10){	
   var  星战评分="评分1星区2"
   var  星战材料="材料1星区2"		   
   var 种类=gamedata['星战']['种类1星区2'] 		   
    }}	
   if (外星列表战争==22){
   if (gamedata['星战']['跳跃装置']>10){	
   var  星战评分="评分2星区2"
   var  星战材料="材料2星区2"		   
   var 种类=gamedata['星战']['种类2星区2'] 		   
    }} 	
   if (外星列表战争==23){
   if (gamedata['星战']['跳跃装置']>10){	
   var  星战评分="评分3星区2"
   var  星战材料="材料3星区2"		   
   var 种类=gamedata['星战']['种类3星区2'] 		   
    }}	 	
   if (外星列表战争==24){
   if (gamedata['星战']['跳跃装置']>10){	
   var  星战评分="评分4星区2"
   var  星战材料="材料4星区2"		   
   var 种类=gamedata['星战']['种类4星区2'] 		   
    }}
// ======================================================		
   if (外星列表战争==31){
   if (gamedata['星战']['跳跃装置']>10){	
   var  星战评分="评分1星区3"
   var  星战材料="材料1星区3"		   
   var 种类=gamedata['星战']['种类1星区3'] 		   
    }}	 	
   if (外星列表战争==32){
   if (gamedata['星战']['跳跃装置']>10){	
   var  星战评分="评分2星区3"
   var  星战材料="材料2星区3"		   
   var 种类=gamedata['星战']['种类1星区3'] 		   
    }} 	
   if (外星列表战争==33){
   if (gamedata['星战']['跳跃装置']>10){	
   var  星战评分="评分3星区3"
   var  星战材料="材料3星区3"		   
   var 种类=gamedata['星战']['种类1星区3'] 		   
    }} 	
   if (外星列表战争==34){
   if (gamedata['星战']['跳跃装置']>10){	
   var  星战评分="评分4星区3"
   var  星战材料="材料4星区3"		   
   var 种类=gamedata['星战']['种类4星区3'] 		   
    }}
// ======================================================		
   if (外星列表战争==41){
   if (gamedata['星战']['跳跃装置']>10){	
   var  星战评分="评分1星区4"
   var  星战材料="材料1星区4"		   
   var 种类=gamedata['星战']['种类1星区4'] 		   
    }}  	
   if (外星列表战争==42){
   if (gamedata['星战']['跳跃装置']>10){	
   var  星战评分="评分2星区4"
   var  星战材料="材料2星区4"		   
   var 种类=gamedata['星战']['种类2星区4'] 		   
    }} 	
   if (外星列表战争==43){
   if (gamedata['星战']['跳跃装置']>10){	
   var  星战评分="评分3星区4"
   var  星战材料="材料3星区4"		   
   var 种类=gamedata['星战']['种类3星区4'] 		   
    }}	 	
   if (外星列表战争==44){
   if (gamedata['星战']['跳跃装置']>10){	
   var  星战评分="评分4星区4"
   var  星战材料="材料4星区4"		   
   var 种类=gamedata['星战']['种类4星区4'] 		   
    }}	
// ======================================================		
   if     (种类==1){var 材料="黄矮星之力"; } 
   else if(种类==2){var 材料="红巨星之力"; }
   else if(种类==3){var 材料="白矮星之力"; }  
   else if(种类==4){var 材料="紫巨星之力"; }
   else if(种类==5){var 材料="蓝巨星之力"; }  
   else if(种类==6){var 材料="脉冲星之力"; }
   else if(种类==7){var 材料="中子星之力"; }
   else if(种类==8){var 材料="黑洞之力"; }     
   else if(种类<20){var 材料="熔岩核心"; }
   else if(种类<30){var 材料="星核之力"; }
   else if(种类<40){var 材料="剧毒核心"; }
   else if(种类<50){var 材料="盖亚之力"; }	  
   else if(种类<60){var 材料="星尘之力"; }
   else if(种类<70){var 材料="寒冰核心"; }
   
   var 胜率=(gamedata['星战']['星战舰队']/gamedata['星战'][''+星战评分])*100-50 
   var 战斗触发 = Math.floor(Math.random()*100+1) 	  
   
   
   if (gamedata['星战']['跳跃装置']>10){
		
   gamedata['星战']['跳跃装置']=0
   gamedata['星战']['星系地点']=0	


   if(胜率>战斗触发){
	
	   var 战斗损失 = Math.floor(Math.random()*40+80) 
	
	
      gamedata['inventory'][''+材料]+=gamedata['星战'][''+星战材料]	
	  gamedata['星战']['星战舰队']-=gamedata['星战'][''+星战评分]/战斗损失
	  
      document.getElementById("战争消息").innerHTML="已征服-损失了【"+nFormatter(gamedata['星战'][''+星战评分]/战斗损失, 2)+"舰船】获得【"+gamedata['星战'][''+星战材料]+"个"+材料+"】";
	  gamedata['inventory']['跳跃引擎装置']-=1
	  gamedata['星战'][''+星战评分]=0	
      gamedata['星战'][''+星战材料]=0	
   }else{
	   
	   var 战斗损失 = Math.floor(Math.random()*80+160)  
	   
	  gamedata['星战']['星战舰队']-=gamedata['星战'][''+星战评分]/战斗损失	   
	  gamedata['inventory']['跳跃引擎装置']-=1
	   
	   document.getElementById("战争消息").innerHTML="征服失败【情况不妙快速撤退出战场】【只损失了"+nFormatter(gamedata['星战'][''+星战评分]/战斗损失, 2)+"舰船】";}	   
   }		
    gamedata['星战']['跳跃装置']=0   	 
}










  function 星区管理3材料(){
         var 星区管理3材料=new Array();
          星区管理3材料[1]="星核之力";
          星区管理3材料[2]="星尘之力";
          星区管理3材料[3]="盖亚之力";
          星区管理3材料[4]="黄矮星之力";
          星区管理3材料[5]="红巨星之力";	
          星区管理3材料[6]="白矮星之力";		  
          星区管理3材料[7]="紫巨星之力";	
          星区管理3材料[8]="蓝巨星之力";			  			  
          星区管理3材料[9]="脉冲星之力";	
          星区管理3材料[10]="中子星之力";
          星区管理3材料[11]="黑洞之力";	
          星区管理3材料[12]="剧毒核心";	
          星区管理3材料[13]="熔岩核心";	
          星区管理3材料[14]="寒冰核心";			  
	for(i = 1; i <= 14; i++)
	{			
	document.getElementById("星区管理3材料"+i).innerHTML="【"+gamedata['inventory'][''+星区管理3材料[i]+'']+"】";		
	}
}


  function 星区征招项目(obj){ 
  
    var  星区征招项目=parseInt(obj)
	var  星区管理位置=gamedata['星战']['星区管理'] 
	var 星战舰队评分上限=gamedata['舰队']['总评分']*10
    var 星战舰队总评分=gamedata['星战']['星战舰队']	 
	
  if(星战舰队评分上限 >=星战舰队总评分){
	  
    if(gamedata['首都']['星区'+星区管理位置+'评分'] >=5000000){
		
    if(星区征招项目==1&&gamedata['首都']['星区'+星区管理位置+'评分'] >1000000&&gamedata['inventory']['执行力']>100000){
	gamedata['inventory']['执行力']-=100000
	gamedata['首都']['星区'+星区管理位置+'评分']-=1000000
	gamedata['星战']['星战舰队']+=1000000	
	document.getElementById("星区征招1").innerHTML="征招了1M舰队消耗10K执行力"; 
   }
   else if(星区征招项目==2&&gamedata['首都']['星区'+星区管理位置+'评分'] >10000000&&gamedata['inventory']['执行力']>1000000){
	gamedata['inventory']['执行力']-=1000000
	gamedata['首都']['星区'+星区管理位置+'评分']-=10000000
	gamedata['星战']['星战舰队']+=10000000	
	document.getElementById("星区征招1").innerHTML="征招了10M舰队消耗100K执行力"; 
   }
   else if(星区征招项目==3&&gamedata['首都']['星区'+星区管理位置+'评分'] >100000000&&gamedata['inventory']['执行力']>10000000){
	gamedata['inventory']['执行力']-=10000000
	gamedata['首都']['星区'+星区管理位置+'评分']-=100000000
	gamedata['星战']['星战舰队']+=100000000	
	document.getElementById("星区征招1").innerHTML="征招了10M舰队消耗100K执行力"; 
   }   
    else if(星区征招项目==4&&gamedata['首都']['星区'+星区管理位置+'评分']>5000000&&gamedata['inventory']['执行力']>gamedata['首都']['星区'+星区管理位置+'评分']/100){
	gamedata['inventory']['执行力']-=Math.floor(gamedata['首都']['星区'+星区管理位置+'评分']/100)
	gamedata['首都']['星区'+星区管理位置+'评分']-=Math.floor(gamedata['首都']['星区'+星区管理位置+'评分']/10)
	gamedata['星战']['星战舰队']+=Math.floor(gamedata['首都']['星区'+星区管理位置+'评分']/10)
	document.getElementById("星区征招1").innerHTML="征招了"+nFormatter(Math.floor(gamedata['首都']['星区'+星区管理位置+'评分']/10), 2)+"舰队消耗"+nFormatter(Math.floor(gamedata['首都']['星区'+星区管理位置+'评分']/100), 2)+"执行力"; 
   }    
     else if(星区征招项目==5&&gamedata['首都']['星区'+星区管理位置+'评分']>5000000&&gamedata['inventory']['执行力']>gamedata['首都']['星区'+星区管理位置+'评分']/20){
	gamedata['inventory']['执行力']-=Math.floor(gamedata['首都']['星区'+星区管理位置+'评分']/20)
	gamedata['首都']['星区'+星区管理位置+'评分']-=Math.floor(gamedata['首都']['星区'+星区管理位置+'评分']/2)
	gamedata['星战']['星战舰队']+=Math.floor(gamedata['首都']['星区'+星区管理位置+'评分']/2)
	document.getElementById("星区征招1").innerHTML="征招了"+nFormatter(Math.floor(gamedata['首都']['星区'+星区管理位置+'评分']/10), 2)+"舰队消耗"+nFormatter(Math.floor(gamedata['首都']['星区'+星区管理位置+'评分']/100), 2)+"执行力"; 
   }     
  else{	document.getElementById("星区征招1").innerHTML="【执行力不足或者星区舰队不够】"; }
 }else{	document.getElementById("星区征招1").innerHTML="低于5M舰队评分了，在征招星区叛乱啦！"; }
 }else{	document.getElementById("星区征招1").innerHTML="指挥不了那么多舰队作战"; }
 
 
  星区管理项目() 
 }
 
 
 
  function 星系舰队战争(obj){ 

    var  星系舰队战争=parseInt(obj)
	var myDate = new Date();   
	var mytime=myDate.toLocaleTimeString(); 

    if(gamedata['星战']['星战舰队']==undefined||gamedata['星战']['星战舰队']<0){gamedata['星战']['星战舰队']=0 }
	

   var 星战舰队评分上限=gamedata['舰队']['总评分']*10
   var 星战舰队总评分=gamedata['星战']['星战舰队']

  var 首都等级=gamedata['首都']['首都等级']
	
	
   var 星区总评分=0;
    
	for(i = 1; i <= 首都等级; i++)
	{
      星区总评分+=gamedata['首都']['星区'+i+'评分']
		
    }	
   
	   gamedata['星战']['总评分']=星区总评分




	document.getElementById("星系舰队1_2").style="width: "+(星战舰队总评分/星战舰队评分上限)*100+"%;";
	document.getElementById("星系舰队1_3").innerHTML=""+nFormatter(星战舰队总评分, 2)+"评分/"+nFormatter(星战舰队评分上限, 2)+"评分";       
	   
	   
	   
	   
	   
	   
	   
	   
	   
	   
     // if(gamedata['星战']['地点']==1){document.getElementById("星系舰队战斗提示1").innerHTML = "待命中";}	
	 // if(gamedata['星战']['地点']==2){document.getElementById("星系舰队战斗提示1").innerHTML = "白羊座星区";}	 
	 
     // var 结算时间=10	 
	 // if(gamedata['星战']['地点']>1){gamedata['星战']['战斗时间']+=1};	 
     // if(gamedata['星战']['战斗时间']>=结算时间){
		 
	// var 遭遇触发 = Math.floor(Math.random()*100+1) 	
	// var 战斗触发 = Math.floor(Math.random()*100+1) 		
	// var 舰队总评分=gamedata['星战']['总评分'] 	 	
	
	// var 敌对评分=0 	 
	// var 敌人名称=""	
	// var 战斗消息=""	
	// var 掉落物="月球消息1"
	// var 掉落物2="月球消息1"	
	// var 掉落物文本=""
	// var 掉落物2文本=""			
	// var 掉落物数量提示=""
	// var 掉落物数量2提示=""	
	// var 获得了="什么都没掉落"	
	// var 掉落物数量=0
    // var 掉落物2数量=0


	// if(gamedata['星战']['地点']==2){ 		 

		 // var 敌对评分=Math.floor(Math.random()*1000+1000) ;
		 // var 敌人名称="白羊座" 
 		 
         // }      
	
       
	 
		 

		 
    // var 胜率=(舰队总评分/敌对评分)*100-50 
	
	// if(掉落物数量>0){var 获得了="获得了";var 掉落物数量提示="【"+掉落物数量+"个】";var 掉落物文本=""+掉落物+""  } 
	// if(掉落物2数量>0){var 获得了="获得了";var 掉落物数量2提示="【"+掉落物2数量+"个】";var 掉落物2文本=""+掉落物2+""  }
	
	// if(胜率>战斗触发){
	 	
    // var 战斗消息="击败了【"+敌人名称+"】"+获得了+""+掉落物文本+""+掉落物数量提示+""+掉落物2文本+""+掉落物数量2提示+""
		 
	// if(gamedata['inventory'][""+掉落物]  == undefined){gamedata['inventory'][""+掉落物] = 0;}
	// if(gamedata['inventory'][""+掉落物2]  == undefined){gamedata['inventory'][""+掉落物2] = 0;}
	
		 
		 // this.gamedata['inventory'][""+掉落物] +=掉落物数量	
         // this.gamedata['inventory'][""+掉落物2] +=掉落物2数量
		
	// }
	// else{ 
	
	// var 战斗消息="被【"+敌人名称+"】击败了"	 
	// }	


		

	 // var 摧毁船舰=(星区总评分-敌对评分/1)/星区总评分
	 // if(摧毁船舰<=0){var 摧毁船舰=0 }  

		
      
           

	// for(i = 1; i <= 首都等级; i++)
	// {
      // gamedata['首都']['星区'+i+'评分']*=摧毁船舰
		
    // }

		

       // document.getElementById("星系舰队战斗提示3").innerHTML = "损毁了【"+nFormatter(敌对评分/1, 2)+"评分】舰船"; 

	
        // document.getElementById("星系舰队战斗提示2").innerHTML = ""+mytime+""+战斗消息+""; 
        // gamedata['星战']['战斗时间']=0	 
     // }
	 // 星系舰队战斗提示4=结算时间-gamedata['星战']['战斗时间']
	 // document.getElementById("星系舰队战斗提示4").innerHTML = ""+Math.floor(星系舰队战斗提示4)+"";
 
  }
  
  
  

