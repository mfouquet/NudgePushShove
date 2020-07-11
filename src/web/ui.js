import { Plugin } from "./ui.tsx";
import React from "react";
import ReactDOM from "react-dom";

// Disable the context menu to have a more native feel
if (process.env.NODE_ENV === "production") {
  document.addEventListener("contextmenu", (e) => e.preventDefault());
}

window.prepareFirstLoad = function(uiType, uiObject, imageBuffer) {
  ReactDOM.render(<Plugin />, document.getElementById("react-page"));
};
