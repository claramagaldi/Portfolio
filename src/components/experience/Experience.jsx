import React from "react";
import "./experience.css";
import ExperienceGroup from "../experienceGroup/ExperienceGroup";
import experienceGroupList from "../../assets/experience/experienceGroupList";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {experienceGroupList.map((item) => (
          <ExperienceGroup key={item.id} id={item.id} title={item.title} class={item.class}/>
        ))}
      </div>
    </section>
  );
};

export default Experience;
