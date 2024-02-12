import React from "react";
import ReactDOM, { render } from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import styles from "./style/styles.scss";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <div>
    <h1>Hello</h1>
    <App />
  </div>
  // <React.StrictMode>

  // {/* </React.StrictMode> */}
);