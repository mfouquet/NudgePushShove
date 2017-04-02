@import 'utils/nibui.js';
@import 'utils/json.js';
@import 'utils/threading.js';

var COSCRIPT;
var app;

var onRun = function(context) {
  // ====
  // Prepare app and COSCRIPT
  if (!app) app = context.api().Application();
  COSCRIPT = COScript.currentCOScript();
  COSCRIPT.setShouldKeepAround(true);

  var sharedApp = NSApplication.sharedApplication();

  // Determine if the plugin window is already open
  var openWindow = false;

  for (var i = 0; i < sharedApp.windows().count(); i++) {
    var window = sharedApp.windows().objectAtIndex(i);

    if (window.identifier() == 'nudgepushshove') {
      openWindow = true;
      window.makeKeyAndOrderFront(null);
    }
  }

  if (openWindow) {
    return;
  }


  // ====
  // Prepare the NIB so we can do stuff with the UI
  const nibui = new NibUI(context, 'UIBundle', 'NudgePushShoveNibUITemplate', [
    'mainWindow',
    'textCustomNudge', 'textCustomPush', 'textCustomShove',
    'btnWebsite', 'btnHelp', 'btnVersion',
    'btnSave', 'btnReset'
  ]);


  // ====
  // Set up the window styling
  nibui.mainWindow.setTitlebarAppearsTransparent(true);
  nibui.mainWindow.standardWindowButton(NSWindowCloseButton).setHidden(false);
  nibui.mainWindow.standardWindowButton(NSWindowMiniaturizeButton).setHidden(true);
  nibui.mainWindow.standardWindowButton(NSWindowZoomButton).setHidden(true);


  // ====
  // Load up the settings file
  const scriptPath = context.scriptPath.stringByDeletingLastPathComponent();
  const settingsFile = jsonFromFile(scriptPath + '/utils/settings.js', true);


  // ====
  // Prepare the rest of the UI
  nibui.textCustomNudge.setCornerRadius(4);
  nibui.textCustomPush.setCornerRadius(4);
  nibui.textCustomShove.setCornerRadius(4);
  nibui.btnSave.setCornerRadius(4);

  nibui.textCustomNudge.setStringValue(settingsFile.nudge);
  nibui.textCustomPush.setStringValue(settingsFile.push);
  nibui.textCustomShove.setStringValue(settingsFile.shove);


  // ====
  // Attach an action to the Website Button
  nibui.attachTargetAndAction(nibui.btnWebsite, function() {
    NSWorkspace.sharedWorkspace()
      .openURL(NSURL.URLWithString("http://www.nudgepushshove.com/"));
  });


  // ====
  // Attach an action to the Help Button
  nibui.attachTargetAndAction(nibui.btnHelp, function() {
    NSWorkspace.sharedWorkspace()
      .openURL(NSURL.URLWithString("http://www.nudgepushshove.com/#usage"));
  });


  // ====
  // Attach an action to the Version Button
  nibui.attachTargetAndAction(nibui.btnVersion, function() {
    NSWorkspace.sharedWorkspace()
      .openURL(NSURL.URLWithString("https://github.com/mfouquet/NudgePushShove/blob/master/CHANGELOG.md"));
  });


  // ====
  // Attach an action to the Save Button
  nibui.attachTargetAndAction(nibui.btnSave, function() {
    updateNudgeDistance(context, nibui);
  });


  // ====
  // Attach an action to the Reset Button
  nibui.attachTargetAndAction(nibui.btnReset, function() {
    updateNudgeDistance(context, nibui, true);

    nibui.textCustomNudge.setStringValue("1");
    nibui.textCustomPush.setStringValue("10");
    nibui.textCustomShove.setStringValue("15");
  });


  // ====
  // Finish up UI work
  nibui.mainWindow.makeKeyAndOrderFront(null);
  nibui.mainWindow.setLevel(NSFloatingWindowLevel);
  nibui.destroy();
}


function updateNudgeDistance(context, nibui, reset) {
  const settingsObj = {
    nudge: reset ? "1" : nibui.textCustomNudge.stringValue(),
    push: reset ? "10" : nibui.textCustomPush.stringValue(),
    shove: reset ? "15" : nibui.textCustomShove.stringValue()
  };

  mainThreadDict[kShoveAmount] = settingsObj.shove;

  updateSketchNudgeSettings(context, settingsObj);
  saveJsonToFile(context, settingsObj);
}


function updateSketchNudgeSettings(context, settings) {
  // We have to save the reference to the app because it doesn't seem
  // to save between opening and closing of the plugin.
  // Additionally, this new method on the Application makes it easier
  // to save the user's settings.  No more NSTask for each setting.
  // Crack open the following file to see all you can update:
  // ~/Library/Preferences/com.bohemiancoding.sketch3.plist
  app.setSettingForKey("nudgeDistanceSmall", settings.nudge)
  app.setSettingForKey("nudgeDistanceBig", settings.push)
}
