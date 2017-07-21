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
