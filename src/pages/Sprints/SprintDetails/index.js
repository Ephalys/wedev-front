import React, { Component } from "react";
import axios from "../../../axios-config";
import Input from "../../../components/Input";
import CreateTaskModal from "../../../components/CreateTaskModal/Modal";
import UpdateTaskModal from "../../../components/updateTaskModal/Modal";
import "./sprint-details.scss";
import Select from "../../../components/Select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPencilAlt, faCheck, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import history from "../../../utils/history";

const statusList = [
  { value: "en_cours", label: "En cours" },
  { value: "termine", label: "Terminé" },
  { value: "a_faire", label: "A faire" }
];

class SprintDetails extends Component {
  state = {
    isDisabled: true,
    isOpenAddTaskModal: false,
    isOpenUpdateTaskModal: false,
    newTask: {},
    updateTask: {}
  };
  componentDidMount() {
    this.getSprint();
  }

  getSprint = () => {
    axios
      .get("/sprint/" + this.props.match.params.id, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(response => {
        this.setState({
          sprint: response.data.sprint,
          newTask: { sprint: this.props.match.params.id }
        });
      });
  };

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
        this.getSprint();
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
        this.getSprint();
      })
      .catch(err => {
        console.log(err.response.data.error);
      });

    this.closeModal();
    this.getSprint();
  };

  handleSubmitSprint = event => {
    event.preventDefault();

    axios
      .patch(`/sprint/` + this.state.sprint.id, this.state.sprint, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res);
        this.getSprint();
        this.setState({ isDisabled: true });
      })
      .catch(err => {
        console.log(err.response.data.error);
      });

    this.closeModal();
    this.getSprint();
  };

  openCreateTaskModal = () => {
    this.setState({ isOpenAddTaskModal: true });
  };

  openUpdateTaskModal = (id, event) => {
    let newUpdateTask = this.state.sprint.Tasks.filter(el => {
      return el.id === id;
    });

    this.setState({
      updateTask: newUpdateTask[0],
      isOpenUpdateTaskModal: true
    });
  };

  closeModal = () => {
    this.setState({
      isOpenAddTaskModal: false,
      isOpenUpdateTaskModal: false,
      newTask: { sprint: this.props.match.params.id },
      updateTask: {}
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

    this.setState({ updateTask: newTask });
  };

  onSelectChangeNewTask = (event, name) => {
    let newTask = this.state.newTask;

    newTask[name] = event.value;

    this.setState({ newTask: newTask });
  };

  onSelectChangeSprint = (event, name) => {
    let sprint = this.state.sprint;

    sprint[name] = event.value;

    this.setState({ sprint: sprint });
  };

  onSelectChangeUpdateTask = (event, name) => {
    let newTask = this.state.updateTask;

    newTask[name] = event.value;

    this.setState({ updateTask: newTask });
  };

  deleteTask = id => {
    axios
      .delete(`/task/` + id, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res);
        this.getSprint();
      })
      .catch(err => {
        console.log(err.response.data.error);
      });
  };

  updateToggle = () => {
    this.setState({ isDisabled: false });
  };

  onInputChange = event => {
    let updatedSprint = this.state.sprint;

    updatedSprint[event.target.name] = event.target.value;

    this.setState({ sprint: updatedSprint });
    console.log(this.state);
  };

  onDateInputChange = event => {
    let sprint = this.state.sprint;
    let splitDate = event.target.value.split("-");

    sprint[
      event.target.name
    ] = `${splitDate[0]}-${splitDate[2]}-${splitDate[1]}`;

    this.setState({
      sprint: sprint
    });
  };

  handleDelete = () => {
    axios
      .delete("/sprint/" + this.props.match.params.id, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(response => {
        history.push("/dashboard/projects");
      });
  };

  handleEditionMod = () => {
    this.setState({ isDisabled: false });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .patch(`/sprint/` + this.state.sprint.id, this.state.sprint, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res);
        this.getSprint();
        this.setState({ isDisabled: true });
      })
      .catch(err => {
        console.log(err.response.data.error);
      });
  };

  formatDateFrtoUs = (date) => {
    const eDate = date.split('/');
    return `${eDate[2]}-${eDate[1]}-${eDate[0]}`;
  }

  formatDateFrtoEn = (date) => {
    const eDate = date.split('/');
    return `${eDate[1]}-${eDate[0]}-${eDate[2]}`;
  }

  formatDateEntoUs = (date) => {
    const eDate = date.split('/');
    return `${eDate[2]}-${eDate[0]}-${eDate[1]}`;
  }

  render() {
    let tasks = null;

    if (this.state.sprint) {
      tasks = this.state.sprint.Tasks.map((element, i) => {
        return (
          <div>
            <li
              className="task"
              key={i}
              onClick={e => this.openUpdateTaskModal(element.id, e)}
            >
              - {element.title}
            </li>
            <button onClick={() => this.deleteTask(element.id)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
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
        <div className="head">
          <h1>Sprint details</h1>
          {this.state.isDisabled ? (
            <div className="buttons">
              <div className="delete" onClick={this.handleDelete}>
                <FontAwesomeIcon icon={faTrashAlt} />
                <span>Delete</span>
              </div>
              <div className="edition" onClick={this.handleEditionMod}>
                <FontAwesomeIcon icon={faPencilAlt} />
                <span>Edit</span>
              </div>
            </div>
          ) : (
              <div className="edition" onClick={this.handleSubmit}>
                <FontAwesomeIcon icon={faCheck} />
                <span>Validate</span>
              </div>
            )}
        </div>
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
            valueField={this.state.sprint ? this.formatDateEntoUs(this.state.sprint.startDate) : ""}
            isDisabled={this.state.isDisabled}
            type="date"
            placeholder=""
            changed={this.onDateInputChange}
          />
          <Input
            nameField="endDate"
            label="EndDate"
            valueField={this.state.sprint ? this.formatDateEntoUs(this.state.sprint.endDate) : ""}
            isDisabled={this.state.isDisabled}
            type="date"
            placeholder=""
            changed={this.onDateInputChange}
          />
          <Select
            nameField="status"
            values={statusList}
            value={this.state.sprint ? this.state.sprint.status : ""}
            label="Status"
            changed={this.onSelectChangeSprint}
          />
        </form>
        <div className="tasks">
          <div className="tasks__header">
            <h2>Tasks</h2>
            <a onClick={this.openCreateTaskModal}>
              <FontAwesomeIcon icon={faPlus} /> Create a new task
            </a>
          </div>
          <div className="tasks__list">{tasks}</div>
        </div>
      </div>
    );
  }
}

export default SprintDetails;
