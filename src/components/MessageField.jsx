import React from "react";
import Message from "./Message.jsx";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "../css/message_field.scss";

const MessageField = () => {
    const { chatId } = useParams();
    const { messageList } = useSelector(store => store.message);
    const messages = messageList.find(item => item.chatId === chatId)?.messages;

    return (
        <>
            <div className="message_field">
                {messages?.map(
                    (m, i) => <Message message={m} key={i} />
                )}
            </div>
        </>
    )
}

export default MessageField;