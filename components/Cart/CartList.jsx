import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import CartItem from "./CartItem";

const Wrapper = styled.ScrollView`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 12px;
  margin-top: 50px;
`;

const CartList = () => {
  return (
    <Wrapper>
      <CartItem />
      <CartItem mt />
      <CartItem mt />
      <CartItem mt />
    </Wrapper>
  );
};

export default CartList;
