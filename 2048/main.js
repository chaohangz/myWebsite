var board = []; //棋盘的状态
var score = 0;
var hasConflicted = []; //碰撞的状态

//初始化移动端坐标
var startx = 0,
	starty = 0,
	endx = 0,
	endy = 0;

$(document).ready(function() {
	prepareForMobile();
	newgame();
	$("#newGameButton").click(newgame);
});

function prepareForMobile() {
	//网页端上的显示
	if (documentWidth > 500) {
		gridContainerWidth = 500;
		cellSpace = 20;
		cellSlideLength = 100;
	}

	//移动端的显示
	$("#grid-container").css({
		width: gridContainerWidth - 2 * cellSpace,
		height: gridContainerWidth - 2 * cellSpace,
		padding: cellSpace,
		borderRadius: 0.02 * gridContainerWidth
	});
	$(".grid-cell").css({
		width: cellSlideLength,
		height: cellSlideLength,
		borderRadius: 0.02 * gridContainerWidth
	});
}

function newgame() {
	//初始化棋盘格
	init();
	//在随机两个格子生成数字
	generateOneNumber();
	generateOneNumber();
}

function init() {
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			var gridCell = $("#grid-cell-" + i + "-" + j);
			gridCell.css('top', getPosTop(i, j));
			gridCell.css('left', getPosLeft(i, j));
		}
	}


	for (var i = 0; i < 4; i++) {
		//初始化每个棋盘的状态
		//当棋盘不为0时显示数字
		board[i] = [];
		//初始化碰撞状态
		//false表示该位置还未产生碰撞
		//一个位置只能产生一次碰撞
		hasConflicted[i] = []
		for (var j = 0; j < 4; j++) {
			board[i][j] = 0;
			hasConflicted[i][j] = false;
		}
	}

	updateBoardView();

	score = 0;
}

//更新棋盘中数的显示
function updateBoardView() {
	$(".number-cell").remove();
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			$("#grid-container").append('<div class="number-cell" id="number-cell-'+
			 i + '-' + j + '"></div');
			var theNumberCell = $("#number-cell-" + i + "-" + j);

			if (board[i][j] === 0) {
				theNumberCell.css('width', '0');
				theNumberCell.css('height', '0');
				theNumberCell.css('top', getPosTop(i, j) + (cellSlideLength/2));
				theNumberCell.css('left', getPosLeft(i, j) + (cellSlideLength/2));
			} else {
				// theNumberCell.css('width', cellSideLength);
				// theNumberCell.css('height', cellSideLength);
				// theNumberCell.css('top', getPosTop(i, j));
				// theNumberCell.css('left', getPosLeft(i, j));
				// theNumberCell.css('background', getNumberBackgroundColor( board[i][j]) );
				// theNumberCell.css('color', getNumberColor( board[i][j] ));
				// theNumberCell.text( board[i][j] );
				theNumberCell.css({
					width: cellSlideLength,
					height: cellSlideLength,
					top: getPosTop(i, j),
					left: getPosLeft(i, j),
					background: getNumberBackgroundColor( board[i][j] ),
					color: getNumberColor( board[i][j] )
				});
				theNumberCell.text( board[i][j] );
			}
			//初始化碰撞状态
			//新一轮操作开始前，初始化所有conflicted的值
			hasConflicted[i][j] = false;
		}
	}
	$(".number-cell").css({
		lineHeight: cellSlideLength + "px",
		fontSize: 0.6 * cellSlideLength + "px"
	});
}

//随机生成一个数字
function generateOneNumber() {
	//判断棋盘中还有没有空间
	if (nospace(board))
		return false;

	//随机一个位置
	var randx = Math.floor(Math.random() * 4);
	var randy = Math.floor(Math.random() * 4);

	//如果位置不为零则继续随机，直到生成为零的位置
	//优化while循环
	//当只剩少数空格子时，计算机需要很大的计算量才能碰巧随机生成一个空格子的坐标
	//我们人为规定只能进行50次随机，如果没有找到，则人工给出一个坐标
	var times = 0;
	while (times < 50) {
		if (board[randx][randy] === 0)
			break;

		randx = Math.floor(Math.random() * 4);
		randy = Math.floor(Math.random() * 4);

		times++;
	}

	//人工查找出一个空坐标
	if (times === 50) {
		for (var i=0; i<4; i++)
			for (var j=0; j<4; j++) {
				if (board[i][j] === 0) {
					randx = i;
					randy = j;
				}
			}
	}

	//随机一个数字, 2 或 4
	var randomNumber = Math.random() < 0.5 ? 2 : 4;

	//在随机位置上显示随机数字
	board[randx][randy] = randomNumber;
	showNumberWithAnimation(randx, randy, randomNumber);

	return true;
}

//响应键盘事件
$(document).keydown(function(event) {

	switch(event.keyCode) {
		case 37: //left

			//阻止该按键的默认事件
			event.preventDefault();

			if (moveLeft()) {
				setTimeout('generateOneNumber()',210);
				setTimeout('isGameOver()',300);
			}
			break;
		case 38: //up
			event.preventDefault();
			if (moveUp()) {
				setTimeout('generateOneNumber()',210);
				setTimeout('isGameOver()',300);
			}
			break;
		case 39: //right
			event.preventDefault();
			if (moveRight()) {
				setTimeout('generateOneNumber()',210);
				setTimeout('isGameOver()',300);
			}
			break;
		case 40: //down
			event.preventDefault();
			if (moveDown()) {
				setTimeout('generateOneNumber()',210);
				setTimeout('isGameOver()',300);
			}
			break;
		default:
			break;
	}
});

