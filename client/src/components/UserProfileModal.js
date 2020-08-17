import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import UserImg from "./UserProfileImg";

const UserInfoModal = styled.div`
  width: 250px;
  height: 200px;
  background: white;
  border-radius: 10px;
  position: fixed;
  top: 50px;
  right: 20px;
  box-shadow: 2px 2.5px 2.5px 2.5px rgba(0, 0, 0, 0.2);
`
const UserInfoWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;
  text-align: center;
  padding: 20px;

`;
const Username = styled.div`
  margin: 2px;
  width: 100%;
  height: 30px;
  padding: 6px 0;
`;
const UserEmail = styled.div`
  margin: 2px;
  width: 100%;
  height: 30px;
  padding: 6px 0;
  `;
const LogoutBtn = styled(Link)`
  margin: 2px;
  display: block;
  width: 100%;
  height: 30px;
  color: black;
  font-weight: bold;
  padding: 6px 0;
  :hover{
    color: rgba(40, 152, 0);
  }
  `;
const EditBtn = styled.div`
  float:right;
`

export default ({ isUserProfileModalVisible, handleLogout, userData }) => {
  const { email, username } = userData;

  return (
    <>
      {
        isUserProfileModalVisible ?
          <UserInfoModal>
            <UserInfoWrapper>
              <EditBtn>ㅎ</EditBtn>
              <UserImg useFor={`modal`} src={"https://lh3.googleusercontent.com/ogw/ADGmqu_-n8nrFWm-MpZHy54krYtwVgLmBamnKrqNWfcu=s32-c-mo"} />
              <Username>{username}</Username>
              <UserEmail>{email}</UserEmail>
              <LogoutBtn to={`/`} onClick={handleLogout}>로그아웃</LogoutBtn>
            </UserInfoWrapper>
          </UserInfoModal>
          :
          null
      }
    </>
  )


}