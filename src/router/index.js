import { BrowserRouter, Switch } from "react-router-dom";
import Home from "containers/Home";
import Search from "containers/Search";
import Route from "./Route";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
    </Switch>
  </BrowserRouter>
);
