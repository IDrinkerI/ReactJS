import React from "react";

import "../css/input_field.scss";

const InputField = (props) => {
    let text = props.text;

    return (
        <textarea value={text} className={"input_field"} placeholder={"input message"} onChange={(event) => props.onChange(event.target.value)}></textarea>
    )
}

export default InputField;