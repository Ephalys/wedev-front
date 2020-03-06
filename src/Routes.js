import React, { Component } from "react";
import { Router, Route, withRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects/Projects";
import CreateProject from "./pages/Projects/create";
import CreateClient from "./pages/Clients/CreateClient";
import verifyToken from "./utils/verify_token";
import history from "./utils/history";

class Routes extends Component {
    render() {
        console.log(verifyToken());
        return (
            <Router history={history}>
                {verifyToken() ? (
                    <Route path="/" component={Dashboard} />
                ) : (
                    <Route exact path="/" component={Home} />
                )}
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/projects" component={Projects} />

                <Route exact path="/projects/create" component={CreateProject} />
                <Route exact path="/client/create" component={CreateClient} />
            </Router>
        );
    }
}

export default withRouter(Routes);
