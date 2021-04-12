import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "../css/chat_list-item.scss";

const ChatItem = (props) => {
    const { title, id } = props.entity;
    const { chatId } = useParams();
    const history = useHistory();
    const notificationList = useSelector(store => store.chat.chatNotificationList);

    const onClickHandler = () => {
        history.push(`/chat/${id}`);
    }

    return (
        <ListItem button className={notificationList.includes(id) ? "notification" : ""} onClick={onClickHandler} selected={chatId === id}>
            <ListItemText primary={title} />
        </ListItem>
    )
}

export default ChatItem;