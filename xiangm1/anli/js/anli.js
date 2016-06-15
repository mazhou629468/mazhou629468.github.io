	//变量声明
	var pic=document.getElementById("pic");
	var img=pic.getElementsByTagName('img');
	var span=document.getElementById("datu").getElementsByTagName("span");
	var autoNum=0;//img标签的编号
	var imgWidth=1000;
	var time=null;
	var time2=null;//第二个计时器
	/* 一次完整的图片滚动，封装成函数，方便调用*/
	function moveTo(startPos,endPos){
		if(time){
			clearInterval(time);
		}
		var startPos=startPos;
		var endPos=endPos;
		var step=0;
		var stepMax=10;
		var speed=(endPos-startPos)/stepMax;
		//stepMax表示此次滚动需要几步去完成
		time=setInterval(move,25);
		function move () {
			step++;
			pic.scrollLeft+=speed;
			if(step==stepMax){
				pic.scrollLeft=endPos;//因为js的小数点计算误差,
				//让pic.scrollLeft有一个确定的数值endPos;保证可以到达终点
				clearInterval(time);
			}
		}
	}
	
	/*控制自动运动*/
	function autoMove(){
		autoNum++;

		if(autoNum==img.length){
			autoNum=0;
		}
		//向左切换时会减2，当达到临界值-1时，等于img.length-1，即最后一张图片的编号
		if (autoNum==-1) {
			autoNum=img.length-1;
		}
		spancolor();
		
		moveTo(pic.scrollLeft,imgWidth*autoNum);
		//从当前位置运动到相应整数倍位置。pic.scrollLeft在完成一次图片的运动时pic.scrollLeft=endPos
	}
	window.onload=function(){
		time2=setInterval(autoMove,3000);//调用计时器2
		tt2=setInterval(numMove,3500);
	}
	
	//左右点击切换
	span[0].onclick=function(){
		clearInterval(time2);//清除当前运动的计时器
		autoNum-=2;//向左运动，因为autoMove会加1，所以要减2
		autoMove();//点击向左之后，调用autoMove()可以立即切换,不调用autoMove()，下一步的计时器2也能切换，却会延迟
		time2=setInterval(autoMove,3000);//重新启动计时器2
	}
	span[span.length-1].onclick=function(){
		clearInterval(time2);
		autoMove();//autoMove()中会加1，所以直接调用
		time2=setInterval(autoMove,3000);
	}

	//实现序号点击切换
	for (var i = 1; i < span.length-1; i++) {//1234
		span[i].onclick=function(){
			clearInterval(time2);
			for(var j=1;j<span.length-1;j++){
				if(this==span[j]){
					autoNum=j-1;//序号autoNum和span标签编号相差1
					spancolor();//调用让序号改变颜色
					moveTo(pic.scrollLeft,imgWidth*autoNum);
					//此处直接调用moveTo()函数，设置了autoNum之后
				}
			}
			time2=setInterval(autoMove,3000);//运动完成，重启计时器
		}
	};

	//序号改变颜色
	function spancolor(){
		for (var k = 1; k < span.length-1; k++) {
			span[k].style.color="black";
			span[k].style.background="#EB5E44"
		};
		span[autoNum+1].style.color="red";
		span[autoNum+1].style.background="yellow"
	}
	datu.onmouseenter = function(){
		clearInterval(time2);
		jt_l.style.display="block";
		jt_r.style.display="block";
	}
	datu.onmouseleave = function(){
		time2=setInterval(autoMove,3000);
		jt_l.style.display="none";
		jt_r.style.display="none";
	}
	
	/*设计师部分图片滚动 */
	var divL=document.getElementById("team_l");
	var divR=document.getElementById("team_r");
	var person=document.getElementById("team_child").getElementsByTagName("ul");
	var par=document.getElementById("team_par");
	var personNum=0;
	var divWidth=140;//设计师的div宽度
	var tt=null;
	var tt2=null;//第二个计时器
	/* 一次完整的图片滚动，封装成函数，方便调用*/
	function runTo(startPos,endPos){
		if(tt){
			clearInterval(tt);
		}
		var startPos=startPos;
		var endPos=endPos;
		var step=0;
		var stepMax=8;
		var speed=(endPos-startPos)/stepMax;
		//stepMax表示此次滚动需要几步去完成
		tt=setInterval(move,25);
		function move () {
			step++;
			par.scrollLeft+=speed;
			if(step==stepMax){
				par.scrollLeft=endPos;//因为js的小数点计算误差,
				//让pic.scrollLeft有一个确定的数值endPos;保证可以到达终点
				clearInterval(tt);
			}
		}
	}
	
	/*控制自动运动*/
	function numMove(){
		personNum++;

		if(personNum==(person.length/2)+1){
			personNum=0;
		}
		//向左切换时会减2，当达到临界值-1时，等于person.length-1，即最后一张图片的编号
		if (personNum==-1) {
			personNum=(person.length/2)-1;
		}
		
		runTo(par.scrollLeft,divWidth*personNum);
		//从当前位置运动到相应整数倍位置。pic.scrollLeft在完成一次图片的运动时pic.scrollLeft=endPos
	}
	
	//左右点击切换
	divL.onclick=function(){
		clearInterval(tt2);//清除当前运动的计时器
		personNum-=2;//向左运动，因为autoMove会加1，所以要减2
		numMove();//点击向左之后，调用autoMove()可以立即切换,不调用autoMove()，下一步的计时器2也能切换，却会延迟
		tt2=setInterval(numMove,3500);//重新启动计时器2
	}
	divR.onclick=function(){
		clearInterval(tt2);
		numMove();//numMove()中会加1，所以直接调用
		tt2=setInterval(numMove,3500);
	}
	par.onmouseenter = function(){
		clearInterval(tt2);
	}
	par.onmouseleave = function(){
		tt2=setInterval(numMove,3500);
	}
	
	/* 返回顶部按钮*/
	var ret=document.getElementById("fanhui");
	var timeUP=null;
	window.onscroll=function  () {
		//获取scrollTop的兼容写法
		var sc=document.body.scrollTop
		||window.pageYOffset
		||document.documentElement.scrollTop;
		var speed=sc/50;//，滑动的距离不同，返回时的速度不同
		ret.onclick=function(){
			timeUP=setInterval(move,10);
			function move(){
				sc-=speed;
				//兼容写法
				document.documentElement.scrollTop=sc;
				window.pageYOffset=sc;
				document.body.scrollTop=sc;
				if(sc<=0){
					clearInterval(timeUP);
				}
			}
		}
	}

/*jquery部分*/
$('.act_fir div').mouseenter(function(){
	$(this).children("img").first().fadeIn(1000);
	$(this).children("img").last().fadeOut(1000);	
});
$('.act_fir div').mouseleave(function(){
	$(this).children("img").eq(1).fadeIn(1000);
	$(this).children("img").eq(0).fadeOut(1000);	
});
$('.act_sec div').mouseenter(function(){
	$(this).children("img").first().fadeIn(1000);
	$(this).children("img").last().fadeOut(1000);	
});
$('.act_sec div').mouseleave(function(){
	$(this).children("img").eq(1).fadeIn(1000);
	$(this).children("img").eq(0).fadeOut(1000);	
});