//滑动起点
document.addEventListener("touchstart", function (event) {
	startx = event.touches[0].pageX;
	starty = event.touches[0].pageY;
});

//阻止滑动的默认效果
document.addEventListener("touchmove", function(event) {
	event.preventDefault();
});

//滑动终点
document.addEventListener("touchend", function (event) {
	endx = event.changedTouches[0].pageX;
	endy = event.changedTouches[0].pageY;

	//判断方向
	var deltax = endx - startx;
	var deltay = endy - starty;
	var absDeltax = Math.abs(deltax);
	var absDeltay = Math.abs(deltay);

	//防止点击事件触发该事件
	if (absDeltax < 0.1 * documentWidth && absDeltay < 0.2 * documentWidth) {
		return;
	}
	//x
	//Math.abs 绝对值
	if (absDeltax >= absDeltay) {
		if (deltax > 0) {
			//move right
			if (moveRight()) {
				setTimeout('generateOneNumber()',210);
				setTimeout('isGameOver()',300);
			}
		} else {
			//move left
			if (moveLeft()) {
				setTimeout('generateOneNumber()',210);
				setTimeout('isGameOver()',300);
			}
		}
	}
	//y
	else {
		if (deltay > 0) {
			//move down
			if (moveDown()) {
				setTimeout('generateOneNumber()',210);
				setTimeout('isGameOver()',300);
			}
		} else {
			//move up
			if (moveUp()) {
				setTimeout('generateOneNumber()',210);
				setTimeout('isGameOver()',300);
			}
		}
	}
});

function isGameOver() {
	if (nospace(board) && nomove(board)){
		gameover();
	}
}

function gameover(){
	alert('gameover!');
}

function moveLeft() {
	if ( !canMoveLeft(board) )
		return false;

	//moveLeft
	for( var i = 0; i < 4; i ++ )
        for( var j = 1; j < 4; j ++ )
        	if (board[i][j] !== 0) {
        		for (var k=0; k < j; k++) {
        			if (board[i][k] === 0 && noBlockHorizontal(i, k, j, board)) {
        				//move
        				showMoveAnimation(i, j, i, k);
        				board[i][k] = board[i][j];
        				board[i][j] = 0;
        				continue;
        			}
        			else if (board[i][k] === board[i][j] && noBlockHorizontal(i, k, j, board) && !hasConflicted[i][k]) {
        				//move
        				showMoveAnimation(i, j, i, k);
        				//add
        				board[i][k] += board[i][j];
        				board[i][j] = 0;
        				//score
        				score += board[i][k];
        				updateScore(score);
        				//conflicted
        				//把位置的conflicted的值设为true后
        				//代表该位置已经发生碰撞，不能再产生第二次碰撞
        				hasConflicted[i][k] = true;
        				continue;
        			}
        		}
        	}
    setTimeout("updateBoardView()", 200);
	return true;
}

function moveRight() {
	if(!canMoveRight(board))
		return false;

	//moveRight
	for (var i = 0; i < 4; i++)
		for (var j = 2; j >= 0; j--)
			if (board[i][j] !== 0)
				for (var k = 3; k > j; k--) {
					if (board[i][k] === 0 && noBlockHorizontal(i, j, k, board)){
						//move
						showMoveAnimation(i, j, i, k);
						board[i][k] = board[i][j];
						board[i][j] = 0;
						continue;
					}
					else if (board[i][k] === board[i][j] && noBlockHorizontal(i, j, k, board) && !hasConflicted[i][k]){
						//move
						showMoveAnimation(i, j, i, k);
						//add
						board[i][k] += board[i][j];
						board[i][j] = 0;
						//score
        				score += board[i][k];
        				updateScore(score);
        				//conflicted
        				hasConflicted[i][k] = true;
						continue;
					}
				}
	setTimeout("updateBoardView()", 200);
	return true;
}

function moveUp() {
	if(!canMoveUp(board))
		return false;

	//moveUp
	for(var j = 0; j < 4; j++)
		for (var i = 1; i < 4; i++)
			if (board[i][j] !== 0)
				for (var k = 0; k < i; k++) {
					if (board[k][j] === 0 && noBlockVertical(k, i, j, board)) {
						//move
						showMoveAnimation(i, j, k, j);
						board[k][j] = board[i][j];
						board[i][j] = 0;
						continue;
					}
					else if (board[k][j] === board[i][j] && noBlockVertical(k, i, j, board) && !hasConflicted[k][j]) {
						//move
						showMoveAnimation(i, j, k, j);
						//add
						board[k][j] += board[i][j];
						board[i][j] = 0;
						//score
        				score += board[k][j];
        				updateScore(score);
        				//conflicted
        				hasConflicted[k][j] = true;
						continue;
					}
				}
	setTimeout("updateBoardView()", 200);
	return true;
}

function moveDown() {
	if (!canMoveDown(board))
		return false;

	//moveDown
	for (var j = 0; j < 4; j++)
		for (var i = 2; i >= 0; i--)
			if (board[i][j] !== 0)
				for (var k = 3; k > i; k--) {
					if (board[k][j] === 0 && noBlockVertical(i, k, j, board)) {
						//move
						showMoveAnimation(i, j, k, j);
						board[k][j] = board[i][j];
						board[i][j] = 0;
						continue;
					}
					else if (board[k][j] === board[i][j] && noBlockVertical(i, k, j, board) && !hasConflicted[k][j]) {
						//move
						showMoveAnimation(i, j, k, j);
						//add
						board[k][j] += board[i][j];
						board[i][j] = 0;
						//score
        				score += board[k][j];
        				updateScore(score);
        				//conflicted
        				hasConflicted[k][j] = true;
						continue;
					}
				}
	setTimeout("updateBoardView()", 200);
	return true;
}








