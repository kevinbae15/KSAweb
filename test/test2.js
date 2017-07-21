var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    $('.LAYER').css({
      visibility: 'visible'
    });
    $('.haha').css({
      opacity: 1   
    });
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    $('.LAYER').addClass('in-view');
    $('.haha').addClass('in-view');
    return $(this.oldContainer).animate({ opacity: 0 },500,function(){}).promise();
  },

  fadeIn: function() {
    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility : 'visible',
      opacity : 0
    });
    
    setTimeout(function() {
      $el.css({
      opacity : 1
    });
      
    $('.LAYER').addClass('right');
        $('.haha').addClass('right');
        $('.haha').css({
          opacity: 0
        });
    }, 500);

    this.done();

    setTimeout(function(){
      $('.LAYER').css({
        visibility: 'hidden'   
      });
    },500);

    setTimeout(function(){
      $('.LAYER').removeClass('right');
      $('.LAYER').removeClass('in-view');
      $('.haha').removeClass('right');
      $('.haha').removeClass('in-view');
    },1200);

  }
});

Barba.Pjax.getTransition = function() {
  return FadeTransition;
};

$(document).ready(function(){
  Barba.Pjax.start();
});