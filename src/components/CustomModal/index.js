import React, { Component } from 'react';
import ReactModal from 'react-modal';
import './customModal.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

class CustomModal extends Component {
  render() {
    return (
      <ReactModal
        ariaHideApp={false}
        isOpen={this.props.isOpen}
        style={
          {
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: '60%'
            },
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      >
        <div className="modal__header">
          {this.props.title}
          <FontAwesomeIcon icon={faTimesCircle} onClick={this.props.closeModal} className="close" />
        </div>
        <div className="modal__content">
          {this.props.content}
        </div>
        <div className="modal__footer">
          <div className="validateForm" onClick={this.props.onValidateClick}>{this.props.validateText}</div>
        </div>
      </ReactModal>
    )
  }
}

export default CustomModal