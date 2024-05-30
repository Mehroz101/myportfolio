import React from 'react'
import "./skill.css"
import ui from "../../assets/UIdesinger.png"
import web from "../../assets/websitedesigner.png"
import dev from "../../assets/websitedeveloper.png"
const Skill = () => {
  return (
    <>
        <section id="skill">
            <h1>What I do</h1>
            <p>I specialize in creating responsive, user-friendly websites, developing custom web 
            applications, optimizing website performance, and providing seamless UI/UX design to 
            elevate your digital presence and achieve your business goals.
            </p>
            <div className="skills">
                <div className="skill">
                <img src={ui} alt="" />
                <div className="skillText">
                    <h2>UI/UX Design</h2>
                    <p>I'm Expert in crafting intuitive and engaging UI / UX design solutions.</p>
                </div>
                </div>
                <div className="skill">
                <img src={web} alt="" />
                <div className="skillText">
                    <h2>Website Design</h2>
                    <p>Skilled in designing visually appealing and responsive websites for all.</p>
                </div>
                </div>
                <div className="skill">
                <img src={dev} alt="" />
                <div className="skillText">
                    <h2>Website Development</h2>
                    <p>Proficient in developing robust and efficient websites with clean code.</p>
                </div>
                </div>
                
            </div>
        </section>
    </>
  )
}

export default Skill