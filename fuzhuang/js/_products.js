$(function() {
  var seriesType = "large";
  var seriesSeason = "spring";
  function showBigImg(el) {
    //ImageTour.show(el);
  }

  $('.prod-series-section-gallery ul li').each(function(){
    var $this = $(this);
    $this.find('a').attr('href',$this.data('ref'));
  });




  $('.prod-series-section-gallery').productsGallery({
    itemClick: showBigImg,
    height: 530,
    perNumber:4
  });


  $('.prod-series-section-gallery').each(function(){
    var $this = $(this);
    var sel = '#'+$this.attr('id')+' ul li a';
    $(sel).colorbox({
      rel:sel,
      returnFocus:false
    });

  });


  $('.sub-menu a:first').addClass('active');

  $('.video-nav li').click(function(){
    var $this = $(this);
    var ref = $this.data('ref');
    var root = $this.parents('.video-wrapper');
    $('iframe',root).attr('src',ref);
  });
  
  // handle menu click
  $('.sub-menu a').click(function(){
    var $this = $(this);
    $('.sub-menu a').removeClass('active');
    $this.addClass('active');
    var menuKey = $this.data('en').toLowerCase();
    // if(menuKey == "product"){
    //   menuKey = "large";
    // }
    switch(menuKey){
      case "seasons":
        seriesSeason = "spring";
        seriesType = "large";
        $('#prod-series-'+seriesSeason+'-'+seriesType).removeClass('active');
        $('#prod-seasons').addClass('active');
        $('#prod-series,#prod-production').removeClass('active');
        $('.prod-series-section.active').removeClass('active');
        break;
      case "product":
        $('#prod-series > div.active').removeClass('active');
        $('.prod-section').removeClass('active');
        $('#prod-production').addClass('active');

        break;
      case "large":
      case "collocation":
      case "video":
        $('#prod-series-'+seriesSeason+'-'+seriesType).removeClass('active');
        seriesType = menuKey;
        $('.products-gallery').removeClass('active');
        $('#sub-menu-prod-'+seriesSeason).addClass('active');
        $('#prod-seasons,#prod-production').removeClass('active');
        $('#prod-series').addClass('active');
        $('#prod-series-'+seriesSeason+'-'+seriesType).addClass('active');
        if(menuKey == "video"){
          $('.left',$('#prod-series-'+seriesSeason+'-'+seriesType)).jScrollPane();
        }

        break;
      case "spring":
      case "summer":
      case "autumn":
      case "winter":
        $('#prod-series-'+seriesSeason+'-'+seriesType).removeClass('active');
        seriesSeason = menuKey;
        $('#sub-menu-prod-'+seriesType).addClass('active');
        $('#prod-seasons').removeClass('active');
        $('#prod-series').addClass('active');
        $('#prod-series-'+seriesSeason+'-'+seriesType).addClass('active');
        if(seriesType == "video"){
          $('.left',$('#prod-series-'+seriesSeason+'-'+seriesType)).jScrollPane();
        }
        break;
      default:
        break;
    }

  });

// for seasons link

$('#prod-seasons li').click(function(){
  var $this = $(this);
  var ref = '#prod-'+$this.attr('id')+'-large';
  $('#prod-seasons').removeClass('active');
  //$('#prod-series > div.active').remvoeClass('active');
  $(ref).addClass('active');
  $('#prod-series').addClass('active');
});

$('#prod-production li').click(function(){
  var $this = $(this);
  var ref = '#prod-'+$this.attr('id')+'-collocation';
  $('#prod-production').removeClass('active');
  //$('#prod-series > div.active').remvoeClass('active');
  $(ref).addClass('active');
  $('#prod-series').addClass('active');
});

$('#products .sub-menu a').hover(
  function(){
    var $this= $(this);
    $this.data('en',$this.text());
    $this.text($this.data('zh'));
  },
  function(){
    var $this = $(this);
    $this.text($this.data('en'));
  });



});

