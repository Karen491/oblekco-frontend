import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthForm from "./Components/HomeRoute/AuthForm";
//import Home from "./Components/HomeRoute/Home";
import RunForm from "./Components/Runs/RunForm";
import RunList from "./Components/Runs/RunList";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={AuthForm} />
        {/* <Route exact path="/home" component={Home} /> */}
        <Route exact path="/signup" component={AuthForm} />
        <Route exact path="/newrun" component={RunForm} />
        <Route exact path="/myruns" component={RunList} />
    </Switch>
);

export default Routes; 