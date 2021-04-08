import { ADD_CHAT } from "./types";
import ChatEntity from "../../ChatEntity.js";


const initialState = {
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
                    new ChatEntity(action.payload, state.availableChatId)
                ]
            }
        default:
            return state;
    }
}