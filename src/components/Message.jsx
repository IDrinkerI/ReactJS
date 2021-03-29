import React from "react";

import "../css/message.scss";

const Message = (props) => {
    let { userName, text, isUser } = props.message;

    return (
        <div className={isUser ? "message message-user" : "message"}>
            <p className="message-name">{userName}:</p>
            <p className="message-text">{text}</p>
        </div >
    )
}

export default Message;