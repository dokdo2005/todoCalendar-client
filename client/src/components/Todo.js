import React from "react";
import styled from "styled-components";
import {
  faCaretDown,
  faEdit,
  faTrashAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.section`
  align-content: center;
`;

const Form = styled.form`
  display: flex;
`;

const CheckBox = styled.input.attrs({
  type: "checkbox",
})`
  margin: 0px 10px 0px 0px;
`;

const Title = styled.h3`
  width: 10%;
`;

const Text = styled.span`
  width: 30%;
`;

const Icon = styled.a`
  margin: 0px 0px 0px 15px;
`;

const BottomBtn = styled.button`
  margin: 0px 0px 0px 10px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: lightgrey;
`;

const Todo = () => (
  <Container>
    <Form>
      <CheckBox></CheckBox>
      <Title>title</Title>
      <Text>text....</Text>
      <Icon>
        <FontAwesomeIcon icon={faCaretDown} />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faEdit} />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faTrashAlt} />
      </Icon>
    </Form>
    <Form>
      <BottomBtn>
        Clear<br />All
      </BottomBtn>
      <BottomBtn>
        <FontAwesomeIcon icon={faPlus} />
      </BottomBtn>
    </Form>
  </Container>
);

export default Todo;
