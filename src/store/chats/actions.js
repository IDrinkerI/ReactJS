import { ADD_CHAT, REMOVE_CHAT } from "./types";

export const addChat = (chatName) => ({ type: ADD_CHAT, payload: chatName });

export const removeChat = (chatId) => ({ type: REMOVE_CHAT, payload: chatId });