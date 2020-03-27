import React, { Component } from "react";
import axios from "../../../axios-config";
import Input from "../../../components/Input";
import history from "../../../utils/history";
import "./client-details.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faCheck, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class DetailsClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: [],
      isDisabled: true,
    };
  }

  onInputChange = event => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleEditionMod = () => {
    console.log(this.state);
    this.setState({ isDisabled: false });
  }

  handleSubmit = () => {
    const datas = {
      ['name']: this.state.name || this.state.client.name,
      ['address']: this.state.address || this.state.client.address,
      ['contactFirstName']: this.state.contactFirstName || this.state.client.contactFirstName,
      ['contactLastName']: this.state.contactLastName || this.state.client.contactLastName,
      ['phone']: this.state.phone || this.state.client.phone,
      ['mail']: this.state.mail || this.state.client.mail,
    };
    axios
      .patch('/client/' + this.props.match.params.id, datas, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then((response) => {
        this.setState({ isDisabled: true });
      });
  }

  handleDelete = () => {
    axios
    .delete('/client/' + this.props.match.params.id, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then((response) => {
      history.push('/dashboard/clients');
    });
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
    return (
      <div>
        <div className="client__header">
          <h1 className="title">Fiche Client — {this.state.client.name}</h1>
          {this.state.isDisabled ? (
            <div className="buttons">
              <div className="delete" onClick={this.handleDelete}>
                <FontAwesomeIcon icon={faTrashAlt} /><span>Delete</span>
              </div>
              <div className="edition" onClick={this.handleEditionMod}>
                <FontAwesomeIcon icon={faPencilAlt} /><span>Edit</span>
              </div>
            </div>
          ) : (
              <div className="edition" onClick={this.handleSubmit}>
                <FontAwesomeIcon icon={faCheck} onClick={this.handleSubmit} /><span>Validate</span>
              </div>
            )}
        </div>
        <form>
          <Input
            nameField="name"
            label="Name"
            type="text"
            placeholder=""
            valueField={typeof this.state.name !== "undefined" ? this.state.name : (this.state.client.name || "")}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
          <Input
            nameField="address"
            label="Address"
            type="text"
            placeholder=""
            valueField={typeof this.state.address !== "undefined" ? this.state.address : (this.state.client.address || "")}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
          <Input
            nameField="contactFirstName"
            label="Contact - Firstname"
            type="text"
            placeholder=""
            valueField={typeof this.state.contactFirstName !== "undefined" ? this.state.contactFirstName : (this.state.client.contactFirstName || "")}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
          <Input
            nameField="contactLastName"
            label="Contact - Lastname"
            type="text"
            placeholder=""
            valueField={typeof this.state.contactLastName !== "undefined" ? this.state.contactLastName : (this.state.client.contactLastName || "")}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
          <Input
            nameField="phone"
            label="Phone number"
            type="text"
            placeholder=""
            valueField={typeof this.state.phone !== "undefined" ? this.state.phone : (this.state.client.phone || "")}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
          <Input
            nameField="mail"
            label="Email"
            type="text"
            placeholder=""
            valueField={typeof this.state.mail !== "undefined" ? this.state.mail : (this.state.client.mail || "")}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
        </form>
      </div>
    );
  }
}

export default DetailsClient;
