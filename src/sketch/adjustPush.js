import utils from "./utils/json.js";

const adjustPush10 = (context) => {
  savePushAmount(context, "10");
};

const adjustPush16 = (context) => {
  savePushAmount(context, "16");
};

const adjustPush24 = (context) => {
  savePushAmount(context, "24");
};

const adjustPush32 = (context) => {
  savePushAmount(context, "32");
};

savePushAmount = (context, amount) => {
  // var app = context.api().Application();
  // app.setSettingForKey("nudgeDistanceBig", amount);
  // const scriptPath = context.scriptPath.stringByDeletingLastPathComponent();
  // var settingsObj = jsonFromFile(scriptPath + "/utils/settings.js", true);
  // settingsObj.push = amount;
  // saveJsonToFile(context, settingsObj, "/utils/settings.js");
};

export { adjustPush10, adjustPush16, adjustPush24, adjustPush32 };
