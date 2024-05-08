"use strict";

const mobileNav = document.querySelector(".mobile-nav");

mobileNav.addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("nav-open");
});
