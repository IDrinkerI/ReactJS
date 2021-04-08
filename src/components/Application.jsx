import React from "react";
import MainRouter from "./MainRouter.jsx";
import { Provider } from "react-redux";
import { store } from "../store";

const Application = () => (
    < Provider store={store} >
        <MainRouter />
    </Provider >
)

export default Application;