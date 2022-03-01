import React from "react";
import "../work/work.css";

const WorkItem = (props) => {
  return (
    <article key={props.id} className="work__item">
      {/* <div className="education__item-image">
        <img src={images[props.image]} alt={props.title} />
      </div> */}

      <h4 className="work__item-left">{props.title}</h4>
      <h5 className="work__item-right">{props.period}</h5>
      <a
        href={props.website}
        className="work__item-left"
        target="_blank"
        rel="noreferrer"
      >
        <h5>{props.local}</h5>
      </a>
      <p className="work__item-p"> {props.desc}</p>
    </article>
  );
};

export default WorkItem;
