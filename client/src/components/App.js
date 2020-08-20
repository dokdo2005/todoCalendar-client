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
    let todoList;
    
    if (prevState.isLogin === false) {
      todoList = await todoApi.getAll(this.state.userData.userId);
    }
    if (todoList) {
      this.setState({
        todoList: todoList.data,
      });
    }
  }

   async updateTodoData(){

    let todosList = await todoApi.getAll(this.state.userData.userId);
    this.setState({
      todoList: todosList
    })
  }

  handleLogin = async (email, password) => {
    const userData = await userApi.login(email, password);
    console.log(userData);
    // 1. 로그인할때 로컬스토리지로 쿠키 저장해두기
    // 2. 
    console.log(this.props);
    localStorage.setItem('uid', 'ㅁㄴ러ㅏㅣㄹㄴfskjd;l')
    console.log(document.cookie);
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
          updateTodoData={this.updateTodoData.bind(this)}
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
