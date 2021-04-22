import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { chatReducer } from "./chat/reducer.js";
import { messageReducer } from "./message/reducer.js";
import { profileReducer } from "./profile/reducer.js";
import { weatherReducer } from "./weather/reducer.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: "react-messanger",
    storage,
    whitelist: ["chat", "message", "profile"],
}

const persistedReduser = persistReducer(
    persistConfig,
    combineReducers({
        chat: chatReducer,
        message: messageReducer,
        profile: profileReducer,
        weather: weatherReducer,
    })
)

export const store = createStore(
    persistedReduser,
    composeEnhancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store);