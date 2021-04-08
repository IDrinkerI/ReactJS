import { combineReducers, createStore } from "redux";

import { chatReducer } from "./chat/reducer.js";
import { messageReducer } from "./message/reducer.js";

export const store = createStore(
    combineReducers({
        chat: chatReducer,
        message: messageReducer,
    })
);