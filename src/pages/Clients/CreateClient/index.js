import React, { Component } from "react";
import Input from "../../../components/Input";
import axios from "../../../axios-config";
import history from "../../../utils/history";

class CreateClient extends Component {
  state = {};

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`/client`, this.state, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        if ((res.status = 200)) {
          history.push('/dashboard/clients');
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
        <h1>Create a client</h1>
        <form>
          <Input
            nameField="name"
            label="Name"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <Input
            nameField="address"
            label="Address"
            type="text"
            placeholder="Number, Street, City, Country..."
            changed={this.onInputChange}
          />
          <Input
            nameField="contactFirstName"
            label="ContactFirstName"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <Input
            nameField="contactLastName"
            label="ContactLastName"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <Input
            nameField="phone"
            label="Phone"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <Input
            nameField="mail"
            label="Mail"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <input
            onClick={this.handleSubmit}
            type="submit"
            value="Create"
            className="btn btn__rounded btn__green btn__letter-spacing fwb btn__medium"
          />
        </form>
      </div>
    );
  }
}

export default CreateClient;
