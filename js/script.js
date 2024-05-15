const menuButton = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const footerYear = document.querySelector('.footer_year')
// Main slider 
let currentSlide = 0;
const slides = document.querySelectorAll('.slider__slide-box');
const totalSlides = slides.length;
let slideInterval;
// Brand Slider 
let currentIndex = 0;
let animationId;
let sliderSpeed = 3500;
const brandSlider = document.querySelector('.brand-slider__box');
const brandLogos = document.querySelectorAll('.brand-slider__brand');

const showMobileMenu = () => {
	navMobile.classList.toggle('nav-mobile--active')
	document.body.classList.toggle('lock-scroll')
}

// Header slider

const showSlide = (n) => {
  slides[currentSlide].classList.remove('slider__slide-box--active');
  currentSlide = (n + totalSlides) % totalSlides;
  slides[currentSlide].classList.add('slider__slide-box--active');
}

const nextSlide = () => showSlide(currentSlide + 1);
const prevSlide = () => showSlide(currentSlide - 1);
const startSlideShow = () => slideInterval = setInterval(nextSlide, 4000);
const stopSlideShow = () => clearInterval(slideInterval);

document.querySelector('.arrow--prevBtn').addEventListener('click', prevSlide);
document.querySelector('.arrow--nextBtn').addEventListener('click', nextSlide);
document.querySelector('.slider').addEventListener('mouseenter', stopSlideShow);
document.querySelector('.slider').addEventListener('mouseleave', startSlideShow);

// Brand slider 

function slideToNext() {
    currentIndex++;
    if (currentIndex >= brandLogos.length) {
        currentIndex = 0; // Wróć do pierwszego logotypu po wyświetleniu ostatniego
    }
    updateSliderPosition();
}

function updateSliderPosition() {
    const newPosition = -currentIndex * (brandLogos[0].offsetWidth + 105); // Przesunięcie o szerokość logotypu + odstęp
    const screenWidth = window.innerWidth; // Pobierz szerokość ekranu

    // Ustaw czas trwania animacji w zależności od szerokości ekranu
    let transitionDuration = '3.5s'; // Domyślny czas trwania animacji
    if (screenWidth > 810) {
        transitionDuration = '6s'; // Czas trwania animacji na większych ekranach
        sliderSpeed = '6000';
    }

    brandSlider.style.transition = `transform ${transitionDuration} linear`;
    brandSlider.style.transform = `translateX(${newPosition}px)`;
}

function startAutoSlide() {
    stopAutoSlide();
    animationId = setInterval(slideToNext, sliderSpeed);
}

function stopAutoSlide() {
    clearInterval(animationId);
}

// Current Year on the footer 

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

// Brand Slider - rozpoczęcie automatycznego przesuwania
startAutoSlide();
// Przesunięcie po wyświetleniu ostatniego logotypu
brandSlider.addEventListener('transitionend', () => {
    if (currentIndex === brandLogos.length) {
        currentIndex = 0;
        updateSliderPosition();
    }
});

showSlide(currentSlide);
startSlideShow();
menuButton.addEventListener('click', showMobileMenu)
handleCurrentYear()
