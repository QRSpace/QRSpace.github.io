$(document).ready(function(){

/*
$('#btnPrevImage').click(funcion(){
	$("#picPreview").attr('src',"/pics/test/weixincode.jpg");
	$("#picName").text("/pics/test/weixincode.jpg");
});

$('#btnNextImage').click(funcion(){
	$("#picPreview").attr('src',"/pics/test/weixin-code.png");
	$("#picName").text("/pics/test/weixin-code.png");
});
*/
	$("#btnPrevImage").click(function(){
		$(this).hide();
		$("#picName").text("/pics/test/weixincode.jpg");
	});
	$("#btnNextImage").click(function(){
		$(this).hide();
		$("#picName").text("/pics/test/weixincode.jpg");
	});
});