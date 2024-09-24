"use strict";

const navButton = document.querySelector(".nav-title");
const navWrapper = document.querySelector(".nav-contents");

navButton.addEventListener("click", () => {
    navWrapper.classList.toggle("nav-show");
});