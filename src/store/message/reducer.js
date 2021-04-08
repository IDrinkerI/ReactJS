import { ADD_MESSAGE } from "./types";

const initialStore = {
    messageList: [{
        chatId: "",
        messages: [],
    }]
};

export const messageReducer = (store = initialStore, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const item = store.messageList.find(item => item.chatId === action.payload.chatId);

            if (item) {
                item.messages.push(action.payload.message);
            }
            else {
                const newItem = { chatId: "" + action.payload.chatId, messages: [action.payload.message] };
                store.messageList.push(newItem);
            }
            return {
                ...store,
            }

        default:
            return store;
    }

}