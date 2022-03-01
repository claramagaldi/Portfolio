import React from "react";
import "./portfolio.css";
import PortfolioItem from "../portfolioItem/PortfolioItem";
import portfolioItemsList from "../../assets/portfolio/portfolioItemsList";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioItemsList.map((item) => (
          <PortfolioItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            github={item.github}
            demo={item.demo}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
