import React, { Component } from 'react';
import './navbar.scss';
import history from "../../utils/history";

class NavBar extends Component {
  logout = () => {
    let userMail = (JSON.parse(localStorage.getItem('user'))).mail;
    localStorage.setItem('mailAdress', userMail);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar__right">
          <div className="infos">
            <span className="name">CASSAR Kévin</span>
            <span className="work">Auto-entrepreuneur</span>
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