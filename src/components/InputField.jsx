import React from "react";

import "../css/input_field.scss";

const InputField = (props) => {
    let text = props.text;

    const onChangeHandler = (event) => props.onChange(event.target.value);

    return (
        <textarea value={text} className={"input_field"} placeholder={"input message"} onChange={onChangeHandler}></textarea>
    )
}

export default InputField;