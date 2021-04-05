import React from "react";
import ReactDOM from "react-dom";

import Messenger from "./components/Messenger.jsx";
import MainRouter from "./components/MainRouter.jsx";

import "./css/normalize.css";
import "./css/style.scss";

ReactDOM.render(<MainRouter />, document.getElementById("app"));