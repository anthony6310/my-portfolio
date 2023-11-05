import React from "react";
import "./ContactMeStyles.css";

function ContactMe() {
    return (
        <div className="contact-me">
            <a href="mailto:anthonypumarwd@gmail.com" className="contact-me__button">Email</a>
            <a href="https://github.com/anthony6310" className="contact-me__button">GitHub</a>
            <a href="https://www.linkedin.com/in/anthony-pumar-5a54b4125/" className="contact-me__button">LinkedIn</a>
        </div>
    );
}

export default ContactMe;