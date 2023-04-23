const desktopMenu = document.querySelector(".desktop-menu")
const navBarEmail = document.querySelector(".navbar-email")

navBarEmail.addEventListener("click", toggleDesktopMenu)

function toggleDesktopMenu (){
    desktopMenu.classList.toggle("inactive")

}