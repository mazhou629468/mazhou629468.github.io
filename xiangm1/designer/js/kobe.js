var zsinner=document.getElementById("zsinner");
var zsouter=document.getElementById("zsouter");
var innerimg=document.getElementById("zsinner").getElementsByTagName("img");
var btnimg=document.getElementById("zsbtn").getElementsByTagName("img");
var zpyd=20;
var zpydt=null;
var zpwid=zsinner.offsetWidth-zsouter.offsetWidth;
var zptime=null;
var btnimgt=0;
var btnimgtime=null;
btnimg[0].style.border="4px solid gold";
zptime=setTimeout(zpgotime,0);
function zpgotime(){
	btnimgtime=setInterval(btnimggo,3000)
};
function btnimggo(){
//	console.log(zsouter.scrollLeft,innerimg[0].offsetWidth)
	clearInterval(zpydt);
	function innerimggo(){
		zsouter.scrollLeft+=zpyd;
		if(zsouter.scrollLeft==zpwid){
			zsouter.scrollLeft=0;
		};
		
		if(zsouter.scrollLeft%innerimg[0].offsetWidth == 0){
			clearInterval(zpydt);
			clearInterval(btnimgtime);
			clearTimeout(zptime);
			zptime=setTimeout(zpgotime,0);
		}
	}zpydt=setInterval(innerimggo,1);
	for (var i=0;i<btnimg.length;i++) {
		btnimg[i].style.opacity="0.38";
		btnimg[i].style.border="none";
		btnimg[i].onmouseover = function(){
			clearInterval(zpydt);
			clearInterval(btnimgtime);
			clearTimeout(zptime);
			for(var i=0;i<btnimg.length;i++){
				if(this==btnimg[i] ){
					btnimg[i].style.opacity="1";
					btnimg[i].style.border="4px solid gold";
					zsouter.scrollLeft=i*innerimg[0].offsetWidth;
					btnimgt=i;
				}else{
					btnimg[i].style.opacity="0.38";
					btnimg[i].style.border="none"
				};
			}
			this.onmouseout=function(){
				clearInterval(zpydt);
				clearTimeout(zptime);
				clearInterval(btnimgtime);
				zptime=setTimeout(zpgotime,0);
			}
		}
	};
	if (btnimgt>=3) {
		btnimgt=-1;
	}
	btnimgt++;
	btnimg[btnimgt].style.opacity="1";
	btnimg[btnimgt].style.border="4px solid gold";
}
$(".hdnrt1").mousemove(function(){
	$(".hdnr1z").slideDown(100)
});
$(".hdnr1z").mouseout(function(){
	$(".hdnr1z").slideUp(100)
})
$(".hdnrt2").mousemove(function(){
	$(".hdnr2z").slideDown(100)
});
$(".hdnr2z").mouseout(function(){
	$(".hdnr2z").slideUp(100)
});
$(".hdnrt3").mousemove(function(){
	$(".hdnr3z").slideDown(100)
});
$(".hdnr3z").mouseout(function(){
	$(".hdnr3z").slideUp(100)
})
var ljjs=document.getElementsByClassName("ljjs");
var ljtx=document.getElementById("ljtx").getElementsByTagName("li");
for (var i=0;i<ljtx.length;i++) {
	ljtx[i].onmousemove=function(){
		for (var i=0;i<ljtx.length;i++) {
			ljtx[i].style.width=100+"px";
			ljtx[i].style.height=100+"px";
			ljjs[i].style.visibility="hidden";
			if (this==ljtx[i]) {
				ljtx[i].style.width=180+"px";
				ljtx[i].style.height=180+"px";
			}
			if(this==ljtx[i]){
				ljjs[i].style.visibility="visible";
			}
		}
	}
}
var toback=document.getElementById("back");
var toptime=null;
toback.onmousemove=function(){
	toback.style.backgroundColor="red";
}
toback.onmouseout=function(){
	toback.style.backgroundColor="#2651aa";
}
toback.onclick=function(){
	toptime=setInterval(tobacktime,1);
}
function tobacktime(){
	var scrolltop = document.body.scrollTop || window.pageYOffset||document.documentElement.scrollTop;
	scrolltop-=10;
	document.documentElement.scrollTop=scrolltop;
	window.pageYOffset=scrolltop;
	document.body.scrollTop=scrolltop;
	if(scrolltop<=0){
		clearInterval(toptime)
	}
}
// window.onload=function(){
// 	var wid=document.documentElement.clientWidth;
// 	var scale=wid/1500;
// 	document.body.style.zoom=scale;
// }
// window.onresize=function(){
// 	var wid=document.documentElement.clientWidth;
// 	var scale=wid/1500;
// 	document.body.style.zoom=scale;
// }