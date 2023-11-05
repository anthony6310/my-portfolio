import React from "react";
import SkillBadge from "../SkillBadge/SkillBadge";
import skills from "../../constants/skills";
import "./SkillsContainerStyles.css";

function SkillsContainer() {
    
    function handleBadge(skill) {
        return <SkillBadge image={skill.image} title={skill.title} />;
    }

    return (
        <div className="skills-container">
            {skills.map(handleBadge)}
        </div>
    );
}

export default SkillsContainer;