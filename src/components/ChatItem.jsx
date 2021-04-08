import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { selecChatAction } from "../store/chat/actions.js";

//import "../css/chat_list-item.scss";

const ChatItem = (props) => {
    let { title, id } = props.entity;
    const selectedChatId = useSelector(store => store.chat.selectedChatId);
    const dispatch = useDispatch();

    return (
        <ListItem button onClick={() => dispatch(selecChatAction(id))} selected={selectedChatId === id}>
            <ListItemText primary={title} />
        </ListItem>
    )
}

export default ChatItem;