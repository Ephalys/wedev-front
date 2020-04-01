import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import './DeleteButton.scss';

class DeleteButton extends Component {
    render() {
        return (
            <div className="delete" onClick={this.props.handleDelete}>
                <FontAwesomeIcon icon={faTrashAlt} /><span>Delete</span>
            </div>
        );
    }
}

export default DeleteButton;