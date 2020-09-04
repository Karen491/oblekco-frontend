import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthForm from "./Components/HomeRoute/AuthForm";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={AuthForm} />
    </Switch>
);

export default Routes; 