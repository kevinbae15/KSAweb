 $('.animation-heading1').delay(100).show().addClass('in-view')
   $('.animation-element1').addClass('in-view');

var first = true;
var open = false;



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







var Eventpage = Barba.BaseView.extend({
  namespace: 'eventpage',
  onEnter: function() {
      // The new Container is ready and attached to the DOM.
  },
  onEnterCompleted: function() {
      console.log("HELLO");
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
  },
  onLeave: function() {
      // A new Transition toward a new page has just started.
  },
  onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
  }
});

// Don't forget to init the view!
Eventpage.init();
















var Homepage = Barba.BaseView.extend({
  namespace: 'homepage',
  onEnter: function() {
      // The new Container is ready and attached to the DOM.
  },
  onEnterCompleted: function() {
     
window.onload = (function () { 
     document.getElementById("navi").style.width = "38%";
  
  
    $('#pagepiling').pagepiling({
      verticalCentered: false,
      scrollingSpeed: 500,
      css3: false,
      sectionSelector: '.page',
      //anchors: ['page1', 'page2', 'page3','page4'],
      onLeave: function (index, nextIndex, direction) {
        //fading out the text of the leaving section
        //$('.section').eq(index - 1).find('h1, p').fadeOut(700, 'easeInQuart');

        //fading in the text of the destination (in case it was fadedOut)
        //$('.section').eq(nextIndex - 1).find('h1, p').fadeIn(700, 'easeInQuart');
      },
      afterRender: function(){
      
		    
        //$('.animation-heading1').hide("fast",function() {
    // Use arguments.callee so we don't need a named function
        $('.img1').addClass('in-view');
      
        //$('.img1').hide();
      },
      afterLoad: function(anchorLink, index){
        if(index == 1){
          $('.animation-element1').addClass('in-view');
          $('.animation-element2').removeClass('in-view');
          $('.animation-element3').removeClass('in-view');
          $('.animation-element4').removeClass('in-view');
          $('.animation-heading1').addClass('in-view');
          $('.animation-heading2').removeClass('in-view');
          $('.animation-heading3').removeClass('in-view');
          $('.animation-heading4').removeClass('in-view');
          $('.img1').addClass('in-view');
          $('.img2').removeClass('in-view');
          $('.img3').removeClass('in-view');
          $('.img4').removeClass('in-view');
        }
        if(index == 2){
          $('.animation-element1').removeClass('in-view');
          $('.animation-element2').addClass('in-view');
          $('.animation-element3').removeClass('in-view');
          $('.animation-element4').removeClass('in-view');
          $('.animation-heading1').removeClass('in-view');
          $('.animation-heading2').addClass('in-view');
          $('.animation-heading3').removeClass('in-view');
          $('.animation-heading4').removeClass('in-view');
          $('.img1').removeClass('in-view');
          $('.img2').addClass('in-view');
          $('.img3').removeClass('in-view');
          $('.img4').removeClass('in-view');
          
        }
        if(index == 3){
          $('.animation-element1').removeClass('in-view');
          $('.animation-element2').removeClass('in-view');
          $('.animation-element3').addClass('in-view');
          $('.animation-element4').removeClass('in-view');
          $('.animation-heading1').removeClass('in-view');
          $('.animation-heading2').removeClass('in-view');
          $('.animation-heading3').addClass('in-view');
          $('.animation-heading4').removeClass('in-view');
          $('.img1').removeClass('in-view');
          $('.img2').removeClass('in-view');
          $('.img3').addClass('in-view');
          $('.img4').removeClass('in-view');
        }
        if(index == 4){
          $('.animation-element1').removeClass('in-view');
          $('.animation-element2').removeClass('in-view');
          $('.animation-element3').removeClass('in-view');
          $('.animation-element4').addClass('in-view');
          $('.animation-heading1').removeClass('in-view');
          $('.animation-heading2').removeClass('in-view');
          $('.animation-heading3').removeClass('in-view');
          $('.animation-heading4').addClass('in-view');
          $('.img1').removeClass('in-view');
          $('.img2').removeClass('in-view');
          $('.img3').removeClass('in-view');
          $('.img4').addClass('in-view');
        }
      }
    });
    $('.animation-heading1').hide();
  $('.animation-heading1').delay(100).show().addClass('in-view')
   $('.animation-element1').addClass('in-view');
});
  },
  onLeave: function() {
      // A new Transition toward a new page has just started.
  },
  onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
  }
});

// Don't forget to init the view!
Homepage.init();


$(document).ready(function(){
  Barba.Pjax.start();
});