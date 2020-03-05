import React, { Component } from "react";
import axios from "axios";

class Projects extends Component {
  componentDidMount() {
    axios
      .get("https://4bd2d8e5.ngrok.io/project", {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(response => {
        console.log(response.data);
      });
  }
  render() {
    return <div>oui</div>;
  }
}

export default Projects;
