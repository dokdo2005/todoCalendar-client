import React from "react";
import styled from "styled-components";
import Timer from "react-live-clock";

const Container = styled.div``;

const Section = styled.div``;

const Clock = () => (
  <Container>
    <Section>
      <Timer
        format={"YYYY 년 MM 월 DD 일 "}
        ticking={true}
        timezone={"US/Pacific"}
      />
    </Section>
    <Section>
      <Timer format={"HH 시 mm 분"} ticking={true} timezone={"US/Pacific"} />
    </Section>
  </Container>
);

export default Clock;
