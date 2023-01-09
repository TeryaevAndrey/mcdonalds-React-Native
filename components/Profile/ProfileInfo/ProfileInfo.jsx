import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import styled from "styled-components/native";
import Content from "./Content";
import Header from "./Header";

const Wrapper = styled.View`
  margin: 0 26px;
  max-width: 362px;
  width: 100%;
  min-height: 204px;
  margin-top: 13px;
  background: transparent;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
`;

const Container = styled.View`
  padding: 19px 24px;
`;

const ProfileInfo = () => {
  return (
    <Wrapper>
      <LinearGradient
        colors={[
          "rgba(255, 255, 255, 0.35)",
          "rgba(255, 255, 255, 0.25)",
          "rgba(255, 255, 255, 0.35)",
        ]}
        style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <Container>
          <Header />
          <Content />
        </Container>
      </LinearGradient>
    </Wrapper>
  );
};

export default ProfileInfo;
