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
            const newMessageList = store.messageList;
            const item = newMessageList.find(item => item.chatId === action.payload.chatId);

            if (item) {
                item.messages = [...item.messages, action.payload.message];
            }
            else {
                const newItem = { chatId: "" + action.payload.chatId, messages: [action.payload.message] };
                newMessageList.push(newItem);
            }
            return {
                ...store,
                messageList: newMessageList,
            }

        default:
            return store;
    }

}