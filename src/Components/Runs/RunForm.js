import React, { Component } from "react";
import dayjs from "dayjs";
import { createRun } from "../../Services/runServices";

class RunForm extends Component {
    state = {
        run: {},
    };

    handleChange = (e) => {
        let { run } = this.state;
        const distance = document.getElementById("distance").value;
        const type = document.getElementById("type").value;
        run = { ...run, [e.target.name]: e.target.value, distance: distance, type: type };
        this.setState({ run });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { run } = this.state;
        createRun(run)
            .then(() => {
                document.location.reload(true);
            })
            .catch((res) => console.error(res.response));
    };

    render() {
        const today = dayjs().format("YYYY-MM-DD");

        return (
            <div className="uk-width-4-5 uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-margin-left" uk-grid="true">
                <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
                    <img src="https://res.cloudinary.com/karen491/image/upload/v1599338719/oblekco/running-form_jfp907.jpg" alt="" uk-cover="true" />
                    <canvas width="600" height="200"></canvas>
                </div>

                <div>
                    <div className="uk-card-body">
                        <h2>New Run</h2>
                        <form className="uk-grid-small" uk-grid="true" onSubmit={this.handleSubmit}>

                            <div className="uk-width-1-2@s">
                                <label className="uk-form-label">Date</label>
                                <input
                                    onChange={this.handleChange}
                                    className="uk-input"
                                    name="date"
                                    id="date"
                                    type="date"
                                    max={today}
                                />
                            </div>

                            <div className="uk-width-1-2@s">
                                <label className="uk-form-label">Distance</label>
                                <select className="uk-select" id="distance">
                                    <option>5K</option>
                                    <option>10K</option>
                                    <option>15K</option>
                                    <option>21K</option>
                                    <option>30K</option>
                                    <option>Marathon (42K)</option>
                                </select>
                            </div>

                            <div className="uk-width-1-2@s">
                                <label className="uk-form-label">Country</label>
                                <input
                                    onChange={this.handleChange}
                                    className="uk-input"
                                    name="country"
                                    it="country"
                                    type="text"
                                />
                            </div>

                            <div className="uk-width-1-2@s">
                                <label className="uk-form-label">City</label>
                                <input
                                    onChange={this.handleChange}
                                    className="uk-input"
                                    name="city"
                                    it="city"
                                    type="text"
                                />
                            </div>

                            <div className="uk-width-1-2@s">
                                <label className="uk-form-label">Run type</label>
                                <select className="uk-select" id="type">
                                    <option>Trail</option>
                                    <option>Road</option>
                                </select>
                            </div>

                            <div className="uk-width-1-2@s">
                                <label className="uk-form-label">Timing (min)</label>
                                <input
                                    onChange={this.handleChange}
                                    className="uk-input"
                                    name="timing"
                                    id="timing"
                                    type="number"
                                />
                            </div>

                            <button className="runform-button uk-width-1-2 uk-align-center">Save Run</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

export default RunForm;