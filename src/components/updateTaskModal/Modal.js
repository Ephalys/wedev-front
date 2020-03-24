import React, { Component } from "react";
import "./Modal.scss";
import Backdrop from "../Backdrop/Backdrop";
import Input from "../Input";
import Select from "../Select";

const statusList = [
  { value: "en_cours", label: "En cours" },
  { value: "termine", label: "Terminé" },
  { value: "a_faire", label: "A faire" }
];

class UpdateTaskModal extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.show !== this.props.show;
  // }

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
            <Select
              nameField="status"
              values={statusList}
              label="Status"
              changed={this.props.changeSelect}
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
