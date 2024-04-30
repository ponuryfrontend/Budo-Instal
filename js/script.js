const menuButton = document.querySelector('.hamburger')
const navMobile = document.querySelector('.header__nav-mobile')

const showMobileMenu = () => {
	navMobile.classList.toggle('header__nav-mobile--active')
	document.body.classList.toggle('lock-scroll')
}

menuButton.addEventListener('click', showMobileMenu)
