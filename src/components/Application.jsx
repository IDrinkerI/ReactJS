import React from "react";

import MessageField from "./MessageField.jsx";

let messages = ["Привет", "Дашь в займы?"];

const Application = () => {
    return (
        <>
            <MessageField messages={messages} />
        </>
    )
}

export default Application;