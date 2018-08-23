$(function() {
  scrollable('.news-entity.active');
  switchContent('#brand-news .nav-list a', '.news-entity');
  var $list = $('#brand-news .nav-list');
  var step = 140;
  var containerHeight = 560;
  var totalCount = $list.children().length;
  var curIdx = 0;
  var canMove = true;
  function _move(direction) {
    var pos = $list.position();
    var top = pos.top;
    if (direction < 0 && curIdx == totalCount - 4) {
      return;
    }
    if (direction > 0 && curIdx == 0) {
      return;
    }
    if (!canMove) {
      return;
    }
    canMove = false;
    top = top + direction * step;
    curIdx = curIdx - direction;
    TweenLite.to('#brand-news .nav-list', 0.4, {
      top: top,
      onComplete: function() {
        canMove = true;
      }
    });

  }
  $('#brand-news .pre').click(function() {
    _move( 1);
  });
  $('#brand-news .after').click(function() {
    _move(-1);
  });
});

