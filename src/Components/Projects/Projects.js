import React from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";

const Projects = () => {

  const projects = [
    {
      name: "Perform Here",
      info: "A responsive web-based application helping students and young professionals alike find rooms and roommates around the San Francisco Bay Area.",
      skill: "React  CSS  Express  MySQL  Firebase",
      demo: "https://youtu.be/vsSw3u31dvY",
      demo_type: "Youtube Demo",
      source: "https://github.com/papriabhuiyan/Perform-Here-App",
      img: "img-perform-here-landing",
    },
    {
      name: "Pixelgram",
      info: "This is a photo management website that allows users to post images, search for images and view and comment on individual image posts.",
      skill: "HTML  CSS  JavaScript  Handlebars  Express",
      demo: "https://youtu.be/OyRgzGGD7uM",
      demo_type: "Youtube Demo",
      source: "https://github.com/papriabhuiyan/Pixelgram",
      img: "img-photo-app",
    },
    {
      name: "AI Shirt Customizer",
      info: "This SF Hacks website I redesigned during SF Hacks 2021 and won a Web Competition for the best redesign.",
      skill: "HTML  CSS  JavaScript  React",
      demo: "https://burmy.github.io/sfhacks/?",
      demo_type: "Live Demo",
      source: "https://github.com/papriabhuiyan/3D-product",
      img: "img-hacks",
    },
    {
      name: "Housing Data Analysis",
      info: "This website tracks the wildfires going around the world using a NASA API.",
      skill: "HTML  CSS  JavaScript  React  NASA API",
      demo: "https://burmy.github.io/Wildfire-Tracker/?",
      demo_type: "Live Demo",
      source: "https://github.com/papriabhuiyan/LinearRegressionModel",
      img: "img-wildfire",
    },
  ];
  return (
    <div className="center projects" id="projects">
      <div className="project-box">
        <Fade>
          <h1 className="center mp ">My Projects</h1>
        </Fade>

        {projects.map((project) => (
          <Fade>
            <div className="project-cont">
              <div className="center project-card">
                <div className="center project-data">
                  <h1 className="name">{project.name}</h1>
                  <p className="info">{project.info}</p>
                  <ul className="project-skills">
                    <li className="skill">{project.skill}</li>
                  </ul>
                  <div className="project-links">
                    <form action={project.demo} method="get" target="_blank">
                      <button className="demo">{project.demo_type}</button>
                    </form>
                    <form action={project.source} method="get" target="_blank">
                      <button className="demo">View Source</button>
                    </form>
                  </div>
                </div>
                <div className="center project-image">
                  <div className={project.img}></div>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Projects;
