import React, {Component} from 'react';
import './footer.scss'
import Socials from "../../components/Socials";
import logoFooter from '../../assets/images/logo-footer.svg'

class Header extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__content">
                    <div className="footer__content-logo">
                        <img src={logoFooter} alt="logo-footer"/>
                    </div>
                    <div className="footer__content-copyright">
                        <p>copyright 2020</p>
                    </div>
                    <Socials classes="footer__content-"/>
                </div>
            </footer>
        );
    }
}

export default Header;