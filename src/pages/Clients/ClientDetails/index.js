import React, { Component } from "react";
import axios from "../../../axios-config";
import Input from "../../../components/Input";
import Sprint from "../../Sprints/Sprint";
import "./client-details.scss";

class DetailsClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: [],
      isDisabled: true
    };
  }

  componentDidMount() {
    axios
      .get("/client/" + this.props.match.params.id, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(response => {
        this.setState({ client: response.data.client });
      });
  }
  render() {
    console.log(this.state);

    let sprints = null;

    if (this.state.client.Sprints) {
      sprints = this.state.client.Sprints.map((element, i) => {
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
        <h1>Aperçu du projet — {this.state.client.title}</h1>
        <form>
          <Input
            nameField="title"
            label="Title"
            type="text"
            placeholder=""
            valueField={this.state.client ? this.state.client.title : ""}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
          <Input
            nameField="amount"
            label="Amount"
            type="text"
            placeholder=""
            valueField={this.state.client ? this.state.client.amount : ""}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
          <Input
            nameField="delay"
            label="Delay"
            type="text"
            placeholder=""
            valueField={this.state.client ? this.state.client.delay : ""}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
          <Input
            nameField="startDate"
            label="StartDate"
            type="text"
            placeholder=""
            valueField={this.state.client ? this.state.client.startDate : ""}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
          <Input
            nameField="endDate"
            label="EndDate"
            type="text"
            placeholder=""
            valueField={this.state.client ? this.state.client.endDate : ""}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
          <Input
            nameField="status"
            label="Status"
            type="text"
            placeholder=""
            valueField={this.state.client ? this.state.client.status : ""}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
          <Input
            nameField="stacks"
            label="Stacks"
            type="text"
            placeholder=""
            valueField={this.state.client ? this.state.client.stacks : ""}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
          <Input
            nameField="adr"
            label="hourly rate"
            type="text"
            placeholder=""
            valueField={this.state.client ? this.state.client.adr : ""}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
        </form>

        <div className="sprintsList">{sprints}</div>
        <div>
          <a
            href={`/dashboard/detailsclient/createsprint/${this.props.match.params.id}`}
          >
            create sprint
          </a>
        </div>
      </div>
    );
  }
}

export default DetailsClient;
