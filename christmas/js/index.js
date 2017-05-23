var prize = $('.prize');
var	myPrize = $('.my-prize');
var	prizeRule = $('.prize-rule');
var	charts = $('.charts');
var	rule = $('.rule');
var share = $('.share');
var hand = $('.hand');

$('.close').click(function() {
	prize.hide();
	myPrize.hide();
	prizeRule.hide();
	charts.hide();
	rule.hide();
});

// 点击礼盒
$('.gift-box').click(function() {
	prize.show();
	$('.gift-box').hide();
	hand.hide();
});

hand.click(function() {
	prize.show();
	$('.gift-box').hide();
	hand.hide();
});
// 点击礼盒 end

$('.bt-sock').click(function() {
	myPrize.show();
});

$('.bt-rank').click(function() {
	charts.show();
});

$('.bt-rule').click(function() {
	rule.show();
});

$('.bt-share').click(function() {
	share.show();
});

$('.bt-again').click(function() {
	prize.hide();
});

$('.bt-buddy').click(function() {
	prizeRule.show();
});

$('.bt-return').click(function() {
	myPrize.hide();
});

share.click(function() {
	share.hide();
});

$('.music').click(function() {
	var myAudio = document.getElementById('audio');
	var control = $('.control');
	if (myAudio.paused) {
		myAudio.play();
		control.css("animation-play-state", "running");
		control.css("-webkit-animation-play-state", "running");
	} else {
		myAudio.pause();
		control.css("animation-play-state", "paused");
		control.css("-webkit-animation-play-state", "paused");
	}
});






