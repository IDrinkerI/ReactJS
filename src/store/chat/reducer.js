import { ADD_CHAT, REMOVE_CHAT } from "./types";
import ChatModel from "../../model/ChatModel.js";


const initionState = {
    chatList: [],
    availableChatId: 1,
};

export const chatReducer = (state = initionState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                availableChatId: (state.availableChatId ?? 0) + 1,
                chatList: [
                    ...state.chatList,
                    new ChatModel(action.payload, "" + state.availableChatId)
                ]
            }
        case REMOVE_CHAT:
            const index = state.chatList.findIndex(chat => chat.id === action.payload);
            if (index == -1) { return state; }
            state.chatList.splice(index, 1);

            return {
                ...state
            }
        default:
            return state;
    }
}