const nav = document.querySelector(".nav-container");
const logo = document.querySelector(".logo");
const iconMenu = document.querySelector(".hamburger-icon");

iconMenu.addEventListener("click", ()=>{
    nav.classList.toggle("activate");
    logo.classList.toggle("activate");
    iconMenu.classList.toggle("activate");
});