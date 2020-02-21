import React, {Component} from 'react';
import Input from "../../components/Input";
import './login.scss'

class Index extends Component {
    render() {
        return (
            <div className="login">
                <div className="login__form">
                    <form action="">
                        <h1>Login</h1>
                        <Input label="Mail" type="email" placeholder="example@gmail.com"/>
                        <Input label="Password" type="password" placeholder="Must have at least 6 characters"/>
                        <input type="submit" value="Login" className="btn btn__rounded btn__green btn__letter-spacing fwb"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Index;