import React from "react";
import "./portfolio.css";
import port1 from "../../assets/Mehroz-Portfolio.png";
import port2 from "../../assets/portfolio-2.png";
import port3 from "../../assets/portfolio-3.png";
import port4 from "../../assets/portfolio-4.png";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio">
        <h1>My Portfolio</h1>
        <p>
          Explore my diverse portfolio showcasing innovative UI/UX designs,
          dynamic website projects, and custom web development solutions. Each
          project reflects my dedication to quality, creativity, and client
          satisfaction."
        </p>
        <div className="portofiloCard">
          <div className="card">
            <img src={port1} alt="" />
          </div>
          <div className="card">
            <img src={port2} alt="" />
          </div>
          <div className="card">
            <img src={port3} alt="" />
          </div>
          <div className="card">
            <img src={port4} alt="" />
          </div>
          <div className="card">
            <img src={port1} alt="" />
          </div>
          <div className="card">
            <img src={port2} alt="" />
          </div>
        </div>
        <button className="workBtn">see more</button>
      </div>
    </>
  );
};

export default Portfolio;
