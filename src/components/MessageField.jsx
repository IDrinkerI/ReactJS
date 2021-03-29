import React from "react";
import Message from "./Message.jsx";
import MessageFieldButton from "./MessageFieldButton.jsx";

import "../css/message_field.scss";

const MessageField = (props) => {
    const [messages, setMessages] = React.useState(props.messages);

    return (
        <>
            <div className="message_field">
                {messages.map(
                    t => <Message text={t} />
                )}
            </div>

            <MessageFieldButton onClick={() => setMessages(messages.concat("No"))} />
        </>
    )
}

export default MessageField;