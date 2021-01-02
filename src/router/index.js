import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "containers/Home";
import Search from "containers/Search";
import Route from "./Route";
import Login from "containers/Login";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route layout={React.Fragment} exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Router;
