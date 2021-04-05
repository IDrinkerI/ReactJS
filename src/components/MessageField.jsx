import React from "react";
import Message from "./Message.jsx";

import "../css/message_field.scss";

const MessageField = (props) => {

    return (
        <>
            <div className="message_field">
                {props.messages.map(
                    (m, i) => <Message message={m} key={i} />
                )}
            </div>
        </>
    )
}

export default MessageField;