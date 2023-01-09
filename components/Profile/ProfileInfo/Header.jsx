import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const AvatarWrapper = styled.View`
  position: relative;
  width: 59px;
  height: 59px;
  border-radius: 50px;
  overflow: hidden;
`;

const Avatar = styled.Image`
  width: 100%;
  height: 100%;
`;

const LogoWrapper = styled.View`
  width: 71px;
  height: 60px;
`;

const Logo = styled.Image`
  width: 100%;
  height: 100%;
`;

const Header = () => {
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar
          source={require("../../../assets/Profile/avatar.png")}
          resizeMode="contain"
        />
      </AvatarWrapper>
      <LogoWrapper>
        <Logo source={require("../../../assets/Profile/mc-logo.png")} resizeMode="contain" />
      </LogoWrapper>
    </Wrapper>
  );
};

export default Header;
