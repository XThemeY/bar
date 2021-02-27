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

	//Вызов модального окна
	const orderCallBtns = document.querySelectorAll('button[data-makecall]')
	const modalCloseBtns = document.querySelectorAll('button[data-modalclose]')
	modalCloseBtns.forEach((btn) => {
		btn.addEventListener('click', function () {
			document.querySelector('.modal-wrapper').classList.remove('active')
		})
	})

	document.querySelector(".modal-wrapper").addEventListener('click', (e) => {
		if (!e.target.closest('.modal')) {
			document.querySelector('.modal-wrapper').classList.remove('active')
		}
	})

	orderCallBtns.forEach((btn) => {
		btn.addEventListener('click', function () {
			document.querySelector('.modal-wrapper').classList.add('active')
		})
	})

	const modalSubmitBtn = document.querySelector('#modal__submit')
	modalSubmitBtn.addEventListener("click", function (event) {
		event.preventDefault()
	})
})