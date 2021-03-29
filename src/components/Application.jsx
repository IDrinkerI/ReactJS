import React from "react";

import InputField from "./InputField.jsx";
import MessageField from "./MessageField.jsx";
import MessangerTitle from "./MessangerTitle.jsx";
import MessangerButton from "./MessagerButton.jsx";
import MessageEntity from "../MessageEntity.js";


let initMessages = [new MessageEntity("Bot", "Hallo from bot!", true)];

const Application = () => {
    let [messages, setMessages] = React.useState(initMessages);
    let [inputMessage, setInputMessage] = React.useState();

    const MessangerButtonHandler = () => {
        if (!inputMessage) return;

        let newMessage = new MessageEntity("You", inputMessage, false);
        setMessages([...messages, newMessage]);

        setInputMessage("");
    }

    return (
        <>
            <MessangerTitle />
            <MessageField messages={messages} />
            <InputField text={inputMessage} onChange={(t) => setInputMessage(t)} />
            <MessangerButton onClick={() => MessangerButtonHandler()} />
        </>
    )
}


export default Application;