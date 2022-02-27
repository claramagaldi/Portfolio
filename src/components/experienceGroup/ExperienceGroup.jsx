import React from "react";
import ExperienceItem from "../experienceItem/ExperienceItem";
import experienceItemsList from "../../assets/experience/experienceItemsList";

const experienceBlock = (props) => {
  return (
    <div className={props.class}>
      <h3>{props.title}</h3>
      <div className="experience__content">
        {experienceItemsList
          .filter((item) => {
            return item.title === props.title;
          })
          .map((filteredItem) => (
            <ExperienceItem
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

export default experienceBlock;
