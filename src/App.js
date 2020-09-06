import React, { Component } from 'react';
import AppContext from "./AppContext";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Routes from './Routes';

class App extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user")) || {},
  }

  setUser = (user) => {
    this.setState({ user });
  };

  render() {
    const { state, setUser } = this;

    return (
      <AppContext.Provider
        value={{
          state,
          setUser,
        }}

      >
        <div className="home">
          {state.user._id && <Navbar />}
          <Routes />
        </div>
      </AppContext.Provider>
    )
  }
}

export default App;
