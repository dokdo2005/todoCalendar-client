import React from "react";
import Login from '../../components/Login'



export default function LoginPresenter({ emailInputValue, passwordInputValue, handleLogin, inputValueChangeHandler }) {
  return (
    <Login
      emailInputValue={emailInputValue}
      passwordInputValue={passwordInputValue}
      handleLogin={handleLogin}
      inputValueChangeHandler={inputValueChangeHandler}
    />
  );
}