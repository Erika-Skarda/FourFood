import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import SplashScreen from "../Pages/SplashScreen/index";

export const routes = {
  splashScreen: "/",
  login: "/login",
  signup: "/signup",
  feed:"/feed",
  myadress:"/myadres"
};

function Router(props: { history: import("history").History<any> }) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.splashScreen} component={SplashScreen} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
