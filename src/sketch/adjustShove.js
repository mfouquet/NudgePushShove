import utils from "./utils/json.js";

const adjustShove15 = (context) => {
  saveShoveAmount(context, "15");
};

const adjustShove48 = (context) => {
  saveShoveAmount(context, "48");
};

const adjustShove64 = (context) => {
  saveShoveAmount(context, "64");
};

const adjustShove128 = (context) => {
  saveShoveAmount(context, "128");
};

saveShoveAmount = (context, amount) => {
  // mainThreadDict[kShoveAmount] = amount;
  // const scriptPath = context.scriptPath.stringByDeletingLastPathComponent();
  // var settingsObj = jsonFromFile(scriptPath + '/utils/settings.js', true);
  // settingsObj.shove = amount;
  // saveJsonToFile(context, settingsObj, '/utils/settings.js');
};

export { adjustShove15, adjustShove48, adjustShove64, adjustShove128 };
