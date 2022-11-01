import React from "react";
import slack from "./../../assets/slack.svg";
import socialIcon from "./../../assets/Social icon.svg";
import './ImageSection.css'

function ImageSection() {
  return (
    <div className="ImageSection">
      <a href="#">
        <img src={slack} alt="ignatiusomeje153" />
      </a>
      <a href="https://github.com/mrexcel153">
        <img src={socialIcon} alt="github icon" />
      </a>
    </div>
  );
}

export default ImageSection;
