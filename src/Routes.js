import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthForm from "./Components/HomeRoute/AuthForm";
import RunForm from "./Components/Runs/RunForm";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={AuthForm} />
        <Route exact path="/signup" component={AuthForm} />
        <Route exact path="/newrun" component={RunForm} />
    </Switch>
);

export default Routes; 