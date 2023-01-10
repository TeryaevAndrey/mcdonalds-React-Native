import React from 'react';
import { Image } from 'react-native';
import styled from "styled-components/native";

const Wrapper = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
`;

const Profile = ({onPress}) => {
  return (
    <Wrapper onPress={onPress}>
      <Image source={require("../../assets/sidebar/avatar.jpg")} resizeMode="contain" />
    </Wrapper>
  );
};

export default Profile;