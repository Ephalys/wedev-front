import React, {Component} from 'react';
import ReactSelect from 'react-select'

class Select extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="">{this.props.label}</label>
                <ReactSelect
                    options={this.props.values}
                />
            </div>
        );
    }
}

export default Select;