jQuery(function($){

$('#btnPrevImage').mouseDown(funcion(){
	$('#picPreview').attr('src',"/pics/test/weixincode.jpg");
	$('#picName').text("/pics/test/weixincode.jpg");
});

$('#btnNextImage').mouseDown(funcion(){
	$('#picPreview').attr('src',"/pics/test/weixin-code.png");
	$('#picName').text("/pics/test/weixin-code.png");
});


});