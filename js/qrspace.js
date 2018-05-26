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
		//$(this).hide();
		$("#picPreview").attr('src',"/pics/test/weixinCode.JPG");
		$("#picName").text("/pics/test/weixinCode.JPG");
	});
	$("#btnNextImage").click(function(){
		//$(this).hide();
		$("#picPreview").attr('src',"/pics/test/weixin-code.png");
		$("#picName").text("/pics/test/weixin-code.png");
	});

	$(".lstImage").click(function(){
		$("#picName").text(this.text());
		$("#picPreview").attr('src',this.text());
	});
});