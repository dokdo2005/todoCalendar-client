import React from "react";
import styled from "styled-components";
import {
  faCaretDown,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.li`
  border-bottom: 1px dashed black;
  padding: 10px;
  width: 60%;
  margin-left: 20%;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  font-size: 20px;
`;

const CheckBox = styled.input.attrs({
  type: "checkbox",
})`
  margin: 7px 10px 0px 0px;
`;

const Title = styled.h3`
  width: 10%;
  max-width: 150px;
  /* background-color: blueviolet; */
`;

const Text = styled.span`
  width: 80%;
  /* background-color: rebeccapurple; */
`;

const Icon = styled.a`
  margin: 0px 0px 0px 15px;
  :hover {
    color: #55c6a6;
    cursor: pointer;
  }
`;

/*
아이콘에 onclick을 하면 메소드에 상태값을 변경하면 
상세내용이 보였다가 안보였다가 하는 방법을 구현
*/

const Todo = () => (
  <Container>
    <Form>
      <CheckBox></CheckBox>
      <Title>title</Title>
      <Text>text....</Text>
      <Icon>
        <FontAwesomeIcon
          icon={faCaretDown}
          onClick={() => {
            console.log("상세");
          }}
        />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faEdit} />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faTrashAlt} />
      </Icon>
    </Form>
  </Container>
);

export default Todo;
