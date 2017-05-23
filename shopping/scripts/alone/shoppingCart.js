$(function(){
    $(".shopping_cart").click(function () {
        var color = $("#color_text").text();
        var size = $(".cloth_size .size_text").text();
        var math = $(".cloth_math select").val();
        $(".tips-title").text("感谢您的购买。");
        $(".tips-line").text("您购买的产品是：免烫高支棉条纹衬衣; 尺寸是：" +size+ "；颜色是："+color+ "；\n数量是：" +math+ "；总价是：" +200*math+ "元。")
        $("#basic-dialog-warn").modal();
    });
});