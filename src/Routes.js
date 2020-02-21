import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";

export class Routes extends Component {
  render() {
    return <div>
      {<Route exact path="/" component={Home} />}
      {<Route exact path="/login" component={Login} />}
      {<Route exact path="/register" component={Register} />}
    </div>;
  }
}

export default withRouter(Routes);
