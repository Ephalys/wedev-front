import React, { Component } from "react";
import Socials from "../../components/Socials";
import "./hero.scss";

class Index extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__main"></div>
        <div className="hero__footer">
          <Socials theme="dark" />
        </div>
      </div>
    );
  }
}

export default Index;
