import React, { Component } from "react";
import Input from "../../components/Input";
import "./login.scss";
import axios from "../../axios-config";
import verifyToken from "../../utils/verify_token";
import history from "../../utils/history";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn : false
    };
    if(verifyToken()) {
      history.push('/');
    }
  }

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    return axios
      .post(`/login`, this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        history.push('/');
      })
      .catch(err => {
        alert(err.response.data.error);
      });
  };

  render() {
    return (
      <div className="login">
        <div className="login__form">
          <form action="">
            <h1>Login</h1>
            <Input
              nameField="mail"
              label="Mail"
              type="email"
              placeholder="example@gmail.com"
              changed={this.onInputChange}
            />
            <Input
              nameField="plainPassword"
              label="Password"
              type="password"
              placeholder="Must have at least 6 characters"
              changed={this.onInputChange}
            />
            <input
              onClick={this.handleSubmit}
              type="submit"
              value="Login"
              className="btn btn__rounded btn__green btn__letter-spacing fwb"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
