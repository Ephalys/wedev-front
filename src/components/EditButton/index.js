import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import './EditButton.scss';

class EditButton extends Component {
    render() {
        return (
            <div className="edition" onClick={this.props.handleEdit}>
                <FontAwesomeIcon icon={faPencilAlt} />
                <span>
                    {this.props.validate ? 'Validate' : 'Edit'}
                </span>
            </div>
        );
    }
}

export default EditButton;