import { ADD_MESSAGE } from "./types.js";

export const addMessageAction = (chatId, message) => ({ type: ADD_MESSAGE, payload: { chatId: chatId, message: message } });