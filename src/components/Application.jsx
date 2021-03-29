import React from "react";

import MessageField from "./MessageField.jsx";
import MessangerTitle from "./MessangerTitle.jsx";

let messages = ["Привет", "Дашь в займы?"];

const Application = () => {
    return (
        <>
            <MessangerTitle />
            <MessageField messages={messages} />
        </>
    )
}

export default Application;