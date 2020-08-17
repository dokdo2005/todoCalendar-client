import React from "react";
import styled from "styled-components";
import Clock from "../../components/Clock";
import Todo from "../../components/Todo";
import AddTodo from "../../components/AddTodo";

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */
`;

const TodoPresenter = () => (
  <Container>
    <Clock />
    {/* <WiseSaying /> */}
    <Todo />
    <AddTodo />
    {/* <AllClear />
    <AddBtn /> */}
  </Container>
);

export default TodoPresenter;
