@import 'utils/json.js';
@import 'utils/threading.js';

var adjustShove15 = function(context) {
  saveShoveAmount(context, '15');
}

var adjustShove48 = function(context) {
  saveShoveAmount(context, '48');
}

var adjustShove64 = function(context) {
  saveShoveAmount(context, '64');
}

var adjustShove128 = function(context) {
  saveShoveAmount(context, '128');
}

function saveShoveAmount(context, amount) {
  mainThreadDict[kShoveAmount] = amount;

  const scriptPath = context.scriptPath.stringByDeletingLastPathComponent();
  var settingsObj = jsonFromFile(scriptPath + '/utils/settings.js', true);

  settingsObj.shove = amount;

  saveJsonToFile(context, settingsObj);
}
