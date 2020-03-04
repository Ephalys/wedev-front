import React, { Component } from "react";
import axios from "axios";

class Projects extends Component {
  componentDidMount() {
    axios
      .get("https://jiraf-back.herokuapp.com/project", {
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
