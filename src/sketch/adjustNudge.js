import * as utils from "./utilities/utilities";
import { SETTINGS_GLOBAL_NUDGESMALL } from "./utilities/constants";

const adjustNudge1 = () => {
  saveNudgeAmount(1);
};

const adjustNudge2 = () => {
  saveNudgeAmount(2);
};

const adjustNudge4 = () => {
  saveNudgeAmount(4);
};

const adjustNudge8 = () => {
  saveNudgeAmount(8);
};

const saveNudgeAmount = (amount) => {
  utils.saveGlobalSetting(SETTINGS_GLOBAL_NUDGESMALL, amount);
};

export { adjustNudge1, adjustNudge2, adjustNudge4, adjustNudge8 };
