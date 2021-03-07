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

/***/ "./components/slider/slider.js":
/*!*************************************!*\
  !*** ./components/slider/slider.js ***!
  \*************************************/
/***/ (() => {

eval("class Slider {\r\n    constructor(slider) {\r\n        this.slider = slider;\r\n        this.container = slider.querySelector('.slider__list');\r\n        this.count = this.container.children.length;\r\n        this.offset = Number(this.container.dataset.offset);\r\n        this.togglers = Array.from(this.slider.querySelectorAll('.slider__toggler'));\r\n        this.container.style.left = 0;\r\n        this.current = 0;\r\n        let prev = this.slider.querySelector('.slider__button_prev');\r\n        let next = this.slider.querySelector('.slider__button_next');\r\n\r\n        prev.onclick = () => this.prev();\r\n        next.onclick = () => this.next();\r\n    }\r\n\r\n    slide(to) {\r\n        if (to >= this.count) to = 0;\r\n        if (to < 0) to = this.count - 1;\r\n        this.container.style.left = to * -1 * this.offset + '%';\r\n        this.selectToggler(to);\r\n        this.current = to;\r\n    }\r\n\r\n    next() {\r\n        this.slide(this.current + 1);\r\n    }\r\n\r\n    prev() {\r\n        this.slide(this.current - 1);\r\n    }\r\n\r\n    selectToggler(num) {\r\n        this.slider.querySelector('.slider__toggler_check').classList.remove('slider__toggler_check');\r\n        this.togglers[num].classList.add('slider__toggler_check');\r\n    }\r\n}\r\n\r\nlet sliders = Array.from(document.querySelectorAll('.slider'));\r\n\r\nfor (let slider of sliders) {\r\n    new Slider(slider);\r\n}\n\n//# sourceURL=webpack:///./components/slider/slider.js?");

/***/ }),

/***/ "./javascript/main.js":
/*!****************************!*\
  !*** ./javascript/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_slider_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/slider/slider.js */ \"./components/slider/slider.js\");\n/* harmony import */ var _components_slider_slider_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_slider_slider_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./javascript/main.js?");

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