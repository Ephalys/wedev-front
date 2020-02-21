import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";

class Socials extends Component {
    render() {
        return (
            <div className={this.props.classes + 'socials'}>
                <a href="www.facebook.com" className="footer__content-socials-link">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="www.facebook.com" className="footer__content-socials-link">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="www.facebook.com" className="footer__content-socials-link">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>
        );
    }
}

export default Socials;