import React, { Component } from "react";
import axios from "../../../axios-config";
import Input from "../../../components/Input";
import CreateTaskModal from "../../../components/CreateTaskModal/Modal";
import UpdateTaskModal from "../../../components/updateTaskModal/Modal";

class SprintDetails extends Component {
  state = {
    isDisabled: true,
    isOpenAddTaskModal: false,
    isOpenUpdateTaskModal: false,
    newTask: {},
    updateTask: {}
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
      .post(`/task`, this.state.newTask, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response.data.error);
      });

    this.closeModal();
  };

  openCreateTaskModal = () => {
    this.setState({ isOpenAddTaskModal: true });
  };

  openUpdateTaskModal = () => {
    this.setState({ isOpenUpdateTaskModal: true });
  };

  closeModal = () => {
    this.setState({
      isOpenAddTaskModal: false,
      isOpenUpdateTaskModal: false,
      newTask: {}
    });
  };

  onChangeNewTask = event => {
    let newTask = this.state.newTask;

    newTask[event.target.name] = event.target.value;

    console.log(newTask);
  };

  onChangeUpdateTask = event => {};

  render() {
    console.log(this.state);

    let tasks = null;

    if (this.state.sprint) {
      tasks = this.state.sprint.Tasks.map((element, i) => {
        return (
          <li key={i} onClick={this.openUpdateTaskModal}>
            {element.title}
          </li>
        );
      });
    }

    return (
      <div>
        <UpdateTaskModal
          show={this.state.isOpenUpdateTaskModal}
          modalClosed={this.closeModal}
          changeValue={this.onChangeNewTask}
          addTask={this.handleSubmitTask}
        />
        <CreateTaskModal
          show={this.state.isOpenAddTaskModal}
          modalClosed={this.closeModal}
          changeValue={this.onChangeNewTask}
          addTask={this.handleSubmitTask}
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

        <ul>
          <label>Taches :</label>
          {tasks}
        </ul>

        <button onClick={this.openCreateTaskModal}>Add Task</button>

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
