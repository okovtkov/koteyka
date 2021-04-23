/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./components/catalog-filter/catalog-filter.js":
/*!*****************************************************!*\
  !*** ./components/catalog-filter/catalog-filter.js ***!
  \*****************************************************/
/***/ (() => {

"use strict";
eval("\r\n\r\nclass Filter {\r\n    constructor() {\r\n        let cards = Array.from(document.querySelectorAll('.catalog-rooms__item'));\r\n        let container = document.querySelector('.catalog-rooms');\r\n        let filter = document.querySelector('.filter');\r\n\r\n        filter.addEventListener('submit', (event) => {\r\n            event.preventDefault();\r\n\r\n            let filteredCards = this.filterByPrice(cards);\r\n            filteredCards = this.filterByArea(filteredCards);\r\n            filteredCards = this.filterByItem(filteredCards);\r\n\r\n            cards.forEach(card => card.remove());\r\n            container.prepend(...filteredCards);\r\n        });\r\n    }\r\n\r\n    filterByPrice(cards) {\r\n        let from = parseInt(document.querySelector('.filter__price_min').value);\r\n        let to = parseInt(document.querySelector('.filter__price_max').value);\r\n        if (isNaN(from)) from = 0;\r\n        if (isNaN(to)) to = 9999;\r\n\r\n        return cards.filter(card => {\r\n            let price = parseInt(card.querySelector('.room-option__price_js').textContent);\r\n            return (price >= from && price <= to);\r\n        });\r\n    }\r\n\r\n    filterByArea(cards) {\r\n        let checkboxes = Array.from(document.querySelectorAll('.checkbox__main_area input:checked'));\r\n        if (checkboxes.length === 0) return cards;\r\n\r\n        return cards.filter(card => {\r\n            for (let checkbox of checkboxes) {\r\n                let areaValue = parseFloat(checkbox.value);\r\n                let cardValue = parseFloat(card.querySelector('.room-option__area_js').textContent.replace(',', '.'));\r\n                if (areaValue === cardValue) return true;\r\n            }\r\n        });\r\n    }\r\n\r\n    filterByItem(cards) {\r\n        let checkboxes = Array.from(document.querySelectorAll('.checkbox__main_item input:checked'));\r\n        if (checkboxes.length === 0) return cards;\r\n    \r\n        return cards.filter(card => {\r\n            for (let checkbox of checkboxes) {\r\n                let itemValue = checkbox.value;\r\n                let image = card.querySelector(`.room-option__img[alt=\"${itemValue}\"]`);\r\n                if (image) return true;\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\nnew Filter();\n\n//# sourceURL=webpack:///./components/catalog-filter/catalog-filter.js?");

/***/ }),

/***/ "./components/catalog-select/catalog-select.js":
/*!*****************************************************!*\
  !*** ./components/catalog-select/catalog-select.js ***!
  \*****************************************************/
/***/ (() => {

"use strict";
eval("\r\n\r\nlet options = Array.from(document.querySelectorAll('.select__sorting'));\r\n\r\noptions.forEach(option => {\r\n    option.addEventListener('click', () => {\r\n        let sortingBy = option.dataset.sort;\r\n        let column = option.dataset.column;\r\n        let selector = `.room-option__${column}_js`;\r\n        let cards = Array.from(document.querySelectorAll('.catalog-rooms__item'));\r\n        let container = document.querySelector('.catalog-rooms');\r\n\r\n       let sortedCards = sortCards(cards, selector, sortingBy);\r\n       container.append(...sortedCards);\r\n    });\r\n})\r\n\r\nfunction sortCards(cards, selector, type) {\r\n    return cards.slice(0).sort((a, b) => {\r\n        a = parseFloat(a.querySelector(selector).textContent.replace(',', '.'));\r\n        b = parseFloat(b.querySelector(selector).textContent.replace(',', '.'));\r\n        return (type === 'asc') ? a - b : b - a; \r\n    });\r\n}\n\n//# sourceURL=webpack:///./components/catalog-select/catalog-select.js?");

/***/ }),

/***/ "./components/slider/slider.js":
/*!*************************************!*\
  !*** ./components/slider/slider.js ***!
  \*************************************/
/***/ (() => {

eval("class Slider {\r\n    constructor(slider) {\r\n        this.slider = slider;\r\n        this.container = slider.querySelector('.slider__list');\r\n        this.count = this.container.children.length;\r\n        let offset = getComputedStyle(this.container).getPropertyValue('--offset');\r\n        this.offset = parseInt(offset);\r\n        this.togglers = Array.from(this.slider.querySelectorAll('.slider__toggler'));\r\n        this.container.style.left = 0;\r\n        this.current = 0;\r\n        let prev = this.slider.querySelector('.slider__button_prev');\r\n        let next = this.slider.querySelector('.slider__button_next');\r\n\r\n        prev.onclick = () => this.prev();\r\n        next.onclick = () => this.next();\r\n        this.togglers.forEach((toggler, index) => toggler.onclick = () => this.slide(index));\r\n    }\r\n\r\n    slide(to) {\r\n        console.log(to);\r\n        if (to >= this.count) to = 0;\r\n        if (to < 0) to = this.count - 1;\r\n        this.container.style.left = to * -1 * this.offset + '%';\r\n        this.selectToggler(to);\r\n        this.current = to;\r\n    }\r\n\r\n    next() {\r\n        this.slide(this.current + 1);\r\n    }\r\n\r\n    prev() {\r\n        this.slide(this.current - 1);\r\n    }\r\n\r\n    selectToggler(num) {\r\n        this.slider.querySelector('.slider__toggler_check').classList.remove('slider__toggler_check');\r\n        this.togglers[num].classList.add('slider__toggler_check');\r\n    }\r\n}\r\n\r\nlet sliders = Array.from(document.querySelectorAll('.slider'));\r\n\r\nfor (let slider of sliders) {\r\n    new Slider(slider);\r\n}\n\n//# sourceURL=webpack:///./components/slider/slider.js?");

/***/ }),

/***/ "./javascript/main.js":
/*!****************************!*\
  !*** ./javascript/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_slider_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/slider/slider.js */ \"./components/slider/slider.js\");\n/* harmony import */ var _components_slider_slider_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_slider_slider_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_catalog_select_catalog_select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/catalog-select/catalog-select.js */ \"./components/catalog-select/catalog-select.js\");\n/* harmony import */ var _components_catalog_select_catalog_select_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_catalog_select_catalog_select_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_catalog_filter_catalog_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/catalog-filter/catalog-filter.js */ \"./components/catalog-filter/catalog-filter.js\");\n/* harmony import */ var _components_catalog_filter_catalog_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_catalog_filter_catalog_filter_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\n\n//# sourceURL=webpack:///./javascript/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./javascript/main.js");
/******/ 	
/******/ })()
;