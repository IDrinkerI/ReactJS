import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNameAction } from "../store/profile/actions";

const Profile = () => {
    const dispath = useDispatch();
    const name = useSelector(store => store.profile.name);
    const [inputText, setInputText] = useState("");

    const onChangeHadler = (e) => {
        setInputText(e.target.value);
    }

    const changeNameButtonHandler = () => {
        dispath(changeNameAction(inputText));
    }

    return (
        <>
            <h1>Profile</h1>
            <p>Current name: {name}</p>
            <input required type="text" onChange={onChangeHadler} />
            <button onClick={changeNameButtonHandler}>Change Name</button>
        </>
    )
}

export default Profile;