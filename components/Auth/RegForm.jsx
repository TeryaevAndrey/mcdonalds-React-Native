import React from 'react';
import styled from "styled-components/native";
import Tabs from "./Tabs";
import { LinearGradient } from "expo-linear-gradient";
import AuthInput from './AuthInput';
import IconAnt from "react-native-vector-icons/AntDesign";
import IconFontisto from "react-native-vector-icons/Fontisto";

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

const Btn = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 101px;
  width: 100%;
  min-height: 36px;
  border-radius: 40px;
  background: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: #ff2211;
  margin-top: 60px;
  margin-right: auto;
  padding: 9px 20px;
`;

const BtnText = styled.Text`
  font-size: 13px;
  font-weight: 700;
  color: #ff2211;
`;

const RegForm = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordRepeat, setPasswordRepeat] = React.useState("");

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
          opacity: 0.5,
        }}
      >
      </LinearGradient>
      <Tabs />
      <Inputs>
        <AuthInput
          img={<IconAnt name="user" color="#ccc" size={20} />}
          placeholder="Username or Email"
          onChangeText={(text) => setUserName(text)}
          value={userName}
        />
        <AuthInput
          img={<IconFontisto name="unlocked" color="#ccc" size={20} />}
          placeholder="Password"
          isPassword={true}
          mt
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <AuthInput
          img={<IconFontisto name="unlocked" color="#ccc" size={20} />}
          placeholder="Confirm Password"
          isPassword={true}
          mt
          onChangeText={(text) => setPasswordRepeat(text)}
          value={passwordRepeat}
        />
      </Inputs>
      <Btn>
        <BtnText>Sign up</BtnText>
      </Btn>
    </Wrapper>
  );
};

export default RegForm;