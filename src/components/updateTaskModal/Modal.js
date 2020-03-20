import React, { Component } from "react";
import "./Modal.scss";
import Backdrop from "../Backdrop/Backdrop";
import Input from "../Input";

class UpdateTaskModal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          <div>
            <Input
              nameField="title"
              label="Title"
              type="text"
              placeholder=""
              valueField={this.props.data.title}
              changed={this.props.changeValue}
            />
            <Input
              nameField="description"
              label="Description"
              type="text"
              placeholder=""
              valueField={this.props.data.description}
              changed={this.props.changeValue}
            />
            <Input
              nameField="status"
              label="Status"
              type="text"
              placeholder=""
              valueField={this.props.data.status}
              changed={this.props.changeValue}
            />
            <Input
              nameField="completionTime"
              label="CompletionTime"
              type="text"
              placeholder=""
              valueField={this.props.data.completionTime}
              changed={this.props.changeValue}
            />

            <button onClick={this.props.updateTask}>Update</button>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateTaskModal;
