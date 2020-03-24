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

  handleSubmitUpdateTask = event => {
    console.log(event.id);

    event.preventDefault();

    axios
      .patch(`/task/` + this.state.updateTask.id, this.state.updateTask, {
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

  openUpdateTaskModal = (id, event) => {
    let newUpdateTask = this.state.sprint.Tasks.filter(el => {
      return el.id === id;
    });

    this.setState({ updateTask: newUpdateTask[0] });

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
  };

  onChangeUpdateTask = event => {
    let newTask = this.state.updateTask;

    newTask[event.target.name] = event.target.value;
    console.log(this.state);

    // this.setState({ updateTask: newTask });
  };

  onSelectChangeNewTask = (event, name) => {
    let newTask = this.state.newTask;

    newTask[name] = event.value;

    this.setState({ newTask: newTask });
  };

  onSelectChangeUpdateTask = (event, name) => {
    let newTask = this.state.updateTask;

    newTask[name] = event.value;

    this.setState({ updateTask: newTask });
  };

  render() {
    console.log(this.state);

    let tasks = null;

    if (this.state.sprint) {
      tasks = this.state.sprint.Tasks.map((element, i) => {
        return (
          <li key={i} onClick={e => this.openUpdateTaskModal(element.id, e)}>
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
          changeValue={this.onChangeUpdateTask}
          updateTask={this.handleSubmitUpdateTask}
          data={this.state.updateTask}
          changeSelect={this.onSelectChangeUpdateTask}
        />
        <CreateTaskModal
          show={this.state.isOpenAddTaskModal}
          modalClosed={this.closeModal}
          changeValue={this.onChangeNewTask}
          addTask={this.handleSubmitTask}
          changeSelect={this.onSelectChangeNewTask}
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
      </div>
    );
  }
}

export default SprintDetails;
