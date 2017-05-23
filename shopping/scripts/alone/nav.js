/**
 * Created by 超航 on 2016/7/18.
 */
//方法一
/*$(function () {
    $nav = $("#header .nav");
    $nav.mouseover(function () {
        $(this).find(".second_menu").show();
    }).mouseout(function () {
        $(this).find(".second_menu").hide();
    });
});*/

//第二种方法
$(function () {
    $("#header .main_nav .nav").hover(function () {
        $(this).find(".second_menu").show();
    },function() {
        $(this).find(".second_menu").hide();
    })
});