"use strict";

console.log("Running script ... 👍");

// Mobile navigation
const mobileNav = document.querySelector(".mobile-nav");

mobileNav.addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("nav-open");
});

// Dynamically changing the year in copyright section
const currentYear = new Date().getFullYear();
const copyRight = document.querySelector(".copyright");
copyRight.innerHTML = `Copyright &copy; ${currentYear} by Omnifood, Inc. All rights reserved.`;

// Close mobile navigation after clicking any of the options
const navItems = document.querySelectorAll(".main-nav-items li");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".header").classList.toggle("nav-open");
  });
});

//Scroll Behaviour
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // preventing the original behaviour of links (ie, going to the location)
    e.preventDefault();

    const href = link.getAttribute("href");

    if (href === "#") {
      // scrolling to the top of the screen, ie, top: 0
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // other links
    if (href !== "#" && href.startsWith("#")) {
      // since href contains id we can fetch the element using it.
      const elm = document.querySelector(href);

      // scrolling the selected element into the view.
      elm.scrollIntoView({ behavior: "smooth" });
    }
  });
});
