import React, { useState } from "react";
import styled from "styled-components";
import {
  faCaretDown,
  faEdit,
  faTrashAlt,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpdateTodo from "../components/UpdateTodo";

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
  width: 30%;
  padding-right: 50px;
  max-width: 150px;
`;

const Text = styled.span`
  width: 100%;
`;

const Icon = styled.a`
  margin: 0px 0px 0px 15px;
  :hover {
    color: #55c6a6;
    cursor: pointer;
  }
`;

const Time = styled.div``;

const Div = styled.div`
  width: 80%;
`;

const Todo = ({ data }) => {
  const [isDetailState, setIsDetailState] = useState(false);
  const [isModalState, setIsModalState] = useState(false);

  console.log(data.id);

  return (
    <Container>
      {isModalState ? (
        <UpdateTodo
          setIsModalState={setIsModalState.bind(this)}
          isModalState={isModalState}
        />
      ) : isDetailState ? (
        <Form>
          <CheckBox></CheckBox>
          <Title>{data.title}</Title>
          <Div>
            <Text>{`${data.body}`}</Text>
            <Time>{`Time : ${data.startDate.substring(
              11,
              13
            )}시 ${data.startDate.substring(14, 16)}분`}</Time>
          </Div>
          <Icon>
            <FontAwesomeIcon
              icon={faCaretUp}
              onClick={() => setIsDetailState(!isDetailState)}
            />
          </Icon>
          <Icon>
            <FontAwesomeIcon
              icon={faEdit}
              onClick={() => setIsModalState(!isModalState)}
            />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faTrashAlt} />
          </Icon>
        </Form>
      ) : (
        <Form>
          <CheckBox></CheckBox>
          <Title>{`${data.title.substring(0, 5)}...`}</Title>
          <Text>{`${data.body.substring(0, 25)}...`}</Text>
          <Icon>
            <FontAwesomeIcon
              icon={faCaretDown}
              onClick={() => setIsDetailState(!isDetailState)}
            />
          </Icon>
          <Icon onClick={() => setIsModalState(!isModalState)}>
            <FontAwesomeIcon icon={faEdit} />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faTrashAlt} />
          </Icon>
        </Form>
      )}
      {/* {isDetailState ? (
        <Form>
          <CheckBox></CheckBox>
          <Title>{data.title}</Title>
          <Div>
            <Text>{`${data.body}`}</Text>
            <Time>{`Time : ${data.startDate.substring(
              11,
              13
            )}시 ${data.startDate.substring(14, 16)}분`}</Time>
          </Div>
          <Icon>
            <FontAwesomeIcon
              icon={faCaretUp}
              onClick={() => setIsDetailState(!isDetailState)}
            />
          </Icon>
          <Icon>
            <FontAwesomeIcon
              icon={faEdit}
              onClick={() => console.log("enter")}
            />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faTrashAlt} />
          </Icon>
        </Form>
      ) : (
        <Form>
          <CheckBox></CheckBox>
          <Title>{`${data.title.substring(0, 5)}...`}</Title>
          <Text>{`${data.body.substring(0, 25)}...`}</Text>
          <Icon>
            <FontAwesomeIcon
              icon={faCaretDown}
              onClick={() => setIsDetailState(!isDetailState)}
            />
          </Icon>
          <Icon
            onClick={(e) => {
              console.log(data.id);
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faTrashAlt} />
          </Icon>
        </Form>
      )} */}
    </Container>
  );
};

export default Todo;

/*
로그인된 화면

<Form>
        <CheckBox></CheckBox>
        <Title>{data.title}</Title>
        <Div>
          <Text>{`${data.body}`}</Text>
          <Time>{`Time : ${data.startDate.substring(
            11,
            13
          )}시 ${data.startDate.substring(14, 16)}분`}</Time>
        </Div>
        <Icon>
          <FontAwesomeIcon
            icon={faCaretUp}
            onClick={(e) => {
              console.log(e.target, "상세");
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
*/
