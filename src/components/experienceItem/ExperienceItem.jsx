import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "../experience/experience.css";

const ExperienceItem = (props) => {
  return (
    <article key={props.id} className="experience__details">
      <BsPatchCheckFill className="experience__details-icon" />
      <div>
        <h4>{props.name}</h4>
        <small className="text-light">{props.level}</small>
      </div>
    </article>
  );
};

export default ExperienceItem;
