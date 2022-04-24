let parallax = document.getElementById('parallax');
window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.5 + "px";

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


