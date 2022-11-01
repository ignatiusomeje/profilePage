import React from "react";
import share from './../../../assets/_Avatar share button.svg'
import dots from './../../../assets/dots-horizontal.svg'
import './Nav.css'

function Nav(){
  return (
    <div className="Nav">
      <a className="mobile">
        <img src={dots}  />
      </a>
      <a className= "desktop">
        <img src={share}  />
      </a>
    </div>
  )
}

export default Nav