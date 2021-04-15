import React from "react";
import MainRouter from "./MainRouter.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";

const Application = () => (
    < Provider store={store} >
        <PersistGate persistor={persistor}>
            <MainRouter />
        </PersistGate>
    </Provider >
)

export default Application;