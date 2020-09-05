import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthForm from "./Components/HomeRoute/AuthForm";
import Home from "./Components/HomeRoute/Home";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={AuthForm} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={AuthForm} />
    </Switch>
);

export default Routes; 