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
}
work_hover_travelista.onmouseout = () => {
    preview.classList.remove('work_active_travelista');
    preview.classList.add('static');
}

let work_hover_marco = document.querySelector('.marco');


work_hover_marco.onmouseover = () => {
    preview.classList.remove('static')
    preview.classList.add('work_active_marco');
}
work_hover_marco.onmouseout = () => {
    preview.classList.remove('work_active_marco');
    preview.classList.add('static');
}
let work_hover_marvel = document.querySelector('.marvel');


work_hover_marvel.onmouseover = () => {
    preview.classList.remove('static')
    preview.classList.add('work_active_marvel');
}
work_hover_marvel.onmouseout = () => {
    preview.classList.remove('work_active_marvel');
    preview.classList.add('static');
}

let burger = document.querySelector(".mini-burger");
let menuPop = document.querySelector(".menu-pop");
let link = document.querySelectorAll(".pop_links")

function hasClick(){
    burger.classList.toggle("active");
    menuPop.classList.toggle("active");
}
for(i=0; i<link.length; i++){
    link[i].addEventListener("click", hasClick);
}
burger.addEventListener("click", hasClick);

let closeMenu = document.querySelector(".close");

closeMenu.addEventListener("click",() =>{
    menuPop.classList.remove("active");
})

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = "!<>-_\\/[]{}—=+*^?#________";
      this.update = this.update.bind(this);
    }
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => (this.resolve = resolve));
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
    update() {
      let output = "";
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }
  
  // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————
  
  const phrases = [
    "Front-end Junior Web developer"
  ];
  
  const el = document.querySelector(".text");
  const fx = new TextScramble(el);
  
  let counter = 0;
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
    //   setTimeout(next, 10000);
      clearTimeout;
    });
    counter = (counter + 0) % phrases.length;
  };
  
  next();
  