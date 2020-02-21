import React from "react";
import "./button.scss";

const button = props => {
  return (
    <a href="#" className={props.classes}>
      {props.text}
    </a>
  );
};

export default button;
