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
import { Lottie } from '@crello/react-lottie'
import animationData from '../../../utils/loading-black-dots.json';


const statusList = [
  { value: "en_cours", label: "En cours" },
  { value: "termine", label: "Terminé" },
  { value: "a_faire", label: "A faire" }
];

class SprintDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      isOpenAddTaskModal: false,
      isOpenUpdateTaskModal: false,
      newTask: null,
      updateTask: {},
      sprint: null
    };
  }

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
        let sprint = response.data.sprint;
        sprint.startDate = this.formatDateFrtoUs(sprint.startDate);
        sprint.endDate = this.formatDateFrtoUs(sprint.endDate);
        this.setState({
          sprint: sprint,
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
        this.getSprint();
      })
      .catch(err => {
        console.log(err.response.data.error);
      });

    this.closeModal();
  };

  handleSubmitUpdateTask = event => {
    event.preventDefault();
    axios
      .patch(`/task/` + this.state.updateTask.id, this.state.updateTask, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        this.getSprint();
        this.closeModal();
      })
      .catch(err => {
        console.log(err.response.data.error);
      });
  };

  handleSubmitSprint = event => {
    event.preventDefault();

    axios
      .patch(`/sprint/` + this.state.sprint.id, this.state.sprint, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
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
    this.setState({ updateTask: newTask });
  };

  onChangeUpdateTask = event => {
    let newTask = this.state.updateTask;
    newTask[event.target.name] = event.target.value;
    this.setState({ updateTask: newTask });
  };

  onSelectChangeNewTask = (event, name) => {
    let newTask = this.state.newTask;
    newTask[name] = event.value;
    this.setState({ newTask: newTask });
  };

  onSelectChangeSprint = (event) => {
    let sprint = this.state.sprint;
    sprint[event.target.name] = event.target.value;
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
  };

  onDateInputChange = event => {
    let sprint = this.state.sprint;
    sprint[event.target.name] = event.target.value;
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
    let sprint = this.state.sprint;
    sprint['startDate'] = sprint.startDate ? this.formatDateUstoEn(sprint.startDate) : "";
    sprint['endDate'] = sprint.endDate ? this.formatDateUstoEn(sprint.endDate) : "";
    axios
      .patch(`/sprint/` + this.state.sprint.id, sprint, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        this.setState({ isDisabled: true });
        this.getSprint();
      })
      .catch(err => {
        console.log(err.response.data.error);
      });
  };

  formatDateFrtoUs = (date) => {
    const eDate = date.split('/');
    return `${eDate[2]}-${eDate[1]}-${eDate[0]}`;
  }

  formatDateUstoEn = (date) => {
    const eDate = date.split('-');
    return `${eDate[1]}-${eDate[2]}-${eDate[0]}`;
  }

  render() {
    return (
      <div>
        {!(!this.state.Tasks && !this.state.sprint) ? (
          <>
            <UpdateTaskModal
              show={this.state.isOpenUpdateTaskModal}
              modalClosed={this.closeModal}
              changeValue={this.onChangeUpdateTask}
              value={this.state.newTask.status}
              updateTask={this.handleSubmitUpdateTask}
              data={this.state.updateTask}
              statusValue={this.state.updateTask.status}
              changeSelect={this.onSelectChangeUpdateTask}
            />
            <CreateTaskModal
              show={this.state.isOpenAddTaskModal}
              modalClosed={this.closeModal}
              changeValue={this.onChangeNewTask}
              statusValue={this.state.newTask.status}
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
                valueField={this.state.sprint.title || ""}
                changed={this.onInputChange}
                isDisabled={this.state.isDisabled}
              />
              <Input
                nameField="startDate"
                label="StartDate"
                valueField={this.state.sprint.startDate || ""}
                isDisabled={this.state.isDisabled}
                type="date"
                placeholder=""
                changed={this.onDateInputChange}
              />
              <Input
                nameField="endDate"
                label="EndDate"
                valueField={this.state.sprint.endDate || ""}
                isDisabled={this.state.isDisabled}
                type="date"
                placeholder=""
                changed={this.onDateInputChange}
              />
              <Select
                nameField="status"
                values={statusList}
                value={this.state.sprint.status || ""}
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
              <div className="tasks__list">
                {
                  this.state.sprint.Tasks.map((element, i) => {
                    return (
                      <div>
                        <li className="task" key={i}>
                          <p className="task__title" onClick={e => this.openUpdateTaskModal(element.id, e)}><strong>{element.title}</strong></p>
                          <a href="#" onClick={() => this.deleteTask(element.id)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                          </a>
                        </li>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </>
        ) : (
            <Lottie
              config={{ animationData: animationData, loop: true }}
              height={150}
              className="loader"
            />
          )
        }
      </div>
    );
  }
}

export default SprintDetails;
