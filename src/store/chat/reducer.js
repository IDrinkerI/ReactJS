import { ADD_CHAT, REMOVE_CHAT, ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "./types";
import ChatModel from "../../model/ChatModel.js";


const initionState = {
    chatList: [],
    availableChatId: 1,
    chatNotificationList: []
};

export const chatReducer = (state = initionState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                availableChatId: (state.availableChatId ?? 0) + 1,
                chatList: [
                    ...state.chatList,
                    new ChatModel(action.payload, "" + state.availableChatId)
                ]
            }
        }
        case REMOVE_CHAT: {
            const index = state.chatList.findIndex(chat => chat.id === action.payload);
            if (index == -1) { return state; }

            const newChatList = state.chatList;
            newChatList.splice(index, 1);

            return {
                ...state,
                chatList: newChatList,
            }
        }
        case ADD_NOTIFICATION: {
            const list = state.chatNotificationList;
            if (list.includes(action.payload)) { return state; }

            list.push(action.payload);
            return {
                ...state,
                list,
            }
        }
        case REMOVE_NOTIFICATION: {
            const list = state.chatNotificationList;

            const index = list.findIndex(item => item == action.payload);
            if (index == -1) { return state; }

            list.splice(index, 1);

            return {
                ...state,
                chatNotificationList: list,
            }
        }
        default:
            return state;
    }
}