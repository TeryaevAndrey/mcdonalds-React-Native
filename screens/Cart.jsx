import React from 'react';
import styled from "styled-components/native";
import CartHeader from '../components/Cart/CartHeader';
import CartList from '../components/Cart/CartList';
import Empty from '../components/Cart/Empty';
import Order from '../components/Cart/Order';

const Wrapper = styled.View`
  height: 100%;
  display: flex;
  align-items: center;
  background: #fff;
`;

const Cart = ({navigation}) => {
  return (
    <Wrapper>
      <CartHeader navigation={navigation} />
      <CartList />
      <Order />
    </Wrapper>
  );
};

export default Cart;