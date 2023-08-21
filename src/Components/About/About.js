import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="center about-container" id="About">
      <div className="about-pngs">
        {/* <img
          src="https://assets.website-files.com/5d7fff8297d2f2362bc02ca9/5fa25157d7c72d1dea0b55e4_fresh-1-top.png"
          alt=""
          className="aboutBG-1"
        ></img>
        <img
          src="https://assets.website-files.com/5d7fff8297d2f2362bc02ca9/5fa2515700561360a501a17f_fresh-1-right.png"
          alt=""
          className="aboutBG-2"
        ></img>
        <img
          src="https://assets.website-files.com/5d7fff8297d2f2362bc02ca9/5fa251575a35c45b3593c443_fresh-1-dots.png"
          alt=""
          className="aboutBG-3"
        ></img> */}
      </div>
      <div className="about-box">
        <p className='aboutMe'>
          <span className="main-writing">I am a software engineer who holds a Bachelor of Science degree in Computer Science from </span><span className="hl">
            Southern Methodist University</span><span className="main-writing">. Currently I am engaged in the pursuit of a Master's degree in </span><span className='hl'>Operations Research and 
            Engineering Management</span><span className="main-writing">, also from SMU.
          Presently, I am also a </span><span className="hl"> Full-Stack Engineer at Cognizant</span><span className="main-writing">. My professional journey reflects my 
          unwavering commitment to continuous learning and growth
           within the technology sector. I am passionate about </span><span className='hl'>problem solving</span><span className="main-writing"> which fuels my aspiration 
           to </span><span className='hl'>tackle challenges</span><span className="main-writing"> that demand innovative solutions.</span>
        </p>
      </div>
    </div>
  );
};

export default About;
