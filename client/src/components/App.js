import React from "react";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import { userApi, todoApi } from "../api";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userData: {
        userId: null,
        email: null,
        username: null,
      },
      todoList: null,
    };
  }

  async componentDidUpdate(prevProps, prevState) {
    let todoListData;

    if (prevState.isLogin === false) {
      todoListData = await todoApi.getAll();
    }
    if (todoListData) {
      console.log("enter");
      this.setState({
        todoList: todoListData.data,
      });
    }
  }

  async updateTodoData() {
    let todosList = await todoApi.getAll();

    this.setState({
      todoList: todosList.data,
    });
  }

  handleLogin = async (email, password) => {
    const userData = await userApi.login(email, password);
    this.setState({
      isLogin: !this.state.isLogin,
      userData: {
        userId: userData.data.id,
        email: userData.data.email,
        username: userData.data.username,
      },
    });
  };

  handleLogout = () => {
    userApi.logout();
    this.setState({
      userData: {},
      isLogin: false,
    });
  };

  handleClearAll = () => {
    todoApi.deleteAll();
    this.setState({
      todoList: [],
    });
  };

  handleClearOne = async (id) => {
    console.log(typeof id);
    let modifiedData = await todoApi.deleteOne(id);
  }

  render() {
    const { isLogin, userData, todoList } = this.state;

    return (
      <>
        <GlobalStyles />
        <Router
          updateTodoData={this.updateTodoData.bind(this)}
          todoList={todoList}
          userData={userData}
          isLogin={isLogin}
          handleLogin={this.handleLogin.bind(this)}
          handleLogout={this.handleLogout.bind(this)}
          handleClearAll={this.handleClearAll.bind(this)}
          handleClearOne={this.handleClearOne.bind(this)}
        />
      </>
    );
  }
}

export default App;
