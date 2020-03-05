import React, { Component } from "react";
import "./sidebar.scss";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: ["Dashboard", "Clients", "Blahblah"]
    };
  }
  render() {
    return (
      <div className="sidebar">
        <ul>
          {this.state.menu.map(function(item, i) {
            return (
              <li key={i}>
                <a href="">{item}</a>
              </li>
            );
          })}
          <li>
            <a href="/projects/create">Create Project</a>
          </li>
          <li>
            <a href="/projects"> Project</a>
          </li>
          <li>
            <a href="/client/create"> Create Client</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
