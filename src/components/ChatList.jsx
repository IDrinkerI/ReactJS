import React, { useState, useEffect } from "react";
import ChatItem from "./ChatItem.jsx";
import { List } from "@material-ui/core";
// import ChatEntity from "../ChatEntity.js";


import "../css/chat_list.scss";

const ChatList = (props) => {
    // const [freeId, setFreeId] = useState(1);
    // const [chatList, setChatList] = useState([]);

    // const addChat = () => {
    //     setChatList([...chatList, new ChatEntity(`Chat №${freeId}`, "" + freeId)]);
    //     setFreeId(freeId + 1);
    // }

    // const removeChat = () => {
    //     let index = chatList.findIndex(item => item.id === props.selectedChatId);
    //     if (index == -1) { return; }

    //     let newList = [...chatList];
    //     newList.splice(index, 1);
    //     setChatList(newList);
    //     console.log(props.selectedChatId);
    // }

    //useEffect(() => addChat(), []);



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