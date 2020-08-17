import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserProfileModal from "./UserProfileModal";
import UserImg from "./UserProfileImg";


const NavBar = styled.nav`
  background-color: rgba(40, 152, 0, 0.17);
  width: 100%;
  height: 50px;
  display: block;
  position: fixed;
  top: 0%;
  z-index: 289;
`;
const UserBtn = styled(Link)`
  color: black;
  margin: 0 10px;
  float: right;
  font-weight: bold;
  font-size: 25px;
  line-height: 1.5;
  :hover {
    color: rgba(40, 152, 0);
  }
`;
const NavItemWrapper = styled.div`
  padding: 5.5px 10px;
  float: right;
`;
const NavBlackFiller = styled.div`
  height: 50px;
`;


const HomeBtn = styled.img`
  border-radius: 50%;
  float: left;
  padding: 2px 10px;
  width: 60px;
`;

export default function Nav({ isLogin, handleLogout, userData, isUserProfileModalVisible, handleUserProfileModal }) {
  const tempUserImgsrc =
    "https://lh3.googleusercontent.com/ogw/ADGmqu_-n8nrFWm-MpZHy54krYtwVgLmBamnKrqNWfcu=s32-c-mo";
  // 이미지 결정하고 수정해야함
  const homeBtnSrc = `data:image/jpeg;base64,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`;

  return (
    <>
      <NavBar>
        <Link to={"/"}>
          <HomeBtn src={homeBtnSrc} />
        </Link>
        <NavItemWrapper>
          {
            isLogin ? (
              <>
                <UserImg 
                  useFor = {`navBar`}
                  src = {tempUserImgsrc}
                  handleUserProfileModal={handleUserProfileModal}
                ></UserImg>
                <UserProfileModal
                  isUserProfileModalVisible={isUserProfileModalVisible}
                  userData={userData}
                  handleLogout={handleLogout}
                />
              </>
            ) : (
              <>
                  <UserBtn to="/signup" >회원가입</UserBtn>
                  <UserBtn to="/login" >로그인</UserBtn>
                </>
              )}
        </NavItemWrapper>
      </NavBar>
      <NavBlackFiller></NavBlackFiller>
    </>
  );
}
