import React, { useEffect } from "react";
import ChatItem from "./ChatItem.jsx";
import { List } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addChatAction, removeChatAction } from "../store/chat/actions";

import "../css/chat_list.scss";

const ChatList = () => {
    const chatList = useSelector(store => store.chat.chatList);
    const dispatch = useDispatch();

    const addChat = () => {
        dispatch(addChatAction(`Chat №${chatList.length + 1}`));
    }

    const removeChat = () => {
        dispatch(removeChatAction());
    }

    useEffect(() => addChat(), []);

    return (
        <div className="chat_list">
            <List>{
                chatList.map((item) =>
                    <ChatItem entity={item} key={item.id} />
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