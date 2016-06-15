//var	pic1=document.getElementsByClassName("pic");
	//var span=document.getElementsByClassName("txt");
	var img1=document.getElementById("fifths").getElementsByTagName("img");
	var li1=document.getElementById("fifths").getElementsByTagName("li");
	var t1=document.getElementById("mouse");
	var outer=document.getElementById('outer');
	var top=document.getElementById("top");
	var img2=document.getElementById("top").getElementsByTagName("img");
	var left=document.getElementById("left");
	var right=document.getElementById("right");
	var span1=document.getElementById("btm").getElementsByTagName("span");
	var div1=document.getElementById("btm").getElementsByTagName("div");

	var speed=30;
	var r=0;
	var l=0;
	var timer=null;
	var time1=null;
	var timel=null;
	var time=null;
	timer=setInterval(mover,2000);
	div1[0].style.background="rgba(255,255,255,0)";
	function mover(){
		clearInterval(time1);
		$("#outer").stop(true,true);
		for(var i=0;i<div1.length;i++){
			div1[i].style.background="rgba(0,0,0,0.7)";
		}
		scrollr(r);
		r++;
		if(r>=4){
			r=0;
		}
		div1[r].style.background="rgba(255,255,255,0)";
	}
	function scrollr(r){
		var starr=r*1000;
		var endr=(r+1)*1000;
		time1=setInterval(yidongr,20);
		function yidongr(){
			starr+=speed;
			if(starr>endr){
				starr=endr;
				clearInterval(time1)
			}
			outer.scrollLeft=starr;
		}
	}
	function movel(){
		for(var i=0;i<div1.length;i++){
			div1[i].style.background="rgba(0,0,0,0.7)";
		}
		l--;
		if(l<=0){
			l=4;
		}
		console.log(l);
		scrolll(l);
		div1[l-1].style.background="rgba(255,255,255,0)";
	}
	function scrolll(l){
		var starl=l*1000;
		var endl=(l-1)*1000;
		time1=setInterval(yidongl,20);
		function yidongl(){
			starl-=speed;
			if(starl<=endl){
				starl=endl;
				clearInterval(time1);
			}
			outer.scrollLeft=starl;
		}
	}	
	function clear(){
		clearInterval(timel);
		clearInterval(timer);
		clearInterval(time1);
		clearInterval(time);
	}
	left.onclick=function(){
		clear();
		l=r+1;
		movel();
		r=l-1;
	}
	right.onclick=function(){
		clear();
		mover();
	}
	t1.onmouseleave=function(){
		clear();
		timer=setInterval(mover,2500);
	}
	t1.onmouseenter= function(){
		clear();
	}
	btm.onmouseleave= function(){
		clear();
		timer=setInterval(mover,2500);
	}
	for(var i=0;i<div1.length;i++){
		div1[i].index=i;
		div1[i].onclick=function(){
			clear();
			for(var i=0;i<div1.length;i++){
				div1[i].style.background = "rgba(0,0,0,0.7)";
			}
			scroll(this.index);
			console.log(this.index)
			r=this.index;
			l=this.index+1;
			div1[this.index].style.background = "rgba(255,255,255,0)";
		}
	}
	function scroll(x){
		var startx = outer.scrollLeft;
		var endx = x*1000;
		var speed1= (endx-startx)/20;
		function move(){
			startx += speed1;
			outer.scrollLeft = startx;
			if(startx>=endx&&speed1>0){
				clearInterval(time);
			}
			if(startx<=endx&&speed1<0){
				clearInterval(time);
			}
		}
		time = setInterval(move,20);
	}
//var i=1;
//time=setInterval(lunbo,2000);
//function lunbo(){
//	$("#btm div").css({
//		background:"rgba(0,0,0,0.7)"
//	})
//	$("#btm div").eq(i).css({
//		background:"rgba(0,0,0,0)"
//	})
//	if(i>=4){
//		i=0;
//	}
//	$("#top img").eq(0).animate({opacity:0},100)
//	$("#top img").eq(i).animate({opacity:1},749).delay(1250).animate({opacity:0},1)
//	i++;
//}
//$("#btm>div").each(function(){
//	$(this).click(function(){
//		clearInterval(time);
//		$("#btm>div").css({
//			background:"rgba(0,0,0,0.7)"
//		})
//		$("#top img").animate({opacity:0},100);
//		$(this).css({
//			background:"rgba(0,0,0,0)"
//		})
//		$("#top img").eq(Math.floor($(this).index()/2)).animate({opacity:1},100)
//		
//	
//})
//})
//$("#btm,#top").mouseover(function(){
//	clearInterval(time);
//})
//$("#btm").mouseleave(function aa(){
//		clearInterval(time);
//		$("#top img").animate({opacity:0},100)
//		lunbo();
//		time=setInterval(lunbo,2000);
//		})
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
		var verticalOpts = [{'width':0},{'width':'150px'}];
		turn($('#vertical'),100,verticalOpts);
		var horizontalOpts = [{'height':0,'top':'100px'},{'height':'200px','top':0}];
		turn($('#horizontal'),100,horizontalOpts);
		
	var backtop=document.getElementById("backtop");
	var s=20;
		backtop.onclick=function(){
			var	scrollTop=document.body.scrollTop||window.pageYOffset||document.documentElement.scrollTop;
			console.log(scrollTop)
			time=setInterval(back,1);
			function back(){
			scrollTop-=s;
			if(scrollTop<0){
					clearInterval(time);
			}
			console.log(scrollTop);
			document.body.scrollTop=scrollTop;
			document.documentElement.scrollTop=scrollTop;
			window.pageYOffset=scrollTop;
			}
	}
	$(".pic .txt").each(function(){
		$(".pic").hover(function(){
			$(this).css({
				outline:"10px solid black"
			})
			$(this).find(".txt").animate({top:'80px'},150);
		},function(){
			$(this).css({
				outline:""
			})
			$(this).find(".txt").animate({top:'160px'},100);
		})
	})
	



