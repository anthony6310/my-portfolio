import React from "react";
import "./ContactMeStyles.css";

// ContactMe component representing different contact options
function ContactMe() {
    return (
        <div className="contact-me">
            <a href="mailto:anthonypumarwd@gmail.com" target="_blank" className="contact-me__button">Email</a>
            <a href="https://github.com/anthony6310" target="_blank" className="contact-me__button">GitHub</a>
            <a href="https://www.linkedin.com/in/anthony-pumar-5a54b4125/" target="_blank" className="contact-me__button">LinkedIn</a>
        </div>
    );
}

export default ContactMe;