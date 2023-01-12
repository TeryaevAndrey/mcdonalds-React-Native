import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import IconEntypo from "react-native-vector-icons/Entypo";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Wrapper = styled.View`
  width: 100%;
  height: 200px;
  background: #f6f6f6;
  borderradius: 30px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 15px;
  position: relative;
`;

const Img = styled.Image`
  width: 135px;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: 700;
  line-height: 24px;
  color: #000;
  padding-top: 15px;
`;

const Raiting = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Delete = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  right: 15px;
`;

const Price = styled.Text`
  color: #db4b40;
  font-size: 30px;
  font-weight: 700;
  margin-top: 10px;
`;

const Btn = styled.TouchableOpacity`
  width: 100%;
  min-width: 150px;
  min-height: 50px;
  background: #db4b40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-top: 10px;
`;

const BtnText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
`;

const FavouriteProduct = () => {
  return (
    <Wrapper>
      <Img
        source={require("../../assets/products/1.png")}
        resizeMode="contain"
      />
      <View>
        <Title>Burger</Title>
        <Raiting>
          <IconEntypo name="star" size="20" color="#FFEA28" />
          <IconEntypo
            name="star"
            size="20"
            color="#FFEA28"
            style={{ marginLeft: 3 }}
          />
          <IconEntypo
            name="star"
            size="20"
            color="#FFEA28"
            style={{ marginLeft: 3 }}
          />
          <IconEntypo
            name="star"
            size="20"
            color="#FFEA28"
            style={{ marginLeft: 3 }}
          />
          <IconEntypo
            name="star"
            size="20"
            color="#FFEA28"
            style={{ marginLeft: 3 }}
          />
        </Raiting>
        <Price>$0.49</Price>
        <Btn>
          <BtnText>Add to cart</BtnText>
        </Btn>
      </View>
      <Delete>
        <IconMaterialCommunityIcons name="delete" size="25" color="#db4b40" />
      </Delete>
    </Wrapper>
  );
};

export default FavouriteProduct;
