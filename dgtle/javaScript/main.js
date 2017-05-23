//轮播图效果
$(function () {
    var index = 0;
    var $slide_li = $("#slide_small_img li");
    var len = $slide_li.length;
    $slide_li.mouseover(function () {
        index = $slide_li.index(this);
        slideShow(index);
    }).eq(0).mouseover();
    $("#banner_box").hover(function () {
        if (time) {
            clearInterval(time);
        }
    }, function () {
        time = setInterval(function () {
            slideShow(index);
            index++;
            if (index === len) {
                index = 0
            }
        }, 5000)
    }).mouseleave();
});

function slideShow(index) {
    var left = -1200 * index;
    $("#slide_box").stop(true, false).animate({left: left + "px"}, 500);
    $(".slide_li").removeClass("active_slide")
        .eq(index).addClass("active_slide");
}
//轮播图end


//尾巴体验，左右按钮动画效果
$(function () {
    var $btn_left = $("#exp_btn_left");
    var $btn_right = $("#exp_btn_right");
    var $slide_box = $("#exp_slide_box");
    var length = ($slide_box.find("li").length / 4 - 1) * -980;
    var $left;
    $btn_left.hide();
    $btn_left.click(function () {
        $btn_right.show();
        $left = parseInt($slide_box.css("left").replace("px", ""));
        $left += 980;
        $slide_box.animate({left: $left + "px"}, 500);
        if ($left === 0) {
            $btn_left.hide();
        }
    });
    $btn_right.click(function () {
        $btn_left.show();
        $left = parseInt($slide_box.css("left").replace("px", ""));
        $left -= 980;
        $slide_box.animate({left: $left + "px"}, 500);
        if ($left === length) {
            $btn_right.hide();
        }
    });
});

$(function () {
    $(".black").hover(function () {
        $(this).animate({opacity: "0.6"}, 500)
    }, function () {
        $(this).stop(true,true).css("opacity", "")
    });
});


//尾巴体验,查看更多，鼠标移入更改颜色效果
$(function () {
    $(".more").hover(function () {
        $(this).addClass("active");
    }, function () {
        $(this).removeClass("active")
    })
});
//尾巴体验end


//尾巴频道，鼠标移入更改颜色效果
$(function () {
    $("#cr").find("a").hover(function () {
        $(this).css("color", "#6cb2fd")
    }, function () {
        $(this).css("color", "")
    })
});
//尾巴频道end


//diy_three 动画效果
$(function () {
    var index = 0;
    $(".round").mouseover(function () {
        index = $(this).index();
        diySlide(index);
    }).eq(0).mouseover();
});

function diySlide(index) {
    $left = -275 * index;
    $("#diy_slide").animate({left: $left}, 500);
    $(".round").css("background", "")
        .eq(index).css("background", "white");
}