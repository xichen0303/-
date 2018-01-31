/* ========轮播图======= */
function slideShow(){
	var timer = setInterval(picShow,2500);
	var index = -1;
	function picShow(){
		index++;
		if( index == 4 ){
			index = 0;
		}
		$(".item-No a").eq(index).addClass("on1").siblings().removeClass("on1");
		$(".item-img li").eq(index).stop().animate({"opacity":1},500)
								   .siblings()
								   .stop()
								   .animate({"opacity":0},500)
	}
	$(".item-No").on("mouseenter","a",function(){
		clearInterval(timer);
		index = $(this).index() - 1;
		picShow();
	}).on("mouseleave","a",function(){
		timer = setInterval(picShow,2500)
	})
}
slideShow();
/* ======ajax======= */
window.onload = function(){
	$.ajax({
		type:"get",
		url:"json/list.json",
		success : function(json){
			var str = "";
			var html = "";
			for( var attr in json ){
				str += `<span class="sale-mTit" cname='${attr}'>${json[attr].name}</span>`;
				for( var i = 0 ; i < json[attr].list.length ; i++ ){
					var pro = json[attr].list[i];
					html += `<li>
								<a href=""><img src="img/listPageSale${pro.src}"/></a>
								<div class="sale-name">
									<h3 class="1">${pro.name}</h3>
									<p class="r">
										<b>${pro.discount}</b>
										折起
									</p>
								</div>
								<div class="sale-time">
									<p>
										<i class="timeIcon"></i>
										剩余
										<span class="djs">
											<em class="dayNum"></em>
											天
											<em class="houNum"></em>
											小时
											<em class="minNum"></em>
											分
											<em class="secNum"></em>
											秒
										</span>
									</p>
								</div>
							</li>`;
				}
			}
			$(".sale_title").html( `<i class="bigIcon"></i>`+str );
			$(".sale-today-list ul").html(html);
			timeOut();
			
			/* 分页显示 */
			
			$(".sale-mTit").mouseenter(function(){
				var cname = $(this).attr("cname");
				var page = "";
				for( var i = 0 ; i < json[cname].list.length ; i++ ){
					var pro = json[cname].list[i];
					page += `<li>
								<a href=""><img src="img/listPageSale${pro.src}"/></a>
								<div class="sale-name">
									<h3 class="1">${pro.name}</h3>
									<p class="r">
										<b>${pro.discount}</b>
										折起
									</p>
								</div>
								<div class="sale-time">
									<p>
										<i class="timeIcon"></i>
										剩余
										<span class="djs">
											<em class="dayNum"></em>
											天
											<em class="houNum"></em>
											小时
											<em class="minNum"></em>
											分
											<em class="secNum"></em>
											秒
										</span>
									</p>
								</div>
							</li>`;
				}
				$(".sale-today-list ul").html(page);
				picChange();
				timeOut();
			})
			picChange();
		}
	});
}
/* =======划过图片======= */
function picChange(){
	$(".sale-today-list li img").mouseenter(function(){
		$(this).stop().animate({"width":"315px","height":"249.828px","top":"-9.91379px","left":"-12.5px"},800)
	}).mouseleave(function(){
		$(this).stop().animate({"width":"290px","height":"230px","top":"0px","left":"0px"},800)
	})
}


/* =倒计时= */
function timeOut(){
	var start = new Date();
	var end = new Date("2018-02-10 12:00:00");
	var t = diff( start , end );
	function showTime(){
		var d = parseInt( t/3600/24 );//天           t/3600/24
		var h = parseInt( t/3600-d*24 );//小时       
		var m = parseInt( (t - d*3600*24 - h*3600)/60 );//分钟   (t - d*3600*24 - h*3600)/60  
		var s = parseInt(  t - d*24*3600 - h*3600 - m*60 );//秒   t - d*24*3600 - h*3600 - m*60
		$(".dayNum").html( d );
		$(".houNum").html( h );
		$(".minNum").html( m );
		$(".secNum").html( s );
	}
	var timer = setInterval(function(){
		t--;
		showTime();
	},1000);
}




































































