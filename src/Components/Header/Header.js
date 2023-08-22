import React from "react";
import "./Header.css";
import { Icon } from "@iconify/react";
import Link from "@iconify-icons/zmdi/linkedin";
import Mail from "@iconify-icons/zmdi/email";
import Git from "@iconify-icons/zmdi/github-alt";
import mailgo from "mailgo";

const Header = () => {
  mailgo();

  return (
    <div className="center header blob-container" id="top">
      {/* <div class="blob-c">
	      <div class="shape-blob"></div>
	      <div class="shape-blob one"></div>
	      <div class="shape-blob two"></div>
	      <div class="shape-blob three"></div>
        <div class="shape-blob four"></div>
        <div class="shape-blob five"></div>
        <div class="shape-blob six"></div>
	    </div> */}
      <div className="gooey"></div>
      <div className="header-box">
        <h2>My name is</h2>
        <div className="title">
          <h1>Papria Bhuiyan</h1>
        </div>
        <h2>A software engineer</h2>
        <ul className="contacts">
          <p className="line"></p>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/papriabhuiyan">
            <Icon icon={Git} className="icon1" />
          </a>
          <li className="lnk">·</li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/papria-bhuiyan/">
            <Icon icon={Link} className="icon2" />
          </a>
          <li className="lnk">·</li>
          <a class="dark" href="mailto:papriabhuiyan@gmail.com">
            <Icon icon={Mail} className="icon3" />
          </a>
          <p className="line"></p>
        </ul>
      </div>
    </div>
  );
};

export default Header;
