import React from 'react';
import styled from "styled-components/native";
import Header from '../components/Header/Header';
import Product from '../components/Home/Product';
import Search from '../components/Search';
import Sidebar from '../components/Sidebar/Sidebar';

const Wrapper = styled.View`
  height: 100%;
  display: flex;
  align-items: center;
  background: #fff;
`;

const HomeScreen = () => {
  return (
    <Wrapper>
      <Header />
      <Search />
      <Sidebar />
    </Wrapper>
  );
};

export default HomeScreen;