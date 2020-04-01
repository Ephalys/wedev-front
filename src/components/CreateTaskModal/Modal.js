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

class CreateTaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = { statusValue: this.props.statusValue };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.statusValue !== prevState.statusValue) {
      return { statusValue: nextProps.statusValue };
    }
    else {
      return null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.statusValue !== this.props.statusValue) {
      this.setState({ statusValue: this.props.statusValue });
    }
  }

  render() {
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
              changed={this.props.changeValue}
            />
            <Input
              nameField="description"
              label="Description"
              type="text"
              placeholder=""
              changed={this.props.changeValue}
            />
            <Select
              nameField="status"
              values={statusList}
              value={this.props.statusValue}
              label="Status"
              changed={this.props.changeSelect}
            />
            <Input
              nameField="completionTime"
              label="CompletionTime"
              type="text"
              placeholder=""
              changed={this.props.changeValue}
            />
            <button className="btn btn__medium btn__green" onClick={this.props.addTask}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateTaskModal;
