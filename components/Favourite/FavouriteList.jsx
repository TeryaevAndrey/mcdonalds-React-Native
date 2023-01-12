import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import FavouriteProduct from "./FavouriteProduct";

const Wrapper = styled.View`
  align-items: center;
  height: 80%;
  width: 100%;
  margin-top: 50px;
`;

const FavouriteList = () => {
  return (
    <Wrapper>
      <ScrollView style={{width: "100%", paddingHorizontal: 26, flex: 1}}>
        <FavouriteProduct />
        <FavouriteProduct />
        <FavouriteProduct />
        <FavouriteProduct />
      </ScrollView>
    </Wrapper>
  );
};

export default FavouriteList;
