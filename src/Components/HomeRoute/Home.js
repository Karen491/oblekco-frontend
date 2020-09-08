import React, { Component } from "react";

class Home extends Component {

    render() {
        return (
            <div className="uk-position-center">
                <div className="uk-text-center">
                    <h3 className="uk-text-italic">"RUNNING is the greatest metaphor for life, because you get out of it what you put into it."</h3>
                </div>

                <div className="uk-position-relative uk-visible-toggle uk-light uk-margin-top uk-margin-left uk-margin-right" tabIndex="-1" uk-slider="true">
                    <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
                        <li>
                            <div className="uk-panel">
                                <img src="https://res.cloudinary.com/karen491/image/upload/v1599418984/oblekco/running1_kqrokc.jpg" alt="" />
                                <div className="uk-position-center uk-panel"><h1>1</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img src="https://res.cloudinary.com/karen491/image/upload/c_scale,h_701,w_1000/v1599419016/oblekco/running2_rr8p5n.jpg" alt="" />
                                <div className="uk-position-center uk-panel"><h1>2</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img src="https://res.cloudinary.com/karen491/image/upload/c_scale,h_701,w_1000/v1599418983/oblekco/running3_ypx7kn.jpg" alt="" />
                                <div className="uk-position-center uk-panel"><h1>3</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img src="https://res.cloudinary.com/karen491/image/upload/c_scale,h_701,w_1000/v1599419029/oblekco/running4_r6fs6g.jpg" alt="" />
                                <div className="uk-position-center uk-panel"><h1>4</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img src="https://res.cloudinary.com/karen491/image/upload/c_scale,h_701,w_1000/v1599418995/oblekco/running5_wloc1q.jpg" alt="" />
                                <div className="uk-position-center uk-panel"><h1>5</h1></div>
                            </div>
                        </li>
                    </ul>

                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="/" uk-slidenav-previous="true" uk-slider-item="previous"> </a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="/" uk-slidenav-next="true" uk-slider-item="next"> </a>

                </div>
            </div>
        )
    }
};

export default Home;