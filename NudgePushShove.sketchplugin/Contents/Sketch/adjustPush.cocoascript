@import 'utils/json.js';

var adjustPush10 = function(context) {
  savePushAmount(context, '10');
}

var adjustPush16 = function(context) {
  savePushAmount(context, '16');
}

var adjustPush24 = function(context) {
  savePushAmount(context, '24');
}

var adjustPush32 = function(context) {
  savePushAmount(context, '32');
}

function savePushAmount(context, amount) {
  var app = context.api().Application();
  app.setSettingForKey("nudgeDistanceBig", amount);

  const scriptPath = context.scriptPath.stringByDeletingLastPathComponent();
  var settingsObj = jsonFromFile(scriptPath + '/utils/settings.js', true);

  settingsObj.push = amount;

  saveJsonToFile(context, settingsObj);
}
