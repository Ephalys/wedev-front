import React, {Component} from 'react';
import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import logoFooter from '../../assets/images/logo-footer.svg'

class Header extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__content">
                    <div className="footer__content-logo">
                        <img src="logoFooter" alt="logo-footer"/>
                    </div>
                    <div className="footer__content-copyright">
                        <p>copyright 2020</p>
                    </div>
                    <div className="footer__content-socials">
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
                </div>
            </footer>
        );
    }
}

export default Header;