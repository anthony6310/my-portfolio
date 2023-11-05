import React from "react";
import SkillsContainer from "../SkillsContainer/SkillsContainer";
import "./ContentSectionStyles.css";

function ContentSection(props) {
    return (
        <div className="content-section">
            <div className="image__container">
                <img className="content__image" src={props.image} />
            </div>
            <div className="content__container">
                <h3 className="content__title">{props.title}</h3>
                <p className="content__date">{props.date}</p>
                <p className="content">
                    {props.content}
                </p>
                
            </div>
        </div>
    );
}

export default ContentSection;