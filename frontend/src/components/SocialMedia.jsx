import React from "react";
import { links } from "../constants";

// import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { BsGithub, BsLinkedin } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div
      onClick={() => {
        window.open(links.github, "_blank");
      }}
    >
      <BsGithub />
    </div>
    {/* <div>
      <FaFacebookF />
    </div> */}
    <div
      onClick={() => {
        window.open(links.linkedin, "_blank");
      }}
    >
      <BsLinkedin />
    </div>
  </div>
);

export default SocialMedia;
