"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var cartDelBtns = document.getElementsByClassName('delete');
  var itemAddBtn = document.querySelectorAll('.item-order button');
  var itemList = document.querySelector('.cart-items-list');
  renderCartItem();
  addEventsToDelBtns();
  itemAddBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var cart = e.target.closest('.item-order').querySelector('.item-amount').value;
      var name = e.target.closest('.cocktails-list__item').querySelector(".item-title").textContent;

      if (cart !== '0' && !localStorage.getItem(cart)) {
        localStorage.setItem(name, cart);
        itemList.innerHTML = '';
      }

      renderCartItem();
      addEventsToDelBtns();
    });
  });

  function renderCartItem() {
    for (var i = 0; i < localStorage.length; i++) {
      itemList.insertAdjacentHTML('afterbegin', "<div class=\"cart-item\">\n\t\t\t<div class=\"cocktail-title\">".concat(localStorage.key(i), "</div>\n\t\t\t<input class=\"cocktail-amount\" type=\"number\" size=\"1\" value=").concat(localStorage.getItem(localStorage.key(i)), ">\n\t\t\t<div class=\"delete\"></div>\n\t\t  </div>"));
    }
  }

  function addEventsToDelBtns() {
    for (var i = 0; i < cartDelBtns.length; i++) {
      cartDelBtns[i].addEventListener("click", function (e) {
        localStorage.removeItem(e.target.parentNode.querySelector(".cocktail-title").textContent);
        e.target.parentNode.remove();
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvY2t0YWlscy5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYXJ0RGVsQnRucyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpdGVtQWRkQnRuIiwicXVlcnlTZWxlY3RvckFsbCIsIml0ZW1MaXN0IiwicXVlcnlTZWxlY3RvciIsInJlbmRlckNhcnRJdGVtIiwiYWRkRXZlbnRzVG9EZWxCdG5zIiwiZm9yRWFjaCIsImJ0biIsImUiLCJjYXJ0IiwidGFyZ2V0IiwiY2xvc2VzdCIsInZhbHVlIiwibmFtZSIsInRleHRDb250ZW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJpbm5lckhUTUwiLCJpIiwibGVuZ3RoIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwia2V5IiwicmVtb3ZlSXRlbSIsInBhcmVudE5vZGUiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDekQsTUFBTUMsV0FBVyxHQUFJRixRQUFRLENBQUNHLHNCQUFULENBQWdDLFFBQWhDLENBQXJCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHSixRQUFRLENBQUNLLGdCQUFULENBQTBCLG9CQUExQixDQUFuQjtBQUNBLE1BQU1DLFFBQVEsR0FBR04sUUFBUSxDQUFDTyxhQUFULENBQXVCLGtCQUF2QixDQUFqQjtBQUNBQyxFQUFBQSxjQUFjO0FBQ2RDLEVBQUFBLGtCQUFrQjtBQUNsQkwsRUFBQUEsVUFBVSxDQUFDTSxPQUFYLENBQW1CLFVBQUNDLEdBQUQsRUFBUztBQUMzQkEsSUFBQUEsR0FBRyxDQUFDVixnQkFBSixDQUFxQixPQUFyQixFQUE4QixVQUFDVyxDQUFELEVBQU87QUFDcEMsVUFBSUMsSUFBSSxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQixhQUFqQixFQUFnQ1IsYUFBaEMsQ0FBOEMsY0FBOUMsRUFBOERTLEtBQXpFO0FBQ0EsVUFBSUMsSUFBSSxHQUFHTCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQix1QkFBakIsRUFBMENSLGFBQTFDLENBQXdELGFBQXhELEVBQXVFVyxXQUFsRjs7QUFDQSxVQUFJTCxJQUFJLEtBQUssR0FBVCxJQUFnQixDQUFDTSxZQUFZLENBQUNDLE9BQWIsQ0FBcUJQLElBQXJCLENBQXJCLEVBQWlEO0FBQ2hETSxRQUFBQSxZQUFZLENBQUNFLE9BQWIsQ0FBcUJKLElBQXJCLEVBQTJCSixJQUEzQjtBQUNBUCxRQUFBQSxRQUFRLENBQUNnQixTQUFULEdBQXFCLEVBQXJCO0FBQ0E7O0FBQ0RkLE1BQUFBLGNBQWM7QUFDZEMsTUFBQUEsa0JBQWtCO0FBQ2xCLEtBVEQ7QUFVQSxHQVhEOztBQWFBLFdBQVNELGNBQVQsR0FBMEI7QUFDekIsU0FBSyxJQUFJZSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixZQUFZLENBQUNLLE1BQWpDLEVBQXlDRCxDQUFDLEVBQTFDLEVBQThDO0FBQzdDakIsTUFBQUEsUUFBUSxDQUFDbUIsa0JBQVQsQ0FBNEIsWUFBNUIsMkVBQzhCTixZQUFZLENBQUNPLEdBQWIsQ0FBaUJILENBQWpCLENBRDlCLDZGQUU4REosWUFBWSxDQUFDQyxPQUFiLENBQXFCRCxZQUFZLENBQUNPLEdBQWIsQ0FBaUJILENBQWpCLENBQXJCLENBRjlEO0FBTUE7QUFDRDs7QUFFRCxXQUFTZCxrQkFBVCxHQUE4QjtBQUM3QixTQUFLLElBQUljLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdyQixXQUFXLENBQUNzQixNQUFoQyxFQUF3Q0QsQ0FBQyxFQUF6QyxFQUE2QztBQUM1Q3JCLE1BQUFBLFdBQVcsQ0FBQ3FCLENBQUQsQ0FBWCxDQUFldEIsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBVVcsQ0FBVixFQUFhO0FBQ3JETyxRQUFBQSxZQUFZLENBQUNRLFVBQWIsQ0FBd0JmLENBQUMsQ0FBQ0UsTUFBRixDQUFTYyxVQUFULENBQW9CckIsYUFBcEIsQ0FBa0MsaUJBQWxDLEVBQXFEVyxXQUE3RTtBQUNBTixRQUFBQSxDQUFDLENBQUNFLE1BQUYsQ0FBU2MsVUFBVCxDQUFvQkMsTUFBcEI7QUFDQSxPQUhEO0FBSUE7QUFDRDtBQUVELENBdkNEIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBjYXJ0RGVsQnRucyA9IChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWxldGUnKSlcclxuXHRjb25zdCBpdGVtQWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0tb3JkZXIgYnV0dG9uJylcclxuXHRjb25zdCBpdGVtTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LWl0ZW1zLWxpc3QnKVxyXG5cdHJlbmRlckNhcnRJdGVtKClcclxuXHRhZGRFdmVudHNUb0RlbEJ0bnMoKVxyXG5cdGl0ZW1BZGRCdG4uZm9yRWFjaCgoYnRuKSA9PiB7XHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRsZXQgY2FydCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5pdGVtLW9yZGVyJykucXVlcnlTZWxlY3RvcignLml0ZW0tYW1vdW50JykudmFsdWVcclxuXHRcdFx0bGV0IG5hbWUgPSBlLnRhcmdldC5jbG9zZXN0KCcuY29ja3RhaWxzLWxpc3RfX2l0ZW0nKS5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tdGl0bGVcIikudGV4dENvbnRlbnRcclxuXHRcdFx0aWYgKGNhcnQgIT09ICcwJyAmJiAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oY2FydCkpIHtcclxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBjYXJ0KTtcclxuXHRcdFx0XHRpdGVtTGlzdC5pbm5lckhUTUwgPSAnJ1xyXG5cdFx0XHR9XHJcblx0XHRcdHJlbmRlckNhcnRJdGVtKClcclxuXHRcdFx0YWRkRXZlbnRzVG9EZWxCdG5zKClcclxuXHRcdH0pXHJcblx0fSlcclxuXHJcblx0ZnVuY3Rpb24gcmVuZGVyQ2FydEl0ZW0oKSB7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpdGVtTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgPGRpdiBjbGFzcz1cImNhcnQtaXRlbVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29ja3RhaWwtdGl0bGVcIj4ke2xvY2FsU3RvcmFnZS5rZXkoaSl9PC9kaXY+XHJcblx0XHRcdDxpbnB1dCBjbGFzcz1cImNvY2t0YWlsLWFtb3VudFwiIHR5cGU9XCJudW1iZXJcIiBzaXplPVwiMVwiIHZhbHVlPSR7bG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSl9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZGVsZXRlXCI+PC9kaXY+XHJcblx0XHQgIDwvZGl2PmApO1xyXG5cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFkZEV2ZW50c1RvRGVsQnRucygpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2FydERlbEJ0bnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y2FydERlbEJ0bnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZS50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiLmNvY2t0YWlsLXRpdGxlXCIpLnRleHRDb250ZW50KVxyXG5cdFx0XHRcdGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKClcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufSkiXSwiZmlsZSI6ImNvY2t0YWlscy5qcyJ9