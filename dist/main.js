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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Liblary/RayQ.js":
/*!*****************************!*\
  !*** ./src/Liblary/RayQ.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RayQ; });\n/* harmony import */ var _attributes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes.js */ \"./src/Liblary/attributes.js\");\n/* harmony import */ var _iteration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iteration.js */ \"./src/Liblary/iteration.js\");\n/* harmony import */ var _Utils_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/mixin.js */ \"./src/Utils/mixin.js\");\n\r\n\r\n\r\n\r\nconst _NODES = new WeakMap();\r\n\r\nclass RayQ extends Object(_Utils_mixin_js__WEBPACK_IMPORTED_MODULE_2__[\"mixin\"])(_attributes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _iteration_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n{\r\n\r\n    constructor(nodes) {\r\n\r\n        super();\r\n\r\n        if(!Array.isArray(nodes)) {\r\n            nodes = [nodes];\r\n        }\r\n\r\n        _NODES.set(this, nodes);\r\n\r\n    }\r\n\r\n    get(index ) {\r\n        let nodes = _NODES.get(this);\r\n\r\n        if(Number.isInteger(index)) {\r\n            return nodes[index];\r\n        } else {\r\n            return nodes;\r\n        }\r\n    }\r\n\r\n    *[Symbol.iterator]() {\r\n        yield this.get();\r\n    }\r\n\r\n    static create(nodes) {\r\n        return new RayQ(nodes);\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/Liblary/RayQ.js?");

/***/ }),

/***/ "./src/Liblary/attributes.js":
/*!***********************************!*\
  !*** ./src/Liblary/attributes.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\r\n    ss(key, value, ...indexs) {\r\n\r\n        if(key !== undefined && value === undefined) {\r\n            let out = [];\r\n\r\n            for(let i of this.get()){\r\n                out.push(i.getAttribute(key));\r\n            }\r\n            return out;\r\n        } else if (key !== undefined && value !== undefined && indexs.length > 0) {\r\n\r\n            const tabix = [...indexs];\r\n            for (let i of tabix) {\r\n                this.get(i).setAttribute(key, value);\r\n            }\r\n        } else {\r\n            this.each( node => node.setAttribute(key, value));\r\n        }\r\n\r\n    }\r\n\r\n});\n\n//# sourceURL=webpack:///./src/Liblary/attributes.js?");

/***/ }),

/***/ "./src/Liblary/iteration.js":
/*!**********************************!*\
  !*** ./src/Liblary/iteration.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\r\n    each(fn) {\r\n        this.get().forEach(fn);\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/Liblary/iteration.js?");

/***/ }),

/***/ "./src/Utils/check.js":
/*!****************************!*\
  !*** ./src/Utils/check.js ***!
  \****************************/
/*! exports provided: isSelector, isHTMLTag, isDOMNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isSelector\", function() { return isSelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isHTMLTag\", function() { return isHTMLTag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDOMNode\", function() { return isDOMNode; });\nfunction isSelector(value) {\r\n    return (\r\n        typeof value === \"string\" &&\r\n        !isHTMLTag(value) &&\r\n        !isDOMNode(value)\r\n    );\r\n}\r\n\r\nfunction isHTMLTag(value) {\r\n    return (\r\n        typeof value === \"string\" &&\r\n        value.startsWith(\"<\") && value.endsWith(\">\")\r\n    );\r\n}\r\n\r\nfunction isDOMNode(value) {\r\n    return (\r\n        typeof value === \"object\" &&\r\n        value instanceof Element\r\n    );\r\n}\n\n//# sourceURL=webpack:///./src/Utils/check.js?");

/***/ }),

/***/ "./src/Utils/element.js":
/*!******************************!*\
  !*** ./src/Utils/element.js ***!
  \******************************/
/*! exports provided: findElements, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findElements\", function() { return findElements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\nfunction findElements(selector) {\r\n    return Array.from( document.querySelectorAll(selector) );\r\n}\r\n\r\nfunction createElement(htmlTag) {\r\n\r\n    let result = (/<(.+)>/).exec(htmlTag);\r\n\r\n    if(result && result[1]) {\r\n        return document.createElement(result[1]);\r\n    } else {\r\n        throw new Error(\"Inwalid HTML tag!\");\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/Utils/element.js?");

/***/ }),

/***/ "./src/Utils/mixin.js":
/*!****************************!*\
  !*** ./src/Utils/mixin.js ***!
  \****************************/
/*! exports provided: mixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mixin\", function() { return mixin; });\nfunction mixin(...mixins) {\r\n\r\nconst fn = function() {};\r\n\r\nObject.assign(fn.prototype, ...mixins);\r\n\r\nreturn fn;\r\n}\n\n//# sourceURL=webpack:///./src/Utils/mixin.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Liblary_RayQ_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Liblary/RayQ.js */ \"./src/Liblary/RayQ.js\");\n/* harmony import */ var _Utils_check_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils/check.js */ \"./src/Utils/check.js\");\n/* harmony import */ var _Utils_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils/element.js */ \"./src/Utils/element.js\");\n\r\n\r\n\r\n\r\nfunction init (param) {\r\n\r\n    \"use strict\";\r\n\r\n    let nodes = null;\r\n\r\n    if (Object(_Utils_check_js__WEBPACK_IMPORTED_MODULE_1__[\"isSelector\"])(param)) {\r\n        nodes = Object(_Utils_element_js__WEBPACK_IMPORTED_MODULE_2__[\"findElements\"])(param);\r\n    } else if (Object(_Utils_check_js__WEBPACK_IMPORTED_MODULE_1__[\"isHTMLTag\"])(param)) {\r\n        nodes = Object(_Utils_element_js__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(param)\r\n    } else if (Object(_Utils_check_js__WEBPACK_IMPORTED_MODULE_1__[\"isDOMNode\"])(param)) {\r\n        nodes = param;\r\n    }\r\n    return _Liblary_RayQ_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(nodes);\r\n}\r\n\r\nfunction use$(swi) {\r\n    try{\r\n    const w$= window.$;\r\n    window.$ = init;\r\n    if(name !== undefined) {\r\n        window.swi = w$;\r\n        return true;\r\n    }\r\n    else {\r\n        return w$;\r\n    }\r\n    }\r\n    catch{\r\n        return false;\r\n    }\r\n}\r\n\r\nwindow.RQ = init;\r\nwindow.$RQ = use$;\r\nif(window.$ === undefined) window.$ = init;\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });