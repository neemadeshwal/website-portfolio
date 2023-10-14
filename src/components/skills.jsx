import React from "react";
import {FaCheckCircle}  from 'react-icons/fa'
import { frontEndSkill,backendSkill } from "./skillData";

const Skill=()=>{

    const frontEndskill=frontEndSkill.map((skills)=>{
        const{id,skill,level}=skills
        return( <div  className="single-skill-container" key={id}>
                <FaCheckCircle></FaCheckCircle>
                <div className="skill-detail">
                    <h3>{skill}</h3>
                    <p>{level}</p>
                </div>
        </div>)
    })
    const backendskill=backendSkill.map((skills)=>{
        const {id,skill,level}=skills;
        return(
            <div className="single-skill-container" key={id}>
                <FaCheckCircle></FaCheckCircle>
                <div className="skill-detail">
                    <h3>{skill}</h3>
                    <p>{level}</p>
                </div>
            </div>
        )
    })
    return(
        <section id="skill" className="skill-container">
            <div className="skill-heading">
                <h2>skills</h2>
            </div>
            <div className="all-skills-container">
            <div className="frontend-container">
                <h2>frontend</h2>
                <div className="frontend-detail" >
                {frontEndskill}

                </div>
               </div>
            <div className="backend-container">
                <h2>backend</h2>
                <div className="backend-detail">
                {backendskill}

                </div>
            </div>
            </div>
        </section>
    )
}
export default Skill;