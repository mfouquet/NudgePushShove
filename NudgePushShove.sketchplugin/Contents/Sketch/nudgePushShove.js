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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sketch/nudgePushShove.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/sketch/nudgePushShove.js":
/*!**************************************!*\
  !*** ./src/sketch/nudgePushShove.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// @import 'utils/nibui.js';
// @import 'utils/json.js';
// @import 'utils/threading.js';
// var COSCRIPT;
// var app;
var onRun = function onRun(context) {// // ====
  // // Prepare app and COSCRIPT
  // if (!app) app = context.api().Application();
  // COSCRIPT = COScript.currentCOScript();
  // COSCRIPT.setShouldKeepAround(true);
  // var sharedApp = NSApplication.sharedApplication();
  // // Determine if the plugin window is already open
  // var openWindow = false;
  // for (var i = 0; i < sharedApp.windows().count(); i++) {
  //   var window = sharedApp.windows().objectAtIndex(i);
  //   if (window.identifier() == 'nudgepushshove') {
  //     openWindow = true;
  //     window.makeKeyAndOrderFront(null);
  //   }
  // }
  // if (openWindow) {
  //   return;
  // }
  // // ====
  // // Prepare the NIB so we can do stuff with the UI
  // const nibui = new NibUI(context, 'UIBundle', 'NudgePushShoveNibUITemplate', [
  //   'mainWindow',
  //   'textCustomNudge', 'textCustomPush', 'textCustomShove',
  //   'btnWebsite', 'btnHelp', 'btnVersion',
  //   'checkHotkey', 'btnSave', 'btnReset'
  // ]);
  // // ====
  // // Set up the window styling
  // nibui.mainWindow.setTitlebarAppearsTransparent(true);
  // nibui.mainWindow.standardWindowButton(NSWindowCloseButton).setHidden(false);
  // nibui.mainWindow.standardWindowButton(NSWindowMiniaturizeButton).setHidden(true);
  // nibui.mainWindow.standardWindowButton(NSWindowZoomButton).setHidden(true);
  // // ====
  // // Load up the settings file
  // const scriptPath = context.scriptPath.stringByDeletingLastPathComponent();
  // const settingsFile = jsonFromFile(scriptPath + '/utils/settings.js', true);
  // // ====
  // // Prepare the rest of the UI
  // nibui.textCustomNudge.setCornerRadius(4);
  // nibui.textCustomPush.setCornerRadius(4);
  // nibui.textCustomShove.setCornerRadius(4);
  // nibui.btnSave.setCornerRadius(4);
  // nibui.textCustomNudge.setStringValue(settingsFile.nudge);
  // nibui.textCustomPush.setStringValue(settingsFile.push);
  // nibui.textCustomShove.setStringValue(settingsFile.shove);
  // nibui.checkHotkey.setState(settingsFile.hotkeyCheck == 'command' ? NSOnState : NSOffState);
  // // ====
  // // Attach an action to the Website Button
  // nibui.attachTargetAndAction(nibui.btnWebsite, function() {
  //   NSWorkspace.sharedWorkspace()
  //     .openURL(NSURL.URLWithString("http://www.nudgepushshove.com/"));
  // });
  // // ====
  // // Attach an action to the Help Button
  // nibui.attachTargetAndAction(nibui.btnHelp, function() {
  //   NSWorkspace.sharedWorkspace()
  //     .openURL(NSURL.URLWithString("http://www.nudgepushshove.com/#usage"));
  // });
  // // ====
  // // Attach an action to the Version Button
  // nibui.attachTargetAndAction(nibui.btnVersion, function() {
  //   NSWorkspace.sharedWorkspace()
  //     .openURL(NSURL.URLWithString("https://github.com/mfouquet/NudgePushShove/blob/master/CHANGELOG.md"));
  // });
  // // ====
  // // Attach an action to the Save Button
  // nibui.attachTargetAndAction(nibui.btnSave, function() {
  //   updateNudgeDistance(context, nibui);
  // });
  // // ====
  // // Attach an action to the Reset Button
  // nibui.attachTargetAndAction(nibui.btnReset, function() {
  //   updateNudgeDistance(context, nibui, true);
  //   nibui.textCustomNudge.setStringValue("1");
  //   nibui.textCustomPush.setStringValue("10");
  //   nibui.textCustomShove.setStringValue("15");
  // });
  // // ====
  // // Finish up UI work
  // nibui.mainWindow.makeKeyAndOrderFront(null);
  // nibui.mainWindow.setLevel(NSFloatingWindowLevel);
  // nibui.destroy();
}; // function updateNudgeDistance(context, nibui, reset) {
//   const scriptPath = context.scriptPath.stringByDeletingLastPathComponent();
//   const manifestObj = jsonFromFile(scriptPath + '/manifest.json', true);
//   const hotkeyModifier = nibui.checkHotkey.state() == true ? 'command' : 'option';
//   for (i = 0; i < manifestObj.commands.length; i++) {
//     if (manifestObj.commands[i].name == 'Up') {
//       manifestObj.commands[i].shortcut = hotkeyModifier + ' shift ↑';
//     } else if (manifestObj.commands[i].name == 'Down') {
//       manifestObj.commands[i].shortcut = hotkeyModifier + ' shift ↓';
//     } else if (manifestObj.commands[i].name == 'Left') {
//       manifestObj.commands[i].shortcut = hotkeyModifier + ' shift ←';
//     } else if (manifestObj.commands[i].name == 'Right') {
//       manifestObj.commands[i].shortcut = hotkeyModifier + ' shift →';
//     }
//   }
//   saveJsonToFile(context, manifestObj, '/manifest.json');
//   const settingsObj = {
//     nudge: reset ? "1" : nibui.textCustomNudge.stringValue(),
//     push: reset ? "10" : nibui.textCustomPush.stringValue(),
//     shove: reset ? "15" : nibui.textCustomShove.stringValue(),
//     hotkeyCheck: nibui.checkHotkey.state() == true ? 'command' : 'option'
//   };
//   mainThreadDict[kShoveAmount] = settingsObj.shove;
//   updateSketchNudgeSettings(context, settingsObj);
//   saveJsonToFile(context, settingsObj, '/utils/settings.js');
// }
// function updateSketchNudgeSettings(context, settings) {
//   // We have to save the reference to the app because it doesn't seem
//   // to save between opening and closing of the plugin.
//   // Additionally, this new method on the Application makes it easier
//   // to save the user's settings.  No more NSTask for each setting.
//   // Crack open the following file to see all you can update:
//   // ~/Library/Preferences/com.bohemiancoding.sketch3.plist
//   app.setSettingForKey("nudgeDistanceSmall", settings.nudge)
//   app.setSettingForKey("nudgeDistanceBig", settings.push)
// }

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=nudgePushShove.js.map