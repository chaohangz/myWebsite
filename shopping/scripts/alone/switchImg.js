$(function(){
	$('.change_img ul li a').click(function(){
		var imgSrc = $(this).find('img').attr("src");
		var spot = imgSrc.lastIndexOf(".");
		var unit = imgSrc.substring(spot);
		imgSrc = imgSrc.substring(0,spot);
		var imgSrc_big = imgSrc + "_big" + unit;
		$("#thickImg").attr('href', imgSrc_big);
	});
});