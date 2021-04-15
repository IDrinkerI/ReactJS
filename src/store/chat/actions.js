import { ADD_CHAT, REMOVE_CHAT, ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "./types";

export const addChatAction = (chatName) => ({ type: ADD_CHAT, payload: chatName });
export const removeChatAction = (chatId) => ({ type: REMOVE_CHAT, payload: chatId });
export const addNotificationAction = (chatId) => ({ type: ADD_NOTIFICATION, payload: chatId });
export const removeNotificationAction = (chatId) => ({ type: REMOVE_NOTIFICATION, payload: chatId });