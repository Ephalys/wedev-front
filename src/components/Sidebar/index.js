import React, { Component } from "react";
import "./sidebar.scss";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        { name: "Home", link: "/" },
        { name: "Dashboard", link: "/dashboard" },
        { name: "Projects", link: "/dashboard/projects" },
        { name: "Clients", link: "/dashboard/clients" },
        { name: "Create client", link: "/dashboard/client/create" },
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
