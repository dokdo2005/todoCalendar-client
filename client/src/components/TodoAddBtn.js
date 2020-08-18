import React from "react";
import styled from "styled-components";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div``;

const Form = styled.form``;

const BottomBtn = styled.button`
  font-size: 14px;
  margin: 0px 10px;
  padding: 5px 10px;
  border-radius: 5%;
  :hover {
    background: #44b64f;
    color: white;
  }
`;

const TodoAddBtn = () => (
  <Container>
    <Form>
      <BottomBtn>ClearAll</BottomBtn>
      <BottomBtn>
        <FontAwesomeIcon icon={faPlus} />
      </BottomBtn>
    </Form>
  </Container>
);

export default TodoAddBtn;
