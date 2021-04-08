import { ADD_CHAT, REMOVE_CHAT, SELECT_CHAT } from "./types";
import ChatEntity from "../../ChatEntity.js";


const initionState = {
    chatList: [],
    availableChatId: 0,
    selectedChatId: 0,
};

export const chatReducer = (state = initionState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                availableChatId: (state.availableChatId ?? 0) + 1,
                chatList: [
                    ...state.chatList,
                    new ChatEntity(action.payload, "" + state.availableChatId)
                ]
            }
        case REMOVE_CHAT:
            const index = state.chatList.findIndex(chat => chat.id === action.payload);
            if (index == -1) { return state; }
            state.chatList.splice(index, 1);

            return {
                ...state
            }
        case SELECT_CHAT:
            return {
                ...state,
                selectedChatId: action.payload,
            }
        default:
            return state;
    }
}