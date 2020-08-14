import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Nav from "./Nav";
import Cal from "./Calender";
import Signup from "./Signup";

import LoginContainer from "../Routes/Login";


export default ({ handleLogin, isLogin }) => (
  <Router>
    <>
      <Nav
        isLogin={isLogin}
        />
      <Switch>
        <Route exact path='/' >
          <Cal></Cal>
        </Route>

        <Route path='/login'>
          {
            isLogin ?  <Redirect to='/'/> : <LoginContainer handleLogin={handleLogin} />
          }
        </Route>
        <Route path='/signup'>
          <Signup></Signup>
        </Route>
      </Switch>
    </>
  </Router>
)