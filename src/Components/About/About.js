import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="center about-container" id="About">
      <div className="about-pngs">
        <img
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
        ></img>
      </div>
      <div className="about-box">
        <p>
          I am a software engineer who holds a Bachelor of Science degree in Computer Science from <span className="hl">
            Southern Methodist University</span>. Currently I am engaged in the pursuit of a Master's degree in <span className='hl'>Operations Research and 
            Engineering Management</span>, also from SMU.
          Presently, I am also a <span className="hl"> Full-Stack Engineer at Cognizant</span>. My professional journey reflects my 
          unwavering commitment to continuous learning and growth
           within the technology sector. I am passionate about <span className='hl'>problem solving</span> which fuels my aspiration 
           to <span className='hl'>tackle challenges</span> that demand innovative solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
