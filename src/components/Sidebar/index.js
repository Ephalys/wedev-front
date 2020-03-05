import React, { Component } from "react";
import "./sidebar.scss";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        { name: "Dashboard", link: "/" },
        { name: "Create Project", link: "/projects/create" },
        { name: "Create client", link: "/client/create" },
        { name: "Fetch my projects", link: "/projects" },
        { name: "Log Out", link: "/logout" }
      ]
    };
  }
  render() {
    return (
      <div className="sidebar">
        <ul>
          {this.state.menu.map(function(item, i) {
            return (
              <li key={i}>
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
