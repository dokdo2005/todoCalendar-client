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

const ToDoTitle = styled.h3`
  font-size: 50px;
  margin: 20px 0px;
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

const TodoPresenter = ({
  UpdateTodoList,
  todoList,
  isLogin,
  handleTodoModal,
  addTodoModal,
  handleUpdateTitle,
  handleUpdateTime,
  handleUpdateBody,
  handleClearAll,
  updatetitle,
  updatetime,
  updatebody,
}) => (
    <Container>
      {addTodoModal ? (
        <MainTodoView></MainTodoView>
      ) : (
          <>
            <Clock />
            <ToDoTitle>
              ☑ TODO LIST
          <TodoAddBtnSection>
                <TodoAddBtn handleTodoModal={handleTodoModal} handleClearAll={handleClearAll} />
              </TodoAddBtnSection>
            </ToDoTitle>
            <TodoList>
              {todoList.map((item) => (
                <Todo
                  handleUpdateTitle={handleUpdateTitle}
                  handleUpdateTime={handleUpdateTime}
                  handleUpdateBody={handleUpdateBody}
                  updatetitle={updatetitle}
                  updatetime={updatetime}
                  updatebody={updatebody}
                  key={item.id}
                  data={item}
                  UpdateTodoList={UpdateTodoList}
                />
              ))}
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
