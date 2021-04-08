import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

//import "../css/chat_list-item.scss";

const ChatItem = (props) => {
    let { title, id } = props.entity;

    return (
        <ListItem button onClick={() => props.onClick(id)} selected={props.selectedChatId === id}>
            <ListItemText primary={title} />
        </ListItem>
    )
}

export default ChatItem;