import { ADD_MESSAGE } from "./types.js";
import { addNotificationAction, removeNotificationAction } from "../chat/actions.js";
import Bot from "../../Bot.js";

const addMessage = (chatId, message) => ({ type: ADD_MESSAGE, payload: { chatId: chatId, message: message } });

export const addMessageAction = (chatId, message) => (dispatch) => {
    if (message.isUser) {
        setTimeout(() => {
            dispatch(addMessageAction(chatId, Bot.getOpinion(message.text)));
        }, 2000);
    }
    else {
        dispatch(addNotificationAction(chatId));
        setTimeout(() => {
            dispatch(removeNotificationAction(chatId))
        }, 3000);
    }

    dispatch(addMessage(chatId, message));
}