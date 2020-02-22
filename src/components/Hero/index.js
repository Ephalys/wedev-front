import React, { Component } from "react";
import Socials from "../Socials";
import Button from '../Button'
import heroBg from "../../assets/images/hero-bg.png";
import "./hero.scss";

class Index extends Component {
    render() {
        return (
            <div className="hero" style={{backgroundImage: `url(${heroBg})`}}>
                <div className="hero__main">
                    <div className="hero__title">
                        <h1>
                            Où que vous soyez<br/>
                            Restez <span className="fwb">Freelance</span>
                        </h1>
                        <Button
                            classes="btn btn__blue btn__large btn__rounded btn__letter-spacing fwb"
                            text="Inscrivez-vous"
                        />
                    </div>
                </div>
                <div className="hero__footer">
                    <Socials theme="dark" />
                    <Button
                        classes="btn btn__white btn__large btn__rounded btn__letter-spacing fwb"
                        text="Explore"
                    />
                </div>
            </div>
        );
    }
}

export default Index;
