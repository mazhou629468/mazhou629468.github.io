//获取类名
function getElmClassName(lei)
{
	var arr=[];
	var div=document.getElementsByTagName('div'); //获取div的所有类名为XXX的对象	
	for (var i = 0; i < div.length; i++) 
	{
		if(div[i].className==lei){
			arr.push(div[i]);
		}
	}
	return arr;
}
//导航
// function jump(){
// 	var nav_div=document.getElementById('nav').getElementsByTagName('div');
// 	var nav_ul=document.getElementById('nav').getElementsByTagName('ul')[0];
// 	var nav_li=document.getElementById('nav').getElementsByTagName('li');
// 	var nav_a=document.getElementById('nav').getElementsByTagName('a');
// 	for (var i=0;i<nav_li.length;i++){
// 		nav_li[i].index=i;
// 		nav_li[i].onmouseover=function(){
// 			for (var j=0;j<nav_div.length; j++) {
// 				nav_div[j].style.backgroundColor="";
// 				nav_a[j].style.color="";
// 			}
// 			nav_div[this.index].style.backgroundColor="rgb("+255+","+129+","+0+")";
// 			nav_a[this.index].style.color="rgb("+255+","+129+","+0+")";
// 		}
// 		nav_li[i].onmouseout=function(){
// 			for (var j=0;j<nav_div.length; j++) {
// 				nav_div[j].style.backgroundColor="";
// 				nav_a[j].style.color="";
// 			}
// 			nav_div[4].style.backgroundColor="rgb("+255+","+129+","+0+")";
// 			nav_a[4].style.color="rgb("+255+","+129+","+0+")";
// 		}
// 	}
// 	window.onload=function(){
// 		for (var j=0;j<nav_div.length; j++) {
// 				nav_div[j].style.backgroundColor="";
// 				nav_a[j].style.color="";
// 			}
// 		nav_div[4].style.backgroundColor="rgb("+255+","+129+","+0+")";
// 		nav_a[4].style.color="rgb("+255+","+129+","+0+")";
// 	}
// }
//现代简约风格
function modern_run()
{
	// var modern_img=document.getElementById('style1').getElementsByTagName('img');
	// var modern_div=getElmClassName('note');
	// var Morden=getElmClassName('Morden');
	// var style1=getElmClassName('style1')[0];
	// var modern_time=null;
	// var k=0;	
	// for(var i=0;i<modern_img.length;i++)
	// {
	// 	modern_img[i].index=i;
	// 	modern_img[i].onmouseover=function(){
	// 		clearInterval(modern_time);
	// 		for(var j=0;j<modern_div.length;j++){
	// 			if(j==this.index){
	// 				var order=this.index;
	// 				modern_time=setInterval(modern_move,1);
	// 				function modern_move(){
	// 					k--;
	// 					if(k==-232){
	// 						clearInterval(modern_time);
	// 					}
	// 					modern_div[order].style.top=k+232+"px";
	// 				}
	// 			}
	// 			else{
	// 				modern_div[j].style.top=233+"px";
	// 				k=0;
	// 			}
	// 		}
	// 	}
	// }

	$("#style1 ul li .img").mouseenter(function(){
		// console.log($("#style1 ul li .img div").eq($("#style1 ul li .img").index(this)));
		$("#style1 ul li .img div").eq($("#style1 ul li .img").index(this)).animate({
			top:"0px"
		},1000);
	});
	$("#style1 ul li .img").mouseleave(function(){
		$("#style1 ul li .img div").eq($("#style1 ul li .img").index(this)).animate({
			top:"232px"
		},1);
	});
}
//欧式风格
function European_run(){
	var big_pic=document.getElementById('big_pic');
	var big_inner=document.getElementById('big_inner');
	var big_img=document.getElementById('big_inner').getElementsByTagName('img');

	var small_pic=document.getElementById('small_pic');
	var small_img=document.getElementById('small_pic').getElementsByTagName('img');
	
	var left=getElmClassName('left')[0];
	var right=getElmClassName('right')[0];
	var timer=null;
	var flag=true;
	var speed=8;

	big_pic.style.width=big_img[0].offsetWidth+"px";
    big_inner.style.width=big_img[0].offsetWidth*big_img.length+'px';

	function time(){
		timer=setInterval(move,1);
	}
	timer = setTimeout(time,1000);

	function move()
	{
		//console.log(big_pic.scrollLeft);
		var maxWidth=big_inner.offsetWidth-big_pic.offsetWidth;
		big_pic.scrollLeft+=speed;
		//console.log(big_pic.scrollLeft%big_img[0].offsetWidth);
		if(big_pic.scrollLeft%big_img[0].offsetWidth== 0)
		{
			clearInterval(timer);
			timer = setTimeout(time,1000);
		}
		if(flag)
		{
			if (big_pic.scrollLeft>=maxWidth) 
			{
				big_pic.scrollLeft=0;
			}
		}
		else
		{
			if (big_pic.scrollLeft<=0) 
			{
				big_pic.scrollLeft=maxWidth;
			}
		}
		for (var i = 0; i < small_img.length; i++) 
		{
			order=Math.floor(big_pic.scrollLeft/big_img[0].offsetWidth);//图片相应次序
			if(order==6){
				small_img[0].style.opacity=1;
			}
			else{
				//console.log(order);
				if(i==order){
					small_img[i].style.opacity=1;
				}
				else
				{
					small_img[i].style.opacity=0.3;
				}
			}
		}
	}

	big_pic.onmouseover=function(){
		clearInterval(timer);
		for (var i = 0; i < small_img.length; i++) 
		{
			order=Math.floor(big_pic.scrollLeft/big_img[0].offsetWidth);//图片相应次序
			if(order==6){
				small_img[0].style.opacity=1;
			}
			else{
				//console.log(order);
				if(i==order){
					small_img[i].style.opacity=1;
				}
				else
				{
					small_img[i].style.opacity=0.3;
				}
			}
		}
	}
	big_pic.onmouseout=function(){
		clearInterval(timer);
		timer = setTimeout(time,500);
	}

	left.onclick=function(){
		flag=false;
		speed=-8;
		//console.log(speed);
	}
	right.onclick=function(){
		flag=true;
		speed=8;
		//console.log(speed);
	}

	for (var i = 0; i < small_img.length; i++) {
		small_img[i].index=i;
		small_img[i].onmouseover=function(){
			for (var j = 0; j < small_img.length; j++) 
			{
				small_img[j].style.opacity=0.3;
				if(j==this.index)
				{
					small_img[this.index].style.opacity=1;	
					big_pic.scrollLeft=j*big_img[0].offsetWidth;
					clearInterval(timer);
					timer = setTimeout(time,1000);				
				}
			}
		}
	}
	
	small_pic.onmouseout=function(){
		for (var i = 0; i < small_img.length; i++) {
			small_img[i].style.opacity=0.3;
		}
	}
}
//古典风格
function chinese_run(){
	var turn = function(target,time,opts){
		target.find('a').hover(function(){
			$(this).find('img').stop().animate(opts[0],time,function(){
				$(this).hide().next().show();
				$(this).next().animate(opts[1],time);
			});
		},function(){
			$(this).find('.info').animate(opts[0],time,function(){
				$(this).hide().prev().show();
				$(this).prev().animate(opts[1],time);
			});
		});
	}
	var verticalOpts = [{'width':0},{'width':'280px'}];
		turn($('#vertical'),100,verticalOpts);
		var horizontalOpts = [{'height':0,'top':'120px'},{'height':'240px','top':0}];
		turn($('#horizontal'),100,horizontalOpts);
}
//田园风格
function Country(){
	var Country1=document.getElementById('Country1');
	var Country1_inner=document.getElementById('Country1_inner');	
	var Country1_img=document.getElementById('Country1').getElementsByTagName('img');
	Country1_inner.innerHTML+=Country1_inner.innerHTML;
	var Country1_time;

	var Country2=document.getElementById('Country2');
	var Country2_inner=document.getElementById('Country2_inner');
	var Country2_img=document.getElementById('Country2').getElementsByTagName('img');
	Country2_inner.innerHTML+=Country2_inner.innerHTML;
	var Country2_time;

	Country1.style.width=Country1_img[0].offsetWidth*Country1_img.length/4+"px";
	Country1_inner.style.width=Country1_img[0].offsetWidth*Country1_img.length+"px";

	Country2.style.width=Country2_img[0].offsetWidth*Country2_img.length/4+"px";
	Country2_inner.style.width=Country2_img[0].offsetWidth*Country2_img.length+"px";

	Country1_time=setInterval(Country1_move,2);
	function Country1_move(){
		Country1.scrollLeft++;
		if (Country1.scrollLeft>=Country1_inner.offsetWidth-Country1.offsetWidth) 
		{
			Country1.scrollLeft=0;
		}
	}
	Country2_time=setInterval(Country2_move,2);
	function Country2_move(){
		Country2.scrollLeft--;
		if (Country2.scrollLeft<=0) {
			Country2.scrollLeft=Country2_inner.offsetWidth-Country2.offsetWidth;
		}
	}
	Country1.onmouseover=function(){
		clearInterval(Country1_time);
	}
	Country1.onmouseout=function(){
		clearInterval(Country1_time);
		Country1_time=setInterval(Country1_move,2);
	}
	Country2.onmouseover=function(){
		clearInterval(Country2_time);
	}
	Country2.onmouseout=function(){
		clearInterval(Country2_time);
		Country2_time=setInterval(Country2_move,2);
	}
}
//返回顶部
function product_return(){
	var product_top=document.getElementById('product_top');
	product_top.onclick = function(){
		sct = document.body.scrollTop||document.documentElement.scrollTop;
		return_time = setInterval(top_back,1);
	}
	function top_back(){
		sct-=10;
		document.body.scrollTop=sct;
		document.documentElement.scrollTop=sct;
		window.pageYOffset=sct;
		if(sct<=0){
			clearInterval(return_time);
		}
	}
}
