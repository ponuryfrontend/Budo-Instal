const menuButton = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const navBox = document.querySelector('.header__nav-desktop-box')
const headerDropDownBox = document.querySelector('.header__drop-down-nav-box')
const secondNav = document.querySelector('.header__second-nav-box')
const plusIcon = document.querySelector('.header__drop-down-close-btn')
const closeArrow = document.querySelector('.header__drop-down-close_arrow')
// Main slider
let currentSlide = 0
const slides = document.querySelectorAll('.slider__slide-box')
const totalSlides = slides.length
let slideInterval
const footerYear = document.querySelector('.footer_year')

const showMobileMenu = () => {
	navMobile.classList.toggle('nav-mobile--active')
	document.body.classList.toggle('lock-scroll')
}

const dropDownMenu = () => {
	headerDropDownBox.classList.toggle('header__drop-down-nav-box--active')
	plusIcon.classList.toggle('header__drop-down-close-btn--rotate')
}

const closeDropDownMenu = () => {
	headerDropDownBox.classList.remove('header__drop-down-nav-box--active')
	plusIcon.classList.remove('header__drop-down-close-btn--rotate')
}

// Header slider

const showSlide = n => {
	slides[currentSlide].classList.remove('slider__slide-box--active')
	currentSlide = (n + totalSlides) % totalSlides
	slides[currentSlide].classList.add('slider__slide-box--active')
}

const nextSlide = () => showSlide(currentSlide + 1)
const prevSlide = () => showSlide(currentSlide - 1)
const startSlideShow = () => (slideInterval = setInterval(nextSlide, 4000))
const stopSlideShow = () => clearInterval(slideInterval)

document.querySelector('.arrow--prevBtn').addEventListener('click', prevSlide)
document.querySelector('.arrow--nextBtn').addEventListener('click', nextSlide)
document.querySelector('.slider').addEventListener('mouseenter', stopSlideShow)
document.querySelector('.slider').addEventListener('mouseleave', startSlideShow)

// Current Year on the footer

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

menuButton.addEventListener('click', showMobileMenu)
secondNav.addEventListener('click', dropDownMenu)
closeArrow.addEventListener('click', closeDropDownMenu)
showSlide(currentSlide)
startSlideShow()
handleCurrentYear()

document.addEventListener('DOMContentLoaded', () => {
	// Add click event listener to the document
	document.addEventListener('click', e => {
		// Check if the click was outside the nav box
		if (!navBox.contains(e.target)) {
			closeDropDownMenu()
		}
	})
})