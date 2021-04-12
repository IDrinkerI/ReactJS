import { ADD_MESSAGE } from "./types.js";
import Bot from "../../Bot.js";

const addMessage = (chatId, message) => ({ type: ADD_MESSAGE, payload: { chatId: chatId, message: message } });

export const addMessageAction = (chatId, message) => (dispatch) => {
    dispatch(addMessage(chatId, message));

    if (message.isUser)
        dispatch(addMessage(chatId, Bot.getOpinion(message.text)));
}