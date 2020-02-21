import React, { Component } from "react";
import "./header.scss";
import Button from "../../components/Button";
import logo from "../../assets/images/logo.svg";

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="logo" />
        <Button value="Login"></Button>
      </header>
    );
  }
}

export default Header;
