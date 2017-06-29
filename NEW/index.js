window.onload = function() {
    $('html, body').animate({
        scrollTop: $("#page1").offset().top + 80
    }, 1200);
};

$(document).ready(function(){
  $('.nav_link').hide();
  $('.intro').hide();
  $(".intro").fadeIn(2000);
  $(".nav_link").fadeIn(2000);
  
  $("#E").click(function() {
    $('html, body').animate({
        scrollTop: $("#page2").offset().top + 5
    }, 750);
  });
})
     
