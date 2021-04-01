import React from "react";

import MessengerTitle from "./MessengerTitle.jsx";
import ChatList from "./ChatList.jsx";
import InputField from "./InputField.jsx";
import MessageField from "./MessageField.jsx";
import MessengerButton from "./MessengerButton.jsx";

import MessageEntity from "../MessageEntity.js";
import Bot from "../Bot.js";
import ChatListRepo from "../ChatListRepo.js";

import "../css/messenger.scss";

const Messenger = () => {
    const [messages, setMessages] = React.useState([Bot.getGreeting()]);
    const [inputMessage, setInputMessage] = React.useState();
    const [chatList, setChatList] = React.useState(ChatListRepo.GetChatList());
    const [selectedChat, setSelectedChat] = React.useState(0);

    const selectChatHandler = React.useCallback((event) => setSelectedChat(event.target.selectedIndex));

    const updateInputMessage = React.useCallback((t) => setInputMessage(t));

    const messengerButtonHandler = React.useCallback(() => {
        if (!inputMessage) return;

        let newMessage = new MessageEntity("You", inputMessage, true);
        setMessages([...messages, newMessage]);

        setInputMessage("");
    });

    React.useEffect(() => {
        let lastMessage = messages[messages.length - 1];
        if (lastMessage.isUser)
            setMessages([...messages, Bot.getOpinion(lastMessage.text)])
    }, [messages]);

    return (
        <div className="messenger">
            <MessengerTitle />

            <div className="messenger-wrapper">
                <ChatList items={chatList} onChangeSelected={selectChatHandler} />
                <MessageField messages={messages} />
            </div>

            <InputField text={inputMessage} onChange={updateInputMessage} />
            <MessengerButton onClick={messengerButtonHandler} />
        </div>
    )
}


export default Messenger;