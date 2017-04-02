@import 'utils/json.js';

var adjustNudge1 = function(context) {
  saveNudgeAmount(context, '1');
}

var adjustNudge2 = function(context) {
  saveNudgeAmount(context, '2');
}

var adjustNudge4 = function(context) {
  saveNudgeAmount(context, '4');
}

var adjustNudge8 = function(context) {
  saveNudgeAmount(context, '8');
}

function saveNudgeAmount(context, amount) {
  var app = context.api().Application();
  app.setSettingForKey("nudgeDistanceSmall", amount);

  const scriptPath = context.scriptPath.stringByDeletingLastPathComponent();
  var settingsObj = jsonFromFile(scriptPath + '/utils/settings.js', true);

  settingsObj.nudge = amount;

  saveJsonToFile(context, settingsObj);
}
