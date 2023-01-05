import React from 'react';
import { Image } from 'react-native';
import styled from "styled-components/native";

const Wrapper = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`;

const SocialsItem = ({img}) => {
  return (
    <Wrapper>
      <Image style={{width: "100%", height: "100%"}} source={img} resizeMode="contain" />
    </Wrapper>
  );
};

export default SocialsItem;