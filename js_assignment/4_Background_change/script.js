let currentIndex = 0;

// Array of image URLs
const images = [
    'https://via.placeholder.com/600x400?text=Image+1',
    'https://via.placeholder.com/600x400?text=Image+2',
    'https://via.placeholder.com/600x400?text=Image+3'
];

// Function to move the slide
function moveSlide(step) {
    const slides = document.querySelector('.slides');
    const totalSlides = images.length;

    currentIndex += step;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
    changeBackgroundImage();
}

// Function to change the background image
function changeBackgroundImage() {
    const slideElements = document.querySelectorAll('.slide');
    slideElements.forEach((slide, index) => {
        slide.style.backgroundImage = `url('${images[index]}')`;
    });
}

// Initialize the slider with the first image
changeBackgroundImage();
