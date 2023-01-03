import React from 'react';
import { ImageBackground, Text } from 'react-native';
import styled from "styled-components/native";
import LoginForm from '../components/Auth/LoginForm';

const Wrapper = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
`;

const WrapperForms = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const AuthScreen = () => {
  return (
    <Wrapper>
      <ImageBackground source={require("../assets/bg.jpg")} resizeMode="cover" style={{height: "100%"}}>
        <WrapperForms>
          <LoginForm />
        </WrapperForms>
      </ImageBackground>
    </Wrapper>
  );
};

export default AuthScreen;