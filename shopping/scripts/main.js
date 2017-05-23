/**
 * Created by chaohang on 2016/10/14.
 */

//搜索框文字效果
$(function () {
    $(".search").focus(function () {
        if($(this).val() == this.defaultValue) {
            $(this).val("");
        }
    }).blur(function () {
        if($(this).val() == ""){
            $(this).val(this.defaultValue)
        }
    }).keyup(function (e) {
        if (e.which == 13) {
            alert('未找到该商品');
        }
    })
});

//导航效果
$(function () {
    $("#header .main_nav .nav").hover(function () {
        $(this).find(".second_menu").show();
    },function() {
        $(this).find(".second_menu").hide();
    })
});

//热销效果
$(function () {
    $(".promoted").append("<s class='hot'></s>");
});

//轮播广告 begin
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
//轮播广告 end

//超链接提示
$(function () {
    var x = 10;
    var y = 20;
    $(".tooltip").mouseover(function (e) {
        this.mytitle = this.title;                                   //把title存到自定义属性 mytitle 中
        this.title = "";                                            //把title属性设为空，不让浏览器默认提示动画出现
        var tooltip = "<div id='tooltip'>"+this.mytitle+"</div>";   //创建div元素
        $("body").append(tooltip);                                  //添加到body中
        $("#tooltip").css({                                         //设置div元素的位置
            "top": (e.pageY +y) + "px",
            "left": (e.pageX + x) + "px"
        }).show("fast");
    }).mouseout(function () {
        this.title = this.mytitle;
        $("#tooltip").remove();
    }).mousemove(function (e) {
        $("#tooltip").css({                                         //让div元素随着鼠标移动
            "top": (e.pageY + y) + "px",
            "left": (e.pageX + x) + "px"
        });
    });
});

//品牌活动滚动效果 begin
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
//品牌活动滚动效果 end

//显示放大镜效果
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