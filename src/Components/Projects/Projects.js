import React from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";

const Projects = () => {

  const projects = [
    {
      name: "Perform Here",
      info: "A responsive web-based application that enables artists to gauge local concert interest by collecting deposites from individuals interested in potential concert events",
      skill: "HTML  CSS  Angular  Java Spring Boot  MySQL  AWS  Stripe API",
      demo: "",
      demo_type: "Youtube Demo",
      source: "https://github.com/papriabhuiyan/Perform-Here-App",
      img: "img-perform-here-landing",
    },
    {
      name: "Pixelgram",
      info: " A responsive instagram clone, social media web app that allows users to interact with each other by following each other, posting pictures and viewing, liking, and commenting on posts",
      skill: "HTML  CSS  Angular  Java Spring Boot  MySQL  AWS",
      demo: "",
      demo_type: "Youtube Demo",
      source: "https://github.com/papriabhuiyan/Pixelgram",
      img: "img-pixelgram",
    },
    {
      name: "AI Shirt Customizer",
      info: "A responsive web app that allows the user to customize their shirt by changing the color of the shirt, adding different logos and prints on the shirt by using DALL.E",
      skill: "HTML  CSS  React  OpenAI API",
      demo: "",
      demo_type: "Live Demo",
      source: "https://github.com/papriabhuiyan/3D-product",
      img: "img-ai-shirt",
    },
    {
      name: "Housing Data Analysis",
      info: "A program that creates a Linear Regression Model to predict the price per sqft for the a large scale housing dataset",
      skill: "Python",
      demo: "",
      demo_type: "Live Demo",
      source: "https://github.com/papriabhuiyan/LinearRegressionModel",
      img: "img-lin-reg-model",
    },
  ];
  return (
    // <div className="center projects" id="projects">
    //   <div className="project-box">
    //     <Fade>
    //       <h1 className="center mp ">My Projects</h1>
    //     </Fade>

    //     {projects.map((project) => (
    //       <Fade>
    //         <div className="project-cont">
    //           <div className="center project-card">
    //             <div className="center project-data">
    //               <h1 className="name">{project.name}</h1>
    //               <p className="info">{project.info}</p>
    //               <ul className="project-skills">
    //                 <li className="skill">{project.skill}</li>
    //               </ul>
    //               <div className="project-links">
    //                 {/* <form action={project.demo} method="get" target="_blank">
    //                   <button className="demo">{project.demo_type}</button>
    //                 </form> */}
    //                 <form action={project.source} method="get" target="_blank">
    //                   <button className="demo">View Source</button>
    //                 </form>
    //               </div>
    //             </div>
    //             <div className="center project-image">
    //               <div className={project.img}></div>
    //             </div>
    //           </div>
    //         </div>
    //       </Fade>
    //     ))}
    //   </div>
    // </div>
    
    <div className="projects-section" id="projects">
      <div className="project-box">
        <Fade>
          <h1 className="myProjects">My Projects</h1>
        </Fade>
      </div>
      <div className="project-cont">
        <div className="project-cards">
          {projects.map((project)=> (
              <Fade>
                <div className="each-card">
                <div className="center project-image">
                  <div className={project.img}></div>
                </div>
                <div className="project-data">
                  <h1 className="name">{project.name}</h1>
                  <p className="info">{project.info}</p>
                  <ul className="project-skills">
                    <li className="skill">{project.skill}</li>
                  </ul>
                  <div className="project-links">
                 <form action={project.source} method="get" target="_blank">
                   <button className="demo">View Source</button>
                 </form>
                 </div>      
                </div>
                </div>
              </Fade>
          ))};
        </div>

      </div>
    </div>
  );
};

export default Projects;
