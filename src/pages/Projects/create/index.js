import React, { Component } from "react";
import Input from "../../../components/Input/index";
import axios from "../../../axios-config";
import Select from "../../../components/Select";
import history from "../../../utils/history";
import CustomModal from "../../../components/CustomModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCheck,
  faSpinner,
  faCoins,
  faTachometerAlt
} from "@fortawesome/free-solid-svg-icons";

const statusList = [
  { value: "en_cours", label: "En cours" },
  { value: "termine", label: "Terminé" },
  { value: "a_faire", label: "A faire" }
];

class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientList: null,
      project: {}
    };
  }

  onDateInputChange = event => {
    let splitDate = event.target.value.split("-");

    this.setState({
      [event.target.name]: `${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`
    });
  };

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onInputChangeGit = event => {
    let gitProject = this.state.project;
    gitProject[event.target.name] = event.target.value;
    this.setState({
      project: gitProject
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post(`/project`, this.state, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res.data);
        if ((res.status = 200)) {
          history.push("/dashboard/projects");
        }
      })
      .catch(err => {
        console.log(err.response.data.error);
      });
  };

  handleSubmitGithub = event => {
    event.preventDefault();
    axios
      .post(`/project/createFromRepository`, this.state.project, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res.data);
        if ((res.status = 200)) {
          history.push("/dashboard/projects");
        }
      })
      .catch(err => {
        console.log(err.response.data.error);
      });
  };

  onSelectChangeStatus = (event, name) => {
    this.setState({
      [name]: event.value
    });
  };

  onSelectChangeClient = event => {
    console.log(event);

    this.setState({
      client: event.value
    });
  };

  componentDidMount() {
    axios
      .get("/client/all", {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(response => {
        let clientTab = [];
        response.data.clients.map((el, i) => {
          console.log(el.mail);

          clientTab.push({
            label: `${el.name} - ${el.contactFirstName} ${el.contactLastName}`,
            value: el.mail
          });
        });
        this.setState({ clientList: clientTab });
      });
  }

  openModal = () => {
    this.setState({
      isOpen: true,
      project: {}
    });
  };

  closeModal = () => {
    this.setState({ isOpen: false, project: {} });
  };

  render() {
    return (
      <div>
        <h1>Create a project</h1>
        <a onClick={this.openModal}>
          <FontAwesomeIcon icon={faPlus} /> From Github
        </a>
        <CustomModal
          isOpen={this.state.isOpen}
          title="Add a project from github"
          onValidateClick={this.handleSubmitGithub}
          closeModal={this.closeModal}
          validateText="Create"
          content={
            <div>
              <Input
                nameField="pseudo"
                label="Github Username"
                type="text"
                placeholder=""
                changed={this.onInputChangeGit}
              />
              <Input
                nameField="password"
                label="Github Password"
                type="password"
                placeholder=""
                changed={this.onInputChangeGit}
              />
              <Input
                nameField="repoName"
                label="RepoName"
                type="text"
                placeholder=""
                changed={this.onInputChangeGit}
              />
            </div>
          }
        />

        <form>
          <Input
            nameField="title"
            label="Title"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <Input
            nameField="amount"
            label="Amount"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <Input
            nameField="delay"
            label="Delay"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <Input
            nameField="startDate"
            label="StartDate"
            type="date"
            placeholder=""
            changed={this.onDateInputChange}
          />
          <Input
            nameField="endDate"
            label="EndDate"
            type="date"
            placeholder=""
            changed={this.onDateInputChange}
          />
          <Select
            nameField="status"
            values={statusList}
            label="Status"
            changed={this.onSelectChangeStatus}
          />
          <Input
            nameField="stacks"
            label="Stacks"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <Input
            nameField="adr"
            label="Average Daily rate"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <Select
            nameField="client"
            values={this.state.clientList}
            label="Client"
            changed={el => this.onSelectChangeClient(el)}
          />
          <Input
            nameField="githubRepository"
            label="Github link (optional)"
            type="text"
            placeholder=""
            changed={this.onInputChange}
          />
          <input
            onClick={this.handleSubmit}
            type="submit"
            value="Create"
            className="btn btn__rounded btn__green btn__letter-spacing fwb btn__medium"
          />
        </form>
      </div>
    );
  }
}

export default CreateProject;
