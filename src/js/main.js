document.addEventListener('DOMContentLoaded', function () {

	const toggleMenu = document.querySelector(".toggle-menu")
	const sideMenu = document.querySelector('.header-sidemenu')
	const overlay = document.querySelector('#overlay')
	const body = document.querySelector('body')

	toggleMenu.addEventListener('click', function () {
		this.classList.toggle('active')
		sideMenu.classList.toggle('active')
		overlay.classList.toggle('active')
	})

	function menuBurgerToggle(type) {

		if (type === "resize") {
			toggleMenu.classList.remove('active')
		} else {
			toggleMenu.classList.toggle('active')
		}

	}

	//Скрыть по клику оверлея
	overlay.addEventListener('click', function () {
		menuBurgerToggle('click')
		sideMenu.classList.remove('active')
		this.classList.remove('active')
		body.classList.remove('noScroll')
	})
	sideMenu.addEventListener('click', function () {
		menuBurgerToggle('click')
		this.classList.remove('active')
		overlay.classList.remove('active')
		body.classList.remove('noScroll')
	})

	//Ресайз окна, убрать оверлей и бургер
	window.addEventListener('resize', function () {
		sideMenu.classList.remove('active')
		toggleMenu.classList.remove('active')
		overlay.classList.remove('active')
		menuBurgerToggle('resize')
	})

})