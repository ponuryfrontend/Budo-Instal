const menuButton = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')

const showMobileMenu = () => {
	navMobile.classList.toggle('nav-mobile--active')
	document.body.classList.toggle('lock-scroll')
}

menuButton.addEventListener('click', showMobileMenu)
