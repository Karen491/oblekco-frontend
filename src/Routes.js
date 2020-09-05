import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/HomeRoute/Home";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Home} />
    </Switch>
);

export default Routes; 