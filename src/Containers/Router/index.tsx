import React from "react";
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SplashScreen from "../Pages/SplashScreen/index";
import Login from "../Pages/LoginPage/index";
import SignUp from '../Pages/SignUpPage/index';
import { History }from 'history';

export const routes = {
  splashScreen: "/",
  login: "/login",
  signup: "/signup",
  feed:"/feed",
  myadress:"/myadres"
};

interface Props {

  history: History
}

function Router({history}:Props) {

  return (
  
    <BrowserRouter>  
 
      <Switch>
        {/* <Redirect strict from="/" to="/login" /> */}
        <Route exact path={routes.splashScreen} component={SplashScreen} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.signup} component={SignUp} />
      </Switch>
 
    </BrowserRouter>
  );
}

export default Router;
