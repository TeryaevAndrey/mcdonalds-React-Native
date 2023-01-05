import React from 'react';
import styled from "styled-components/native";
import SocialsItem from './SocialsItem';

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 202px;
  margin: 0 auto;
  margin-top: 40px;
`;

const Socials = () => {
  return (
    <Wrapper>
      <SocialsItem img={require("../../../assets/auth/facebook.png")} />
      <SocialsItem img={require("../../../assets/auth/apple.png")} />
      <SocialsItem img={require("../../../assets/auth/google.png")} />
    </Wrapper>
  );
};

export default Socials;