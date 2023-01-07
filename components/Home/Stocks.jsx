import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";
import stocksData from "./stocksData";

const Wrapper = styled.View`
  margin-top: 7px;
  width: 100%;
  height: 140px;
  padding: 0 20px;
  border-radius: 12px;
  overflow: hidden;
`;

const Stocks = () => {
  return (
    <Wrapper>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {stocksData.map((item, index) => {
          return <Image key={index} source={{ uri: item }} style={{width: "100%", height: "100%"}} />;
        })}
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "#fff" }}>⬤</Text>
      </View>
    </Wrapper>
  );
};

export default Stocks;
