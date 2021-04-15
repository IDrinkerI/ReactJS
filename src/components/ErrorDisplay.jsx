import React from "react";

const ErrorDisplay = (props) => {
    return (
        <>
            <h3>Error</h3>
            <p>{props.error.message}</p>
        </>
    )
}

export default ErrorDisplay;