import React from "react";

import "../css/message.scss";

const Message = (props) => <p className="message_field-message">{props.text}</p>;

export default Message;