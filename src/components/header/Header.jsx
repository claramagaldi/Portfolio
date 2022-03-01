import React from "react";
import "./header.css";
import ME from "../../assets/header/me.png";
import Socials from "../socials/Socials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="container header__container-left">
          <h4>Hello, I'm</h4>
          <h1>Clara Magaldi</h1>
          <h4 className="text-light">Software Developer</h4>
          <Socials class="header__socials"/>
        </div>
        <div className="container header__container-right">
          <div className="me-image">
            <img src={ME} alt="me" />
          </div>
          {/* <a href="#contact" className="scroll__down">
            Scroll Down
          </a> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
