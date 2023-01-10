import React from "react";
import styled from "styled-components/native";
import { Dimensions, Image } from "react-native";

const win = Dimensions.get("window");

const Wrapper = styled.View`
  display: flex;
  height: 100%;
  margin-top: 100px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 300;
  line-height: 27px;
  color: #949292;
  text-align: center;
`;

const ImgWrapper = styled.View`
  max-width: 504px;
  width: 100%;
  height: auto;
`;

const Btn = styled.TouchableOpacity`
  width: 140px;
  min-height: 50px;
  background: #D52B1E;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 20px;
  margin: 0 auto;
`;

const BtnText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  color: #fff;
`;

const Empty = ({navigation}) => {
  return (
    <Wrapper>
      <Title>Your cart is empty.</Title>
      <ImgWrapper>
        <Image source={require("../../assets/cart/empty.png")} resizeMode="contain" />
      </ImgWrapper>
      <Btn onPress={() => navigation.navigate("Home")}>
        <BtnText>Order now</BtnText>
      </Btn>
    </Wrapper>
  );
};

export default Empty;
