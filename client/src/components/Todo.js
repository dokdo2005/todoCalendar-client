import React from "react";
import styled from "styled-components";
import {
  faCaretDown,
  faEdit,
  faTrashAlt,
  faCaretUp,
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
  padding-right: 50px;
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

const Time = styled.div`
`;

const Div = styled.div``;


const Todo = ({ isDetail, handleDetail }) => (
  <Container>
    {isDetail ? (
      <Form>
        <CheckBox></CheckBox>
        <Title>title</Title>
        <Text>text....</Text>

        <Icon>
          <FontAwesomeIcon icon={faCaretUp} onClick />
          {/* 이것을누르면 넓어지면서 내용을 다보여준다. 온클릭 true false 분기해서 창을 변화시킨다. 
        true면 상태값에서 내려오는 생성시간 종료시간도 넣는다.
        false값이면 상태값에서 내려오는 설명을 ...으로 만들어 넣는다. */}
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faEdit} />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Icon>

      </Form>

      //////////////////////////////////////////////
    ) : (<Form>
      <CheckBox></CheckBox>
      <Title>title</Title>
      <Div>
        <Text>여기가 true라고 생각하고</Text>
        <Time>시간</Time>
      </Div>
      <Icon>
        <FontAwesomeIcon icon={faCaretUp} onClick />
        {/* 이것을누르면 넓어지면서 내용을 다보여준다. 온클릭 true false 분기해서 창을 변화시킨다. 
        true면 상태값에서 내려오는 생성시간 종료시간도 넣는다.
        false값이면 상태값에서 내려오는 설명을 ...으로 만들어 넣는다. */}
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faEdit} />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faTrashAlt} />
      </Icon>
    </Form>)}
  </Container>
);

export default Todo;
