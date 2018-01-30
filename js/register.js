var idValid = false;
var phoneOk = false;
var pwdOk = false;
var surePwdOk = false;
var codeOk = false;
var phoneCode = false;
/* =====正则===== */
function regexp(){
	
	var phoneReg = /^1[3-9]\d{9}$/;
	var numreg = /^\d*$/;
	var pwdReg = /^.{6,20}$/;
	/* ====用户名正则==== */
	$(".uname").blur(function(){
		if($(this).val() == ""){
			$(".name_err").css("color","#ff6b52").html("请输入手机号码");
			phoneOk = false;
		}else if( phoneReg.test( $(this).val() ) ){
			phoneOk = true;
			$(".name_err").css("color","green").html("可以使用");
		}else{
			$(".name_err").css("color","#ff6b52").html("您输入的手机号码格式错误，请重新输入!");
			phoneOk = false;
		}
	}).keyup(function(){
		if( !numreg.test($(this).val()) ){
			$(this).val("");
		}
	})
	/* ====密码正则==== */
	$(".upwd").blur(function(){
		if($(this).val() == ""){
			$(".pwd_err").css("color","#ff6b52").html("请输入密码");
			pwdOk = false;
		}else if( pwdReg.test( $(this).val() ) ){
			pwdOk = true;
			$(".pwd_err").css("color","green").html("");
		}else{
			$(".pwd_err").css("color","#ff6b52").html("密码长度必须为6-20个字符");
			pwdOk = false;
		}
	})
	/* ====在次输入 === */
	$(".spwd").blur(function(){
		if( $(this).val() == "" ){
			surePwdOk = false;
			$(".sure_err").css("color","#ff6b52").html("请再次输入密码");
		}else if( $(this).val() == $(".upwd").val() ){
			surePwdOk = true;
			$(".sure_err").css("color","green").html("");
			
		}else{
			surePwdOk = true;
			$(".sure_err").css("color","#ff6b52").html("两次输入的密码不一致，请重新输入");
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
			$(".code_err").css("color","#ff6b52").html("请输入验证码");
		}
		if( $(".code").val() == codeArr[codeIndex] ){
			codeOk = true;
			$(".code_err").css("color","green").html("正确");
		}else{
			codeOk = false;
			$(".code_err").css("color","#ff6b52").html("您输入的验证码有误，请重新输入");
		}
	})
	/* ====短信验证码==== */
	var smsnum = 0;
	$(".sms").click(function(){
		smsnum = rand( 999,10000 );
		alert( "您获取的短信校验码为: " + smsnum );
	})
	$("#sms_code").blur(function(){
		if( $(this).val() == "" ){
			phoneCode = false;
			$(".sms_err").css("color","#ff6b52").html("请输入验证码");
		}
		if( $(this).val() == smsnum ){
			phoneCode = true;
			$(".sms_err").css("color","green").html("正确");
		}else{
			phoneCode = false;
			$(".sms_err").css("color","#ff6b52").html("您输入的校验码有误，请重新输入");
		}
	})
}
regexp();

/* =====cookie====== */

$(".btn").click(function(){
	if($(".uname").val() == ""){
		$(".name_err").css("color","#ff6b52").html("请输入手机号码");
		phoneOk = false;
	}
	if($(".upwd").val() == ""){
		$(".pwd_err").css("color","#ff6b52").html("请输入密码");
		pwdOk = false;
	}
	if( $(".spwd").val() == "" ){
		surePwdOk = false;
		$(".sure_err").css("color","#ff6b52").html("请再次输入密码");
	}
	if( $(".code").val() == "" ){
		codeOk = false;
		$(".code_err").css("color","#ff6b52").html("请输入验证码");
	}
	if( $("#sms_code").val() == "" ){
		codeOk = false;
		$(".sms_err").css("color","#ff6b52").html("请输入验证码");
	}
	if( phoneOk == true && pwdOk == true && surePwdOk == true && phoneCode == true && codeOk == true ){
		setCookie("uname",$(".uname").val());
		setCookie("upwd",$(".upwd").val());
		alert("注册成功");
		window.location = "login.html";
	} 
	regexp();
})

















