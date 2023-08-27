$('document').ready(function(){
	//當hover 時候就透明變成1 如果沒有就透明變0.3
	$('#contentA img').hover(function(){
		$(this).animate({opacity:1},600);
	}, function(){
		$(this).animate({opacity:0.3},600);
	});
	
	$('#contentB img').addClass('img_scale')
	
	$('#contentC img').hover(function(){
		$(this).animate({opacity:0},'fast');
	},function(){
		$(this).animate({opacity:1},'fast');
	})
	
	$('#contentD img').hover(function(){
		$(this).animate({opacity:0.7},'fast');
	},function(){
		$(this).animate({opacity:0},'fast');
	})
	
	$('#contentE img').hover(function(){
		$(this).animate({marginTop:'-300px'},'fast');
	},function(){
		$(this).animate({marginTop:0},'fast');
	})
});