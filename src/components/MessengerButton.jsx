import React from "react";

import "../css/messager-button.scss";

const MessengerButton = (props) => {
    return (
        <button className="messager-button" onClick={props.onClick}>Send</button>
    )
}

export default MessengerButton;