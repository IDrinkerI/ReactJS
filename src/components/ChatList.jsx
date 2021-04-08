import React, { useEffect } from "react";
import ChatItem from "./ChatItem.jsx";
import { List } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addChatAction, removeChatAction } from "../store/chat/actions";
import { useParams } from "react-router-dom";

import "../css/chat_list.scss";

const ChatList = () => {
    const { chatList, availableChatId } = useSelector(store => store.chat);
    const { chatId } = useParams();
    const dispatch = useDispatch();

    const addChat = () => {
        dispatch(addChatAction(`Chat №${availableChatId}`));
    }

    const removeChat = () => {
        dispatch(removeChatAction(chatId));
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