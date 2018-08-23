$(function(){

	//下拉菜单
	$('.topnav>.m_l_n_menu').click(function(){
	    var dV=$(this).siblings().css("display");
	    if(dV=='none'){
	        $(this).siblings().slideDown('slow');
	        $(this).children(0).children(1).children(0).attr('src','assets/img/minus.png');
	    }else{
	        $(this).siblings().slideUp('slow');

	        $(this).children(0).children(1).children(0).attr('src','assets/img/plus.png');
	    }
	});
	//添加图片
	$('.add_pic_file').change(function(){
         var files=this.files;
         if(files[0]){
         	for(var i=0;i<files.length;i++){
                var img=document.createElement('img'),liL=document.createElement('li');
                $(img).attr('src',window.URL.createObjectURL(files[i]));
                $(img).css({width:'100%',height:'100%'});
                $(liL).addClass('p_v_li');
                liL.appendChild(img);
                var dD=document.createElement('div');
                $(dD).attr('style','background-color:rgba(0,0,0,0.5);position:absolute;bottom:0;right:0;left:0;display:flex;justify-content:space-around;');
                dD.innerHTML=`
                   <div style="position:relative;overflow:hidden;">
                      <a style="color:white;">替换</a>
                      <input type="file" style="position:absolute;width:100%;top:0;right:0;bottom:0;left:0;opacity:0;" title="做网站找威有" accept="image/*" />
                   </div>
                   <div>
                      <a style="color:white;">删除</a>
                   </div>
                `;
                liL.appendChild(dD);
                $(dD.children[0].children[1]).change(function(){
                	var getTag=this;
                	var fr=new FileReader();
                	var files=getTag.files;
                	if(files[0]){
                		fr.readAsDataURL(files[0]);
                	}
                	fr.onloadend=function(){
                		while(getTag.nodeName!='LI'){
                			getTag=getTag.parentNode;
                		}
                        $(getTag.children[0]).attr('src',fr.result);
                	}
                });
                $(dD.children[1].children[0]).click(function(){
                	var getTag=this;
                	var d=document.createElement('div');
                	d.innerHTML=`
                	  <div style="position:fixed;z-index:999;top:0;left:0;right:0;bottom:0;" onclick="event.stopPropagation();this.parentNode.parentNode.removeChild(this.parentNode);"></div>
                	  <div style="display:none;color:white;width:300px;background-color:rgba(0,0,0,.5);position:fixed;z-index:1000;margin:auto;left:0;right:0;top:30%;">
                	      <div style="height:50px;line-height:50px;text-align:center;">是否删除该图片</div>

                	      <div style="display:flex;justify-content:center;align-items:center;">
                	          <div style="flex:1;height:1px;background:linear-gradient(to left,rgb(255,255,255),rgba(255,255,255,.6),rgba(255,255,255,.3));"></div>
                	          <div style="flex:1;height:1px;background:linear-gradient(to right,rgb(255,255,255),rgba(255,255,255,.6),rgba(255,255,255,.3));"></div>
                	      </div>
                	      <div style="display:flex;justify-content:center;height:50px;align-items:center;">
                	          <div style="height:50px;line-height:50px;flex:1;text-align:center;">
                                  确认
                	          </div>
                	          <div style="height:50px;width:1px;background:linear-gradient(to bottom,rgb(255,255,255),rgba(255,255,255,.6),rgba(255,255,255,.3));"></div>
                	          <div style="height:50px;line-height:50px;flex:1;text-align:center;">
                                  取消
                	          </div>
                	      </div>
                	  </div>
                	`;

                	$(d.children[1].children[2].children[0]).click(function(){
                		var getParent=this;
                		while(getParent.nodeName!='LI'){
                			getParent=getParent.parentNode;
                		}
                		getParent.parentNode.removeChild(getParent);
                	});
                	$(d.children[1].children[2].children[2]).click(function(e){
                		
                		e.stopPropagation();
                		
                		d.parentNode.removeChild(d);
                	});
                	this.appendChild(d);
                	$(d.children[1]).slideDown(200);
                });
                var getParent=this;
                while(getParent.className!='pic_vessel1'){
                	getParent=getParent.parentNode;
                }
                getParent.insertBefore(liL,getParent.lastElementChild);
            }
         }
	});
  $('.add_pic_name').change(function(){
         var files=this.files;
         if(files[0]){
          for(var i=0;i<files.length;i++){
                var img=document.createElement('img'),liL=document.createElement('li');
                $(img).attr('src',window.URL.createObjectURL(files[i]));
                $(img).css({width:'100%',height:'100%'});
                $(liL).addClass('p_v_li');
                liL.appendChild(img);
                var dD=document.createElement('div');
                $(dD).attr('style','background-color:rgba(0,0,0,0.5);position:absolute;bottom:0;right:0;left:0;display:flex;justify-content:space-around;');
                dD.innerHTML=`
                   <div style="position:relative;overflow:hidden;">
                      <a style="color:white;">替换</a>
                      <input type="file" style="position:absolute;width:100%;top:0;right:0;bottom:0;left:0;opacity:0;" title="做网站找威有" accept="image/*" />
                   </div>
                   <div>
                      <a style="color:white;">删除</a>
                   </div>
                `;
                liL.appendChild(dD);
                $(dD.children[0].children[1]).change(function(){
                  var getTag=this;
                  var fr=new FileReader();
                  var files=getTag.files;
                  if(files[0]){
                    fr.readAsDataURL(files[0]);
                  }
                  fr.onloadend=function(){
                    while(getTag.nodeName!='LI'){
                      getTag=getTag.parentNode;
                    }
                        $(getTag.children[0]).attr('src',fr.result);
                  }
                });
                $(dD.children[1].children[0]).click(function(){
                  var getTag=this;
                  var d=document.createElement('div');
                  d.innerHTML=`
                    <div style="position:fixed;z-index:999;top:0;left:0;right:0;bottom:0;" onclick="event.stopPropagation();this.parentNode.parentNode.removeChild(this.parentNode);"></div>
                    <div style="display:none;color:white;width:300px;background-color:rgba(0,0,0,.5);position:fixed;z-index:1000;margin:auto;left:0;right:0;top:30%;">
                        <div style="height:50px;line-height:50px;text-align:center;">是否删除该图片</div>

                        <div style="display:flex;justify-content:center;align-items:center;">
                            <div style="flex:1;height:1px;background:linear-gradient(to left,rgb(255,255,255),rgba(255,255,255,.6),rgba(255,255,255,.3));"></div>
                            <div style="flex:1;height:1px;background:linear-gradient(to right,rgb(255,255,255),rgba(255,255,255,.6),rgba(255,255,255,.3));"></div>
                        </div>
                        <div style="display:flex;justify-content:center;height:50px;align-items:center;">
                            <div style="height:50px;line-height:50px;flex:1;text-align:center;">
                                  确认
                            </div>
                            <div style="height:50px;width:1px;background:linear-gradient(to bottom,rgb(255,255,255),rgba(255,255,255,.6),rgba(255,255,255,.3));"></div>
                            <div style="height:50px;line-height:50px;flex:1;text-align:center;">
                                  取消
                            </div>
                        </div>
                    </div>
                  `;

                  $(d.children[1].children[2].children[0]).click(function(){
                    var getParent=this;
                    while(getParent.nodeName!='LI'){
                      getParent=getParent.parentNode;
                    }
                    getParent.parentNode.removeChild(getParent);
                  });
                  $(d.children[1].children[2].children[2]).click(function(e){
                    
                    e.stopPropagation();
                    
                    d.parentNode.removeChild(d);
                  });
                  this.appendChild(d);
                  $(d.children[1]).slideDown(200);
                });
                var dN=document.createElement('div');
                dN.style.opacity=1;
                dN.innerHTML="<input type='text' class='form-control apn_input' placeholder='输入名称' />";
                liL.appendChild(dN);
                var getParent=this;
                while(getParent.className!='pic_vessel1'){
                  getParent=getParent.parentNode;
                }
                getParent.insertBefore(liL,getParent.lastElementChild);
            }
         }
  });
    $('.pvof_input').change(function(){
    	if(this.files[0]){
	    	var dD=document.createElement('div');
	    	$(dD).addClass('p_i_content');
	    	dD.innerHTML=`<img src="${window.URL.createObjectURL(this.files[0])}" style="position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;" />`;
	    	var dDClose=document.createElement('div');
	    	dDClose.innerHTML='+';
	    	$(dDClose).addClass('d_d_close');
	    	dDClose.onclick=function(){
	        	dD.parentNode.removeChild(dD);
	        }
	        dD.appendChild(dDClose);

	        var dD1=document.createElement('div');
	        $(dD1).addClass('p_i_c_plug');
	        $(dD1).attr('style','background-color:rgba(0,0,0,0.5);position:absolute;bottom:0;right:0;left:0;display:flex;justify-content:space-around;');
	        dD1.innerHTML=`
	           <div style="position:relative;overflow:hidden;">
	              <a style="color:white;">替换</a>
	              <input type="file" style="position:absolute;width:100%;top:0;right:0;bottom:0;left:0;opacity:0;" accept="image/*" title="做网站找威有"/>
	           </div>
	           <div>
	              <a style="color:white;">删除</a>
	           </div>
	        `;
	        $(dD1.children[0].children[1]).change(function(){
	        	var getTag=this;
	        	var fr=new FileReader();
	        	var files=getTag.files;
	        	if(files[0]){
		        	fr.readAsDataURL(files[0]);
		        	fr.onloadend=function(){
		                $(dD.children[0]).attr('src',fr.result);
		        	}
	        	}
	        });
	        $(dD1.children[1].children[0]).click(function(){
	        	var getTag=this;
	        	var d=document.createElement('div');
	        	d.innerHTML=`
	        	  <div style="position:fixed;z-index:999;top:0;left:0;right:0;bottom:0;" onclick="event.stopPropagation();this.parentNode.parentNode.removeChild(this.parentNode);"></div>
	        	  <div style="display:none;color:white;width:300px;background-color:rgba(0,0,0,.5);position:fixed;z-index:1000;margin:auto;left:0;right:0;top:30%;">
	        	      <div style="height:50px;line-height:50px;text-align:center;">是否删除该图片</div>

	        	      <div style="display:flex;justify-content:center;align-items:center;">
	        	          <div style="flex:1;height:1px;background:linear-gradient(to left,rgb(255,255,255),rgba(255,255,255,.6),rgba(255,255,255,.3));"></div>
	        	          <div style="flex:1;height:1px;background:linear-gradient(to right,rgb(255,255,255),rgba(255,255,255,.6),rgba(255,255,255,.3));"></div>
	        	      </div>
	        	      <div style="display:flex;justify-content:center;height:50px;align-items:center;">
	        	          <div style="height:50px;line-height:50px;flex:1;text-align:center;">
	                          确认
	        	          </div>
	        	          <div style="height:50px;width:1px;background:linear-gradient(to bottom,rgb(255,255,255),rgba(255,255,255,.6),rgba(255,255,255,.3));"></div>
	        	          <div style="height:50px;line-height:50px;flex:1;text-align:center;">
	                          取消
	        	          </div>
	        	      </div>
	        	  </div>
	        	`;

	        	$(d.children[1].children[2].children[0]).click(function(){
	        		
	        		dD.parentNode.removeChild(dD);
	        	});
	        	$(d.children[1].children[2].children[2]).click(function(e){
	        		
	        		e.stopPropagation();
	        		
	        		d.parentNode.removeChild(d);
	        	});
	        	this.appendChild(d);
	        	$(d.children[1]).slideDown(200);
	        });
	        dD.appendChild(dD1);
	        var getParent=this;
	        while(getParent.className!='p_v_o_file'){
	        	getParent=getParent.parentNode;
	        }

	        getParent.appendChild(dD);
    	}
    });
    //文本编辑器
    KindEditor.ready(function(K){
    	window.editor=K.create("#kindeditor");
    });
    //下拉菜单
    $(".L_downmenu").click(function(e){
    	e.stopPropagation();
    	var $frag=$(this).next(".L_downmenu_toggle");
		if($frag.css("display")=="none"){
           $(".L_downmenu_toggle").slideUp(300);
           $frag.slideDown(300);
		}else{
		   $(".L_downmenu_toggle").slideUp(300);
		}
    });
    //复选框
    $("[name='handChoose']").change(function(){
    	$("[data-choose='true']").removeAttr("data-choose");

    	$(this).attr("data-choose","true");
    });
    //重置 
	$("[data-type='reset']").on("click",function(ev){
        var getTag=this;
        var d=document.createElement('div');
        d.innerHTML=`
          <div style="position:fixed;z-index:999;top:0;left:0;right:0;bottom:0;" onclick="event.stopPropagation();this.parentNode.parentNode.removeChild(this.parentNode);"></div>
          <div style="display:none;color:white;width:300px;background-color:rgba(0,0,0,.5);position:fixed;z-index:1000;margin:auto;left:0;right:0;top:30%;">
              <div style="height:50px;line-height:50px;text-align:center;">确定要重置表单？</div>

              <div style="display:flex;justify-content:center;align-items:center;">
                  <div style="flex:1;height:1px;background:linear-gradient(to left,rgb(255,255,255),rgba(255,255,255,.6),rgba(255,255,255,.3));"></div>
                  <div style="flex:1;height:1px;background:linear-gradient(to right,rgb(255,255,255),rgba(255,255,255,.6),rgba(255,255,255,.3));"></div>
              </div>
              <div style="display:flex;justify-content:center;height:50px;align-items:center;">
                  <div style="height:50px;line-height:50px;flex:1;text-align:center;">
                      确认
                  </div>
                  <div style="height:50px;width:1px;background:linear-gradient(to bottom,rgb(255,255,255),rgba(255,255,255,.6),rgba(255,255,255,.3));"></div>
                  <div style="height:50px;line-height:50px;flex:1;text-align:center;">
                      取消
                  </div>
              </div>
          </div>
        `;
        $(d.children[1].children[2].children[0]).click(function(e){
           e.stopPropagation();
           $("[data-choose='true']").removeAttr("data-choose");
           $(".y_c_checked").attr("data-choose","true");
           $(".p_i_content").remove();
           $(".p_v_li").remove();
           $(d).remove();
           var formF=document.querySelector("[name='formContent']");
           if(formF){
            formF.reset();
           }
        });
        $(d.children[1].children[2].children[2]).click(function(e){
            
            e.stopPropagation();
            
            d.parentNode.removeChild(d);
            
        });
        this.appendChild(d);
        $(d.children[1]).slideDown(200);
        return false;

        // var judge=confirm("确定要重置表单？");
        // if(judge){
        //    $("[data-choose='true']").removeAttr("data-choose");
        //    $(".y_c_checked").attr("data-choose","true");
        //    $(".p_i_content").remove();
        //    $(".p_v_li").remove();
        //    return true;
        // }else{
        //    return false;
        // }
        // return false;
    })
}) 