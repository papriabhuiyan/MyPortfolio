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
        "Sping Framework",
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
        <Fade>
          <h1 className="center ms">My Skills</h1>
        </Fade>
        {skills.map((skill) => (
            <Fade>
                <div className="skills-cont">
                    <div className=" center skills-card">
                        <p className="skill-name"> {skill} </p>
                    </div>
                </div>
            </Fade>
        ))}
        </div>
        </div>
    );
}

export default Skills;