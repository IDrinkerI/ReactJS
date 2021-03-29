import React from "react";

import Salute from "./Salute.jsx";
import MessageField from "./MessageField.jsx";

let messages = ["Привет", "Дашь в займы?"];

const Application = () => {
    return (
        <>
            <Salute />
            <MessageField messages={messages} />
        </>
    )
}

export default Application;