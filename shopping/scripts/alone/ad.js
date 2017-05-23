/**
 * Created by 超航 on 2016/7/19.
 */
$(function () {
    var $ads_text_list = $(".center_ads_text>a");
    var len = $ads_text_list.length;
    var index = 0;
    var adTimer = null;
    $ads_text_list.mouseover(function () {
        var index = $ads_text_list.index(this);
        showImg(index);
    }).eq(0).mouseover();
    //滑入停止动画 滑出开始动画
    $(".center_ads").hover(function () {
        if(adTimer){
            clearInterval(adTimer);
        }
    },function() {
        adTimer = setInterval(function () {
            showImg(index);
            index++;
            if(index == len){index = 0;}
        },3000);
    }).trigger("mouseleave");
});

//显示不同幻灯片
function showImg(index) {
    var $center_ads = $(".center_ads");
    var $ads_text_list = $center_ads.find("div a");
    var newhref = $ads_text_list.eq(index).attr("href");
    $("#js_imgWrap").attr("href", newhref)
        .find("img").eq(index).stop(true,true).fadeIn("fast")
        .siblings().fadeOut("fast");
    $ads_text_list.removeClass("chos").css("opacity", 0.6)
        .eq(index).addClass("chos").css("opacity", 1);
}