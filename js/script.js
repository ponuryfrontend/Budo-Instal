const menuButton = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const navBox = document.querySelector('.header__nav-desktop-box')
const headerDropDownBox = document.querySelector('.header__drop-down-nav-box')
const secondNav = document.querySelector('.header__second-nav-box')
const plusIcon = document.querySelector('.header__drop-down-close-btn')
// Main slider
let currentSlide = 0
const slides = document.querySelectorAll('.slider__slide-box')
const totalSlides = slides.length
let slideInterval
const footerYear = document.querySelector('.footer_year')

/**
         * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
         *
         * @private
         * @author Todd Motto
         * @link https://github.com/toddmotto/foreach
         * @param Array|Object|NodeList collection - Collection of items to iterate, could be an Array, Object or NodeList
         * @callback requestCallback      callback   - Callback function for each iteration.
         * @param Array|Object|NodeList scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
         * @returns 
         */
var forEach = function (t, o, r) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t) };

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
	forEach(hamburgers, function (hamburger) {
		hamburger.addEventListener("click", function () {
			this.classList.toggle("is-active");
		}, false);
	});
}

// Mobile navigation

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
showSlide(currentSlide)
startSlideShow()
handleCurrentYear()

document.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('click', e => {
		if (!navBox.contains(e.target)) {
			closeDropDownMenu()
		}
	})
})
