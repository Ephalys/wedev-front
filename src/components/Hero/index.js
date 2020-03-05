import React, { Component } from "react";
import Socials from "../Socials";
import Button from '../Button'
import heroBg from "../../assets/images/hero-bg.png";
import "./hero.scss";
import { Link } from 'react-scroll'


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
                            href="/register"
                        />
                    </div>
                </div>
                <div className="hero__footer">
                    <Socials theme="dark" />
                    <Link
                        activeClass="active"
                        className="btn btn__white btn__large btn__rounded btn__letter-spacing fwb"
                        to="presentation"
                        spy={true}
                        smooth={true}
                        duration={500} >
                        Explore
                    </Link>
                </div>
            </div>
        );
    }
}

export default Index;
