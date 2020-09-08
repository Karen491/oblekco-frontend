import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login, signup } from "../../Services/authServices";
import Home from "../HomeRoute/Home";
import AppContext from "../../AppContext";

class AuthForm extends Component {
    static contextType = AppContext;
    state = {
        user: {},
    };

    handleChange = (e) => {
        let { user } = this.state;
        user = { ...user, [e.target.name]: e.target.value };
        this.setState({ user });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { user } = this.state;
        const isLogin = this.props.location.pathname === "/";
        const { setUser } = this.context;
        const { history } = this.props;
        const action = isLogin ? login : signup;

        action(user)
            .then((res) => {
                if (isLogin) {
                    const { user } = res.data;
                    localStorage.setItem("user", JSON.stringify(user));
                    setUser(user);
                } else {
                    history.push("/");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {
        const isSignup = this.props.location.pathname === "/signup";
        const { state } = this.context;

        return (
            <div>
                {!state.user._id &&
                            <div className="uk-width-1-1 uk-flex uk-flex-middle uk-flex-right login" uk-height-viewport="true">
                            <div className="uk-card uk-card-default uk-card-body uk-width-1-3@m uk-margin-xlarge-right authform-card">
                                <h2 className="title-text uk-text-center">Running Tracker</h2>
            
                                <form onSubmit={this.handleSubmit}>
                                    {isSignup ? (
                                        <div className="uk-margin">
                                            <div className="uk-inline uk-width-1-1">
                                                <span className="uk-form-icon" uk-icon="icon: star"></span>
                                                <input
                                                    onChange={this.handleChange}
                                                    placeholder="Name"
                                                    id="name"
                                                    name="name"
                                                    className="uk-input"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    ) : null}
            
                                    {isSignup ? (
                                        <div className="uk-margin">
                                            <div className="uk-inline uk-width-1-1">
                                                <span className="uk-form-icon" uk-icon="icon:  bolt"></span>
                                                <input
                                                    onChange={this.handleChange}
                                                    placeholder="Last name"
                                                    id="last_name"
                                                    name="last_name"
                                                    className="uk-input"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    ) : null}
            
                                    <div className="uk-margin">
                                        <div className="uk-inline uk-width-1-1">
                                            <span className="uk-form-icon" uk-icon="icon: user"></span>
                                            <input
                                                onChange={this.handleChange}
                                                placeholder="Email address"
                                                id="email"
                                                name="email"
                                                className="uk-input"
                                                type="text"
                                            />
                                        </div>
                                    </div>
            
                                    <div className="uk-margin">
                                        <div className="uk-inline uk-width-1-1">
                                            <span className="uk-form-icon" uk-icon="icon: lock"></span>
                                            <input
                                                onChange={this.handleChange}
                                                placeholder="Password"
                                                id="password"
                                                name="password"
                                                className="uk-input"
                                                type="password"
                                            />
                                        </div>
                                    </div>
            
                                    <button className="authform-button uk-width-1-1">{isSignup ? "Sign Up" : "Log In"}</button>
            
                                    <hr className="uk-divider-icon"></hr>
            
                                    {!isSignup ? (
                                        <h5 className="uk-text-center">Don't have an account? <Link to="/signup">Sign Up</Link></h5>
                                    ) : (
                                        <h5 className="uk-text-center">Have an account? <Link to="/">Log In</Link></h5>
                                    )}
                                </form>
                            </div>
                        </div>
                }

                {state.user._id &&
                    <Home />
                }
            </div>
        )
    }
};

AuthForm.contextType = AppContext;

export default AuthForm;