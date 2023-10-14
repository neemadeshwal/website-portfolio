import React from "react";
import {projectData} from "./skillData";
import {FaGithub} from "react-icons/fa"
import imgs1 from "../assets/project-images/weatherApp.jpg"
import imgs2 from "../assets/project-images/musicplayerSS.jpg"
import imgs3 from "../assets/project-images/noteApp.jpg"
import imgs4 from "../assets/project-images/tourPage.jpg"
import imgs5 from "../assets/project-images/grocery.jpg"
import imgs6 from "../assets/project-images/slider.jpg"
import imgs7 from "../assets/project-images/cocktail-mix.jpg"
import imgs8 from "../assets/project-images/foodMenu.jpg"
import imgs9 from "../assets/project-images/cart reducer.jpg"
import imgs10 from "../assets/project-images/color-generator.jpg"

const imgContainer=[imgs1,imgs2,imgs3,imgs4,imgs5,imgs6,imgs7,imgs8,imgs9,imgs10]



      

const Projects=()=>{
    const projects=projectData.map((projectItem,index)=>{
        const {id,githubLink,project,img,projectLink}=projectItem
       return(
            
            <div key={id}  id="projects" className="single-project-container">
                 <a href={projectLink} target="_blank" rel="noreferrer">
               <img src={imgContainer[index]} alt={`${img}-icon`}/></a>
                <hr/>
               <div className="project-info">
               <h4>{project}</h4>
               <p><a href={githubLink}><FaGithub/></a></p>
               </div>
            </div>
        )
    })
    return(
        <section className="project-container">
            <h2>Projects</h2>
            <div className="project-box">
              {projects}
            </div>
         
        </section>
    )
}
export default Projects