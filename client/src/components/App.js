import React from "react";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";
import {userApi} from "../api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isUserProfileModalVisible: false,
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
        username: userData.data.username
      }
    })
  }
  handleLogout = () =>{
    userApi.logout();
    this.setState({
      userData: {},
      isLogin: false,
      isUserProfileModalVisible: !this.state.isUserProfileModalVisible
    })
    document.cookie = ''
  }
  
  handleUserProfileModal= () => {
    this.setState({
      isUserProfileModalVisible : !this.state.isUserProfileModalVisible
    })
  }

  render() {
    const {isLogin, userData, isUserProfileModalVisible} = this.state;

    return (
      <>
        <GlobalStyles/>
        <Router 
          userData = {userData}
          isLogin = {isLogin}
          handleLogin={this.handleLogin.bind(this)}
          handleLogout= { this.handleLogout.bind(this)}
          isUserProfileModalVisible = {isUserProfileModalVisible}
          handleUserProfileModal = {this.handleUserProfileModal.bind(this)}
          />
      </>
    );
  }
}

export default App;
