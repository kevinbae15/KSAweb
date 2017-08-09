var first = true;
var open = false;

function checkPosition() {
    if (window.matchMedia('(max-width: 767px)').matches) {
        margin = "-100%";
        margin2 = "100%";
    } else {
        margin = "-38%";
        margin2 = "38%";
    }
}

checkPosition();
window.addEventListener('resize', checkPosition, false);  

function openNav() {
  
  document.getElementById("navi").style.width = margin2;
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  
  document.getElementById("navi").style.width = "0%";
  document.body.style.backgroundColor = "white";
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

window.onload = (function () { 
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







