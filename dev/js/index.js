let parallax = document.getElementById('parallax');
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.5 + "px";

})

let totop = document.querySelector(".totop")
window.addEventListener("scroll", ()=>{
    if(window.scrollY>500){
        totop.classList.add("totop_active")
    }
    else{
        totop.classList.remove("totop_active")
    }
})

let work_hover_travelista = document.querySelector('.travelista');
let preview = document.querySelector('.preview');


work_hover_travelista.onmouseover = () => {
    preview.classList.remove('static')
    preview.classList.add('work_active_travelista');
    setTimeout(function(){
        preview.classList.remove('work_active_travelista');
        preview.classList.add('static');
    },1500);
    
}

let work_hover_marco = document.querySelector('.marco');


work_hover_marco.onmouseover = () => {
    preview.classList.remove('static')
    preview.classList.add('work_active_marco');
    setTimeout(function(){
        preview.classList.remove('work_active_marco');
        preview.classList.add('static');
    },1500)
}

let work_hover_marvel = document.querySelector('.marvel');


work_hover_marvel.onmouseover = () => {
    preview.classList.remove('static')
    preview.classList.add('work_active_marvel');
    setTimeout(function(){
        preview.classList.remove('work_active_marvel');
        preview.classList.add('static');
    },1500)
}


let burger = document.querySelector(".mini-burger");
let menuPop = document.querySelector(".menu-pop");


burger.addEventListener("click", () =>{
    menuPop.classList.add("active");
});


let closeMenu = document.querySelector(".close");

closeMenu.addEventListener("click",() =>{
    menuPop.classList.remove("active");
})