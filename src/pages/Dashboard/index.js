import React, { Component } from "react";
import "./dashboard.scss";
import Sidebar from "../../components/Sidebar";
// import Routes from "../../Routes";
import { Route } from "react-router-dom";
import IndexDashboard from "../../components/IndexDashboard";
import NavBar from "../../components/NavBar";


class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <NavBar />
        <div>
          <Sidebar />
          <div className="dashboard__content">
            <Route path="/" component={IndexDashboard} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
