export default class Bot {
    static name = "Bot";

    static getOpinion(text) {
        return `You message: "${text}" was written :${new Date().toLocaleTimeString()}`;
    }
}