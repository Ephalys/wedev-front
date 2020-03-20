import React, { Component } from "react";
import Project from "./Project";
import axios from "../../axios-config";
import "./projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Lottie } from '@crello/react-lottie'
import animationData from '../../utils/loading-black-dots.json';

class Projects extends Component {
  state = {
    projects: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get(`/project`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(response => {
        console.log(response.data);
        this.setState({ projects: response.data.projects });
        this.setState({loading: false})
      });
  }

  tableau = Object.keys(this.state);

  render() {
    let projects = null;
    console.log(this.state);
    const loaderOption = { animationData: animationData, loop: true };
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
          <a href="/dashboard/projects/create">
            <FontAwesomeIcon icon={faPlus} /> Create a new project
          </a>
        </div>
        {this.state.loading ? (
            <Lottie
            config={loaderOption}
            height={150}
            className="loader"
        />) : (projects)}
      </div>
    );
  }
}

export default Projects;
