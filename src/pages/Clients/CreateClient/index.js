import React, { Component } from "react";
import Input from "../../../components/Input";
import axios from "axios";

class CreateClient extends Component {
  state = {};

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // axios
    //   .post(`https://jiraf-back.herokuapp.com/register`, this.state)
    //   .then(res => {
    //     const token = res.data.token;
    //     if ((res.status = 200)) {
    //       //user connecté
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err.response.data.error);
    //   });
  };
  render() {
    console.log(this.state);

    return (
      <div>
        <label>create client</label>
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
            label="Adresse"
            type="text"
            placeholder=""
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
        </form>
      </div>
    );
  }
}

export default CreateClient;
