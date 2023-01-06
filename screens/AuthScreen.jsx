import React from 'react';
import { ImageBackground, Text } from 'react-native';
import { useSelector } from 'react-redux';
import styled from "styled-components/native";
import LoginForm from '../components/Auth/LoginForm';
import RegForm from '../components/Auth/RegForm';

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

const AuthScreen = ({navigation}) => {
  const activeTab = useSelector(state => state.auth.activeTab);

  return (
    <Wrapper>
      <ImageBackground source={require("../assets/bg.jpg")} resizeMode="cover" style={{height: "100%"}}>
        <WrapperForms>
          {
            activeTab === 0 ? <LoginForm navigation={navigation} /> : <RegForm />
          }
        </WrapperForms>
      </ImageBackground>
    </Wrapper>
  );
};

export default AuthScreen;