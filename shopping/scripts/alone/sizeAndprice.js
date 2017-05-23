$(function(){
	$(".cloth_size .size_box").click(function(){
		$(this).addClass("bg")
			.siblings().removeClass('bg');
		$(this).parents().find('.size_text').text($(this).text() );
	});
	var price = $(".price").text();
	$(".cloth_math select").change(function(){
		var num = $(this).val();
		var amount = num * price;
		$(".amount").text(amount);
	})
});