import React from "react";
import ladyimage from "./../../../assets/lady_image_web.svg";
import cameraIcon from "./../../../assets/camera-01.svg";
import "./Image.css";

function Image(props) {
  return (
    <div className="imgSection">
      <div className="header-img">
        <img src={ladyimage} id="profile__img" alt="profile page" />
        <div className="Icon">
          <img src={cameraIcon} alt="Camera Icon" />
        </div>
      </div>
      <h2>{props.name}</h2>
    </div>
  );
}
export default Image;
