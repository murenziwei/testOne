$(function(){
  var curAddressIdx = 0;
  $('#sel-address').selectbox({
    onChange:function(val,inst){
      if(curAddressIdx == val){
        return;
      }
      curAddressIdx = val;
      _switchGroup();
    }
  });
  function _switchGroup(){
    var $option = $('#sel-address').children().eq(curAddressIdx);
    var en = $option.data('en'); 
    var zh = $option.data('zh'); 
    $('.address-zh').html(zh);
    $('.address-en').html(en);
    $('.group-image.active').removeClass('active');
    $('#addr-'+curAddressIdx).addClass('active');
  }
  $('.group-image').slidesjs({
    pagination: {
      active: false
    },
    navigation: {
      active: false
    },
    height: 629,
    width:809
  });
  $('.group-image').css({display:''});
  _switchGroup();

  function moveSlider(direction){
    var $act = $('.group-image.active');
    var p = $act.data('plugin_slidesjs');
    if(direction < 0){
      p.previous();
    }else{
      p.next();
    }
  }

  $('#show-room .nav-pre,#show-room-pre').click(function(){
    moveSlider(-1);
  });
  $('#show-room .nav-next,#show-room-next').click(function(){
    moveSlider(1);
  });
});
