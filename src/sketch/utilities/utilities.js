import Settings from "sketch/settings";

/* 
Saves a global setting in Sketch to the provided key
*/
const saveGlobalSetting = (key, value) => {
  Settings.setGlobalSettingForKey(key, value);
};

/* 
Saves a plugin setting in Sketch to the provided key
*/
const savePluginSetting = (key, value) => {
  Settings.setSettingForKey(`com.mfouquet.sketch.nudgepushshove.${key}`, value);
};

/* 
Loads a setting in Sketch with the provided key
*/
const loadPluginSetting = (key) => {
  return Settings.settingForKey(`com.mfouquet.sketch.nudgepushshove.${key}`);
};

export { saveGlobalSetting, savePluginSetting, loadPluginSetting };
