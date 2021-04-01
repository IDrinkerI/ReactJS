import React from "react";

import InputField from "./InputField.jsx";
import MessageField from "./MessageField.jsx";
import MessangerTitle from "./MessangerTitle.jsx";
import MessangerButton from "./MessagerButton.jsx";
import MessageEntity from "../MessageEntity.js";
import Bot from "../Bot.js";

const Application = () => {
    const [messages, setMessages] = React.useState([Bot.getGreeting()]);
    const [inputMessage, setInputMessage] = React.useState();

    const messangerButtonHandler = React.useCallback(() => {
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
            <MessangerTitle />
            <MessageField messages={messages} />
            <InputField text={inputMessage} onChange={updateInputMessage} />
            <MessangerButton onClick={messangerButtonHandler} />
        </>
    )
}


export default Application;