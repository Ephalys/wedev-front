import React, { Component } from "react";
import "./input.scss";

class Input extends Component {
  render() {
    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        <input
          name={this.props.nameField}
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.valueField}
          onChange={event => {
            this.props.changed(event);
          }}
          disabled={this.props.isDisabled}
        />
      </div>
    );
  }
}

export default Input;
