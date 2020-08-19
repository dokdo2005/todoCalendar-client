import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 50vh;
  height: 50vh;
  min-width: 160px;
  min-height: 460px;
  padding: 30px;
  margin: 0 auto;
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

const CancelBtn = styled.a`
  font-size: 28px;
`;

const Form = styled.form``;

const Section = styled.div`
  padding-bottom: 20px;
`;

const TitleLabel = styled.label`
  font-size: 20px;
`;

const TitleInput = styled.input`
  border-bottom: 1px solid black;
  width: 70%;
`;

const TimeLabel = styled.label`
  font-size: 20px;
`;

const TimeInput = styled.input.attrs({
  type: "time",
})`
  border-bottom: 1px solid black;
  width: 70%;
`;

const TextLabel = styled.p`
  font-size: 20px;
`;

const Textarea = styled.textarea`
  min-width: 100%;
  min-height: 150px;
  background-color: rgb(0, 0, 0, 0.1);
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
/*
X를 클릭하면 홈으로 돌아가는 함수,
send버튼을 누르면 서버로 전송하고 List를 만드는 함수,
text를 입력하면 저장하는 state값
*/
const UpdateTodo = ({ setIsModalState, isModalState }) => (
  <Container>
    <Header>
      <Title>일정 수정</Title>
      <CancelBtn onClick={() => setIsModalState(!isModalState)}>X</CancelBtn>
    </Header>
    <Form>
      <Section>
        <TitleLabel>Title : </TitleLabel>
        <TitleInput></TitleInput>
      </Section>
      <Section>
        <TimeLabel>Time : </TimeLabel>
        <TimeInput></TimeInput>
      </Section>
      <Section>
        <TextLabel>Content</TextLabel>
        <Textarea></Textarea>
      </Section>
      <SendBtn>Send</SendBtn>
    </Form>
  </Container>
);

export default UpdateTodo;
