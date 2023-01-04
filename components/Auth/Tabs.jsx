import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  background-color: #fff;
  border-radius: 15px;
  margin-top: 45px;
  min-height: 31px;
  max-width: 256px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const Btn = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 125px;
  width: 100%;
  min-height: 25px;
  background: ${(props) => (props.active ? "#DB4B40" : "#fff")},
  border-radius: 15px;
`;

const BtnText = styled.Text`
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  color: ${(props) => (props.active ? "#fff" : "#000")};
`;

const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Wrapper>
      <Btn active={activeTab === 0 ? true : false} onPress={() => setActiveTab(0)}>
        <BtnText active={activeTab === 0 ? true : false}>Sign in</BtnText>
      </Btn>
      <Btn active={activeTab === 1 ? true : false} onPress={() => setActiveTab(1)}>
        <BtnText active={activeTab === 1 ? true : false}>Sign in</BtnText>
      </Btn>
    </Wrapper>
  );
};

export default Tabs;