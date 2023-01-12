import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import FavouriteList from "../components/Favourite/FavouriteList";
import Sidebar from "../components/Sidebar/Sidebar";

const Wrapper = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Favourite = ({ navigation }) => {
  return (
    <Wrapper>
      <FavouriteList />
      <Sidebar navigation={navigation} />
    </Wrapper>
  );
};

export default Favourite;
