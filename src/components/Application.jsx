import React from "react";

import InputField from "./InputField.jsx";
import MessageField from "./MessageField.jsx";
import MessangerTitle from "./MessangerTitle.jsx";
import MessangerButton from "./MessagerButton.jsx";


let initMessages = ["Hallo"];

const Application = () => {
    let [messages, setMessages] = React.useState(initMessages);
    let [inputMessage, setInputMessage] = React.useState();

    const MessangerButtonHandler = () => {
        if (!inputMessage) return;

        let newMessage = inputMessage;
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