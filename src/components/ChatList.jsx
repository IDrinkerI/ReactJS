import React, { useState } from "react";
import ChatItem from "./ChatItem.jsx";

import "../css/chat_list.scss";

const ChatList = (props) => {
    return (
        <select size="2" className="chat_list" onChange={props.onChangeSelected}>
            {props.items.map((item) =>
                <ChatItem entity={item} key={item.id} />
            )}
        </select>
    )
}

export default ChatList;