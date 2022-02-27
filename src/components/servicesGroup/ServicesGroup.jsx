import React from "react";
import ServicesItem from "../servicesItem/ServicesItem";
import servicesItemsList from "../../assets/services/servicesItemsList";
import "../services/services.css";

const ServicesGroup = (props) => {
  return (
    <article key={props.id} className="service">
      <div className="service__head">
        <h3>{props.title}</h3>
      </div>
      <div className="service__list">
        <ul>
          {servicesItemsList
            .filter((item) => {
              return props.title === item.title;
            })
            .map((filteredItem) => (
              <ServicesItem key={filteredItem.id} id={filteredItem.id} description={filteredItem.description} />
            ))}
        </ul>
      </div>
    </article>
  );
};

export default ServicesGroup;
