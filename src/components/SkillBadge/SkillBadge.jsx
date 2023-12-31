import React from "react";
import "./SkillBadgeStyles.css";

// Component to create a single Skill Badge
function SkillBadge(props) {

    // Determine styles based on compact prop
    const badgeStyle = props.compact ? "skill-badge__image--compact" : "skill-badge__image";
    const containerStyle = props.compact ? "skill-badge__container--compact" : "skill-badge__container";

    return (
        <div className={containerStyle}>
            <img alt={props.title} loading="lazy" className={badgeStyle} src={props.image} />
            <p className="skill-badge__title">{props.title}</p>
        </div>
    );
}

export default SkillBadge;