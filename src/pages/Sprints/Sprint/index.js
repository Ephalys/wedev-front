import React, { Component } from "react";
import "./sprint.scss";

class Sprint extends Component {
  render() {
    return (
      <div className="sprint">
        <p>{this.props.title}</p>
        <p>{this.props.startDate}</p>
        <p>{this.props.endDate}</p>
        <p>{this.props.status}</p>
      </div>
    );
  }
}

export default Sprint;
