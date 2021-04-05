export default class MessageList {
    _list = [];
    getMessagesById(id) {
        let item = this._list.find(m => m.chatId === id);
        if (item) {
            return item.messages;
        }
        else {
            return [];
        }
    }

    getLastMessageById(id) {
        let messages = this.getMessagesById(id);
        return messages[messages.length - 1];
    }

    addMessage(id, message) {
        let item = this._list.find(m => m.chatId === id);

        if (item) {
            item.messages.push(message);
        }
        else {
            this._list.push({ chatId: id, messages: [message] });
        }

        return this;
    }

    addMessageWithUpdate(id, message) {
        this.addMessage(id, message);
        return this._clone();
    }

    _clone() {
        let newList = new MessageList();
        newList._list = this._list;
        newList.messages = this.messages;
        return newList;
    }
}