import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Socials = (props) => {
  return (
    <div className={props.class}>
      <a
        href= {"https://www.linkedin.com/in/" + process.env.REACT_APP_LINKEDIN + "/"}
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href={"https://github.com/" + process.env.REACT_APP_GITHUB  + "/"}
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Socials;
