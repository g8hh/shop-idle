var removeShake;

function shake_this(e){
	if($(e).hasClass('shake') == false)
	{
		$(e).addClass('shake');
		clearTimeout(removeShake);
		removeShake = setTimeout(function(){
			if($(e).hasClass('shake'))
			{
				$(e).removeClass('shake');
			}
		},500);
	}
}