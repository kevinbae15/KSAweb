$(document).ready(function(){
  $('.nav_link').hide();
  $('.intro').hide();
  $(".intro").fadeIn(1500);
  $(".nav_link").fadeIn(1500);
  
  $("#E").click(function() {
    $('html, body').animate({
        scrollTop: $("#page2").offset().top + 70
    }, 1500);
  });
})
     
