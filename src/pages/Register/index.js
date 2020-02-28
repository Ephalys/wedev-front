import React, { Component } from "react";
import Input from "../../components/Input";
import "./register.scss";
import Select from "../../components/Select";
import axios from 'axios';

const profileList = [
  { value: "back", label: "Back-end" },
  { value: "front", label: "Front-end" },
  { value: "data_analyst", label: "Data analyst" },
  { value: "QA", label: "QA" }
];

const companyStatus = [
  { value: "sas", label: "SAS" },
  { value: "SASU", label: "SASU" },
  { value: "autoentrepeneur", label: "Auto entrepreneur" },
  { value: "EURL", label: "EURL" },
  { value: "SARL", label: "SARL" }
];

class Register extends Component {

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      firstName: event.target.value,
    };

    axios.post(`http://10.92.4.45:3000/register`, { firstName: user.firstName })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
  };

  render() {
    console.log(
        this.state
    );
    return (
      <div className="register">
        <div className="register__form">
          <form action="">
            <h1>Register</h1>
            <Input
              nameField="firstName"
              label="Firstname"
              type="text"
              placeholder="John"
              changed={this.onInputChange}
            />
            <Input
              nameField="lastName"
              label="Lastname"
              type="email"
              placeholder="Doe"
              changed={this.onInputChange}
            />
            <Input
              nameField="plainPassword"
              label="Password"
              type="password"
              placeholder="Must have at least 6 characters"
              changed={this.onInputChange}
            />
            <Input
              nameField="phone"
              label="Phone"
              type="phone"
              placeholder="01 23 45 67 89"
              changed={this.onInputChange}
            />
            <Select nameField="profile"
                    values={profileList} label="Profile"
                    changed={this.onInputChange}
            />
            <Input
              nameField="companyName"
              label="Company name"
              type="phone"
              placeholder="WeDev"
              changed={this.onInputChange}
            />
            <Input
              nameField="companySiret"
              label="SIRET"
              type="phone"
              placeholder="example@gmail.com"
              changed={this.onInputChange}
            />
            <Select
              nameField="companyStatus"
              values={companyStatus}
              label="Company Status"
              changed={this.onInputChange}
            />
            <input
              type="submit"
              value="Register"
              className="btn btn__rounded btn__green btn__letter-spacing fwb"
              onClick={this.handleSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
