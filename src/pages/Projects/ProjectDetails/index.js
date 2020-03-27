import React, { Component } from "react";
import axios from "../../../axios-config";
import Input from "../../../components/Input";
import Sprint from "../../Sprints/Sprint";
import "./project-details.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTable, faPencilAlt, faCheck, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Lottie } from '@crello/react-lottie'
import animationData from '../../../utils/loading-black-dots.json';

class DetailsProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: null,
            difference: null,
            isDisabled: true
        };
    }

    onInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onDateInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleEditionMod = () => {
        this.setState({ isDisabled: false });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const datas = {
            ['startDate']: this.state.startDate ? this.formatDateUstoEn(this.state.startDate) : this.formatDateFrtoEn(this.state.project.startDate),
            ['endDate']: this.state.endDate ? this.formatDateUstoEn(this.state.endDate) : this.formatDateFrtoEn(this.state.project.endDate),
            ['adr']: this.state.adr || this.state.project.adr,
        };
        axios
            .patch('/project/' + this.props.match.params.id, datas, {
                headers: { Authorization: localStorage.getItem("token") }
            })
            .then((response) => {
                this.setState({ isDisabled: true });
            });
    }

    handleDelete = () => {
        //     axios
        //         .delete('/client/' + this.props.match.params.id, {
        //             headers: { Authorization: localStorage.getItem("token") }
        //         })
        //         .then((response) => {
        //             history.push('/dashboard/clients');
        //         });
    }

    componentDidMount() {
        let datas = {};
        axios
            .get("/project/" + this.props.match.params.id, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            .then(response => {
                datas = response.data.project;
                axios
                    .get("/project/difference/" + this.props.match.params.id, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    })
                    .then((response) => {
                        this.setState({
                            project: datas,
                            difference: {
                                hoursSpent: response.data.hoursSpent,
                                gapCost: response.data.gapCost
                            }
                        });
                    });
            });
    }

    formatDateFrtoUs = (date) => {
        const eDate = date.split('/');
        return `${eDate[2]}-${eDate[1]}-${eDate[0]}`;
    }

    formatDateFrtoEn = (date) => {
        const eDate = date.split('/');
        return `${eDate[1]}-${eDate[0]}-${eDate[2]}`;
    }

    formatDateUstoEn = (date) => {
        const eDate = date.split('-');
        return `${eDate[1]}-${eDate[2]}-${eDate[0]}`;
    }

    render() {
        console.log(this.state);
        let sprints = null;
        if (this.state.project !== null && this.state.project.Sprints.length > 0) {
            sprints = this.state.project.Sprints.map((element, i) => {
                return (
                    <Sprint
                        key={i}
                        id={element.id}
                        title={element.title}
                        startDate={element.startDate}
                        endDate={element.endDate}
                        status={element.status}
                    />
                );
            });
        }

        return (
            <div className="project__details">
                {this.state.project !== null ? (
                    <>
                        <div className="head">
                            <h1>Aperçu du projet — {this.state.project.title}</h1>
                            {this.state.isDisabled ? (
                                <div className="buttons">
                                    <div className="delete" onClick={this.handleDelete}>
                                        <FontAwesomeIcon icon={faTrashAlt} /><span>Delete</span>
                                    </div>
                                    <div className="edition" onClick={this.handleEditionMod}>
                                        <FontAwesomeIcon icon={faPencilAlt} /><span>Edit</span>
                                    </div>
                                </div>
                            ) : (
                                    <div className="edition" onClick={this.handleSubmit}>
                                        <FontAwesomeIcon icon={faCheck} /><span>Validate</span>
                                    </div>
                                )}
                        </div>
                        <div className="project__details-cards">
                            <div className="project__details-block">
                                <p className="label">Status</p>
                                {this.state.project.status === "en_cours" ? "En cours" : "Réalisé"}
                            </div>
                            <div className="project__details-block">
                                <p className="label">Stacks</p>
                                {this.state.project.stacks}
                            </div>
                            <div className="project__details-block">
                                <p className="label">Amount</p>
                                {this.state.project.amount} €
                            </div>
                            <div className="project__details-block">
                                <p className="label">Hours spent</p>
                                {this.state.difference.hoursSpent} h
                            </div>
                            <div className="project__details-block">
                                <p className="label">Cost gap</p>
                                {this.state.difference.gapCost} €
                            </div>
                        </div>
                        <form>
                            <Input
                                nameField="startDate"
                                label="StartDate"
                                type="date"
                                placeholder=""
                                valueField={typeof this.state.startDate !== "undefined" ? this.state.startDate : (this.formatDateFrtoUs(this.state.project.startDate) || "")}
                                changed={this.onDateInputChange}
                                isDisabled={this.state.isDisabled}
                            />
                            <Input
                                nameField="endDate"
                                label="EndDate"
                                type="date"
                                placeholder=""
                                valueField={typeof this.state.endDate !== "undefined" ? this.state.endDate : (this.formatDateFrtoUs(this.state.project.endDate) || "")}
                                changed={this.onDateInputChange}
                                isDisabled={this.state.isDisabled}
                            />
                            <Input
                                nameField="adr"
                                label="hourly rate"
                                type="text"
                                placeholder=""
                                valueField={typeof this.state.adr !== "undefined" ? this.state.adr : (this.state.project.adr || "")}
                                changed={this.onInputChange}
                                isDisabled={this.state.isDisabled}
                            />
                        </form>

                        <div className="sprints">
                            <div className="sprints__header">
                                <h2>Sprints</h2>
                                <a
                                    href={`/dashboard/detailsproject/createsprint/${this.props.match.params.id}`}
                                >
                                    <FontAwesomeIcon icon={faPlus} /> Create a new sprint
                        </a>
                            </div>
                            <div className="sprints__list">{sprints}</div>
                        </div>
                    </>
                ) : (
                        <Lottie
                            config={{ animationData: animationData, loop: true }}
                            height={150}
                            className="loader"
                        />
                    )}
            </div>
        );
    }
}

export default DetailsProject;
