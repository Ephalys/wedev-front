import React, { Component } from "react";
import axios from "../../axios-config";

class Projects extends Component {
  componentDidMount() {
    axios
      .get(`/project`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(response => {
        console.log(response.data);
      });
  }
  render() {
    return <div>Projects</div>;
  }
}

export default Projects;
