import React, { Component } from 'react';
import axios from "../../axios-config";
import './indexDashboard.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSpinner, faCoins, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { Lottie } from '@crello/react-lottie'
import animationData from '../../utils/loading-black-dots.json';
import CountUp from 'react-countup';

class IndexDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metrics: null
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
            });
    }

    render() {
        console.log(this.state.metrics);
        const loaderOption = { animationData: animationData, loop: true };
        return (
            <div className="dashboard">
                <h1>Dashboard</h1>
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
            </div>
        )
    }
}

export default IndexDashboard;