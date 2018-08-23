$(function() {
  $('#landing .animate').center({
    against: 'parent'
  });
  var $elie = $('#landing .animate'),
  degree = 0,
  timer;
  function rotate() {
    $elie.css({
      WebkitTransform: 'rotate(' + degree + 'deg)',
      '-moz-transform': 'rotate(' + degree + 'deg)',
      '-ms-transform': 'rotate(' + degree + 'deg)',
    });
    /*
    $elie.css({
      '-moz-transform': 'rotate(' + degree + 'deg)'
    });
    */
    timer = setTimeout(function() {++degree;
      rotate();
    },
    5);
  }
  //rotate();

});

