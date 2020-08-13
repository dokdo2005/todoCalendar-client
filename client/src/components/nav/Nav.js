import React from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  background-color: rgba(40, 152, 0, 0.17);
  width: 100%;
  height: 50px;
  display: block;
  position: fixed;
  top: 0%;
  z-index: 289;
`;
const Welcome = styled.div`
  float: left;
  font-weight: bold;
  font-size: 25px;
  padding: 5.5px 10px;
`;
const UserBtn = styled.a`
  color: black;
  margin: 0 10px;
  float: right;
  font-weight: bold;
  font-size: 25px;
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

const UserInfoBtn = styled.img`
  margin: 3px 10px;
  border-radius: 100%;
`;

export default function Nav() {
  const tempIsLogin = false;
  const tempUserName = "포시즌";
  const tempUserImgsrc =
    "https://lh3.googleusercontent.com/ogw/ADGmqu_-n8nrFWm-MpZHy54krYtwVgLmBamnKrqNWfcu=s32-c-mo";

  return (
    <>
      <NavBar>
        {tempIsLogin ? (
          <Welcome>반갑습니다 {tempUserName}님</Welcome>
        ) : (
          <Welcome>Welcome \^^/</Welcome>
        )}
        <NavItemWrapper>
          {tempIsLogin ? (
            <UserInfoBtn src={tempUserImgsrc} />
          ) : (
            <>
              <UserBtn onClick={(e) => console.log(`ㅎㅇ`)}>회원가입</UserBtn>
              <UserBtn onClick={(e) => console.log(`ㅂㅇ`)}>로그인</UserBtn>
            </>
          )}
        </NavItemWrapper>
      </NavBar>
      <NavBlackFiller></NavBlackFiller>
    </>
  );
}
