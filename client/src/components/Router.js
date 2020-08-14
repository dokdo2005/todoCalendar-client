import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Nav from "./Nav";
import Cal from "./Calender";
import Login from "./Login";
import Signup from "./Signup";



export default () =>(
    <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path='/' >
            <Cal></Cal>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signup'>
            <Signup></Signup>
          </Route>
        </Switch>
      </>
    </Router>
  )