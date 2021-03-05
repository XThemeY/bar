"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var sliderGuest = document.querySelector("#slider-guests");
  var sliderDrink = document.querySelector("#slider-drinks");
  var sliderHours = document.querySelector("#slider-hours");
  var inputOptions = document.querySelectorAll("#calc-form input[name=option]");
  var inputDishes = document.querySelectorAll("#calc-form input[name=dishes]");
  var inputFurniture = document.querySelectorAll("#calc-form input[name=furniture]");
  var totalPrice = document.querySelector("#totalprice");
  var totalSum = 0;
  var rangeSum = getTotalSum();
  var inputSum = 0;
  var cocktailsList = document.querySelector(".shopping-cocktails");
  renderCartItem();
  var cocktailDelBtns = document.querySelectorAll('.shopping-cocktails .delete');
  var cocktailAmountBtns = document.querySelectorAll('.shopping-cocktails .cocktail-amount');
  setTotalSum();
  inputOptions.forEach(function (input) {
    input.onchange = function () {
      if (this.checked) {
        inputSum = inputSum + parseInt(this.value);
      } else {
        inputSum = inputSum - parseInt(this.value);
      }

      setTotalSum();
    };
  });
  var prevDishes = null;
  inputDishes.forEach(function (input) {
    input.onchange = function () {
      inputSum = inputSum + parseInt(this.value);

      if (prevDishes) {
        inputSum = inputSum - parseInt(prevDishes.value);
      }

      if (this !== prevDishes) {
        prevDishes = this;
      }

      setTotalSum();
    };
  });
  var prevFurniture = null;
  inputFurniture.forEach(function (input) {
    input.onchange = function () {
      inputSum = inputSum + parseInt(this.value);

      if (prevFurniture) {
        inputSum = inputSum - parseInt(prevFurniture.value);
      }

      if (this !== prevFurniture) {
        prevFurniture = this;
      }

      setTotalSum();
    };
  });

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
    rangeSum = getTotalSum();
    setTotalSum();
  };

  sliderDrink.onchange = function () {
    rangeSum = getTotalSum();
    setTotalSum();
  };

  sliderHours.onchange = function () {
    rangeSum = getTotalSum();
    setTotalSum();
  };

  function getTotalSum() {
    return sliderHoursSum() + sliderDrinkSum() + sliderGuestSum();
  }

  function setTotalSum() {
    totalSum = rangeSum + inputSum;
    totalPrice.textContent = totalSum.toString() + " руб.";
  }

  function renderCartItem() {
    for (var i = 0; i < localStorage.length; i++) {
      cocktailsList.insertAdjacentHTML('afterbegin', "<div class=\"cocktail-item\">\n\t\t\t<div class=\"cocktail-title\">".concat(localStorage.key(i), "</div>\n\t\t\t<input class=\"cocktail-amount\" type=\"number\" min=\"1\" size=\"1\" value=").concat(localStorage.getItem(localStorage.key(i)), ">\n\t\t\t<div class=\"delete\"></div>\n\t\t  </div>"));
    }
  }

  cocktailDelBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      localStorage.removeItem(e.target.parentNode.querySelector(".cocktail-title").textContent);
      e.target.parentNode.remove();
    });
  });
  cocktailAmountBtns.forEach(function (input) {
    input.addEventListener('input', function (e) {
      localStorage.setItem(e.target.parentNode.querySelector(".cocktail-title").textContent, e.target.value);
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2xpZGVyR3Vlc3QiLCJxdWVyeVNlbGVjdG9yIiwic2xpZGVyRHJpbmsiLCJzbGlkZXJIb3VycyIsImlucHV0T3B0aW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dERpc2hlcyIsImlucHV0RnVybml0dXJlIiwidG90YWxQcmljZSIsInRvdGFsU3VtIiwicmFuZ2VTdW0iLCJnZXRUb3RhbFN1bSIsImlucHV0U3VtIiwiY29ja3RhaWxzTGlzdCIsInJlbmRlckNhcnRJdGVtIiwiY29ja3RhaWxEZWxCdG5zIiwiY29ja3RhaWxBbW91bnRCdG5zIiwic2V0VG90YWxTdW0iLCJmb3JFYWNoIiwiaW5wdXQiLCJvbmNoYW5nZSIsImNoZWNrZWQiLCJwYXJzZUludCIsInZhbHVlIiwicHJldkRpc2hlcyIsInByZXZGdXJuaXR1cmUiLCJzbGlkZXJHdWVzdFN1bSIsImRhdGFzZXQiLCJjb3N0Iiwic2xpZGVyRHJpbmtTdW0iLCJzbGlkZXJIb3Vyc1N1bSIsInRleHRDb250ZW50IiwidG9TdHJpbmciLCJpIiwibG9jYWxTdG9yYWdlIiwibGVuZ3RoIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwia2V5IiwiZ2V0SXRlbSIsImJ0biIsImUiLCJyZW1vdmVJdGVtIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsInJlbW92ZSIsInNldEl0ZW0iXSwibWFwcGluZ3MiOiI7O0FBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDekQsTUFBTUMsV0FBVyxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXBCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHSixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQXBCO0FBQ0EsTUFBTUUsV0FBVyxHQUFHTCxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFDQSxNQUFNRyxZQUFZ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QUFDcUIsR0FBRCxFQUFTO0FBQ2hDQSxJQUFBQSxHQUFHLENBQUN4QyxnQkFBSixDQUFxQixPQUFyQixFQUE4QixVQUFDeUMsQ0FBRCxFQUFPO0FBQ3BDTixNQUFBQSxZQUFZLENBQUNPLFVBQWIsQ0FBd0JELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxVQUFULENBQW9CMUMsYUFBcEIsQ0FBa0MsaUJBQWxDLEVBQXFEOEIsV0FBN0U7QUFDSFMsTUFBQUEsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLFVBQVQsQ0FBb0JDLE1BQXBCO0FBQ0csS0FIRDtBQUlBLEdBTEQ7QUFPQTVCLEVBQUFBLGtCQUFrQixDQUFDRSxPQUFuQixDQUEyQixVQUFDQyxLQUFELEVBQVc7QUFDckNBLElBQUFBLEtBQUssQ0FBQ3BCLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFVBQUN5QyxDQUFELEVBQU87QUFDdENOLE1BQUFBLFlBQVksQ0FBQ1csT0FBYixDQUFxQkwsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLFVBQVQsQ0FBb0IxQyxhQUFwQixDQUFrQyxpQkFBbEMsRUFBcUQ4QixXQUExRSxFQUFzRlMsQ0FBQyxDQUFDRSxNQUFGLENBQVNuQixLQUEvRjtBQUNBLEtBRkQ7QUFJQSxHQUxEO0FBTUEsQ0F2SEQiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHNsaWRlckd1ZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzbGlkZXItZ3Vlc3RzXCIpXHJcblx0Y29uc3Qgc2xpZGVyRHJpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NsaWRlci1kcmlua3NcIilcclxuXHRjb25zdCBzbGlkZXJIb3VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyLWhvdXJzXCIpXHJcblx0Y29uc3QgaW5wdXRPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjYWxjLWZvcm0gaW5wdXRbbmFtZT1vcHRpb25dXCIpXHJcblx0Y29uc3QgaW5wdXREaXNoZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NhbGMtZm9ybSBpbnB1dFtuYW1lPWRpc2hlc11cIilcclxuXHRjb25zdCBpbnB1dEZ1cm5pdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY2FsYy1mb3JtIGlucHV0W25hbWU9ZnVybml0dXJlXVwiKVxyXG5cdGNvbnN0IHRvdGFsUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvdGFscHJpY2VcIilcclxuXHRsZXQgdG90YWxTdW0gPSAwO1xyXG5cdGxldCByYW5nZVN1bSA9IGdldFRvdGFsU3VtKCk7XHJcblx0bGV0IGlucHV0U3VtID0gMDtcclxuXHJcblx0Y29uc3QgY29ja3RhaWxzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvcHBpbmctY29ja3RhaWxzXCIpXHJcblx0cmVuZGVyQ2FydEl0ZW0oKVxyXG5cclxuXHRjb25zdCBjb2NrdGFpbERlbEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hvcHBpbmctY29ja3RhaWxzIC5kZWxldGUnKVxyXG5cdGNvbnN0IGNvY2t0YWlsQW1vdW50QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaG9wcGluZy1jb2NrdGFpbHMgLmNvY2t0YWlsLWFtb3VudCcpXHJcblxyXG5cdHNldFRvdGFsU3VtKClcclxuXHJcblx0aW5wdXRPcHRpb25zLmZvckVhY2goKGlucHV0KSA9PiB7XHJcblx0XHRpbnB1dC5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHRoaXMuY2hlY2tlZCkge1xyXG5cdFx0XHRcdGlucHV0U3VtID0gaW5wdXRTdW0gKyBwYXJzZUludCh0aGlzLnZhbHVlKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlucHV0U3VtID0gaW5wdXRTdW0gLSBwYXJzZUludCh0aGlzLnZhbHVlKVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzZXRUb3RhbFN1bSgpO1xyXG5cdFx0fVxyXG5cdH0pXHJcblxyXG5cdGxldCBwcmV2RGlzaGVzID0gbnVsbDtcclxuXHRpbnB1dERpc2hlcy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG5cdFx0aW5wdXQub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlucHV0U3VtID0gaW5wdXRTdW0gKyBwYXJzZUludCh0aGlzLnZhbHVlKVxyXG5cdFx0XHRpZiAocHJldkRpc2hlcykge1xyXG5cdFx0XHRcdGlucHV0U3VtID0gaW5wdXRTdW0gLSBwYXJzZUludChwcmV2RGlzaGVzLnZhbHVlKVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzICE9PSBwcmV2RGlzaGVzKSB7XHJcblx0XHRcdFx0cHJldkRpc2hlcyA9IHRoaXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNldFRvdGFsU3VtKCk7XHJcblx0XHR9XHJcblx0fSlcclxuXHJcblx0bGV0IHByZXZGdXJuaXR1cmUgPSBudWxsO1xyXG5cdGlucHV0RnVybml0dXJlLmZvckVhY2goKGlucHV0KSA9PiB7XHJcblx0XHRpbnB1dC5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aW5wdXRTdW0gPSBpbnB1dFN1bSArIHBhcnNlSW50KHRoaXMudmFsdWUpXHJcblx0XHRcdGlmIChwcmV2RnVybml0dXJlKSB7XHJcblx0XHRcdFx0aW5wdXRTdW0gPSBpbnB1dFN1bSAtIHBhcnNlSW50KHByZXZGdXJuaXR1cmUudmFsdWUpXHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMgIT09IHByZXZGdXJuaXR1cmUpIHtcclxuXHRcdFx0XHRwcmV2RnVybml0dXJlID0gdGhpcztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2V0VG90YWxTdW0oKTtcclxuXHRcdH1cclxuXHR9KVxyXG5cclxuXHRmdW5jdGlvbiBzbGlkZXJHdWVzdFN1bSgpIHtcclxuXHRcdHJldHVybiBzbGlkZXJHdWVzdC5kYXRhc2V0LmNvc3QgKiBzbGlkZXJHdWVzdC52YWx1ZTtcclxuXHR9XHJcblx0ZnVuY3Rpb24gc2xpZGVyRHJpbmtTdW0oKSB7XHJcblx0XHRyZXR1cm4gc2xpZGVyRHJpbmsuZGF0YXNldC5jb3N0ICogc2xpZGVyRHJpbmsudmFsdWU7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHNsaWRlckhvdXJzU3VtKCkge1xyXG5cdFx0cmV0dXJuIHNsaWRlckhvdXJzLmRhdGFzZXQuY29zdCAqIHNsaWRlckhvdXJzLnZhbHVlO1xyXG5cdH1cclxuXHJcblx0c2xpZGVyR3Vlc3Qub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyYW5nZVN1bSA9IGdldFRvdGFsU3VtKClcclxuXHRcdHNldFRvdGFsU3VtKClcclxuXHR9XHJcblxyXG5cdHNsaWRlckRyaW5rLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmFuZ2VTdW0gPSBnZXRUb3RhbFN1bSgpXHJcblx0XHRzZXRUb3RhbFN1bSgpXHJcblx0fVxyXG5cclxuXHRzbGlkZXJIb3Vycy5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJhbmdlU3VtID0gZ2V0VG90YWxTdW0oKVxyXG5cdFx0c2V0VG90YWxTdW0oKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0VG90YWxTdW0oKSB7XHJcblx0XHRyZXR1cm4gc2xpZGVySG91cnNTdW0oKSArIHNsaWRlckRyaW5rU3VtKCkgKyBzbGlkZXJHdWVzdFN1bSgpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzZXRUb3RhbFN1bSgpIHtcclxuXHRcdHRvdGFsU3VtID0gcmFuZ2VTdW0gKyBpbnB1dFN1bVxyXG5cdFx0dG90YWxQcmljZS50ZXh0Q29udGVudCA9IHRvdGFsU3VtLnRvU3RyaW5nKCkgKyBcIiDRgNGD0LEuXCJcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHJlbmRlckNhcnRJdGVtKCkge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29ja3RhaWxzTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgPGRpdiBjbGFzcz1cImNvY2t0YWlsLWl0ZW1cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvY2t0YWlsLXRpdGxlXCI+JHtsb2NhbFN0b3JhZ2Uua2V5KGkpfTwvZGl2PlxyXG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJjb2NrdGFpbC1hbW91bnRcIiB0eXBlPVwibnVtYmVyXCIgbWluPVwiMVwiIHNpemU9XCIxXCIgdmFsdWU9JHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKX0+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJkZWxldGVcIj48L2Rpdj5cclxuXHRcdCAgPC9kaXY+YCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb2NrdGFpbERlbEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShlLnRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCIuY29ja3RhaWwtdGl0bGVcIikudGV4dENvbnRlbnQpXHJcbmUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKClcclxuXHRcdH0pXHJcblx0fSlcclxuXHJcblx0Y29ja3RhaWxBbW91bnRCdG5zLmZvckVhY2goKGlucHV0KSA9PiB7XHJcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKGUudGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihcIi5jb2NrdGFpbC10aXRsZVwiKS50ZXh0Q29udGVudCxlLnRhcmdldC52YWx1ZSlcclxuXHRcdH0pXHJcblxyXG5cdH0pXHJcbn0pIl0sImZpbGUiOiJjYWxjLmpzIn0=