import React from "react";
import share from './../../../assets/_Avatar share button.svg'
import './Nav.css'

function Nav(){
  return (
    <div className="Nav">
      <a>
        <img src={share} />
      </a>
    </div>
  )
}

export default Nav