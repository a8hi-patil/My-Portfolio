import React from "react";
import "./Contact.css";
import { BsLinkedin } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { GrInstagram } from "react-icons/gr";
import { FaMobileAlt } from "react-icons/fa";
function Contact() {
  return <section id="contact">
    <h5>My Contact Information</h5>
    <h2>My Contact</h2>
    <div className="container experience__container ">
      <div className="experience__frontend">
        <h3>My Contact</h3>
        <div >
          <div >
            <a href="https://www.linkedin.com/in/the-abhijit-patil/" target="_blank">
              <BsLinkedin />  : LinkdIn
            </a>
            <br /><br />
            <a href="https://github.com/a8hi-patil/" target="_blank">
              <VscGithub />  : GitHub
            </a>
            <br /><br />
            <a href="insta" target="_blank">
              <GrInstagram /> : Instagram
            </a> <br /> <br />
            <a href="insta" target="_blank">
              <FaMobileAlt /> : + 91 9156212631
            </a>
          </div>
        </div>
      </div>


      <div className="experience__frontend">
        <h3>Contact Me</h3>
        <div className="project__content form">

          <form action="#">
            <label htmlFor="Name">Name</label><br />
            <input type="text" /><br />
            <label htmlFor="Name">Email</label><br />
            <input type="email" /><br />
            <button className="btn btn-primary" >Contact Me</button>
          </form>

        </div>
      </div>
    </div>

  </section>;
}

export default Contact;
