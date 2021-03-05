document.addEventListener('DOMContentLoaded', function () {
	const cartDelBtns = (document.getElementsByClassName('delete'))
	const itemAddBtn = document.querySelectorAll('.item-order button')
	const itemList = document.querySelector('.cart-items-list')
	renderCartItem()
	addEventsToDelBtns()
	itemAddBtn.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			let cart = e.target.closest('.item-order').querySelector('.item-amount').value
			let name = e.target.closest('.cocktails-list__item').querySelector(".item-title").textContent
			if (cart !== '0' && !localStorage.getItem(cart)) {
				localStorage.setItem(name, cart);
				itemList.innerHTML = ''
			}
			renderCartItem()
			addEventsToDelBtns()
		})
	})

	function renderCartItem() {
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
				localStorage.removeItem(e.target.parentNode.querySelector(".cocktail-title").textContent)
				e.target.parentNode.remove()
			});
		}
	}

})