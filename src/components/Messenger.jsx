import React from "react";

import MessengerTitle from "./MessengerTitle.jsx";
import ChatList from "./ChatList.jsx";
import MessageField from "./MessageField.jsx";
import { Button, TextField } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMessageAction, removeMessageAction } from "../store/message/actions.js";

import "../css/messenger.scss";

const Messenger = () => {
    const [inputMessage, setInputMessage] = React.useState("");
    const { chatId } = useParams();
    const userName = useSelector(store => store.profile.name);
    const selectedMessageId = useSelector(store => store.message.selectedMessageId);
    const dispath = useDispatch();

    const updateInputMessage = React.useCallback((event) => setInputMessage(event.target.value));

    const sendButtonHandler = React.useCallback(() => {
        if (!inputMessage) return;
        dispath(addMessageAction(chatId, userName, inputMessage));

        setInputMessage("");
    });

    const removeMessageButtonHandler = React.useCallback(() => {
        dispath(removeMessageAction(chatId, selectedMessageId));
    });

    return (
        <div className="messenger">
            <MessengerTitle />

            <div className="messenger-wrapper">
                <ChatList />
                <MessageField />
            </div>
            <form className="input_form">
                <TextField fullWidth={true} style={{ marginRight: "10px" }} value={inputMessage} onChange={updateInputMessage} />
                <Button style={{ backgroundColor: "lightgrey", margin: "5px" }} onClick={sendButtonHandler}>Send</Button>
                <Button style={{ backgroundColor: "lightgrey", margin: "5px" }} onClick={removeMessageButtonHandler}>Delete Message</Button>
            </form>
        </div>
    )
}

export default Messenger;