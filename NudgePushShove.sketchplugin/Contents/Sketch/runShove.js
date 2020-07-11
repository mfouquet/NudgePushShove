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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sketch/runShove.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/sketch/runShove.js":
/*!********************************!*\
  !*** ./src/sketch/runShove.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_json_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/json.js */ "./src/sketch/utils/json.js");
/* harmony import */ var _utils_json_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_json_js__WEBPACK_IMPORTED_MODULE_0__);


var shoveUp = function shoveUp(context) {
  shoveObjects(context, "up");
};

var shoveRight = function shoveRight(context) {
  shoveObjects(context, "right");
};

var shoveDown = function shoveDown(context) {
  shoveObjects(context, "down");
};

var shoveLeft = function shoveLeft(context) {
  shoveObjects(context, "left");
};

function shoveObjects(context, direction) {// var sketch = context.api();
  // var document = sketch.selectedDocument;
  // var selection = document.selectedLayers;
  // var shoveAmount = getShoveAmount(context);
  // var sketchLayer;
  // selection.iterate(function(layer) {
  //   sketchLayer = layer.sketchObject;
  //   if (sketchLayer.class() == "MSTextLayer" && sketchLayer.isEditingText()) {
  //     return;
  //   }
  //   if (direction === 'up') {
  //     sketchLayer.frame().setY(parseFloat(sketchLayer.frame().y()) - parseFloat(shoveAmount));
  //   } else if (direction === 'right') {
  //     sketchLayer.frame().setX(parseFloat(sketchLayer.frame().x()) + parseFloat(shoveAmount));
  //   } else if (direction === 'down') {
  //     sketchLayer.frame().setY(parseFloat(sketchLayer.frame().y()) + parseFloat(shoveAmount));
  //   } else if (direction === 'left') {
  //     sketchLayer.frame().setX(parseFloat(sketchLayer.frame().x()) - parseFloat(shoveAmount));
  //   }
  // });
  // document.sketchObject.reloadInspector();
}

function getShoveAmount(context) {// var shoveAmount;
  // if (!mainThreadDict[kShoveAmount]) {
  //   const scriptPath = context.scriptPath.stringByDeletingLastPathComponent();
  //   const settingsFile = jsonFromFile(scriptPath + '/utils/settings.js', true);
  //   shoveAmount = settingsFile.shove;
  //   mainThreadDict[kShoveAmount] = shoveAmount;
  // } else {
  //   shoveAmount = mainThreadDict[kShoveAmount];
  // }
  // return shoveAmount;
}

/***/ }),

/***/ "./src/sketch/utils/json.js":
/*!**********************************!*\
  !*** ./src/sketch/utils/json.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var saveJsonToFile = function saveJsonToFile(context, jsonObject, filePath) {// var scriptPath = context.scriptPath;
  // var scriptFolder = [scriptPath stringByDeletingLastPathComponent];
  // writeTextToFile(stringify(jsonObject), scriptFolder + filePath);
};

var stringify = function stringify(obj, prettyPrinted) {// var prettySetting = prettyPrinted ? NSJSONWritingPrettyPrinted : 0,
  // jsonData = [NSJSONSerialization dataWithJSONObject:obj options:prettySetting error:nil];
  // return [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
};

var writeTextToFile = function writeTextToFile(text, filePath) {// var t = [NSString stringWithFormat:@"%@", text],
  // f = [NSString stringWithFormat:@"%@", filePath];
  // return [t writeToFile:f atomically:true encoding:NSUTF8StringEncoding error:nil];
};

var jsonFromFile = function jsonFromFile(filePath, mutable) {// var data = [NSData dataWithContentsOfFile:filePath];
  // if (!data) {
  //   return null;
  // }
  // var options = mutable == true ? NSJSONReadingMutableContainers : 0
  // return [NSJSONSerialization JSONObjectWithData:data options:options error:nil];
};

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['shoveUp'] = __skpm_run.bind(this, 'shoveUp');
that['onRun'] = __skpm_run.bind(this, 'default');
that['shoveRight'] = __skpm_run.bind(this, 'shoveRight');
that['shoveDown'] = __skpm_run.bind(this, 'shoveDown');
that['shoveLeft'] = __skpm_run.bind(this, 'shoveLeft')

//# sourceMappingURL=runShove.js.map