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

/***/ "./audio sync recursive \\.mp3$":
/*!****************************!*\
  !*** ./audio/ sync \.mp3$ ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./audio-1.mp3\": \"./audio/audio-1.mp3\",\n\t\"./audio-2.mp3\": \"./audio/audio-2.mp3\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./audio sync recursive \\\\.mp3$\";\n\n//# sourceURL=webpack://lesson3/./audio/_sync_\\.mp3$?");

/***/ }),

/***/ "./img sync recursive \\.(png|jpe?g|gif)$":
/*!**************************************!*\
  !*** ./img/ sync \.(png|jpe?g|gif)$ ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./img-1.jpg\": \"./img/img-1.jpg\",\n\t\"./img-2.jpg\": \"./img/img-2.jpg\",\n\t\"./img-3.jpg\": \"./img/img-3.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./img sync recursive \\\\.(png|jpe?g|gif)$\";\n\n//# sourceURL=webpack://lesson3/./img/_sync_\\.(png%7Cjpe?");

/***/ }),

/***/ "./js/Audio_tracks.js":
/*!****************************!*\
  !*** ./js/Audio_tracks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Audio_tracks\": () => (/* binding */ Audio_tracks)\n/* harmony export */ });\n/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.js */ \"./js/text.js\");\n\n\nfunction Audio_tracks(element, div) {\n    let src = element.default;\n    let audio = new Audio(src);\n    div.appendChild(audio)\n    audio.setAttribute(\"controls\", \"controls\");\n    (0,_text_js__WEBPACK_IMPORTED_MODULE_0__.text)(src, div)\n}\n\n//# sourceURL=webpack://lesson3/./js/Audio_tracks.js?");

/***/ }),

/***/ "./js/Video_tracks.js":
/*!****************************!*\
  !*** ./js/Video_tracks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Video_tracks\": () => (/* binding */ Video_tracks)\n/* harmony export */ });\n/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.js */ \"./js/text.js\");\n\n\nfunction Video_tracks(element, div) {\n    const video = document.createElement('video')\n    video.setAttribute(\"controls\", \"controls\");\n    video.src = element.default;\n    let src = element.default;\n    console.log(element.default);\n    div.appendChild(video)\n    ;(0,_text_js__WEBPACK_IMPORTED_MODULE_0__.text)(src, div)\n}\n\n//# sourceURL=webpack://lesson3/./js/Video_tracks.js?");

/***/ }),

/***/ "./js/creationElement.js":
/*!*******************************!*\
  !*** ./js/creationElement.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"creationElement\": () => (/* binding */ creationElement)\n/* harmony export */ });\n/* harmony import */ var _pic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pic.js */ \"./js/pic.js\");\n/* harmony import */ var _Audio_tracks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Audio_tracks.js */ \"./js/Audio_tracks.js\");\n/* harmony import */ var _Video_tracks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Video_tracks.js */ \"./js/Video_tracks.js\");\n\n\n\n\nfunction creationElement(reqArray) {\n    for (const item in reqArray) {\n        const div = document.createElement('div')\n        div.classList.add('elementsOfGallery')\n        document.getElementById('main_container').appendChild(div)\n        const p = document.createElement('p')\n        const element = reqArray[item];\n        console.log(item.split(\"/\").pop().split('.')[1])\n        if (item.split(\"/\").pop().split('.')[1] === \"jpg\") {\n            (0,_pic_js__WEBPACK_IMPORTED_MODULE_0__.pic)(element, div)\n        } else if (item.split(\"/\").pop().split('.')[1] === \"mp3\") {\n            (0,_Audio_tracks_js__WEBPACK_IMPORTED_MODULE_1__.Audio_tracks)(element, div)\n        } else if (item.split(\"/\").pop().split('.')[1] === \"mp4\") {\n            (0,_Video_tracks_js__WEBPACK_IMPORTED_MODULE_2__.Video_tracks)(element, div)\n        }\n    }\n}\n\n//# sourceURL=webpack://lesson3/./js/creationElement.js?");

/***/ }),

