import React from "react";
import "./footer.css";
import Socials from "../socials/Socials";

const Footer = () => {
  return (
    <footer id="">
      <a href="#" className="footer__logo">
        Clara Magaldi
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <Socials class="footer__socials" />
      <div className="footer__copyright">
        <small>&copy; Copyright Clara Magaldi {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};

export default Footer;
