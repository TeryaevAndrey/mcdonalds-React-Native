import React from "react";
import styled from "styled-components/native";
import Back from "../Back";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 50px;
  margin-left: auto;
  padding: 0 20px;
`;

const ClearBtn = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ClearText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  color: #a0a0a0;
  margin-left: 4px;
`;

const NotificationHeader = ({ navigation }) => {
  return (
    <Wrapper>
      <ClearBtn>
        <IconMaterialIcons name="clear-all" size="24" color="#A0A0A0" />
        <ClearText>Clear all</ClearText>
      </ClearBtn>
    </Wrapper>
  );
};

export default NotificationHeader;
