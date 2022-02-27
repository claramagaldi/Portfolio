import React from "react";

const PortfolioItem = (props) => {
  
  // IMPORT ALL IMAGES -- START
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../../assets/portfolio", false, /\.(png|jpe?g|svg)$/)
  );
  // IMPORT ALL IMAGES -- END

  return (
    <article key={props.id} className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={images[props.image]} alt={props.title} />
      </div>
      <h3>{props.title}</h3>
      <div className="portfolio__item-cta">
        <a href={props.github} className="btn" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href={props.demo}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default PortfolioItem;
