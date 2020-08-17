import styled from "styled-components";
import React from "react";


const UserProfileImg = styled.img`
  border-radius: 100%;
  height: ${props => props.useFor};
`;


export default ({ src, useFor, handleUserProfileModal}) => {
  const widthList = {
    modal: `70px`,
    navBar: `35px`,
  }
  return (
      <UserProfileImg 
        onClick= {handleUserProfileModal}
        useFor={widthList[useFor]}
        src={src ? src : null}
      />
  )
}