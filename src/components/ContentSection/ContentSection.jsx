import React from "react";
import SkillsContainer from "../SkillsContainer/SkillsContainer";
import "./ContentSectionStyles.css";

function ContentSection(props) {
    function addButtons(link) {
        return <a className="links__button" href={link.link}>{link.name}</a>;
    }
    
    return (
        <div className="content-section">
            <div className="image__container">
                <img className="content__image" src={props.image} />
            </div>
            <div className="content__container">
                <div className="title__container">
                    <h3 className="content__title">{props.title}</h3>
                    <p className="content__date">{props.date}</p>
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