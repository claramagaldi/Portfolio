import React from "react";
import { BiCheck } from "react-icons/bi";
import "../skills/skills.css";

const SkillsItem = (props) => {
  return (
    <article key={props.id} className="skills__details">
      <BiCheck className="skills__details-icon" />
      <div>
        <h5>{props.name}</h5>
        {/* <small className="text-light">{props.level}</small> */}
      </div>
    </article>
  );
};

export default SkillsItem;
