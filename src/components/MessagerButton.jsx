import React from "react";

import "../css/messager-button.scss";

const MessageFieldButton = (props) => {
    return (
        <button className="messager-button" onClick={props.onClick}>Ответить</button>
    )
}

export default MessageFieldButton;