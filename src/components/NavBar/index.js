import React, { Component } from 'react';
import './navbar.scss';
import history from "../../utils/history";
import logo from "../../assets/images/logo.svg";

class NavBar extends Component {
  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    history.push('/');
  }

  render() {
    let firstName = (JSON.parse(localStorage.getItem('user'))).firstName,
      lastName = (JSON.parse(localStorage.getItem('user'))).lastName;

    let userTypeArray = [];
    userTypeArray['back'] = 'Back-End';
    userTypeArray['front'] = 'Front-End';
    userTypeArray['data_analyst'] = 'Data Analyst';
    userTypeArray['qa'] = 'QA';

    return (
      <nav className="navbar">
        <div className="navbar__left">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__right">
          <div className="infos">
            <span className="name">{firstName} {lastName}</span>
            <span className="work">{userTypeArray[(JSON.parse(localStorage.getItem('user'))).profile]}</span>
          </div>
          <div className="logout">
            <div className="logout__btn" onClick={this.logout}>
              <span className="logout__btn-text">Logout</span>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;