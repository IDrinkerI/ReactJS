import { combineReducers, createStore } from "redux";

import { chatReducer } from "./chats/reducer.js";

export const store = createStore(
    combineReducers({
        chat: chatReducer,
    })
);