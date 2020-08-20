import React,{useState} from "react";
import styled from "styled-components";
import { todoApi } from "../api";

const Container = styled.div`
  width: 50vh;
  height: 50vh;
  min-width: 160px;
  min-height: 460px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 2%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 30px;
  padding-bottom: 20px;
`;

const CancelBtn = styled.div`
  font-size: 28px;
  cursor: pointer;
`;

const Form = styled.form``;

const Section = styled.div`
  padding-bottom: 15px;
`;

const TitleLabel = styled.label`
  font-size: 20px;
`;

const TimeLabel = styled.label`
  font-size: 20px;
`;

const TimeInput = styled.input.attrs({
   type: "time",
   name: 'timeInput'
  })`
  border-bottom: 1px solid black;
  width: 70%;
`;

const TitleInput = styled.input.attrs({
  name: 'titleInput'
})`
  border-bottom: 1px solid black;
  width: 70%;
`;
const TextLabel = styled.p`
  font-size: 20px;
`;

const Textarea = styled.textarea.attrs({
  name: 'contentInput'
})`
  min-width: 100%;
  min-height: 180px;
  background-color: rgb(0, 0, 0, 0.1);
  border-radius: 3%;
  padding: 10px;
  resize: none;
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

const AddTodo = ({ handleTodoModal,updateTodoData }) => {
  
const [timeInput, setTimeInput] = useState('')
const [titleInput, setTitleInput]  = useState('')
const [contentInput, setContentInput]  = useState('')

  return (
  <Container>
    <Header>
      <Title>일정 추가</Title>
      <CancelBtn onClick={handleTodoModal}>X</CancelBtn>
    </Header>
    <Form>
      <Section>
        <TitleLabel>Title : </TitleLabel>
        <TitleInput
          onChange={e => setTitleInput(e.target.value)}
        ></TitleInput>
      </Section>
      <Section>
        <TimeLabel>Time : </TimeLabel>
        <TimeInput
          onChange={e => setTimeInput(e.target.value)}
        ></TimeInput>
      </Section>
      <Section>
        <TextLabel>Content</TextLabel>
        <Textarea
          onChange={e => setContentInput(e.target.value)}
        ></Textarea>
      </Section>
      <SendBtn
        onClick={async (e) => {
          e.preventDefault();
          await todoApi.createOne(titleInput,contentInput,timeInput)
          await updateTodoData();
          handleTodoModal();
        }}
      >
        Send
      </SendBtn>
    </Form>
  </Container>
)};

export default AddTodo;
