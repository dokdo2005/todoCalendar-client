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
    
    if (prevState.isLogin !== this.state.isLogin) {
      console.log(this.state.isLogin, prevState.isLogin);
      todoList = await todoApi.getAll(this.state.userData.userId);
      console.log(todoList);
    }
    if (todoList) {
      this.setState({
        todoList: todoList.data,
      });
    }
  }

   async updateTodoData(){
    this.setState({
      todoList: null
    })
    let todosList = await todoApi.getAll(this.state.userData.userId);

    this.setState({
      todoList: todosList
    })
  }







  // async componentDidUpdate() {
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
        />
      </>
    );
  }
}

export default App;
