import React from "react";
import "./ContentSectionStyles.css";

function ContentSection(props) {
    return (
        <div>
            <p className="content">
                {props.content}
            </p>
        </div>
    );
}

export default ContentSection;