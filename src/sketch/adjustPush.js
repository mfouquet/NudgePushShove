import * as utils from "./utilities/utilities";
import { SETTINGS_GLOBAL_NUDGEBIG } from "./utilities/constants";

const adjustPush10 = () => {
  savePushAmount(10);
};

const adjustPush16 = () => {
  savePushAmount(16);
};

const adjustPush24 = () => {
  savePushAmount(24);
};

const adjustPush32 = () => {
  savePushAmount(32);
};

const savePushAmount = (amount) => {
  utils.saveGlobalSetting(SETTINGS_GLOBAL_NUDGEBIG, amount);
};

export { adjustPush10, adjustPush16, adjustPush24, adjustPush32 };
