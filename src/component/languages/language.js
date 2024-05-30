import React from "react";
import "./language.css";
import wordpress from "../../assets/wordpress.png";
import react from "../../assets/react.png";
import express from "../../assets/express.png";
import nodejs from "../../assets/nodejs.png";
import mongodb from "../../assets/mongodb.png";
import figma from "../../assets/figma.png";
import php from "../../assets/php.png";
import mysql from "../../assets/mysql.png";

const About = () => {
  return (
    <>
      <div id="language">
        <h1>What I Know</h1>
        <div className="languages">
          <div className="languageBox react">
            <img src={react} alt=""  />
            <span>react js</span>
          </div>
          <div className="languageBox nodejs">
            <img src={nodejs} alt=""  />
            <span>nodejs</span>
          </div>
          <div className="languageBox express">
            <img src={express} alt=""  />
            <span>express</span>
          </div>
          <div className="languageBox mongodb">
            <img src={mongodb} alt=""  />
            <span>mongodb</span>
          </div>
          <div className="languageBox php">
            <img src={php} alt=""  />
            <span>php</span>
          </div>
          <div className="languageBox mysql">
            <img src={mysql} alt="" />
            <span>mysql</span>
          </div>
          <div className="languageBox figma">
            <img src={figma} alt=""  />
            <span>figma</span>
          </div>
          <div className="languageBox wordpress">
            <img src={wordpress} alt=""  />
            <span>wordpress</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
