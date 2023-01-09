import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Wrapper = styled.View`
  margin-top: 24px;
  font-size: 14px;
  font-weight: 500px;
  line-height: 19px;
  color: #eee;
`;

const Name = styled.Text`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  text-transform: uppercase;
  color: #eee;
`;

const EmailBtn = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #EEE;
  align-self: flex-start;
`;

const Email = styled.Text`
  margin-top: 4px;
  color: #eee;
`;

const Tel = styled.Text`
  margin-top: 4px;
  color: #eee;
`;

const Content = () => {
  return (
    <Wrapper>
      <Name>Your name</Name>
      <EmailBtn>
        <Email>youremail@gmail.com</Email>
      </EmailBtn>
      <Tel>+84123456789</Tel>
    </Wrapper>
  );
};

export default Content;
