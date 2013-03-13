window.onload = function(){
	setInterval(function(){main();}, 150);
};

var pic1 = "./01.png";
var pic2 = "./02.png";
var pic3 = "./03.png";

var picArry = [pic1, pic2, pic3];

var newImgName = new Image();
newImgName.src = pic1;

var picArrsub = 0;

function main(){
	var cElem = document.getElementById("CANVAS");
	var cxt = cElem.getContext("2d");

	cxt.clearRect(0, 0, 300, 300); 
	cxt.drawImage(newImgName,100,100);
	cxt.save();
	//´¦ÀíÍ¼Æ¬

	if(picArrsub >= picArry.length - 1){
		picArrsub = 0;
	}else{
		picArrsub += 1;
	}

	newImgName.src = picArry[picArrsub];
}