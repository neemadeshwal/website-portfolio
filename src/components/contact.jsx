import React from "react";
import {FaLinkedin,FaEnvelope} from "react-icons/fa"
const Contact=()=>{
return(
    <section  id='contact'className="contact-container">
        <div className="contact-me">
        <h2>Contacts</h2>
        <div className="contact-info">
            <div className="email">
                <FaEnvelope className="mail"/>
            <p>deshwalneema52@gmail.com</p>

            </div>
            
            <div className="linkedin">
            <a href="https://www.linkedin.com/in/neema-deshwal-512044212/"><FaLinkedin className="social-link"></FaLinkedin></a>
            <p>LinkedIn</p>
            </div>
            
            </div>  
            </div>
    </section>
)
}
export default Contact;