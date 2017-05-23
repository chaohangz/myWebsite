$(function(){
    $(".rating li a").click(function(){
        var title = $(this).attr("title");
        alert("您给商品的评分是："+title);
        var cl = $(this).parent().attr("class");
        $(this).parent().parent().removeClass().addClass(cl+ "star " + "rating");
        return false;
    });
    $(".rating li a").mouseover(function(){
        var text = $(this).text();
        //var int = parseIn(text);  //text本来就是数字
        var math = 80+text*16;      //返回的math是一个字符串
        $(this).parent().parent().css("background-position", "0 -" + math + "px");
    }).mouseout(function(){
        $(this).parent().parent().css("background-position", "");
    });
});