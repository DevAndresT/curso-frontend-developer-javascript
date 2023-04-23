const desktopMenu = document.querySelector(".desktop-menu")
const navBarEmail = document.querySelector(".navbar-email")

const mobileMenu = document.querySelector(".mobile-menu")
const logoMenu = document.querySelector(".menu")


navBarEmail.addEventListener("click", toggleDesktopMenu)
logoMenu.addEventListener("click", toggleMobileMenu)

function toggleDesktopMenu (){
    desktopMenu.classList.toggle("inactive")

}
function toggleMobileMenu (){ 
    mobileMenu.classList.toggle("inactive")
    console.log("Hola")

}