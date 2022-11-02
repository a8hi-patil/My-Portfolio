import React from "react";
import "./Education.css";
import { TiHtml5 } from 'react-icons/ti'
import { FaCss3 } from 'react-icons/fa'
import { FaLinux } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
function Education() {
  return <section id="about">
    <h5>My Educational Background</h5>
    <h2>My Education</h2>
    <div className="container experience__container ">
      <div className="experience__frontend">
        <h3>Full Stack Devlopment</h3>
        <div className="project__content">
          <article className="experience__details">
            <div className="htmlcss-icon">
              <TiHtml5 className="experience__details-icon" />
            </div>
            <div>
              <h4>HTML</h4>
            </div>
          </article>
          <article className="experience__details">
            <div className="htmlcss-icon">

              <FaCss3 className="experience__details-icon" />
            </div>
            <div>
              <h4>CSS</h4>
            </div>
          </article>

          <article className="experience__details">
            <SiJavascript className="experience__details-icon" />   <div>
              <h4>Java Script</h4>
            </div>
          </article>
          <article className="experience__details">
            <SiReact className="experience__details-icon" />   <div>
              <h4>React</h4>
            </div>
          </article>
          <article className="experience__details">
            <FaNodeJs className="experience__details-icon" />   <div>
              <h4>Node-JS</h4>
            </div>
          </article>
          <article className="experience__details">
            <SiMongodb className="experience__details-icon" />   <div>
              <h4>Mongo DB</h4>
            </div>
          </article>

          <article className="experience__details">
            <SiPython className="experience__details-icon" />   <div>
              <h4>Python</h4>
            </div>
          </article>
        </div>
      </div>
      <div className="experience__backend">
        <h3>Mecahnical Engineering</h3>
        <div className="project__content">
          <article className="experience__details">
            <SiPython className="experience__details-icon" />   <div>
              <h4>B.E. Mechanical Engineering</h4>
              <p>CGPA : 9.63</p>
              <small>A. G. Patil Institute of Technology, Solapur</small>
            </div>
          </article>
          <article className="experience__details">
            <SiPython className="experience__details-icon" />   <div>
              <h4>Diploma Mechanical Engineering</h4>
              <p>Percentage : 84.64%</p>
              <small>P. V. Patil Institute of Technology, Budhgaon</small>
            </div>
          </article>
          <article className="experience__details">
            <SiPython className="experience__details-icon" />   <div>
              <h4>Secondary School Certificate</h4>
              <p>Percentage : 90.00%</p>
              <small>S. M. Highschool, Malgaon</small>
            </div>
          </article>

        </div>
      </div>
    </div>
  </section>;
}

export default Education;
