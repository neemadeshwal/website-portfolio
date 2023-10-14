import React from "react";
import {FaLinkedin,FaGithub} from "react-icons/fa"
import profileImage from "../assets/my-image/profile2edit.jpg"
const Home=()=>{
    return(
        <div  id ="home" className="home-container">
        <div className="profile-image-container">
            <img src={profileImage}alt="profile-image"/>
        </div>
        <div className="profile-details-container">
        <h3>Hello I'm</h3>
        <h1>neema deshwal</h1>
        <h2>frontend developer</h2>
        
        <div className="profile-button-links">
        <a href="https://wrtflm.csb.app/" target="_blank" rel="noreferrer">
            
            <button className="cv-btn" > my cv</button>
          </a>
         <a href="#contact" >  <button className="contact-info-btn">contact info</button></a>
        </div>
        <div className="social-profile-links">
            <a href="https://www.linkedin.com/in/neema-deshwal-512044212/"><FaLinkedin className="social-link"></FaLinkedin></a>
            <a href="https://github.com/neemadeshwal/"><FaGithub className="social-link"></FaGithub></a>
        </div>
        </div>
        </div>
    )
}
export default Home;