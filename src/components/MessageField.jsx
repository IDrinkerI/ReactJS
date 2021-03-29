import React from "react";
import Message from "./Message.jsx";

import "../css/message_field.scss";

const MessageField = (props) => {

    return (
        <>
            <div className="message_field">
                {props.messages.map(
                    t => <Message text={t} />
                )}
            </div>
        </>
    )
}

export default MessageField;