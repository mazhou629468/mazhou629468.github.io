$(document).ready(function(){
var daTu1=$("#head_cen_2 .head_cen_211");
var daTu2=$("#head_cen_2 .head_cen_211_1")
var lRLi=document.getElementById("head_cen_2_2").getElementsByTagName("li");
var daTu11=$("#head_cen_3 .head_cen_211");
var daTu22=$("#head_cen_3 .head_cen_211_1")
var lRLi1=document.getElementById("left");
var lRLi2=document.getElementById("rigth1");
var lizia=$("#ul1 .lizia")
var divh=$("#ul1 .divh")
var gonGao=document.getElementById("head_cen_5");
var gongGao1=document.getElementById("head_cen_51");
var qiye=document.getElementById("head_cen_7_3");
var qiyezi=document.getElementById("head_cen_7_3_1");
var spanShow=$("span")
var time=null;
var timer=null;
function lRliL(){
	for (i=0; i<daTu1.length; i++) {
		 daTu1[i].scrollLeft+=10;
	 if (daTu1[i].scrollLeft%daTu1[i].offsetWidth==0) {
			clearInterval(time)
			 };
			 if (daTu1[i].scrollLeft==daTu2[i].offsetWidth-daTu1[i].offsetWidth) {
			 	daTu1[i].scrollLeft=0;
			 };
	}
}
 function lRliR(){
 	for (i=0; i<daTu2.length; i++) {
 		if (daTu1[i].scrollLeft<=0) {
				daTu1[i].scrollLeft=daTu2[i].offsetWidth-daTu1[i].offsetWidth
			};
	daTu1[i].scrollLeft-=10
	if ((daTu1[i].scrollLeft-daTu1[i].offsetWidth)%daTu1[i].offsetWidth==0){
			clearInterval(time)
		}
	
	}		
}
lRLi[0].onclick=function(){
	for (d=2;d<26;d++) {
		spanShow[d].style.display="none"
	}
	$("#head_cen_2 span").fadeIn("slow");
 clearInterval(time)
	time=setInterval(lRliL,1)
}
lRLi[1].onclick=function(){
	for (d=2;d<26;d++) {
		spanShow[d].style.display="none"
	}
	$("#head_cen_2 span").fadeIn("slow");
 clearInterval(time)
	time=setInterval(lRliR,1)
}
 
var z=0;
setInterval(zhuan,50)
function zhuan(){
		z++
		for (s=0;s<divh.length;s++) {
			lizia[s].style.transform="rotatex("+z+"deg)";
		divh[s].style.transform="rotatex("+z+"deg)";
		}
		if (z>360) {
			z=0
		};
	}
setInterval(gao,40);
function gao(){
	gonGao.scrollTop++;
	if (gonGao.scrollTop>1200) {
		gonGao.scrollTop=0
	}
}
var qian=true;
var speed1=1;
//	leftqi.onclick=function(){
//		qian=false
//		speed1=-1
//		}
	$("#head_cen_7_2").click(function(){
		qian=false
		speed1=-1
	})
//	rigthqi.onclick=function(){
//		qian=true
//		speed1=1
//	}
	$("#head_cen_7_4").click(function(){
		qian=true
		speed1=1
	})
	timer=setInterval(aa1,10)
function aa1(){
	qiye.scrollLeft+=speed1;
	if (qian) {
		if (qiye.scrollLeft>=qiyezi.offsetWidth-qiye.offsetWidth) {
			qiye.scrollLeft=0
	};
}else{
	if (qiye.scrollLeft<=0) {
		qiye.scrollLeft=qiyezi.offsetWidth-qiye.offsetWidth
	};
};
}
var tops=document.getElementById("stop");
var timerr=null;
tops.onclick=function(){
	scroll=document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset
	timerr=setInterval(topa,1)
}
function topa(){
				scroll-=40;
				document.body.scrollTop=scroll;
			document.documentElement.scrollTop=scroll;
			window.pageYOffset=scroll;
				if (scroll<=0) {
					clearInterval(timerr)
				};
			}

$("span").fadeIn("slow");


$("#posxia").mouseover(function(){
	$("#posxia img").attr({src:"img/xialaa1.png"})
})

$("#posxia").mouseout(function(){
	$("#posxia img").attr({src:"img/xialaa.png"})
})

	window.onscroll=function(){
			scroll=document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset
			if (scroll>200) {
				
				$("#showhd").slideDown(500)
				$("#posxia").hide()
				$("#stop").show()
			}else{
				$("#showhd").slideUp(500)
				$("#posxia").show()
				$("#stop").hide()
			}
		};
	
	$("#posxia").click(function(){
//		alert()
		$("#showhd").slideDown(500)
//		$("#posxia").hide(2000)
//		$("#stop").show(2000)
	})
	
})