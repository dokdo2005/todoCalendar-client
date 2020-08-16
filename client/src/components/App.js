import React from "react";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import {userApi} from "../api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userData:{
        userId: null,
        email: null,
        username: null,
      }
    };
  }

  handleLogin = async (email, password) => {
    const userData = await userApi.login(email,password);

    this.setState({
      isLogin: !this.state.isLogin,
      userData: {
        userId: userData.data.id,
        email: userData.data.email,
        usernam: userData.data.username
      }
    })
  }

  render() {
    const {isLogin, userData} = this.state;

    return (
      <>
        <GlobalStyles/>
        <Router 
          userData = {userData}
          isLogin = {isLogin}
          handleLogin={this.handleLogin.bind(this)}/>
      </>
    );
  }
}

export default App;
