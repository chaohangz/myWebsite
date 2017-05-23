/**
 * Created by 超航 on 2016/7/18.
 */
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
})