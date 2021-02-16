/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/slider.js");

'use strict';

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("trigger").onclick = function () {
    open();
  };

  function open() {
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("trigger").classList.toggle("active");
  }
  /**
   * Youtube video
   */


  $('[data-youtube]').on('click', function () {
    var id = $(this).data('youtube'),
        padding = $(window).innerWidth() > 768 ? 120 : 30,
        ratio = 9 / 16,
        width = $(window).innerWidth() > 768 ? $(window).innerWidth() - padding - 200 : $(window).innerWidth() - padding,
        height = width * ratio,
        html = '<iframe style="width: ' + width + 'px; height: ' + height + 'px;" ' + 'src="' + id + '" frameborder="0" gesture="media" allowfullscreen></iframe>';
    $('body').append('<div class="outer">' + html + '</div>');
  });
  $(document).mouseup(function (e) {
    var container = $('.outer iframe');

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.outer').remove();
    }
  });
  $(document).on('keyup', function (e) {
    if (e.keyCode === 27) {
      $('.outer').remove();
    }
  }); // 'use strict';
  // var multiItemSlider = (function () {
  //   function _isElementVisible(element) {
  //     var rect = element.getBoundingClientRect(),
  //       vWidth = window.innerWidth || doc.documentElement.clientWidth,
  //       vHeight = window.innerHeight || doc.documentElement.clientHeight,
  //       elemFromPoint = function (x, y) { return document.elementFromPoint(x, y) };
  //     if (rect.right < 0 || rect.bottom < 0
  //       || rect.left > vWidth || rect.top > vHeight)
  //       return false;
  //     return (
  //       element.contains(elemFromPoint(rect.left, rect.top))
  //       || element.contains(elemFromPoint(rect.right, rect.top))
  //       || element.contains(elemFromPoint(rect.right, rect.bottom))
  //       || element.contains(elemFromPoint(rect.left, rect.bottom))
  //     );
  //   }
  //   return function (selector, config) {
  //     var
  //       _mainElement = document.querySelector(selector), // основный элемент блока
  //       _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
  //       _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
  //       _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
  //       _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
  //       _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
  //       _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
  //       _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
  //       _positionLeftItem = 0, // позиция левого активного элемента
  //       _transform = 0, // значение транфсофрмации .slider_wrapper
  //       _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
  //       _items = [], // массив элементов
  //       _interval = 0,
  //       _html = _mainElement.innerHTML,
  //       _states = [
  //         { active: false, minWidth: 0, count: 1 },
  //         { active: false, minWidth: 980, count: 2 }
  //       ],
  //       _config = {
  //         isCycling: false, // автоматическая смена слайдов
  //         direction: 'right', // направление смены слайдов
  //         interval: 2000, // интервал между автоматической сменой слайдов
  //         pause: true // устанавливать ли паузу при поднесении курсора к слайдеру
  //       };
  //     for (var key in config) {
  //       if (key in _config) {
  //         _config[key] = config[key];
  //       }
  //     }
  //     // наполнение массива _items
  //     _sliderItems.forEach(function (item, index) {
  //       _items.push({ item: item, position: index, transform: 0 });
  //     });
  //     var _setActive = function () {
  //       var _index = 0;
  //       var width = parseFloat(document.body.clientWidth);
  //       _states.forEach(function (item, index, arr) {
  //         _states[index].active = false;
  //         if (width >= _states[index].minWidth)
  //           _index = index;
  //       });
  //       _states[_index].active = true;
  //     };
  //     var _getActive = function () {
  //       var _index;
  //       _states.forEach(function (item, index, arr) {
  //         if (_states[index].active) {
  //           _index = index;
  //         }
  //       });
  //       return _index;
  //     };
  //     var position = {
  //       getItemMin: function () {
  //         var indexItem = 0;
  //         _items.forEach(function (item, index) {
  //           if (item.position < _items[indexItem].position) {
  //             indexItem = index;
  //           }
  //         });
  //         return indexItem;
  //       },
  //       getItemMax: function () {
  //         var indexItem = 0;
  //         _items.forEach(function (item, index) {
  //           if (item.position > _items[indexItem].position) {
  //             indexItem = index;
  //           }
  //         });
  //         return indexItem;
  //       },
  //       getMin: function () {
  //         return _items[position.getItemMin()].position;
  //       },
  //       getMax: function () {
  //         return _items[position.getItemMax()].position;
  //       }
  //     };
  //     var _transformItem = function (direction) {
  //       var nextItem;
  //       if (!_isElementVisible(_mainElement)) {
  //         return;
  //       }
  //       if (direction === 'right') {
  //         _positionLeftItem++;
  //         if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
  //           nextItem = position.getItemMin();
  //           _items[nextItem].position = position.getMax() + 1;
  //           _items[nextItem].transform += _items.length * 100;
  //           _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
  //         }
  //         _transform -= _step;
  //       }
  //       if (direction === 'left') {
  //         _positionLeftItem--;
  //         if (_positionLeftItem < position.getMin()) {
  //           nextItem = position.getItemMax();
  //           _items[nextItem].position = position.getMin() - 1;
  //           _items[nextItem].transform -= _items.length * 100;
  //           _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
  //         }
  //         _transform += _step;
  //       }
  //       _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
  //     }
  //     var _cycle = function (direction) {
  //       if (!_config.isCycling) {
  //         return;
  //       }
  //       _interval = setInterval(function () {
  //         _transformItem(direction);
  //       }, _config.interval);
  //     }
  //     // обработчик события click для кнопок "назад" и "вперед"
  //     var _controlClick = function (e) {
  //       if (e.target.classList.contains('slider__control')) {
  //         e.preventDefault();
  //         var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
  //         _transformItem(direction);
  //         clearInterval(_interval);
  //         _cycle(_config.direction);
  //       }
  //     };
  //     // обработка события изменения видимости страницы
  //     var _handleVisibilityChange = function () {
  //       if (document.visibilityState === "hidden") {
  //         clearInterval(_interval);
  //       } else {
  //         clearInterval(_interval);
  //         _cycle(_config.direction);
  //       }
  //     };
  //     var _refresh = function () {
  //       clearInterval(_interval);
  //       _mainElement.innerHTML = _html;
  //       _sliderWrapper = _mainElement.querySelector('.slider__wrapper');
  //       _sliderItems = _mainElement.querySelectorAll('.slider__item');
  //       _sliderControls = _mainElement.querySelectorAll('.slider__control');
  //       _sliderControlLeft = _mainElement.querySelector('.slider__control_left');
  //       _sliderControlRight = _mainElement.querySelector('.slider__control_right');
  //       _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width);
  //       _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width);
  //       _positionLeftItem = 0;
  //       _transform = 0;
  //       _step = _itemWidth / _wrapperWidth * 100;
  //       _items = [];
  //       _sliderItems.forEach(function (item, index) {
  //         _items.push({ item: item, position: index, transform: 0 });
  //       });
  //     };
  //     var _setUpListeners = function () {
  //       _mainElement.addEventListener('click', _controlClick);
  //       if (_config.pause && _config.isCycling) {
  //         _mainElement.addEventListener('mouseenter', function () {
  //           clearInterval(_interval);
  //         });
  //         _mainElement.addEventListener('mouseleave', function () {
  //           clearInterval(_interval);
  //           _cycle(_config.direction);
  //         });
  //       }
  //       document.addEventListener('visibilitychange', _handleVisibilityChange, false);
  //       window.addEventListener('resize', function () {
  //         var
  //           _index = 0,
  //           width = parseFloat(document.body.clientWidth);
  //         _states.forEach(function (item, index, arr) {
  //           if (width >= _states[index].minWidth)
  //             _index = index;
  //         });
  //         if (_index !== _getActive()) {
  //           _setActive();
  //           _refresh();
  //         }
  //       });
  //     };
  //     // инициализация
  //     _setUpListeners();
  //     if (document.visibilityState === "visible") {
  //       _cycle(_config.direction);
  //     }
  //     _setActive();
  //     return {
  //       right: function () { // метод right
  //         _transformItem('right');
  //       },
  //       left: function () { // метод left
  //         _transformItem('left');
  //       },
  //       stop: function () { // метод stop
  //         _config.isCycling = false;
  //         clearInterval(_interval);
  //       },
  //       cycle: function () { // метод cycle 
  //         _config.isCycling = true;
  //         clearInterval(_interval);
  //         _cycle();
  //       }
  //     };
  //   };
  // }());
  // var slider = multiItemSlider('.slider', {
  //   isCycling: true
  // });

  document.querySelector('[data-modal]').addEventListener('click', function () {
    var modal = document.querySelector('.modal__window');

    function showWindow() {
      modal.classList.remove('hide');
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    }

    function hideWindow() {
      modal.addEventListener('click', function (e) {
        if (e.target && e.target.matches('[data-close]')) {
          hideCode();
        }
      });
    }

    function hideCode() {
      modal.classList.remove('show');
      modal.classList.add('hide');
      document.body.style.overflow = '';
    }

    showWindow();
    hideWindow();
  }); //Slider

  Object(_slider__WEBPACK_IMPORTED_MODULE_0__["default"])({
    container: '.slider__test',
    fields: '.slides__fields',
    slide: '.slide',
    nextArrow: '.next__arrow',
    prevArrow: '.prev__arrow',
    arrowsWrapper: '.inner__arrow',
    speed: 3000,
    interval: false,
    mouseOverImage: true,
    mouseOverDots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
      breackpoint: 992,
      settings: {
        speedR: 3000,
        intervalR: false,
        mouseOverImageR: true,
        mouseOverDotsR: true,
        slidesToShowR: 2,
        slidesToScrollR: 1
      }
    }, {
      breackpoint: 980,
      settings: {
        speedR: 3000,
        intervalR: false,
        mouseOverImageR: true,
        mouseOverDotsR: true,
        slidesToShowR: 1,
        slidesToScrollR: 1
      }
    }]
  });
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/ru.scss":
/*!*********************!*\
  !*** ./src/ru.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider(_ref) {
  var container = _ref.container,
      fields = _ref.fields,
      slide = _ref.slide,
      nextArrow = _ref.nextArrow,
      prevArrow = _ref.prevArrow,
      interval = _ref.interval,
      mouseOverImage = _ref.mouseOverImage,
      slidesToShow = _ref.slidesToShow,
      arrowsWrapper = _ref.arrowsWrapper,
      slidesToScroll = _ref.slidesToScroll,
      speed = _ref.speed,
      mouseOverDots = _ref.mouseOverDots,
      responsive = _ref.responsive;
  responsive.forEach(function (value) {
    if (document.documentElement.offsetWidth < value.breackpoint) {
      var _value$settings = value.settings,
          _value$settings$speed = _value$settings.speedR,
          speedR = _value$settings$speed === void 0 ? 3000 : _value$settings$speed,
          _value$settings$inter = _value$settings.intervalR,
          intervalR = _value$settings$inter === void 0 ? true : _value$settings$inter,
          _value$settings$mouse = _value$settings.mouseOverImageR,
          mouseOverImageR = _value$settings$mouse === void 0 ? true : _value$settings$mouse,
          _value$settings$mouse2 = _value$settings.mouseOverDotsR,
          mouseOverDotsR = _value$settings$mouse2 === void 0 ? true : _value$settings$mouse2,
          _value$settings$slide = _value$settings.slidesToShowR,
          slidesToShowR = _value$settings$slide === void 0 ? 1 : _value$settings$slide,
          _value$settings$slide2 = _value$settings.slidesToScrollR,
          slidesToScrollR = _value$settings$slide2 === void 0 ? 1 : _value$settings$slide2;
      speed = speedR;
      interval = intervalR;
      mouseOverImage = mouseOverImageR;
      mouseOverDots = mouseOverDotsR;
      slidesToShow = slidesToShowR;
      slidesToScroll = slidesToScrollR;
    }
  });
  var wrapper = document.querySelector(container),
      inner = document.querySelector(fields),
      slides = document.querySelectorAll(slide),
      next = document.querySelector(nextArrow),
      prev = document.querySelector(prevArrow),
      arrows = document.querySelector(arrowsWrapper),
      width = window.getComputedStyle(wrapper).width;
  var offset = 0,
      index = 0,
      userWidth,
      slidesLength,
      i;
  console.log(width);
  userWidth = changeWidth(width) * slidesToShow;
  slidesLength = slides.length - slidesToShow - (slidesToScroll - 1);
  wrapper.style.width = "".concat(userWidth, "px");
  wrapper.style.width = "".concat(userWidth, "px");
  wrapper.style.overflow = "hidden";
  inner.style.width = 100 * slides.length + '%';
  inner.style.display = "flex";
  slides.forEach(function (value) {
    if (document.documentElement.offsetWidth <= 990 && document.documentElement.offsetWidth >= 981) {
      value.style.width = "".concat(changeWidth(width) - 100, "px");
    } else {
      value.style.width = width;
    }
  });
  arrows.style.maxWidth = "".concat(userWidth, "px"); //Dots
  // const div = document.createElement('div');
  // div.classList.add('div__dots');
  // div.style.marginTop = "15px";
  // for (let i = 0; i <= slidesLength; i++) {
  //     div.innerHTML += `
  //     <button class="dot__style" data-count = ${i + 1}></button>
  //     `;
  // }
  // wrapper.append(div);
  // const dots = document.querySelectorAll('.dot__style'),
  //     divDots = document.querySelector('.div__dots');
  // changeDots(dots, index);
  // function changeDots(selector, index) {
  //     selector.forEach(value => {
  //         value.classList.remove('dots__active');
  //     });
  //     selector[index].classList.add('dots__active');
  // }

  next.addEventListener('click', function () {
    nextSlide(index);
  });

  function changeWidth(width) {
    // return width.replace(/\D/gi, '');
    return +width.slice(0, width.length - 2);
  }

  function nextSlide() {
    if (offset === changeWidth(width) * slidesToScroll * (slides.length - slidesToShow - (slidesToScroll - 1))) {
      offset = 0;
    } else {
      offset += changeWidth(width) * slidesToScroll;
    }

    inner.style.transform = "translateX(-".concat(offset, "px)");
    index = index === slidesLength ? index = 0 : ++index; // changeDots(dots, index);
  }

  prev.addEventListener('click', function () {
    if (offset === 0) {
      offset = changeWidth(width) * slidesToScroll * (slides.length - slidesToShow - (slidesToScroll - 1));
    } else {
      offset -= changeWidth(width) * slidesToScroll;
    }

    inner.style.transform = "translateX(-".concat(offset, "px)");
    index = index === 0 ? index = slidesLength : --index; // changeDots(dots, index);
  });

  function mouseOver(selector) {
    selector.addEventListener('mouseover', function () {
      clearInterval(i);
    });
  }

  function mouseOut(selector) {
    var check = true;
    selector.addEventListener('mouseout', interval);

    function interval(e) {
      i = setInterval(function () {
        nextSlide();
      }, speed);
      check = false;

      if (!check && mouseOverDots && e.target.matches('button.dot__style')) {
        selector.removeEventListener('mouseout', interval);
      }
    }
  }

  if (interval) {
    //Animation 
    i = setInterval(function () {
      nextSlide();
    }, speed);

    if (mouseOverImage) {
      mouseOver(inner);
      mouseOut(inner);
    }
  } //Dots click


  wrapper.addEventListener('click', function (e) {
    if (e.target && e.target.getAttribute('data-count')) {
      var count = e.target.getAttribute('data-count');
      var arrow = e.target;
      index = count - 1; // changeDots(dots, index);

      if (mouseOver) {
        clearInterval(i);
        mouseOut(arrow);
      }

      offset = changeWidth(width) * slidesToScroll * (count - 1);
      inner.style.transform = "translateX(-".concat(offset, "px)");
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./src/app.js ./src/app.scss ./src/ru.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\MAMP\htdocs\Nekit\writer-book\src\app.js */"./src/app.js");
__webpack_require__(/*! C:\MAMP\htdocs\Nekit\writer-book\src\app.scss */"./src/app.scss");
module.exports = __webpack_require__(/*! C:\MAMP\htdocs\Nekit\writer-book\src\ru.scss */"./src/ru.scss");


/***/ })

/******/ });