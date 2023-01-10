import React from "react";
import { TextInput, View } from "react-native";
import styled from "styled-components/native";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  min-height: 139px;
  width: 100%;
  margin-top: ${props => props.mt ? "26px" : "0"}
`;

const ImgWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7d8ab;
  border-radius: 40px;
  width: 140px;
  height: 140px;
`;

const Img = styled.Image`
  width: 128px;
  height: 100px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  color: #000;
`;

const Counter = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CounterBtn = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8b756;
  border-radius: 5px;
`;

const CounterBtnText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: #000;
`;

const CounterValue = styled.Text`
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  color: #000;
  margin: 0 10px;
`;

const Price = styled.Text`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  color: #db4b40;
`;

const Input = styled.TextInput`
  max-width: 205px;
  width: 100%;
  min-height: 57px;
  background: #F2F2F2;
  marginTop: 15px;
  border-radius: 8px;
  padding: 8px 10px;
`;

const CartItem = ({mt}) => {
  return (
    <Wrapper mt={mt}>
      <ImgWrapper>
        <Img
          source={require("../../assets/cart/products/1.png")}
          resizeMode="contain"
        />
      </ImgWrapper>
      <View style={{marginLeft: 30, maxWidth: 205, width: "100%"}}>
        <Title>Deluxe Quarter Pounder</Title>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 5
          }}
        >
          <Counter>
            <CounterBtn>
              <CounterBtnText>-</CounterBtnText>
            </CounterBtn>
            <CounterValue>0</CounterValue>
            <CounterBtn>
              <CounterBtnText>+</CounterBtnText>
            </CounterBtn>
          </Counter>
          <Price>$5.98</Price>
        </View>
        <Input multiline={true} numberOfLines={4} placeholder="Add notes here" />
      </View>
    </Wrapper>
  );
};

export default CartItem;
