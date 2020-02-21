import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import './socials.scss'

class Socials extends Component {
    render() {
        return (
            <div className={'socials ' + this.props.theme}>
                <a href="www.facebook.com" className="socials-link">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="www.twitter.com" className="socials-link">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="www.linkedin.com" className="socials-link">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>
        );
    }
}

export default Socials;