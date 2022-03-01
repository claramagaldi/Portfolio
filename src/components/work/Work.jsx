import React from 'react'
import WorkItem from "../workItem/WorkItem";
import workGroupList from "../../assets/work/workItemsList";

const Work = (props) => {
  return (
    <section id="work">
      <h4>What I experienced</h4>
      <h2>Work History</h2>
      <div className="container work__container">
        {workGroupList.map((item) => (
          <WorkItem key={item.id} id={item.id} title={item.title} local={item.local} period={item.period} website={item.website} desc={item.desc}/>
        ))}
      </div>
    </section>
  )
}

export default Work
