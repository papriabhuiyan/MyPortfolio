import React from "react";
import "./Skills.css";
import Fade from "react-reveal/Fade";

const Skills = () => {
    const skills = [
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "Angular",
        "HTML",
        "CSS",
        "React",
        "C++",
        "C#",
        "Docker",
        "AWS",
        "Spring Framework",
        "SQL",
        "PL/SQL",
        "PostgreSQL",
        "MySQL",
        "Git",
        "Swift",
        "Lighthouse",
        "Nessus",
        "Agile/Scrum Methodologies",
        "Project Planning and Scheduling",
        "Risk Assessment and Management",
        "Microsoft Project",
        "Jira",
        "Github"
    ]
    return (
        <div className=" skills-container" id="skills">
            <div className="skills-box">
            <div>
        <Fade>
            
            <h1 className="center ms">My Skills</h1>
            
        </Fade>
        </div>
        <div className="skills-map">
        {skills.map((skill) => (
            <Fade>
                <div className="skills-cont">
                    <div className=" center skills-card floating zoom">
                        <div className="skill-name"> {skill} </div>
                    </div>
                </div>
            </Fade>
        ))}
        </div>
        </div>
        </div>
    );
}

export default Skills;