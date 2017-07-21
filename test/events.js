var first = true;
var open = false;


function openNav() {
    
  document.getElementById("container").style.marginLeft = "-38%";
  document.getElementById("mySidenav").style.width = "38%";
}


function closeNav() {
  document.getElementById("container").style.marginLeft = "6%";
  document.getElementById("mySidenav").style.width = "6%";
}


function myFunction(x) {
  x.classList.toggle("change");
  if(open == false){
    openNav();
    open = true;
  }
  else{
    closeNav();
    open = false;
  }
  
}


var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    $('.LAYER').css({
      visibility: 'visible'
    });
    $('.loading-logo').css({
      opacity: 1   
    });
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    $('.LAYER').addClass('in-view');
    $('.loading-logo').addClass('in-view');
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
        $('.loading-logo').addClass('right');
        $('.loading-logo').css({
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
      $('.loading-logo').removeClass('right');
      $('.loading-logo').removeClass('in-view');
    },1200);

  }
});

Barba.Pjax.getTransition = function() {
  return FadeTransition;
};

$(document).ready(function(){
  Barba.Pjax.start();
});
