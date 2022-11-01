import React from "react";
import Image from "./image/Image";
import  "./Header.css";
import Nav from "./nav/Nav";

function Header(props) {
  return (
    <div className="Header">
      <Nav />
      <Image name={props.user} />
    </div>
  );
}

export default Header;
