import React, { Component } from "react";
import ReactSelect from "react-select";
import colors from "../../../src/assets/sass/colors.scss";

const customStyles = {
  indicatorsContainer: () => ({
    // none of react-select's styles are passed to <Control />
    backgroundColor: "#f1f1f1",
    borderColor: "transparent"
  }),
  control: provided => ({
    ...provided,
    // none of react-select's styles are passed to <Control />
    backgroundColor: "#f1f1f1",
    borderColor: "transparent",
    cursor: "pointer",
    fontSize: "11px",
    color: "1a9a9a9",
    "&:hover": {
      borderColor: "transparent"
    }
  })
};

class Select extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="form-group">
        <label htmlFor="">{this.props.label}</label>
        <ReactSelect
          name={this.props.nameField}
          styles={customStyles}
          theme={theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: colors.emeraud
            }
          })}
          options={this.props.values}
          value={typeof this.props.value !== "undefined" ? this.props.values.filter(option => option.value === this.props.value) : ""}
          onChange={event => {
            this.props.changed(event, this.props.nameField);
          }}
        />
      </div>
    );
  }
}

export default Select;
