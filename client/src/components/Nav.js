import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserProfileModal from "./UserProfileModal";
import UserImg from "./UserProfileImg";
import logo from "../image/timo.png";
import Quotes from "./Quotes";

const NavBar = styled.nav`
  position: relative;
  background-color: #55c6a6;
  width: 100%;
  height: 50px;
  display: block;
  position: fixed;
  top: 0%;
  z-index: 289;
`;
const UserBtn = styled(Link)`
  color: white;
  margin: 0 10px;
  float: right;
  font-size: 21px;
  line-height: 1.8;
  :hover {
    color: #007349;
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

const QuotesWrap = styled.div`
  /* background-color: red; */
  position: absolute;
  left: 70px;
  line-height: 2.5;
  color: white;
`;

export default function Nav({
  isLogin,
  handleLogout,
  userData,
  handleUserProfileModal,
}) {
  const [isUserProfileModalVisible, setUserProfileModalVisible] = useState(
    false
  );

  function handleUserProfileModal() {
    setUserProfileModalVisible(!isUserProfileModalVisible);
  }

  return (
    <>
      <NavBar>
        <Link to={"/"}>
          <HomeBtn src={logo} />
        </Link>
        <NavItemWrapper>
          {isLogin ? (
            <>
              <UserImg
                useFor={`navBar`}
                src={logo}
                handleUserProfileModal={handleUserProfileModal.bind(this)}
              ></UserImg>
              <QuotesWrap>
                <Quotes></Quotes>
              </QuotesWrap>
              <UserProfileModal
                isUserProfileModalVisible={isUserProfileModalVisible}
                userData={userData}
                handleLogout={handleLogout}
              />
            </>
          ) : (
            <>
              <QuotesWrap>
                <Quotes></Quotes>
              </QuotesWrap>
              <UserBtn to="/signup">회원가입</UserBtn>
              <UserBtn to="/login">로그인</UserBtn>
            </>
          )}
        </NavItemWrapper>
      </NavBar>
      <NavBlackFiller></NavBlackFiller>
    </>
  );
}
