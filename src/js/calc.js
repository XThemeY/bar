document.addEventListener('DOMContentLoaded', function () {
	const sliderGuest = document.querySelector("#slider-guests")
	const sliderDrink = document.querySelector("#slider-drinks")
	const sliderHours = document.querySelector("#slider-hours")
	const inputOptions = document.querySelectorAll("#calc-form input[name=option]")
	const inputDishes = document.querySelectorAll("#calc-form input[name=dishes]")
	const inputFurniture = document.querySelectorAll("#calc-form input[name=furniture]")
	const totalPrice = document.querySelector("#totalprice")
	let totalSum = 0;
	let rangeSum = getTotalSum();
	let inputSum = 0;

	const cocktailsList = document.querySelector(".shopping-cocktails")
	renderCartItem()

	const cocktailDelBtns = document.querySelectorAll('.shopping-cocktails .delete')
	const cocktailAmountBtns = document.querySelectorAll('.shopping-cocktails .cocktail-amount')

	setTotalSum()

	inputOptions.forEach((input) => {
		input.onchange = function () {
			if (this.checked) {
				inputSum = inputSum + parseInt(this.value)
			} else {
				inputSum = inputSum - parseInt(this.value)
			}

			setTotalSum();
		}
	})

	let prevDishes = null;
	inputDishes.forEach((input) => {
		input.onchange = function () {
			inputSum = inputSum + parseInt(this.value)
			if (prevDishes) {
				inputSum = inputSum - parseInt(prevDishes.value)
			}
			if (this !== prevDishes) {
				prevDishes = this;
			}

			setTotalSum();
		}
	})

	let prevFurniture = null;
	inputFurniture.forEach((input) => {
		input.onchange = function () {
			inputSum = inputSum + parseInt(this.value)
			if (prevFurniture) {
				inputSum = inputSum - parseInt(prevFurniture.value)
			}
			if (this !== prevFurniture) {
				prevFurniture = this;
			}

			setTotalSum();
		}
	})

	function sliderGuestSum() {
		return sliderGuest.dataset.cost * sliderGuest.value;
	}
	function sliderDrinkSum() {
		return sliderDrink.dataset.cost * sliderDrink.value;
	}
	function sliderHoursSum() {
		return sliderHours.dataset.cost * sliderHours.value;
	}

	sliderGuest.onchange = function () {
		rangeSum = getTotalSum()
		setTotalSum()
	}

	sliderDrink.onchange = function () {
		rangeSum = getTotalSum()
		setTotalSum()
	}

	sliderHours.onchange = function () {
		rangeSum = getTotalSum()
		setTotalSum()
	}

	function getTotalSum() {
		return sliderHoursSum() + sliderDrinkSum() + sliderGuestSum()
	}

	function setTotalSum() {
		totalSum = rangeSum + inputSum
		totalPrice.textContent = totalSum.toString() + " руб."
	}

	function renderCartItem() {
		for (var i = 0; i < localStorage.length; i++) {
			cocktailsList.insertAdjacentHTML('afterbegin', `<div class="cocktail-item">
			<div class="cocktail-title">${localStorage.key(i)}</div>
			<input class="cocktail-amount" type="number" min="1" size="1" value=${localStorage.getItem(localStorage.key(i))}>
			<div class="delete"></div>
		  </div>`);
		}
	}

	cocktailDelBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			localStorage.removeItem(e.target.parentNode.querySelector(".cocktail-title").textContent)
			e.target.parentNode.remove()
		})
	})

	cocktailAmountBtns.forEach((input) => {
		input.addEventListener('input', (e) => {
			localStorage.setItem(e.target.parentNode.querySelector(".cocktail-title").textContent, e.target.value)
		})

	})
})