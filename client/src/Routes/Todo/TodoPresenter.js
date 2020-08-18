import React from "react";
import styled from "styled-components";
import Clock from "../../components/Clock";
import Todo from "../../components/Todo";
import AddTodo from "../../components/AddTodo";
import Quotes from "../../components/Quotes";

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 1.5;
  padding-top: 100px;
`;

const QuotesSection = styled.div`
  padding: 30px 0px;
`;

const TodoPresenter = () => (
  <Container>
    <Clock />
    <QuotesSection>
      <Quotes />
    </QuotesSection>

    <Todo />
    {/* <AddTodo /> */}
    {/* <AllClear />
    <AddBtn /> */}
  </Container>
);

export default TodoPresenter;
