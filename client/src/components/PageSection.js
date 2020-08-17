import React from 'react';
import styled from "styled-components";


const PageSection = styled.section`
  border: 1px solid black;
  width:80%;
  margin: 10px auto;
`

export default ({ children }) => (
  <PageSection>{children}</PageSection>
)