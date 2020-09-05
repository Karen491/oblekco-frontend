import React, { Component } from "react";

class AuthForm extends Component {
    render() {
        return (
            <div className="uk-width-1-1 uk-flex uk-flex-middle uk-flex-center" uk-height-viewport="true">
                <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true">
                    <div className="uk-card-media-left uk-cover-container">
                        <img src="https://res.cloudinary.com/karen491/image/upload/c_scale,h_1600,w_2500/v1599196490/oblekco/running_wallpaper_qgsygr.jpg" alt="" uk-cover="true" />
                        <canvas width="600" height="400"></canvas>
                    </div>

                    <div className="test">
                        <div className="uk-card-body uk-text-center">
                            <h1 className="uk-card-title">Login</h1>
                            <form>
                                <div className="uk-margin">
                                    <div className="uk-inline uk-width-1-1">
                                        <span className="uk-form-icon" uk-icon="icon: user"></span>
                                        <input className="uk-input" type="text" />
                                    </div>
                                </div>

                                <div className="uk-margin">
                                    <div className="uk-inline uk-width-1-1">
                                        <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                                        <input className="uk-input" type="text" />
                                    </div>
                                </div>

                                <button className="uk-button uk-button-primary uk-width-1-1">Login</button>

                                <hr className="uk-divider-icon"></hr>

                                <h5>Don't have an account? <a href="/">Sign up</a></h5>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthForm;