import React, { Component } from "react";
import "./project.scss";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

class Project extends Component {
  constructor(props) {
    super(props);
    console.log();
  }

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
        {this.BlogPost}
        <div>
          {/* <Link to={}>sprint</Link> */}
          <a href={("/project/createsprint/", this.props.id)}>sprint</a>
        </div>
      </div>
    );
  }
}

export default Project;
