import React from "react";
import styled from "styled-components/native";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native";

const Wrapper = styled.View`
  padding: 9px 30px;
  padding-bottom: 11px;
  padding-right: 60px;
  width: 100%;
  background: #f6f6f6;
  border-radius: 8px;
  min-height: 85px;
  position: relative;
  margin-top: 20px;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  margin-left: 10px;
`;

const Description = styled.Text`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #000;
  margin-top: 7px;
`;

const NotificationItem = ({ title, text }) => {
  return (
    <Wrapper
      style={{
        shadowColor: "rgb(41, 43, 46)",
        shadowOffset: { width: 0, height: 25 },
        shadowOpacity: 0.1,
        shadowRadius: 38,
        elevation: -20,
      }}
    >
      <Header>
        <IconFontAwesome5 name="hamburger" size="24" color="#FFCD7D" />
        <Title>{title}</Title>
      </Header>
      <Description>{text}</Description>
      <TouchableOpacity style={{ position: "absolute", top: 14, right: 14 }}>
        <IconIonicons name="close-sharp" size="24" color="#C6C6C6" />
      </TouchableOpacity>
    </Wrapper>
  );
};

export default NotificationItem;
