import React from "react";
import Zuri from "./../../assets/Zuri.Internship_Logo.svg";
import Ingrace from "./../../assets/I4G.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-link">
        <img src={Zuri} alt="Zuri" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={Ingrace} alt="Ingrace" />
      </div>
    </div>
  );
}

export default Footer;
