import React from 'react';
import styled from "styled-components/native";
import Tabs from "./Tabs";
import { LinearGradient } from "expo-linear-gradient";

const Wrapper = styled.View`
  position: relative;
  max-width: 354px;
  width: 100%;
  min-height: 503px;
  padding: 35px 49px;
  border-radius: 20px;
  border: 0.97549px solid rgba(255, 255, 255, 0.3);
`;

const RegForm = () => {
  return (
    <Wrapper>
      <LinearGradient 
        colors={['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.15)']}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          borderRadius: "20px",
          opacity: 0.35,
        }}
      >
      </LinearGradient>
      <Tabs />
    </Wrapper>
  );
};

export default RegForm;