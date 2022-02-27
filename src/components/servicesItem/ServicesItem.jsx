import React from "react";
import { BiCheck } from "react-icons/bi";
import "../services/services.css";

const ServicesItem = (props) => {
  return (
        <li key={props.id}>
          <BiCheck className="service__list-icon" />
          <p>{props.description}</p>
        </li>
  );
};

export default ServicesItem;

