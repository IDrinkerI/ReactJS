import { ADD_CHAT, REMOVE_CHAT } from "./types";
import ChatEntity from "../../ChatEntity.js";


const initionState = {
    chats: [],
    availableChatId: 0,
};

export const chatReducer = (state = initionState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                availableChatId: (state.availableChatId ?? 0) + 1,
                chats: [
                    ...state.chats,
                    new ChatEntity(action.payload, "" + state.availableChatId)
                ]
            }
        case REMOVE_CHAT:
            const index = state.chats.find(chat => chat.id === action.payload);
            state.chats.splice(index, 1);

            return {
                ...state
            }
        default:
            return state;
    }
}