import React from "react";
import Zuri from "./../../assets/Zuri.Internship_Logo.svg";
import Ingrace from "./../../assets/I4G.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      {/* <hr /> */}
      <div className="Footer-link">
        <img src={Zuri} />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={Ingrace} />
      </div>
    </div>
  );
}

export default Footer;
