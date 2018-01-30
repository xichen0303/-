
/* ====放大镜==== */
function imgShow(){
	$(".spec-list ul").on("mouseenter","li",function(){
		$index = $(this).index()
		$(".midImg").attr({"src":"img/bigImg"+($index + 1)+".jpg"})
		$(".bigImg").attr({"src":"img/bigImg"+($index + 1)+".jpg"})
	})
	$(".midImgBox").mouseenter(function(){
		$(".bigImgBox").css("display","block");
		$(".mask").css("display","block")
		$(this).mousemove(function(e){
			var e = e || event;
			$disx = e.pageX - $(".midImgBox").offset().left - $(".mask").width()/2;
			$disy = e.pageY - $(".midImgBox").offset().top - $(".mask").height()/2;
			$maxL = $(".midImgBox").width() - $(".mask").width();
			$maxT = $(".midImgBox").height() - $(".mask").height();
			$disx = Math.min( $maxL , Math.max( 0,$disx ) );
			$disy = Math.min( $maxT , Math.max( 0,$disy ) );
			$(".mask").css({"left":$disx,"top":$disy});
			//  大图left / mask.left = 大图宽度 / 小图宽度 = 大图可视区宽度 /mask的宽度
			$(".bigImg").css({"left":-$disx*800/350,"top":-$disy*800/350});
			
		}.bind(this))
	}.bind(this)).mouseleave(function(){
		$(".bigImgBox").css("display","none");
		$(".mask").css("display","none")
	})
}
imgShow();
/* ========数量加减======== */
function count(){
	$num = $(".Amount").html();
	$("#reduce").click(function(){
		$num--;
		if( $num == 0 ){
			$num = 1;
		}
		$(".Amount").html($num);
	})
	$("#add").click(function(){
		$num++;
		$(".Amount").html($num);
	})
}
count();
/* ========搭配======= */
function price(){
	$(".check").click(function(){
		$num = $(".matchRight .p1 i").html();
		$price = parseInt($("#total").html());
		$del = parseInt($("#savemoney").html());
		if( $(this).prop("checked") ){
			$num++;
			$price += parseInt($(this).parent().find("em").html());
			$del += parseInt($(this).parent().find("del em").html()) - parseInt($(this).parent().find("em").html())
			
			$(".matchRight .p1 i").html($num);
			$("#total").html($price);
			$("#savemoney").html($del);
		}else{
			$num--;
			$price -= parseInt($(this).parent().find("em").html());
			$del -= parseInt($(this).parent().find("del em").html()) - parseInt($(this).parent().find("em").html())
			
			$(".matchRight .p1 i").html($num);
			$("#total").html($price);
			$("#savemoney").html($del);
		}
	})
}
price();
/* =======吸顶======== */
function navTop(){
	$(window).scroll(function(){
		if( $(document).scrollTop() > $(".brandLeft").offset().top ){
			$(".proNav .overLeftKf").css("display","block")
			$(".proNav").addClass("fixtop");
		}else{
			$(".proNav .overLeftKf").css("display","none")
			$(".proNav").removeClass("fixtop");
		}
	})
	$(".proNav .proxq").click(function(){
		$("html,body").scrollTop( $(".brandLeft").offset().top )
		$(this).addClass("hover").siblings().removeClass("hover");
	})
	$(".proNav .evaluate").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		$("html,body").scrollTop( $(".comment").offset().top - 80 )
	})
}
navTop();

/* ========看了又看======== */

function move(){
	var x = 0
	$(".slideLr .next").click(function(){
		x += 1080;
		if( x >= 4320 ){
			x = 4320;
		}
		$(".uibox").animate({"left":-x + "px"},300)
	})
	$(".slideLr .prev").click(function(){
		x -= 1080;
		if( x <= 0 ){
			x = 0;
		}
		$(".uibox").animate({"left":-x + "px"},300)
	})
}
move()












