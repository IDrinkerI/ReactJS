import React from "react";

import InputField from "./InputField.jsx";
import MessageField from "./MessageField.jsx";
import MessengerTitle from "./MessengerTitle.jsx";
import MessengerButton from "./MessengerButton.jsx";
import MessageEntity from "../MessageEntity.js";
import Bot from "../Bot.js";

const Messenger = () => {
    const [messages, setMessages] = React.useState([Bot.getGreeting()]);
    const [inputMessage, setInputMessage] = React.useState();

    const messengerButtonHandler = React.useCallback(() => {
        if (!inputMessage) return;

        let newMessage = new MessageEntity("You", inputMessage, true);
        setMessages([...messages, newMessage]);

        setInputMessage("");
    });

    const updateInputMessage = React.useCallback((t) => setInputMessage(t));

    React.useEffect(() => {
        let lastMessage = messages[messages.length - 1];
        if (lastMessage.isUser)
            setMessages([...messages, Bot.getOpinion(lastMessage.text)])
    }, [messages]);

    return (
        <>
            <MessengerTitle />
            <MessageField messages={messages} />
            <InputField text={inputMessage} onChange={updateInputMessage} />
            <MessengerButton onClick={messengerButtonHandler} />
        </>
    )
}


export default Messenger;