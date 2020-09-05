import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../Services/authServices";

class Navbar extends Component {
    logout = () => {
        const { history } = this.props;
        logout().then(() => {
            localStorage.removeItem("user");
            this.setState({ user: {} });
            history.push("/");
        });
    };

    render() {
        return (
            <nav className="navbar" uk-navbar="true">
                <div className="uk-navbar-left">
                    <Link className="nav-title-text" to="/home">Running Tracker</Link>
                </div>

                <div className="uk-navbar-right">
                    <Link className="nav-text" to="/home">+ Add New Race</Link>
                    <a className="nav-text" href="/" onClick={this.logout}>Log Out</a>
                </div>
            </nav>
        )
    }
};

export default Navbar;
