import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route, Redirect } from "react-router-dom";

import SplashScreen from "../Pages/SplashScreen/index";
import Login from "../Pages/LoginPage/index";
import SignUp from '../Pages/SignUpPage/index'

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
        {/* <Redirect strict from="/" to="/login" /> */}
        <Route exact path={routes.splashScreen} component={SplashScreen} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.signup} component={SignUp} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
