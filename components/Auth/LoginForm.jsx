import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import styled from "styled-components/native";
import AuthInput from "./AuthInput";
import Tabs from "./Tabs";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconFontisto from "react-native-vector-icons/Fontisto"

const Wrapper = styled.View`
  position: relative;
  max-width: 354px;
  width: 100%;
  min-height: 503px;
  padding: 35px 49px;
  border-radius: 20px;
  border: 0.97549px solid rgba(255, 255, 255, 0.3);
`;

const Inputs = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

const LoginForm = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
      <Wrapper>
      <LinearGradient 
        colors={['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.15)']}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          borderRadius: "20px",
          opacity: 0.55,
        }}
      >
      </LinearGradient>
      <Tabs />
      <Inputs>
        <AuthInput img={<IconAnt name="user" color="#ccc" size={20} />} placeholder="Username or Email" onChangeText={text => setUserName(text)} value={userName} />
        <AuthInput img={<IconFontisto name="unlocked" color="#ccc" size={20} />} placeholder="Password" isPassword={true} mt onChangeText={text => setPassword(text)} value={password} />
      </Inputs>
    </Wrapper>
  );
};

export default LoginForm;
