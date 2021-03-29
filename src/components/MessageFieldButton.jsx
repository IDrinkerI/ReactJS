import React from "react";

import "../css/message_field-button.scss";

const MessageFieldButton = (props) => {
    return (
        <button className="message_field-button" onClick={props.onClick}>Ответить</button>
    )
}

export default MessageFieldButton;