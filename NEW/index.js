window.onload = function() {
    $('html, body').animate({
        scrollTop: $("#page1").offset().top + 80
    }, 900);
};

$(document).ready(function(){
  $('.nav_link').hide();
  $('.intro').hide();
  $(".intro").fadeIn(1700);
  $(".nav_link").fadeIn(1700);
  
  $("#E").click(function() {
    $('html, body').animate({
        scrollTop: $("#page2").offset().top + 5
    }, 750);
  });
  $("#CS").click(function() {
    $('html, body').animate({
        scrollTop: $("#page3").offset().top + 5
    }, 1500);
  });
  $("#EX").click(function() {
    $('html, body').animate({
        scrollTop: $("#page4").offset().top + 5
    }, 2000);
  });
  
  
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}