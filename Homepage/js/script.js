
// navbar
let menu = document.querySelector('#navToggle')
let navbar = document.querySelector('.navMenu') 

menu.onclick = ()=>{

  navbar.classList.toggle('active')
}

window.onscroll = ()=>{
   
    navbar.classList.remove('active')
  }

  // search toggle
  let serach = document.querySelector('.searchToggle')
  let searchDisplay = document.querySelector('#input-Form')

  serach.onclick=()=>{
  
    serach.classList.toggle('fa-times')
    searchDisplay.classList.toggle('active')
  }
  window.onscroll = ()=>{
   
    searchDisplay.classList.remove('active')
  }
  // ends

// swipper
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });