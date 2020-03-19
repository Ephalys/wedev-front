import React, { Component } from "react";
import Project from "./Project";
import axios from "../../axios-config";
import './projects.scss';

class Projects extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    axios
        .get(`/project`, {
          headers: { Authorization: localStorage.getItem("token") }
        })
        .then(response => {
          console.log(response.data);
          this.setState({ projects: response.data.projects });
        });
  }

  tableau = Object.keys(this.state);

  render() {
    let projects = null;
    console.log(this.state);
    projects = this.state.projects.map((el, index) => {
      return (
          <Project
              key={index}
              title={el.title}
              amount={el.amount}
              delay={el.delay}
              startDate={el.startDate}
              endDate={el.endDate}
              status={el.status}
              adr={el.adr}
              client={el.client}
              user={el.user}
              id={el.id}
          />
      );
    });


    return (
        <div className="projects">
          <div className="projects__header">
            <h1>Projects</h1>
            <a href="/dashboard/projects/create">+ Create a new project</a>
          </div>
          {projects}
        </div>
    );
  }
}

export default Projects;
