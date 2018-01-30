




<!-- ===========轮播图  ============-->
		function showBanner(){
			var $index = 0;
			var timer = setInterval(show,3000);
			function show(){
				$index++;
				if( $index == 5 ){
					$index = 0;
				}
				switch($index){
					case 0: $(".banner_wrap").css("background","rgb(209,8,23)");
							break;
					case 1:  $(".banner_wrap").css("background","rgb(254,222,204)");
							break;
					case 2:  $(".banner_wrap").css("background","rgb(254,228,229)");
							break;
					case 3:  $(".banner_wrap").css("background","rgb(254,226,212)");
							break;
					case 4:  $(".banner_wrap").css("background","rgb(131,215,238)");
							break;
				}
				$(".bannerlit_list").find("li").eq($index).stop().animate({"top":"-8px"},300)
														  .siblings()
														  .stop()
														  .animate({"top":0},300)
				$(".bannerbig_list").find("li").eq($index).find("img").css("display","block").stop().animate({
													"width":"810px",
													"height":"480px",
													"opacity":"1",
													"left":0,
													"top":0},2000,function(){});
				$(".bannerbig_list").find("li").eq($index).siblings().find("img").css("display","none").stop().animate({
													"opacity":"0.6",
													"width":"843.75px",
													"height":"500px",
													"left":"-16.875px",
													"top":"-10px"},1000);
			}
			$(".bannerlit_list").on("mouseenter","li",function(){
				$index = $(this).index() - 1;
				clearInterval(timer);
				show();
			}).on("mouseleave","li",function(){
				timer = setInterval(show,3000);
			})
		}
		showBanner();


/* ============整点抢============ */

/* =倒计时= */
function timeOut(){
	var start = new Date();
	var end = new Date("2018-02-10 12:00:00");
	var t = diff( start , end );
	function showTime(){
		var h = parseInt( t/3600 );//小时
		var m = parseInt( (t - h*3600)/60 );//分钟
		var s = parseInt( t - h*3600 - m* 60 );//秒
		$(".timeHour1").html( parseInt(h/10) );
		$(".timeHour2").html( parseInt(h%10) );
		$(".timeMinu1").html( parseInt(m/10) );
		$(".timeMinu2").html( parseInt(m%10) );
		$(".timeSeco1").html( parseInt(s/10) );
		$(".timeSeco2").html( parseInt(s%10) );
	}
	var timer = setInterval(function(){
		t--;
		showTime();
	},1000)
	var num = 10
	setInterval(function(){
		num--;
		if( num == -1 ){
			num = 9;
		}
		$(".timeSeco3").html( num );
	},100)
}
timeOut();
function timeToBuy(){
	//整点抢选项卡
	$(".time_list").find("ul").on("click","li",function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(".time_list").find("ul").find("i").appendTo($(this));
		$index = $(this).index();
		$(".timeCon_wrap").eq($index).css("display","block")
						  .siblings().css("display","none");
	})
	//左右点击
	$(".timeCon_wrap .next").click(function(){
		$timeUl = $(this).parent().parent().find("ul");
		var $timeCon = $(this).parent().parent();
		var num = $timeCon.find(".red").html();
		num++;
		if( num == parseInt( $timeCon.find(".maxnum").html() ) + 1 ){
			num = 1;
		}
		
		$timeCon.find(".red").html(num);
		$timeUl.animate({"left":"1200px"},0,function(){
			for( var i = 0 ; i < 4 ; i++ ){
				$timeUl.find("li").eq(0).appendTo($timeUl);
			}
			$timeUl.animate({"left":"0"},0);
		})
	})
	$(".timeCon_wrap .prev").click(function(){
		$timeUl = $(this).parent().parent().find("ul");
		var $timeCon = $(this).parent().parent();
		var num = $timeCon.find(".red").html();
		num--;
		if( num == 0 ){
			num = parseInt( $timeCon.find(".maxnum").html() );
		}
		
		$timeCon.find(".red").html(num);
		for( var i = 0 ; i < 4 ; i++ ){
			$timeUl.find("li:last").prependTo($timeUl);
		}
		$timeUl.animate({"left":0},0);
	})
}
timeToBuy();

