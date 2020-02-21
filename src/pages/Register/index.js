import React, {Component} from 'react';
import Input from "../../components/Input";
import './register.scss'

class Register extends Component {
    render() {
        return (
            <div className="register">
                <div className="register__form">
                    <form action="">
                        <h1>Register</h1>
                        <Input label="Mail" type="email" placeholder="example@gmail.com"/>
                        <Input label="Password" type="password" placeholder="Must have at least 6 characters"/>
                        <Input label="Password" type="password" placeholder="Must match the password"/>
                        <input type="submit" value="Register" className="btn btn__rounded btn__green btn__letter-spacing fwb"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;