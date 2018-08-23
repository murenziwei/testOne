/**
 * Created by Administrator on 2016/11/23.
 */
var i="";
var ma="0";
$(function(){
    jQuery(".picMarquee-left").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:8,interTime:50});
    $(".Jam a").eq(0).css({"color":"#f00"})
    $(".Jam a").click(function(){
        $(".Jam a").css({"color":"#000"})
        $(this).css({"color":"#f00"})
    })
    $(".MasW li").eq(ma).css({"background":"#f00"})
    $(".MasW li").mouseover(function(){
        ma=$(this).index()
        $(".MasW li").eq(ma).css({"background":"#f00"}).siblings().css({"background":"#000"})
        $(".BanYd").css({"margin-left":ma*-100+"%", "transition":".5s"})
    })
	sdes()
});
function sdes(){
    $(".BanYd").css({"margin-left":ma*-100+"%", "transition":".5s"})
	 $(".MasW li").eq(ma).css({"background":"#f00"}).siblings().css({"background":"#000"})
	ma++
	if(ma>2){
		ma=0
	}
	setTimeout("sdes()",5000);
}

	$(window).scroll(function(){
		if($(window).scrollTop()>($('#spio1').offset().top-200)){
			$(".fdleft ul li").eq(0).addClass("on1");
		}else{
			$(".fdleft ul li").eq(0).removeClass("on1");
		}
		if($(window).scrollTop()>($('#spio2').offset().top-200)){
			$(".fdleft ul li").eq(1).addClass("on1");
			$(".fdleft ul li").eq(0).removeClass("on1");
		}else{
			$(".fdleft ul li").eq(1).removeClass("on1");
		}
		if($(window).scrollTop()>($('#spio3').offset().top-200)){
			$(".fdleft ul li").eq(2).addClass("on1");
			$(".fdleft ul li").eq(1).removeClass("on1");
		}else{
			$(".fdleft ul li").eq(2).removeClass("on1");
		}
		if($(window).scrollTop()>($('#spio4').offset().top-200)){
			$(".fdleft ul li").eq(3).addClass("on1");
			$(".fdleft ul li").eq(2).removeClass("on1");
		}else{
			$(".fdleft ul li").eq(3).removeClass("on1");
		}
		if($(window).scrollTop()>($('#spio5').offset().top-200)){
			$(".fdleft ul li").eq(4).addClass("on1");
			$(".fdleft ul li").eq(3).removeClass("on1");
		}else{
			$(".fdleft ul li").eq(4).removeClass("on1");
		}
		if($(window).scrollTop()>($('#spio6').offset().top-200)){
			$(".fdleft ul li").eq(5).addClass("on1");
			$(".fdleft ul li").eq(4).removeClass("on1");
		}else{
			$(".fdleft ul li").eq(5).removeClass("on1");
		}
		if($(window).scrollTop()>($('#spio7').offset().top-200)){
			$(".fdleft ul li").eq(6).addClass("on1");
			$(".fdleft ul li").eq(5).removeClass("on1");
		}else{
			$(".fdleft ul li").eq(6).removeClass("on1");
		}
		if($(window).scrollTop()>($('#spio8').offset().top-200)){
			$(".fdleft ul li").eq(7).addClass("on1");
			$(".fdleft ul li").eq(6).removeClass("on1");
		}else{
			$(".fdleft ul li").eq(7).removeClass("on1");
		}
		if($(window).scrollTop()>($('#spio9').offset().top-200)){
			$(".fdleft ul li").eq(8).addClass("on1");
			$(".fdleft ul li").eq(7).removeClass("on1");
		}else{
			$(".fdleft ul li").eq(8).removeClass("on1");
		}
		if($(window).scrollTop()>($('#spio10').offset().top-200)){
			$(".fdleft ul li").eq(9).addClass("on1");
			$(".fdleft ul li").eq(8).removeClass("on1");
		}else{
			$(".fdleft ul li").eq(9).removeClass("on1");
		}
		if($(window).scrollTop()>($('#spio11').offset().top-200)){
			$(".fdleft ul li").eq(10).addClass("on1");
			$(".fdleft ul li").eq(9).removeClass("on1");
		}else{
			$(".fdleft ul li").eq(10).removeClass("on1");
		}
		// if($(window).scrollTop()>($('#spio12').offset().top-200)){
		// 	$(".fdleft ul li").eq(11).addClass("on1");
		// 	$(".fdleft ul li").eq(10).removeClass("on1");
		// }else{
		// 	$(".fdleft ul li").eq(11).removeClass("on1");
		// }
		// if($(window).scrollTop()>($('#spio13').offset().top-200)){
		// 	$(".fdleft ul li").eq(12).addClass("on1");
		// 	$(".fdleft ul li").eq(11).removeClass("on1");
		// }else{
		// 	$(".fdleft ul li").eq(12).removeClass("on1");
		// }
		// if($(window).scrollTop()>($('#spio14').offset().top-200)){
		// 	$(".fdleft ul li").eq(13).addClass("on1");
		// 	$(".fdleft ul li").eq(12).removeClass("on1");
		// }else{
		// 	$(".fdleft ul li").eq(13).removeClass("on1");
		// }
	});
	$(".fdright ul li").hover(function(){
	$(this).addClass("on");
	
	},function(){
		$(this).removeClass("on");
		});
$(document).ready(function(e) {
   $(".omeIm2 span").text($(".omeIm2 span").text().substring(0, 8) + "******");  
  
});


