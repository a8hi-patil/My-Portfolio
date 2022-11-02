import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { GrInstagram } from "react-icons/gr";

export const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="linkdin" target="_blank">
        <BsLinkedin />
      </a>
      <a href="github" target="_blank">
        <VscGithub />
      </a>
      <a href="insta" target="_blank">
        <GrInstagram />
      </a>
    </div>
  );
};
