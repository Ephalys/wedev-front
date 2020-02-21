import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Presentation from "./components/Presentation";
import Header from "./layout/Header";

export class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Header} />
        <Route exact path="/presentation" component={Presentation} />
      </div>
    );
  }
}

export default withRouter(Routes);
