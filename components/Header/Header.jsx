import React from "react";
import styled from "styled-components/native";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  margin-top: 55px;
`;

const Location = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LocationText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #000;
`;

const Header = () => {
  return (
    <Wrapper>
      <Location>
        <IconIonicons name="md-location-sharp" size="33" color="#D52B1E" />
        <LocationText>Your location ...</LocationText>
      </Location>
      <TouchableOpacity>
        <IconAntDesign name="shoppingcart" size="33" color="#000" />
      </TouchableOpacity>
    </Wrapper>
  );
};

export default Header;
