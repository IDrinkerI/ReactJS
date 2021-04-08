import { ADD_CHAT, REMOVE_CHAT, SELECT_CHAT } from "./types";

export const addChatAction = (chatName) => ({ type: ADD_CHAT, payload: chatName });
export const removeChatAction = (chatId) => ({ type: REMOVE_CHAT, payload: chatId });
export const selecChatAction = (chatId) => ({ type: SELECT_CHAT, payload: chatId });