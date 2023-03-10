import React from 'react';
import styled from "styled-components/native";

const Wrapper = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;  

const SidebarItem = ({img, onPress}) => {
  return (
    <Wrapper onPress={onPress}>
      {img}
    </Wrapper>
  );
};

export default SidebarItem;