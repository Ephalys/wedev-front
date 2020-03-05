import React, { Component } from "react";
import axios from "axios";
import Project from "./Project";

class Projects extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    axios
      .get("https://4bd2d8e5.ngrok.io/project", {
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
        />
      );
    });
    // let projects = null;

    // if (this.state.data) {
    //   projects = (
    //     <div>
    //       <Projects projects={this.state.data} />
    //     </div>
    //   );
    // }

    return (
      <div>
        <div>Projects</div>
        {projects}
      </div>
    );
  }
}

export default Projects;
