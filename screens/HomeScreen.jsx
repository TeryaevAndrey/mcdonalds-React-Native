import React from 'react';
import styled from "styled-components/native";
import Sidebar from '../components/Sidebar/Sidebar';

const Wrapper = styled.View`
  height: 100%;
  display: flex;
  align-items: center;
`;

const HomeScreen = () => {
  return (
    <Wrapper>
      <Sidebar />
    </Wrapper>
  );
};

export default HomeScreen;