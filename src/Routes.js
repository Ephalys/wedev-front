import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects/Projects";
import CreateProject from "./pages/Projects/create";
import CreateClient from "./pages/Clients/CreateClient";
import CreateSprint from "./pages/Sprints/CreateSprint";

class Routes extends Component {
  render() {
    const isLoggedIn = true;
    return (
      <div>
        {isLoggedIn ? (
          <Route exact path="/" component={Dashboard} />
        ) : (
          <Route exact path="/" component={Home} />
        )}

        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/projects" component={Projects} />

        <Route exact path="/projects/create" component={CreateProject} />
        <Route exact path="/client/create" component={CreateClient} />
        <Route
          exact
          path="/project/:id/createsprint"
          component={CreateSprint}
        />
      </div>
    );
  }
}

export default withRouter(Routes);
