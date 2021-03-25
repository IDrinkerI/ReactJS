import React from "react";
import ReactDOM from "react-dom";

import Salute from "./components/Salute.jsx";
import MessageField from "./components/MessageField.jsx";

import "./css/normalize.css";
import "./css/style.css";

let messages = ["Привет", "Дашь в займы?"];

ReactDOM.render(<Salute />, document.getElementById("title"));
ReactDOM.render(<MessageField messages={messages} />, document.getElementById("app"));