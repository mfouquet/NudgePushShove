import * as utils from "./utilities/utilities";
import { SETTINGS_PLUGIN_SHOVE } from "./utilities/constants";

const adjustShove15 = () => {
  saveShoveAmount(15);
};

const adjustShove48 = () => {
  saveShoveAmount(48);
};

const adjustShove64 = () => {
  saveShoveAmount(64);
};

const adjustShove128 = () => {
  saveShoveAmount(128);
};

const saveShoveAmount = (amount) => {
  utils.savePluginSetting(SETTINGS_PLUGIN_SHOVE, amount);
};

export { adjustShove15, adjustShove48, adjustShove64, adjustShove128 };
