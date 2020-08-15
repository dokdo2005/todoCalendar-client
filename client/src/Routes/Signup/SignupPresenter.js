import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2vh;
  text-align: center;
  padding-top: 2vh;
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
  font-size: 13px;
  color: red;
`;

const Labelname = styled.label.attrs({
  for: "name",
})`
  font-size: 20px;
`;

const Inputname = styled.input.attrs({
  name: "inputname",
  id: "name",
  type: "text",
  placeholder: "이름을 입력해주세요",
})`
  border-bottom: 1px solid black;
  font-size: 15px;
`;

const Labelemail = styled.label.attrs({
  for: "email",
})`
  font-size: 20px;
`;

const Inputemail = styled.input.attrs({
  name: "inputemail",
  id: "email",
  type: "email",
  placeholder: "e-mail을 입력해주세요",
})`
  border-bottom: 1px solid black;
  font-size: 15px;
`;

const Labelpassword = styled.label.attrs({
  for: "password",
})`
  font-size: 20px;
`;

const Inputpassword = styled.input.attrs({
  id: "password",
  name: "inputpassword",
  type: "password",
  placeholder: "password을 입력해주세요",
})`
  border-bottom: 1px solid black;
  font-size: 15px;
`;

const Labelpasswordcheck = styled.label.attrs({
  for: "passwordcheck",
})`
  font-size: 20px;
`;

const Inputpasswordcheck = styled.input.attrs({
  id: "passwordcheck",
  name: "inputpasswordcheck",
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

const SignupPresenter = ({
  handleChange,
  checkMessageName,
  checkMessageEmail,
  checkMessagePassword,
  checkMessagePasswordcheck,
}) => (
  <Wrap>
    <Title>Signup</Title>
    <Form>
      <FormInput>
        <Labelname>name : </Labelname>
        <Inputname onChange={handleChange} />
        <Span>{checkMessageName}</Span>
      </FormInput>
      <FormInput>
        <Labelemail>E-mail : </Labelemail>
        <Inputemail onChange={handleChange} />
        <Span>{checkMessageEmail}</Span>
      </FormInput>
      <FormInput>
        <Labelpassword>Password : </Labelpassword>
        <Inputpassword onChange={handleChange} />
        <Span>{checkMessagePassword}</Span>
      </FormInput>
      <FormInput>
        <Labelpasswordcheck>Password 확인 : </Labelpasswordcheck>
        <Inputpasswordcheck onChange={handleChange} />
        <Span>{checkMessagePasswordcheck}</Span>
      </FormInput>
      <Button>Send</Button>
    </Form>
  </Wrap>
);

export default SignupPresenter;