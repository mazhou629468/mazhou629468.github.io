window.onload=function(){
	//轮播图
	function getLunBo(idouter,idouter_ul,outerelement,idinner,innerelement){
		var idouter=document.getElementById(idouter);
		var idouterelement=document.getElementById(idouter_ul).getElementsByTagName(outerelement);
		var idinnerelement=document.getElementById(idinner).getElementsByTagName(innerelement);
		//var e=idinner.offsetWidth-idouter.offsetWidth;
		//	console.log(idinner.offsetWidth);
		//	console.log(idinner)
		//	console.log(e);
		var time_lunbo;
		time_lunbo=setTimeout(run,3000);
		function run(){
			time_lunbo=setInterval(move,1);
		}
		function shang(i){
			for(var i=0;i<idinnerelement.length-1;i++){
				if(idouter.scrollLeft/idinnerelement[0].offsetWidth==i){
					idouterelement[i].style.background="#fe7101";
				}else{
					idouterelement[i].style.background="#f8f8f8";
				}
			}
		}
		function move(){
			idouter.scrollLeft+=10;
			shang(0);
			shang(1);
			shang(2);
			if(idouter.scrollLeft>idinnerelement[0].offsetWidth*2){
				idouterelement[0].style.background="#fe7101";
				idouterelement[1].style.background="#f8f8f8";
				idouterelement[2].style.background="#f8f8f8";
			}
			if(idouter.scrollLeft%idinnerelement[0].offsetWidth==0){
				clearInterval(time_lunbo);
				time_lunbo=setTimeout(run,3000);
			}
			if(idouter.scrollLeft>=3000){//为什么此处不可用idinner.offsetWidth-idouter.offsetWidth;
				idouter.scrollLeft=0;
			}
		}
		for(var i=0;i<idouterelement.length;i++){
			idouterelement[i].onclick=function(){
				clearInterval(time_lunbo);
				for(var i=0;i<idinnerelement.length-1;i++){
					if(this==idouterelement[i]){
						idouter.scrollLeft=idinnerelement[0].offsetWidth*i;
						idouterelement[i].style.background="#fe7101";
						clearInterval(time_lunbo);
						time_lunbo=setTimeout(run,3000);
					}else{
						idouterelement[i].style.background="#f8f8f8";
					}
				}
			}
		}
	}
	//返回顶部
	function getid(element){
		var time_id=null;
		var element=document.getElementById(element);
		element.onclick=function(){
			clearInterval(time_id);
			time_id=setInterval(backtop,1);
		} 
		function backtop(){
			var scrollTop=document.body.scrollTop;
			if(scrollTop<=0){
				clearInterval(time_id);
			}
			scrollTop-=10;
			document.body.scrollTop=scrollTop;
		}
	}
	getLunBo("index_first_outer","index_first_outer_ul","li","index_first_inner","img");
	getid("back_first");
	getid("back_second");
	getid("back_thrid");
	getid("back_fourth");
	getid("back_fifth");
	getid("back_sixth");
	getid("back_last");
	//图片翻转
	var more=document.getElementById("more");
	var dt=document.getElementById("modern").getElementsByTagName("dt");
	var time_td;
	var arr=[['img/现代简约风格/keting.jpg','img/现代简约风格/woshi.jpg','img/现代简约风格/canting.jpg','img/现代简约风格/chufang.jpg','img/现代简约风格/louti.jpg','img/现代简约风格/yangtai.jpg'],
			['img/中式风格/keting.jpg','img/中式风格/woshi.jpg','img/中式风格/canting.jpg','img/中式风格/chufang.png','img/中式风格/louti.jpg','img/中式风格/yangtai.jpg'],
			['img/田园风格/keting.jpg','img/田园风格/woshi.jpg','img/田园风格/canting.jpg','img/田园风格/chufang.jpg','img/田园风格/louti.jpg','img/田园风格/yangtai.jpg'],
			['img/欧式风格/keting.jpg','img/欧式风格/woshi.jpg','img/欧式风格/canting.jpg','img/欧式风格/chufang.jpg','img/欧式风格/louti.jpg','img/欧式风格/yangtai.png']];
	var more_x=0;
	more.onclick=function(){
		clearInterval(time_td);
		for(var i=0;i<4;i++){
			if(more_x==i){
				time_td=setInterval(show,50);
			}
		}
		function show(){
			var a=Math.floor(Math.random()*arr[more_x].length);
			dt[a].style.backgroundImage= "url("+arr[more_x][a]+")";
		}
		more_x++;
		if(more_x>=4){
			more_x=0;
		}
	}
	//图片打开
	var opera=document.getElementById("room_photo");
	var left=document.getElementById("room_left");
	var right=document.getElementById("room_right");
	var time_open=null;
	var room_x=500;
	opera.onmouseover=function(){
		clearInterval(time_open);
		time_open=setInterval(runl,1);
	}
	function runl(){
		room_x--;
		left.style.width=room_x+"px";
		right.style.width=room_x+"px";
		if(room_x<=0){
			clearInterval(time_open);
		}
	}
	opera.onmouseout=function(){
		clearInterval(time_open);
		time_open=setInterval(runr,1);
	}
	function runr(){
		room_x++;
		left.style.width=room_x+"px";
		right.style.width=room_x+"px";
		if(room_x>=500){
			clearInterval(time_open);
		}
	}
	//案例展示
	var bigimgs=document.getElementById("example_photo_big").getElementsByTagName("img");
	var smallis=document.getElementById("example_photo_small").getElementsByTagName("li");	
	var time_show=null;
	var example_y=0;
	doimgs();
	time_show=setInterval(doimgs,4000);
	function doimgs(){
		if(example_y>=8){
			for(var i=0;i<bigimgs.length;i++){
				bigimgs[i].style.width=0+"px";
				bigimgs[i].style.display="block";
			}
			example_y=0;
		}
		$(bigimgs[example_y]).animate({
			width:"1100px",
		},500).delay(2900)
		for(var i=0;i<smallis.length;i++){
				smallis[i].style.background="black";
			}
		$(smallis[example_y]).css({background:"blue",})
		$(bigimgs[example_y]).hide(500);
		example_y++;
	}
	$("#example_photo_small li").mousedown(function(){
		clearInterval(time_show)
		for(var i=0;i<smallis.length;i++){
			smallis[i].style.background="black";
		}
		example_y=$(this).index()+1;
		$(this).css({background:"blue"})
		for(var i=0;i<bigimgs.length;i++){
			bigimgs[i].style.width=0+"px";
			bigimgs[i].style.display="block";
		}
		$($("#example_photo_big img").eq($(this).index())).animate({width:"1100px"},500).delay(2900)
		$($("#example_photo_big img").eq($(this).index())).hide(500)
	})
	$(this).mouseup(function(){
		clearInterval(time_show)
		time_show=setInterval(doimgs,4000);
	})
	//活动展示
	var content_oli=document.getElementById("content").getElementsByTagName("li")
	var oDiv=document.getElementById("active_content_first").getElementsByTagName("div")
	var active_time=null;
	var active_x=0;
	active_run();
	active_time=setInterval(active_run,2000);
	function active_run(){
		if(active_x>=4){
			active_x=0;
		}
		for(var i=0;i<content_oli.length;i++){
			content_oli[i].style.background="";
		}
		content_oli[active_x].style.background="deepskyblue";
		for(var i=0;i<8;i++){
			oDiv[i].style.display="none";
		}
		oDiv[active_x*2].style.display="block";
		active_x++;
	}
	$(content_oli).click(function(){
		clearInterval(active_time);
		for(var i=0;i<content_oli.length;i++){
			content_oli[i].style.background="";
		}
		$(this).css({background:"deepskyblue"})
		active_x=$(this).index()+1;
		for(var i=0;i<8;i++){
			oDiv[i].style.display="none";
		}
		oDiv[$(this).index()*2].style.display="block";
		oDiv[$(this).index()*2+1].style.display="block";
	})
	$(content_oli).mouseout(function(){
		clearInterval(active_time);
		active_time=setInterval(active_run,2000);
	})
	$("#active_inner_one").mousemove(function(e){
		clearInterval(active_time);
		for(i=8;i<oDiv.length;i++){
			oDiv[i].style.display="none";
		}
		oDiv[$(this).index()+8].style.display="block"
		oDiv[$(this).index()+9].style.display="block"
		var kuan=e.pageX-oDiv[$(this).index()+1].clientWidth/2-oDiv[$(this).index()].offsetLeft-active_content_first.offsetLeft;
		var gao=e.pageY-oDiv[$(this).index()+1].clientHeight/2-oDiv[$(this).index()].offsetTop-3160;
		var maxL=oDiv[$(this).index()].clientWidth-oDiv[$(this).index()+1].clientWidth;
		var maxT=oDiv[$(this).index()].clientHeight-oDiv[$(this).index()+1].clientHeight;
		if(kuan>=maxL){
			kuan=maxL;
		}
		if(kuan<=0){
			kuan=0;
		}
		if(gao>=maxT){
			gao=maxT;
		}
		if(gao<=0){
			gao=0;
		}
		oDiv[$(this).index()+1].style.left=kuan+"px";
		oDiv[$(this).index()+1].style.top=gao+"px";
		oDiv[$(this).index()+8].scrollLeft=kuan*5;
		oDiv[$(this).index()+8].scrollTop=gao*5;
	})
	$("#active_inner_one").mouseout(function(){
		clearInterval(active_time);
		oDiv[$(this).index()+8].style.display="none"
		active_time=setInterval(active_run,2000);
	})
	$("#active_inner_two").mousemove(function(e){
		clearInterval(active_time);
		for(i=8;i<oDiv.length;i++){
			oDiv[i].style.display="none";
		}
		oDiv[$(this).index()+10].style.display="block"
		oDiv[$(this).index()+11].style.display="block"
		var kuan=e.pageX-oDiv[$(this).index()+3].clientWidth/2-oDiv[$(this).index()+2].offsetLeft-active_content_first.offsetLeft;
		var gao=e.pageY-oDiv[$(this).index()+3].clientHeight/2-oDiv[$(this).index()+2].offsetTop-3160;
		var maxL=oDiv[$(this).index()+2].clientWidth-oDiv[$(this).index()+3].clientWidth;
		var maxT=oDiv[$(this).index()+2].clientHeight-oDiv[$(this).index()+3].clientHeight;
		if(kuan>=maxL){
			kuan=maxL;
		}
		if(kuan<=0){
			kuan=0;
		}
		if(gao>=maxT){
			gao=maxT;
		}
		if(gao<=0){
			gao=0;
		}
		oDiv[$(this).index()+3].style.left=kuan+"px";
		oDiv[$(this).index()+3].style.top=gao+"px";
		oDiv[$(this).index()+10].scrollLeft=kuan*5;
		oDiv[$(this).index()+10].scrollTop=gao*5;
	})
	$("#active_inner_two").mouseout(function(){
		clearInterval(active_time);
		oDiv[$(this).index()+10].style.display="none"
		active_time=setInterval(active_run,2000);
	})
	$("#active_inner_three").mousemove(function(e){
		clearInterval(active_time);
		for(i=8;i<oDiv.length;i++){
			oDiv[i].style.display="none";
		}
		oDiv[$(this).index()+12].style.display="block"
		oDiv[$(this).index()+13].style.display="block"
		var kuan=e.pageX-oDiv[$(this).index()+5].clientWidth/2-oDiv[$(this).index()+4].offsetLeft-active_content_first.offsetLeft;
		var gao=e.pageY-oDiv[$(this).index()+5].clientHeight/2-oDiv[$(this).index()+4].offsetTop-3160;
		var maxL=oDiv[$(this).index()+4].clientWidth-oDiv[$(this).index()+5].clientWidth;
		var maxT=oDiv[$(this).index()+4].clientHeight-oDiv[$(this).index()+5].clientHeight;
		if(kuan>=maxL){
			kuan=maxL;
		}
		if(kuan<=0){
			kuan=0;
		}
		if(gao>=maxT){
			gao=maxT;
		}
		if(gao<=0){
			gao=0;
		}
		oDiv[$(this).index()+5].style.left=kuan+"px";
		oDiv[$(this).index()+5].style.top=gao+"px";
		oDiv[$(this).index()+12].scrollLeft=kuan*5;
		oDiv[$(this).index()+12].scrollTop=gao*5;
	})
	$("#active_inner_three").mouseout(function(){
		clearInterval(active_time);
		oDiv[$(this).index()+12].style.display="none"
		active_time=setInterval(active_run,2000);
	})
	$("#active_inner_four").mousemove(function(e){
		clearInterval(active_time);
		for(i=8;i<oDiv.length;i++){
			oDiv[i].style.display="none";
		}
		oDiv[$(this).index()+14].style.display="block"
		oDiv[$(this).index()+15].style.display="block"
		console.log(e.clientY)
		var kuan=e.pageX-oDiv[$(this).index()+7].clientWidth/2-oDiv[$(this).index()+6].offsetLeft-active_content_first.offsetLeft;
		var gao=e.pageY-oDiv[$(this).index()+7].clientHeight/2-oDiv[$(this).index()+6].offsetTop-3160;
		var maxL=oDiv[$(this).index()+6].clientWidth-oDiv[$(this).index()+7].clientWidth;
		var maxT=oDiv[$(this).index()+6].clientHeight-oDiv[$(this).index()+7].clientHeight;
		if(kuan>=maxL){
			kuan=maxL;
		}
		if(kuan<=0){
			kuan=0;
		}
		if(gao>=maxT){
			gao=maxT;
		}
		if(gao<=0){
			gao=0;
		}
		oDiv[$(this).index()+7].style.left=kuan+"px";
		oDiv[$(this).index()+7].style.top=gao+"px";
		oDiv[$(this).index()+14].scrollLeft=kuan*5;
		oDiv[$(this).index()+14].scrollTop=gao*5;
	})
	$("#active_inner_three").mouseout(function(){
		clearInterval(active_time);
		oDiv[$(this).index()+14].style.display="none"
		active_time=setInterval(active_run,2000);
	})
	//设计师展示
	
	var person=document.getElementById("designer_people").getElementsByTagName("li");
	var people=document.getElementById("designer_left").getElementsByTagName("img");
	var oUl=document.getElementById("designer_housework").getElementsByTagName("li");
	var designer_time=null;
	function designer_move(){
		designer_time=setInterval(designer_run,1);
	}
	designer_move()
	function designer_run(){
		designer_x=designer_people.scrollLeft/person[0].offsetWidth
		designer_people.scrollLeft=designer_x*person[0].offsetWidth
		if(designer_people.scrollLeft%person[0].offsetWidth==0){
			clearInterval(designer_time);
			for(var i=0;i<person.length;i++){
				person[i].style.background="";
			}
			designer_x=designer_people.scrollLeft/person[0].offsetWidth
			person[designer_x].style.background="blue";
			for(var i=0;i<people.length;i++){
				people[i].style.display="none";
			}
			$(people[designer_x]).show(500)
			for(var i=0;i<oUl.length;i++){
				oUl[i].style.display="none";
			}
			$(oUl[designer_x*4]).slideDown(1500)
			$(oUl[designer_x*4+1]).fadeIn(2000);
			$(oUl[designer_x*4+2]).show(500)
			$(oUl[designer_x*4+3]).show(500)
			designer_time=setTimeout(designer_move,4000);
		}
		designer_people.scrollLeft++;
		if(designer_people.scrollLeft>=3000){
			designer_people.scrollLeft=0;
		}
	}
	$("#designer_people li").each(function(){
		$(this).click(function(){
			clearInterval(designer_time);
			for(var i=0;i<person.length;i++){
				person[i].style.background="";
			}
			person[$(this).index()].style.background="blue";
			designer_people.scrollLeft=$(this).index()*person[0].offsetWidth;
			for(var i=0;i<people.length;i++){
				people[i].style.display="none";
			}
			$("#designer_left img").eq($(this).index()).show(500);
			for(var i=0;i<oUl.length;i++){
				oUl[i].style.display="none";
			}
			$(oUl[$(this).index()*4]).slideDown(1500)
			$(oUl[designer_x*4+1]).fadeIn(2000);
			$(oUl[$(this).index()*4+2]).show(500)
			$(oUl[$(this).index()*4+3]).show(500)
			if($(this).index()>=15&&$(this).index()<=19){
				designer_y=$(this).index()-15;
				designer_x=designer_y;
				for(var i=0;i<person.length;i++){
					person[i].style.background="";
				}
				person[designer_y].style.background="blue";
				designer_people.scrollLeft=designer_y*person[0].offsetWidth;
				for(var i=0;i<people.length;i++){
					people[i].style.display="none";
				}
				$("#designer_left img").eq(designer_y).show(500);
				for(var i=0;i<oUl.length;i++){
					oUl[i].style.display="none";
				}
				$(oUl[$(this).index()*4]).slideDown(1500)
				$(oUl[designer_x*4+1]).fadeIn(2000);
				$(oUl[$(this).index()*4+2]).show(500)
				$(oUl[$(this).index()*4+3]).show(500)
				designer_x=$(this).index()+1;
			}
			$("#designer_people li").eq($(this).index()).mouseout(function(){
				clearInterval(designer_time)
				designer_move()
			})
		})
	})
	//关于我们
	var about_outer=document.getElementById("about_big_outer");
	var about_inner=document.getElementById("about_big_outer").getElementsByTagName("img");
	var about_Oul=document.getElementById("about_ul").getElementsByTagName("span");
	var about_left=document.getElementById("about_left");
	var about_right=document.getElementById("about_right");
	var about_time=null;
	var speed=10;
	function about_move(){
		about_time=setInterval(about_run,1);
	}
	about_time=setTimeout(about_move,3000);
	function about_run(){
		about_outer.scrollLeft+=speed;
		about_x=Math.floor(about_outer.scrollLeft/about_inner[0].offsetWidth);
		for(var i=0;i<about_Oul.length;i++){
			about_Oul[i].style.opacity=0.8;
		}
		if(about_x==5){
			about_x=0;
		}
		about_Oul[about_x].style.opacity=0;
		if(about_outer.scrollLeft%about_inner[0].offsetWidth==0){
			clearInterval(about_time);
			about_time=setTimeout(about_move,3000)
		}
		if(about_outer.scrollLeft>=5000){
			about_outer.scrollLeft=0;
		}else if(about_outer.scrollLeft<=0){
			about_outer.scrollLeft=5000;
		}
	}
	about_right.onclick=function(){
		speed=10;
	}
	about_left.onclick=function(){
		speed=-10;
	}
	$("#about_ul li").mouseover(function(){
		clearInterval(about_time);
		for(var i=0;i<about_Oul.length;i++){
			about_Oul[i].style.opacity=0.8;
		}
		about_Oul[$(this).index()].style.opacity=0;
		about_outer.scrollLeft=$(this).index()*about_inner[0].offsetWidth;
		$("#about_ul li").eq($(this).index()).mouseout(function(){
			clearInterval(about_time);
			about_time=setTimeout(about_move,3000);
		})
	})
}



