import React from "react";
import {Link} from "react-router-dom";
import "./button.scss";

const button = props => {
  return (
    <Link to={props.href} className={props.classes}>
      {props.text}
    </Link>
  );
};

export default button;
