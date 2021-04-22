import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime";

import Application from "./components/Application.jsx";

import "./css/normalize.css";
import "./css/style.scss";

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/serviceWorker.js")
        .catch(err => console.log(`sw register failed: ${err}`));
}

ReactDOM.render(<Application />, document.getElementById("app"));