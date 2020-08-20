import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 76px;
  padding: 100px 0px 30px 0px;
`;


export default ({titleName}) => {
  return <Title>{titleName}</Title>
}