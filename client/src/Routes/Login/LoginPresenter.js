import React from "react";

import Login from '../../components/Login'


// 로그인
// 인풋값 가질 수 있는 state 설정
// send 버튼 클릭시 서버로 요청 
// 로그인state 변경하는 메소드 

export default LoginPresenter = ({ idInputValue, passwordInputValue }) => {
  return <Login
    idInputValue={idInputValue}
    passwordInputValue ={passwordInputValue}
    
  />;
}