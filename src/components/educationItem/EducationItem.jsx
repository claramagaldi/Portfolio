import React from "react";
import "../education/education.css";

const EducationItem = (props) => {
  return (
    <article key={props.id} className="education__item">
      {/* <div className="education__item-image">
        <img src={images[props.image]} alt={props.title} />
      </div> */}

      <h4 className="education__item-left">{props.title}</h4>
      <h5 className="education__item-right">{props.period}</h5>
      <a
        href={props.website}
        className="education__item-left"
        target="_blank"
        rel="noreferrer"
      >
        <h5>{props.local}</h5>
      </a>
      <h5 className="education__item-right"> {props.extra}</h5>
    </article>
  );
};

export default EducationItem;
