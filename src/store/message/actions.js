import { ADD_MESSAGE, REMOVE_MESSAGE, SELECT_MESSAGE } from "./types.js";
import { addNotificationAction, removeNotificationAction } from "../chat/actions.js";
import Bot from "../../Bot.js";

const addMessage = (chatId, userName, messageText) => ({
    type: ADD_MESSAGE,
    payload: { chatId, userName, messageText }
});

export const removeMessageAction = (chatId, messageId) => ({ type: REMOVE_MESSAGE, payload: { chatId, messageId } });
export const selectMessageAction = (messageId) => ({ type: SELECT_MESSAGE, payload: messageId });

export const addMessageAction = (chatId, userName, messageText) => (dispatch, getState) => {
    const user = getState().profile.name;
    if (user == userName) {
        setTimeout(() => {
            dispatch(addMessageAction(chatId, Bot.name, Bot.getOpinion(messageText)));
        }, 2000);
    }
    else {
        dispatch(addNotificationAction(chatId));
        setTimeout(() => {
            dispatch(removeNotificationAction(chatId))
        }, 3000);
    }

    dispatch(addMessage(chatId, userName, messageText));
}