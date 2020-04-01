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
    clients: null,
  };

  componentDidMount() {
    axios
      .get(`/client/all`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(response => {
        this.setState({ clients: response.data.clients });
      });
  }

  render() {
    return (
      <div className="clients">
        <div className="clients__header">
          <h1>Clients</h1>
          <a href="/dashboard/client/create">
            <FontAwesomeIcon icon={faPlus} /> Create a new client
          </a>
        </div>
        {!this.state.clients ? ( 
          <Lottie
            config={{ animationData: animationData, loop: true }}
            height={150}
            className="loader"
          />
        ) : (
            this.state.clients.map((el, index) => {
              return (
                <Client
                  key={index}
                  name={el.name}
                  address={el.address}
                  contactFirstName={el.contactFirstName}
                  contactLastName={el.contactLastName}
                  phone={el.phone}
                  mail={el.mail}
                  id={el.id}
                />
              );
            })
          )}
      </div>
    );
  }
}

export default Clients;
