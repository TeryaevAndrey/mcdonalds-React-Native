import React from 'react';
import styled from "styled-components/native";
import IconFeather from "react-native-vector-icons/Feather";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row; 
  align-items: center;
  margin-top: 20px;
  background: #E8E6E6;
  border-radius: 12px;
  max-width: 375px;
  width: 100%;
  min-height: 40px;
  padding: 7px 60px;
`;

const Field = styled.TextInput`
  margin-left: 10px;
  width: 100%;
`;

const Search = () => {
  return (
    <Wrapper>
      <IconFeather name="search" size="25" color="#898787" />
      <Field placeholder="Search for a restaurant or menu" placeholderTextInput="#B4B3B3" />
    </Wrapper>
  );
};

export default Search;