// This will contain animations ,styling of sidenavs etc

// var about = document.getElementById("about-section");
var sidenavbar=document.getElementById("sidenav")
var maincontent=document.getElementById("main");
var sticky = maincontent.offsetTop - 75;


function toggleSidenav() {
  if (window.pageYOffset >= sticky) {
    sidenavbar.classList.add("sidenav-fixed");
    sidenavbar.classList.remove("sidenav-none")
  } else {
    sidenavbar.classList.add("sidenav-fixed")
    sidenavbar.classList.remove("sidenav-fixed");
  }
}


toggleSidenav();