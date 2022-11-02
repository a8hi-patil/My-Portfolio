import React from "react";
import "./Experience.css";
import { TiHtml5 } from 'react-icons/ti'
import { FaCss3 } from 'react-icons/fa'
import { FaLinux } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
function Experience() {
  return <section id="experiance">
    <h5>The Skills I Have</h5>
    <h2>My Skills</h2>

    <div className="container experience__container ">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <TiHtml5 className="experience__details-icon" />
            <div>
              <h4>HTML</h4>
              <small className="text-light"  >Intermidiate</small></div>
          </article>
          <article className="experience__details">
            <FaCss3 className="experience__details-icon" />   <div>
              <h4>CSS</h4>
              <small className="text-light"  >Intermidiate</small></div>
          </article>
          <article className="experience__details">
            <SiJavascript className="experience__details-icon" />   <div>
              <h4>Java Script</h4>
              <small className="text-light"  >Intermidiate</small></div>
          </article>
          <article className="experience__details">
            <SiReact className="experience__details-icon" />   <div>
              <h4>React</h4>
              <small className="text-light"  >Intermidiate</small></div>
          </article>
        </div>
      </div>
      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <FaNodeJs className="experience__details-icon" />   <div>
              <h4>Node-JS</h4>
              <small className="text-light"  >Intermidiate</small></div>
          </article>
          <article className="experience__details">
            <SiMongodb className="experience__details-icon" />   <div>
              <h4>Mongo DB</h4>
              <small className="text-light"  >Intermidiate</small></div>
          </article>
          <article className="experience__details">
            <GrMysql className='experience__details-icon' />   <div>
              <h4>My SQL</h4>
              <small className="text-light"  >Intermidiate</small></div>
          </article>
          <article className="experience__details">
            <SiPython className="experience__details-icon" />   <div>
              <h4>Python</h4>
              <small className="text-light"  >Intermidiate</small></div>
          </article>
          <article className="experience__details">
            <FaLinux className="experience__details-icon" />   <div>
              <h4>Bash Scripting</h4>
              <small className="text-light"  >Intermidiate</small></div>
          </article>
        </div>
      </div>
    </div>
  </section>;
}

export default Experience;
