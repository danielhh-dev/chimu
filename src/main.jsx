import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initFirebase } from "./firebase/config";
import "./index.css";

initFirebase();
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
