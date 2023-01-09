import React from 'react';
import styled from "styled-components/native";

const Wrapper = styled.TouchableOpacity`
  width: 100%;
  border-radius: 30px;
  background: #F5F4F4;
  border-width: 1px;
  border-style: solid;
  border-color: #DB4B40;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
  padding: 11px 50px;
  align-self: flex-end;
`;

const BtnText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  color: #DB4B40;
`;

const LogoutBtn = () => {
  return (
    <Wrapper>
      <BtnText>Log out</BtnText>
    </Wrapper>
  );
};

export default LogoutBtn;