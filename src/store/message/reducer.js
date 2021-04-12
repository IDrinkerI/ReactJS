import { ADD_MESSAGE, REMOVE_MESSAGE, SELECT_MESSAGE } from "./types";
import MessageModel from "../../model/MessageModel.js";

const initialStore = {
    messageList: [{
        chatId: "",
        messages: [],
    }],
    availableMessageId: 1,
    selectedMessageId: -1
};

export const messageReducer = (store = initialStore, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessageList = store.messageList;
            const { chatId, userName, messageText } = action.payload;
            const newMessage = new MessageModel(userName, messageText, store.availableMessageId);
            const item = newMessageList.find(item => item.chatId === chatId);

            if (item) {
                item.messages = [...item.messages, newMessage];
            }
            else {
                const newItem = { chatId: "" + chatId, messages: [newMessage] };
                newMessageList.push(newItem);
            }

            return {
                ...store,
                messageList: newMessageList,
                availableMessageId: store.availableMessageId + 1,
            }
        }
        case REMOVE_MESSAGE: {
            const newMessageList = store.messageList;
            const { chatId, messageId } = action.payload;

            const messages = newMessageList.find(item => item.chatId == chatId).messages;
            if (!messages) { return store; }

            const index = messages.findIndex(item => item.id == messageId);
            if (index == -1) { return store; }

            messages.splice(index, 1);

            return {
                ...store,
                newMessageList,
            }
        }
        case SELECT_MESSAGE: {
            return {
                ...store,
                selectedMessageId: action.payload,
            }
        }

        default:
            return store;
    }

}