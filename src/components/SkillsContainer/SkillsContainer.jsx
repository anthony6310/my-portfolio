import React from "react";
import SkillBadge from "../SkillBadge/SkillBadge";
import "./SkillsContainerStyles.css";

// Component to render a collection of Skill Badges
function SkillsContainer(props) {

    // Define styles based on the compact prop
    const skillsStyle = props.compact ? "skills-container--compact" : "skills-container";
    
    // Function to generate SkillBadge components for each skill in the skills array
    function handleBadge(skill, index) {
        return <SkillBadge key={index} image={skill.image} title={skill.title} compact={props.compact} />;
    }

    return (
        <div className={skillsStyle}>
            {props.skills.map(handleBadge)}
        </div>
    );
}

export default SkillsContainer;