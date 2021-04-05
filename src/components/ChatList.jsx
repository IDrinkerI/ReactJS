import React, { useState } from "react";
import ChatItem from "./ChatItem.jsx";
import { List } from "@material-ui/core";

//import "../css/chat_list.scss";

const ChatList = (props) => {
    return (
        <List>{
            props.items.map((item) =>
                <ChatItem entity={item} selectedChatId={props.selectedChatId} onClick={props.onChangeSelected} key={item.id} />
            )}
        </List >
    )
}

export default ChatList;