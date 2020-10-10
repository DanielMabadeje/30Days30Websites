var headline=document.getElementById('headline');
var button=document.getElementById('btn')
var list=document.getElementById("list")

var items=document.getElementById("list").getElementsByTagName("li")

list.addEventListener("click", activateitem);

for(i=0; i < items.length; i++){
    items[i].addEventListener("click", activateitem);
}

function activateitem(e) {
    if (e.target.nodeName == "LI"){
        headline.innerHTML=this.innerHTML;
        
        for(i=0; i < e.target.parentNode.children.length; i++){
            e.target.parentNode.children.length[i].classList.remove("active");
        }
    e.target.classList.add("active");
    }  else {

    }
}


function createitem(params) {
    list.innerHTML += "<li>New</li>"
}


button.addEventListener("click", createitem);