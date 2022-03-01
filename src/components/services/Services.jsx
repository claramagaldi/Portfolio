import React from "react";
import ServicesGroup from "../servicesGroup/ServicesGroup";
import "./services.css";
import servicesGroupList from "../../assets/services/servicesGroupList";

const Services = () => {
  return (
    <section id="services">
      <h4>What I offer</h4>
      <h2>Services</h2>
      <div className="container services__container">
        {servicesGroupList.map((item) => (
          <ServicesGroup key={item.id} id={item.id} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default Services;
