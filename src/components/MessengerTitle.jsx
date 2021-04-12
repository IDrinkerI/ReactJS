import React from "react";
import { useSelector } from "react-redux";

import "../css/messager-title.scss";

const Title = () => {
    const userName = useSelector(store => store.profile.name);

    return (
        <>
            <div className="messager-title">React messenger</div>
            <div className="greeting">Hallo "{userName}"</div>
        </>
    )
}

export default Title;