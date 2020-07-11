import BrowserWindow from "sketch-module-web-view";
import * as utils from "./utilities/utilities";
import {
  SETTINGS_GLOBAL_NUDGESMALL,
  SETTINGS_GLOBAL_NUDGEBIG,
  SETTINGS_PLUGIN_SHOVE,
  URL_WEBSITE,
  URL_USAGE,
  URL_CHANGELOG,
} from "./utilities/constants";

export default function() {
  const options = {
    identifier: "nudgepushshove",
    frame: false,
    height: 436,
    width: 320,
    resizable: false,
    alwaysOnTop: true,
    title: "nudgepushshove",
    backgroundColor: "#1d2d44",
  };

  const browserWindow = new BrowserWindow(options);
  const webContents = browserWindow.webContents;

  webContents.on("did-finish-load", () => {
    const npsObject = {
      nudgeAmount: utils.loadGlobalSetting(SETTINGS_GLOBAL_NUDGESMALL),
      pushAmount: utils.loadGlobalSetting(SETTINGS_GLOBAL_NUDGEBIG),
      shoveAmount: utils.loadPluginSetting(SETTINGS_PLUGIN_SHOVE),
    };
    webContents
      .executeJavaScript(`prepareFirstLoad('${JSON.stringify(npsObject)}')`)
      .catch(console.error);
  });

  webContents.on("dismissClicked", () => {
    browserWindow.close();
  });

  webContents.on("websiteButtonClicked", () => {
    utils.openURL(URL_WEBSITE);
  });

  webContents.on("helpButtonClicked", () => {
    utils.openURL(URL_USAGE);
  });

  webContents.on("versionButtonClicked", () => {
    utils.openURL(URL_CHANGELOG);
  });

  webContents.on("saveButtonClicked", (saveButtonClickedObject) => {
    const npsObject = JSON.parse(saveButtonClickedObject);

    utils.saveGlobalSetting(SETTINGS_GLOBAL_NUDGESMALL, +npsObject.nudgeAmount);
    utils.saveGlobalSetting(SETTINGS_GLOBAL_NUDGEBIG, +npsObject.pushAmount);
    utils.savePluginSetting(SETTINGS_PLUGIN_SHOVE, +npsObject.shoveAmount);

    utils.showToast("Nudge, Push, Shove settings saved successfully!");
  });

  browserWindow.loadURL(require("../web/ui.html"));
}
