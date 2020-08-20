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

  // async componentDidMount() {
  //   //userId를 서버로 보내서 todolist를 받아온다
  //   let todoList;

  //   if (this.state.isLogin) {
  //     todoList = await todoApi.getAll(this.state.userData.userId);
  //   }
  //   if (todoList) {
  //     this.setState({
  //       todoList: todoList,
  //     });
  //   }
  //   console.log(todoList);
  // }

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
    document.cookie = "";
  };

  handleClearAll = () => {
    // todoApi.deleteAll();
    this.setState({
      todoList: []
    });
  }

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
          handleClearAll={this.handleClearAll.bind(this)}
        />
      </>
    );
  }
}

export default App;
