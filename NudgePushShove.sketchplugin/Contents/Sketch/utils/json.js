function jsonFromUrl(url) {
  var request = [NSURLRequest requestWithURL: [NSURL URLWithString:url]],
  response = [NSURLConnection sendSynchronousRequest: request returningResponse: nil error: nil],
  responseObj = [NSJSONSerialization JSONObjectWithData: response options: nil error: nil];
  return responseObj;
}

var saveJsonToFile = function(context, nudgeType, amount) {
  var scriptPath = context.scriptPath;
  var scriptFolder = [scriptPath stringByDeletingLastPathComponent];
  var settingsFile = jsonFromFile(scriptFolder + '/utils/settings.js', true);
  if (nudgeType === 'nudge') {
    settingsFile.nudge = amount;
  } else if (nudgeType === 'push') {
    settingsFile.push = amount;
  } else if (nudgeType === 'shove') {
    settingsFile.shove = amount;
  }
  writeTextToFile(stringify(settingsFile), scriptFolder + '/utils/settings.js');
}

var stringify = function(obj, prettyPrinted) {
  var prettySetting = prettyPrinted ? NSJSONWritingPrettyPrinted : 0,
  jsonData = [NSJSONSerialization dataWithJSONObject:obj options:prettySetting error:nil];
  return [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
}

var writeTextToFile = function(text, filePath) {
  var t = [NSString stringWithFormat:@"%@", text],
  f = [NSString stringWithFormat:@"%@", filePath];
  return [t writeToFile:f atomically:true encoding:NSUTF8StringEncoding error:nil];
}

var jsonFromFile = function(filePath, mutable) {
  var data = [NSData dataWithContentsOfFile:filePath];
  if (!data) {
    return null;
  }

  var options = mutable == true ? NSJSONReadingMutableContainers : 0
  return [NSJSONSerialization JSONObjectWithData:data options:options error:nil];
}
