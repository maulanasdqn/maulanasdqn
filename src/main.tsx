import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// eslint-disable-next-line import/no-unresolved
import "uno.css";
import "@unocss/reset/normalize.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
