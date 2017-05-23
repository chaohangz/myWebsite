$(window).on('load', function(event) {
    //模拟后台json数据
    var dataInt = {
        "data": [{
            "user_img": "1.jpg",
            "user_name": "小白",
            "sort": "资讯",
            "time": "六小时前",
            "block_img": "1.jpg",
            "h2": "即将直播 | iPhone 7 / 7 Plus 深圳益田 Apple Store 首销现场",
            "para": "苹果在今年的秋季新品发布会上带来了新一代旗舰 iPhone 7 / 7 Plus，中国大陆也再次成为苹果新机的首发地之一。 9 月 16 日正式开卖，你会入手 iPhone 7 / 7Plus...",
            "good": "2",
            "comment": "28"
        }, {
            "user_img": "2.jpg",
            "user_name": "中白",
            "sort": "资讯",
            "time": "七小时前",
            "block_img": "2.jpg",
            "h2": "一次有意思的「Colorshot」",
            "para": "离上一次发帖过去了正好 35 天，5 个星期的时间。这一段时间正直学校开课， 所以多了很多借口没有继续更新，慢慢一段时间过来，却总觉得心里面不舒服，好像一直有...",
            "good": "3",
            "comment": "38"
        }]
    };
    $(".art_more").click(function() {
        //遍历json数据
        $.each(dataInt.data, function() {
            var art_block = $("<div>").addClass('art_block border').insertBefore($(".art_more"));
            //header begin
            var header = $("<div>").addClass('block_header').appendTo(art_block);
            var user_portrait = $("<div>").addClass('user_portrait').appendTo(header);
            $("<img>").attr("src", "image/user_portrait/" + $(this).attr("user_img")).appendTo(user_portrait);
            var user_box = $("<div>").addClass('user_box').appendTo(header);
            $("<div>").addClass('user_name').text($(this).attr("user_name")).appendTo(user_box);
            $("<div>").addClass('sort').text($(this).attr("sort")).appendTo(user_box);
            $("<div>").addClass('time').text($(this).attr("time")).appendTo(header);
            //header end

            //block_img begin
            var block_img = $("<div>").addClass('block_img').appendTo(art_block);
            var href1 = $("<a>").attr("href", "#").appendTo(block_img);
            $("<img>").attr("src", "image/air_img/" + $(this).attr("block_img")).appendTo(href1);
            //block_img end

            //footer begin
            var footer = $("<div>").addClass('block_footer').appendTo(art_block);
            var href2 = $("<a>").attr("href", "#").appendTo(footer);
            $("<h2>").text($(this).attr("h2")).appendTo(href2);
            $("<p>").text($(this).attr("para")).appendTo(footer);
            var tag = $("<div>").addClass('good_and_comment').appendTo(footer);
            $("<div>").addClass('good').text($(this).attr("good"));
            $("<div>").addClass('comment').text($(this).attr("comment"));
            //footer end
        });
    });
});
