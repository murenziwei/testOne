$(function(){
  scrollable('.scrollable.active');

  $('#about .item a').click(function(){
    $('#about .item.active').removeClass('active');
    var $this = $(this);
    var ref = $this.data('ref');
    $this.parent().addClass('active');
    $('.details-outer .active').removeClass('active').fadeOut();
    $('#'+ref).fadeIn().addClass('active').jScrollPane();
    
  });

  $('#about .left-nav li').hover(
    function(){
        var $this = $(this);
        var el = $this.find('a');
        el.data('en',el.text());
        el.text(el.data('zh'));
    }
    ,function(){
        var $this = $(this);
        var el = $this.find('a');
        el.text(el.data('en'));
    });

});
