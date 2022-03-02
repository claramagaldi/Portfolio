import React from "react";
import "../work/work.css";

const WorkItem = (props) => {
  // IMPORT ALL IMAGES -- START
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../../assets/work", false, /\.(png|jpe?g|svg)$/)
  );
  // IMPORT ALL IMAGES -- END

  return (
    <article key={props.id} className="work__item">
      <h4 className="work__item-left">{props.title}</h4>
      <h5 className="work__item-right">{props.period}</h5>
      <a
        href={props.website}
        className="work__item-left workLocal"
        target="_blank"
        rel="noreferrer"
      >
        <h5 className="work__item-company">
          {props.local}{" "}
          <div className="work__item-image">
            <img
              src={images[props.image]}
              alt={props.title}
            />
          </div>
        </h5>
      </a>
      <p className="work__item-p"> {props.desc}</p>
    </article>
  );
};

export default WorkItem;
