import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Nav from "./Nav";
// import Cal from "./Calender";
import Signup from "../Routes/Signup";
import LoginContainer from "../Routes/Login";
import Todo from "../Routes/Todo";
import PageSection from "./PageSection";

export default ({
  userData,
  handleLogin,
  handleLogout,
  isLogin,
  isUserProfileModalVisible,
  handleUserProfileModal,
}) => (
  <Router>
    <>
      <Nav
        isLogin={isLogin}
        isUserProfileModalVisible={isUserProfileModalVisible}
        handleUserProfileModal={handleUserProfileModal}
        handleLogout={handleLogout}
        userData={userData}
      />
      {/* isLogin이 false면 Loading이 랜더되고 true이면 홈이 핸더된다 */}
      <Switch>
        <Route exact path="/">
          <Todo userData={userData} isLogin={isLogin}></Todo>
        </Route>
        <Route path="/login">
          {isLogin ? (
            <Redirect to="/" />
          ) : (
            <LoginContainer handleLogin={handleLogin} />
          )}
        </Route>
        <Route path="/signup">
          <Signup></Signup>
        </Route>
      </Switch>
    </>
  </Router>
);
