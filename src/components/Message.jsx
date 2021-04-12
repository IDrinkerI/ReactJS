import React from "react";

import "../css/message.scss";

const Message = (props) => {
    const { userName, text, isUser } = props.message;

    return (
        <div className={`message ${isUser ? "message-user" : ""}`}>
            <p className="message-name">{userName}:</p>
            <p className="message-text">{text}</p>
        </div >
    )
}

export default Message;