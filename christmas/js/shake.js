// function init() {
//     if (window.DeviceMotionEvent) { //是否支持运动传感事件
//         window.addEventListener('devicemotion', deviceMotionHandler, false);
//     }
// }

// var SHAKE_THRESHOLD = 3000;
// var last_update = 0;

// var x,
//     y,
//     z,
//     last_x,
//     last_y,
//     last_z;

// var count = 0;

// function deviceMotionHandler(eventData) {
// 	//获取含重力的加速度
// 	var acceleration = eventData.accelerationIncludingGravity;
// 	//获取当前时间
// 	var curTime = new Date().getTime();
// 	var diffTime = curTime - last_update;

// 	if (diffTime > 100) {
// 		last_update = curTime;

// 		x = acceleration.x;  //x方向的加速度
// 		y = acceleration.y;
// 		z = acceleration.z;

// 		//加速度差除以时间差
// 		var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 30000;

// 		if (speed > SHAKE_THRESHOLD) {
// 			//在此处可以实现摇一摇之后的逻辑实现
// 			if ($(".gift-box").is(":hidden") && $('.prize').is(':hidden') && $('.my-prize').is(':hidden') && $('.prize-rule').is(':hidden') && $('.charts').is(':hidden') && $('.rule').is(':hidden') && $('.share').is(':hidden')) {
// 				$('.gift-box').show();
// 			}
// 		}

// 		last_x = x;
// 		last_y = y;
// 		last_z = z;
// 	}

// }

// $(document).ready(function() {
//     init();
// });

$(document).ready(function () {
    if (window.DeviceMotionEvent) {
        var speed = 10;
        var x = y = z = lastX = lastY = lastZ = 0;
        window.addEventListener('devicemotion', function () {
            var acceleration = event.accelerationIncludingGravity;
            x = acceleration.x;
            y = acceleration.y;
            z = acceleration.z;

            if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed || Math.abs(z - lastZ) > speed) {
                if ($(".gift-box").is(":hidden") && $('.prize').is(':hidden') && $('.my-prize').is(':hidden') && $('.prize-rule').is(':hidden') && $('.charts').is(':hidden') && $('.rule').is(':hidden') && $('.share').is(':hidden')) {
                    $('.gift-box').show();
                    setTimeout("$('.hand').show()", 1200);
                }
            }
            lastX = x;
            lastY = y;
            lastZ = z;
        }, false);
    };

    $('.yao-button').click(function () {
        if ($(".gift-box").is(":hidden") && $('.prize').is(':hidden') && $('.my-prize').is(':hidden') && $('.prize-rule').is(':hidden') && $('.charts').is(':hidden') && $('.rule').is(':hidden') && $('.share').is(':hidden')) {
            $('.gift-box').show();
            setTimeout("$('.hand').show()", 1200);
        };
    });
});