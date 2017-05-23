/**
 * Created by 超航 on 2016/7/19.
 */
$(function () {
    $(".bottom_ads_header ul li a").click(function () {
        $(this).parent().addClass("active")
            .siblings().removeClass("active");
        var index = $(".bottom_ads_header li a").index(this);
        showBrandList(index);
        return false;
    }).eq(0).click();
});

//显示不同模块
function showBrandList(index) {
    var $roll = $("#js_roll_box");
    var liWidth = $roll.find("li").outerWidth();
    rollWidth = liWidth * 4;
    $roll.stop(true,false).animate({ left : -rollWidth*index},600);
}
