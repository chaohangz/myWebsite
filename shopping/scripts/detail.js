/**
 * Created by chaohang on 2016/10/14.
 */
//产品图片放大镜效果
$(function(){
    $('.jqzoom').jqzoom({
        zoomType: 'standard',
        lens: true,
        preloadImages: false,
        alwaysOn: false,
        zoomWidth: 340,
        zoomHeight: 340,
        xOffset: 10,
        yOffset: 0,
        position: 'right'
    });
});

//单击小图换大图
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

//产品属性介绍切换
$(function(){
    $('.text_info .buttom').click(function(){
        $(this).addClass('selected')
            .siblings().removeClass('selected');
        var index = $(this).index();
        $('.info_box li').eq(index).show()
            .siblings().hide();
    }).eq(0).click();
});

//产品颜色切换
$(function () {
    $(".color_change ul li img").click(function () {
        $(this).addClass('border')
            .parent().siblings().find('img').removeClass('border');
        var imgSrc = $(this).attr('src');
        var spot = imgSrc.lastIndexOf('.');
        var unit = imgSrc.substring(spot);
        imgSrc = imgSrc.substring(0, spot);
        var imgSrc_small = imgSrc + '_one_small' + unit;
        var imgSrc_big = imgSrc + '_one_big' +unit;
        $(".big_img").find('img').attr('src', imgSrc_small);
        $(".look_big_img").find('a').attr('href', imgSrc_big);
        var alt = $(this).attr('alt');
        $('#color_text').text(alt);
        var newImgSrc = imgSrc.replace("images/pro_img/", "");
        $(".change_img ul li").hide();
        $(".change_img").find(".imgList_"+newImgSrc).show()
            .eq(0).find('a').click();
    }).eq(0).click();
});

//产品尺寸切换和数量改变产生价格变化
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

//评分效果
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

//加入购物车效果
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