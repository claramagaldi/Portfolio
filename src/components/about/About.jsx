import React from "react";
import "./about.css";
import ME from "../../assets/about/me-about.jpeg";
import { FiAward } from "react-icons/fi";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import Cta from "./Cta";

const About = () => {
  return (
    <section id="about">
      <h4>Get To Know</h4>
      <h2>About Me</h2>
      <div className="container about__container">
        
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon"/>
              <h5>High Honours</h5>
              <small>College and University</small>
            </article>

            <article className="about__card">
              <FaGlobeAmericas className="about__icon"/>
              <h5>3 Idioms</h5>
              <small>Portuguese, English and Spanish</small>
            </article>

            <article className="about__card">
              <FaLaptopCode className="about__icon"/>
              <h5>Coding</h5>
              <small>Frontend, Backend, Database, Cloud</small>
            </article>
          </div>
          
          <p>
          Passionate about automation and efficiency, 
          I found programming a way to satisfy my desire to make life easier 
          and more practical. I completed the Software Engineering Technology 
          program at Centennial College where I was able to learn various 
          topics such as programming skills, frameworks/libraries, 
          database management, cloud and project management. 
          I am hardworking person, especially organized, with proven leadership and collaboration skills. 
          I highly value teamwork, as I believe the best growth occurs in collaborative environments..
          </p>
          <Cta />
          {/* <a href="#contact" className="btn btn-primary">
            Let's talk
          </a> */}
        </div>
      
      </div>
    </section>
  );
};

export default About;
