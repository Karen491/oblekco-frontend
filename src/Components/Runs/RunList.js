import React, { Component } from "react";
import dayjs from "dayjs";
import { getRun } from "../../Services/runServices";
import { denormalizeData, normalizeData } from "../../Utils/dataUtils";

class RunList extends Component {
    state = {
        runs: {},
    };

    componentDidMount() {
        getRun().then((res) => {
            const { result } = res.data;
            const data = normalizeData(result);
            this.setState({ runs: data });
        });
    };

    render() {
        const { runs } = this.state;

        return (
            <div>
                <h2 className="uk-margin-top uk-margin-large-left uk-text-bolder">All runs</h2>
                <div className="uk-grid-column-small uk-grid-row-large uk-child-width-1-4@s uk-text-center uk-margin-top uk-margin-left" uk-grid="true">
                    {denormalizeData(runs).map((run, index) => (
                        <div key={index}>
                            <div className="uk-card run-card">
                                <div className="uk-card-media-top">
                                    <img src="https://res.cloudinary.com/karen491/image/upload/c_scale,h_200,w_350/v1599410594/oblekco/my-runs_um7ssn.jpg" alt="" />
                                </div>

                                <div className="uk-text-left uk-margin uk-padding-small">
                                    <h5 className="uk-margin-small">Distance: {run.distance}</h5>
                                    <h5 className="uk-margin-small">Timing: {`${run.timing} min`}</h5>
                                    <h5 className="uk-margin-small">Date: {dayjs(run.date).format("MMMM DD, YYYY")}</h5>
                                    <h5 className="uk-margin-small">Run type: {run.type}</h5>
                                    <h5 className="uk-margin-small">Place: {`${run.city}, ${run.country}`}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
};

export default RunList;