const menuButton = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const footerYear = document.querySelector('.footer_year')

const showMobileMenu = () => {
	navMobile.classList.toggle('nav-mobile--active')
	document.body.classList.toggle('lock-scroll')
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
menuButton.addEventListener('click', showMobileMenu)
