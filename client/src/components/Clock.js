import React from "react";
import styled from "styled-components";
import Timer from "react-live-clock";

const Container = styled.div`
  font-size: 30px;
`;

const Section = styled.div``;

const Clock = () => (
  <Container>
    <Section>
      <Timer
        format={"YYYY년 MM월 DD일 "}
        ticking={true}
        timezone={"Asia/Seoul"}
      />
      <Timer format={"HH시 mm분"} ticking={true} timezone={"Asia/Seoul"} />
    </Section>
  </Container>
);

export default Clock;
