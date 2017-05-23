$(document).ready(function() {

	$('canvas.snow').let_it_snow({
		windPower: 3,
		speed: 1,
		count: 250,
		size: 0
	});

	$('canvas.flake').let_it_snow({
		windPower: -3,
		speed: 1,
		count: 20,
		size: 10,
		image: "images/flake.png"
	});

});

