import React, { Component } from "react";
import background from "../../assets/images/bg-img.png";
import "./Register.scss";
import Button from "../Button/index";

class Register extends Component {
  render() {
    return (
      <div
        className="Register"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="Container">
          <h3 className="upr btn__letter-spacing">Offre de lancement</h3>
          <p className="fwb">
            inscrivez-vous et recevez prochainement un accès premium à
            l'application WeAreData
          </p>
          <Button
            classes="btn btn__green btn__bwr btn__large upr fwb btn__std-width"
            text="Je m'inscris"
          ></Button>
        </div>
      </div>
    );
  }
}

export default Register;
