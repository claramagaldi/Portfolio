import React from 'react'
import "./education.css";
import educationItemsList from "../../assets/education/educationItemsList"
import EducationItem from "../educationItem/EducationItem"

const Education = () => {
  return (
    <section id="education">
      <h4>Where I studied</h4>
      <h2>Education</h2>
      <div className="container education__container">
        {educationItemsList.map((item) => (
          <EducationItem key={item.id} id={item.id} title={item.title} local={item.local} period={item.period} extra={item.extra} website={item.website} />
        ))}
      </div>
    </section>
  )
}

export default Education
