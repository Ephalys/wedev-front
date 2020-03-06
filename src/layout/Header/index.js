import React, { Component } from "react";
import "./header.scss";
import Button from "../../components/Button";
import logo from "../../assets/images/logo.svg";
import "../../assets/sass/global.scss";
import verifyToken from "../../utils/verify_token";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="logo" className="header__img" />
        <Button
          classes="btn btn__black btn__large btn__rounded btn__letter-spacing fwb"
          text={verifyToken() ? 'dashboard' : 'login'}
          href={'/' + verifyToken() ? 'dashboard' : 'login'}
        />
      </header>
    );
  }
}

export default Header;
