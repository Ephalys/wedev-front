import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

export class Routes extends Component {
  render() {
    const isLoggedIn = false;
    return (
      <div>
        {isLoggedIn ? (
          <Route exact path="/" component={Dashboard} />
        ) : (
          <Route exact path="/" component={Home} />
        )}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </div>
    );
  }
}

export default withRouter(Routes);
