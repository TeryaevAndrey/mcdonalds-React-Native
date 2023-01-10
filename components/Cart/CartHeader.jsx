import React from 'react';
import styled from "styled-components/native";
import Back from '../Back';

const Wrapper = styled.View`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50px;  
  padding: 0 26px;
`;

const Title= styled.Text`
  font-size: 24px;
  font-weight: 600;
  line-height: 33px;
  color: #000;
  text-align: center;
  flex: 1;
  margin-right: 24px;
`;

const CartHeader = ({navigation}) => {
  return (
    <Wrapper>
      <Back onPress={() => navigation.goBack()} color="#000" style={{marginRight: 'auto'}} />
      <Title>Cart</Title>
    </Wrapper>
  );
};

export default CartHeader;