import React, { Component } from "react";
import AppContext from "../../AppContext";
import AuthForm from "../HomeRoute/AuthForm";
import Navbar from "../Navbar/Navbar";

class Home extends Component {
    static contextType = AppContext;

    render () {
        const { state } = this.context;
        const pathname = this.props.location;

        return (
            <div>
                {state.user._id ? (
                    <Navbar />
                ) : (
                    <AuthForm pathname={pathname}/>
                )}
            </div>
        )
    }
};

Home.contextType = AppContext;

export default Home;