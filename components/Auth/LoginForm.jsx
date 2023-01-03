import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  position: relative;
  min-height: 355px;
  padding: 35px 49px;
  border-radius: 20px;
  opacity: 0.5;
  border: 0.97549px solid rgba(255, 255, 255, 0.3);
`;

const LoginForm = () => {
  return (
      <Wrapper blurRadius={1}>
      <LinearGradient 
        colors={['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.15)']}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          borderRadius: "20px",
        }}
      >
        
      </LinearGradient>
    </Wrapper>
  );
};

export default LoginForm;
