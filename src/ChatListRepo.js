import ChatEntity from "./ChatEntity.js";

export default class ChatListRepo {
    static GetChatList() {
        return [
            new ChatEntity("Chat №1", 1),
            new ChatEntity("Chat №2", 2),
            new ChatEntity("Chat №3", 3),
            new ChatEntity("Chat №4", 4),
            new ChatEntity("Chat №5", 5),
        ];
    }
}