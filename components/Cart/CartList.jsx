import React from 'react';
import styled from "styled-components/native";
import CartItem from './CartItem';

const Wrapper = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 12px;
`;

const CartList = () => {
  return (
    <Wrapper>
      <CartItem />
    </Wrapper>
  );
};

export default CartList;