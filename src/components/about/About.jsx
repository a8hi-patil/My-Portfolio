import React from "react";
import "./About.css";
import ME2 from '../../assets/ME2.png'
import { CgAwards } from 'react-icons/cg'
import { FiUsers } from 'react-icons/fi'
import { RiFolderOpenFill } from 'react-icons/ri'

function About() {
  return (<section id="about">
    <h5>Get To Know</h5>
    <h2>About me</h2>


    <div className="container about_container" >
      <div className="about_me">
        <div className="about_me-image">
          <img src={ME2} alt="About Image" />
        </div>
      </div>
      <div className="about_content">
        <div className="about__cards">
          <article className="about__card" >
            <CgAwards className="about__icon" />
            <h5>Experiance</h5>
            <small>1.5+ Years Working</small>
          </article>
          <article className="about__card" >
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>Tata Motors</small>
          </article>
          <article className="about__card" >
            <RiFolderOpenFill className="about__icon" />
            <h5>Projects</h5>
            <small>20+ Completed</small>
          </article>

        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ratione autem facilis dicta, quidem fuga, nesciunt tempore commodi fugiat, reprehenderit natus nulla sequi exercitationem. Ut unde sit tenetur quod nisi?</p>

        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
  </section>)
}

export default About;
