import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 50vh;
  min-width: 160px;
  min-height: 460px;
  /* padding: 20px; */
  margin: 0 auto;
  /* border: 1px solid black; */
  border-radius: 2%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 20px;
  padding-bottom: 20px;
`;

const CancelBtn = styled.a`
  font-size: 20px;
  :hover {
    cursor: pointer;
  }
`;

const Form = styled.form``;

const Section = styled.div`
  padding-bottom: 10px;
`;

const TitleLabel = styled.label`
  font-size: 18px;
`;

const TitleInput = styled.input`
  border-bottom: 1px solid black;
  width: 70%;
`;

const TimeLabel = styled.label`
  font-size: 18px;
`;

const TimeInput = styled.input.attrs({
  type: "time",
})`
  border-bottom: 1px solid black;
  width: 70%;
  font-size: 17px;
`;

const TextLabel = styled.p`
  font-size: 16px;
`;

const Textarea = styled.textarea`
  min-width: 100%;
  min-height: 200px;
  padding: 10px;
  background-color: rgb(0, 0, 0, 0.1);
  resize: none;
  border-radius: 2%;
  font-size: 16px;
`;

const SendBtn = styled.button`
  border-radius: 4%;
  background-color: #62ab3f;
  color: white;
  padding: 10px 25px;
  font-size: 20px;
  :hover {
    background-color: #007349;
    box-shadow: 0.5px 3px 2px 2px rgba(0, 0, 255, 0.2);
  }
`;

const UpdateTodo = ({
  setIsModalState,
  isModalState,
  data,
  UpdateTodoList,
  handleUpdateTitle,
  handleUpdateTime,
  handleUpdateBody,
  updatetitle,
  updatetime,
  updatebody,
}) => (
  <Container>
    <Header>
      <Title>일정 수정</Title>
      <CancelBtn onClick={() => setIsModalState(!isModalState)}>X</CancelBtn>
    </Header>
    <Form>
      <Section>
        <TitleLabel>Title : </TitleLabel>
        <TitleInput
          defaultValue={data.title}
          onChange={(e) => {
            e.preventDefault();
            handleUpdateTitle(e.target.value);
          }}
        ></TitleInput>
      </Section>
      <Section>
        <TimeLabel>Time : </TimeLabel>
        <TimeInput
          defaultValue={data.startDate.substring(11, 16)}
          onChange={(e) => {
            e.preventDefault();
            handleUpdateTime(e.target.value);
          }}
        ></TimeInput>
      </Section>
      <Section>
        <TextLabel>Content</TextLabel>
        <Textarea
          defaultValue={data.body}
          onChange={(e) => {
            e.preventDefault();
            handleUpdateBody(e.target.value);
          }}
        ></Textarea>
      </Section>
      <SendBtn
        onClick={(e) => {
          e.preventDefault();

          //수정되지 않은 경우 생각하기
          if (updatetitle === null) {
            updatetitle = data.title;
          }
          if (updatebody === null) {
            updatebody = data.body;
          }
          if (updatetime === null) {
            updatetime = data.startDate.substring(11, 16);
          }

          UpdateTodoList(data.id, updatetitle, updatebody, updatetime);
        }}
      >
        Send
      </SendBtn>
    </Form>
  </Container>
);

export default UpdateTodo;
