import React, { Component } from "react";
import "./header.scss";
import Button from "../../components/Button";
import logo from "../../assets/images/logo.svg";
import "../../assets/sass/global.scss";
class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="logo" className="header__img" />
        <Button
          classes="btn btn__black btn__large btn__rounded btn__letter-spacing fwb"
          text="Login"
          href="/login"
        />
      </header>
    );
  }
}

export default Header;
