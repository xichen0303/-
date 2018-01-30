



	<!--顶部标题效果-->
	
		$(".mymlg,.phonemlg").mouseenter(function(){
			setTimeout(function(){
				$(this).addClass("on")
				$(this).find(".show").stop().slideDown(200);
			}.bind(this),200)
		}).mouseleave(function(){
			setTimeout(function(){
				$(this).removeClass("on");
				$(this).find(".show").stop().slideUp(200);
			}.bind(this),200)
		})
	

//	<!--左侧标题划过效果-->
	
		//划过菜单显示内容
		$(".list_left").on("mouseenter","li",function(){
			var index = $(this).index();
			$(this).addClass("list_on").find("i").stop().animate({"margin-left":10+"px"},300);
			$(".list_right").children().eq(index).css("display","block")
												.stop()
												.animate({"opacity":0.96,"left":180+"px"},500);
		}).on("mouseleave","li",function(){
			var index = $(this).index();
			$(this).removeClass("list_on").find("i").stop().animate({"margin-left":0+"px"},300);
			$(".list_right").children().eq(index).css("display","none")
												.stop()
												//.animate({"opacity":0.5,"left":170+"px"});
		})
		$(".list_right").on("mouseenter","div",function(){
			$(".list_left").children().eq( $(this).index() ).addClass("list_on").find("i").stop().animate({"margin-left":10+"px"},300);
			$(this).css({"display":"block","opacity":0.96,"left":180+"px"});
			
		}).on("mouseleave","div",function(){
			$(this).css("display","none").stop().animate({"opacity":0.5,"left":170+"px"});
			$(".list_left").children().eq( $(this).index() ).removeClass("list_on").find("i").stop().animate({"margin-left":0+"px"},300);
		})
	


	//<!-- ==头部效果== -->
	
		$("#txt").focus(function(){
			$(this).val("");
		}).blur(function(){
			$(this).val("请输入商品名称，支持拼音搜索");
		}).mouseenter(function(){
			$(this).css("border-color","rgb(102,102,120)");
		}).mouseleave(function(){
			$(this).css("border-color","#cb1e00");
		})
		var $word_widht = 20;
		for( var i = 0 ; i < 3 ; i++ ){
			$(".word_wrap").find("b").eq(0).find("i").eq(i).css("left",i*$word_widht+10+"px");
			$(".word_wrap").find("b").eq(1).find("i").eq(i).css({"left":i*$word_widht+10+"px",
																"top":30+"px"});
		}
		/* "整点抢"字符效果 */
		setInterval(function(){
			for( var i = 0 ; i < 3 ; i++ ){
				$(".word_wrap").find("b").eq(0).find("i").eq(i).animate({"top":-35+"px"},300*(i+1));
				$(".word_wrap").find("b").eq(1).find("i").eq(i).animate({"top":4+"px"},300*(i+1));
			}
			setTimeout(function(){
				for( var i = 0 ; i < 3 ; i++ ){
					$(".word_wrap").find("b").eq(0).find("i").eq(i).css({"left":i*$word_widht+10+"px",
																		"top":4+"px"});
					$(".word_wrap").find("b").eq(1).find("i").eq(i).css({"left":i*$word_widht+10+"px",
																		"top":30+"px"});
				}
			},1000)
		},2500)
		/* 标题栏  底部跟随效果 */
		$(".onbg").css("width",$(".nav_list").children(0).children(0).css("width"));
		$(".nav_list").on("mouseenter","li:not(.onbg)",function(){
			$(".onbg").stop().animate({"left":parseInt($(this).offset().left) - 291.5 + "px",
								"width":$(this).find("a").css("width")},500);
		}).on("mouseleave","li:not(.onbg)",function(){
			$(".onbg").stop().animate({"left":0 + "px",
								"width":$(".nav_list").children(0).children(0).css("width")},500);
		})
		




/* ====侧栏==== */
function sideColumn(){
	$(".bot").find("li:eq(1),li:eq(2),li:eq(4)").mouseenter(function(){
		$(this).find("div").stop().animate({"width":"80px","left":"-80px"},300);
	}).mouseleave(function(){
		$(this).find("div").stop().animate({"width":"0","left":"0"},300);
	})
	$(".bot").find("li:eq(3)").mouseenter(function(){
		$(this).find("div").stop().animate({"width":"240px","left":"-240px"},300);
	}).mouseleave(function(){
		$(this).find("div").stop().animate({"width":"0","left":"0"},300);
	})
	
	$("#backTop").click(function(){
		$("html,body").animate({"scrollTop":0},500);
	})
	
	flag = true;
	$(".cart-user").click(function(){
		$(".sideLogin").fadeIn(100);
		$(".nopublic").fadeOut(100);
		
		if( $(".sideLogin").css("display") == "block" ){
			$(this).find("a").addClass("list_on");
			$(".gou-cart").animate({"right":0},500);
		}else{
			$(this).find("a").removeClass("list_on");
			$(".gou-cart").animate({"right":"-280px"},500);
		}
	})
	$(".cart-i").click(function(){
		$(".sideLogin").fadeOut(100);
		$(".nopublic").fadeIn(100);
		if( $(".nopublic").css("display") == "none" ){
			$(this).find("a").addClass("list_on");
			$(".gou-cart").animate({"right":0},500);
		}else{
			$(this).find("a").removeClass("list_on");
			$(".gou-cart").animate({"right":"-280px"},500);
		}
	})
	
	
	
	
}
sideColumn();





