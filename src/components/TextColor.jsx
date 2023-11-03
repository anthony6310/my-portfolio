import React from "react";

function TextColor(props) {
    const color = props.color;

    const style = {
        color: color
    };

    return <span style={style}>{props.text}</span>;
}

export default TextColor;