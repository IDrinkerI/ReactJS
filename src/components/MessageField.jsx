import React from "react";
import Message from "./Message.jsx";
import MessageFieldHeader from "./MessageFieldHeader.jsx";

const MessageField = (props) => {
    const [messages, setMessages] = React.useState(props.messages);

    return (
        <>
            <MessageFieldHeader />
            <div className="message_field">
                {messages.map(
                    t => <Message text={t} />
                )}
            </div>

            <button className="message_field-button" onClick={() => setMessages(messages.concat("Нет"))}>Ответить</button>
        </>
    )
}

export default MessageField;