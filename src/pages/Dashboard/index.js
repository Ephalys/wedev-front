import React, { Component } from "react";
import "./dashboard.scss";
import Sidebar from "../../components/Sidebar";
import Routes from "../../Routes";
import { Route } from "react-router-dom";
import IndexDashboard from "../../components/IndexDashboard";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard__content">
          <Route path="/" component={IndexDashboard} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
