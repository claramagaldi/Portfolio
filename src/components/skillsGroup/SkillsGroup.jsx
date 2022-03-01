import React from "react";
import SkillsItem from "../skillsItem/SkillsItem";
import skillsItemsList from "../../assets/skills/skillsItemsList";

const skillsBlock = (props) => {
  return (
    <div className="skills__group">
      <h3>{props.title}</h3>
      <div className="skills__content">
        {skillsItemsList
          .filter((item) => {
            return item.title === props.title;
          })
          .map((filteredItem) => (
            <SkillsItem
              key={filteredItem.id}
              id={filteredItem.id}
              name={filteredItem.name}
              level={filteredItem.level}
            />
          ))}
      </div>
    </div>
  );
};

export default skillsBlock;
