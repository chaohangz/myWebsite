$(function(){
	$('.text_info .buttom').click(function(){
		$(this).addClass('selected')
			.siblings().removeClass('selected');
		var index = $(this).index();
		$('.info_box li').eq(index).show()
			.siblings().hide();
	}).eq(0).click();
});