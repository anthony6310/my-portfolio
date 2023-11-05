import React from "react";
import SkillBadge from "../SkillBadge/SkillBadge";
import "./SkillsContainerStyles.css";

function SkillsContainer(props) {
    const skillsStyle = props.compact ? "skills-container--compact" : "skills-container";
    
    function handleBadge(skill) {
        return <SkillBadge image={skill.image} title={skill.title} compact={props.compact} />;
    }

    return (
        <div className={skillsStyle}>
            {props.skills.map(handleBadge)}
        </div>
    );
}

export default SkillsContainer;