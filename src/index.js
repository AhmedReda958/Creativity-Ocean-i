import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap";
import App from "./App";
import AOS from "aos";

const root = ReactDOM.createRoot(document.getElementById("root"));
AOS.init();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
