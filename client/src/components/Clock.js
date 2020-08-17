import React from "react";
import styled from "styled-components";
import Timer from "react-live-clock";

const Container = styled.div``;

<<<<<<< HEAD
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
=======
export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: null,
            currentDate: null
        }
        this.getTime = null
        this.getDate = null
    }

    componentDidMount() {
        this.getTime = setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleTimeString()
            })
        }, 1000);
        this.getDate = setInterval(() => {
            this.setState({
                currentDate: new Date().toLocaleDateString()
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.getTime);
        clearInterval(this.getDate);
    }

    render() {
        if (this.state.currentTime === null || this.state.currentDate === null) {
            return (
                <Container>
                    Loading...
                </Container>
            )
        }
        return (
            <Container>
                <h2>{this.state.currentTime}</h2>
                <h3>{this.state.currentDate}</h3>
            </Container>
        )
    }
}
>>>>>>> 002685b39975305a0ffe00bb6bb2057b0947dc50
