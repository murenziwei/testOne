if((typeof jQuery)=="function"){
    //创建构造函数
	function LW(){
		this.arr=['all','online','unline'];
		this.extrude=function(str){
			$('.am_table>tbody>tr').css({display:'none'});
			var arr=$('.am_table>tbody>tr.'+str);
			arr.css({display:'table-row'});
			$('.am_l_c').html('('+arr.length+')');
			$('#quantity').html(arr.length);
		};
	}
	var fnL=new LW();
	$(document).ready(function(){
		
		/*index的js*/
		//提示工具
		$("[data-toggle='tooltip']").tooltip();
		//弹出窗
		$("[data-toggle='popover']").popover({html:true,placement:"auto"});
		//悬浮时的过渡效果
		$(".f_r_hover").hover(
			function(){
				if($(this).attr("data-fn")==="fade"){
					$(this).find(".dropdown-menu").fadeIn(200);
				}else{
					$(this).find(".dropdown-menu").show(200);
				}
			},
			function(){
			    if($(this).attr("data-fn")==="fade"){
			    	$(this).find(".dropdown-menu").fadeOut(200);
			    }else{
			    	$(this).find(".dropdown-menu").hide(200);
			    }
			});
		//导航toggle
		$(".f_r_control").click(function(){
			if($(this).attr("normal")=='false'){
				$(this).attr("normal","true");
				$(this).parent().addClass('scroll_auto');
			}else{
				$(this).attr("normal",'false');
				$(this).parent().removeClass('scroll_auto');
			}
		});

		/*site的js*/
		$('.toggle_btn>[type=checkbox]').change(function(){
			if($(this).parent().hasClass('open')){
				$(this).parent().removeClass('open');
			}else{
				$(this).parent().addClass('open');
			};
		});

		/*domain的ja*/
		$('.domain_navbar>.btn-group>button').click(function(){
			if(!$(this).hasClass('.btn_blue')){
				var arr=$(this).parent().children();
				arr.removeClass('btn-blue');

				$(this).addClass('btn-blue');

				var index=$(this).prevAll().length;
				var getP=$(this).parent().next();
				getP.find('.bgn_show').removeClass('bgn_show');
			    $(getP[0].children[index]).addClass('bgn_show');
			}
		});
		$('.domain .domain_choose>div').click(function(){
			var index=$(this).prevAll().length;
			var arr=$(this).parent().children();
			arr.removeClass('d_c_decide');
			$(this).addClass('d_c_decide');
			var getT=$(this).parent().parent().parent().next();
			getT.children().removeClass('d_t_show');
			$(getT[0].children[index]).addClass('d_t_show');
		});

		/*articleManagement.html的js*/
		$(".am_file_input").change(function(){
			if(this.files[0]){
				var str=window.URL.createObjectURL(this.files[0]);
	            var next=this.parentNode.nextElementSibling;
	            $(next).prev().fadeOut(100);
	            $(next).fadeIn(100);
	            next.style.backgroundImage='url('+str+')';
			}           
		});
		$(".am_file_replace").click(function(){
			var getP=this;
			while(getP.className!='am_file'){
				getP=getP.parentNode;
			}
			$(getP).find('.am_file_input')[0].click();
		});
		$(".am_file_delete").click(function(){
			var getP=this;
			while(getP.className!='am_file'){
				getP=getP.parentNode;
			}
			$(getP.children[0]).fadeIn(100);
			$(getP.children[1]).fadeOut(100);
			getP.children[1].style.backgroundImage='';
		});
		$(".am_m_l_bottom li").click(function(){
			$(this).siblings().removeClass('extrude');
			$(this).addClass('extrude');
			$('.am_table>tbody>tr').css({display:'none'});
			var arr=$('.am_table>tbody>tr.'+$(this).attr('data-str'));
			arr.css({display:'table-row'});
			$('.am_l_a').html($(this).find('a').text());
			$('.am_l_c').html('('+arr.length+')');
			$('#quantity').html(arr.length);
		});
		
		$(".am_allstatus li>a").click(function(){
			fnL.extrude($(this).attr('data-str'));
		})

		$("thead .am_checkbox").click(function(){
			//thead内的.am_checkbox
			var getP=this;
			while(getP.nodeName!='THEAD'){
				getP=getP.parentNode;
			}
			getP=$(getP).next();
			if($(this).hasClass('on')){
				$(this).removeClass('on');
				getP.find('.am_checkbox').removeClass('on');
				$('.am_checkbox_bianji').fadeOut('slow');
			}else{
				$(this).addClass('on');
				getP.find('.am_checkbox').addClass('on');
				$('.am_checkbox_bianji').fadeIn('slow');
			}
			$(".am_checkbox_bianji .text-danger").html(getP.find('.on').length);
		});
		$("tbody .am_checkbox").click(function(){
			//tbody内的.am_checkbox
			$(this).toggleClass('on');
			var getP=this;
			while(getP.nodeName!='TBODY'){
				getP=getP.parentNode;
			}
			var l=getP.children.length;
			if(l==$(getP).find('.on').length){
				$(getP).prev().find('.am_checkbox').addClass('on');				
			}else if($(getP).find('.on').length==0){
				$(getP).prev().find('.am_checkbox').removeClass('on');
				$('.am_checkbox_bianji').fadeOut('slow');
			}else{
				$('.am_checkbox_bianji').fadeIn('slow');
			}
			$(".am_checkbox_bianji .text-danger").html($(getP).find('.on').length);
		});

		//image.html的js
		$('.i_m_l_bottom>ul>li').click(function(){
			$('.i_v_ul>li').fadeOut(50);
			var str=$(this).find('a').text();
			var child=$("[data-type*='"+str+"']").fadeIn(50);
			
			$('.am_l_a').html(str);
			$('.am_l_c').html("("+child.size()+")");
		})
		$('.i_checkbox').click(function(){
			if($(this).hasClass('on')){
				$(this).removeClass('on');
				$('.am_checkbox_bianji').fadeOut(50);
				$('.ivu_pic:visible').removeClass('i_choose');
			}else{
				$(this).addClass('on');
				$('.am_checkbox_bianji').fadeIn(50);
				$('.ivu_pic:visible').addClass('i_choose');
			}
			$('.i_count').text($('.i_choose:visible').length);
		});
		$('.ivu_pic').click(function(){
			$(this).toggleClass('i_choose');
			var l=$('.i_choose:visible').length;
			if(l===$('.ivu_pic:visible').length){
				$('.am_checkbox_bianji').fadeIn(100);
				$('.all_checkbox').addClass('on');
			}else if(l>0){
				$('.am_checkbox_bianji').fadeIn(100);
				$('.all_checkbox').removeClass('on');
			}else{
				$('.am_checkbox_bianji').fadeOut(100);
				$('.all_checkbox').removeClass('on');
			}
			$('.i_count').text(l);
		})

		/*messageManagement.html的js*/
		$('.mm_s_status>.dropdown-menu>li>a').click(function(){
			var str=$(this).attr('data-str');
			var getP=this;
			while(getP.className!='dropdown-menu'){
				getP=getP.parentNode;
			}
			$(getP).prev().find('.mm_variable').text($(this).text());
			$('.clickBlue').removeClass('clickBlue');
			$(this).addClass('clickBlue');
			$('.mm_table tbody>tr:visible').css("display",'none');
			var arr=$('.mm_table tbody>tr.'+str);
			$('.mm_page').text(arr.length);
			arr.fadeIn(50);
		})
		$('.mm_table thead .all_c_style').click(function(){
			if($(this).parent().hasClass('on')){
				$(this).parent().removeClass('on');
				$('.mm_table tbody>tr:visible').removeClass('on');
				$('.am_checkbox_bianji').fadeOut(50);
				$('.mm_count').text(0);
			}else{
				$(this).parent().addClass('on');
				$('.mm_table tbody>tr:visible').addClass('on');
				$('.am_checkbox_bianji').fadeIn(50);
				$('.mm_count').text($('.mm_table tbody>tr:visible').length);
			}

		});
		$('.mm_table tbody .all_c_style').click(function(){
			var getP=this;
			while(getP.nodeName!='TR'){
				getP=getP.parentNode;
			}
			$(getP).toggleClass('on');
			var l=$(getP).parent().find('tr.on').size();
			if($('.mm_table tbody>tr:visible').length===l){
				$('.mm_table thead .all_c_style').parent().addClass('on');
				$('.am_checkbox_bianji').fadeIn(50);

			}else if(l===0){
				$('.mm_table thead .all_c_style').parent().removeClass('on');
				$('.am_checkbox_bianji').fadeOut(50);
			}else{
				$('.mm_table thead .all_c_style').parent().removeClass('on');
				$('.am_checkbox_bianji').fadeIn(50);
			}
			$('.mm_count').text(l);
		})

		/*orderManagement.html的js*/
		$('.orderManagement .domain_choose>div').click(function(){
			var arr=$(this).parent().children();
			arr.removeClass('d_c_decide');
			$(this).addClass('d_c_decide');
		});

		/*shoplist.html的js*/
		$(".sl_row .sl_success").click(function(){
			var getP=this;
			console.log(getP);
			console.log(getP.className);
			while(!$(getP).hasClass('sl_row')){
				getP=getP.parentNode;
			}
			$(getP).removeClass('isStop');
			$(getP).addClass('isStart');
		})
		$(".sl_row .sl_danger").click(function(){
			var getP=this;
			while(!$(getP).hasClass('sl_row')){
				getP=getP.parentNode;
			}
			$(getP).removeClass('isStart');
			$(getP).addClass('isStop');
		})

		/*robots.html的js*/
		$(".rfile").click(function(){
			$(this).prev()[0].click();
		})

		/*websiteMap.html的js*/
		$(".ws_btns>button").click(function(){
			if(!$(this).hasClass("btn-primary")){
			  $(this).siblings().removeClass("btn-primary");
			  $(this).addClass("btn-primary");
			}
		})

		$('.ws_table thead .all_c_style').click(function(){
			if($(this).parent().hasClass('on')){
				var getP=this;
				while(getP.nodeName!="TABLE"){
					getP=getP.parentNode;
				}
				$(this).parent().removeClass('on');

				$(getP).find("tbody>tr:visible").removeClass('on');
				$(getP).prev().find(".am_checkbox_bianji").fadeOut(50);
				$(getP).prev().find(".mm_count").text(0);
			}else{
				var getP=this;
				while(getP.nodeName!="TABLE"){
					getP=getP.parentNode;
				}
				
				$(this).parent().addClass('on');
				$(getP).find("tbody>tr:visible").addClass('on');
				$(getP).prev().find(".am_checkbox_bianji").fadeIn(50);
				$(getP).prev().find(".mm_count").text($('.mm_table tbody>tr:visible').length);
			}

		});
		$('.ws_table tbody .all_c_style').click(function(){
			var getP=this;
			while(getP.nodeName!='TR'){
				getP=getP.parentNode;
			}
			$(getP).toggleClass('on');

			var l=$(getP).parent().find('tr.on').size();
			while(getP.nodeName!="TABLE"){
				getP=getP.parentNode;
			}
			if($(getP).find("tbody>tr:visible").length===l){
				$(getP).find("thead .all_c_style").parent().addClass('on');
				$(getP).prev().find(".am_checkbox_bianji").fadeIn(50);
			}else if(l===0){
				$(getP).find("thead .all_c_style").parent().removeClass('on');
				$(getP).prev().find(".am_checkbox_bianji").fadeOut(50);
			}else{
				$(getP).find("thead .all_c_style").parent().removeClass('on');
				$(getP).prev().find(".am_checkbox_bianji").fadeIn(50);
			}
			$(getP).prev().find(".mm_count").text(l);
		})

		/*setup.html的js*/
		$(".su_file_button").click(function(){
			this.previousElementSibling.click();
		});

		/*roleManagement.html的js*/
		//模态框的全选
		$(".su_flex>.su_checkbox_flex").click(function(){
			if($(this).hasClass("on")){
				$(this).removeClass("on");
				$(".su_f_content .su_checkbox_flex").removeClass("on");
			}else{
				$(this).addClass("on");
				$(".su_f_content .su_checkbox_flex").addClass("on");
			}
		});
		//模态框全选子项
		$(".su_f_content>ul>li>.su_checkbox_flex").click(function(){

			var target=$(this).next().find(".su_checkbox_flex");
			if($(this).hasClass("on")){
				$(this).removeClass("on");
				target.removeClass("on");
			}else{
				$(this).addClass("on");
				target.addClass("on");
			}
			var getP=this;
			while(getP.className!="su_f_content"){
				getP=getP.parentNode;
			}
			var checkboxs=$(getP).find(".su_checkbox_flex").size();
			var checks=$(getP).find(".su_checkbox_flex.on").size();
	
			if(checkboxs==checks){
				$(getP).prev().find(".su_checkbox_flex").addClass("on");
			}else{
				$(getP).prev().find(".su_checkbox_flex").removeClass("on");
			}
		});

		//全选子项的子项
		$(".su_f_content .su_checkbox_flex+ul>li>.su_checkbox_flex").click(function(){
			if($(this).hasClass("on")){
				$(this).removeClass("on");
			}else{
				$(this).addClass("on");
			}
			var getP=this;
			while(getP.className!="su_c_ul"){
				getP=getP.parentNode;
			}
			var tl=$(getP).find(".su_checkbox_flex").size();
			var cl=$(getP).find(".su_checkbox_flex.on").size();
			if(tl===cl){
				$(getP).prev().addClass("on");
			}else{
				$(getP).prev().removeClass("on");
			}
			
			while(getP.className!="su_f_content"){
				getP=getP.parentNode;
			}
			var checkboxs=$(getP).find(".su_checkbox_flex").size();
			var checks=$(getP).find(".su_checkbox_flex.on").size();
	
			if(checkboxs==checks){
				$(getP).prev().find(".su_checkbox_flex").addClass("on");
			}else{
				$(getP).prev().find(".su_checkbox_flex").removeClass("on");
			}
		});

		/*staffManagement.html的js*/
		$(".sm_hoverS").hover(function(){$(this.children[1]).fadeIn(200)},function(){$(this.children[1]).fadeOut(200)})
		$(".sm_modal_checkbox").click(function(){
			$(this).toggleClass("on");
		})
	});
}else{
	alert("需要依赖jQuery");
}