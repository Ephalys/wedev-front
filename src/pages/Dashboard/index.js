import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./dashboard.scss";
import Sidebar from "../../components/Sidebar";
import {Route} from "react-router-dom";
import IndexDashboard from "../../components/IndexDashboard";
import verifyToken from "../../utils/verify_token";
import NavBar from "../../components/NavBar";


class Dashboard extends Component {
    render() {
        return (
            <div>
                {verifyToken() ? (
                    <div className="dashboard">
        <NavBar />
        <div>
                        <Sidebar/>
                        <div className="dashboard__content">
                            <Route path="/dashboard" component={IndexDashboard}/>
                        </div>
                    </div>
        </div>
                ) : (
                    <Redirect to="/login"/>
                )
                }
            </div>
        );
    }
}
export default Dashboard;
