import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import Product from "../Product";
import { productsPopularData } from "./productsPopularData";

const Wrapper = styled.View`
  width: 100%;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin-left: 45px;
  margin-top: 22px;
  margin-bottom: 10px;
`;

const PopularProducts = () => {
  return (
    <Wrapper>
      <Title>Popular Items</Title>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      >
        {productsPopularData.map((item, index) => {
          return <Product key={index} img={item.img} title={item.title} price={item.price} />;
        })}
      </ScrollView>
    </Wrapper>
  );
};

export default PopularProducts;
