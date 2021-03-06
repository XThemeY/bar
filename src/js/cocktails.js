document.addEventListener('DOMContentLoaded', function () {
	const cartDelBtns = (document.getElementsByClassName('delete'))
	const itemAddBtn = document.querySelectorAll('.item-order button')
	const itemList = document.querySelector('.cart-items-list')
	const cocktailAmountBtns = document.querySelectorAll('.item-amount')
	const cocktailsList = document.querySelectorAll('.cocktails-list__item')

	renderCartItem()
	addEventsToDelBtns()
	itemAddBtn.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			let cart = e.target.closest('.item-order').querySelector('.item-amount').value
			let name = e.target.closest('.cocktails-list__item').querySelector(".item-title").textContent
			if (cart !== '0' && !localStorage.getItem(cart)) {
				localStorage.setItem(name, cart);
			}
			renderCartItem()
			addEventsToDelBtns()
		})
	})

	function renderCartItem() {
		itemList.innerHTML = ''
		for (var i = 0; i < localStorage.length; i++) {
			itemList.insertAdjacentHTML('afterbegin', `<div class="cart-item">
			<div class="cocktail-title">${localStorage.key(i)}</div>
			<input class="cocktail-amount" type="number" size="1" value=${localStorage.getItem(localStorage.key(i))}>
			<div class="delete"></div>
		  </div>`);

		}
	}

	function addEventsToDelBtns() {
		for (var i = 0; i < cartDelBtns.length; i++) {
			cartDelBtns[i].addEventListener("click", function (e) {
				const itemTitle = e.target.parentNode.querySelector(".cocktail-title").textContent
				localStorage.removeItem(itemTitle)
				e.target.parentNode.remove()				
				cocktailsList.forEach((item) => {
					if (itemTitle === item.querySelector(".item-title").textContent) {
						item.querySelector(".item-amount").value = 0
					}
				})
			});
		}
	}

	cocktailAmountBtns.forEach((input) => {
		input.addEventListener('input', (e) => {
			const itemTitle = e.target.closest('.cocktails-list__item').querySelector(".item-title").textContent
			if (e.target.value !== "0") {
				localStorage.setItem(itemTitle, e.target.value)
				renderCartItem()
				addEventsToDelBtns()
			} else {
				localStorage.removeItem(itemTitle)
				renderCartItem()
				addEventsToDelBtns()
			}

		})

	})
	for (var i = 0; i < localStorage.length; i++) {
		cocktailsList.forEach((item) => {
			if (item.querySelector(".item-title").textContent === localStorage.key(i)) {
				item.querySelector(".item-amount").value = localStorage.getItem(localStorage.key(i))
			}
		})

	}


})