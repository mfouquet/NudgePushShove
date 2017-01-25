var checkForPluginUpdate = function(context) {
  var scriptPath = context.scriptPath;
  var scriptFolder = [scriptPath stringByDeletingLastPathComponent];
  var manifestFilePath = scriptFolder + "/manifest.json";

  var manifestJSON = jsonFromFile(manifestFilePath);
  var isThereNewUpdate = false;

  try {
    var response = jsonFromUrl('https://raw.githubusercontent.com/mfouquet/NudgePushShove/master/manifest.json')
    if (response && response.version) {
      if (response.version.toString() != manifestJSON.version.toString()) {
        isThereNewUpdate = true
      }
    }
  } catch (e) {
    log(e)
    return false
  }
  return isThereNewUpdate
}
