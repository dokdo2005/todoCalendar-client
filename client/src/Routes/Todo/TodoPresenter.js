import React from "react";
import styled from "styled-components";
import Clock from "../../components/Clock";
import Todo from "../../components/Todo";
import AddTodo from "../../components/AddTodo";
import TodoAddBtn from "../../components/TodoAddBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 1.5;
  padding-top: 100px;
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
const BeforeLogin = styled.div`
  padding: 50px;
  font-size: 30px;
`;
const ModalSection = styled.div`
  border-radius: 3%;
  position: relative;
  top: 0px;
  display: inline-block;
  background-color: white;
`;
const Icon = styled.div`
  padding: 30px;
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
    {isLogin ? (
      // 로그인 후
      todoList ? (
        // 데이터를 받아온 경우
        <>
          {addTodoModal ? (
            <MainTodoView></MainTodoView>
          ) : (
            <>
              <Clock />
              <ToDoTitle>
                ☑ TODO LIST
                <TodoAddBtnSection>
                  <TodoAddBtn
                    handleClearAll={handleClearAll}
                    handleTodoModal={handleTodoModal}
                  />
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
        </>
      ) : (
        // 데이터가 없는 경우
        <>
          <Clock />
          <Icon>
            <FontAwesomeIcon icon={faSpinner} pulse size={"5x"} />
          </Icon>
        </>
      )
    ) : (
      // 로그인전
      <>
        <Clock />
        <BeforeLogin>Welcom ToDoList</BeforeLogin>
      </>
    )}
  </Container>
);
export default TodoPresenter;
