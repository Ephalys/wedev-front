import React, { Component } from 'react';
import axios from "../../axios-config";
import './indexDashboard.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck, faSpinner, faCoins, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { Lottie } from '@crello/react-lottie'
import animationData from '../../utils/loading-black-dots.json';
import CountUp from 'react-countup';
import Input from "../Input";
import Select from "../Select";
import history from "../../utils/history";

import CustomModal from '../CustomModal';

class IndexDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metrics: null,
            isOpen: false,
            projects: []
        };
    }

    componentDidMount() {
        axios
            .get(`/user/metrics`, {
                headers: { Authorization: localStorage.getItem("token") }
            })
            .then(response => {
                // this.setState({ metrics: response.data.metric });
                this.setState({
                    metrics: {
                        projectCount: 57,
                        onGoingProjectsCount: 3,
                        turnover: 1589.46,
                        averageHourlyRate: 523.78
                    }
                });
            }).catch((error) => {
                if(error.response.status === 401){
                    axios
                    .post('/token', {
                        token: localStorage.getItem('token')
                    })
                    .then((response) => {
                        localStorage.setItem('token', response.data.token);
                        window.location.reload();
                    });
                }
            });
    }

    openModal = () => {
        axios
            .get(`/project`, {
                headers: { Authorization: localStorage.getItem("token") }
            })
            .then(response => {
                let projects = [];
                if (response.data.projects > 0) {
                    response.data.projects.forEach(el => {
                        if (el.githubRepository) {
                            // projects.push({value: el.id, label: el.title});
                            projects = [...projects, { value: el.id, label: el.title }];
                        }
                    });
                }

                projects = [{
                    ['value']: '1',
                    ['label']: 'Projet Test en dur'
                }];
                this.setState({
                    projects: projects,
                    isOpen: true
                });
            });
    };

    closeModal = () => {
        this.setState({ isOpen: false });
    }

    onInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSelectChange = (event, name) => {
        this.setState({
            [name]: event.value
        });
    };

    handleSubmit = () => {
        const datas = {
            ['pseudo']: this.state.pseudo,
            ['password']: this.state.password,
            ['title']: this.state.title,
            ['body']: this.state.body,
            ['tags']: this.state.tags,
        }

        axios
            .post(`/issue/${this.state.projectId}`, datas, {
                headers: { Authorization: localStorage.getItem("token") }
            })
            .then(res => {
                history.push('/dashboard');
            })
            .catch(err => {
                console.log(err.response.data.error);
            });

    }

    render() {
        const loaderOption = { animationData: animationData, loop: true };
        return (
            <div className="dashboard">
                <CustomModal
                    isOpen={this.state.isOpen}
                    title="Add a new Issue"
                    onValidateClick={this.state.projects.length > 0 ? this.handleSubmit : this.closeModal}
                    closeModal={this.closeModal}
                    validateText={this.state.projects.length > 0 ? "Create" : "All right"}
                    content={this.state.projects.length > 0 ? (
                        <div>
                            <Select
                                nameField="projectId"
                                values={this.state.projects}
                                label="Projet"
                                changed={this.onSelectChange}
                            /><Input
                            nameField="pseudo"
                            label="Github Username"
                            type="text"
                            placeholder=""
                            changed={this.onInputChange}
                        />
                            <Input
                                nameField="password"
                                label="Github Password"
                                type="password"
                                placeholder=""
                                changed={this.onInputChange}
                            />
                            <Input
                                nameField="title"
                                label="Issue Title"
                                type="text"
                                placeholder=""
                                changed={this.onInputChange}
                            />
                            <Input
                                nameField="body"
                                label="Issue Description"
                                type="textarea"
                                placeholder=""
                                changed={this.onInputChange}
                            />
                            <Input
                                nameField="tags"
                                label="Issue Tags (separated by commas)"
                                type="text"
                                placeholder=""
                                changed={this.onInputChange}
                            />
                        </div>
                    ) : (
                        <div>No project with a GitHub link found in your projects. Please add one to an existant project or create a new project with a GitHub link.</div>
                    )
                    }
                />
                <div className="dashboard__header">
                    <h1>
                        Dashboard
                    </h1>
                    <a onClick={this.openModal}>
                        <FontAwesomeIcon icon={faPlus} /> Create a new issue
                    </a>
                </div>
                <div className="metrics">
                    <div className="metrics__card">
                        <FontAwesomeIcon icon={faCheck} size="2x" />
                        {this.state.metrics ? (
                            <span className="data">
                                {
                                    <CountUp
                                        end={this.state.metrics.projectCount ?? 0}
                                        duration={1}
                                    />
                                }
                            </span>
                        ) : (
                            <Lottie
                                config={loaderOption}
                                height={40}
                                width={40}
                                className="loader"
                            />
                        )}
                        <span className="title">Realised Projects</span>
                    </div>
                    <div className="metrics__card">
                        <FontAwesomeIcon icon={faSpinner} size="2x" />
                        {this.state.metrics ? (
                            <span className="data">
                                {
                                    <CountUp
                                        end={this.state.metrics.onGoingProjectsCount ?? 0}
                                        duration={1}
                                        delay={1}
                                    />
                                }
                            </span>
                        ) : (
                            <Lottie
                                config={loaderOption}
                                height={40}
                                width={40}
                                className="loader"
                            />
                        )}
                        <span className="title">Current Projects</span>
                    </div>
                    <div className="metrics__card">
                        <FontAwesomeIcon icon={faCoins} size="2x" />
                        {this.state.metrics ? (
                            <span className="data">
                                {
                                    <CountUp
                                        end={this.state.metrics.turnover ?? 0}
                                        duration={3}
                                        separator=" "
                                        decimals={2}
                                        decimal=","
                                        suffix=" €"
                                        delay={2}
                                    />
                                }
                            </span>
                        ) : (
                            <Lottie
                                config={loaderOption}
                                height={40}
                                width={40}
                                className="loader"
                            />
                        )}
                        <span className="title">Turnover</span>
                    </div>
                    <div className="metrics__card">
                        <FontAwesomeIcon icon={faTachometerAlt} size="2x" />
                        {this.state.metrics ? (
                            <span className="data">
                                {
                                    <CountUp
                                        end={this.state.metrics.averageHourlyRate ?? 0}
                                        duration={2}
                                        separator=" "
                                        decimals={2}
                                        decimal=","
                                        suffix=" €"
                                        delay={5}
                                    />
                                }
                            </span>
                        ) : (
                            <Lottie
                                config={loaderOption}
                                height={40}
                                width={40}
                                className="loader"
                            />
                        )}
                        <span className="title">Average Hourly Rate</span>
                    </div>
                </div>
            </div >
        )
    }
}

export default IndexDashboard;