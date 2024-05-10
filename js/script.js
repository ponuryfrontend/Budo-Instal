const menuButton = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const footerYear = document.querySelector('.footer_year')
let currentSlide = 0;
const slides = document.querySelectorAll('.slider__slide-box');
const totalSlides = slides.length;
let slideInterval;

const showMobileMenu = () => {
	navMobile.classList.toggle('nav-mobile--active')
	document.body.classList.toggle('lock-scroll')
}

const showSlide = (n) => {
  slides[currentSlide].classList.remove('slider__slide-box--active');
  currentSlide = (n + totalSlides) % totalSlides;
  slides[currentSlide].classList.add('slider__slide-box--active');
}

const nextSlide = () => showSlide(currentSlide + 1);
const prevSlide = () => showSlide(currentSlide - 1);
const startSlideShow = () => slideInterval = setInterval(nextSlide, 3750); // Change slide every 3.75 seconds
const stopSlideShow = () => clearInterval(slideInterval);

document.getElementById('prevBtn').addEventListener('click', prevSlide);
document.getElementById('nextBtn').addEventListener('click', nextSlide);

// Pause the slideshow when the mouse is over the slider
document.querySelector('.slider').addEventListener('mouseenter', stopSlideShow);

// Restart the slide show when the mouse leaves the slider
document.querySelector('.slider').addEventListener('mouseleave', startSlideShow);

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

// Show the first slide and start the slide show when the page loads
showSlide(currentSlide);
startSlideShow();
menuButton.addEventListener('click', showMobileMenu)
handleCurrentYear()
