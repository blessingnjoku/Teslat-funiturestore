// navbar
let menu = document.querySelector('#navToggle')
let navbar = document.querySelector('.navMenu')

menu.onclick = ()=>{

  navbar.classList.toggle('active')
}

window.onscroll = ()=>{
   
    navbar.classList.remove('active')
  }
