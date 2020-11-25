// This will contain animations ,styling of sidenavs etc

// var about = document.getElementById("about-section");
var sidenavbar=document.getElementById("sidenav")
var maincontent=document.getELementById("main");
var sticky = maincontent.offsetTop - 75;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    sidenavbar.classList.add("sticky");
    sidenavbar.classList.remove("not-fixed")
  } else {
    sidenavbar.classList.add("not-fixed")
    sidenavbar.classList.remove("sticky");
  }
}