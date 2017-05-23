$(function (){
	$("#js_roll_box li").each(function() {
		var $img = $(this).find("img");
		var img_width = $img.width();
		var img_height = $img.height();
		var spanHtml = '<span style="position: absolute; top: 0; left: 0; width: '+img_width+'px;height: '
		+img_height+'px;" class="imageMask"></span>';
		$(this).find('a').append(spanHtml);
	});
	$('#js_roll_box').find('.imageMask').live('hover', function() {
		$(this).toggleClass('imageOver');
	});
});
