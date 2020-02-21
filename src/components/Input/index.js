import React, {Component} from 'react';
import './input.scss'

class Input extends Component {
    render() {
        return (
            <div className="form-group">
                <label>{this.props.label}</label>
                <input type={this.props.type} placeholder={this.props.placeholder}/>
            </div>
        );
    }
}

export default Input;