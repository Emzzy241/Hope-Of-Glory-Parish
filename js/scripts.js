'use strict';


// navbar toggle

const navOpenBtn = document.querySelector("[data-nav-open-btn]");

const navbar = document.querySelector("[data-navbar]");

const navCloseBtn = document.querySelector("[ data-nav-close-btn]");

const overlay = document.querySelector("[data-overlay]");

// now we have successfully selected all elements that we will use nav toggle in
// Storing them into an array now
const elementArray = [navOpenBtn, navCloseBtn, overlay];

// now we want to write a powerful for loop where we will add eventListener click to each of the elements in the array

for( let i = 0; i < elementArray.length; i++){
    elementArray[i].addEventListener("click", function(){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}

// Code for toggling the navbar & overlay when we click on any navbar link

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for(let i = 0; i < navbarLinks.length; i++){
    navbarLinks[i].addEventListener("click", function(){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}

// Wwhat we did here is that when we click on any link(be it the home, about, or contact link, our navigation should get closed)

