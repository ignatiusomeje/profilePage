import React from "react";
import ladyimage from './../../../assets/lady_image_web.svg'
import cameraIcon from './../../../assets/camera-01.svg'
import './Image.css'

function Image () {
  return (
    <div className="header-img">
      <img src={ladyimage} id="profile__img" />
      <div className="Icon">
      <img src={cameraIcon}  />
      </div>
      
    </div>
  )
}
export default Image