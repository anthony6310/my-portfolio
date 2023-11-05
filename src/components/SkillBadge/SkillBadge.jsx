import React from "react";
import "./SkillBadgeStyles.css";

function SkillBadge(props) {
    return (
        <div className="skill-badge__container">
            <img className="skill-badge__image" src={props.image} />
            <p className="skill-badge__title">{props.title}</p>
        </div>
    );
}

export default SkillBadge;