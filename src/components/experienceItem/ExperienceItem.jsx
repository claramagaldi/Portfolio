import React from "react";
import { BiCheck } from "react-icons/bi";
import "../experience/experience.css";

const ExperienceItem = (props) => {
  return (
    <article key={props.id} className="experience__details">
      <BiCheck className="experience__details-icon" />
      <div>
        <h4>{props.name}</h4>
        {/* <small className="text-light">{props.level}</small> */}
      </div>
    </article>
  );
};

export default ExperienceItem;
