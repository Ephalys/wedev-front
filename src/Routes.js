import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Presentation from "./components/Presentation";
import Header from "./layout/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

export class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </div>
    );
  }
}

export default withRouter(Routes);
