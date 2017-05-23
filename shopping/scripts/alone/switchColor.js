/**
 * Created by 超航 on 2016/7/22.
 */
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