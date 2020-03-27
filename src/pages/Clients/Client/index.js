import React, { Component } from "react";
import "./client.scss";
class Client extends Component {
  render() {
    return (
      <div className="client" onClick={this.props.click}>
        <div className="client__header">
          <strong>
            <a href={`/dashboard/detailsclient/${this.props.id}`}>
              {this.props.name}
            </a>
          </strong>
          <p>{this.props.contactLastName} {this.props.contactFirstName}</p>
        </div>
      </div>
    );
  }
}

export default Client;
