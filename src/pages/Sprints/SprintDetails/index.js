import React, { Component } from "react";
import axios from "../../../axios-config";
import Input from "../../../components/Input";
import CreateTaskModal from "../../../components/CreateTaskModal/Modal";

class SprintDetails extends Component {
  state = {
    isDisabled: true,
    isOpen: false,
    newTask: {}
  };
  componentDidMount() {
    axios
      .get("/sprint/" + this.props.match.params.id, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(response => {
        this.setState({ sprint: response.data.sprint });
      });

    this.setState({ newTask: { sprint: this.props.match.params.id } });
  }

  onInputChangeTask = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmitTask = event => {
    event.preventDefault();

    axios
      .post(`/task`, this.state, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res.data);

        // const token = res.data.token;
        if ((res.status = 200)) {
          //user connecté
        }
      })
      .catch(err => {
        console.log(err.response.data.error);
      });
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    axios
      .post(`/task`, this.state.newTask, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response.data.error);
      });
    this.setState({ isOpen: false });
  };

  onChangeNewTask = event => {
    let newTask = this.state.newTask;

    newTask[event.target.name] = event.target.value;

    console.log(newTask);
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <CreateTaskModal
          show={this.state.isOpen}
          modalClosed={this.closeModal}
          changeValue={this.onChangeNewTask}
        />
        <h3>Sprint details</h3>
        <form>
          <Input
            nameField="title"
            label="Title"
            type="text"
            placeholder=""
            valueField={this.state.sprint ? this.state.sprint.title : ""}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
          <Input
            nameField="startDate"
            label="StartDate"
            type="text"
            placeholder=""
            valueField={this.state.sprint ? this.state.sprint.startDate : ""}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
          <Input
            nameField="endDate"
            label="EndDate"
            type="text"
            placeholder=""
            valueField={this.state.sprint ? this.state.sprint.endDate : ""}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
          <Input
            nameField="status"
            label="Status"
            type="text"
            placeholder=""
            valueField={this.state.sprint ? this.state.sprint.status : ""}
            changed={this.onInputChange}
            isDisabled={this.state.isDisabled}
          />
        </form>

        <button onClick={this.openModal}>Add Task</button>

        {/* <form>
          <Input
            nameField="title"
            label="Title"
            type="text"
            placeholder=""
            changed={this.onInputChangeTask}
          />
          <Input
            nameField="description"
            label="Description"
            type="text"
            placeholder=""
            changed={this.onInputChangeTask}
          />
          <Input
            nameField="status"
            label="Status"
            type="text"
            placeholder=""
            changed={this.onInputChangeTask}
          />
          <Input
            nameField="completionTime"
            label="CompletionTime"
            type="text"
            placeholder=""
            changed={this.onInputChangeTask}
          />
          <input
            onClick={this.handleSubmitTask}
            type="submit"
            value="Submit"
            className="btn btn__rounded btn__green btn__letter-spacing fwb"
          />
        </form> */}
      </div>
    );
  }
}

export default SprintDetails;
