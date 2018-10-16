//导航下拉列表关闭
$("body").click(function(e){
	if(!($(e.target).hasClass("navbar-toggle")||$(e.target).parent().hasClass("navbar-toggle"))){
		$("#vuNav.in").removeClass("in");
	}
});
//模态框
$("[data-decide-to]").click(function(){
	var nI=$(this).attr("data-decide-to");
	$("#pbModal [data-slide-to="+nI+"]")[0].click();
	$("#pbModal").modal("show");
});
//滚动条置顶

$(window).scroll(function(){
	var num=$(window).scrollTop();
	if(num){
		$("#scrollTop").slideDown(200);
	}else{
		$("#scrollTop").slideUp(200);
	}
});
$("#scrollTop").click(function(){
	$("html,body").animate({scrollTop:0},500);
});
//页面可见时的动画特效
 window.movestep=ScrollReveal({reset:true});
 var config={
 	reset:false,
 	animationName:"moveStep",
 	"-webkit-animation-name":"moveStep",
 	afterReveal:function(hao){
 		//有isAn为class的要注意内部样式
 		hao.removeAttribute("style");
 	}
 }
 movestep.reveal(".isAn",config);