/***/ "./js/elementsOfArray.js":
/*!*******************************!*\
  !*** ./js/elementsOfArray.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"elementsOfArray\": () => (/* binding */ elementsOfArray)\n/* harmony export */ });\n/* harmony import */ var _creationElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creationElement.js */ \"./js/creationElement.js\");\n\n\nfunction elementsOfArray(e) {\n    const reqArray = e\n        .keys()\n        .reduce((event, path) => {\n            event[path] = e(path)\n            return event\n        }, []);\n    (0,_creationElement_js__WEBPACK_IMPORTED_MODULE_0__.creationElement)(reqArray)\n    console.log(reqArray)\n}\n\n//# sourceURL=webpack://lesson3/./js/elementsOfArray.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _elementsOfArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementsOfArray.js */ \"./js/elementsOfArray.js\");\n\n\nconst imgOfArr = __webpack_require__(\"./img sync recursive \\\\.(png|jpe?g|gif)$\")\nconst audioOfArr = __webpack_require__(\"./audio sync recursive \\\\.mp3$\")\nconst videoOfArr = __webpack_require__(\"./video sync recursive \\\\.(mov|mp4)$\")\n\nwindow.onload = () => {\n    ;(0,_elementsOfArray_js__WEBPACK_IMPORTED_MODULE_1__.elementsOfArray)(imgOfArr)\n    ;(0,_elementsOfArray_js__WEBPACK_IMPORTED_MODULE_1__.elementsOfArray)(audioOfArr)\n    ;(0,_elementsOfArray_js__WEBPACK_IMPORTED_MODULE_1__.elementsOfArray)(videoOfArr)\n}\n\n//# sourceURL=webpack://lesson3/./js/main.js?");

/***/ }),

/***/ "./js/pic.js":
/*!*******************!*\
  !*** ./js/pic.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pic\": () => (/* binding */ pic)\n/* harmony export */ });\n/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.js */ \"./js/text.js\");\n\n\nfunction pic(element, div) {\n    const img = document.createElement('img')\n    img.src = element.default;\n    let src = img.src;\n    div.appendChild(img)\n    ;(0,_text_js__WEBPACK_IMPORTED_MODULE_0__.text)(src, div)\n}\n\n//# sourceURL=webpack://lesson3/./js/pic.js?");

/***/ }),

/***/ "./js/text.js":
/*!********************!*\
  !*** ./js/text.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"text\": () => (/* binding */ text)\n/* harmony export */ });\nfunction text(src, div) {\n    const p = document.createElement('p')\n    div.appendChild(p)\n    let name = src.split(\"/\").pop();\n    p.innerHTML = name.split('.')[0]\n}\n\n//# sourceURL=webpack://lesson3/./js/text.js?");

/***/ }),

/***/ "./audio/audio-1.mp3":
/*!***************************!*\
  !*** ./audio/audio-1.mp3 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/audio-1.mp3\");\n\n//# sourceURL=webpack://lesson3/./audio/audio-1.mp3?");

/***/ }),

/***/ "./audio/audio-2.mp3":
/*!***************************!*\
  !*** ./audio/audio-2.mp3 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/audio-2.mp3\");\n\n//# sourceURL=webpack://lesson3/./audio/audio-2.mp3?");

/***/ }),

/***/ "./video/video-1.mp4":
/*!***************************!*\
  !*** ./video/video-1.mp4 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"video/video-1.mp4\");\n\n//# sourceURL=webpack://lesson3/./video/video-1.mp4?");

/***/ }),

/***/ "./video/video-2.mp4":
/*!***************************!*\
  !*** ./video/video-2.mp4 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"video/video-2.mp4\");\n\n//# sourceURL=webpack://lesson3/./video/video-2.mp4?");

/***/ }),

/***/ "./img/img-1.jpg":
/*!***********************!*\
  !*** ./img/img-1.jpg ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/img-1.jpeg\");\n\n//# sourceURL=webpack://lesson3/./img/img-1.jpg?");

/***/ }),

/***/ "./img/img-2.jpg":
/*!***********************!*\
  !*** ./img/img-2.jpg ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/img-2.jpeg\");\n\n//# sourceURL=webpack://lesson3/./img/img-2.jpg?");

/***/ }),

/***/ "./img/img-3.jpg":
/*!***********************!*\
  !*** ./img/img-3.jpg ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/img-3.jpeg\");\n\n//# sourceURL=webpack://lesson3/./img/img-3.jpg?");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lesson3/./styles/main.scss?");

/***/ }),

/***/ "./video sync recursive \\.(mov|mp4)$":
/*!**********************************!*\
  !*** ./video/ sync \.(mov|mp4)$ ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./video-1.mp4\": \"./video/video-1.mp4\",\n\t\"./video-2.mp4\": \"./video/video-2.mp4\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./video sync recursive \\\\.(mov|mp4)$\";\n\n//# sourceURL=webpack://lesson3/./video/_sync_\\.(mov%7Cmp4)$?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;