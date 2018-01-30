var unameOk = false;
var upwdOk = false;
var codeOk = false;

function login(){
	var unameReg = /^1[3-9]\d{9}$/;
	var emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	$(".btn").click(function(){
		if( $(".user").val() == "" ){
			$("#username_err").html("请输入账号");
		}else if( !($(".user").val() == "") ){
			$("#username_err").html("");
			if( $("#pwd").val() == "" ){
				$("#pwd_err").html("请输入密码");
			}else{
				$("#pwd_err").html("");
				if( $(".code").val() == "" ){
					$("#code_err").html("");
				}else if( !($(".code").val() == "") ){
					
					if( !unameReg.test($(".user").val()) && !emailReg.test( $(".user").val() ) ){
						$("#code_err").html("您输入的用户名或密码错误，请核对后重新输入！");
					}else if( $(".user").val() == getCookie("uname") && $("#pwd").val() == getCookie("upwd") && codeOk == true ){
						alert("登录成功");
						window.location = "homePage.html"
					}
				}
			}
		}
	})
	/* ====验证码==== */
	var codeArr = [8810,9610,6570];
	var codeIndex = 0;
	$(".change").click(function(){
		$(".code").val("");
		codeIndex++;
		if( codeIndex == 3 ){
			codeIndex = 0;
		}
		$(".codeImg").attr({"src":"img/"+codeArr[codeIndex]+".png"});
	})
	$(".code").blur(function(){
		if( $(this).val() == "" ){
			codeOk = false;
			$("#code_err").css("color","#ff6b52").html("请输入验证码");
		}
		if( $(".code").val() == codeArr[codeIndex] ){
			codeOk = true;
			$("#code_err").css("color","green").html("正确");
		}else{
			codeOk = false;
			$("#code_err").css("color","#ff6b52").html("您输入的验证码有误，请重新输入");
		}
	})
}
login();





