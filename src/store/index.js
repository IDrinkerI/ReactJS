import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { chatReducer } from "./chat/reducer.js";
import { messageReducer } from "./message/reducer.js";
import { profileReducer } from "./profile/reducer.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        chat: chatReducer,
        message: messageReducer,
        profile: profileReducer,
    }), composeEnhancers(applyMiddleware(thunk))
);