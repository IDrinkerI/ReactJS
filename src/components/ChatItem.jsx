import React from "react";

import "../css/chat_list-item.scss";

const ChatItem = (props) => {
    let { title, id } = props.entity;

    return (
        <option className="chat_list-item" value={id}>{title}</option>
    )
}

export default ChatItem;