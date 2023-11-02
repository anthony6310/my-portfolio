import React from 'react';
import "./Header_style.css";

function Header(props) {

    return (
        <div>
            <h1> 
                <span className="pink-text">&lt;</span>{props.title} {props.role && <span>role="{props.role}"</span>} {props.action && <span>action=&#123;{props.role}&#125;</span>} /&gt;
            </h1>
        </div>
    );
}

export default Header;