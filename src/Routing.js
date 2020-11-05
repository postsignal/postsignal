import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Release from "./Pages/Release/Release";

export const HomeRoute = "/";
export const ReleaseRoute = "/releases/:id";
class Routing extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={HomeRoute} exact component={Home} />
        <Route path={ReleaseRoute} component={Release} />
        <Route component={Home} />
      </Switch>
    );
  }
}
export default withRouter(Routing);
