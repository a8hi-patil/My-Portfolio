import React from "react";
import "./Projects.css";
import { TiHtml5 } from 'react-icons/ti'
import { FaCss3 } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
function Projects() {
  return <section id="projects">
    <h5>The Projects I Have Build</h5>
    <h2>My Projects</h2>

    <div className="container experience__container ">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="project__content">
          <article className="experience__details">
            <div className="htmlcss-icon">
              <TiHtml5 className="experience__details-icon" />
              <FaCss3 className="experience__details-icon" />
            </div>

            <div>
              <h4>HTML & CSS</h4>
              <small className="text-light"  ><ol>
                <li>&gt;  My Small Portfolio</li>
                <li>&gt;  Calculator Design</li>
                <li>&gt;  University Website Design</li>
                <li>&gt;  E-Commerce Website</li>
                <li>&gt;  Web Developer Design Website</li>
              </ol></small></div>
          </article>

          <article className="experience__details">
            <SiJavascript className="experience__details-icon" />   <div>
              <h4>Java Script</h4>
              <small className="text-light"  > <ol>
                <li>&gt;  Calculator With- Color Theme</li>
                <li>&gt;  Count Down Timer</li>
                <li>&gt;  Dynamic- Clock</li>
                <li>&gt;  Google Keep Clone</li>
                <li>&gt;  Weather App</li>
              </ol> </small></div>
          </article>
          <article className="experience__details">
            <SiReact className="experience__details-icon" />   <div>
              <h4>React</h4>
              <small className="text-light"  > <ol>
                <li>&gt;  React My Portfoli</li>
                <li>&gt;  React Weather App</li>
                <li>&gt;  React Calculator</li>
                <li>&gt;  React Blog App</li>
              </ol> </small></div>
          </article>
        </div>
      </div>
      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="project__content">
          <article className="experience__details">
            <FaNodeJs className="experience__details-icon" />   <div>
              <h4>Node-JS</h4>
              <small className="text-light"  ><ol>
                <li>&gt;  Node-JS Blog App Backend</li>
                <li>&gt;  Node-JS REST API </li>
                <li>&gt;  Node-JS File Handling </li>
              </ol></small></div>
          </article>
          <article className="experience__details">
            <SiMongodb className="experience__details-icon" />   <div>
              <h4>Mongo DB</h4>
              <small className="text-light"  ><ol>
                <li>&gt;  CURD Operations</li>
                <li>&gt;  REST API with MongoDB</li>

              </ol></small></div>
          </article>

          <article className="experience__details">
            <SiPython className="experience__details-icon" />   <div>
              <h4>Python</h4>
              <small className="text-light"  ><ol>
                <li> &gt; DSA Problem</li>
                <li> &gt; Mail Automation Using Python </li>
              </ol></small></div>
          </article>

        </div>
      </div>
    </div>
  </section>;
}

export default Projects;
