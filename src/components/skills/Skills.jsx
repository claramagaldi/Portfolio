import React from "react";
import "./skills.css";
import SkillsGroup from "../skillsGroup/SkillsGroup";
import skillsGroupList from "../../assets/skills/skillsGroupList";

const Skills = () => {
  return (
    <section id="skills">
      <h4>What I know</h4>
      <h2>My Skills</h2>
      <div className="container skills__container">
        {skillsGroupList.map((item) => (
          <SkillsGroup key={item.id} id={item.id} title={item.title}/>
        ))}
      </div>
    </section>
  );
};

export default Skills;
