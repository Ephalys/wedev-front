import React, { Component } from "react";
import { Route, Router, withRouter, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./layout/Dashboard";
import Projects from "./pages/Projects";
import CreateProject from "./pages/Projects/create";
import CreateClient from "./pages/Clients/CreateClient";
import history from "./utils/history";
import IndexDashboard from "./components/IndexDashboard";
import CreateSprint from "./pages/Sprints/CreateSprint";
import DetailsProject from "./pages/Projects/ProjectDetails";

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/dashboard/:path?" exact>
          <Dashboard>
            <Switch>
              <Route path="/dashboard" exact component={IndexDashboard} />
              <Route path="/dashboard/projects" component={Projects} />
              <Route
                path="/dashboard/projects/create"
                component={CreateProject}
              />
              <Route path="/dashboard/client/create" component={CreateClient} />
              <Route
                exact
                path="/dashboard/detailsproject/:id"
                component={DetailsProject}
              />

              <Route
                exact
                path="/dashboard/detailsproject/createsprint/:id"
                component={CreateSprint}
              />
            </Switch>
          </Dashboard>
        </Route>

        <Route>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Route>
      </Router>
    );
  }
}

export default withRouter(Routes);
