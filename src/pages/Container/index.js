import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import Routes from "../../Routes";
import "./container.scss";

class Container extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="component">
          <Routes />
        </div>
      </div>
    );
  }
}

export default Container;
