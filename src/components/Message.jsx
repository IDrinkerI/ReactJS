import React from "react";

import "../css/message.scss";

const Message = (props) => {
    let { userName, text, isInterlocutor } = props.message;
    return (
        <div className={isInterlocutor ? "message message-interlocutor" : "message"}>
            <p className="message-user">{userName}:</p>
            <p className="message-text">{text}</p>
        </div >
    )
}

export default Message;