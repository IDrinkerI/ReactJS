import React, { useState, useEffect } from "react";
import ChatItem from "./ChatItem.jsx";
import { List } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addChatAction, removeChatAction } from "../store/chats/actions";

import "../css/chat_list.scss";

const ChatList = (props) => {
    const chatList = useSelector(store => store.chat.chatList);
    const dispatch = useDispatch();

    const addChat = () => {
        dispatch(addChatAction("chat"));
    }

    const removeChat = () => {
        dispatch(removeChatAction());
    }

    useEffect(() => addChat(), []);

    return (
        <div className="chat_list">
            <List>{
                chatList.map((item) =>
                    <ChatItem entity={item} selectedChatId={props.selectedChatId} onClick={props.onChangeSelected} key={item.id} />
                )}
            </List >
            <div className="button-wrapper">
                <button className="chat_list-button" onClick={addChat}>+</button>
                <button className="chat_list-button" onClick={removeChat}>-</button>
            </div>
        </div>
    )
}

export default ChatList;