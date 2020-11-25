// This will contain animations ,styling of sidenavs etc

// var about = document.getElementById("about-section");
var sidenavbar=document.getElementById("sidenav")
var maincontent=document.getElementById("main");
var sticky = maincontent.offsetTop - 75;
// console.log(maincontent.offsetTop)
// console.log(sticky)
// console.log(window.pageYOffset)


function toggleSidenav() {
  if (window.pageYOffset >= sticky) {
    sidenavbar.classList.add("sidenav-fixed");
    sidenavbar.classList.remove("sidenav-none")
    console.log(maincontent.offsetTop)
console.log(sticky)
console.log(window.pageYOffset)
console.log('fixed')
  } else {
    sidenavbar.classList.add("sidenav-fixed")
    sidenavbar.classList.remove("sidenav-fixed");

    console.log(maincontent.offsetTop)
console.log(sticky)
console.log(window.pageYOffset)
  }
}

function toggleSidenavColor(param) {
    if (true) {
        
    } else {
        
    }
}


// toggleSidenav();

document.addEventListener("scroll", toggleSidenav)