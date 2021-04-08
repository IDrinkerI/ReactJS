import React from "react";

import MessengerTitle from "./MessengerTitle.jsx";
import ChatList from "./ChatList.jsx";
import MessageField from "./MessageField.jsx";
import { Button, TextField } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MessageEntity from "../MessageEntity.js";
import { addMessageAction } from "../store/message/actions.js";

import "../css/messenger.scss";

const Messenger = () => {
    const [inputMessage, setInputMessage] = React.useState("");
    const { chatId } = useParams();
    const dispath = useDispatch();

    const updateInputMessage = React.useCallback((event) => setInputMessage(event.target.value));

    const messengerButtonHandler = React.useCallback(() => {
        if (!inputMessage) return;
        const newMessage = new MessageEntity("You", inputMessage, true);
        dispath(addMessageAction(chatId, newMessage));

        setInputMessage("");
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
                <Button style={{ backgroundColor: "lightgrey" }} onClick={messengerButtonHandler}>Send</Button>
            </form>
        </div>
    )
}

export default Messenger;