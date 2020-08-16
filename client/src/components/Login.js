import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  text-align: center;
  padding-top: 100px;
`;

const Title = styled.h1`
  font-size: 76px;
  padding: 100px 0px 30px 0px;
`;

const Form = styled.form``;

const FormInput = styled.div`
  padding: 20px 0px;
`;

const Span = styled.span`
  display: none;
`;

const Labelemail = styled.label.attrs({
  htmlFor: "email",
})`
  font-size: 20px;
`;

const Inputemail = styled.input.attrs({
  type: "email",
  placeholder: "e-mail을 입력해주세요",
})`
  border-bottom: 1px solid black;
  font-size: 15px;
`;

const Labelpassword = styled.label.attrs({
  htmlFor: "password",
})`
  font-size: 20px;
`;

const Inputpassword = styled.input.attrs({
  id: 'password',
  type: "password",
  placeholder: "password을 입력해주세요",
})`
  border-bottom: 1px solid black;
  font-size: 15px;
`;

const Button = styled.button`
  border-radius: 4%;
  background-color: #62ab3f;
  color: white;
  padding: 10px 25px;
  margin-top: 30px;
  font-size: 20px;
  :hover {
    background-color: #007349;
    box-shadow: 0.5px 3px 2px 2px rgba(0, 0, 255, 0.2);
  }
`;

const Login = ({ emailInputValue, passwordInputValue, handleLogin, inputValueChangeHandler }) => (
  <Wrap>
    <Title>Login</Title>
    <Form>
      <FormInput>
        <Labelemail>E-mail : </Labelemail>
        <Inputemail
          onChange={inputValueChangeHandler}
          value={emailInputValue} />
        <Span></Span>
      </FormInput>
      <FormInput>
        <Labelpassword>Password : </Labelpassword>
        <Inputpassword
          onChange={inputValueChangeHandler}
          value={passwordInputValue}/>
        <Span></Span>
      </FormInput>
      <Button onClick={
        (e) => {
          e.preventDefault();
          handleLogin();
        }}>
        Send
      </Button>
    </Form>
  </Wrap>
);

export default Login;
