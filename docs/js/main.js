"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var toggleMenu = document.querySelector(".toggle-menu");
  var sideMenu = document.querySelector('.header-sidemenu');
  var overlay = document.querySelector('#overlay');
  var body = document.querySelector('body');
  toggleMenu.addEventListener('click', function () {
    this.classList.toggle('active');
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  function menuBurgerToggle(type) {
    if (type === "resize") {
      toggleMenu.classList.remove('active');
    } else {
      toggleMenu.classList.toggle('active');
    }
  } //Скрыть по клику оверлея


  overlay.addEventListener('click', function () {
    menuBurgerToggle('click');
    sideMenu.classList.remove('active');
    this.classList.remove('active');
    body.classList.remove('noScroll');
  });
  sideMenu.addEventListener('click', function () {
    menuBurgerToggle('click');
    this.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('noScroll');
  }); //Ресайз окна, убрать оверлей и бургер

  window.addEventListener('resize', function () {
    sideMenu.classList.remove('active');
    toggleMenu.classList.remove('active');
    overlay.classList.remove('active');
    menuBurgerToggle('resize');
  }); //Вызов модального окна

  var orderCallBtns = document.querySelectorAll('button[data-makecall]');
  var modalCloseBtns = document.querySelectorAll('button[data-modalclose]');
  modalCloseBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelector('.modal-wrapper').classList.remove('active');
    });
  });
  document.querySelector(".modal-wrapper").addEventListener('click', function (e) {
    if (!e.target.closest('.modal')) {
      document.querySelector('.modal-wrapper').classList.remove('active');
    }
  });
  orderCallBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelector('.modal-wrapper').classList.add('active');
    });
  });
  var modalSubmitBtn = document.querySelector('#modal__submit');
  modalSubmitBtn.addEventListener("click", function (event) {
    event.preventDefault();
  }); //mixItUp plugin

  var cocktailList = document.querySelector("#cocktails-list");

  if (cocktailList) {
    mixitup('#cocktails-list', {
      classNames: {
        block: ""
      }
    });
  }

  var sliders = document.querySelectorAll(".slider-ui");
  sliders.forEach(function (slider) {
    var input = slider.querySelector("input[type=range]");
    var min = input.getAttribute("min");
    var max = input.getAttribute("max");
    var valueElem = slider.querySelector(".value");
    var slidersMarkUps = slider.querySelector(".marks");
    slider.querySelector(".min").innerText = min;
    slider.querySelector(".max").innerText = max;

    function setValueElem() {
      valueElem.innerText = input.value;
      var percent = (input.value - min) / (max - min) * 100;
      valueElem.style.left = percent + "%";
    }

    setValueElem();
    input.addEventListener("input", setValueElem);
    input.addEventListener("mousedown", function () {
      valueElem.classList.add("up");
    });
    input.addEventListener("mouseup", function () {
      valueElem.classList.remove("up");
    });
    input.addEventListener("touchstart", function () {
      valueElem.classList.add("up");
    });
    input.addEventListener("touchend", function () {
      valueElem.classList.remove("up");
    });
    var sliderGuestValue = parseInt(input.value);
    var markups = max / sliderGuestValue;
    var generalValue = sliderGuestValue;

    for (var i = 1; i <= markups; i++) {
      var block = document.createElement('div');
      block.classList.add('markup');

      if (i != markups) {
        block.innerHTML = "<span>".concat(generalValue, "</span>");
      }

      slidersMarkUps.appendChild(block);
      generalValue = generalValue + sliderGuestValue;
    }
  });
  var calcReqInput = document.querySelectorAll('.request-input input');
  calcReqInput.forEach(function (input) {
    input.addEventListener("focus", function (e) {
      e.target.parentNode.classList.add('active');
    });
    input.addEventListener("blur", function (e) {
      e.target.parentNode.classList.remove('active');
    });
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    singleItem: true,
    responsive: {
      0: {
        items: 1
      }
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlTWVudSIsInF1ZXJ5U2VsZWN0b3IiLCJzaWRlTWVudSIsIm92ZXJsYXkiLCJib2R5IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwibWVudUJ1cmdlclRvZ2dsZSIsInR5cGUiLCJyZW1vdmUiLCJ3aW5kb3ciLCJvcmRlckNhbGxCdG5zIiwicXVlcnlTZWxlY3RvckFsbCIsIm1vZGFsQ2xvc2VCdG5zIiwiZm9yRWFjaCIsImJ0biIsImUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiYWRkIiwibW9kYWxTdWJtaXRCdG4iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29ja3RhaWxMaXN0IiwibWl4aXR1cCIsImNsYXNzTmFtZXMiLCJibG9jayIsInNsaWRlcnMiLCJzbGlkZXIiLCJpbnB1dCIsIm1pbiIsImdldEF0dHJpYnV0ZSIsIm1heCIsInZhbHVlRWxlbSIsInNsaWRlcnNNYXJrVXBzIiwiaW5uZXJUZXh0Iiwic2V0VmFsdWVFbGVtIiwidmFsdWUiLCJwZXJjZW50Iiwic3R5bGUiLCJsZWZ0Iiwic2xpZGVyR3Vlc3RWYWx1ZSIsInBhcnNlSW50IiwibWFya3VwcyIsImdlbmVyYWxWYWx1ZSIsImkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjYWxjUmVxSW5wdXQiLCJwYXJlbnROb2RlIiwiJCIsIm93bENhcm91c2VsIiwibG9vcCIsIm5hdiIsInNpbmdsZUl0ZW0iLCJyZXNwb25zaXZlIiwiaXRlbXMiXSwibWFwcGluZ3MiOiI7O0FBQ0FBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFFekQsTUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7QUFDQSxNQUFNQyxRQUFRLEdBQUdKLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixrQkFBdkIsQ0FBakI7QUFDQSxN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Q0FBOEJjLEdBQTlCLENBQWtDLFFBQWxDO0FBQ0EsS0FGRDtBQUdBVSxJQUFBQSxLQUFLLENBQUM5QixnQkFBTixDQUF1QixNQUF2QixFQUErQixVQUFDaUIsQ0FBRCxFQUFPO0FBQ3JDQSxNQUFBQSxDQUFDLENBQUNDLE1BQUYsQ0FBU2lDLFVBQVQsQ0FBb0I3QyxTQUFwQixDQUE4QkksTUFBOUIsQ0FBcUMsUUFBckM7QUFDQSxLQUZEO0FBR0EsR0FQRDtBQVNBMEMsRUFBQUEsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkMsV0FBbkIsQ0FBK0I7QUFDOUJDLElBQUFBLElBQUksRUFBRSxJQUR3QjtBQUU5QkMsSUFBQUEsR0FBRyxFQUFFLElBRnlCO0FBRzlCQyxJQUFBQSxVQUFVLEVBQUUsSUFIa0I7QUFJOUJDLElBQUFBLFVBQVUsRUFBRTtBQUNYLFNBQUc7QUFDRkMsUUFBQUEsS0FBSyxFQUFFO0FBREw7QUFEUTtBQUprQixHQUEvQjtBQVVBLENBMUpEIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdGNvbnN0IHRvZ2dsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS1tZW51XCIpXHJcblx0Y29uc3Qgc2lkZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLXNpZGVtZW51JylcclxuXHRjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKVxyXG5cdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuXHJcblx0dG9nZ2xlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuXHRcdHNpZGVNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcblx0XHRvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcblx0fSlcclxuXHJcblx0ZnVuY3Rpb24gbWVudUJ1cmdlclRvZ2dsZSh0eXBlKSB7XHJcblxyXG5cdFx0aWYgKHR5cGUgPT09IFwicmVzaXplXCIpIHtcclxuXHRcdFx0dG9nZ2xlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dG9nZ2xlTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdC8v0KHQutGA0YvRgtGMINC/0L4g0LrQu9C40LrRgyDQvtCy0LXRgNC70LXRj1xyXG5cdG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRtZW51QnVyZ2VyVG9nZ2xlKCdjbGljaycpXHJcblx0XHRzaWRlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG5cdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG5cdFx0Ym9keS5jbGFzc0xpc3QucmVtb3ZlKCdub1Njcm9sbCcpXHJcblx0fSlcclxuXHRzaWRlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdG1lbnVCdXJnZXJUb2dnbGUoJ2NsaWNrJylcclxuXHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHRcdG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHRcdGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9TY3JvbGwnKVxyXG5cdH0pXHJcblxyXG5cdC8v0KDQtdGB0LDQudC3INC+0LrQvdCwLCDRg9Cx0YDQsNGC0Ywg0L7QstC10YDQu9C10Lkg0Lgg0LHRg9GA0LPQtdGAXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdHNpZGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcblx0XHR0b2dnbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcblx0XHRvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcblx0XHRtZW51QnVyZ2VyVG9nZ2xlKCdyZXNpemUnKVxyXG5cdH0pXHJcblxyXG5cdC8v0JLRi9C30L7QsiDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsFxyXG5cdGNvbnN0IG9yZGVyQ2FsbEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b25bZGF0YS1tYWtlY2FsbF0nKVxyXG5cdGNvbnN0IG1vZGFsQ2xvc2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uW2RhdGEtbW9kYWxjbG9zZV0nKVxyXG5cdG1vZGFsQ2xvc2VCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcblx0XHR9KVxyXG5cdH0pXHJcblxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtd3JhcHBlclwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoJy5tb2RhbCcpKSB7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwcGVyJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHRcdH1cclxuXHR9KVxyXG5cclxuXHRvcmRlckNhbGxCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblx0XHR9KVxyXG5cdH0pXHJcblxyXG5cdGNvbnN0IG1vZGFsU3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsX19zdWJtaXQnKVxyXG5cdG1vZGFsU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHR9KVxyXG5cclxuXHQvL21peEl0VXAgcGx1Z2luXHJcblxyXG5cdGNvbnN0IGNvY2t0YWlsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29ja3RhaWxzLWxpc3RcIik7XHJcblx0aWYgKGNvY2t0YWlsTGlzdCkge1xyXG5cdFx0bWl4aXR1cCgnI2NvY2t0YWlscy1saXN0Jywge1xyXG5cdFx0XHRjbGFzc05hbWVzOiB7XHJcblx0XHRcdFx0YmxvY2s6IFwiXCJcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHJcblx0Y29uc3Qgc2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVyLXVpXCIpXHJcblxyXG5cclxuXHRzbGlkZXJzLmZvckVhY2goc2xpZGVyID0+IHtcclxuXHRcdGxldCBpbnB1dCA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT1yYW5nZV1cIilcclxuXHRcdGxldCBtaW4gPSBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJtaW5cIilcclxuXHRcdGxldCBtYXggPSBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJtYXhcIilcclxuXHRcdGxldCB2YWx1ZUVsZW0gPSBzbGlkZXIucXVlcnlTZWxlY3RvcihcIi52YWx1ZVwiKVxyXG5cdFx0bGV0IHNsaWRlcnNNYXJrVXBzID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoXCIubWFya3NcIilcclxuXHJcblx0XHRzbGlkZXIucXVlcnlTZWxlY3RvcihcIi5taW5cIikuaW5uZXJUZXh0ID0gbWluXHJcblx0XHRzbGlkZXIucXVlcnlTZWxlY3RvcihcIi5tYXhcIikuaW5uZXJUZXh0ID0gbWF4XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0VmFsdWVFbGVtKCkge1xyXG5cdFx0XHR2YWx1ZUVsZW0uaW5uZXJUZXh0ID0gaW5wdXQudmFsdWVcclxuXHRcdFx0bGV0IHBlcmNlbnQgPSAoaW5wdXQudmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikgKiAxMDBcclxuXHRcdFx0dmFsdWVFbGVtLnN0eWxlLmxlZnQgPSBwZXJjZW50ICsgXCIlXCJcclxuXHRcdH1cclxuXHRcdHNldFZhbHVlRWxlbSgpXHJcblxyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHNldFZhbHVlRWxlbSlcclxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xyXG5cdFx0XHR2YWx1ZUVsZW0uY2xhc3NMaXN0LmFkZChcInVwXCIpO1xyXG5cdFx0fSk7XHJcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiB7XHJcblx0XHRcdHZhbHVlRWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwidXBcIik7XHJcblx0XHR9KTtcclxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsICgpID0+IHtcclxuXHRcdFx0dmFsdWVFbGVtLmNsYXNzTGlzdC5hZGQoXCJ1cFwiKTtcclxuXHRcdH0pO1xyXG5cdFx0aW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsICgpID0+IHtcclxuXHRcdFx0dmFsdWVFbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJ1cFwiKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IHNsaWRlckd1ZXN0VmFsdWUgPSBwYXJzZUludChpbnB1dC52YWx1ZSlcclxuXHRcdGNvbnN0IG1hcmt1cHMgPSBtYXggLyBzbGlkZXJHdWVzdFZhbHVlXHJcblx0XHRsZXQgZ2VuZXJhbFZhbHVlID0gc2xpZGVyR3Vlc3RWYWx1ZVxyXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPD0gbWFya3VwczsgaSsrKSB7XHJcblxyXG5cdFx0XHRsZXQgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cdFx0XHRibG9jay5jbGFzc0xpc3QuYWRkKCdtYXJrdXAnKVxyXG5cdFx0XHRpZiAoaSAhPSBtYXJrdXBzKSB7XHJcblx0XHRcdFx0YmxvY2suaW5uZXJIVE1MID0gYDxzcGFuPiR7Z2VuZXJhbFZhbHVlfTwvc3Bhbj5gXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNsaWRlcnNNYXJrVXBzLmFwcGVuZENoaWxkKGJsb2NrKVxyXG5cdFx0XHRnZW5lcmFsVmFsdWUgPSBnZW5lcmFsVmFsdWUgKyBzbGlkZXJHdWVzdFZhbHVlXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IGNhbGNSZXFJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXF1ZXN0LWlucHV0IGlucHV0JylcclxuXHJcblx0Y2FsY1JlcUlucHV0LmZvckVhY2goKGlucHV0KSA9PiB7XHJcblx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKGUpID0+IHtcclxuXHRcdFx0ZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cdFx0fSlcclxuXHRcdGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIChlKSA9PiB7XHJcblx0XHRcdGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHRcdH0pXHJcblx0fSlcclxuXHJcblx0JChcIi5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0bG9vcDogdHJ1ZSxcclxuXHRcdG5hdjogdHJ1ZSxcclxuXHRcdHNpbmdsZUl0ZW06IHRydWUsXHJcblx0XHRyZXNwb25zaXZlOiB7XHJcblx0XHRcdDA6IHtcclxuXHRcdFx0XHRpdGVtczogMVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcbn0pIl0sImZpbGUiOiJtYWluLmpzIn0=
