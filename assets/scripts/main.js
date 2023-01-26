var navBtn = document.querySelector(".nav__btn");
var navMenu = document.querySelector(".nav-mobile");
var lang = document.querySelector(".lang");
var langIcon = document.querySelector(".nav-mobile__lang-btn i");

var navLangBtn = document.querySelector(".nav__lang-btn");

navBtn.addEventListener("click", function () {
    navBtn.classList.toggle("nav__btn--open");
    navMenu.classList.toggle("nav-mobile--open");
    lang.classList.toggle("lang--open");
    langIcon.classList.toggle("rotate");
})

navLangBtn.addEventListener("click", function () {
    navLangBtn.classList.toggle("nav__lang-btn--open");
})