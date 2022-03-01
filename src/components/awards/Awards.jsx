import React from 'react'
import "./awards.css";
import AwardsItem from "../awardsItem/AwardsItem";
import awardsGroupList from "../../assets/awards/awardsItemsList";

const Awards = () => {
  return (
    <section id="awards">
      <h4>What I won</h4>
      <h2>Honors and Awards</h2>
      <div className="container awards__container">
        {awardsGroupList.map((item) => (
          <AwardsItem key={item.id} id={item.id} title={item.title} from={item.from} date={item.date} website={item.website}/>
        ))}
      </div>
    </section>
  )
}

export default Awards
