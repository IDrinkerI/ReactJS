export default class MessageModel {
    constructor(userName, text, isUser = false) {
        this.userName = userName;
        this.text = text;
        this.isUser = isUser;
    }
}