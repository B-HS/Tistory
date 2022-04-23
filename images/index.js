const menu = document.querySelector(".container__menu")
const body = document.body
function hideNavBar(){
    if (window.innerWidth<1180){
        menu.classList.add("displaynone")
    }
    
    if (window.innerWidth>1180){
        menu.classList.remove("displaynone")
        
    }
    
}

function init(){
    if (window.innerWidth<1180){
        menu.classList.add("displaynone")
    }
}

init()
window.addEventListener("resize", hideNavBar)

