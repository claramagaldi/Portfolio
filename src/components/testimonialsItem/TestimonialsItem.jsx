import React from "react";
import "../testimonials/testimonials.css";

const testimonialsItem = (props) => {
  // IMPORT ALL IMAGES -- START
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../../assets/testimonials", false, /\.(png|jpe?g|svg)$/)
  );
  // IMPORT ALL IMAGES -- END

  return (
    <article key={props.id} className="testimonial">
      <div className="client__avatar">
        <img src={images[props.image]} alt={props.title} />
      </div>
      <h5 className="clients__name">{props.title}</h5>
      <small className="clients__review">{props.description}</small>
    </article>
  );
};

export default testimonialsItem;
