import React from "react";
import styled from "styled-components";
import Clock from "../../components/Clock";
import Todo from "../../components/Todo";
import AddTodo from "../../components/AddTodo";
import Quotes from "../../components/Quotes";
import TodoAddBtn from "../../components/TodoAddBtn";

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 1.5;
  padding-top: 100px;
  /* background-color: bisque; */
`;

const MainTodoView = styled.div``;

const QuotesSection = styled.div`
  padding: 30px 0px;
`;

const ToDoTitle = styled.h3`
  font-size: 30px;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
  margin-left: 15%;
  width: 70%;
  position: relative;
`;

const TodoList = styled.ul`
  width: 100%;
  height: 100%;
  display: inline-block;
`;

const TodoAddBtnSection = styled.div`
  /* background-color: red; */
  position: absolute;
  right: 0;
  top: 0;
`;

const BeforeLogin = styled.div``;

const ModalSection = styled.div`
  border-radius: 3%;
  position: relative;
  top: 0px;
  display: inline-block;
  background-color: white;
`;

const TodoPresenter = ({ isLogin, handleTodoModal, addTodoModal, isDetail, handleDetail }) => (
  <Container>
    {addTodoModal ? (
      <MainTodoView></MainTodoView>
    ) : (
        <>
          <Clock />
          <QuotesSection>
            <Quotes />
          </QuotesSection>
          <ToDoTitle>
            ToDo List 📚
          <TodoAddBtnSection>
              <TodoAddBtn handleTodoModal={handleTodoModal} />
            </TodoAddBtnSection>
          </ToDoTitle>
          <TodoList>
            <Todo isDetail={isDetail} handleDetali={handleDetail} />

          </TodoList>
        </>
      )}

    {addTodoModal ? (
      <ModalSection>
        <AddTodo handleTodoModal={handleTodoModal} />
      </ModalSection>
    ) : (
        <></>
      )}

    {/* {isLogin ? (
      <>
        <ToDoTitle>
          ToDo List 📚
          <TodoAddBtnSection>
            <TodoAddBtn />
          </TodoAddBtnSection>
        </ToDoTitle>
        <TodoList>
          <Todo />
        </TodoList>
        <AddTodo />
      </>
    ) : (
      <BeforeLogin>hello</BeforeLogin>
    )} */}
  </Container>
);

export default TodoPresenter;
