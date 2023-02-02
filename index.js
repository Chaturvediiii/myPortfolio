// navbar responsive
let menu = document.querySelector(".menu");
let navLinks = document.querySelector(".navlinks");
let image= document.querySelector(".image")
let info= document.querySelector(".info")
let mediaIcons= document.querySelector(".media-icons")

menu.addEventListener('click',function(){
    navLinks.classList.toggle("active")
    image.classList.toggle("hero-blur")
    info.classList.toggle("hero-blur")
    mediaIcons.classList.toggle("hero-blur")
})


