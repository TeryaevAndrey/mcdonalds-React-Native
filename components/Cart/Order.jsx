import React from 'react';
import { View } from 'react-native';
import styled from "styled-components/native";

const Wrapper = styled.View`
  padding: 0 43px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const PriceTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  color: #585858;
`;

const PriceValue = styled.Text`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #8B8B8B;
`;

const PriceBtn = styled.TouchableOpacity`
  background: #D52B1E;
  border-radius: 10px;
  padding: 12px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 214px;
  width: 100%;
  min-height: 52px;
`;

const PriceBtnText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  line-height: 27px;
  color: #fff;
`;

const Order = () => {
  return (
    <Wrapper>
      <View>
        <PriceTitle>Total: </PriceTitle>
        <PriceValue>$10.47</PriceValue>
      </View>
      <PriceBtn>
        <PriceBtnText>
          Order
        </PriceBtnText>
      </PriceBtn>
    </Wrapper>
  );
};

export default Order;