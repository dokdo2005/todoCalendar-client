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
    console.log(todoListData);
    if (todoListData) {
      this.setState({
        todoList: todoListData.data,
      });
    }
  }

  handleLogin = async (email, password) => {
    const userData = await userApi.login(email, password);

    localStorage.setItem("test", "123");

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
    document.cookie = "";
  };

  render() {
    const { isLogin, userData, todoList } = this.state;

    return (
      <>
        <GlobalStyles />
        <Router
          todoList={todoList}
          userData={userData}
          isLogin={isLogin}
          handleLogin={this.handleLogin.bind(this)}
          handleLogout={this.handleLogout.bind(this)}
        />
      </>
    );
  }
}

export default App;
