import React from "react";
import SkillsContainer from "../SkillsContainer/SkillsContainer";
import "./ContentSectionStyles.css";

// Component that generates a responsive content section for projects
function ContentSection(props) {
    
    // Function to generate links/buttons for the project
    function addButtons(link, index) {
        return <a key={index} className="links__button" href={link.link}>{link.name}</a>;
    }
    
    return (
        <div className="content-section">
            <div className="image__container">
                <img alt={props.title} loading="lazy" className="content__image" src={props.image} />
            </div>
            <div className="content__container">
                <div className="title__container">
                    <h3 className="content__title">{props.title}</h3>
                    <p>{props.date}</p>
                </div>
                <p className="content">
                    {props.content}
                </p>
                <SkillsContainer skills={props.skills} compact={props.compact} />
                <div className="links__container">
                    {props.links.map(addButtons)}
                </div>
            </div>
        </div>
    );
}

export default ContentSection;