var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sketch/adjustNudge.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/sketch/adjustNudge.js":
/*!***********************************!*\
  !*** ./src/sketch/adjustNudge.js ***!
  \***********************************/
/*! exports provided: adjustNudge1, adjustNudge2, adjustNudge4, adjustNudge8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustNudge1", function() { return adjustNudge1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustNudge2", function() { return adjustNudge2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustNudge4", function() { return adjustNudge4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustNudge8", function() { return adjustNudge8; });
/* harmony import */ var _utilities_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/utilities */ "./src/sketch/utilities/utilities.js");
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities/constants */ "./src/sketch/utilities/constants.js");



var adjustNudge1 = function adjustNudge1() {
  saveNudgeAmount(1);
};

var adjustNudge2 = function adjustNudge2() {
  saveNudgeAmount(2);
};

var adjustNudge4 = function adjustNudge4() {
  saveNudgeAmount(4);
};

var adjustNudge8 = function adjustNudge8() {
  saveNudgeAmount(8);
};

var saveNudgeAmount = function saveNudgeAmount(amount) {
  _utilities_utilities__WEBPACK_IMPORTED_MODULE_0__["saveGlobalSetting"](_utilities_constants__WEBPACK_IMPORTED_MODULE_1__["SETTINGS_GLOBAL_NUDGESMALL"], amount);
};



/***/ }),

/***/ "./src/sketch/utilities/constants.js":
/*!*******************************************!*\
  !*** ./src/sketch/utilities/constants.js ***!
  \*******************************************/
/*! exports provided: SETTINGS_GLOBAL_NUDGESMALL, SETTINGS_GLOBAL_NUDGEBIG, SETTINGS_PLUGIN_SHOVE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_GLOBAL_NUDGESMALL", function() { return SETTINGS_GLOBAL_NUDGESMALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_GLOBAL_NUDGEBIG", function() { return SETTINGS_GLOBAL_NUDGEBIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_PLUGIN_SHOVE", function() { return SETTINGS_PLUGIN_SHOVE; });
var SETTINGS_GLOBAL_NUDGESMALL = "nudgeDistanceSmall";
var SETTINGS_GLOBAL_NUDGEBIG = "nudgeDistanceBig";
var SETTINGS_PLUGIN_SHOVE = "shove"; // const SETTINGS_STATUS = "subscription-status";
// const SETTINGS_EMAIL = "email";
// const SETTINGS_FREQUENCY = "frequency";
// const SETTINGS_VERIFICATION = "verification";
// const SETTINGS_MIXPANELID = "mixpanel-unique-id";
// const URL_PRICING = "http://getstark.co/pricing";
// const URL_SUPPORT = "http://support.getstark.co/";



/***/ }),

/***/ "./src/sketch/utilities/utilities.js":
/*!*******************************************!*\
  !*** ./src/sketch/utilities/utilities.js ***!
  \*******************************************/
/*! exports provided: saveGlobalSetting, savePluginSetting, loadPluginSetting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveGlobalSetting", function() { return saveGlobalSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePluginSetting", function() { return savePluginSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPluginSetting", function() { return loadPluginSetting; });
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch/settings */ "sketch/settings");
/* harmony import */ var sketch_settings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch_settings__WEBPACK_IMPORTED_MODULE_0__);

/* 
Saves a global setting in Sketch to the provided key
*/

var saveGlobalSetting = function saveGlobalSetting(key, value) {
  sketch_settings__WEBPACK_IMPORTED_MODULE_0___default.a.setGlobalSettingForKey(key, value);
};
/* 
Saves a plugin setting in Sketch to the provided key
*/


var savePluginSetting = function savePluginSetting(key, value) {
  sketch_settings__WEBPACK_IMPORTED_MODULE_0___default.a.setSettingForKey("com.mfouquet.sketch.nudgepushshove.".concat(key), value);
};
/* 
Loads a setting in Sketch with the provided key
*/


var loadPluginSetting = function loadPluginSetting(key) {
  return sketch_settings__WEBPACK_IMPORTED_MODULE_0___default.a.settingForKey("com.mfouquet.sketch.nudgepushshove.".concat(key));
};



/***/ }),

/***/ "sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/settings");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['adjustNudge1'] = __skpm_run.bind(this, 'adjustNudge1');
that['onRun'] = __skpm_run.bind(this, 'default');
that['adjustNudge2'] = __skpm_run.bind(this, 'adjustNudge2');
that['adjustNudge4'] = __skpm_run.bind(this, 'adjustNudge4');
that['adjustNudge8'] = __skpm_run.bind(this, 'adjustNudge8')

//# sourceMappingURL=adjustNudge.js.map