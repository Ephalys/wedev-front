import React, { Component } from "react";
import "./project.scss";

class Project extends Component {
  render() {
    return (
      <div className="project" onClick={this.props.click}>
        <div className="project__header">
          <strong>
            <a href={`/dashboard/detailsproject/${this.props.id}`}>
              {this.props.title}
            </a>
          </strong>
          <p>{this.props.status}</p>
        </div>
      </div>
    );
  }
}

export default Project;
