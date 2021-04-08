import React from "react";
import Message from "./Message.jsx";
import Bot from "../Bot.js";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addMessageAction } from "../store/message/actions.js";

import "../css/message_field.scss";

const MessageField = () => {
    const { chatId } = useParams();
    const { messageList } = useSelector(store => store.message);
    const messages = messageList.find(item => item.chatId === chatId)?.messages;
    const dispath = useDispatch();

    React.useEffect(() => dispath(
        addMessageAction(1, Bot.getGreeting())
    ), []);

    React.useEffect(() => {
        if (!messages) { return; }

        let lastMessage = messages[messages.length - 1];
        if (lastMessage?.isUser)
            dispath(addMessageAction(chatId, Bot.getOpinion(lastMessage.text)));
    }, [messages]);

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