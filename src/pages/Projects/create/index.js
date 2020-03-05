import React, { Component } from "react";
import Input from "../../../components/Input/index";
import axios from "../../../axios-config";

class Create extends Component {
  state = {};

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post(`/project`, this.state, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res.data);

        // const token = res.data.token;
        if ((res.status = 200)) {
          //user connecté
        }
      })
      .catch(err => {
        console.log(err.response.data.error);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <label>Create Project</label>
        <form>
          <Input
            nameField="title"
            label="Title"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <Input
            nameField="amount"
            label="Amount"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <Input
            nameField="delay"
            label="Delay"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />

          <Input
            nameField="startDate"
            label="StartDate"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />

          <Input
            nameField="endDate"
            label="EndDate"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <Input
            nameField="status"
            label="Status"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />

          <Input
            nameField="stacks"
            label="Stacks"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <Input
            nameField="adr"
            label="Adr"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <Input
            nameField="client"
            label="Le iencli"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <Input
            nameField="user"
            label="Le user"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <input
            onClick={this.handleSubmit}
            type="submit"
            value="Login"

            className="btn btn__rounded btn__green btn__letter-spacing fwb"
          />
        </form>
      </div>
    );
  }
}

export default Create;
