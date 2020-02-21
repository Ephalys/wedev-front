import React, {Component} from 'react';
import Input from "../../components/Input";
import './register.scss'
import Select from '../../components/Select'

const profileList = [
    { value: 'back', label: 'Back-end' },
    { value: 'front', label: 'Front-end' },
    { value: 'data_analyst', label: 'Data analyst' },
    { value: 'QA', label: 'QA' },
];

const companyStatus = [
    { value: 'sas', label: 'SAS' },
    { value: 'SASU', label: 'SASU' },
    { value: 'autoentrepeneur', label: 'Auto entrepreneur' },
    { value: 'EURL', label: 'EURL' },
    { value: 'SARL', label: 'SARL' },
];


class Register extends Component {
    render() {
        return (
            <div className="register">
                <div className="register__form">
                    <form action="">
                        <h1>Register</h1>
                        <Input label="Firstname" type="text" placeholder="John"/>
                        <Input label="Lastname" type="email" placeholder="Doe"/>
                        <Input label="Password" type="password" placeholder="Must have at least 6 characters"/>
                        <Input label="Phone" type="phone" placeholder="01 23 45 67 89"/>
                        <Select
                            values={profileList}
                            label="Profile"
                        />
                        <Input label="Company name" type="phone" placeholder="WeDev"/>
                        <Input label="SIRET" type="phone" placeholder="example@gmail.com"/>
                        <Select
                            values={companyStatus}
                            label="Company Status"
                        />
                        <input type="submit" value="Register" className="btn btn__rounded btn__green btn__letter-spacing fwb"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;