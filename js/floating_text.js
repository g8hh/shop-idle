var floating_text_amount = 0;

function parse_floating_text(floating_text, color, down){
	floating_text_amount++;
	var parsed_floating_text = '';
	var rotation = Math.floor(Math.random() * 40) + 30;

	if(down == undefined || down == false)
	{
		parsed_floating_text += '<div class="floating_text floating_text_' + floating_text_amount + '" style="left:' + rotation + '%;color:' + color + '">';
	}
	else
	{
		parsed_floating_text += '<div class="floating_text down floating_text_' + floating_text_amount + '" style="left:' + rotation + '%;color:' + color + '">';
	}
	parsed_floating_text += 	floating_text;
	parsed_floating_text += '</div>';

	var temp_floating_text_amount = floating_text_amount + '';
	setTimeout(function(){
		$('.floating_text_' + temp_floating_text_amount).remove();
	},3000);

	return parsed_floating_text;
}