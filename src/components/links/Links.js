import React from "react";
import Link from "./link/Link";

function Links(props) {
  return props.info.map((link) => (
    <Link link={link.url} head={link.heading} desc={link.description} key={props.id} />
  ));
}

export default Links;
