import React, { Component } from "react";
import "./project.scss";

class Project extends Component {
    render() {
        return (
            <div className="project" onClick={this.props.click}>
                <div className="project__header">
                    <strong><a href={`/dashboard/detailsproject/${this.props.id}`}>{this.props.title}</a></strong>
                    <p>{this.props.status}</p>
                </div>
                <p>{this.props.amount} €</p>
                <p>{this.props.delay}</p>
                <p>{this.props.startDate}</p>
                <p>{this.props.EndDate}</p>
                <p>{this.props.stacks}</p>
                <p>{this.props.adr}</p>
                <p>{this.props.client}</p>
                <p>{this.props.user}</p>
                {this.BlogPost}
            </div>
        );
    }
}

export default Project;
