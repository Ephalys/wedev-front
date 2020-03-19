import React, { Component } from "react";
import axios from "../../../axios-config";
import Input from "../../../components/Input";

class DetailsProject extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

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
          />
        </form>
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
