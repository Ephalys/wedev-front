import React, { Component } from "react";
import Client from "./Client";
import axios from "../../axios-config";
import "./clients.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Lottie } from '@crello/react-lottie'
import animationData from '../../utils/loading-black-dots.json';

class Clients extends Component {
  state = {
    clients: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get(`/client`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(response => {
        console.log(response.data);
        this.setState({ clients: response.data.clients });
        this.setState({loading: false})
      });
  }

  tableau = Object.keys(this.state);

  render() {
    let clients = null;
    console.log(this.state);
    const loaderOption = { animationData: animationData, loop: true };
    clients = this.state.clients.map((el, index) => {
      return (
        <Client
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
      <div className="clients">
        <div className="clients__header">
          <h1>Clients</h1>
          <a href="/dashboard/clients/create">
            <FontAwesomeIcon icon={faPlus} /> Create a new client
          </a>
        </div>
        {this.state.loading ? (
            <Lottie
            config={loaderOption}
            height={150}
            className="loader"
        />) : (clients)}
      </div>
    );
  }
}

export default Clients;
