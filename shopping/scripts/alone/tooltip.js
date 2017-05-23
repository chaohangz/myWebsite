/**
 * Created by 超航 on 2016/7/19.
 */
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