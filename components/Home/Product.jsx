import React from "react";
import styled from "styled-components/native";
import IconEntypo from "react-native-vector-icons/Entypo";
import { Path, Svg } from "react-native-svg";
import IconIonicons from "react-native-vector-icons/Ionicons";

const Wrapper = styled.View`
  width: 153px;
  height: 195px;
  background: #fff;
  border-radius: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: #f6f6f6;
  position: relative;
  padding: 10px;
  margin-right: 15px;
`;

const Img = styled.Image`
  width: 100%;
  height: 105px;
`;

const LikeImg = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
`;

const Title = styled.Text`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: #000;
`;

const Raiting = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Price = styled.Text`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #000;
`;

const AddIcon = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  position: absolute; 
  right: 9px;
  bottom: 6px;
`;

const Product = ({ title, price, img }) => {
  return (
    <Wrapper>
      <LikeImg>
        <Svg
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M11.0065 1.14379C12.8162 -0.0133707 15.0312 -0.309424 17.0727 0.332974C18.8483 0.885162 20.3248 2.15352 21.1589 3.84321C22.1342 5.89114 22.267 8.2509 21.5277 10.3989C20.8473 12.3764 19.7318 14.169 18.2665 15.6396C17.3058 16.627 16.2706 17.5362 15.1703 18.3588L15.1121 18.4082C14.7466 18.6543 14.255 18.5576 14.0056 18.1907C13.8788 18.0134 13.8279 17.7914 13.8645 17.5753C13.901 17.3592 14.022 17.1674 14.1997 17.0437C15.2321 16.2658 16.2055 15.4097 17.1115 14.4827C18.4163 13.1986 19.4128 11.6252 20.0233 9.88476C20.6105 8.15052 20.4917 6.24895 19.6933 4.60458C19.0508 3.311 17.9188 2.33987 16.5583 1.91505C14.8229 1.36222 12.9322 1.69735 11.4821 2.81486C11.1938 3.03242 10.7998 3.03242 10.5115 2.81486C9.062 1.6958 7.17057 1.36053 5.43527 1.91505C4.06556 2.33048 2.9223 3.29868 2.27113 4.59469C1.49078 6.23784 1.37915 8.12851 1.96054 9.8551C2.57363 11.5913 3.56981 13.161 4.87232 14.4431C6.79691 16.3231 8.91916 17.9812 11.2006 19.3871C11.4908 19.5922 11.6184 19.9642 11.5167 20.3087C11.415 20.6533 11.1072 20.8919 10.7541 20.9C10.595 20.9009 10.4393 20.8527 10.3076 20.7615C7.93107 19.2972 5.72084 17.5695 3.71731 15.6099C2.24392 14.1442 1.12429 12.3503 0.446411 10.3693C-0.267288 8.2242 -0.120783 5.87881 0.854061 3.84321C1.68817 2.15352 3.16464 0.885162 4.94026 0.332974C6.98177 -0.309424 9.19673 -0.0133707 11.0065 1.14379ZM15.1536 4.39665L15.2771 4.39693C16.7243 4.86236 17.7545 6.1693 17.888 7.70941L17.8942 7.83848C17.889 8.00989 17.8305 8.17646 17.7255 8.31325C17.5941 8.48425 17.4009 8.59442 17.1892 8.6191C16.7447 8.67762 16.3371 8.35962 16.2768 7.90717C16.2362 6.99338 15.6389 6.20305 14.7821 5.92957C14.4635 5.72695 14.322 5.32885 14.4394 4.96542C14.5568 4.602 14.9027 4.36727 15.2771 4.39693L15.1536 4.39665Z"
            fill="#FF0000"
          />
        </Svg>
      </LikeImg>

      <Img
        source={require("../../assets/products/1.png")}
        resizeMode="contain"
      />
      <Title>{title}</Title>
      <Raiting>
        <IconEntypo name="star" size="10" color="#FFEA28" />
        <IconEntypo name="star" size="10" color="#FFEA28" style={{ marginLeft: 3 }} />
        <IconEntypo name="star" size="10" color="#FFEA28" style={{ marginLeft: 3 }} />
        <IconEntypo name="star" size="10" color="#FFEA28" style={{ marginLeft: 3 }} />
        <IconEntypo name="star" size="10" color="#FFEA28" style={{ marginLeft: 3 }} />
      </Raiting>
      <Price>{`$${price}`}</Price>
      <AddIcon>
        <IconIonicons name="add-circle-sharp" size="24" color="#D52B1E" />
      </AddIcon>
    </Wrapper>
  );
};

export default Product;
