import React, { Component } from "react";
import background from "../../assets/images/bg-img.png";
import "./Register.scss";
import Button from "../Button/index";

class Register extends Component {
  render() {
    return (
      <div
        className="register container"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="register__block">
          <h3 className="text-uppercase btn__letter-spacing">Offre de lancement</h3>
          <p className="fwb">
            inscrivez-vous et recevez prochainement un accès premium à
            l'application WeAreData
          </p>
          <Button
            classes="btn btn__green btn__bwr btn__large upr fwb"
            text="Je m'inscris"
            href="/register"
          />
        </div>
      </div>
    );
  }
}

export default Register;
