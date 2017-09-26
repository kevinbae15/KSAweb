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

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

var slideIndex = 1;


$(document).ready(function(){
  showSlides(slideIndex);
})

var first = true;
var open = false;

function checkPosition() {
    if (window.matchMedia('(max-width: 767px)').matches) {
        margin = "-100%";
        margin2 = "100%";
        side = "0%";
    } else {
        margin = "-38%";
        margin2 = "38%";
      side = "0%";
    }
}

checkPosition();
window.addEventListener('resize', checkPosition, false); 

function openNav() {
    
//  document.getElementById("container").style.marginLeft = margin;
  document.getElementById("mySidenav").style.width = margin2;
  document.getElementById("naviBar").style.background = "#111";
  document.getElementById("bar1").style.background = "white";
  document.getElementById("bar2").style.background = "white";
  document.getElementById("bar3").style.background = "white";
  if (window.matchMedia('(max-width: 480px)').matches){
   console.log("HELLO"); document.getElementById("phone-menu").style.background = "#111";
  }
}


function closeNav() {
//  document.getElementById("container").style.marginLeft = "9%";
  document.getElementById("mySidenav").style.width = side;
  document.getElementById("naviBar").style.background = "white";
  if (window.matchMedia('(max-width: 480px)').matches){
    document.getElementById("phone-menu").style.background = "deepskyblue";
  }
  else{
    document.getElementById("bar1").style.background = "black";
  document.getElementById("bar2").style.background = "black";
  document.getElementById("bar3").style.background = "black";
  }
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