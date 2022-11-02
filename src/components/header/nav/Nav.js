import React from "react";
import share from './../../../assets/Avatar share button.svg'
import dots from './../../../assets/dots-horizontal.svg'
import './Nav.css'

function Nav(){
  return (
    <div className="Nav">
      <a className="mobile" href="#">
        <img src={dots} alt="share btn"  />
      </a>
      <a className= "desktop" href="#">
        <img src={share} alt="share btn" />
      </a>
    </div>
  )
}

export default Nav