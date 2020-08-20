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

export default ({
  updateTodoData,
  todoList,
  userData,
  handleLogin,
  handleLogout,
  isLogin,
  handleClearAll
}) => (
  <Router>
    <>
      <Nav
        isLogin={isLogin}
        handleLogout={handleLogout}
        userData={userData}
      />
      {/* isLogin이 false면 Loading이 랜더되고 true이면 홈이 핸더된다 */}
      <Switch>
        <Route exact path="/">
         {isLogin?  <Todo
            todoList={todoList}
            userData={userData}
            isLogin={isLogin}
            updateTodoData={updateTodoData}
            handleClearAll={handleClearAll}	
          ></Todo>
        : <div></div>}
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
