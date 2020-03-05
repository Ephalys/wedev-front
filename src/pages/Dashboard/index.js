import React, { Component } from "react";
import "./dashboard.scss";
import Sidebar from "../../components/Sidebar";
// import Routes from "../../Routes";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Sidebar/>
        <div className="dashboard__content">
          <h1>Bienvenue sur la plateforme WeDev</h1>
        </div>
      </div>
    );
  }
}

export default Dashboard;
