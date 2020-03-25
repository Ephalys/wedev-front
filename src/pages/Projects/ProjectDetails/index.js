import React, { Component } from "react";
import axios from "../../../axios-config";
import Input from "../../../components/Input";
import Sprint from "../../Sprints/Sprint";
import "./project-details.scss";

class DetailsProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
      isDisabled: true
    };
  }

  componentDidMount() {
    axios
        .get("/project/" + this.props.match.params.id, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        })
        .then(response => {
          this.setState({ project: response.data.project });
        });
  }
  render() {
    console.log(this.state);

    let sprints = null;

    if (this.state.project.Sprints) {
      sprints = this.state.project.Sprints.map((element, i) => {
        return (
            <Sprint
                key={i}
                id={element.id}
                title={element.title}
                startDate={element.startDate}
                endDate={element.endDate}
                status={element.status}
            />
        );
      });
    }

    return (
        <div className="project__details">
          <h1>Aperçu du projet — {this.state.project.title}</h1>
          <div className="project__details-cards">
            <div className="project__details-block">
              <p className="label">
                Status
              </p>
              {this.state.project ? this.state.project.status : ""}
            </div>
            <div className="project__details-block">
              <p className="label">
                Stacks
              </p>
              {this.state.project ? this.state.project.stacks : ""}
            </div>
            <div className="project__details-block">
              <p className="label">
                Amount
              </p>
              {this.state.project ? this.state.project.amount : ""} €
            </div>
          </div>
          <form>
            <Input
                nameField="startDate"
                label="StartDate"
                type="text"
                placeholder=""
                valueField={this.state.project ? this.state.project.startDate : ""}
                changed={this.onInputChange}
                isDisabled={this.state.isDisabled}
            />
            <Input
                nameField="endDate"
                label="EndDate"
                type="text"
                placeholder=""
                valueField={this.state.project ? this.state.project.endDate : ""}
                changed={this.onInputChange}
                isDisabled={this.state.isDisabled}
            />
            <Input
                nameField="adr"
                label="hourly rate"
                type="text"
                placeholder=""
                valueField={this.state.project ? this.state.project.adr : ""}
                changed={this.onInputChange}
                isDisabled={this.state.isDisabled}
            />
          </form>

          <div className="sprintsList">{sprints}</div>
          <div>
            <a
                href={`/dashboard/detailsproject/createsprint/${this.props.match.params.id}`}
            >
              create sprint
            </a>
          </div>
        </div>
    );
  }
}

export default DetailsProject;
