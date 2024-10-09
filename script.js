// script.js

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');

function showSlide(index) {
    // Hide all slides
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });

    // Show the current slide
    slides[index].classList.add('active');
}

function changeSlide(direction) {
    currentSlide += direction;

    // Loop back to the first slide if we're at the end
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

// Initially show the first slide
showSlide(currentSlide);