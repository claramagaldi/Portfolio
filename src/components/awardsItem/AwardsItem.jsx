import React from "react";
import { BiCheck } from "react-icons/bi";
import "../awards/awards.css";

const AwardsItem = (props) => {
  return (
    <article key={props.id} className="awards__details">
      <BiCheck className="awards__details-icon" />
      <div>
        <h5>{props.title}</h5>
        <small className="text-light">
          <a
            href={props.website}
            target="_blank"
            rel="noreferrer"
          >
            {props.from}
          </a>
          {" ‣ " + props.date}
        </small>
      </div>
    </article>
  );
};

export default AwardsItem;
