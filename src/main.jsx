import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// React has successfully loaded at this point.
// Remove only the tiny HTML boot layer; App's cinematic loader remains underneath.
window.requestAnimationFrame(() => {
  const bootLoader = document.getElementById("boot-loader");

  if (bootLoader) {
    bootLoader.style.transition = "opacity 180ms ease";
    bootLoader.style.opacity = "0";

    window.setTimeout(() => {
      bootLoader.remove();
    }, 200);
  }
});
