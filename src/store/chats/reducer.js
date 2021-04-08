import { ADD_CHAT } from "./types";
import ChatEntity from "../../ChatEntity.js";


const initialState = {
    chats: []
};

export const chatReducer = (state = initionState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chats: [
                    ...state.chats,
                    new ChatEntity(action.payload)
                ]
            }
        default:
            return state;
    }
}