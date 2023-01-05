import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #fff;
  padding: 10px 0;
`;

const Field = styled.TextInput`
  color: #fff;
  font-size: 13px;
  font-weight: 300;
  line-height: 18px;
  width: 100%;
`;

const AuthInput = () => {
  return (
    <Wrapper>
      <Icon name="user" color="#ccc" size={20} style={{paddingLeft: 5, paddingRight: 5}} />
      <Field placeholder="Username or Email" placeholderTextColor="#fff" />
    </Wrapper>
  );
};

export default AuthInput;
