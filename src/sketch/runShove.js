import utils from "./utils/json.js";

const shoveUp = (context) => {
  shoveObjects(context, "up");
};

const shoveRight = (context) => {
  shoveObjects(context, "right");
};

const shoveDown = (context) => {
  shoveObjects(context, "down");
};

const shoveLeft = (context) => {
  shoveObjects(context, "left");
};

function shoveObjects(context, direction) {
  // var sketch = context.api();
  // var document = sketch.selectedDocument;
  // var selection = document.selectedLayers;
  // var shoveAmount = getShoveAmount(context);
  // var sketchLayer;
  // selection.iterate(function(layer) {
  //   sketchLayer = layer.sketchObject;
  //   if (sketchLayer.class() == "MSTextLayer" && sketchLayer.isEditingText()) {
  //     return;
  //   }
  //   if (direction === 'up') {
  //     sketchLayer.frame().setY(parseFloat(sketchLayer.frame().y()) - parseFloat(shoveAmount));
  //   } else if (direction === 'right') {
  //     sketchLayer.frame().setX(parseFloat(sketchLayer.frame().x()) + parseFloat(shoveAmount));
  //   } else if (direction === 'down') {
  //     sketchLayer.frame().setY(parseFloat(sketchLayer.frame().y()) + parseFloat(shoveAmount));
  //   } else if (direction === 'left') {
  //     sketchLayer.frame().setX(parseFloat(sketchLayer.frame().x()) - parseFloat(shoveAmount));
  //   }
  // });
  // document.sketchObject.reloadInspector();
}

function getShoveAmount(context) {
  // var shoveAmount;
  // if (!mainThreadDict[kShoveAmount]) {
  //   const scriptPath = context.scriptPath.stringByDeletingLastPathComponent();
  //   const settingsFile = jsonFromFile(scriptPath + '/utils/settings.js', true);
  //   shoveAmount = settingsFile.shove;
  //   mainThreadDict[kShoveAmount] = shoveAmount;
  // } else {
  //   shoveAmount = mainThreadDict[kShoveAmount];
  // }
  // return shoveAmount;
}
