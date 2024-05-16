const menuButton = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const footerYear = document.querySelector('.footer_year')
// Main slider 
let currentSlide = 0;
const slides = document.querySelectorAll('.slider__slide-box');
const totalSlides = slides.length;
let slideInterval;

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

// Current Year on the footer 

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

showSlide(currentSlide);
startSlideShow();
menuButton.addEventListener('click', showMobileMenu)
handleCurrentYear()