/* ================天天特卖================== */
function dailySale(){
	$jump = $(".jump i");
	for( var i = 0 ; i < $jump.length ; i++ ){
		$jump.eq(i).css("left",i +"em");
	}
	setInterval(function(){
		for( var i = 0 ; i < $jump.length ; i++ ){
			$jump.eq(i).animate({"top":"-8px"},(i+1)*80,function(){
				$(this).animate({"top":"0px"},100);
			})
		}
	},2000)
	
	$(".dailysale_con").on("mouseenter","img",function(){
		$(this).stop().animate({
						"width":"315px",
						"height":"249.828px",
						"left":"-12.5px",
						"top":"-9.91379px"
						},800);
	}).on("mouseleave","img",function(){
		$(this).stop().animate({
						"width":"290",
						"height":"230px",
						"left":"0px",
						"top":"0px"
						},800);
	});
	
}
dailySale();

/* ===========楼层=========== */
function floor(){
	var timer = setInterval(showPic,2000);
	function showPic(){
		$(".floor").find("ul").animate({"left":"-180px"},1000,function(){
			$(this).css("left","-90px");
			$(this).find("li").eq(0).appendTo($(this));
		})
	}
	//滚轮事件
	$(document).scroll(function(e){
		var e = e || event;
		if( $(document).scrollTop() + $(window).innerHeight() > $(".floor").eq(0).offset().top ){
			$(".mui_lift").css("display","block");
		}else{
			$(".mui_lift").css("display","none");
		}
		
		/* 滚轮滑动 楼层显示 */
		for( let i = 0 ; i < $(".floor").length ; i++ ){
			if( $( document ).scrollTop() > $(".floor").eq(i).offset().top - $(window).innerHeight()/2 ){
				$(".sn_nav_wrapper a").eq(i).find("font").css({"display":"block"})
													   .end()
													   .siblings()
													   .find("font")
													   .css("display","none");
				$(".sn_nav_wrapper a").eq(i).find("div").css("display","none")
														.end()
													    .siblings()
													    .find("div")
													    .css("display","block");
			}
		}
		/* 吸顶栏 */
		if( $(document).scrollTop() > $(".dailysale").offset().top + 200 ){
			$(".flyheader").slideDown(300);
		}else{
			$(".flyheader").slideUp(300);
		}
	})
	/* 点击楼层 显示 */
	$(".sn_nav_wrapper").on("click","a",function(){
		$index = $(this).index();
		$("html,body").animate({"scrollTop":$(".floor").eq($index).offset().top-40},800);
	})
}
floor();

/* ======猜你喜欢======= */
function guessYouLike(){
	var index = 0;
	$(".gs .next,.guess_con .next").click(function(){
		index++;
		if( index == 10 ){
			index = 0;
		}
		$(".guess_m ul").eq(index).animate({"opacity":1},0)
								  .siblings()
								  .animate({"opacity":0},0);
		$(".gs .litm").html(index+1);
	});
	$(".gs .prev,.guess_con .prev").click(function(){
		index--;
		if( index == -1 ){
			index = 9;
		}
		$(".guess_m ul").eq(index).animate({"opacity":1},0)
								  .siblings()
								  .animate({"opacity":0},0);
		$(".gs .litm").html(index+1);
	})
}
guessYouLike();

/* =====晒单区轮播==== */
function imgTurn(){
	window.onload = function(){
		var timer = setInterval(imgStart,2000);
		function imgStart(){
			$(".sunaCon").stop().animate({"left":"-230px"},1000,function(){
				$(this).css("left",0);
				$(this).children().eq(0).appendTo( $(this) );
			})
		}
		$(".sunArea").mouseenter(function(){
			clearInterval(timer);
		}).mouseleave(function(){
			timer = setInterval(imgStart,2000);
		})
		$(".sunArea .next").click(function(){
			imgStart();
		})
		$(".sunArea .prev").click(function(){
			$(".sunaCon").children().eq(3).prependTo( $(".sunaCon") );
			$(".sunaCon").css("left","-230px");
			$(".sunaCon").animate({"left":"0"},1000),function(){
			};
		})
		
	}
}
imgTurn();