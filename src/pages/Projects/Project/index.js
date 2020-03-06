import React, { Component } from "react";
import "./project.scss";
import { Link } from "react-router-dom";

class Project extends Component {
  render() {
    return (
      <div className="project" onClick={this.props.click}>
        <p>{this.props.title}</p>
        <p>{this.props.amount}</p>
        <p>{this.props.delay}</p>
        <p>{this.props.startDate}</p>
        <p>{this.props.EndDate}</p>
        <p>{this.props.status}</p>
        <p>{this.props.stacks}</p>
        <p>{this.props.adr}</p>
        <p>{this.props.client}</p>
        <p>{this.props.user}</p>

        <div>
          <Link href="/project/createsprint">sprint</Link>
        </div>
      </div>
    );
  }
}

export default Project;
