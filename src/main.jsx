import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initFirebase } from "./firebase/config";
import "./index.css";
import UseCartContext from "./context/UseCartContext";
import { BrowserRouter } from "react-router-dom";

initFirebase();
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UseCartContext>
      <App />
    </UseCartContext>
  </BrowserRouter>
);
