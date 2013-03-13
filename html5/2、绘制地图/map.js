var i;
var j;

window.onload = function (){
	gamemap();
}

//创建构成地图的二维数组
var mapimg = new Image();
var map = [
	[2,2,3,3,0,0,2,2,2,3,3,3,2],
	[2,0,3,3,0,0,0,0,0,0,0,0,0],
	[2,0,0,0,0,0,0,0,0,0,0,0,2],
	[2,0,0,0,0,0,0,0,0,0,3,0,2],	
	[1,3,0,0,0,0,0,0,0,0,2,0,2],
	[1,3,0,0,0,0,2,2,3,3,2,0,2],
	[2,1,1,1,0,0,0,0,0,0,0,0,3],
	[2,1,1,1,0,0,0,0,0,0,0,0,3],
	[0,0,0,1,0,0,1,1,2,2,3,0,0],
	[2,0,0,1,0,0,0,0,0,0,0,0,0],
	[3,0,0,1,1,1,0,0,1,1,1,0,1],
	[3,0,0,0,0,0,0,0,0,0,0,0,1],
	[2,2,2,2,2,3,3,3,0,0,1,1,1],
];


function gamemap(){
	var canvas = document.getElementById("map");
	var context = canvas.getContext("2d");
	
	mapimg.src = "./map.png";	

	mapimg.onload = function(){
		//画一个长416，宽416的矩形
		context.fillRect(0, 0, 1416, 1416);
		//循环调用绘制地图的函数，直到画完为止
		for(i = 0; i < 13; i++){
			for(j = 0; j < 13; j++){
				drawTile(i*32, j*32, map[j][i]);
			}
		}
		
	}
}

//画地图的函数
function drawTile(x, y, type){
	var canvas = document.getElementById("map");
	var context = canvas.getContext("2d");
	context.drawImage(mapimg, type*32, 0, 32, 32, x, y, 32, 32);
}
