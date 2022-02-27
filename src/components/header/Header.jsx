import React from "react";
import "./header.css";
import Cta from "./Cta";
import ME from "../../assets/header/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="container header__container-left">
          <h5>Hello, I'm</h5>
          <h1>Clara Magaldi</h1>
          <h5 className="text-light">Software Developer</h5>
          <Cta />
          <HeaderSocials />
        </div>
        <div className="container header__container-right">
          <div className="me-image">
            <img src={ME} alt="me" />
          </div>
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
