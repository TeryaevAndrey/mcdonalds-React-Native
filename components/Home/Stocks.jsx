import React from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";
import { stocksData } from "./stocksData";

const Wrapper = styled.View`
  margin-top: 7px;
  width: 100%;
  height: 140px;
  padding: 0 20px;
  border-radius: 12px;
  overflow: hidden;
`;

const Stocks = () => {
  const [activeEl, setActiveEl] = React.useState(0);

  const onChangeActiveEl = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );

    if (slide !== activeEl) {
      setActiveEl(slide);
    }
  };

  return (
    <Wrapper>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onChangeActiveEl}
      >
        {stocksData.map((item, index) => {
          return (
            <Image
              key={index}
              source={item}
              resizeMode="cover"
              style={{
                width: Dimensions.get("window").width - 40,
                height: "100%",
              }}
            />
          );
        })}
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: 6,
          alignSelf: "center",
        }}
      >
        {stocksData.map((item, index) => {
          return (
            <Text
              key={index}
              style={{
                color: activeEl === index ? "#A5A3A3" : "#EFEFEF",
                fontSize: 5,
                marginLeft: 2,
                marginRight: 2,
              }}
            >
              ⬤
            </Text>
          );
        })}
      </View>
    </Wrapper>
  );
};

export default Stocks;
