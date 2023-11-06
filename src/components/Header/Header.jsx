import React from 'react';
import TextColor from "../TextColor";
import "./HeaderStyles.css";
import { green, lightBlue, yellow, pink, gray } from "../../constants/color";

function Header(props) {
    const Tag = props.styleClass === "hero-header" ? 'h1' : 'h2';

    return (
        <div className={props.styleClass}>
            <Tag>
                <TextColor color={gray} text="&lt;" />
                <TextColor color={green} text={props.title + " "} />
                {props.role && <span><TextColor color={lightBlue} text="role" />=<TextColor color={yellow} text={props.role} /></span>}
                {props.action && <span><TextColor color={lightBlue} text="action" />=<TextColor color={pink} text="{" /><TextColor color={yellow} text={props.action} /><TextColor color={pink} text="} " /></span>}
                <TextColor color={gray} text="/&gt;" />
                <span className="caret">|</span>
            </Tag>
        </div>
    );
}

export default Header;