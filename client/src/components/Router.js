import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Nav from "./Nav";
import Cal from "./Calender";
import Signup from "../Routes/Signup";
import LoginContainer from "../Routes/Login";


export default ({userData, handleLogin, handleLogout, isLogin, isUserProfileModalVisible, handleUserProfileModal}) => (
  <Router>
    <>
      <Nav 
        isLogin={isLogin}
        isUserProfileModalVisible= {isUserProfileModalVisible}
        handleUserProfileModal = {handleUserProfileModal}
        handleLogout= {handleLogout}
        userData = {userData}
       />
      <Switch>
        <Route exact path='/' >
          <Cal></Cal>
        </Route>
        <Route path='/login'>
          {
            isLogin ?  
            <Redirect to='/'/> : 
            <LoginContainer handleLogin={handleLogin} />
          }
        </Route>
        <Route path='/signup'>
          <Signup></Signup>
        </Route>
      </Switch>
    </>
  </Router>
)