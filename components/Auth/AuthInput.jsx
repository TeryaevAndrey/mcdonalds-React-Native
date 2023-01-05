import React from "react";
import styled from "styled-components/native";
import IconFontAwesome from "react-native-vector-icons/FontAwesome5";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #fff;
  padding: 10px 0;
  margin-top: ${(props) => (props.mt ? "20px" : "0")};
  max-width: 256px;
`;

const Field = styled.TextInput`
  color: #fff;
  font-size: 13px;
  font-weight: 300;
  line-height: 18px;
  flex: 1;
`;

const WrapperImg = styled.View`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;

const AuthInput = ({ img, placeholder, isPassword = false, mt, onChangeText, value }) => {
  return (
    <Wrapper mt={mt}>
      <WrapperImg>{img}</WrapperImg>
      <Field
        placeholder={placeholder}
        placeholderTextColor="#fff"
        secureTextEntry={isPassword}
        onChangeText={onChangeText}
        value={value}
      />
    </Wrapper>
  );
};

export default AuthInput;
