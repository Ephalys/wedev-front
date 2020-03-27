import React, { Component } from "react";
import "./sprint.scss";

class Sprint extends Component {
  render() {
    return (
        <a
            className="sprint"
            href={`/dashboard/detailssprint/${this.props.id}`}
        >
          <div className="sprint__header">
            <strong><p>{this.props.title}</p></strong>
            <p>{this.props.status}</p>
          </div>
          <div className="sprint__body">
            <p>{this.props.startDate} — {this.props.endDate}</p>
          </div>
        </a>
    );
  }
}

export default Sprint;
