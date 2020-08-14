import React from "react";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
      
    };
  }

  handleLogin(){
    this.setState({
      isLogin: !this.state.isLogin
    })
    
  }

  render() {
    const {isLogin} = this.state;

    return (
      <>
        <GlobalStyles/>
        <Router 
          isLogin = {isLogin}
          handleLogin={this.handleLogin.bind(this)}/>
      </>
    );
  }
}

export default App;
