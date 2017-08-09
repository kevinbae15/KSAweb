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
    
  document.getElementById("container").style.marginLeft = margin;
  document.getElementById("page6").style.marginLeft = margin;
  document.getElementById("mySidenav").style.width = margin2;
  document.getElementById("naviBar").style.background = "#111";
  document.getElementById("bar1").style.background = "white";
  document.getElementById("bar2").style.background = "white";
  document.getElementById("bar3").style.background = "white";
}


function closeNav() {
  document.getElementById("page6").style.marginLeft = "0%";
  document.getElementById("container").style.marginLeft = "9%";
  document.getElementById("mySidenav").style.width = "6%";
  document.getElementById("naviBar").style.background = "white";
  document.getElementById("bar1").style.background = "black";
  document.getElementById("bar2").style.background = "black";
  document.getElementById("bar3").style.background = "black";
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