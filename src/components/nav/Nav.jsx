import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBookmarksFill } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";
import { useState } from "react";
function Nav() {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => {
          setActive("#");
        }}
        className={active === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActive("#about");
        }}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a href="#experiance" onClick={() => {
        setActive("#experiance");
      }} className={active === "#experiance" ? "active" : ""}>
        <BsBookmarksFill />
      </a>
      <a href="#projects" onClick={() => {
        setActive("#projects");
      }} className={active === "#projects" ? "active" : ""}>
        <MdOutlineDesignServices />
      </a>
      <a href="#contact" onClick={() => {
        setActive("#contact");
      }} className={active === "#contact" ? "active" : ""}>
        <MdOutlineContactPage />
      </a>
    </nav>
  );
}

export default Nav;
