import React, { Component } from "react";
import Input from "../../../components/Input";
import axios from "../../../axios-config";
import Select from "../../../components/Select";

const statusList = [
  { value: "en_cours", label: "En cours" },
  { value: "termine", label: "Terminé" },
  { value: "a_faire", label: "A faire" }
];

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

  onSelectChange = (event, name) => {
    this.setState({
      [name]: event.value
    });
  };

  onDateInputChange = event => {
    let splitDate = event.target.value.split("-");
    this.setState({
      [event.target.name]: `${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`
    });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <h1>Create a new sprint</h1>
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
            label="Start date"
            type="date"
            placeholder=""
            changed={this.onDateInputChange}
          />
          <Input
            nameField="endDate"
            label="End date"
            type="date"
            placeholder=""
            changed={this.onDateInputChange}
          />
          <Select
            nameField="status"
            values={statusList}
            label="Status"
            changed={this.onSelectChange}
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

export default CreateSprint;
