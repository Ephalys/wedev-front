import React, { Component } from "react";
import Input from "../../../components/Input";
import axios from "../../../axios-config";

class CreateSprint extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.match.params.id);
  }

  componentDidMount() {
    this.setState({ project: this.props.match.params.id });
  }

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post(`/sprint`, this.state, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
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
        <div>CreateSprint</div>
        <form>
          <Input
            nameField="title"
            label="Title"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <Input
            nameField="startDate"
            label="startDate"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <Input
            nameField="endDate"
            label="endDate"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <Input
            nameField="status"
            label="status"
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

export default CreateSprint;
