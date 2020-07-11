import utils from "./utils/json.js";

const adjustNudge1 = (context) => {
  saveNudgeAmount(context, "1");
};

const adjustNudge2 = (context) => {
  saveNudgeAmount(context, "2");
};

const adjustNudge4 = (context) => {
  saveNudgeAmount(context, "4");
};

const adjustNudge8 = (context) => {
  saveNudgeAmount(context, "8");
};

saveNudgeAmount = (context, amount) => {
  // var app = context.api().Application();
  // app.setSettingForKey("nudgeDistanceSmall", amount);
  // const scriptPath = context.scriptPath.stringByDeletingLastPathComponent();
  // var settingsObj = jsonFromFile(scriptPath + "/utils/settings.js", true);
  // settingsObj.nudge = amount;
  // saveJsonToFile(context, settingsObj, "/utils/settings.js");
};

export { adjustNudge1, adjustNudge2, adjustNudge4, adjustNudge8 };
