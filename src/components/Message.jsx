import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMessageAction } from "../store/message/actions.js"

import "../css/message.scss";

const Message = (props) => {
    const { userName, text, id } = props.message;
    const dispatch = useDispatch();
    const profileName = useSelector(store => store.profile.name);
    const selectedMessageId = useSelector(store => store.message.selectedMessageId);

    const onClicHadnler = () => {
        dispatch(selectMessageAction(id));
    }

    return (
        <div className={`
        message ${(profileName == userName) ? "message-user" : ""}
        ${(id == selectedMessageId) ? "message-selected" : ""}
        `} onClick={onClicHadnler}>
            <p className="message-name">{userName}:</p>
            <p className="message-text">{text}</p>
        </div >
    )
}

export default Message;