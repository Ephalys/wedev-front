import React, { Component } from "react";
import "./presentation.scss";
import icon1 from "../../assets/images/icon1.svg";
import icon2 from "../../assets/images/icon2.svg";
import icon3 from "../../assets/images/icon3.svg";
import icon4 from "../../assets/images/icon4.svg";
import "../../assets/sass/global.scss";
import { Element } from 'react-scroll'


class Presentation extends Component {
  render() {
    return (
        <Element className="presentation container" name="presentation">
          <p className="presentation__label fwb">Voici WeDev</p>
          <h2>Application de gestion de projet pour les dev</h2>
          <p className="presentation__text">
            Commodo aliqua consequat officia et aliqua sit enim eiusmod dolor in
            eu do. Aute elit ut Lorem dolor ea. Commodo velit nisi ex ut laboris
            aute dolor. Consectetur tempor sunt aliqua exercitation proident
            laboris culpa laborum mollit sint in ut officia velit. Id Lorem
            officia cillum in fugiat deserunt Lorem enim. Do Lorem commodo sunt
            reprehenderit ex in fugiat qui consectetur cillum ipsum. Mollit et
            magna consequat adipisicing irure quis amet.
          </p>
          <div className="presentation__icons">
            <div className="presentation__icons-block">
              <img alt="icon" src={icon1}/>
              <h4>Vos reporting centralisés</h4>
            </div>
            <div className="presentation__icons-block">
              <img alt="icon" src={icon2}/>
              <h4>Le suivi de vos activités en temps réel</h4>
            </div>
            <div className="presentation__icons-block">
              <img alt="icon" src={icon3}/>
              <h4>Un gain de temps pour le pilotage</h4>
            </div>
            <div className="presentation__icons-block">
              <img alt="icon" src={icon4}/>
              <h4>Des utilitaires pour votre dev</h4>
            </div>
          </div>
        </Element>
    );
  }
}

export default Presentation;
