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
      <div>
        <div>DetailsProject</div>
        <form>
          <Input
            nameField="title"
            label="Title"
            type="text"
            placeholder=""
            valueField={this.state.project ? this.state.project.title : ""}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
          <Input
            nameField="amount"
            label="Amount"
            type="text"
            placeholder=""
            valueField={this.state.project ? this.state.project.amount : ""}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
          <Input
            nameField="delay"
            label="Delay"
            type="text"
            placeholder=""
            valueField={this.state.project ? this.state.project.delay : ""}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
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
            nameField="status"
            label="Status"
            type="text"
            placeholder=""
            valueField={this.state.project ? this.state.project.status : ""}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
          <Input
            nameField="stacks"
            label="Stacks"
            type="text"
            placeholder=""
            valueField={this.state.project ? this.state.project.stacks : ""}
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
