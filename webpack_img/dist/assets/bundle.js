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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/copy-solid.svg":
/*!***********************************!*\
  !*** ./src/images/copy-solid.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjb3B5IiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtY29weSBmYS13LTE0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTMyMCA0NDh2NDBjMCAxMy4yNTUtMTAuNzQ1IDI0LTI0IDI0SDI0Yy0xMy4yNTUgMC0yNC0xMC43NDUtMjQtMjRWMTIwYzAtMTMuMjU1IDEwLjc0NS0yNCAyNC0yNGg3MnYyOTZjMCAzMC44NzkgMjUuMTIxIDU2IDU2IDU2aDE2OHptMC0zNDRWMEgxNTJjLTEzLjI1NSAwLTI0IDEwLjc0NS0yNCAyNHYzNjhjMCAxMy4yNTUgMTAuNzQ1IDI0IDI0IDI0aDI3MmMxMy4yNTUgMCAyNC0xMC43NDUgMjQtMjRWMTI4SDM0NGMtMTMuMiAwLTI0LTEwLjgtMjQtMjR6bTEyMC45NzEtMzEuMDI5TDM3NS4wMjkgNy4wMjlBMjQgMjQgMCAwIDAgMzU4LjA1OSAwSDM1MnY5Nmg5NnYtNi4wNTlhMjQgMjQgMCAwIDAtNy4wMjktMTYuOTd6Ij48L3BhdGg+PC9zdmc+\"\n\n//# sourceURL=webpack:///./src/images/copy-solid.svg?");

/***/ }),

/***/ "./src/images/lock-solid.svg":
/*!***********************************!*\
  !*** ./src/images/lock-solid.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJsb2NrIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtbG9jayBmYS13LTE0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQwMCAyMjRoLTI0di03MkMzNzYgNjguMiAzMDcuOCAwIDIyNCAwUzcyIDY4LjIgNzIgMTUydjcySDQ4Yy0yNi41IDAtNDggMjEuNS00OCA0OHYxOTJjMCAyNi41IDIxLjUgNDggNDggNDhoMzUyYzI2LjUgMCA0OC0yMS41IDQ4LTQ4VjI3MmMwLTI2LjUtMjEuNS00OC00OC00OHptLTEwNCAwSDE1MnYtNzJjMC0zOS43IDMyLjMtNzIgNzItNzJzNzIgMzIuMyA3MiA3MnY3MnoiPjwvcGF0aD48L3N2Zz4NCg==\"\n\n//# sourceURL=webpack:///./src/images/lock-solid.svg?");

/***/ }),

/***/ "./src/images/security.svg":
/*!*********************************!*\
  !*** ./src/images/security.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"assets/images/a40937394fd4701e0a748cc9430d1d47-security.svg\";\n\n//# sourceURL=webpack:///./src/images/security.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_ramdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/ramdom */ \"./src/utilities/ramdom.js\");\n/* harmony import */ var _utilities_copyToClipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/copyToClipboard */ \"./src/utilities/copyToClipboard.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_lock_solid_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/lock-solid.svg */ \"./src/images/lock-solid.svg\");\n/* harmony import */ var _images_lock_solid_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_lock_solid_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_copy_solid_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/copy-solid.svg */ \"./src/images/copy-solid.svg\");\n/* harmony import */ var _images_copy_solid_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_copy_solid_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_security_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/security.svg */ \"./src/images/security.svg\");\n/* harmony import */ var _images_security_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_security_svg__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\ndocument.getElementById('header_image').src = _images_security_svg__WEBPACK_IMPORTED_MODULE_5___default.a;\nvar copyIconElem = document.getElementById('copy_icon');\ncopyIconElem.src = _images_copy_solid_svg__WEBPACK_IMPORTED_MODULE_4___default.a;\n\ncopyIconElem.onclick = function () {\n  Object(_utilities_copyToClipboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document.getElementById('actual_password').innerText);\n  alert('Copied to clipboard');\n};\n\ndocument.getElementById('password_icon').src = _images_lock_solid_svg__WEBPACK_IMPORTED_MODULE_3___default.a;\ndocument.addEventListener('DOMContentLoaded', function () {\n  var randomStringGenerator = new _utilities_ramdom__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  var randomString = \"Random String: <span id=\\\"actual_password\\\">\".concat(randomStringGenerator.generate(), \"</span>\");\n  document.getElementById('random_password').innerHTML = randomString;\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),

/***/ "./src/utilities/copyToClipboard.js":
/*!******************************************!*\
  !*** ./src/utilities/copyToClipboard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar copyToClipboard = function copyToClipboard(str) {\n  var el = document.createElement('textarea');\n  el.value = str;\n  el.setAttribute('readonly', '');\n  el.style.position = 'absolute';\n  el.style.left = '-9999px';\n  document.body.appendChild(el);\n  el.select();\n  document.execCommand('copy');\n  document.body.removeChild(el);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (copyToClipboard);\n\n//# sourceURL=webpack:///./src/utilities/copyToClipboard.js?");

/***/ }),

/***/ "./src/utilities/ramdom.js":
/*!*********************************!*\
  !*** ./src/utilities/ramdom.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RandomStringGenerator; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar RandomStringGenerator = /*#__PURE__*/function () {\n  function RandomStringGenerator() {\n    _classCallCheck(this, RandomStringGenerator);\n  }\n\n  _createClass(RandomStringGenerator, [{\n    key: \"generate\",\n    value: function generate() {\n      return this._rand() + this._rand();\n    }\n  }, {\n    key: \"_rand\",\n    value: function _rand() {\n      return Math.random().toString(36).substring(2, 15);\n    }\n  }]);\n\n  return RandomStringGenerator;\n}();\n\n\n\n//# sourceURL=webpack:///./src/utilities/ramdom.js?");

/***/ })

/******/ });