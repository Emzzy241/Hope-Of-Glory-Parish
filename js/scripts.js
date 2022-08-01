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

// What we did here is that when we click on any link(be it the home, about, or contact link, our navigation should get closed)


// Owl-Carousel for classes
// with the code in owlCarousel we said our slider should scroll after every 3 seconds
$(document).ready( function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$("owl-navigation.owl-nav-prev"),("owl-navigation.owl-nav-next")]
    });
});



// Javascript for the scroll-top button

// header and scroll-top button active when 
// when window scroll down to 400px

const header = document.querySelector("[data-header]");

const scrollTopBtn = document.querySelector("[data-scroll-top]");


window.addEventListener("scroll", function(){
    if(window.scrollY >= 500){
        header.classList.add("active");
        scrollTopBtn.classList.add("active");
    }else{
        header.classList.remove("active");
        scrollTopBtn.classList.remove("active");
    }
});