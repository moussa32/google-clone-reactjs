import React, { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
const Results = lazy(() => import("./Results"));

const Routes = () => {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route path={["/search", "/images", "/news", "/videos"]}>
          <Results />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
