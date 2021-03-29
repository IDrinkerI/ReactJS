import MessageEntity from "./MessageEntity.js"

export default class Bot {
    static name = "Bot";

    static getGreeting() {
        return new MessageEntity(Bot.name, "Hallo from bot!");
    }

    static getOpinion(text) {
        return new MessageEntity(Bot.name, `You message: "${text}" was written :${new Date().toLocaleTimeString()}`)
    }
}