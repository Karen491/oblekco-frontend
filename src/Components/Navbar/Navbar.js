import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../Services/authServices";
import AppContext from "../../AppContext";

class Navbar extends Component {
    static contextType = AppContext;

    logout = () => {
        const { history } = this.props;
        logout().then(() => {
            localStorage.removeItem("user");
            this.setState({ user: {} });
            history.push("/");
        });
    };

    render() {
        const { state } = this.context;

        return (
            <div>
                {state.user._id &&
                    <nav className="navbar" uk-navbar="true">
                        <div className="uk-navbar-left">
                            <Link className="nav-title-text" to="/">Running Tracker</Link>
                        </div>

                        <div className="uk-navbar-right">
                            <Link className="nav-text" to="/">My Runs</Link>
                            <Link className="nav-text" to="/newrun">+ Add New Run</Link>
                            <a className="nav-text" href="/" onClick={this.logout}>Log Out</a>
                        </div>
                    </nav>
                }
            </div>
        )
    }
};

Navbar.contextType = AppContext;

export default Navbar;
