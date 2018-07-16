var oDiv = document.getElementById("figure");
var imglist = oDiv.getElementsByTagName("img");
//console.log(imglist.length);
var oBtn = document.getElementById("control-btn");
var btnlist = oBtn.getElementsByTagName("span");
var oCircle = document.getElementById("control-circle");
var circlelist = oCircle.getElementsByTagName("li");
imglist[0].style.display = "block";
circlelist[0].className = "on";
var index = 0;
var length = imglist.length-1;
var timer;
startlunbo();
//自动轮播
function startlunbo(){
	timer = setInterval(function(){
		bannerimg();
	},3000);
}
//左右按钮切换
btnlist[0].onclick = function(){
	imglist[index].style.display="none";
	circlelist[index].className = "";
	index = index<=0?length:--index;
	imglist[index].style.display="block";
	circlelist[index].className = "on";
}
btnlist[1].onclick = function(){
	bannerimg();
}
btnlist[0].onmouseover = function(){
	clearInterval(timer);
}
btnlist[1].onmouseover = function(){
	clearInterval(timer);
}
btnlist[0].onmouseout = function(){
	startlunbo();
}
btnlist[1].onmouseout = function(){
	startlunbo();
}
function bannerimg(){
	imglist[index].style.display="none";
	circlelist[index].className = "";
	index = index>=length?0:++index;
	imglist[index].style.display="block";
	circlelist[index].className = "on";
}
//鼠标点击圆点控制轮播图
for(var i =0;i <= length; i++){
	circlelist[i].num = i;
	circlelist[i].onclick = function(){
		clearInterval(timer);
		index = this.num;
		for(var j=0;j<=length;j++){
			circlelist[j].className = "";
			imglist[j].style.display = "none";
		}
		this.className = "on";
		imglist[this.num].style.display = "block";
		startlunbo();
	}
}
