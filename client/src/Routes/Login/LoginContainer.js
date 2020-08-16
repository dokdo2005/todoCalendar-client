import React,{Component} from "react";
import LoginPresenter from "./LoginPresenter";

export default class LoginContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      emailInputValue:'',
      passwordInputValue:'',
    }
  }

  inputValueChangeHandler(e){
    this.setState({
      [e.target.type + `InputValue`]: e.target.value
    })
  }
  render(){
    const {emailInputValue, passwordInputValue} = this.state;
    const {handleLogin} = this.props;
    return (
      <>
        <LoginPresenter 
          handleLogin={
            () => {
              handleLogin(emailInputValue,passwordInputValue)
            }
          }
          inputValueChangeHandler = {this.inputValueChangeHandler.bind(this)}  
          emailInputValue = {emailInputValue}
          passwordInputValue = {passwordInputValue}

        />
      </>
    )
  }
}