jQuery(function($){

$('#btnPrevImage').mousedown(funcion(){
	$('#picPreview').attr('src',"/pics/test/weixincode.jpg");
	$('#picName').text("/pics/test/weixincode.jpg");
});

$('#btnNextImage').mousedown(funcion(){
	$('#picPreview').attr('src',"/pics/test/weixin-code.png");
	$('#picName').text("/pics/test/weixin-code.png");
});


});