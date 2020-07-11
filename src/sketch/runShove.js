import sketch from "sketch";
import * as utils from "./utilities/utilities";
import { SETTINGS_PLUGIN_SHOVE } from "./utilities/constants";

const shoveUp = () => {
  shoveObjects("up");
};

const shoveRight = () => {
  shoveObjects("right");
};

const shoveDown = () => {
  shoveObjects("down");
};

const shoveLeft = () => {
  shoveObjects("left");
};

const shoveObjects = (direction) => {
  const shoveAmount = utils.loadPluginSetting(SETTINGS_PLUGIN_SHOVE) || 15;

  const doc = sketch.getSelectedDocument();
  const selection = doc.selectedLayers;

  selection.forEach((layer) => {
    sketchLayer = layer.sketchObject;

    if (sketchLayer.class() == "MSTextLayer" && sketchLayer.isEditingText()) {
      return;
    }

    switch (direction) {
      case "up": {
        layer.frame.y = layer.frame.y - shoveAmount;
        break;
      }
      case "right": {
        layer.frame.x = layer.frame.x + shoveAmount;
        break;
      }
      case "down": {
        layer.frame.y = layer.frame.y + shoveAmount;
        break;
      }
      case "left": {
        layer.frame.x = layer.frame.x - shoveAmount;
        break;
      }
    }
  });
};

export { shoveUp, shoveRight, shoveDown, shoveLeft };
