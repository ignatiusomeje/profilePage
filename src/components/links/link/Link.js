import React from "react";
import "./Link.css";

function Link(props) {
  return (
    <a href={props.link} className="Link" id={props.id}>
      <h2>{props.head}</h2>
      <p>{props.desc}</p>
    </a>
  );
}
export default Link;
