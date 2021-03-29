export default class MessageEntity {
    constructor(userName, text, isUser = false) {
        this.userName = userName;
        this.text = text;
        this.isUser = isUser;
    }
}