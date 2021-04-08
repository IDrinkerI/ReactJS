import { combineReducers, createStore } from "redux";

import { chatReducer } from "./chat/reducer.js";
import { messageReducer } from "./message/reducer.js";
import { profileReducer } from "./profile/reducer.js";

export const store = createStore(
    combineReducers({
        chat: chatReducer,
        message: messageReducer,
        profile: profileReducer,
    }), window.__REDUX_DEVTOOLS_EXTENSION__()
);