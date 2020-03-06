import React, { Component } from "react";
import Input from "../../components/Input";
import "./login.scss";
import axios from "../../axios-config";
import verifyToken from "../../utils/verify_token";
import history from "../../utils/history";
import { Lottie } from '@crello/react-lottie'
import animationData from '../../utils/loader.json'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn : false,
      loading: false
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
    this.setState({ loading: true });
    return axios
        .post(`/login`, this.state)
        .then(res => {
          localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
          this.setState({ loading: false });
        })
         .then(() => {
           history.push('/dashboard');
         })
        .catch(err => {
          alert(err.response.data.error);
        });
  };

  render() {
    const loaderOption = {animationData: animationData, loop: true};
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
              <button
                  onClick={this.handleSubmit}
                  type="submit"
                  className="btn btn__rounded btn__green btn__letter-spacing fwb btn__with-loader"
              >
                {this.state.loading && (
                <Lottie
                    config={loaderOption}
                    height={30}
                    width={30}
                    className="loader__in-btn"/>
                )}
                Login
              </button>
            </form>
          </div>
        </div>
    );
  }
}

export default Login;
