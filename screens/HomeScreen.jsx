import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import Header from "../components/Header/Header";
import ComboProducts from "../components/Home/ComboProducts";
import PopularProducts from "../components/Home/PopularProducts";
import Stocks from "../components/Home/Stocks";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar/Sidebar";

const Wrapper = styled.View`
  height: 100%;
  display: flex;
  align-items: center;
  background: #fff;
`;

const HomeScreen = ({navigation}) => {
  return (
    <Wrapper>
      <Header navigation={navigation} />
      <Search />
      <Stocks />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <PopularProducts />
        <ComboProducts />
      </ScrollView>
      <Sidebar />
    </Wrapper>
  );
};

export default HomeScreen;
