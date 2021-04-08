import { combineReducers, createStore } from "redux";

import { chatReducer } from "./chat/reducer.js";

export const store = createStore(
    combineReducers({
        chat: chatReducer,
    })
);