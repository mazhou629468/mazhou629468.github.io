window.onload=function(){
	$("body").css({display:"block"});
	$.noConflict();//释放$符号
//zoom代码
//	var wid =document.documentElement.clientWidth;
//			var scale = wid/640;
//			document.body.style.zoom = scale;			
//			window.onresize = function(){
//			var wid =document.documentElement.clientWidth;
//			var scale = wid/640;
//			document.body.style.zoom = scale;
//		}
	//轮播图
	var outer=document.getElementById('outer');
	var inner=document.getElementById('inner');
	var img=inner.getElementsByTagName('img');
	var btn=outer.getElementsByTagName('li');
	var left=document.getElementById('left');
	var right=document.getElementById('right');
	var k=1;
	var num=btn.length;
	var imgwidth=parseInt(img[0].offsetWidth);
	var T=true;	
	function rightMove(){
		k++;
		if(k>num){k=1;}
		if (T) {
			move(-imgwidth);
		};	
		showbtn();
	}
	$('#outer').swipeLeft(rightMove);
	$('#outer').swipeRight(function (){
		k--;
		if(k<1){k=num;}
		if (T) {
			move(imgwidth);	
		};		
		showbtn();
	});

	function showbtn(){
		for(var i=0;i<num;i++){
			btn[i].className='';
		}
		btn[k-1].className='on';
	}
	function move(x){
		T=false;
		var newx=parseInt(inner.style.left)+x;
		var speed=x/32;
		go_on();
		function go_on(){
			if((speed<0&&parseInt(inner.style.left)>newx)||(speed>0&&parseInt(inner.style.left)<newx)){
				inner.style.left=speed+parseInt(inner.style.left)+'px';
				setTimeout(go_on,10);
			}else{
				T=true;
				if(newx<-imgwidth*num){
					inner.style.left=-imgwidth+'px';
				}else if(newx>-imgwidth){
					inner.style.left=-imgwidth*num+'px';
				}else{
					inner.style.left=newx+'px';
				}	
			}			
		}		
	}
	for(var i=0;i<num;i++){
		btn[i].onclick=function(){
			if(this.className=='on'){return;}
			var myindex=parseInt(this.getAttribute('index'));
			var x=-imgwidth*(myindex-k);
			move(x);
			k=myindex;
			showbtn();
		}
	}
	function play(){
			setTimeout(function(){
			rightMove()
			play();
		},5000);		
	}
	play();	
		
// 返回顶部
(function(){
		var up = document.getElementById('up');
		$(window).scroll(function(){
			var winT = $(window).scrollTop();
			var winH = $(window).height()/2;
			if(winT>winH){
				up.style.display = 'block';
			}else{
				up.style.display = 'none';
			}
		})
		$('#up').click(function(){		
			 jQuery("body,html").animate({
        		  scrollTop: 0
      		  },1000);return false;
			
		})
	})()
}