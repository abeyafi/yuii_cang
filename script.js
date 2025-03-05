// script.js

window.addEventListener("scroll", function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.scrollY;

    // Apply the parallax scrolling effect
    parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});