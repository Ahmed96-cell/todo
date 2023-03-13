import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import App from "./component/App";
import "./component/index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
