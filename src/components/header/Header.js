import React from "react";
import Image from "./image/Image";
import headerStyle from './Header.css'
import Nav from "./nav/Nav";

function Header () {
  return (
    <div className="Header">
      <Nav />
     <Image />
    </div>
  )
}



export default Header;