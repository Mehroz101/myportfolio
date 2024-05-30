import React from "react";
import "../Intro/intro.css";
import profile from "../../assets/profilepic.jpg";
// import { Link } from "react-scroll";
const Intro = () => {
  return (
    <>
      <section id="intro">
        <div className="container">
          <div className="left">
            <span className="helo">Hello</span>
            <h1>
              I'm <span className="name">Mehroz</span> Website Developer
            </h1>
            <p>
              Creative web designer and developer crafting visually stunning,
              responsive websites to enhance user experience and drive
              engagement.
            </p>
            {/* <Link> */}
              
                <button>Get Started</button>
             
            {/* </Link> */}
          </div>
          <div className="right">
            <img src={profile} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
